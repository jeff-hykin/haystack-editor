/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Haystack Software Inc. All rights reserved.
 *  Licensed under the PolyForm Strict License 1.0.0. See License.txt in the project root for
 *  license information.
 *--------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See code-license.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as path from "path"
import { TabInputText, Uri, window, workspace } from "vscode"
import { IIPCHandler, IIPCServer } from "./ipc/ipcServer"
import { ITerminalEnvironmentProvider } from "./terminal"
import { EmptyDisposable, IDisposable } from "./util"

interface GitEditorRequest {
  commitMessagePath?: string
}

export class GitEditor implements IIPCHandler, ITerminalEnvironmentProvider {
  private env: { [key: string]: string }
  private disposable: IDisposable = EmptyDisposable

  readonly featureDescription = "git editor"

  constructor(ipc?: IIPCServer) {
    if (ipc) {
      this.disposable = ipc.registerHandler("git-editor", this)
    }

    this.env = {
      GIT_EDITOR: `"${path.join(__dirname, ipc ? "git-editor.sh" : "git-editor-empty.sh")}"`,
      HAYSTACK_GIT_EDITOR_NODE: process.execPath,
      HAYSTACK_GIT_EDITOR_EXTRA_ARGS: "",
      HAYSTACK_GIT_EDITOR_MAIN: path.join(__dirname, "git-editor-main.js"),
    }
  }

  async handle({ commitMessagePath }: GitEditorRequest): Promise<any> {
    if (commitMessagePath) {
      const uri = Uri.file(commitMessagePath)
      const doc = await workspace.openTextDocument(uri)
      await window.showTextDocument(doc, { preview: false })

      return new Promise((c) => {
        const onDidClose = window.tabGroups.onDidChangeTabs(async (tabs) => {
          if (
            tabs.closed.some(
              (t) =>
                t.input instanceof TabInputText &&
                t.input.uri.toString() === uri.toString(),
            )
          ) {
            onDidClose.dispose()
            return c(true)
          }
        })
      })
    }
  }

  getEnv(): { [key: string]: string } {
    const config = workspace.getConfiguration("git")
    return config.get<boolean>("useEditorAsCommitInput") ? this.env : {}
  }

  getTerminalEnv(): { [key: string]: string } {
    const config = workspace.getConfiguration("git")
    return config.get<boolean>("useEditorAsCommitInput") &&
      config.get<boolean>("terminalGitEditor")
      ? this.env
      : {}
  }

  dispose(): void {
    this.disposable.dispose()
  }
}

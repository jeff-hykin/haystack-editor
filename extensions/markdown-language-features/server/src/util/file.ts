/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Haystack Software Inc. All rights reserved.
 *  Licensed under the PolyForm Strict License 1.0.0. See License.txt in the project root for
 *  license information.
 *--------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See code-license.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { TextDocument } from "vscode-languageserver-textdocument"
import { URI, Utils } from "vscode-uri"
import { LsConfiguration } from "../config"

export function looksLikeMarkdownPath(
  config: LsConfiguration,
  resolvedHrefPath: URI,
) {
  return config.markdownFileExtensions.includes(
    Utils.extname(resolvedHrefPath).toLowerCase().replace(".", ""),
  )
}

export function isMarkdownFile(document: TextDocument) {
  return document.languageId === "markdown"
}

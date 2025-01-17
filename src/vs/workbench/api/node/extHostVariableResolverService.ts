/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Haystack Software Inc. All rights reserved.
 *  Licensed under the PolyForm Strict License 1.0.0. See License.txt in the project root for
 *  license information.
 *--------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See code-license.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { homedir } from "os"
import { ExtHostVariableResolverProviderService } from "vs/workbench/api/common/extHostVariableResolverService"

export class NodeExtHostVariableResolverProviderService extends ExtHostVariableResolverProviderService {
  protected override homeDir(): string | undefined {
    return homedir()
  }
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Haystack Software Inc. All rights reserved.
 *  Licensed under the PolyForm Strict License 1.0.0. See License.txt in the project root for
 *  license information.
 *--------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See code-license.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IChecksumService } from "vs/platform/checksum/common/checksumService"
import { registerSharedProcessRemoteService } from "vs/platform/ipc/electron-sandbox/services"

registerSharedProcessRemoteService(IChecksumService, "checksum")

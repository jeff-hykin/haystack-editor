/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Haystack Software Inc. All rights reserved.
 *  Licensed under the PolyForm Strict License 1.0.0. See License.txt in the project root for
 *  license information.
 *--------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See code-license.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// This is a one-off/safe import, to expose to outside contfibs as in general we don't want them
// to touch terminalContrib either.
// eslint-disable-next-line local/code-import-patterns
export { TerminalChatController } from "vs/workbench/contrib/terminalContrib/chat/browser/terminalChatController"
// eslint-disable-next-line local/code-import-patterns
export { TerminalChatContextKeys } from "vs/workbench/contrib/terminalContrib/chat/browser/terminalChat"

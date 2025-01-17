/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Haystack Software Inc. All rights reserved.
 *  Licensed under the PolyForm Strict License 1.0.0. See License.txt in the project root for
 *  license information.
 *--------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See code-license.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Registry } from "vs/platform/registry/common/platform"
import {
  IWorkbenchContributionsRegistry,
  Extensions as WorkbenchExtensions,
} from "vs/workbench/common/contributions"
import { WorkspaceTags } from "vs/workbench/contrib/tags/electron-sandbox/workspaceTags"
import { LifecyclePhase } from "vs/workbench/services/lifecycle/common/lifecycle"

// Register Workspace Tags Contribution
Registry.as<IWorkbenchContributionsRegistry>(
  WorkbenchExtensions.Workbench,
).registerWorkbenchContribution(WorkspaceTags, LifecyclePhase.Eventually)

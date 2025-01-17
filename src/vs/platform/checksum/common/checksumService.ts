/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Haystack Software Inc. All rights reserved.
 *  Licensed under the PolyForm Strict License 1.0.0. See License.txt in the project root for
 *  license information.
 *--------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See code-license.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { URI } from "vs/base/common/uri"
import { createDecorator } from "vs/platform/instantiation/common/instantiation"

export const IChecksumService =
  createDecorator<IChecksumService>("checksumService")

export interface IChecksumService {
  readonly _serviceBrand: undefined

  /**
   * Computes the checksum of the contents of the resource.
   */
  checksum(resource: URI): Promise<string>
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Haystack Software Inc. All rights reserved.
 *  Licensed under the PolyForm Strict License 1.0.0. See License.txt in the project root for
 *  license information.
 *--------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See code-license.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export function startsWith(haystack: string, needle: string): boolean {
  if (haystack.length < needle.length) {
    return false
  }

  for (let i = 0; i < needle.length; i++) {
    if (haystack[i] !== needle[i]) {
      return false
    }
  }

  return true
}

/**
 * Determines if haystack ends with needle.
 */
export function endsWith(haystack: string, needle: string): boolean {
  const diff = haystack.length - needle.length
  if (diff > 0) {
    return haystack.lastIndexOf(needle) === diff
  } else if (diff === 0) {
    return haystack === needle
  } else {
    return false
  }
}

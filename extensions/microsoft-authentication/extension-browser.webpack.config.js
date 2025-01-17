/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Haystack Software Inc. All rights reserved.
 *  Licensed under the PolyForm Strict License 1.0.0. See License.txt in the project root for
 *  license information.
 *--------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See code-license.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

//@ts-check

"use strict"

const path = require("path")
const withBrowserDefaults = require("../shared.webpack.config").browser

module.exports = withBrowserDefaults({
  context: __dirname,
  node: {
    global: true,
    __filename: false,
    __dirname: false,
  },
  entry: {
    extension: "./src/extension.ts",
  },
  resolve: {
    alias: {
      "./node/crypto": path.resolve(__dirname, "src/browser/crypto"),
      "./node/authServer": path.resolve(__dirname, "src/browser/authServer"),
      "./node/buffer": path.resolve(__dirname, "src/browser/buffer"),
      "./node/fetch": path.resolve(__dirname, "src/browser/fetch"),
    },
  },
})

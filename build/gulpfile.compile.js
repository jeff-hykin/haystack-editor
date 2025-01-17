/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Haystack Software Inc. All rights reserved.
 *  Licensed under the PolyForm Strict License 1.0.0. See License.txt in the project root for
 *  license information.
 *--------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See code-license.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

"use strict"

const gulp = require("gulp")
const util = require("./lib/util")
const task = require("./lib/task")
const compilation = require("./lib/compilation")
const optimize = require("./lib/optimize")

function makeCompileBuildTask(disableMangle) {
  return task.series(
    util.rimraf("out-build"),
    util.buildWebNodePaths("out-build"),
    compilation.compileApiProposalNamesTask,
    compilation.compileTask("src", "out-build", true, { disableMangle }),
    optimize.optimizeLoaderTask("out-build", "out-build", true),
  )
}

// Full compile, including nls and inline sources in sourcemaps, mangling, minification, for build
const compileBuildTask = task.define(
  "compile-build",
  makeCompileBuildTask(false),
)
gulp.task(compileBuildTask)
exports.compileBuildTask = compileBuildTask

// Full compile for PR ci, e.g no mangling
const compileBuildTaskPullRequest = task.define(
  "compile-build-pr",
  makeCompileBuildTask(true),
)
gulp.task(compileBuildTaskPullRequest)
exports.compileBuildTaskPullRequest = compileBuildTaskPullRequest

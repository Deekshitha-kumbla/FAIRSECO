/*
This program has been developed by students from the bachelor Computer Science at
Utrecht University within the Software Project course.
© Copyright Utrecht University (Department of Information and Computing Sciences)
 */

/**
 * This module contains variables that need to be mocked in the unit tests.
 *
 * @module
 */

import * as artifact from "@actions/artifact";

import { Artifact } from "./helperfunctions/artifact";

/**
 * The `Artifact` object that will be used by tortellini.ts.
 * Can be overridden by mocking this module in jest for unit testing.
 */
export const artifactObject: Artifact = artifact;

/**
 * The path to the directory the artifact produced by tortellini will be downloaded to.
 * Can be overriden by mocking this module in jest for unit testing.
 */
export const destination: string = ".tortellini-artifact";

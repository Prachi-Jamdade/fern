/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors/index";
import * as core from "../../../../core";

export class BadRequest extends errors.SeedBasicAuthEnvironmentVariablesError {
    constructor(rawResponse?: core.RawResponse) {
        super({
            message: "BadRequest",
            statusCode: 400,
            rawResponse: rawResponse,
        });
        Object.setPrototypeOf(this, BadRequest.prototype);
    }
}

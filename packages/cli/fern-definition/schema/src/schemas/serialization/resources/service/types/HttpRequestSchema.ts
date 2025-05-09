/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { HttpPathParameterSchema } from "./HttpPathParameterSchema";
import { HttpQueryParameterSchema } from "./HttpQueryParameterSchema";
import { HttpHeaderSchema } from "./HttpHeaderSchema";
import { HttpRequestBodySchema } from "./HttpRequestBodySchema";
import { WithName } from "../../commons/types/WithName";
import { WithDocsSchema } from "../../commons/types/WithDocsSchema";

export const HttpRequestSchema: core.serialization.ObjectSchema<
    serializers.HttpRequestSchema.Raw,
    FernDefinition.HttpRequestSchema
> = core.serialization
    .object({
        "content-type": core.serialization.string().optional(),
        "path-parameters": core.serialization.record(core.serialization.string(), HttpPathParameterSchema).optional(),
        "query-parameters": core.serialization.record(core.serialization.string(), HttpQueryParameterSchema).optional(),
        headers: core.serialization.record(core.serialization.string(), HttpHeaderSchema).optional(),
        body: HttpRequestBodySchema.optional(),
    })
    .extend(WithName)
    .extend(WithDocsSchema);

export declare namespace HttpRequestSchema {
    export interface Raw extends WithName.Raw, WithDocsSchema.Raw {
        "content-type"?: string | null;
        "path-parameters"?: Record<string, HttpPathParameterSchema.Raw> | null;
        "query-parameters"?: Record<string, HttpQueryParameterSchema.Raw> | null;
        headers?: Record<string, HttpHeaderSchema.Raw> | null;
        body?: HttpRequestBodySchema.Raw | null;
    }
}

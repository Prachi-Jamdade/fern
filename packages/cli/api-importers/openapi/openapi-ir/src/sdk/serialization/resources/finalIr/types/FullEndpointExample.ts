/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { PathParameterExample } from "./PathParameterExample";
import { QueryParameterExample } from "./QueryParameterExample";
import { HeaderExample } from "./HeaderExample";
import { EndpointResponseExample } from "./EndpointResponseExample";
import { CustomCodeSample } from "./CustomCodeSample";
import { WithDescription } from "../../commons/types/WithDescription";

export const FullEndpointExample: core.serialization.ObjectSchema<
    serializers.FullEndpointExample.Raw,
    FernOpenapiIr.FullEndpointExample
> = core.serialization
    .objectWithoutOptionalProperties({
        name: core.serialization.string().optional(),
        pathParameters: core.serialization.list(PathParameterExample).optional(),
        queryParameters: core.serialization.list(QueryParameterExample).optional(),
        headers: core.serialization.list(HeaderExample).optional(),
        request: core.serialization.lazy(() => serializers.FullExample).optional(),
        response: EndpointResponseExample.optional(),
        codeSamples: core.serialization.list(CustomCodeSample),
    })
    .extend(WithDescription);

export declare namespace FullEndpointExample {
    export interface Raw extends WithDescription.Raw {
        name?: string | null;
        pathParameters?: PathParameterExample.Raw[] | null;
        queryParameters?: QueryParameterExample.Raw[] | null;
        headers?: HeaderExample.Raw[] | null;
        request?: serializers.FullExample.Raw | null;
        response?: EndpointResponseExample.Raw | null;
        codeSamples: CustomCodeSample.Raw[];
    }
}

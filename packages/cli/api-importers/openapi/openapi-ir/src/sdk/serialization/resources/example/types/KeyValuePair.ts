/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { PrimitiveExample } from "./PrimitiveExample";

export const KeyValuePair: core.serialization.ObjectSchema<serializers.KeyValuePair.Raw, FernOpenapiIr.KeyValuePair> =
    core.serialization.objectWithoutOptionalProperties({
        key: PrimitiveExample,
        value: core.serialization.lazy(() => serializers.FullExample),
    });

export declare namespace KeyValuePair {
    export interface Raw {
        key: PrimitiveExample.Raw;
        value: serializers.FullExample.Raw;
    }
}

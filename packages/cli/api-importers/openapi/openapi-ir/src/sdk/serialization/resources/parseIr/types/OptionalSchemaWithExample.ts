/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { WithSdkGroupName } from "../../commons/types/WithSdkGroupName";
import { WithNamespace } from "../../commons/types/WithNamespace";
import { WithName } from "../../commons/types/WithName";
import { WithDescription } from "../../commons/types/WithDescription";
import { WithAvailability } from "../../commons/types/WithAvailability";
import { WithTitle } from "../../commons/types/WithTitle";
import { WithInline } from "../../commons/types/WithInline";

export const OptionalSchemaWithExample: core.serialization.ObjectSchema<
    serializers.OptionalSchemaWithExample.Raw,
    FernOpenapiIr.OptionalSchemaWithExample
> = core.serialization
    .objectWithoutOptionalProperties({
        value: core.serialization.lazy(() => serializers.SchemaWithExample),
    })
    .extend(WithSdkGroupName)
    .extend(WithNamespace)
    .extend(WithName)
    .extend(WithDescription)
    .extend(WithAvailability)
    .extend(WithTitle)
    .extend(WithInline);

export declare namespace OptionalSchemaWithExample {
    export interface Raw
        extends WithSdkGroupName.Raw,
            WithNamespace.Raw,
            WithName.Raw,
            WithDescription.Raw,
            WithAvailability.Raw,
            WithTitle.Raw,
            WithInline.Raw {
        value: serializers.SchemaWithExample.Raw;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernIr from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { NameAndWireValue } from "../../../../commons/types/NameAndWireValue";
import { NamedParameter } from "./NamedParameter";

export const SingleDiscriminatedUnionTypeSingleProperty: core.serialization.ObjectSchema<
    serializers.dynamic.SingleDiscriminatedUnionTypeSingleProperty.Raw,
    FernIr.dynamic.SingleDiscriminatedUnionTypeSingleProperty
> = core.serialization.objectWithoutOptionalProperties({
    typeReference: core.serialization.lazy(() => serializers.dynamic.TypeReference),
    discriminantValue: NameAndWireValue,
    properties: core.serialization.list(NamedParameter).optional(),
});

export declare namespace SingleDiscriminatedUnionTypeSingleProperty {
    export interface Raw {
        typeReference: serializers.dynamic.TypeReference.Raw;
        discriminantValue: NameAndWireValue.Raw;
        properties?: NamedParameter.Raw[] | null;
    }
}

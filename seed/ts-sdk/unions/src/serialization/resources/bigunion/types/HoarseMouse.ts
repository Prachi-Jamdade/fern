/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedUnions from "../../../../api/index";
import * as core from "../../../../core";

export const HoarseMouse: core.serialization.ObjectSchema<serializers.HoarseMouse.Raw, SeedUnions.HoarseMouse> =
    core.serialization.object({
        value: core.serialization.string(),
    });

export declare namespace HoarseMouse {
    export interface Raw {
        value: string;
    }
}

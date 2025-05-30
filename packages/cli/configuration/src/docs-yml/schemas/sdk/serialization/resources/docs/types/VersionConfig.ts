/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDocsConfig from "../../../../api/index";
import * as core from "../../../../core";
import { VersionAvailability } from "./VersionAvailability";
import { WithPermissions } from "./WithPermissions";
import { WithFeatureFlags } from "./WithFeatureFlags";

export const VersionConfig: core.serialization.ObjectSchema<
    serializers.VersionConfig.Raw,
    FernDocsConfig.VersionConfig
> = core.serialization
    .object({
        displayName: core.serialization.property("display-name", core.serialization.string()),
        path: core.serialization.string(),
        slug: core.serialization.string().optional(),
        availability: VersionAvailability.optional(),
    })
    .extend(WithPermissions)
    .extend(WithFeatureFlags);

export declare namespace VersionConfig {
    export interface Raw extends WithPermissions.Raw, WithFeatureFlags.Raw {
        "display-name": string;
        path: string;
        slug?: string | null;
        availability?: VersionAvailability.Raw | null;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedObjectsWithImports from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Directory: core.serialization.ObjectSchema<
    serializers.file.Directory.Raw,
    SeedObjectsWithImports.file.Directory
> = core.serialization.object({
    name: core.serialization.string(),
    files: core.serialization.list(core.serialization.lazyObject(() => serializers.File_)).optional(),
    directories: core.serialization.list(core.serialization.lazyObject(() => serializers.file.Directory)).optional(),
});

export declare namespace Directory {
    export interface Raw {
        name: string;
        files?: serializers.File_.Raw[] | null;
        directories?: serializers.file.Directory.Raw[] | null;
    }
}

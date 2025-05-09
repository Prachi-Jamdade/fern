/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";

export const WebSocketMessageOrigin: core.serialization.Schema<
    serializers.WebSocketMessageOrigin.Raw,
    FernIr.WebSocketMessageOrigin
> = core.serialization.enum_(["client", "server"]);

export declare namespace WebSocketMessageOrigin {
    export type Raw = "client" | "server";
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../index";

/**
 * Defines the information related to the original `.proto` source file
 * that defines this type. This is primarily meant to be used to generate
 * Protobuf mapper methods, which are used in gRPC-compatbile SDKs.
 *
 * For example, consider the following Go snippet which requires the
 * `go_package` setting:
 *
 * ```go
 * import "github.com/acme/acme-go/proto"
 *
 * type GetUserRequest struct {
 *   Username string
 *   Email    string
 * }
 *
 * func (u *GetUserRequest) ToProto() *proto.GetUserRequest {
 *   if u == nil {
 *     return nil
 *   }
 *   return &proto.GetUserRequest{
 *     Username u.Username,
 *     Email:   u.Email,
 *   }
 * }
 * ```
 */
export interface UserDefinedProtobufType {
    /** The `.proto` source file that defines this type. */
    file: FernIr.ProtobufFile;
    /**
     * This name is _usually_ equivalent to the associated DeclaredTypeName's name.
     * However, its repeated here just in case the naming convention differs, which
     * is most relevant for APIs that specify `smart-casing`.
     */
    name: FernIr.Name;
}

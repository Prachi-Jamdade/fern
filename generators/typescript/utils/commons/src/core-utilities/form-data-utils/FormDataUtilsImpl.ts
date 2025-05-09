import { ts } from "ts-morph";

import { AbsoluteFilePath, RelativeFilePath } from "@fern-api/fs-utils";

import { DependencyManager } from "../../dependency-manager/DependencyManager";
import { CoreUtility } from "../CoreUtility";
import { MANIFEST as RuntimeManifest } from "../runtime/RuntimeImpl";
import { FormDataUtils } from "./FormDataUtils";

export class FormDataUtilsImpl extends CoreUtility implements FormDataUtils {
    public readonly MANIFEST = {
        name: "form-data-utils",
        repoInfoForTesting: {
            path: RelativeFilePath.of("generators/typescript/utils/core-utilities/fetcher/src/form-data-utils")
        },
        unitTests: {
            fromDirectory: RelativeFilePath.of("__test__"),
            findAndReplace: {
                "../FormDataWrapper": "../../../src/core/form-data-utils/FormDataWrapper"
            }
        },
        originalPathOnDocker: AbsoluteFilePath.of("/assets/fetcher/form-data-utils"),
        pathInCoreUtilities: [{ nameOnDisk: "form-data-utils", exportDeclaration: { exportAll: true } }],
        addDependencies: (dependencyManager: DependencyManager): void => {
            dependencyManager.addDependency("form-data", "^4.0.0");
            dependencyManager.addDependency("form-data-encoder", "^4.0.2");
            dependencyManager.addDependency("formdata-node", "^6.0.3");
        },
        dependsOn: [RuntimeManifest]
    };

    public readonly newFormData = this.withExportedName(
        "newFormData",
        (fdw) => () =>
            ts.factory.createAwaitExpression(ts.factory.createCallExpression(fdw.getExpression(), undefined, []))
    );

    public readonly encodeAsFormParameter = this.withExportedName(
        "encodeAsFormParameter",
        (encodeAsFormParameter) =>
            ({ referenceToArgument }: { referenceToArgument: ts.Expression }): ts.CallExpression =>
                ts.factory.createCallExpression(encodeAsFormParameter.getExpression(), undefined, [referenceToArgument])
    );

    public readonly append = ({
        referenceToFormData,
        key,
        value
    }: {
        referenceToFormData: ts.Expression;
        key: string | ts.Expression;
        value: ts.Expression;
    }): ts.Statement => {
        return ts.factory.createExpressionStatement(
            ts.factory.createCallExpression(
                ts.factory.createPropertyAccessExpression(referenceToFormData, ts.factory.createIdentifier("append")),
                undefined,
                [typeof key === "string" ? ts.factory.createStringLiteral(key) : key, value]
            )
        );
    };

    public readonly appendFile = ({
        referenceToFormData,
        key,
        value,
        filename
    }: {
        referenceToFormData: ts.Expression;
        key: string;
        value: ts.Expression;
        filename?: ts.Expression;
    }): ts.Statement => {
        return ts.factory.createExpressionStatement(
            ts.factory.createAwaitExpression(
                ts.factory.createCallExpression(
                    ts.factory.createPropertyAccessExpression(
                        referenceToFormData,
                        ts.factory.createIdentifier("appendFile")
                    ),
                    undefined,
                    filename
                        ? [ts.factory.createStringLiteral(key), value, filename]
                        : [ts.factory.createStringLiteral(key), value]
                )
            )
        );
    };

    public readonly getRequest = ({ referenceToFormData }: { referenceToFormData: ts.Expression }): ts.Expression => {
        return ts.factory.createCallExpression(
            ts.factory.createPropertyAccessExpression(referenceToFormData, ts.factory.createIdentifier("getRequest")),
            undefined,
            []
        );
    };

    public readonly getBody = ({ referenceToFormData }: { referenceToFormData: ts.Expression }): ts.Expression => {
        return ts.factory.createPropertyAccessExpression(referenceToFormData, ts.factory.createIdentifier("body"));
    };

    public readonly getHeaders = ({ referenceToFormData }: { referenceToFormData: ts.Expression }): ts.Expression => {
        return ts.factory.createPropertyAccessExpression(referenceToFormData, ts.factory.createIdentifier("headers"));
    };

    public readonly getDuplexSetting = ({
        referenceToFormData
    }: {
        referenceToFormData: ts.Expression;
    }): ts.Expression => {
        return ts.factory.createPropertyAccessExpression(referenceToFormData, ts.factory.createIdentifier("duplex"));
    };
}

# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic
from ....core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from .function_implementation_for_multiple_languages import FunctionImplementationForMultipleLanguages
from .non_void_function_signature import NonVoidFunctionSignature


class NonVoidFunctionDefinition(UniversalBaseModel):
    signature: NonVoidFunctionSignature
    code: FunctionImplementationForMultipleLanguages

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow

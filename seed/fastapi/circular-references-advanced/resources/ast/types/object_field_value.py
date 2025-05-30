# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic
from ....core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from .field_name import FieldName
from .field_value import FieldValue


class ObjectFieldValue(UniversalBaseModel):
    """
    This type allows us to test a circular reference with a union type (see FieldValue).
    """

    name: FieldName
    value: FieldValue

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="forbid")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid

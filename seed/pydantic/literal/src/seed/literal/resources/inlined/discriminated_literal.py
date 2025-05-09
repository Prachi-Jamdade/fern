# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from ...core.pydantic_utilities import UniversalBaseModel


class DiscriminatedLiteral_CustomName(UniversalBaseModel):
    value: str
    type: typing.Literal["customName"] = "customName"


class DiscriminatedLiteral_DefaultName(UniversalBaseModel):
    value: typing.Literal["Bob"]
    type: typing.Literal["defaultName"] = "defaultName"


class DiscriminatedLiteral_George(UniversalBaseModel):
    value: bool
    type: typing.Literal["george"] = "george"


class DiscriminatedLiteral_LiteralGeorge(UniversalBaseModel):
    value: typing.Literal[True]
    type: typing.Literal["literalGeorge"] = "literalGeorge"


DiscriminatedLiteral = typing.Union[
    DiscriminatedLiteral_CustomName,
    DiscriminatedLiteral_DefaultName,
    DiscriminatedLiteral_George,
    DiscriminatedLiteral_LiteralGeorge,
]

# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

import pydantic
from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel


class UnionWithOptionalTime_Date(UniversalBaseModel):
    value: typing.Optional[dt.date] = None
    type: typing.Literal["date"] = "date"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class UnionWithOptionalTime_Datetime(UniversalBaseModel):
    value: typing.Optional[dt.datetime] = None
    type: typing.Literal["datetime"] = "datetime"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


"""
from seed.types import UnionWithOptionalTime_Date
import datetime
UnionWithOptionalTime_Date(value=datetime.date.fromisoformat("1994-01-01", ))
"""
UnionWithOptionalTime = typing.Union[UnionWithOptionalTime_Date, UnionWithOptionalTime_Datetime]

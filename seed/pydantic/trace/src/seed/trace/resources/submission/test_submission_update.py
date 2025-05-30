# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing

import pydantic
from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from .test_submission_update_info import TestSubmissionUpdateInfo


class TestSubmissionUpdate(UniversalBaseModel):
    update_time: dt.datetime = pydantic.Field(alias="updateTime")
    update_info: TestSubmissionUpdateInfo = pydantic.Field(alias="updateInfo")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow

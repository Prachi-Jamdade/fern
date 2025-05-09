# This file was auto-generated by Fern from our API Definition.

from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from .raw_client import AsyncRawFolderDClient, RawFolderDClient
from .service.client import AsyncServiceClient, ServiceClient


class FolderDClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._raw_client = RawFolderDClient(client_wrapper=client_wrapper)
        self.service = ServiceClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> RawFolderDClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        RawFolderDClient
        """
        return self._raw_client


class AsyncFolderDClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._raw_client = AsyncRawFolderDClient(client_wrapper=client_wrapper)
        self.service = AsyncServiceClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> AsyncRawFolderDClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        AsyncRawFolderDClient
        """
        return self._raw_client

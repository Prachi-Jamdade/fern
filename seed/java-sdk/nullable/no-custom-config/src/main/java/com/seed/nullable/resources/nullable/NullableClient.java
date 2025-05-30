/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.nullable.resources.nullable;

import com.seed.nullable.core.ClientOptions;
import com.seed.nullable.core.RequestOptions;
import com.seed.nullable.resources.nullable.requests.CreateUserRequest;
import com.seed.nullable.resources.nullable.requests.DeleteUserRequest;
import com.seed.nullable.resources.nullable.requests.GetUsersRequest;
import com.seed.nullable.resources.nullable.types.User;
import java.util.List;

public class NullableClient {
    protected final ClientOptions clientOptions;

    private final RawNullableClient rawClient;

    public NullableClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
        this.rawClient = new RawNullableClient(clientOptions);
    }

    /**
     * Get responses with HTTP metadata like headers
     */
    public RawNullableClient withRawResponse() {
        return this.rawClient;
    }

    public List<User> getUsers() {
        return this.rawClient.getUsers().body();
    }

    public List<User> getUsers(GetUsersRequest request) {
        return this.rawClient.getUsers(request).body();
    }

    public List<User> getUsers(GetUsersRequest request, RequestOptions requestOptions) {
        return this.rawClient.getUsers(request, requestOptions).body();
    }

    public User createUser(CreateUserRequest request) {
        return this.rawClient.createUser(request).body();
    }

    public User createUser(CreateUserRequest request, RequestOptions requestOptions) {
        return this.rawClient.createUser(request, requestOptions).body();
    }

    public boolean deleteUser() {
        return this.rawClient.deleteUser().body();
    }

    public boolean deleteUser(DeleteUserRequest request) {
        return this.rawClient.deleteUser(request).body();
    }

    public boolean deleteUser(DeleteUserRequest request, RequestOptions requestOptions) {
        return this.rawClient.deleteUser(request, requestOptions).body();
    }
}

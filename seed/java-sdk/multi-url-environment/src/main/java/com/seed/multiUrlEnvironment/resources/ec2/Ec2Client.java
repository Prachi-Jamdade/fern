/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.multiUrlEnvironment.resources.ec2;

import com.seed.multiUrlEnvironment.core.ClientOptions;
import com.seed.multiUrlEnvironment.core.RequestOptions;
import com.seed.multiUrlEnvironment.resources.ec2.requests.BootInstanceRequest;

public class Ec2Client {
    protected final ClientOptions clientOptions;

    private final RawEc2Client rawClient;

    public Ec2Client(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
        this.rawClient = new RawEc2Client(clientOptions);
    }

    /**
     * Get responses with HTTP metadata like headers
     */
    public RawEc2Client withRawResponse() {
        return this.rawClient;
    }

    public void bootInstance(BootInstanceRequest request) {
        this.rawClient.bootInstance(request).body();
    }

    public void bootInstance(BootInstanceRequest request, RequestOptions requestOptions) {
        this.rawClient.bootInstance(request, requestOptions).body();
    }
}

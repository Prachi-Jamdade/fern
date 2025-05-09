// This file was auto-generated by Fern from our API Definition.

package client

import (
	core "github.com/literal/fern/core"
	headers "github.com/literal/fern/headers"
	inlined "github.com/literal/fern/inlined"
	internal "github.com/literal/fern/internal"
	option "github.com/literal/fern/option"
	path "github.com/literal/fern/path"
	query "github.com/literal/fern/query"
	reference "github.com/literal/fern/reference"
	http "net/http"
)

type Client struct {
	baseURL string
	caller  *internal.Caller
	header  http.Header

	Headers   *headers.Client
	Inlined   *inlined.Client
	Path      *path.Client
	Query     *query.Client
	Reference *reference.Client
}

func NewClient(opts ...option.RequestOption) *Client {
	options := core.NewRequestOptions(opts...)
	return &Client{
		baseURL: options.BaseURL,
		caller: internal.NewCaller(
			&internal.CallerParams{
				Client:      options.HTTPClient,
				MaxAttempts: options.MaxAttempts,
			},
		),
		header:    options.ToHeader(),
		Headers:   headers.NewClient(opts...),
		Inlined:   inlined.NewClient(opts...),
		Path:      path.NewClient(opts...),
		Query:     query.NewClient(opts...),
		Reference: reference.NewClient(opts...),
	}
}

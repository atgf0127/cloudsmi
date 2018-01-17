---
title: test
date: 2018-01-16T10:50:27.321Z
description: testeee
image: /img/5656bcec1ab7421cf147e0d7f9ea177f_r.jpg
---
Webhooks

Netlify supports both incoming and outgoing Webhooks.

Incoming webhooks notify our servers to make something. Outgoing webhooks make another service to do something when events happen with your sites.
Incoming webhooks

The only supported action for incoming webhooks right now is to trigger new builds and deploys.

You can find your incoming webhooks settings in the site settings page, right under the build environment settings.

Set an appropriate title that describes how the hook will be triggered, for instance “Daily Cron Hook” and save it. Netlify will give you a unique URL for that webhook. To trigger this hook, just send a POST request to that URL.

It can be as simple as using cURL:

$ curl -X POST -d '{}' https://api.netlify.com/build_hooks/379sdfl2356d3d9d9254

Outgoing webhooks and notifications

Outgoing webhooks are useful to notify other services when something happens with your site in Netlify.

This is the list of current events supported by Netlify:

    Deploy started: this event is emitted when Netlify starts building your site for a new deploy.
    Deploy succeeded: this event is emitted when Netlify finishes propagating a new deploy in our CDN.
    Deploy failed: this event is emitted when the deploy failed to complete.
    Deploy locked: this event is emitted when a deploy is locking a site.
    Deploy unlocked: this event is emitted when a deploy stops locking a site.
    New form submission: this event is emitted when someone submits new form information in your site.

You can go to the notifications section for your sites to enable the different outgoing webhooks:

Select the type of notification you want to create and add the required configuration.
URL notifications

This webhook allows you to send event information to an arbitrary URL using a POST request.

The body of the outgoing webhook request will have a JSON representation of the object relevant to the event.

Signing URL notification payloads

If you provide a JWS secret token for URL notifications, Netlify will generate a JSON Web Signature(JWS) and send it along with the notification in the request header X-Nf-Sign.

We include the following fields in the signature’s data section:

    iss: always sent with value netlify, identifying the source of the request
    sha256: the hexadecimal representation of the generated payload’s SHA256

You can use any JWT client library to verify this signature in the service receiving the notification. This is an example of an API built with the Sinatra framework that verifies the signature header:

require "digest"
require "jwt"
require "sinatra"

def signed(request, body)
  signature = request["X-Nf-Sign"]
  return unless signature

  options = {iss: "netlify", verify_iss: true, algorithm: "HS256"}
  decoded = JWT.decode(signature, "your signature secret", true, options)

  ## decoded :
  ## [
  ##   { sha256: "..." }, # this is the data in the token
  ##   { alg: "..." } # this is the header in the token
  ## ]
  decoded.first[:sha256] == Digest::SHA256.hexdigest(body)
rescue JWT::DecodeError
  false
end

post "/netlify-hook" do
  body = request.body.read
  halt 403 unless signed(request, body)

  json = JSON.parse(body)
  # do something with the notification payload here
end

Email notifications

This webhook allows you to send event information to an email address of your choice.

Slack notifications

This webhook allows you to send messages to a Slack channel when Netlify emits events.

Before configuring this notification, make sure you read Slack’s documentation on incoming webhooks.

GitHub commit statuses

This webhook sets commit status notification directly in your GitHub Pull Requests.

It requires a GitHub access token with at least the repo:status scope. GitHub tokens are bounded to users, so creating several tokens doesn’t change their API limit restrictions. Each usage accumulates to the user limit per hour.

You can generate an access token directly from Netlify when you configure this notification:

GitHub pull request comments

This webhook adds a comment notification in your GitHub Pull Requests. It also updates that same comment if you append several commits to the same pull request.

It requires a GitHub access token with public_repo or repo scope, depending on whether your repository is public or private. GitHub tokens are bounded to users, so creating several tokens doesn’t change their API limit restrictions. Each usage accumulates to the user limit per hour.

You can generate an access token directly from Netlify when you configure this notification:

GitLab commit statuses

This webhook creates commit statuses in your GitLab repositories.

It requires a GitLab API token with access to the repository. You can set that token when you configure this notification:

GitLab merge request comments

This webhook adds a comment notification in your GitLab merge requests. It also updates that same comment if you append several commits to the same merge request.

It requires a GitLab API token with access to the repository. You can set that token when you configure this notification:

Bitbucket notifications

Bitbucket notifications are not available because Bitbucket’s API functionality does not support Deploy Previews.


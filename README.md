# Website

## Prerequisites

Ruby:

```
brew install ruby
```

[Bundler](http://bundler.io/):

```
gem install bundler
```

## Running locally

First install dependencies:

```
bundle install
```

Then get Jekyll to watch:

```
bundle exec jekyll serve
```

You should be able to see the content at http://localhost:4000.

## CI

This deploys to a GCloud VM instance via CircleCI.  Prerequisites:

- A VM has been provisioned with the `webserver` Ansible playbook in the `infra` repo.
- A GCloud service account for CircleCI has been configured according to [these instructions](https://docs.google.com/a/quartic.io/document/d/1YFuPEG12E8Q-ACrsNcrmR7odc9GHxjPYHg9NSOIJy9o/edit?usp=sharing).
- The `GCLOUD_WEB_INSTANCE` environment variable is set in the build config.

# Website

You'll need to install SASS first:

    sudo gem install sass

Then run the following to auto-generate CSS from SASS upon change:

    sass watch assets/sass:assets/css

## CI

This deploys to a GCloud VM instance via CircleCI.  Prerequisites:

- A VM has been provisioned with the `webserver` Ansible playbook in the `infra` repo.
- A GCloud service account for CircleCI has been configured according to [these instructions](https://docs.google.com/a/quartic.io/document/d/14U36nOrjs9ngSSnsn412MC701O4jwRBa0QQxrDVHy44/edit?usp=sharing).
- The `GCLOUD_WEB_INSTANCE` environment variable is set in the build config.

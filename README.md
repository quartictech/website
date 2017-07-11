# Website

The Quartic public website, at https://www.quartic.io.

## Local development

You need the following installed locally:

- NodeJS
- Yarn

First install dependencies:

```
yarn install
```

To run a local hot-development server:

```
yarn start
```

Site will be available at http://localhost:8000.


## Submitting changes

Changes should be submitted as PRs via the normal process.  When merged to `develop` branch, the CircleCI build
will automatically deploy to http://www-test.quartic.io (behind basic auth, creds can be found in the normal place).
When merged to `master`, CircleCI will automatically deploy to https://www.quartic.io.

## Spellchecking

The CircleCI build runs `hunspell` on the generated HTML using a GB English dictionary.  Custom words can be added to
the `spelling.dic` file if it fails.  Please add to the correct section, and maintain in alphabetical order.

## Hosting

Both http://www-test.quartic.io and https://www.quartic.io are hosted on the same GCE node, which was provisioned
via Ansible (see the `infra` repo).


## Framework

This is based on [Zurb Fondation 6](http://foundation.zurb.com/sites/download.html/), originally created via:

```
npm install -g foundation-cli
foundation new --framework sites --template zurb
```

We then eliminated Bower (the dependencies originally in `bower.json` are now subsumed by `package.json`).
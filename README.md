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


## License

This project is made available under [BSD License 2.0](https://github.com/quartictech/website/blob/develop/LICENSE).

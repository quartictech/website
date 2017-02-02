#!/bin/bash
set -eu

WEBSITE_BRANCH=${CIRCLE_BRANCH:-Unknown}
WEBSITE_VERSION=${CIRCLE_BUILD_NUM:-Unknown}
WEBSITE_PRODUCTION=false

if [ "$WEBSITE_BRANCH" == "master" ]; then
    WEBSITE_PRODUCTION=true
fi

echo -e "production: ${WEBSITE_PRODUCTION}\nversion: ${WEBSITE_VERSION}" > src/data/build.yml

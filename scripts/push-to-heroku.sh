#!/usr/bin/env bash

GREEN="\\033[1;32m"
NORMAL="\\033[0;39m"
RED="\\033[1;31m"
BLUE="\\033[1;34m"
WHITE="\\033[0;02m"
YELLOW="\\033[1;33m"

# exit when any command fails
set -e

ROOT_DIRECTORY="$(dirname $0)/.."
cd $ROOT_DIRECTORY

if [ -n "$(git diff --name-only HEAD)" ]; then
    echo -e "${RED}\nPlease commit your changes before pushing to heroku${NORMAL}"
    exit 1
fi

mvn clean install -Pbf

if [ -n "$(git diff --name-only HEAD)" ]; then
    echo -e "${GREEN}\nCommit and push to Heroku${NORMAL}"
    git commit -am "new frontend static files version"
    git push
    git push heroku master
else 
    echo -e "${GREEN}\nNo thing to commit to Heroku${NORMAL}"
fi

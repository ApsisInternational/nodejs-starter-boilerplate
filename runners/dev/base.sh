#!/bin/bash

DIR="$( cd "$( dirname "$0" )" && pwd )"
base="
    docker-compose 
        -p api
        -f $DIR/../../docker-compose.yml
        -f $DIR/../../docker-compose.dev.yml
        -f $DIR/../../docker-compose.dev.env.yml
"
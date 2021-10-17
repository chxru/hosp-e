#!/bin/bash

# confirm args are supplied
if [ $# -ne 2 ]
then
    echo "args are missing!"
    exit 1
fi

# args
CONTAINER=$1
FILENAME=$2

# check docker is running
# https://gist.github.com/paulosalgado/91bd74c284e262a4806524b0dde126ba
DOCKER_RUNNING=$(docker inspect --format="{{.State.Running}}" $CONTAINER 2> /dev/null)

if [ "$DOCKER_RUNNING" == "false" ]; then
    echo $CONTAINER is not running
    exit 1
fi


# copy sql file to the container
docker cp $PWD/sql/$FILENAME $CONTAINER:./home/hospe-boot-sql/$FILENAME

# import sql to postgres
docker exec $CONTAINER psql -U hospe -d hospe -f ./home/hospe-boot-sql/$FILENAME
exit 0
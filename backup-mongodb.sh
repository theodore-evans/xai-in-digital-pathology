#!/bin/sh

export CONTAINER_NAME="mongo"
export DATABASE_NAME="xai_surveys"
export TIMESTAMP=$(date +'%Y%m%d%H%M%S')

docker exec -t ${CONTAINER_NAME} mongodump --out /data/${DATABASE_NAME}-backup-${TIMESTAMP} --db ${DATABASE_NAME}
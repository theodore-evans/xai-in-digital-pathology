#!/bin/sh

export CONTAINER_NAME="mongo"
export DATABASE_NAME="xai_surveys"
export TIMESTAMP=$(date +'%Y%m%d%H%M%S')

docker exec -t ${CONTAINER_NAME} mongodump --out /data/db/${DATABASE_NAME}-backup-${TIMESTAMP} --db ${DATABASE_NAME}
#command to dump only relevant docs to stdout
#docker exec -t mongo  mongoexport --db xai_surveys --collection surveys --query '{"id":{"$gte":1623319499818}}'


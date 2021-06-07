#!/bin/sh
DIR=`date +%d%m%y`
DEST=/data/db/backups/$DIR
mkdir $DEST
mongodump -d xai_surveys -o $DEST

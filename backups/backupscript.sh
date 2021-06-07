#!/bin/sh
DIR=`date +%d%m%y`
DEST=/empaia/xai-usability-survey/backups/$DIR
mkdir $DEST
mongodump -d xai_surveys -o $DEST

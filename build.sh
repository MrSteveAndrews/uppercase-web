#!/bin/sh

#Set the version number.  The CD process will set this to the pipeline count.
mvn versions:set -DnewVersion=$1
mvn clean install
mvn versions:revert
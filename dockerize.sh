#!/bin/sh

#Build and tag the image using the Dockerfile.  Pass in a tag as a parameter.  The CD server will pass in the pipeline count.
echo docker build -t blueagility/uppercase-web:$1 .
docker build -t blueagility/uppercase-web:$1 .
echo docker tag -f blueagility/uppercase-web:$1 blueagility/uppercase-web:at
docker tag blueagility/uppercase-web:$1 blueagility/uppercase-web:at

# Push the image to DockerHub
echo docker login -u $2 -p $3
docker login -u $2 -p $3
echo docker push blueagility/uppercase-web:$1
docker push blueagility/uppercase-web:$1
echo docker push blueagility/uppercase-web:at
docker push blueagility/uppercase-web:at
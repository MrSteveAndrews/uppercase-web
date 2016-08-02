# uppercase-web
The uppercase web ui

To create Docker image:

     DOCKER_HOST=unix:///var/run/docker.sock mvn docker:build

* DOCKER_HOST=unix:///var/run/docker.sock will allow the mvn process to connect to the Docker daemon.

To run the container:

     docker run -d -p 8080:8080 -e uppercase.service.url=http://localhost:9090/upperCase -t blueagility/uppercase-web

* Run in detached mode with -d
* Bind container port 8080 to host port 8080 with -p 8080:8080
* Pass in the upper case service endpoint as an environment variable with -e uppercase.service.url=http://localhost:9090/upperCase

Access the web app in your favorite browser at:

     http://localhost:8080/uppercase-web

     
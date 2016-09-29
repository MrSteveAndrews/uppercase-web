FROM frolvlad/alpine-oraclejdk8:slim

VOLUME /tmp
ADD target/*.jar uppercase-web.jar
ENTRYPOINT ["java", "-jar", "uppercase-web.jar"]




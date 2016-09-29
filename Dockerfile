FROM frolvlad/alpine-oraclejdk8:slim

VOLUME /tmp
ADD target/uppercase-web.war uppercase-web.war
ENTRYPOINT ["java", "-jar", "uppercase-web.war"]




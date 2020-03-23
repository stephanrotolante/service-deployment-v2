FROM openjdk:8
COPY ./docker-spring-boot.jar ./
EXPOSE 80
CMD [ "java", "-jar", "docker-spring-boot.jar","--server.port=80" ]
FROM openjdk:8
COPY ./docker-spring-boot.jar ./
EXPOSE 8080
CMD [ "java", "-jar", "docker-spring-boot.jar","--server.port=80" ]
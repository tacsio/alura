FROM openjdk:8-jdk-alpine
COPY ["./eleicoesonline.war", "./webapp-runner.jar" "/app"]
WORKDIR /app

ENTRYPOINT ["java", "-Dspring.datasource.username=root", "-Dspring.datasource.password=root", "-jar webapp-runner.jar", "--port 8080", "--expand-war eleicoesonline.war"


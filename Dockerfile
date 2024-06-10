FROM --platform=linux/amd64 openjdk:22
EXPOSE 8080
ADD backend/target/my-warehouse.jar my-warehouse.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
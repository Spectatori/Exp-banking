# Stage 1: Build the Maven project
FROM openjdk:22-slim AS build

RUN apt-get update && apt-get install -y maven
WORKDIR /app

COPY . /app

RUN mvn clean package

# Stage 2: Run the built application
FROM openjdk:22-slim
WORKDIR /app
COPY --from=build /app/target/expBanking-0.0.1-SNAPSHOT.war /app

# Install wget to download wait-for-it script
RUN apt-get update && apt-get install -y wget

# Download wait-for-it script
RUN wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -O /usr/local/bin/wait-for-it.sh \
    && chmod +x /usr/local/bin/wait-for-it.sh

# Create a new user 'myuser' to avoid running the application as root
RUN useradd -m myuser
USER myuser

EXPOSE 8080

# Use wait-for-it to wait for the database before starting the application
CMD ["sh", "-c", "wait-for-it.sh db:5432 -- java -jar expBanking-0.0.1-SNAPSHOT.war"]
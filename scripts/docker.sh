# Build the backend app container
docker build \
    -t kuigan/feedback-app:v4.5 \
    -t kuigan/feedback-app:latest \
    -t feedback-app:v4.5 \
    -t feedback-app:latest .

# Create a docker network for the app
docker network create feedback-app-nw

# Run the postgres database container
docker run \
    --name postgres-db \
    --network feedback-app-nw \
    -p 5432:5432 \
    -e POSTGRES_PASSWORD=yourpassword \
    -e POSTGRES_DB=feedbackdb \
    -v feedback-app-data:/var/lib/postgresql/data \
    -d \
    --rm \
    postgres

# Run the backend app container
docker run \
    --name feedback-app \
    --network feedback-app-nw \
    -p 3030:3000 \
    -d \
    --rm \
    feedback-app

# Stop the containers
docker stop feedback-app postgres-db

# Remove the containers
docker rm feedback-app postgres-db

# Alternative Variante für den zweiten Schritt

# Run the backend app container mit Umgebungsvariablen (Passwort etc.)
docker run \
    --name feedback-app \
    --network feedback-app-nw \
    -p 3030:3000 \
    -e DB_USER=postgres \
    -e DB_HOST=postgres-db \
    -e DB_DATABASE=feedbackdb \
    -e DB_PASSWORD=yourpassword \
    -e DB_PORT=5432 \
    -d \
    --rm \
    feedback-app


# Docker Copmpose starten
docker-compose up
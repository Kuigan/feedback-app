FROM node:22-bookworm-slim

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3000

# ENV DB_USER=postgres
# ENV DB_HOST=postgres-db
# ENV DB_DATABASE=feedbackdb
# ENV DB_PASSWORD=yourpassword
# ENV DB_PORT=5432

CMD ["npm", "run", "dev"]
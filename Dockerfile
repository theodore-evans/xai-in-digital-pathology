FROM node:latest

# install dependencies
# frontend
RUN mkdir -p /src/app/frontend
WORKDIR /src/app/frontend
COPY frontend/package.json /src/app/frontend
RUN npm install

# backend
RUN mkdir -p /src/app/backend
WORKDIR /src/app/backend
COPY backend/package.json /src/app/backend
RUN npm install

# build frontend
COPY frontend /src/app/frontend
WORKDIR /src/app/frontend
RUN npm run-script build

# run app
COPY backend /src/app/backend
WORKDIR /src/app/backend
EXPOSE 3000
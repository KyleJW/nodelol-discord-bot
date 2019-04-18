FROM node:11-alpine

# Create and define the node_modules's cache directory.
RUN mkdir -p /usr/src/cache
WORKDIR /usr/src/cache

# Install the application's dependencies into the node_modules's cache directory.
COPY package*.json ./
RUN npm install

# Create and define the application's working directory.
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

EXPOSE 80 443

CMD [ "sh", "./startup-dev.sh" ]

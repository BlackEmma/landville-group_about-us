# select your base image to start with
FROM node:20.2.0-alpine3.17

# Create app directory
RUN mkdir /app

# this is the location where you will be inside the container
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# copying packages first helps take advantage of docker layers
COPY package*.json ./

# Ifyou want to use dev packages
# RUN npm install
# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . .

# Command to run when the container is ready
# Separate arguments as separate values in the array
CMD [ "npm", "run", "start"]
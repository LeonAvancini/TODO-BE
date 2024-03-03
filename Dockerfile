# Use the official Node.js image as a base
FROM node:19.4.0

# Set the working directory in the container
WORKDIR /src/app.js

# Copy package.json and package-lock.json files
COPY ../package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]

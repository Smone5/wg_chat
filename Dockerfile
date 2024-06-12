# Use an official Node.js runtime as a parent image
FROM node:21.2.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Expose the port on which your app runs
EXPOSE 3000

# Set environment variables (if needed)
ENV NODE_OPTIONS=--openssl-legacy-provider

# Command to run the app
CMD ["npm", "start"]

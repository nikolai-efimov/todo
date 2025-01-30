# Use official Node.js runtime as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose the application's port
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]

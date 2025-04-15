# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app/backend

# Copy package.json and package-lock.json (or yarn.lock) to leverage Docker cache
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build TypeScript code
RUN npm run build --if-present  # Optional: Add build script if needed

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define environment variable
ENV NODE_ENV production

# Run the app when the container launches
CMD ["node", "dist/server.js"] # Assuming build output is in dist

# If using ts-node-dev for development (adjust as needed):
# CMD ["npm", "start"] 
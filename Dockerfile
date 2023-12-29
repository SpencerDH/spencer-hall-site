# Base image
FROM node:20

# Set up working directory
WORKDIR /

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the source code
COPY . .

# Build the NextJS application
RUN npm run build

# Start the application on port 3000
EXPOSE 3000
CMD ["npm", "start"]
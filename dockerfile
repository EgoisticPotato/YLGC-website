# Build stage
FROM node:22.17.1-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies using lockfile
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose Vite preview default port
EXPOSE 4173

# Start the preview server
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
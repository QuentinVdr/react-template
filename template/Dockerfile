# Build stage
FROM node:20-alpine@sha256:c13b26e7e602ef2f1074aef304ce6e9b7dd284c419b35d89fcf3cc8e44a8def9 AS build
# Install pnpm
RUN npm install -g pnpm
# Set working directory
WORKDIR /app
# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./
# Install dependencies
RUN pnpm install --frozen-lockfile
# Copy source code
COPY . .
# Build the application
RUN pnpm run build

# Runtime stage
FROM node:20-alpine@sha256:c13b26e7e602ef2f1074aef304ce6e9b7dd284c419b35d89fcf3cc8e44a8def9 AS runtime
# Install pnpm
RUN npm install -g pnpm
# Set working directory
WORKDIR /app
# Copy built assets from build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./
# Install production dependencies only
RUN pnpm install --prod
# Install Vite for serving the application
RUN pnpm add vite
# Expose the port Vite will run on
EXPOSE 5173
# Start the application
CMD ["pnpm", "preview"]

# Build stage
FROM node:18-alpine@sha256:02376a266c84acbf45bd19440e08e48b1c8b98037417334046029ab585de03e2 AS build
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
FROM node:18-alpine@sha256:02376a266c84acbf45bd19440e08e48b1c8b98037417334046029ab585de03e2 AS runtime
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

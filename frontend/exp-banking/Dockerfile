# Stage 1 - Build the Vite project
FROM node:alpine AS build
WORKDIR /app

# Copy the necessary files for the build
COPY package.json .
COPY package-lock.json .
# Ensure this is available
COPY ./vite.config.js .  
# Source code
COPY ./src ./src         
# Public assets
COPY ./public ./public   
COPY index.html .
# Install dependencies and build
RUN npm install
RUN npm run build

# Stage 2 - Serve the static files
FROM nginx:alpine
# Copy built files to Nginx
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

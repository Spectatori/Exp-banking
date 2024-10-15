# Stage 1 - Build the Vite project
FROM node:alpine AS build
WORKDIR /app

# Copy the necessary files for the build
COPY package.json .
COPY package-lock.json .
COPY vite.config.js .  
COPY ./src ./src
COPY ./public ./public 
COPY index.html .      
COPY tailwind.config.js .
COPY postcss.config.js .

# Install dependencies and build
RUN npm i

RUN echo "VITE_DB_API_KEY=http://localhost:8080/" > .env
RUN echo "VITE_ADMIN_EMAIL=admin@gmail.com" >> .env

RUN npm run build

# Stage 2 - Serve the static files
FROM nginx:alpine

# Copy built files to Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]

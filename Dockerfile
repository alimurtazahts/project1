# Use an official Nginx image from the Docker Hub
FROM nginx:alpine

# Copy static files to Nginx's default directory
COPY . /usr/share/nginx/html

# Expose port 80 to access the application
EXPOSE 80
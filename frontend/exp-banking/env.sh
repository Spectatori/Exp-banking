#!/bin/sh

# Replace environment variables in JavaScript files
for file in /usr/share/nginx/html/assets/*.js
do
  sed -i 's|VITE_DB_API_KEY_PLACEHOLDER|'${VITE_DB_API_KEY}'|g' $file
  sed -i 's|VITE_ADMIN_EMAIL_PLACEHOLDER|'${VITE_ADMIN_EMAIL}'|g' $file
done

nginx -g 'daemon off;'
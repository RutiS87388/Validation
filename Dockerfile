# השתמש בתמונה בסיסית של Nginx
FROM nginx:alpine

# העתק את הקבצים שלך לתוך התיקייה המתאימה ב-Nginx
COPY . /usr/share/nginx/html

# חשוף את הפורט 80
EXPOSE 80
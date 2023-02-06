FROM node:16.14

COPY package.json .
RUN npm install
COPY . .
CMD ["chown" "-R" "root" "/app"]
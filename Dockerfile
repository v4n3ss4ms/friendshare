#stage 1
FROM node:16-alpine as node
WORKDIR /src/app
COPY package.json package-lock.json ./
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /src/app/dist/friendshare /usr/share/nginx/html

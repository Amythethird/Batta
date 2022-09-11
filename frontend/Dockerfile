FROM node:16 AS build
WORKDIR /batta-frontend
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /batta-frontend/build /usr/share/nginx/html
EXPOSE 80
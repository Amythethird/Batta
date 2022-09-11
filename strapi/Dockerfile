FROM node:16
WORKDIR /batta-strapi
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
CMD npm start
EXPOSE 2500

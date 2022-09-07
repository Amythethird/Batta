FROM node:16
RUN npm i -g serve
WORKDIR /batta-frontend
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["serve","build"]
EXPOSE 3000

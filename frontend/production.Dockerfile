FROM node:16.14-alpine
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest
RUN npm i -g serve
RUN mkdir /wtw && chown -R node:node /wtw
WORKDIR /wtw
USER node
COPY . .
RUN npm run build
CMD ["serve","build"]
EXPOSE 3000

FROM node:16.14-alpine
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest
RUN mkdir /wtw && chown -R node:node /wtw
WORKDIR /wtw
USER node
COPY package.json .
RUN npm i
CMD ["npm","start"]
EXPOSE 3000

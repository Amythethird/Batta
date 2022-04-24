FROM node:16.14-alpine

RUN npm i -g serve
RUN mkdir /wtw && chown -R node:node /wtw
WORKDIR /wtw
USER node
COPY ./build ./build
CMD ["serve","build"]
EXPOSE 3000

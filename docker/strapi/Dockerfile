FROM node:16
# Installing libvips-dev for sharp compatability
RUN apt-get update -y && apt-get install libvips-dev -y
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./veedelsretter/package.json ./
COPY ./veedelsretter/package-lock.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g
RUN yarn install
WORKDIR /opt/app
COPY ./ .
RUN yarn build
EXPOSE 2500
CMD ["yarn", "develop"]

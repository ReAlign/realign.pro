FROM node:12-alpine
WORKDIR /usr/src/app

COPY package.json ./
COPY .npmrc ./
COPY ./dist dist/
RUN npm install serve -g
EXPOSE 3000
ENTRYPOINT [ "serve", "dist" ]

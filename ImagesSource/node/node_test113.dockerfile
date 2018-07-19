FROM node:latest

RUN mkdir -p /var/www/

COPY . ./www

RUN yarn install

EXPOSE 3000


CMD ["yarn","start"]
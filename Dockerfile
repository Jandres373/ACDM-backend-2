FROM node:18
WORKDIR /dist
COPY . .
RUN npm install
EXPOSE 5432
CMD [ "npm", "start" ]
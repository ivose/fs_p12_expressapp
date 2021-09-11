#12.4
FROM node:16
USER node

WORKDIR /usr/src/app

COPY . .

#RUN npm install
#RUN npm ci
RUN npm ci --only-production

#CMD DEBUG=playground:* npm start
ENV DEBUG=playground:*
CMD npm start

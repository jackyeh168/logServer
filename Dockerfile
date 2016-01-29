FROM mysql:latest
MAINTAINER Wush Wu <wush978@gmail.com>

RUN apt-get update && apt-get install git npm -y --no-install-recommends && ln -s /usr/bin/nodejs /usr/bin/node
WORKDIR /var/local/logServer
COPY . /var/local/logServer/
RUN npm install
EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["start"]


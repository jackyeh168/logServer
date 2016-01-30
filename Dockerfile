FROM mysql:latest
MAINTAINER Wush Wu <wush978@gmail.com>
COPY . /var/local/logServer/ 

RUN apt-get update && apt-get install git npm -y --no-install-recommends && ln -s /usr/bin/nodejs /usr/bin/node
WORKDIR /var/local/logServer
RUN npm install
EXPOSE 3000
#ENTRYPOINT ["sh"]
#CMD ["init_db.sh"]


FROM arangodb:3.9
COPY ./config/ /docker-entrypoint-initdb.d/
RUN chmod -R 755 /docker-entrypoint-initdb.d/
RUN cat /etc/*-release

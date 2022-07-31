#!/bin/bash -e

docker-compose -f ./docker/dev.yml up -d
cd ./frontend
npm run serve
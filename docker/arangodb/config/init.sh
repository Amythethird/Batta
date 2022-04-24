#!/bin/sh
arangosh \
    --server.endpoint=tcp://127.0.0.1:8999 \
    --server.password "${ARANGO_ROOT_PASSWORD}" \
    --console.history false \
    --javascript.execute-string "require('@arangodb/users').save('${DB_USER}','${DB_PASS}',true,{});" \
    --javascript.execute-string "require('@arangodb/users').grantDatabase('${DB_USER}','${DB}','rw');"

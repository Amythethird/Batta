#!/bin/sh
set -e

if [ -z "$ARANGO_INIT_PORT" ] ; then
    ARANGO_INIT_PORT=8999
fi

AUTHENTICATION="true"


# check for numa
NUMACTL=""


exec $NUMACTL "$@"
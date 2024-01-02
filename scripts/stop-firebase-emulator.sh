#!/bin/bash -eu

# scriptsが置かれてる階層に移動する
cd `dirname $0`

docker compose -f ../dev/firebase-emulator/docker-compose.yml down

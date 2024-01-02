#!/bin/bash -eu

# scriptsが置かれてる階層に移動する
cd `dirname $0`

docker compose -f ../dev/firebase-emulator/docker-compose.yml up -d

wait

docker compose -f ../dev/firebase-emulator/docker-compose.yml exec -d firebase firebase emulators:start

# https://github.com/AndreySenov/firebase-tools-docker/blob/main/Dockerfile.node20
FROM node:20.10.0-slim

ENV HOME=/home/node
EXPOSE 4000
EXPOSE 5000
EXPOSE 5001
EXPOSE 8080
EXPOSE 8085
EXPOSE 9000
EXPOSE 9005
EXPOSE 9099
EXPOSE 9199
RUN apt-get update && apt-get install -y openjdk-17-jre-headless && \
  npm install -g firebase-tools@13.0.2 && \
  npm cache clean --force && \
  firebase setup:emulators:firestore && \
  firebase setup:emulators:storage && \
  firebase -V && \
  java -version && \
  chown -R node:node $HOME
USER node
VOLUME $HOME/.cache
WORKDIR $HOME
CMD ["sh"]

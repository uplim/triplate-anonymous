FROM node:20.11.0-slim
ENV APP_ROOT /works

WORKDIR $APP_ROOT

COPY ./.yarnrc.yml ./package.json ./yarn.lock $APP_ROOT
RUN corepack enable
RUN yarn install

COPY . $APP_ROOT

CMD ["yarn", "dev"]

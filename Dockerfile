FROM node:18-alpine

LABEL author="Marcelo Munhoz <me@marcelomunhoz.com>" \
  version="1.0.0" \
  date_created="2023-03-30" \
  deploy="2023-03-30"

ARG APP_PATH=/app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn \
  && rm -rf /var/cache/apk/* /tmp/* /var/tmp/* /usr/share/man

WORKDIR $APP_PATH

VOLUME $APP_PATH

ENTRYPOINT ["sh"]
FROM node:18-alpine3.18

USER root

# Install only necessary dependencies
RUN apk update && apk add --no-cache git

ENV NODE_ENV=production
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn config set network-timeout 600000 -g && yarn upgrade --latest --force --ignore-engines

COPY . .
RUN yarn build

RUN chown -R node:node /app
EXPOSE 1337

# Run the application as root
CMD ["yarn", "start"]
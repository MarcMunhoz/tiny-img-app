# Tiny IMG App

A simple NodeJS application that use [tinyPNG](https://tinypng.com/developers) API for a smart and elegant image compress.

## Ingredients

- ~~[NodeJS](https://nodejs.org)~~
- ~~[Yarn](https://yarnpkg.com)~~
- [Docker + Docker Compose](https://docs.docker.com/get-docker)

## Installation

```bash
docker compose up -d
```

## How to run it

**- It's mandatory to have an API KEY in [TinyPNG project](https://tinypng.com/developers) to run this app.**

**- Then define the API_KEY in the `.env` file**

**Example bellow**

Copy the image to `img/`

```bash
# inside container
node app.js tinyimg --name=image_name --type=jpg
```

The application will compress the image and will return `img/image_name.min.jpg`

**\* Allowed formats: JPG/PNG**

Thanks! :metal:

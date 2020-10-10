# trustpilot

## About

This project takes three MD5 hashes and calculates the original phrases.

It uses an anagram and dictionary file to help.

## Install

There are only developer dependencies for unit testing and linting. If you want these:

`npm i`

## Run

`npm start`

When running the source, you will be updated when a phrase is found. A final report will be outputted at the end comprising the calculated phrases, the elapsed time, and how many phrases were tested.

## Unit tests

`npm run test`

`npm run test:coverage`

## Linting

This project uses eslint and standard rulesets from Airbnb and Prettier.

`npm run lint`

`npm run lint:fix`

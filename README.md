# trustpilot

## About

This application uses an algorithm to calculate the original phrase from a given MD5 hash.

It uses an anagram and dictionary file to create a lists of words grouped by length.

The algorithm's performance can be improved by setting a minimum word length, for example only trying phrases with words of 5 characters or more.

To remove this feature, set `minimumWordLength` to `0` or `false`

## Install

There are only developer dependencies for unit testing and linting. If you want these:

`npm i`

## Run

`npm start`

The application returns a report comprising the calculated phrase, the elapsed time, and how many phrases were tested.

## Unit tests

`npm run test`

`npm run test:coverage`

## Linting

This project uses eslint and standard rulesets from Airbnb and Prettier.

`npm run lint`

`npm run lint:fix`

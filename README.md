# Created with Create React App

# Movies Library

## Description

A simple movie library that allows users to search for movies and view more information about a movie.

The main purpose of this project was to expirement with [Mock Service Worker](https://mswjs.io/).

See following files: 

- src/index.js - initialise msw to intercept https calls (for local development)
- src/mocks
- src/mocks/mswConfig


- HomePage form submission uses regular axios call however msw intercepts calls

## Learnt

- Intercept http request with service workers and return mock responses
- choosing when to use service workers vs mock service using msw-node


As jest runs in node environment unit tests use msw-node to create mock server



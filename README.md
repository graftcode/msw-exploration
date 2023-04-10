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


As jest runs in node environment unit tests use msw-node to create mock server instead of service workers.


FYI

- pushed env just for the sake of toggling between REACT_APP_ENVIRONMENT variable to toggle between usage of service workers to intercept api calls vs actual api calls


## Screenshots

## When using msw
- REACT_APP_ENVIRONMENT=local
- index.js ensures service workers are initialised to intercept calls
- network tab shows call gets made to actual endpoint but also shows that it's the service worker that intercepts the call and returns response
<img width="337" alt="Screenshot 2023-04-10 at 17 25 31" src="https://user-images.githubusercontent.com/79341629/230946206-be9ce048-eeb2-458d-b152-5899ac88d00c.png">
 <img width="941" alt="Screenshot 2023-04-10 at 17 19 22" src="https://user-images.githubusercontent.com/79341629/230945980-6461f25a-1b74-411f-b50f-15f3c8f333e0.png">
<img width="1440" alt="Screenshot 2023-04-10 at 17 19 59" src="https://user-images.githubusercontent.com/79341629/230945944-91207e25-2315-4666-89c6-032588aa1db3.png">
<img width="1386" alt="Screenshot 2023-04-10 at 17 21 57" src="https://user-images.githubusercontent.com/79341629/230945966-2ccd75e7-8b73-4f3a-b282-5d02ccecd077.png">


## When NOT using msw

- - REACT_APP_ENVIRONMENT=development or anything else

<img width="815" alt="Screenshot 2023-04-10 at 17 29 53" src="https://user-images.githubusercontent.com/79341629/230946439-28911ae5-d2a3-4186-a0b8-02ff3cb74ed1.png">
<img width="1200" alt="Screenshot 2023-04-10 at 17 25 04" src="https://user-images.githubusercontent.com/79341629/230946239-cdd6d8cd-62bb-465f-89fd-dba14453b977.png">



# Simple Page Application

_Updated Monday July 12th 2021 by [cassioblu55](https://github.com/cassioblu55)_

_responding to [this](https://github.com/Daupler/coding-challenge) assessment_


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## First Time Developer Setup

## Install Dependencies 
```bash
npm install
```

## Start localhost

This project will run on port 3000:

```bash
npm start
```

# Requirements
1. Build a single page application using React.
    1. See above to install dependencies and start localhost
2. Include a page with a login form
    1. On startup you will be redirected to this page
    2. Credentials found in `./data/mock_data.js/users` will allow you to log in
    3. Refreshing the page will log you out
3. Include a page that displays the audit table for authenticated users
    1. You will be redirected to the main page on a successful login 
4. The audit table should have a filter bar at the top
    1. Found at `localhost:3000`
        - [x] Is always visible while scrolling
        - [x] Filters by events triggered by the viewer
        - [x] Filters by the issue ID
        - [x] Use the provided JSON data to mock API calls

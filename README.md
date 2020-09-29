## TECH ASSIGNMENT

### This repo contains my submission to a coding assignment

#### I have also added integration tests with cypress and unit tests with jest

## Getting Started

1. Clone the repo and open in your code editor of choice

```
git clone https://github.com/MohammedAK1991/Qoala_assignment
```

2. Install dependencies

```
npm install
```
3. In the root, create a .env.local file with the following variables:
```
REACT_APP_UNSPLASH_API_ACCESS_KEY= <your api key goes here>
```
4. Start the application on localhost

```
npm start
```
5. Launch the test runner in the interactive watch mode
The page will reload if you make edits.<br />
You will also see any lint errors in the console.
```
npm test
```
6. Run integration test with cypress
```
npm run cypress
```
## API Keys

For this demo to work, you must get an API key (along with secret code and collection name) from  [unsplash](https://unsplash.com/documentation#creating-a-developer-account)
This API key must be in the .env.local file `REACT_APP_UNSPLASH_API_ACCESS_KEY`.

##

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

####  Additional Scripts

In the project directory, you can run:

#####  `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

##### `npm run build:prod`

Builds the app for production to a `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

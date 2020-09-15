# Formula 1 - World Champions

In this application you can see the list of winners from 2005 to 2015. The years are shown as timeline in descending order. When clicking on one item, `season` page is shown with all rounds for selected year. Additionally, the world champion for the selected year, will be highlighed on each card/round that he won that year.

The application is developed using Angular Framework and it uses the latest version (10.1.1).

## Prerequisites

In order to run the application, first, you need to have installed Node.js and NPM

## Getting started

To run the application, you need to install all of the dependencies using the following command:

```bash
npm install
```

When the dependencies are installed, run the application using:

```bash
npm start
```

### Testing

Testing is done using the default Angular testing library (karma/jasmine). Tests can be run using:

```bash
npm run test
```

## Architecture

The application at the moment is not modularized since it doesn't have too many pages or functionalities. With adding more features, it can be split into modules with what we will gain more optimized and scalable application. In that case the routes would be lazy-loaded (on demand), not all at once.

## Folder Structure

The whole application is located in `src/app`. In the `app` you can see a list of folders:

- **\_mocks\_** - in this folder I keep the mocked data (response) that are used in the test files
- **components** - this folder has all of the UI components (presentational layer)
- **interceptors** - in this folder I add the interceptors that are used, right now only http interceptor
- **models** - directory where all of the backend replica models are included
- **pages** - this is the place where we fetch the data and parse it if needed (bussines logic)
- **pipes** - custom pipes that are used in the application
- **services** - has two services, one for fetching the data and other one for showing the loading progress bar
- **styles** - the common variables that are used all over the application like colors, fonts, and spacings (theme)

## Styling

For the styling I'm using SCSS in combination with Angular Material. The material library is used mostly for showing the cards, buttons and icons in the application.

## Backend

The application uses the Ergast API which can be found here https://ergast.com/mrd/

## Link

The application is deployed using Firebase just for demo purposes
https://formula-one-f9eb0.web.app/

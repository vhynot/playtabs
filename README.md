# Play Tabs

Project of tablatures search engine with filtering options. Utilizes Songsteer API to get the data from database, ReactJS, Sass in accordance with BEM methodology.

Type artist name, or song title into input field, choose able tablatures from drop-down list. As a result you will obtain tablatures of desired artist/song, available on Songsterr website.

### Live demo: [PlayTabs](https://playtabs.netlify.com/)
## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have installed `npm` or `yarn`

### Installing

First of all clone the repository to your local machine.

Check if you have `node` and `npm` installed. Run this command in your terminal:

```
node -v
```

To confirm that you have npm installed you can run this command in your terminal:

```
npm -v
```

If you checked your node and npm run a development server with:

```
npm start
```

Browser will automatically open `localhost:3000/`

### Deployment

To deploy application run:

```
npm run deploy
```

This will start a build process and push the production version to the `gh-pages` branch

## Built With

- [Create React App](https://github.com/facebook/create-react-app) - Basic set up of React App.
- [Sass](https://github.com/sass/sass) - CSS pre-processor written in accordance with the BEM methodology.
- [Songsteer API](https://www.songsterr.com/a/wa/api) -On search input submit page makes AJAX call to Songsteer database.

## License

This project is licensed under the MIT License

# Trip With Me

This is exapmle project of React application, focused mainly on design and jest frontend. Prepared with UI/UX rules.
Trip With Me is an SPA application which is based on such specific tools like CSS and SASS/SCSS, React, React Hooks, Context API.
This project provides a responsive website that provides information about tours and places to visit.

Project is a React application. There is no external frameworks for UI. It shows a lot of design topics and information how to screate structure for that applications. This project was created generally only for learning. There is no comercial usage, no profit from that project anywhere.

What can you find in this project:

- Vanilla JavaScript features
- Learn React JS library from beginners level
- Context API from beginners level
- CSS Flexbox from beginners level
- Sass or Scss from beginners to advanced
- React Routing
- Accordion with pure React JS
- Image lazy loading with React JS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run scss`

Runs compiler for SCSS files. It converts main.scss into main.css which is later imported into application.
Additionally, this script contains some special flags like: --watch --no-source-map --style compressed.
Basically output file (main.css) is compressed styles file for whole application.

### `npm run dev`

This script is prepared by concurrently package and it provides development environment.
It runs two commands `npm start` and `npm run scss`, so in that case it runs dev server with self-compiled servide for main.scss file.
With this all changes in application will be automatically updated into webside.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

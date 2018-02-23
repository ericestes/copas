This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), although it has been ejected and modified.  

Please read through this entire README and the Create React App's [very thorough documentation](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) **before** contributing to this project.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all necessary dependencies.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm styleguide`

Runs the styleguide in development mode.

## Project Structure

Files within `src/` should be grouped them by feature. For example, a button feature would be structured in this fashion:

```
  src
    ├── assets
    ├── containers
    │    └── Button
    │        ├── Button.js
    │        ├── Button.md
    │        ├── Button.scss
    │        └── Button.test.js
    │        └── index.js
    └── components
```

Most of the files are self-explanatory. `Button.md` contains styleguide information, and `index.js` is a convenience file that exports the React component found in `Button.js`.

## Technologies Used

### Scripting

CoPas is a single-page app built with [React 16](https://reactjs.org/). [React Router](https://reacttraining.com/react-router/web/guides/philosophy) is used for dynamic routing.

If the need for state mangement arises, we will likely use [Redux](https://redux.js.org/) with [Sagas](https://redux-saga.js.org/), but we can re-evaluate when that time comes.

### Styling

The app utilizes [CSS Modules](https://github.com/css-modules/css-modules) and [Sass](http://sass-lang.com/). Vendor prefixes are automatically applied in the build process.

### Testing, Linting, and Code Formatting
  
The app uses [Jest](https://facebook.github.io/jest/) as its test runner, along with [Enzyme](http://airbnb.io/enzyme/) to make it easier to assert, manipulate, and traverse the output of React Components.

Linting is performed with a combination of [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/) and [Prettier](https://prettier.io/)

An [EditorConfig](http://editorconfig.org/) file is also provided.

Tests, linting, and prettier are automatically run when you make a commit.




-------

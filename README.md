# Notes

### useRef hook

- create a reference to a DOM element in a functional component (can be refer to an input, paragraph, any HTML element)
- returns a reference object with a property 'current': you can use this property to read the reference value reference.current, or update reference.current = newValue.
- updating a reference, contrary to updating state, doesn't trigger component re-rendering.
- alternative to handling the input form with value + onChange and state; use it when you just need to read the value, not to connect the value to a state to render the component
- uses: focus an input, get the previous state, set a reference to a DOM element and change it but without making the component to rerender, count number of renders
- there are 2 rules to remember about references:
  a) the value of the reference is persisted (stays the same) between component re-renderings;
  b) updating a reference doesn't trigger a component re-rendering.

### memorization

- it's an optimization technique that speeds up performance by storing our caching.
- the result of an expensive function call when it when the same inputs occur, when it has the same arguments.

### useMemo hook

- returns a memoized value (caching the value so that it does not need to be recalculated)
- only runs when one of its dependencies update -> improve performance
- useMemo and useCallback hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

### useCallback hook

- returns a memoized callback function (every time a component re-renders, its functions get recreated.)
- the useCallback Hook only runs when one of its dependencies update. This can improve performance. - one reason to use useCallback is to prevent a component from re-rendering unless its props have changed
- isolate resource intensive functions so that they will not automatically run on every render.
- If we are using just memo, without useCallback, the comp Button will still rerender- even if the props didn't change because of "referential equality".
  Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed. Use the useCallback hook to prevent the function'addTask' from being recreated unless necessary.

### React.memo

- is a higher order component
- if your component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result.
- React will skip rendering the component, and reuse the last rendered result.
- only checks for prop changes. If your function component wrapped in React.memo has a useState, useReducer or useContext Hook in its implementation, it will still rerender when state or context change.

### Custom Hooks

- can extract component logic into reusable functions.
- if you have stateful logic that needs to be reused in several components, you can build your own custom Hooks
- use the built-in hooks inside the custom hook

### Window.localStorage

- read-only property of the window
- allows you to access a Storage object for the Document's origin;
- the stored data is saved across browser sessions.
- it is similar to sessionStorage, except that while localStorage data has no expiration time, sessionStorage data gets cleared when the page session ends — that is, when the page is closed.

##JSON.Stringify() - Converts a JavaScript object or value to a JSON string.
##JSON.parse() - Converts a JavaScript Object Notation (JSON) string into an object.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

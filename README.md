# Facebook Messenger Clone
This project is a messenging app resembling Facebook Messenger. I created this project using React.js, and hosted it on Firebase. You can try out my project by using the link: https://facebook-messenger-clone-5c4e2.web.app/.

# The Frontend 
For the frontend part of this project, I gained valuable skills in using React.js, and creating different components that controlled different parts of the application. Most of the code was contained in the App.js file, which asks the user for their name, initializes the page, and calls the other components which help construct the typed message. I learned how to use MaterialUI and other animations as a tool to create a sleek looking UI, from the send button to the text bubble animation. One of the challenges in creating the frontend aspect was adopting the traditional form of most messenging apps of the current user's messages being blue and on the right, while other users appear in gray and on the left side. I was able to solve this by creating an isUser variable which checks if the current user matches the user in each text, and if so, change the CSS styling to be either blue or gray.

# The Backend 
For the backend part of this project, I learned how to use Firebase to store all the text messages in a Firestore database. I started by creating a database and linking it to my code, and created a username, message, and timestamp component for each text message. I then used this information to print out the messages, and used the timestamp variable to organize the messages and have the most recent messages show up at the top. One of the biggest challenges in building this backend component was scouring through the Firebase documentation to learn about the recent updates to referencing and using the database in my code.

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
# facebook-messenger-clone

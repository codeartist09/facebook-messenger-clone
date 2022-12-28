# Facebook Messenger Clone
This project is a messenging app resembling Facebook Messenger. I created this project using React.js, and hosted it on Firebase. You can try out my project by using the link: https://facebook-messenger-clone-5c4e2.web.app/.

# The Frontend 
For the frontend part of this project, I gained valuable skills in using React.js, and creating different components that controlled different parts of the application. Most of the code was contained in the App.js file, which asks the user for their name, initializes the page, and calls the other components which help construct the typed message. I learned how to use MaterialUI and other animations as a tool to create a sleek looking UI, from the send button to the text bubble animation. One of the challenges in creating the frontend aspect was adopting the traditional form of most messenging apps of the current user's messages being blue and on the right, while other users appear in gray and on the left side. I was able to solve this by creating an isUser variable which checks if the current user matches the user in each text, and if so, change the CSS styling to be either blue or gray.

![Alt text](/screenshots/messengerapp.jpg?raw=true "UI")

# The Backend 
For the backend part of this project, I learned how to use Firebase to store all the text messages in a Firestore database. I started by creating a database and linking it to my code, and created a username, message, and timestamp component for each text message. I then used this information to print out the messages, and used the timestamp variable to organize the messages and have the most recent messages show up at the top. One of the biggest challenges in building this backend component was scouring through the Firebase documentation to learn about the recent updates to referencing and using the database in my code.

![Alt text](/screenshots/firebase.jpg?raw=true "Firebase")


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To run the project:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

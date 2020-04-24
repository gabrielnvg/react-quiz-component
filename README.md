## Demo
https://react-quiz-component.surge.sh

## Usage
- To customize the quiz (e.g. questions), edit the "quiz-data.js" file.
- There is no maximum number of questions.
- There is no maximum number of alternatives per question.
- A question can have at least one and at most all of its alternatives defined as a correct answer.
- There is no maximum number of results.
- The questions and results images are optionals.
- All images (the "start", "questions" and "results" images) must be 620x290 for better performance and visuals.
- On results, the "range" field defines from which value ("from") to which value ("to") the desired result will be displayed.
**Example 1:** A result with "from: 1" and "to: 3" means that if 1, 2 or 3 questions were answered correctly, this result will be displayed.
**Example 2:** A result with "from: 4" and "to: 4" means that if exactly 4 questions were answered correctly, this result will be displayed.

## Share
### Facebook
If the Facebook share button is to be used, the Facebook App ID goes in "facebookAppId" inside the ShareButton component.

### Share text template
I got ${correctQuestions} out of ${totalQuestions} correct questions on "${quizName}" quiz. Check it here: ${currentUrl}

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies
- [Node.js](https://nodejs.org/en) 12.15.0
- [npm](https://www.npmjs.com/get-npm) 6.13.4
- [create-react-app](https://create-react-app.dev) 3.4.1
- [prop-types](https://www.npmjs.com/package/prop-types) 15.7.2
- [node-sass](https://www.npmjs.com/package/node-sass) 4.13.1


## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

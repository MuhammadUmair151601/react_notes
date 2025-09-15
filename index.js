// **********************INTRO TO REACT******************
// React is a js library containing already huge code libraried used for creative user interfaces.
// It was developed by facebook.
// used for a single page application.
// browser takes HTML and creates DOM. Now in big applications dealing with DOM becomes very difficult.
// so we use react library.
// we don't need querying and updating DOM.
// creates creates small and reusable components in web page.
// react will take care of creating and updating DOM.
// it saves a lot of time.
// JS vs React: Js step by step and react targets the specific part of UI with in the website.
//  We can make the components of the website like header, side and front component etc.
// we can use create react app
// but for learning we will use the vite tool for learning react.

// ********************** METHOD FOR CREATING REACT PROJECT**************
// FOR CREATING PROJECT:
// install node js LTS
// open command screen.
// npm create vite@latest
// are you ok with latest version answer with: y
// give name to project.
// select react
// select JS.
// copy commands from CLI
// open the project folder i-e (first react app):
// npm install in terminal
// npm run dev
// follow host link

// *********************PROJECT COMPONENTS**************************
// now the components of the project which we created:
// node modules: package containing all libraries
// public:contains static files which don't change.
// src: actual source code.
// components: parts of code
// style: contains css styles.
// eslintrc.cjs: shows errors and warnings.
// gitignore: contains all the things which are not used in project.
// index.html: contains the html part
// package.json: all important info about the project like the app name etc.
// packagelock.json: contains different values of elements.
// File extensions:
// .js: contains normal js code. used for general logic
//  and .jsx combines js with HTML like tagsmeans we can use html tags inside js to identify the UI properly.
// makes it easier to design UI
// Jsx is not HTML but its jsx. it converts to regular js.
//Babeljs.io/repl tool allows to see how jsx is transformed to js.

// **********************IMPORTING JSX COMPONENTS AND MAKING FINAL RESULT***********************
//importing one jsx func to another file.
// app.jsx contains a func
// button.jsx contains button func:
// at the top import khbutton() from "./kgButton"
// export default app at the end:
// isi tarha sari components ko karengay import similarly karengay react k components ko import or final product ko arrange kar k export kar lengay.
//When large num of components are defined inside a file. export them separately:
// ***important points***
// funct must start from capital bcz all html components are small by default.
// css can be directly imported in react: 

// ******************DYNAMIC COMPONENTS*********************
// allows the component to bring any kind of changes.
// we can call the functions in the HTML tags.

// ****************REUSABLE COMPONENTS**********************
// created once and called again again if we want to use the same property again and again.

// *******************BOOTSTRAP**************************
// contains already made components code like designed buttons:
// react by prashant first 1hr done:
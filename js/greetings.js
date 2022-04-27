// html is a glue. you open and browser will execute the html file and then html will bring css, js files.
// in html bring the css file first, and js file at the end of the body

// document : how to read html from js's point of view
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const loginWrapper = document.querySelector("#login-wrapper");

const link = document.querySelector("a");

// when submitting the form execute this
// event : information about the event that just happened
const HIDDEN_CLASSNAME = "hidden"; // when the var contains only strings
const USERNAME_KEY = "username";

function OnLogInSubmit(event) {
  event.preventDefault();
  loginWrapper.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME); // hide the form
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); // save key:value in application
  paintGreetings(username); // show the greetings
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

function OnLinkClick(event) {
  event.preventDefault();
}

//link.addEventListener("click", OnLinkClick);

const savedUserName = localStorage.getItem(USERNAME_KEY);
// if there is a saved name in local stroage
if (savedUserName === null) {
  //show the form
  loginWrapper.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", OnLogInSubmit);
} else {
  //show the greetings
  paintGreetings(savedUserName);
}

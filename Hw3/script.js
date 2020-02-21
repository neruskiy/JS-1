'use strict'
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];


const question = prompt("Enter login ...");
const isLoginValid = function(login) {
    if(question.lenght >= 4 && question.lenght <= 16){
        return true 
    } else {
        return false
    }
  };
  
  const isLoginUnique = function(allLogins, login) {
    if(logins.includes(login)){
        return false
    } else {
        return true
    }
  };
  
  const addLogin = function(allLogins, login) {
    if(isLoginValid(question) === true){
        if(loginUnique(login, question) === true){
            logins.push(question);
            return alert("Login has been added!")
        } else {
            return alert("Are you too laziness to think up your own login?")
        } 
    } else {
        if(isLoginValid(question) === false){
            return alert("Error!Login must be between 4 and 16 characters!")
        }
    }
  };
  alert(addLogin(logins, question));
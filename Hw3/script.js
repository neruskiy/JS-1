'use strict'
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const hesUser = prompt("Enter login ...");

const isLoginValid = function(login) {
    if(login.lenght >= 4 && login.lenght <= 16){
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
    if(isLoginValid(login) === true){
        if(loginUnique(login, logins) === true){
            logins.push(login);
            return alert("Login has been added!")
        } else {
            return alert("Are you too laziness to think up your own login?")
        } 
    } else {
        if(isLoginValid(login) === false){
            return alert("Error!Login must be between 4 and 16 characters!")
        }
    }
  };
  
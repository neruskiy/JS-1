'use strict'
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r'

const hesUser = prompt("Enter login ...")
if(hesUser === null){
    alert("Доступ запрещен!")
} else if(hesUser !== adminLogin){
    alert("Неверный логин.Доступ запрещен!")
} else if(hesUser === adminLogin){
    const hesUser = prompt("Enter password ...")
if(hesUser === null){
    alert("Доступ запрещен!")
} else if(hesUser !== adminPassword){
    alert("Неверный пароль.Доступ запрещен!")
} else if(hesUser === adminPassword){
    alert("Welcome!!")
}
}
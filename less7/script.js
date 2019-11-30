///console.log(Window);
//console.log(document.body);

/*const container = document.querySelector("container");
console.log(container);

const btn = document.querySelector("button");
console.log(btn);
btn.onclick = () => {
    console.log(btn.parentNode);
    btn.parentNode.remove();
}
console.log(container.childNodes);
console.log(children);
console.log(container.firstElementChild.children);*/

/*const li = document.querySelectorAll("li");
const arr = [234, 43, 456, 76];
const getArr = arr.reduce((acc, elem) => {
    acc.push(elem);
    return acc;
});*/

/*//const button = document.querySelector('#btn');
const button = document.getElementById('btn');
console.log(button);*/

/*const container = document.querySelector(".container");
container.querySelectorAll('li').forEach(elem => {
    elem.onClick = () =>{
        console.log(elem.textContent)
        if(elem.textContent === "Home"){
            //elem.style.color = 'red'
            elem.classList.add(changeColor);
        }


    }
});*/

/*const createUl = document.createElement("ul");
createUl.classList.add('list');
const createLi = document.createElement("li");
createLi.classList.add('list-item');
createLi.textContent = "this text";
createUl.append(createLi)
console.log(createUl);
console.log(createLi);
document.body.append(createUl);*/

/*document.body.innerHTML =
"<img src='https://www.maxprog.com/img/ostrich.jpg'/>";*/


const refs = {
    container: document.querySelector(".container")
};
console.log(refs.container);
const createElem = (elem, className, createAtribute, nameAtribute) => {
    const newElement = document.createElement(elem);
    newElement.classlist.add(className);
    if(createAtribute){
    newElement.setAtribute(createAtribute, nameAtribute);
    }
    return newElement;
};
//createElem('ul', "list");
//console.log(ul);

const image = createElem(
    "img",
    "image",
    "src",
    "https://www.maxprog.com/img/ostrich.jpg"
);
//console.log(image);
refs.container.append(image);

const people = [
    {
        image:
        "https://www.maxprog.com/img/ostrich.jpg"
    },
    {
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8X4pxyLva4bqpGzCdzOC9wTBHcQMT_8PsV8bdmP25DTQyBvVD&s"
    },
    {
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwHCukDCvl0pabo_NQFjeWCkGd9Yzpc_9sZrItoFoMIafZg0iqGw&s"
    },
    {
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnEHVHoAhOUIamp9pw90fcCFd7Jccp-xPQfa5YjZRGDWU5p6Ug&s"
    },
];
console.log(people);

people.forEach(elem => {
    document.body.attend(createElem("img", "image", "src", elem.image))
});











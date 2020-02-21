const refs = {
    categories: document.getElementById("categories")
};
console.log(refs.categories.children.length);
//console.log(refs.categories.children.length);
const arr = Array.from(refs.categories.children[1]);
const all = refs.categories.children.array.forEach(element => {
    console.log(elem.children[1].children.length)
});
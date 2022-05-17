// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}

function appendCat(name){
    const newCatsArray = [...cats];
    newCatsArray.push(name);
    return newCatsArray;
}

function prependCat(name){
    const newCatsArray = [...cats];
    newCatsArray.unshift(name);
    return newCatsArray;
}

function removeLastCat(){
    const newCatsArray = [...cats];
    newCatsArray.pop();
    return newCatsArray;
}

function removeFirstCat(){
    const newCatsArray = [...cats];
    newCatsArray.shift();
    return newCatsArray;
}
// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
cats;

function destructivelyAppendCat(name) {
    cats.push(name)
    return cats
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats
}

function destructivelyRemoveLastCat() {
    cats.pop()
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift()
    return cats;
}

function appendCat() {
    appendCat = cats.slice();
    appendCat.push("Broom")
    return appendCat
}

function prependCat() {
    prependCat = cats.slice();
    prependCat.unshift("Arnold")
    return prependCat
}

function removeLastCat() {
    removeLastCat = cats.slice();
    removeLastCat.pop();
    return removeLastCat
}

function removeFirstCat() {
    removeFirstCat = cats.slice();
    removeFirstCat.shift();
    return removeFirstCat
}
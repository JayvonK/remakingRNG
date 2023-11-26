function RandomName(array) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}

export { RandomName }
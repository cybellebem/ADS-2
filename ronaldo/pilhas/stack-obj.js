class Stack {
    constructor() {
        this.count = 0;
        this.items = [];
}

push(element) {
    this.items[this.count] = element;
    this.count++;
}

size() {
    return this.count;
}

isEmpty() {
    return this.count === 0;
}

clear() {
    this.items = {};
    this.count = 0;
}

pop() {
    if (this.isEmpty()){
        return undefined;
}
    this.count --;
    const result = this.items[this.count];
    delete this.items[this.count]
    return result;
}

peek() {
    if (this.isEmpty()) {
        return undefined;
    }
    return this.items[this.count - 1];
}

toString() {
    if (this.isEmpty()) {
        return;
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
        objString = `${objString}, ${this.items[i]}`
    }
    return objString;
}

}

module.exports = {
    Stack,
}
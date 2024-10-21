// export default 
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length -1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

const pilha = new Stack();
pilha.push(1);
pilha.push(2);
pilha.push(3);
console.log(pilha.isEmpty());
console.log(pilha.size());
console.log(pilha.peek());
console.log(pilha.pop());
console.log(pilha.pop());
console.log(pilha.pop());
console.log(pilha.isEmpty());
console.log(pilha.size());
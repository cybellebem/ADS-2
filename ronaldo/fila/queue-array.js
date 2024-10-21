class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    isEmpty() {
        return this.items.length === 0;
    }

    nextElement() {
        if (this.isEmpty()) {
            throw new Error('A fila está vazia');
        }
        return this.items[0];
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error('A fila está vazia');
        }
        return this.items.shift();
    }

    toString() {
        return this.items.join(', ');
    }
}

module.exports = Queue;
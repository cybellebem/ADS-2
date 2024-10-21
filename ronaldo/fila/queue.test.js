const Queue = require('./queue-array.js');

describe('Queue', () => {
    let queue;

    beforeEach(() => {
        queue = new Queue();
    });

    test('deve enfileirar elementos', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.toString()).toBe('1, 2, 3');
    });

    test('deve verificar se a fila está vazia', () => {
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
    });

    test('deve retornar o próximo elemento da fila', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.nextElement()).toBe(1);
    });

    test('deve lançar um erro ao verificar o próximo elemento em uma fila vazia', () => {
        expect(() => queue.nextElement()).toThrow('A fila está vazia');
    });

    test('deve desenfileirar elementos', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).toBe(1);
        expect(queue.toString()).toBe('2');
    });

    test('deve lançar um erro ao desenfileirar de uma fila vazia', () => {
        expect(() => queue.dequeue()).toThrow('A fila está vazia');
    });

    test('deve retornar a representação em string dos elementos', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.toString()).toBe('1, 2');
    });
});

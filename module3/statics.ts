{
    // Static

    /// Static use korle ak jayga thekei update sob kichu hobe different memory location theke hobe na. Avong classer nam diye property access korte hobe
    
    class Counter {
        static count = 0;
        increment() {
            return Counter.count = Counter.count + 1;
        }
        decrement() {
            return Counter.count = Counter.count - 1;
        }
    }

    const instance1 = new Counter();
    console.log(instance1.increment()); // 1---> Different memory

    const instance2 = new Counter(); // 1---> Different memory
    console.log(instance2.increment());
}
class QueueFood {
  #container = [];

  enQueue(element) {
    return this.#container.push(element);
  }

  deQueue() {
    return this.#container.shift();
  }

  executeOrder() {
    return new Promise((resolve, reject) => {
      let progress = 0;
      while (progress < 100) {
        progress++;
      }
      for (let i = 0; i < this.#container.length; i++) {
        if (progress == 100) {
          let process = Math.floor(Math.random() * 10000);
          if (process <= 1000) {
            process = process + 1000
          }
          resolve(setTimeout(() => console.log(`QUEUE-${i + 1} ${this.deQueue()} DONE✅ process => ${process}`), process));
        } else {
          reject();
        }
      }
    });
  }
}

module.exports = QueueFood;
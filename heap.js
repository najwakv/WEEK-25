class MaxHeap {
  constructor() {
    this.heap = [];
  }

  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    // let index = this.heap.length - 1;
    let index = Math.floor((this.heap.length - 1) / 2);
    while (
      index >= 0 &&
      this.heap[Math.floor((index - 1) / 2)] < this.heap[index]
    ) {
      this.swap(Math.floor((index - 1) / 2), index);
      index = Math.floor((index - 1) / 2);
    }
  }

  heapifyDown() {
    let index = 0;
    while (2 * index + 1 < this.heap.length) {
      let largerChildIndex = 2 * index + 1;
      if (
        2 * index + 2 < this.heap.length &&
        this.heap[2 * index + 2] > this.heap[2 * index + 1]
      ) {
        largerChildIndex = 2 * index + 2;
      }
      if (this.heap[index] > this.heap[largerChildIndex]) {
        break;
      } else {
        this.swap(index, largerChildIndex);
      }
      index = largerChildIndex;
    }
  }

  printHeap() {
    const output = this.heap.join(" ");
    console.log(output);
  }
}

// Creating the Heap
const heap = new MaxHeap();

// Adding The Elements
heap.add(10);
heap.add(15);
heap.add(30);
heap.add(40);
heap.add(50);
heap.add(60);
heap.add(100);

// Printing the Heap
heap.printHeap();

// Peeking And Removing Top Element
// console.log(heap.peek());
// console.log(heap.remove());

// Printing the Heap After Deletion.
// heap.printHeap();

/* 
    THE OUTPUT HEAP IS LIKE THIS
    
                100
                / \
              40   60
             / \   / \
            10 30 15 50
  */

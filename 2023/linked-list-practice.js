class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //insert head node
  insertHeadNode(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    //if empty make it the head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  //insert at index

  insertAt(data, index) {
    //if index doesn't exists
    if (index > 0 && index > this.size) {
      return;
    }

    //if first index
    if (index === 0) {
      this.insertHeadNode(data);
    }

    const node = new Node(data);
    let curr, prev;

    //set curr to first =
    curr = this.head;
    let count = 0;
    while (count < index) {
      prev = curr; //node before index
      count++;
      curr = curr.next; //node after index
    }

    node.next = curr;
    prev.next = node;

    this.size++;
  }

  //get at index

  //remove at index

  //clear list

  //print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertHeadNode(100);

ll.insertHeadNode(200);
ll.insertHeadNode(300);
ll.insertHeadNode(400);
ll.insertLast(405);

ll.printListData();

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
           if(root.left === null){
            root.left = newNode
           } else {
            this.insertNode(root.left, newNode)
           }
        } else {
            if(root.right === null){
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value){
        if(!root){
            return 'value doesnt exist'
        } else {
            if(root.value === value){
                return 'Value exist'
            } else if (value < root.value){
                return this.search(root.left, value)
            } else if (value > root.value) {
                return this.search(root.right, value)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
}

const bst = new BinarySearchTree()

bst.insert(18)
bst.insert(14)
bst.insert(6)
bst.insert(81)
bst.insert(10)
bst.insert(1)
bst.insert(4)
bst.insert(16)

console.log(bst.search(bst.root, 1))
console.log(bst.search(bst.root, 2))

bst.postOrder(bst.root)
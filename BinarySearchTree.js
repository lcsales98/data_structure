// BST - BINARY SEARCH TREE - ARVORE BINÁRIA DE BUSCA
// armazena valores menores do lado esquerdo e maiores do lado direito


const compareResults = {
    LEFT: 1,
    RIGHT: 2,
    NOT_POSSIBLE: 3,
}

/**
 * Compara se o valor do currentNode é maior que do nextNode
 * @param {BstNode} currentNode 
 * @param {BstNode} nextNode 
 */
function compare(currentNode, nextNode) {
    if(currentNode === undefined) return compareResults.NOT_POSSIBLE
    return currentNode.key > nextNode.key ? compareResults.LEFT : compareResults.RIGHT
}

class BstNode {
    constructor(key) {
        this.key = key
        this.left = undefined
        this.right = undefined
    }
}

class BinarySearchTree {
    constructor(compareFn) {
        let root = undefined
        this.compareFn = compareFn
    }

    /**
     * Insere um nó na arvore se ele nao existir
     * @param {BstNode} node 
     */
    insert(node, currentNode, useRoot = true) {
        if(this.root === undefined) return this.root = node
        if(useRoot) currentNode = this.root
        const result = this.compareFn(currentNode, node)
        console.log(result)
        if(result === compareResults.LEFT){
            if(this.compareFn(currentNode.left, node) === compareResults.NOT_POSSIBLE) {
                currentNode.left = node
                return node
            }
            return this.insert(node, currentNode.left, false)
        } else if(result === compareResults.RIGHT){
            if(this.compareFn(currentNode.right, node) === compareResults.NOT_POSSIBLE) {
                currentNode.right = node
                return node
            }
            return this.insert(node, currentNode.right, false)
        }
    }

    //Este utiliza o percurso em ordem
    see(currentNode, useRoot = true) {
        if(this.root === undefined) return console.log('Árvore vazia.')
        if(useRoot) currentNode = this.root
        if (currentNode) {
            this.see(currentNode.left, false)
            console.log(currentNode.key)
            this.see(currentNode.right, false)
        }
    }
}


const node1 = new BstNode(20)
const node2 = new BstNode(15)
const node3 = new BstNode(25)
const node4 = new BstNode(23)
const node5 = new BstNode(22)

const tree = new BinarySearchTree(compare)

tree.insert(node1)
tree.insert(node2)
tree.insert(node3)
tree.insert(node4)
tree.insert(node5)


console.log(tree)

tree.see()

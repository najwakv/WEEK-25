const matrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
]

console.log(matrix[1][1])

adjacencyList = {
    'A' : ['B'],
    'B' : ['B', 'C'],
    'C' : ['B']
}

console.log(adjacencyList['B'])
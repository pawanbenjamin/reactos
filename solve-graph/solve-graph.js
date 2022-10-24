var graph = {a: ['c'],
 b: ['c'],
 c: ['s', 'r'],
 d: ['a'],
 s: ['a', 'c'],
 r: ['d'],
 z: ['z']
 };

var doesPathExist = function(graph, visited, start, target) {
  visited[start] = true;
  return graph[start].some(function(vertex){
    if (start === target) {
      return true;
    } else if (!visited[vertex]) {
      return doesPathExist(graph, visited, vertex, target);
    } else {
      return false;
    }
  });
};


console.log(doesPathExist(graph, {}, 'a', 'c')) // true
console.log(doesPathExist(graph, {}, 'a', 's')) // true
console.log(doesPathExist(graph, {}, 'a', 'b')) // false
console.log(doesPathExist(graph, {}, 'b', 'a')) // true
console.log(doesPathExist(graph, {}, 'a', 'd')) // true
console.log(doesPathExist(graph, {}, 's', 'r')) // true
console.log(doesPathExist(graph, {}, 'z', 'z')) // true
console.log(doesPathExist(graph, {}, 'c', 'c')) // true

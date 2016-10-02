function isSeller(name) {
  return name[name.length - 1] === 'm';
}

const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];


function breadthFirstSearch(name) {
  let searchQueue = searchQueue.concat(graph[name]);
  const searched = [];

  while (searchQueue.length) {
    let person = searchQueue.shift();

    if (searched.indexOf(person) === -1) {
      if (isSeller(person)) {
        console.log(person + ' is a mango seller!');
        return true;
      } else {
        searchQueue = searchQueue.concat(graph[person]);
        searched.push(person);
      }
    }
  }
  return false;
}

console.log(breadthFirstSearch('you'));

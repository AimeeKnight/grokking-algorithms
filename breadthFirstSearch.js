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


function search(name) {
  let searchQueue = [];
  searchQueue = searchQueue.concat(graph[name]);
  // This array is how you keep track of which people you've searched before.
  const searched = [];
  while (searchQueue.length) {
    let person = searchQueue.shift();
    // Only search this person if you haven't already searched them
    if (searched.indexOf(person) === -1) {
      if (isSeller(person)) {
        console.log(person + ' is a mango seller!');
        return true;
      } else {
        searchQueue = searchQueue.concat(graph[person]);
        // Marks this person as searched
        searched.push(person);
      }
    }
  }
  return false;
}

console.log(search('you'));

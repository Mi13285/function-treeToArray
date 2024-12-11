function treeToArray(tree) {
  return _treetoArrayLevel([].concat(tree));
}
function _treetoArrayLevel(l) {
  l = l || [];
  let res = [];
  let next_level = [];
  for (let i of l) {
    res.push(i.data);
    let child = i.children || [];
    if (child.length) next_level = next_level.concat(child);
  }
  if (!next_level.length) return res;
  return res.concat(_treetoArrayLevel(next_level));
}
class Node {
  constructor(data, children = null) {
    this.data = data;
    this.children = children;
  }
}
console.log(treeToArray(new Node(1)), [1]);
console.log(treeToArray(new Node(1, [new Node(2)])), [1, 2]);
console.log(
  treeToArray(
    new Node(1, [
      new Node(2, [new Node(3), new Node(4), new Node(5)]),
      new Node(3, [new Node(7)]),
    ])
  ),
  [1, 2, 3, 3, 4, 5, 7]
);

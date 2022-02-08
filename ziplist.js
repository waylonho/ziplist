function zipList(list1, list2) {
  const newList = [];
  for (let i = 0; i < list1.length; i++) {
    newList.push(list1[i]);
    newList.push(list2[i]);
  }
  return newList;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

const first = ['a', 'b', 'c', 'd'];
const second = ['1', '2', '3', '4'];
console.log(zipList(first, second));

console.log(zipListTheSimpleWay(first, second));

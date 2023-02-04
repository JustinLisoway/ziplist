const testListA = ['a', 'b', 'c'];
const testListB = [1, 2, 3];

// console.log(testListA);
// console.log(testListB);

function zipList(listA, listB) {
  const newList = [];
  let count = 0;
  for (const elementA of listA) {
    newList.push(elementA);
    newList.push(listB[count]);
    count++;
  }
  return newList;
}

console.log(zipList(testListA, testListB));

function zipListTheSimpleWay(listA, listB) {
  const newList = _.zip(listA, listB);
  return _.flatten(newList);
}

console.log(zipListTheSimpleWay(testListA, testListB));

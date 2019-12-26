// pure function
function add(x, y) {
  return x + y;
}

console.log(add(1, 2));
console.log(add(1, 2));
console.log(add(1, 2));

var counter = 0;
// inpure function
function increament() {
  counter++;
}

console.log(counter);
increament();
increament();
console.log(counter);

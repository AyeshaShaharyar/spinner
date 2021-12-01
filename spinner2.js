let count = 0;
let arr = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

for (let elm of arr) {
  count += 200;
  setTimeout(() => {
    process.stdout.write('\r' + elm + " ");
  }, count );
}



// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);

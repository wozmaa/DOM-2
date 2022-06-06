let arr = ["html", "css", "js"];
const ul = document.createElement("ul");
for (let i = 0; i < arr.length; i++) {
  const li = document.createElement("li");
  ul.append(li);
  li.textContent = arr[i];
}
document.body.append(ul);
console.log(ul);

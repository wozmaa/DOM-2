const render = (array) => {
  const ul = document.createElement("ul");

  for (let i = 0; i < array.length; i++) {
    const li = document.createElement("li");
    li.textContent = array[i];
    ul.append(li);
  }
  document.body.append(ul);
  return ul;
};
let arr = ["html", "css", "js"];
console.log(render(arr));

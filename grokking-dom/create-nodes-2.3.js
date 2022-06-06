const render = (array) => {
  const ul = document.createElement("ul");

  for (let i = 0; i < array.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = array[i].url;
    a.textContent = array[i].name;
    li.append(a);
    ul.append(li);
  }
  document.body.append(ul);
  return ul;
};
let arr = [
  {
    name: "Google",
    url: "https://google.com",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
  },
  {
    name: "intocode",
    url: "https://intocode.ru",
  },
];
console.log(render(arr));

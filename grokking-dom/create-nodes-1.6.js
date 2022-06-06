const div = document.createElement("div");

const ul = document.createElement("ul");

const li1 = document.createElement("li");

const intocode = document.createElement("a");
intocode.textContent = "наш сайт";
intocode.href = "https://intocode.ru/";
intocode.target = "_blanc";

const instagram = document.createElement("a");
instagram.textContent = "наш инстаграм";
instagram.href = "https://instagram.com/intocode";
instagram.target = "_blanc";

const li2 = document.createElement("li");

document.body.append(div);

div.append(ul);
ul.append(li1, li2);
li1.append(instagram);
li2.append(intocode);

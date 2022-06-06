const div = document.createElement("div");
div.className = "red";
console.log(div);

const div1 = document.createElement("div");
div1.className = "green";
console.log(div1);

const div2 = document.createElement("div");
div2.className = "blue";
div2.textContent = "я вложен";
console.log(div2);

document.body.append(div);
div.append(div1);
div1.append(div2);

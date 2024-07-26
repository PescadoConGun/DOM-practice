container = document.querySelector("#container");

const para = document.createElement("p");
para.textContent = "Hey I'm red";
para.style.color = "red";

container.appendChild(para);

const head3 = document.createElement("h3");
head3.textContent = "Hey I'm blue!";
head3.style.color = "blue";

container.appendChild(head3)

const newDiv = document.createElement("div");
newDiv.style.backgroundColor = "pink";
newDiv.style.border = "4px solid black";

const newh1 = document.createElement("h1");
newh1.textContent = "I'm in a div!";
newDiv.appendChild(newh1);

const newp = document.createElement("p");
newp.textContent = "ME TOO!";
newDiv.appendChild(newp)

container.appendChild(newDiv);
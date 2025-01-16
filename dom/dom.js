const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement("p");
p.textContent = "Hey I'm red";
p.style.color = "red";
container.appendChild(p);


const h3 = document.createElement("h3");
h3.textContent = "Hey I'm blue";
h3.style.color = "blue";
container.appendChild(h3);



const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";
container.appendChild(div);


const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);


const p1 = document.createElement("p");
p1.textContent = "Me Too!";
div.appendChild(p1);


btn.addEventListener("click", function (e) {
    console.log(e);
  });

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });



  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});








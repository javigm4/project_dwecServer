const url = "http://localhost:3000/posts";

const options = {
  method: "GET",
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); //probar que funciona

    const ul = document.createElement("ul");

    data.forEach((dataLi) => {
      let li = document.createElement("li");
      li.textContent = dataLi.title;
      ul.appendChild(li);
    });

    document.appendChild(ul);
  });

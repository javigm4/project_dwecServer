const url1 = "http://localhost:3000/posts";
const url2 = "http://localhost:3000/comments";

const options = {
  method: "GET",
};

//posts
fetch(url1, options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); //probar que funciona

    const ul = document.createElement("ul");

    data.forEach((dataLi) => {
      let li = document.createElement("li");
      li.textContent = `${dataLi.title} , ${dataLi.author}`;
      ul.appendChild(li);
    });

    document.body.appendChild(ul);
  });

//comments
fetch(url2, options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); //probar que funciona

    const ul = document.createElement("ul");

    data.forEach((dataLi) => {
      let li = document.createElement("li");
      li.textContent = `${dataLi.body} , ${dataLi.postId}`;
      ul.appendChild(li);
    });

    document.body.appendChild(ul);
  });

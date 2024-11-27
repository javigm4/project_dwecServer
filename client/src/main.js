import "./style.css";

url = "db.json";

const options = {
  method: "GET",
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("https://fakestoreapi.com/products?limit=5")
  .then((res) => res.json())
  .then((store) => {
    products = store;
    console.log(products);

    products.forEach((product) => {
      console.log(product);
      document.querySelector("#holder").innerHTML += `
    <img src=${product.image} height=200 width=250>
    `;
    });
  });

function add() {
  category = document.querySelector("#Category").value;
  description = document.querySelector("#Description").value;
  image = document.querySelector("#Image").value;
  price = document.querySelector("#Price").value;
  rating = document.querySelector("#Rating").value;
  title = document.querySelector("#Title").value;
  submit = { category, description, image, price, rating, title };
  products.push(submit);
}
display = () => {
  document.querySelector("#holder").innerHTML += products;
  `<div>
        <h3>${product.id}</h3>
        <h3>${product.title}</h3>
        </div>`;
};
display();

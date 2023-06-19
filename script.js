// Obtiene la referencia al elemento de lista
const productList = document.getElementById("productList");

// Realiza una solicitud a la API de Fake Store para obtener los productos
fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {
    // La biblioteca sobre los productos y agrega elementos de lista
    products.forEach(product => {
      const li = document.createElement("li");
      li.textContent = product.title;
      productList.appendChild(li);
    });
  });

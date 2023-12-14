import Pizza from './pizza.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function pizzaFormHandler(e) {
  e.preventDefault();
  const selectedToppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(checkbox => checkbox.value);
  const selectedSize = document.querySelector('input[name="size"]:checked');
  const pizzaOrder = new Pizza(selectedSize, selectedToppings);
  const cost = pizzaOrder.getPizzaCost();
  if (selectedSize === null) {
    document.getElementById('error-message').innerText = 'Please select a size option!';
  } else {
    document.getElementById("pizza-cost").textContent = `$${cost}`;
  }
}

window.addEventListener("load", function () {
  document.querySelector("#form").addEventListener("submit", pizzaFormHandler);

  const refresh = document.getElementById("refresh");
  refresh.addEventListener("click", function () {
    location.reload();
  });
});
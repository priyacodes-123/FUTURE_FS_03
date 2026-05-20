const orderButtons = document.querySelectorAll(".order-btn");

const orderList = document.getElementById("order-list");

const totalElement = document.getElementById("total");

let total = 0;

/* ORDER BUTTON FUNCTION */

orderButtons.forEach(button => {

  button.addEventListener("click", () => {

    const item = button.dataset.item;

    const price = Number(button.dataset.price);

    /* REMOVE DEFAULT TEXT */

    if(orderList.innerHTML.includes("No items ordered yet")){

      orderList.innerHTML = "";

    }

    /* CREATE NEW ORDER */

    const li = document.createElement("li");

    li.textContent = `${item} — ₹${price}`;

    orderList.appendChild(li);

    /* UPDATE BILL */

    total += price;

    totalElement.textContent = total;

    /* SHOW MESSAGE */

    alert(`✅ ${item} ordered successfully!
☕ Order sent to waiter.`);

  });

});

/* REVIEW SECTION */

const reviewForm = document.getElementById("review-form");

reviewForm.addEventListener("submit", function(e){

  e.preventDefault();

  const name = document.getElementById("review-name").value;

  const review = document.getElementById("review-text").value;

  const reviewContainer = document.getElementById("review-container");

  /* CREATE REVIEW CARD */

  const reviewCard = document.createElement("div");

  reviewCard.classList.add("review-card");

  reviewCard.innerHTML = `
    <p>"${review}"</p>
    <h4>- ${name}</h4>
  `;

  /* SHOW REVIEW IMMEDIATELY */

  reviewContainer.prepend(reviewCard);

  /* SUCCESS MESSAGE */

  alert("✅ Review submitted successfully!");

  /* CLEAR FORM */

  reviewForm.reset();

});
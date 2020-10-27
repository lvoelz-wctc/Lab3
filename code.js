function calculateLateFees() {

    var lateBooks = prompt("How many late days for books?");
    var lateDvds = prompt("How many late days for DVDs?");

    var lateBooksTotal = lateBooks * .25;
    var lateDvdsTotal = lateDvds * .5;
    var lateTotal = lateBooksTotal + lateDvdsTotal;

    alert(`Total late fees are $${lateTotal}.`);
}

function calculatePizzaCost() {

    var numToppings = prompt("How many toppings?");
    var numPeople = prompt("How many people?");
    var total = 15 + (numToppings * 1.25);
    var costPerPerson = total / numPeople;
    var costDisplay = costPerPerson.toFixed(2);

    alert(`Total per person is $${costDisplay}.`);
}
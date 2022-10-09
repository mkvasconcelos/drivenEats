var cardSelect = "";

function card(card) {
    var button = document.getElementById(card);
    var icon = document.getElementById("food-checkmark-" + card.split("-")[1]);
    if (cardSelect != "") {
        unselect(cardSelect);
    }
    button.style.border = '5px solid green';
    icon.style.display = 'block';
    cardSelect = card;
    return cardSelect;
}

function unselect(card) {
    var button = document.getElementById(card);
    var icon = document.getElementById("food-checkmark-" + card.split("-")[1]);
    button.style.border = '5px solid transparent';
    icon.style.display = 'none';
}

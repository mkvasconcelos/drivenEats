var cardSelect = ["", "", ""];
var receipt = [{ "order": "", "value": 0 }, { "order": "", "value": 0 }, { "order": "", "value": 0 }];

function card(card, type) {
    var button = document.getElementById(card);
    var order = button.children[1].innerHTML;
    var div = button.children[3];
    var h4 = div.children[0];
    var icon = div.children[1];
    var value = h4.children[0].innerHTML;
    value = Number(value.split(",")[0] + "." + value.split(",")[1]).toFixed(2);
    receipt[type]['order'] = order;
    receipt[type]['value'] = value;
    console.log(receipt);
    if (cardSelect[type] != "") {
        unselect(cardSelect[type]);
    }
    button.style.border = '5px solid green';
    icon.style.display = 'block';
    cardSelect[type] = card;
    return cardSelect[type];
}

function unselect(card) {
    var button = document.getElementById(card);
    var div = button.children[3];
    var icon = div.children[1];
    button.style.border = '5px solid transparent';
    icon.style.display = 'none';
}
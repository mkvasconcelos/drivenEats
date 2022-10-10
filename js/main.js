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
    if (cardSelect[type] != "") {
        unselect(cardSelect[type]);
    }
    if (receipt[0]['order'] != "" & receipt[1]['order'] != "" & receipt[2]['order'] != "") {
        finish();
    }
    button.style.border = '5px solid #32B72F';
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

function finish() {
    let body = document.body;
    let footer = body.children[2];
    let button_footer = footer.children[0].children[0];
    button_footer.style.background = '#32B72F';
    button_footer.style.border = "none";
    button_footer.innerHTML = "Fechar pedido";
    button_footer.style.fontWeight = "700";
    button_footer.disabled = false;
}

function send() {
    alert("Deu certo!")
}

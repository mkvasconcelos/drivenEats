let cardSelect = ["", "", ""];
let receipt = [{ "order": "", "value": 0 }, { "order": "", "value": 0 }, { "order": "", "value": 0 }];

function card(card, type) {
    let button = document.getElementById(card);
    let order = button.children[1].innerHTML;
    let div = button.children[3];
    let h4 = div.children[0];
    let icon = div.children[1];
    let value = h4.children[0].innerHTML;
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
    icon.style.display = 'flex';
    cardSelect[type] = card;
    return cardSelect[type];
}

function unselect(card) {
    let button = document.getElementById(card);
    let div = button.children[3];
    let icon = div.children[1];
    button.style.border = '5px solid transparent';
    icon.style.display = 'none';
}

function finish() {
    let body = document.body;
    let footer = body.children[2];
    let button_footer = footer.children[0].children[0].children[0];
    button_footer.style.background = '#32B72F';
    button_footer.style.border = "none";
    button_footer.innerHTML = "Fechar pedido";
    button_footer.style.fontWeight = "700";
    button_footer.disabled = false;
}

function send() {
    let name = prompt("Qual seu nome?");
    let address = prompt("Qual seu endereço?");
    let total = (Number(receipt[0]['value']) + Number(receipt[1]['value']) + Number(receipt[2]['value'])).toFixed(2);
    total = `${total.split(".")[0]},${total.split(".")[1]}`;
    let text = `Olá, gostaria de fazer o pedido: \n - Prato: ${receipt[0]['order']}\n - Bebida: ${receipt[1]['order']} \n - Sobremesa: ${receipt[2]['order']} \n Total: R$ ${total} \n\n Nome: ${name}\n Endereço: ${address}`;
    alert(text);
    let body = document.body;
    // let footer = body.children[2];
    // footer.children[0].children[0].href = wpp;
    let nav = body.children[3];
    console.log(nav);
    nav.style.display = 'flex';
    nav.children[0].innerHTML = text;
    return text;
}

function send_bonus() {
    let text = send();
    let wpp = `https://wa.me/5521965113209?text=${encodeURIComponent(text)}`;
    let body = document.body;
    let footer = body.children[2];
    footer.children[0].children[0].href = wpp;
}

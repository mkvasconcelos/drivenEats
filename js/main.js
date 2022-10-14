let cardSelect = ["", "", ""];
let receipt = [{ "order": "", "value": 0 }, { "order": "", "value": 0 }, { "order": "", "value": 0 }];
let finalText = "";

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
    button.classList.toggle("card_switch");
    icon.classList.toggle("icon_switch");
    cardSelect[type] = card;
    return cardSelect[type];
}

function unselect(card) {
    let button = document.getElementById(card);
    let div = button.children[3];
    let icon = div.children[1];
    button.classList.toggle("card_switch");
    icon.classList.toggle("icon_switch");
}

function finish() {
    let body = document.body;
    let footer = body.children[2];
    let button_footer = footer.children[0].children[0].children[0];
    button_footer.classList.add("button_footer");
    button_footer.innerHTML = "Fechar pedido";
    button_footer.disabled = false;
}

function send() {
    let name = prompt("Qual seu nome?");
    let address = prompt("Qual seu endereço?");
    let total = (Number(receipt[0]['value']) + Number(receipt[1]['value']) + Number(receipt[2]['value'])).toFixed(2);
    total = `${total.split(".")[0]},${total.split(".")[1]}`;
    let text = `Olá, gostaria de fazer o pedido: \n - Prato: ${receipt[0]['order']}\n - Bebida: ${receipt[1]['order']} \n - Sobremesa: ${receipt[2]['order']} \n Total: R$ ${total} \n\n Nome: ${name}\n Endereço: ${address}`;
    let body = document.body;
    let header = body.children[0];
    let main = body.children[1];
    let footer = body.children[2];
    header.classList.toggle("opacity");
    main.classList.toggle("opacity");
    footer.classList.toggle("opacity");
    let nav = body.children[3];
    nav.classList.toggle("nav_display");
    nav.children[1].children[0].innerText = receipt[0]['order'];
    nav.children[1].children[1].innerText = `${receipt[0]['value'].split(".")[0]},${receipt[0]['value'].split(".")[1]}`;
    nav.children[2].children[0].innerText = receipt[1]['order'];
    nav.children[2].children[1].innerText = `${receipt[1]['value'].split(".")[0]},${receipt[1]['value'].split(".")[1]}`;
    nav.children[3].children[0].innerText = receipt[2]['order'];
    nav.children[3].children[1].innerText = `${receipt[2]['value'].split(".")[0]},${receipt[2]['value'].split(".")[1]}`;
    nav.children[4].children[1].innerText = `R$ ${total}`;
    finalText = text;
}

function send_bonus() {
    let text = finalText;
    let wpp = `https://wa.me/5521965113209?text=${encodeURI(text)}`;
    let body = document.body;
    let nav = body.children[3];
    nav.children[5].href = wpp;
}

function cancel() {
    let body = document.body;
    let header = body.children[0];
    let main = body.children[1];
    let footer = body.children[2];
    header.classList.toggle("opacity");
    main.classList.toggle("opacity");
    footer.classList.toggle("opacity");
    let nav = body.children[3];
    nav.classList.toggle("nav_display");
}

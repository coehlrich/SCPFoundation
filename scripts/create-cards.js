var cards = document.getElementsByClassName("create-card");
for (var i = 0; i < cards.length; i++) {
    var element = cards.item(i);

    var cardTitle = element.getElementsByClassName("card-title").item(0);
    var id = "card-" + i;

    var content = element.innerHTML;
    element.innerHTML = "";

    var wrapper = document.createElement("div");
    wrapper.classList.add("m-3");

    var button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.classList.add("mx-auto");
    button.classList.add("d-block");
    button.classList.add("m-3");
    button.type = "button";
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("data-bs-target", "#" + id);
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", id);
    var buttonText = cardTitle.innerText;
    if (!buttonText.endsWith(":")) {
        buttonText = buttonText.substring(buttonText.indexOf(":") + 1);
    } else if (buttonText.includes(":")) {
        buttonText = buttonText.replace(":", "");
    }
    button.innerText = buttonText;

    wrapper.appendChild(button);

    var card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("bordered");
    card.classList.add("shadow");

    var cardBodyWrapper = document.createElement("div");
    cardBodyWrapper.classList.add("collapse");
    cardBodyWrapper.id = id;

    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.innerHTML = content;

    cardBodyWrapper.appendChild(cardBody);

    card.appendChild(cardBodyWrapper);

    wrapper.appendChild(card);

    element.appendChild(wrapper);
}
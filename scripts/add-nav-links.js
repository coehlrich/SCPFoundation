const excluded = [1];
const lastItem = 6;

var navLinks = document.getElementById("navbar-links");
for (var itemNumber = 1; itemNumber <= lastItem; itemNumber++) {
    if (!excluded.includes(itemNumber)) {
        var listItem = document.createElement("li");
        listItem.className = "nav-item";
        
        var link = document.createElement("a");
        link.classList.add("nav-link");
        
        var itemNumberString = itemNumber.toString();
        var numberOfDigits = itemNumberString.length;
        for (var i = 0; i < 3 - numberOfDigits; i++) {
            itemNumberString = "0" + itemNumberString;
        }

        var itemName = "SCP-" + itemNumberString;
        var pageName = itemName.toLowerCase() + ".html";

        if (window.location.pathname.endsWith("/" + pageName)) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }

        link.href = pageName;
        link.innerText = itemName;

        listItem.appendChild(link);
        navLinks.appendChild(listItem);
    }
}
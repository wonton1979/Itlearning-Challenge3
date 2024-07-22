document.getElementById("menu-close").addEventListener("click", function (){
    const menu = document.getElementById("menu");
    menu.style.transform = "translateX(230px)";
    menu.style.display = "hidden";
})

document.getElementById("menu-icon").addEventListener("click", function (){
    const menu = document.getElementById("menu");
    menu.style.display = "block";
    menu.style.transform = "translateX(0)";
})




//Event Listener for Gallery page
let cartItemQuantity = 0;

document.getElementById("trolley_icon").addEventListener("click", function (){
    const itemsQuantityInCart = document.getElementById("quantity-in-cart");
    const quantityValue = document.getElementById("quantity-select");
    cartItemQuantity += parseInt(quantityValue.value);
    itemsQuantityInCart.innerText = `${cartItemQuantity}`;
    if (cartItemQuantity > 9){
        itemsQuantityInCart.style.fontSize = "1.3rem";
        itemsQuantityInCart.style.left = "10px";
    }
    this.style.animation = "trolley-roll-rover 1s ease-in 1";
})


class ItemInfo {
    constructor(modelNumber) {
        this.modelNumber = modelNumber;
        this.price = 0;
        this.description = "";
    }
}

let lego60386 = new ItemInfo('60386');
lego60386.price = 29.99;
lego60386.description = "Teach kids about the environment with this cool LEGO City Recycling Truck toy with a sorting centre, toy containers, 3 minifigures and a cat figure.";

let lego41746 = new ItemInfo('41746');
lego41746.price = 24.99;
lego41746.description = "This LEGO Friends Horse Training set for kids aged 4+ features a horse stable toy, horse and pony figures, plus 2 mini-dolls for fun on the farm.";

let lego75322 = new ItemInfo('75322');
lego75322.price = 59.99;
lego75322.description = "The AT-ST toy walker features a hatch accessible cockpit, opening roof, wheel-operated rotating head, 2 spring-loaded shooters & posable legs.";

let lego71820 = new ItemInfo('71820');
lego71820.price = 79.99;
lego71820.description = "Detachable ninja toys for boys and girls – The large NINJAGO LEGO vehicle can be separated into 4 smaller toy vehicles for fun role play.";

let lego76949 = new ItemInfo('76949');
lego76949.price = 119.99;
lego76949.description = "LEGO Jurassic World Giganotosaurus & Therizinosaurus Attack features 2 posable dinosaur toy figures for kids, a buildable HQ, a toy garage for the ATV car toy, an observation tower and a helicopter.";

let lego76247 = new ItemInfo('76247');
lego76247.price = 44.99;
lego76247.description = "LEGO Marvel buildable toy features a Hulkbuster mech action figure that kids can use to recreate Marvel Studios’ Avengers: Infinity War action.";

let lego31136 = new ItemInfo('31136');
lego31136.price = 19.99;
lego31136.description = "This LEGO Creator 3in1 animal toy set features 3 animals for kids 7+ years old: a parrot toy perched on a branch, a playful frog and a toy fish.";

let lego42168 = new ItemInfo('42168');
lego42168.price = 37.99;
lego42168.description = "Farm toy for kids aged 9+ – Inspire young farming fans to build and explore this LEGO Technic John Deere 9700 Forage Harvester toy for boys and girls.";

let lego76424 = new ItemInfo('76424');
lego76424.price = 12.99;
lego76424.description = "LEGO Harry Potter car toy – Give kids a magical introduction to the Wizarding World with this buildable model of the Weasleys’ Flying Ford Anglia car.";

document.getElementById("add-product-close").addEventListener("click", function () {
    const popupFrame = document.getElementById("gallery-card-deck");
    popupFrame.style.display = "none";
})

//"","","","","","","",""
let legoModelsList = [lego60386,lego41746,lego75322,lego71820,lego76949,lego76247,lego31136,lego42168,lego76424];


for (let eachModel of legoModelsList){
    document.getElementById(eachModel.modelNumber).addEventListener("click", (ev) =>shoppingItemInfo(ev,eachModel) );
}


function shoppingItemInfo(ev,modelInfo){
    const itemImageInfo = document.getElementById(`img-${modelInfo.modelNumber}`);
    const itemImageSrc = document.getElementById("shopping-item-image");
    const itemTitle = document.getElementById("shopping-item-title");
    const itemPrice = document.getElementById("shopping-item-price");
    const itemDescription = document.getElementById("shopping-item-description");
    const trolleyIcon = document.getElementById("trolley_icon");
    const shoppingFrame = document.getElementById("gallery-card-deck");

    itemImageSrc.src = itemImageInfo.getAttribute("src");
    itemTitle.innerText = itemImageInfo.getAttribute("title");
    itemPrice.innerText = "£ "+ modelInfo.price
    itemDescription.innerText = modelInfo.description
    shoppingFrame.style.display = "block";
    if (ev.pageY > 900){
        shoppingFrame.style.top = `${ev.pageY-130}px`; // Getting the page Y coordinate
    }
    else{
        shoppingFrame.style.top = "35vh";
    }

    trolleyIcon.style.animation = "";

}



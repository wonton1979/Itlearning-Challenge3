document.getElementById("menu-close").addEventListener("click", closeMenu)
document.getElementById("btn-popup-close").addEventListener("click", closePopupFrame)
document.getElementById("menu-icon").addEventListener("click", showMenu)


document.getElementById("btn-new-product-read-more").addEventListener("click", textFadeeffect)
document.getElementById("city-frame").addEventListener("click", (e)=>{showFrame(0,"city",e)})
document.getElementById("friends-frame").addEventListener("click", (e)=>{showFrame(1,"friends",e)})
document.getElementById("ninjago-frame").addEventListener("click", (e)=>{showFrame(2,"ninjago",e)})
document.getElementById("jurassic-frame").addEventListener("click", (e)=>{showFrame(3,"jurassic",e)})
document.getElementById("technic-frame").addEventListener("click", (e)=>{showFrame(4,"technic",e)})
window.addEventListener("resize", getWindowSize);
document.getElementById("contact-us-form").addEventListener("submit",(event)=>{validateForm(event)},false)


let featuredDes = [];
let featuredTitle = [];
let popupClosed = false;

featuredTitle[0] = "Lego City --  Your City, Your Story !";
featuredDes[0] = "LEGO City is a vibrant, bustling urban landscape where creativity and adventure thrive." +
    "                        This dynamic metropolis is designed for endless fun and exploration," +
    "                        featuring everything from towering skyscrapers and bustling streets to serene parks and busy construction sites." +
    "                        Whether you're building your own fire station, police headquarters, or creating an intricate transportation network," +
    "                        LEGO City offers a canvas for your imagination to run wild." +
    "                        With its diverse range of sets and minifigures, each brimming with personality and charm," +
    "                        LEGO City invites builders of all ages to craft their own unique stories and bring their urban fantasies to life.";

featuredTitle[1] = "LEGO Friends: Where Imagination Meets Friendship !";
featuredDes[1]= "LEGO Friends is a vibrant line of construction toys designed for children aged 6 to 12, " +
    "centered around the adventures of five best friends in the fictional town of Heartlake City. " +
    "The characters—Olivia, Stephanie, Emma, Mia, and Andrea—each bring unique interests like science, " +
    "sports, art, nature, and music, promoting creativity, teamwork, and storytelling. " +
    "With detailed sets featuring interactive builds, " +
    "LEGO Friends encourages imaginative play and celebrates diversity and inclusion. Beyond the toys, " +
    "the brand offers animated series, " +
    "online games, and apps, providing an immersive experience that highlights the themes of friendship, " +
    "adventure, and creativity.";

featuredTitle[2] = "LEGO Ninjago: Rise of the Elemental Warriors !";
featuredDes[2]= "LEGO Ninjago is an exciting LEGO theme set in the mystical world of Ninjago, " +
    "where a group of young ninjas, trained by the wise Master Wu, " +
    "embark on thrilling adventures to protect their realm from various villains. " +
    "Each ninja wields unique elemental powers, such as fire, ice, earth, and lightning, " +
    "and utilizes the ancient martial art of Spinjitzu to combat threats. The series combines action, fantasy, " +
    "and rich storytelling, featuring intricate sets, dynamic minifigures, " +
    "and epic battles, making it a beloved franchise among fans of all ages.";

featuredTitle[3] = "LEGO Jurassic World: Adventures in Dino Valley !";
featuredDes[3]= "LEGO Jurassic World is an adventurous LEGO theme that brings the excitement of the Jurassic Park and " +
    "Jurassic World movies to life with a playful twist. Set in the iconic Isla Nublar and Isla Sorna, " +
    "this theme features detailed sets of dinosaur habitats, research facilities, and thrilling escape scenarios. " +
    "The minifigures include beloved characters like Owen Grady, Claire Dearing, and various scientists and park staff, " +
    "each engaged in daring rescues and epic dinosaur encounters. With a diverse range of dinosaurs, " +
    "from the mighty T-Rex to the clever Velociraptors, LEGO Jurassic World combines action, exploration, " +
    "and imaginative play, allowing fans to create their own dinosaur-filled adventures";

featuredTitle[4] = "LEGO Technic: The Art of Advanced Engineering !";
featuredDes[4]= "LEGO Technic is a sophisticated LEGO theme designed for advanced builders, " +
    "offering an immersive experience in mechanical engineering and design. " +
    "Featuring intricate models with realistic functions such as working gears, " +
    "motors, and pneumatic systems, " +
    "LEGO Technic sets allow enthusiasts to construct detailed replicas of vehicles, " +
    "machinery, and robotics. These sets often include advanced building techniques and specialized elements that " +
    "challenge builders to explore the principles of engineering and mechanics. " +
    "With themes ranging from supercars and construction equipment to aircraft and renewable energy, " +
    "LEGO Technic inspires creativity and problem-solving, " +
    "making it a favorite among aspiring engineers and tech enthusiasts.";

function closePopupFrame(){
    const popupFrame = document.getElementById("theme-description");
    popupFrame.style.animationName = "popDisappear";
    popupFrame.style.animationDuration = "3s";
    popupFrame.style.animationIterationCount = "1";
    popupFrame.style.animationFillMode = "forwards";
    popupClosed = true;
}

function closeMenu() {
    const menu = document.getElementById("menu");
    menu.style.transform = "translateX(230px)";
    menu.style.display = "hidden";
}

function showMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = "block";
    menu.style.transform = "translateX(0)";
}

function textFadeeffect(){
    const readMoreContent = document.getElementById("lego-dream-content");
    readMoreContent.style.animation= "contentFadeOut 2s linear forwards";
    setTimeout(changeText,2000);
}

function changeText(){
    const readMoreContent = document.getElementById("lego-dream-content");
    const readMoreButton = document.getElementById("btn-new-product-read-more");
    readMoreContent.innerHTML = "<h5>Concept and Theme</h5>\n" +
        "    <ul>\n" +
        "        <li><strong>Imaginative Play:</strong> At its core, LEGO DREAMZzz™ revolves around the concept of dreams and the limitless possibilities they bring. It invites builders to step into a world where anything is possible, combining fantasy with reality.</li>\n" +
        "        <li><strong>Storytelling:</strong> The theme often includes a rich narrative that follows characters as they embark on dream-fueled adventures, facing challenges and exploring dreamlike landscapes.</li>\n" +
        "    </ul>\n" +
        "\n" +
        "    <h5>Key Features</h5>\n" +
        "    <ul>\n" +
        "        <li><strong>Unique Characters:</strong> The sets often feature a cast of original characters, each with distinct personalities and dream-inspired abilities. These characters serve as the protagonists in the overarching storyline.</li>\n" +
        "        <li><strong>Fantastic Settings:</strong> LEGO DREAMZzz™ sets transport builders to whimsical and surreal locations such as floating islands, enchanted forests, and mystical castles. These settings are designed to inspire creative building and storytelling.</li>\n" +
        "    </ul>\n" +
        "\n"
    readMoreContent.style.animation= "contentFadeIn 2s linear forwards";
    readMoreButton.style.display = "none";
}

function getWindowSize() {
    let window_width = window.innerWidth;
    if (window_width >= 980) {
        const menu = document.getElementById("menu");
        menu.style.transform = "translateX(230px)";
    }
    const popupTitle = document.getElementById("popup-title");
    popupTitle.style.whiteSpace = "normal";
    popupTitle.style.display = "grid";
    popupTitle.style.paddingRight = "1vw";
}

function clearPopupContent(){
    const popupFrame = document.getElementById("theme-description");
    popupFrame.innerHTML = "";
    let popupFrameClose = document.createElement("div");
    let popupFrameCloseIcon = document.createElement("i");
    popupFrameClose.classList.add("col-lg-12");
    popupFrameClose.classList.add("popup-frame-icon-container");
    popupFrameCloseIcon.classList.add("material-icons");
    popupFrameCloseIcon.setAttribute("id","btn-popup-close");
    popupFrameCloseIcon.innerHTML = "close";
    popupFrame.appendChild(popupFrameClose);
    popupFrameClose.appendChild(popupFrameCloseIcon);
    document.getElementById("btn-popup-close").addEventListener("click", closePopupFrame)
}

function showFrame(frame_id,frame_name,event) {
    if (popupClosed === true){
        clearPopupContent();
    }
    event.preventDefault();
    const theme_des = document.getElementById("theme-description");
    theme_des.style.visibility = "visible";
    theme_des.style.animationName = "popScale";
    theme_des.style.animationDuration = "3s";
    theme_des.style.animationIterationCount = "1";
    theme_des.style.animationFillMode = "forwards";
    theme_des.style.display = "flex";
    addCardElement(theme_des,frame_id,frame_name);
}

function addCardElement(parentElement,frame_id,frame_name) {
    let childElement = document.createElement("div");
    let cardImage = document.createElement("img");
    let textDescription = document.createElement("div");
    let textDesSpan = document.createElement("div");
    let desInDetails = document.createElement("div");
    textDescription.classList.add("container-test");
    textDescription.classList.add("col-lg-6");
    childElement.classList.add("col-lg-5");
    childElement.classList.add("popup-img");
    textDesSpan.classList.add("typed-test");
    textDesSpan.classList.add("text-center");
    textDesSpan.setAttribute("id","popup-title");
    desInDetails.classList.add("des-in-details");
    textDesSpan.innerText = featuredTitle[frame_id];
    childElement.setAttribute("id", "card");
    childElement.style.objectFit = "contain";
    childElement.style.marginTop = '10vh';
    childElement.style.marginBottom = "1vh";
    parentElement.appendChild(childElement);
    parentElement.appendChild(textDescription);
    childElement.appendChild(cardImage);
    textDescription.appendChild(textDesSpan);
    textDescription.appendChild(desInDetails);
    desInDetails.innerText = featuredDes[frame_id];
    cardImage.src = `Images/lego_${frame_name}_large.webp`;
    cardImage.style.maxWidth = "88%";
    cardImage.style.maxHeight = "88%";
    cardImage.style.display ='inline-block';
    cardImage.style.borderRadius = "6px";
}

function validateForm(event) {
    let firstname = document.forms["contact-us-form"]["InputFullName"].value;
    let message = document.forms["contact-us-form"]["InputTextarea"].value;
    let email = document.forms["contact-us-form"]["InputEmail"].value;
    const name_pattern = /^[a-zA-Z\s]+$/;
    const email_pattern =/^([a-z0-9.-_]+)@([a-z0-9_-])+\.[a-z]{2,10}(.[a-z]{2,8})?$/i;
    let full_name_check = name_pattern.test(firstname);
    let email_check = email_pattern.test(email);
    let message_check = true;
    if (message.length < 50){
        message_check = false;
    }
    if (full_name_check === false) {
        event.preventDefault();
        document.getElementById('InputFullName').value = "";
        document.getElementsByName("FullName")[0].placeholder = "Please input your Full Name correctly !";
        document.getElementById('InputFullName').classList.add("change-placeholder-color");
        document.getElementById('InputFullName').style.borderColor = "red";
        document.getElementById('InputFullName').style.color = "red";
    }
    else if(email_check === false) {
        event.preventDefault();
        document.getElementById('InputEmail').value = "";
        document.getElementsByName("Email")[0].placeholder = "Please input your Email correctly !";
        document.getElementById('InputEmail').classList.add("change-placeholder-color");
        document.getElementById('InputEmail').style.borderColor = "red";
        document.getElementById('InputEmail').style.color = "red";
    }
    else if(message_check === false) {
        event.preventDefault();
        document.getElementById('InputTextarea').value = "";
        document.getElementsByName("Message")[0].placeholder = "Please input your Message correctly, Make sure the message has as least 50 characters long !";
        document.getElementById('InputTextarea').classList.add("change-placeholder-color");
        document.getElementById('InputTextarea').style.borderColor = "red";
        document.getElementById('InputTextarea').style.color = "red";
    }
    else{
        submitMessage()
    }
}

function submitMessage(){
    document.getElementById('form-contact-us').innerHTML = "";
    document.getElementById('form-contact-us').innerHTML = "<p id='response-message'>Thanks for sending us the message, We appreciate your valuable feedback and will get back to you within 48 hours !</p>"
    document.getElementById('response-message').style.letterSpacing = "0.1rem";
    document.getElementById('response-message').style.lineHeight = "2.2rem";
    document.getElementById('response-message').style.textAlign = "justify";
    document.getElementById('response-message').style.color = "black";
    document.getElementById('response-message').style.fontWeight = "400";
}




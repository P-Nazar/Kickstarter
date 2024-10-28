"use strict";
// burger
const burgerOpen = document.querySelector(".burger__open");
const burgerClose = document.querySelector(".burger__close");
const menu = document.querySelector(".menu");
const body = document.body;
const menuLinks = document.querySelectorAll(".nav__link");
burgerOpen.addEventListener("click", ()=>{
    burgerOpen.classList.add("rotated");
    setTimeout(()=>{
        burgerOpen.style.display = "none";
        burgerClose.style.display = "block";
    }, 300);
    menu.classList.add("menu--active");
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.width = "100%";
});
burgerClose.addEventListener("click", closeMenu);
function closeMenu() {
    burgerOpen.style.display = "block";
    burgerClose.style.display = "none";
    menu.classList.remove("menu--active");
    setTimeout(()=>{
        burgerOpen.classList.remove("rotated");
    }, 100);
    body.style.overflow = "";
    body.style.position = "";
    body.style.width = "";
}
menuLinks.forEach((link)=>{
    link.addEventListener("click", (e)=>{
        e.preventDefault();
        closeMenu();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    });
});
// lang
const translations = {
    en: {
        story: "OUR STORY",
        about: "ABOUT US",
        features: "FEATURES",
        touch: "GET IN TOUCH",
        specs: "SPECS",
        buy: "BUY",
        presentationTitle: "Futuristic Wireless Speaker",
        presentationText: "Luna\u2019s performance is balanced and smooth in all frequency ranges which makes the music both naturally pleasant and distinctly more layered.",
        cardTitleFirst: "Futuristic Design",
        cardTextFirst: "To give Luna a truly flawless look, we specifically picked aircraft grade aluminum as its material and adopted both three-dimensional stretch-bending technology and a high precision cold forging technique.",
        cardTitleSecond: "Tweeter Speaker System",
        cardTextSecond: "To deliver a more layered sound performance better than a sole full-range speaker, our team equipped Luna with one more tweeter speaker responsible for high-frequency sound independently.",
        cardTitleThird: "Multiroom System",
        cardTextThird: "Luna is natively compatible with your home Wi-Fi. Set up multiple speakers in different rooms to expand your music experience into the entire house.",
        cardTitleFourth: "Intuitive Lighting System",
        cardTextFourth: "An intuitive user interface allows you to adjust the hue and saturation of color for lighting that fits any mood and situation.",
        aboutTitle: "DESIGNED FOR THE FUTURE",
        aboutText: "In 2014, a group of geeky industrial designers, engineering veterans and acoustic experts formed crazybaby. This is a bunch of passionate people who are crazy enough to think they can challenge the industry with disruptive audio products.",
        aboutLink: "See more about us",
        technologyTitle: "Luna Eye",
        technologyText: "Luna Eye is to the essence of this innovative light and audio system. It comprises an independent tweeter speaker, a light guiding component, a dome and a ring ornament.",
        testimonilasText: "\u201CIt really took me by surprise honestly to have such full beautiful sound that coming out of this small compact device. And with the brush aluminum surface, it feels so familiar. Like my iPhone.\u201D",
        testimonilasRole: "Creative Director",
        featuresTitle: "FEATURES",
        featuresAppTitle: "App Features",
        slideAppOne: "Customize Music Schedule",
        slideAppTwo: "Wake Up with Favorite Songs",
        slideAppThird: "Home Detection Auto Wake Up",
        slideAppFour: "Color Wheel",
        featuresConnectivityTitle: "Connectivity",
        slideConnectivityOne: "Hands Free Wireless Audio",
        slideConnectivityTwo: "Bluetooth 4.0 LE",
        slideConnectivityThird: "Wi-Fi 2.4 GHz (802.11 b/g/n)",
        slideConnectivityFour: "Smart Multiroom System Set Up",
        slideConnectivityFive: "Party Mode with 6.0 Units and above",
        slideConnectivitySix: "MESHNET Multi Speaker Network",
        featuresSoundTitle: "Sound & Music",
        slideSoundpOne: "Feel-in-chest Base Power",
        slideSoundpTwo: "Lossless Digital Audio Transmission",
        slideSoundpThird: "Easy & Stable Stereo Pairing",
        slideSoundpFour: "Crisp and Clear High Frequency Sound",
        slideSoundpFive: "Streams from Cloud Music and Local Library",
        slideSoundpSix: "Auto Music from Last Song Stopped",
        questionsTitle: "DO YOU HAVE ANY QUESTIONS?",
        questionsButton: "SEND",
        footerRights: "\xa9 2024 All rights reserved. Terms of Use & Privacy Policy"
    },
    ua: {
        story: "\u041D\u0410\u0428\u0410 \u0406\u0421\u0422\u041E\u0420\u0406\u042F",
        about: "\u041F\u0420\u041E \u041D\u0410\u0421",
        features: "\u041E\u0421\u041E\u0411\u041B\u0418\u0412\u041E\u0421\u0422\u0406",
        touch: "\u0417\u0412'\u042F\u0416\u0406\u0422\u042C\u0421\u042F",
        specs: "\u0421\u041F\u0415\u0426\u0418\u0424\u0406\u041A\u0410\u0426\u0406\u0407",
        buy: "\u041A\u0423\u041F\u0418\u0422\u0418",
        presentationTitle: "\u041D\u043E\u0432\u0438\u0439 \u0430\u0443\u0434\u0456\u043E\u0431\u043E\u043A\u0441",
        presentationText: "\u0413\u0440\u0430 Luna \u0437\u0431\u0430\u043B\u0430\u043D\u0441\u043E\u0432\u0430\u043D\u0430 \u0442\u0430 \u043F\u043B\u0430\u0432\u043D\u0430 \u0443 \u0432\u0441\u0456\u0445 \u0447\u0430\u0441\u0442\u043E\u0442\u043D\u0438\u0445 \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0430\u0445, \u0449\u043E \u0440\u043E\u0431\u0438\u0442\u044C \u043C\u0443\u0437\u0438\u043A\u0443 \u043F\u0440\u0438\u0440\u043E\u0434\u043D\u043E \u043F\u0440\u0438\u0454\u043C\u043D\u043E\u044E \u0442\u0430 \u043F\u043E\u043C\u0456\u0442\u043D\u043E \u0431\u0456\u043B\u044C\u0448 \u0431\u0430\u0433\u0430\u0442\u043E\u0448\u0430\u0440\u043E\u0432\u043E\u044E.",
        cardTitleFirst: "\u0424\u0443\u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u043D\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D",
        cardTextFirst: "\u0429\u043E\u0431 \u043D\u0430\u0434\u0430\u0442\u0438 Luna \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0431\u0435\u0437\u0434\u043E\u0433\u0430\u043D\u043D\u0438\u0439 \u0432\u0438\u0433\u043B\u044F\u0434, \u043C\u0438 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u043E \u043E\u0431\u0440\u0430\u043B\u0438 \u0430\u043B\u044E\u043C\u0456\u043D\u0456\u0439 \u0430\u0432\u0456\u0430\u0446\u0456\u0439\u043D\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0443 \u044F\u043A \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B \u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043B\u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u044E \u0442\u0440\u0438\u0432\u0438\u043C\u0456\u0440\u043D\u043E\u0433\u043E \u0440\u043E\u0437\u0442\u044F\u0433\u043D\u0435\u043D\u043D\u044F \u0442\u0430 \u0437\u0433\u0438\u043D\u0430\u043D\u043D\u044F, \u0430 \u0442\u0430\u043A\u043E\u0436 \u043C\u0435\u0442\u043E\u0434 \u0432\u0438\u0441\u043E\u043A\u043E\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u0433\u043E \u043A\u0443\u0432\u0430\u043D\u043D\u044F.",
        cardTitleSecond: "\u0422\u0432\u0456\u0442\u0435\u0440\u043D\u0430 \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430",
        cardTextSecond: "\u0414\u043B\u044F \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F \u0431\u0456\u043B\u044C\u0448 \u0431\u0430\u0433\u0430\u0442\u043E\u0448\u0430\u0440\u043E\u0432\u043E\u0457 \u0437\u0432\u0443\u043A\u043E\u0432\u043E\u0457 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0456, \u043A\u0440\u0430\u0449\u043E\u0457 \u0437\u0430 \u043E\u0434\u0438\u043D \u043F\u043E\u0432\u043D\u043E\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u043D\u0438\u0439 \u0434\u0438\u043D\u0430\u043C\u0456\u043A, \u043D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0441\u043D\u0430\u0441\u0442\u0438\u043B\u0430 Luna \u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0438\u043C \u0432\u0438\u0441\u043E\u043A\u043E\u0447\u0430\u0441\u0442\u043E\u0442\u043D\u0438\u043C \u0434\u0438\u043D\u0430\u043C\u0456\u043A\u043E\u043C, \u044F\u043A\u0438\u0439 \u0441\u0430\u043C\u043E\u0441\u0442\u0456\u0439\u043D\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 \u0437\u0430 \u0432\u0438\u0441\u043E\u043A\u043E\u0447\u0430\u0441\u0442\u043E\u0442\u043D\u0438\u0439 \u0437\u0432\u0443\u043A.",
        cardTitleThird: "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 Multiroom",
        cardTextThird: "Luna \u043D\u0430\u0442\u0438\u0432\u043D\u043E \u0441\u0443\u043C\u0456\u0441\u043D\u0430 \u0437 \u0432\u0430\u0448\u043E\u044E \u0434\u043E\u043C\u0430\u0448\u043D\u044C\u043E\u044E Wi-Fi \u043C\u0435\u0440\u0435\u0436\u0435\u044E. \u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0439\u0442\u0435 \u043A\u0456\u043B\u044C\u043A\u0430 \u0434\u0438\u043D\u0430\u043C\u0456\u043A\u0456\u0432 \u0443 \u0440\u0456\u0437\u043D\u0438\u0445 \u043A\u0456\u043C\u043D\u0430\u0442\u0430\u0445, \u0449\u043E\u0431 \u0440\u043E\u0437\u0448\u0438\u0440\u0438\u0442\u0438 \u043C\u0443\u0437\u0438\u0447\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 \u043D\u0430 \u0432\u0435\u0441\u044C \u0431\u0443\u0434\u0438\u043D\u043E\u043A.",
        cardTitleFourth: "\u0406\u043D\u0442\u0443\u0457\u0442\u0438\u0432\u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0441\u0432\u0456\u0442\u043B\u0435\u043D\u043D\u044F",
        cardTextFourth: "\u0406\u043D\u0442\u0443\u0457\u0442\u0438\u0432\u043D\u043E \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u043B\u0438\u0439 \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454 \u043D\u0430\u043B\u0430\u0448\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0432\u0456\u0434\u0442\u0456\u043D\u043E\u043A \u0456 \u043D\u0430\u0441\u0438\u0447\u0435\u043D\u0456\u0441\u0442\u044C \u043A\u043E\u043B\u044C\u043E\u0440\u0443 \u0434\u043B\u044F \u043E\u0441\u0432\u0456\u0442\u043B\u0435\u043D\u043D\u044F, \u044F\u043A\u0435 \u043F\u0456\u0434\u0445\u043E\u0434\u0438\u0442\u044C \u0434\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0433\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u044E \u0442\u0430 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u0457.",
        aboutTitle: "\u0420\u041E\u0417\u0420\u041E\u0411\u041B\u0415\u041D\u041E \u0414\u041B\u042F \u041C\u0410\u0419\u0411\u0423\u0422\u041D\u042C\u041E\u0413\u041E",
        aboutText: "\u0423 2014 \u0440\u043E\u0446\u0456 \u0433\u0440\u0443\u043F\u0430 \u0437\u0430\u0445\u043E\u043F\u043B\u0435\u043D\u0438\u0445 \u043F\u0440\u043E\u043C\u0438\u0441\u043B\u043E\u0432\u0438\u0445 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0456\u0432, \u0434\u043E\u0441\u0432\u0456\u0434\u0447\u0435\u043D\u0438\u0445 \u0456\u043D\u0436\u0435\u043D\u0435\u0440\u0456\u0432 \u0456 \u0430\u043A\u0443\u0441\u0442\u0438\u0447\u043D\u0438\u0445 \u0435\u043A\u0441\u043F\u0435\u0440\u0442\u0456\u0432 \u0441\u0442\u0432\u043E\u0440\u0438\u043B\u0430 crazybaby. \u0426\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u0440\u0438\u0441\u0442\u0440\u0430\u0441\u043D\u0438\u0445 \u043B\u044E\u0434\u0435\u0439, \u044F\u043A\u0456 \u043D\u0430\u0441\u0442\u0456\u043B\u044C\u043A\u0438 \u0431\u043E\u0436\u0435\u0432\u0456\u043B\u044C\u043D\u0456, \u0449\u043E \u0432\u0432\u0430\u0436\u0430\u044E\u0442\u044C, \u0449\u043E \u043C\u043E\u0436\u0443\u0442\u044C \u043A\u0438\u043D\u0443\u0442\u0438 \u0432\u0438\u043A\u043B\u0438\u043A \u0456\u043D\u0434\u0443\u0441\u0442\u0440\u0456\u0457 \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u0456\u043D\u043D\u043E\u0432\u0430\u0446\u0456\u0439\u043D\u0438\u0445 \u0430\u0443\u0434\u0456\u043E\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432.",
        aboutLink: "\u041F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u0431\u0456\u043B\u044C\u0448\u0435 \u043F\u0440\u043E \u043D\u0430\u0441",
        technologyTitle: "\u041C\u0456\u0441\u044F\u0447\u043D\u0435 \u043E\u043A\u043E",
        technologyText: "Luna Eye \u2014 \u0441\u0443\u0442\u044C \u0446\u0456\u0454\u0457 \u0456\u043D\u043D\u043E\u0432\u0430\u0446\u0456\u0439\u043D\u043E\u0457 \u0441\u0438\u0441\u0442\u0435\u043C\u0438 \u043E\u0441\u0432\u0456\u0442\u043B\u0435\u043D\u043D\u044F \u0442\u0430 \u0430\u0443\u0434\u0456\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u0438. \u0412\u0456\u043D \u0441\u043A\u043B\u0430\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u0437 \u043D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0433\u043E \u0432\u0438\u0441\u043E\u043A\u043E\u0447\u0430\u0441\u0442\u043E\u0442\u043D\u043E\u0433\u043E \u0434\u0438\u043D\u0430\u043C\u0456\u043A\u0430, \u0441\u0432\u0456\u0442\u043B\u043E\u0432\u043E\u0434\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430, \u043A\u0443\u043F\u043E\u043B\u0430 \u0442\u0430 \u043A\u0456\u043B\u044C\u0446\u0435\u0432\u043E\u0433\u043E \u043E\u0440\u043D\u0430\u043C\u0435\u043D\u0442\u0443.",
        testimonilasText: "\xab\u041C\u0435\u043D\u0435, \u0447\u0435\u0441\u043D\u043E \u043A\u0430\u0436\u0443\u0447\u0438, \u0434\u0443\u0436\u0435 \u0437\u0434\u0438\u0432\u0443\u0432\u0430\u043B\u043E, \u043A\u043E\u043B\u0438 \u044F \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0442\u0430\u043A\u0438\u0439 \u0447\u0443\u0434\u043E\u0432\u0438\u0439 \u0437\u0432\u0443\u043A, \u044F\u043A\u0438\u0439 \u0432\u0438\u0445\u043E\u0434\u0438\u0432 \u0456\u0437 \u0446\u044C\u043E\u0433\u043E \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u044E. \u0410 \u0437\u0430\u0432\u0434\u044F\u043A\u0438 \u0449\u0456\u0442\u043A\u043E\u0432\u0456\u0439 \u0430\u043B\u044E\u043C\u0456\u043D\u0456\u0454\u0432\u0456\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u0456 \u0446\u0435 \u0442\u0430\u043A \u0437\u043D\u0430\u0439\u043E\u043C\u043E. \u042F\u043A \u043C\u0456\u0439 iPhone\xbb.",
        testimonilasRole: "\u041A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u0438\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440",
        featuresTitle: "\u041E\u0421\u041E\u0411\u041B\u0418\u0412\u041E\u0421\u0422\u0406",
        featuresAppTitle: "\u0424\u0443\u043D\u043A\u0446\u0456\u0457 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438",
        slideAppOne: "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0439\u0442\u0435 \u043C\u0443\u0437\u0438\u0447\u043D\u0438\u0439 \u0440\u043E\u0437\u043A\u043B\u0430\u0434",
        slideAppTwo: "\u041F\u0440\u043E\u043A\u0438\u0434\u0430\u0439\u0442\u0435\u0441\u044F \u0437 \u0443\u043B\u044E\u0431\u043B\u0435\u043D\u0438\u043C\u0438 \u043F\u0456\u0441\u043D\u044F\u043C\u0438",
        slideAppThird: "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0435 \u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u0432\u0430\u043D\u043D\u044F \u0431\u0443\u0434\u0438\u043D\u043A\u0443",
        slideAppFour: "\u041A\u043E\u043B\u0456\u0440\u043D\u0435 \u043A\u043E\u043B\u043E",
        featuresConnectivityTitle: "\u041F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F",
        slideConnectivityOne: "\u0411\u0435\u0437\u0434\u0440\u043E\u0442\u043E\u0432\u0430 \u0430\u0443\u0434\u0456\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u0430 Hands Free",
        slideConnectivityTwo: "Bluetooth 4.0 LE",
        slideConnectivityThird: "Wi-Fi 2.4 GHz (802.11 b/g/n)",
        slideConnectivityFour: "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0438 Smart Multiroom",
        slideConnectivityFive: "\u0420\u0435\u0436\u0438\u043C \u0432\u0435\u0447\u0456\u0440\u043A\u0438 \u0437 \u043E\u0434\u0438\u043D\u0438\u0446\u044F\u043C\u0438 6.0 \u0456 \u0432\u0438\u0449\u0435",
        slideConnectivitySix: "\u041C\u0435\u0440\u0435\u0436\u0430 \u0437 \u0434\u0435\u043A\u0456\u043B\u044C\u043A\u043E\u043C\u0430 \u0433\u0443\u0447\u043D\u043E\u043C\u043E\u0432\u0446\u044F\u043C\u0438 MESHNET",
        featuresSoundTitle: "\u0417\u0432\u0443\u043A & \u043C\u0443\u0437\u0438\u043A\u0430",
        slideSoundpOne: "\u0411\u0430\u0437\u043E\u0432\u0430 \u043F\u043E\u0442\u0443\u0436\u043D\u0456\u0441\u0442\u044C \u0432\u0456\u0434\u0447\u0443\u0442\u0442\u044F \u0432 \u0433\u0440\u0443\u0434\u044F\u0445",
        slideSoundpTwo: "\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0433\u043E \u0437\u0432\u0443\u043A\u0443 \u0431\u0435\u0437 \u0432\u0442\u0440\u0430\u0442",
        slideSoundpThird: "\u041B\u0435\u0433\u043A\u0435 \u0442\u0430 \u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u0435 \u0441\u0442\u0435\u0440\u0435\u043E\u0437\u2019\u0454\u0434\u043D\u0430\u043D\u043D\u044F",
        slideSoundpFour: "\u0427\u0456\u0442\u043A\u0438\u0439 \u0456 \u0447\u0438\u0441\u0442\u0438\u0439 \u0432\u0438\u0441\u043E\u043A\u043E\u0447\u0430\u0441\u0442\u043E\u0442\u043D\u0438\u0439 \u0437\u0432\u0443\u043A",
        slideSoundpFive: "\u041F\u043E\u0442\u043E\u043A\u0438 \u0437 Cloud Music \u0456 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0457 \u0431\u0456\u0431\u043B\u0456\u043E\u0442\u0435\u043A\u0438",
        slideSoundpSix: "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0430 \u0437\u0443\u043F\u0438\u043D\u043A\u0430 \u043C\u0443\u0437\u0438\u043A\u0438 \u0437 \u043E\u0441\u0442\u0430\u043D\u043D\u044C\u043E\u0457 \u043F\u0456\u0441\u043D\u0456",
        questionsTitle: "\u0423 \u0412\u0410\u0421 \u0404 \u0417\u0410\u041F\u0418\u0422\u0410\u041D\u041D\u042F?",
        questionsButton: "\u0412\u0406\u0414\u041F\u0420\u0410\u0412\u0418\u0422\u0418",
        footerRights: "\xa9 2024 \u0423\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u043E. \u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0442\u0430 \u043F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456"
    }
};
// Функція для зміни мови
function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-translate-key]");
    const en = document.querySelector(".actions__buttons-en");
    const enDesk = document.querySelector(".actions-desk__buttons-en");
    const ua = document.querySelector(".actions__buttons-ua");
    const uaDesk = document.querySelector(".actions-desk__buttons-ua");
    elements.forEach((element)=>{
        const key = element.getAttribute("data-translate-key");
        element.textContent = translations[lang][key];
    });
    if (lang === "en") {
        ua.classList.remove("active-lang");
        uaDesk.classList.remove("active-lang");
        en.classList.add("active-lang");
        enDesk.classList.add("active-lang");
    } else if (lang === "ua") {
        en.classList.remove("active-lang");
        enDesk.classList.remove("active-lang");
        ua.classList.add("active-lang");
        uaDesk.classList.add("active-lang");
    } else {
        en.classList.add("active-lang");
        enDesk.classList.add("active-lang");
    }
    console.log(lang);
}
document.querySelector(".actions__buttons-ua").addEventListener("click", ()=>changeLanguage("ua"));
document.querySelector(".actions__buttons-en").addEventListener("click", ()=>changeLanguage("en"));
document.querySelector(".actions-desk__buttons-ua").addEventListener("click", ()=>changeLanguage("ua"));
document.querySelector(".actions-desk__buttons-en").addEventListener("click", ()=>changeLanguage("en"));
//slider
const slides = document.querySelector(".slider__container");
const slide = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".slider__button-prev");
const nextButton = document.querySelector(".slider__button-next");
const countSlide = document.querySelector(".slider__counter-number");
let currentIndex = 0;
function showSlide(index) {
    const totalSlides = slide.length - 3;
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
    countSlide.textContent = `0${currentIndex + 1}`;
}
nextButton.addEventListener("click", ()=>{
    showSlide(currentIndex + 1);
});
prevButton.addEventListener("click", ()=>{
    showSlide(currentIndex - 1);
});
// questions block
const form = document.querySelector(".form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (form.checkValidity()) {
        form.querySelector(".form__email").value = "";
        form.querySelector(".form__message").value = "";
    }
});

//# sourceMappingURL=index.f75de5e1.js.map

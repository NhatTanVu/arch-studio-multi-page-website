window.addEventListener("load", function () {
    document.getElementById("burger").onclick = (e) => {
        e.currentTarget.classList.toggle('opened');
        if (e.currentTarget.classList.contains('opened'))
            e.currentTarget.src = './assets/icons/icon-close.svg';
        else
            e.currentTarget.src = './assets/icons/icon-hamburger.svg';
        e.currentTarget.previousElementSibling.classList.toggle('opened');
        e.currentTarget.previousElementSibling.previousElementSibling.classList.toggle('opened');
    };

    //let body = document.body, html = document.documentElement;
    //let bodyHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    //function convertRemToPixels(rem) {
    //return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    //}
    //document.getElementById("header-mask").style.height = (bodyHeight - convertRemToPixels(6.4)) + "px";
});
function fuckem() {

    let nonio = getNonioElement();
    let body = document.getElementsByTagName('body')[0];
    let html = document.getElementsByTagName('html')[0];

    if (nonio) {
        console.log('fuckNONIO: taking action!')
        nonio.style.display = "none";
        body.style.overflow = "initial";
        html.style.overflow = "initial";
    }
}

function getNonioElement() {
    let el = null;

    //So far all the elements I find, use ID. This needs changing if they change it to a class
    let kownIds = ["layer_gattingLN506a75e887198ae510a2c9d5fc90a125", "nonio-basiclogin"];

    for (let index = 0; index < kownIds.length; index++) {
        const id = kownIds[index];
        if (document.getElementById(id)) {
            el = document.getElementById(id)
            break;
        }
    }

    //ID changes everyday if the website is not using Angular, grabbem by the class
    if (!el) {
        if (document.getElementsByClassName('gatting_login')[0]) {
            el = document.getElementsByClassName('gatting_login')[0].parentNode.parentNode;
        }
    }

    return el;
}

if (document.readyState === 'ready' || document.readyState === 'complete') {

    fuckem();
} else {
    document.onreadystatechange = function () {
        if (document.readyState == "complete") {
            fuckem();
        }
    }
}
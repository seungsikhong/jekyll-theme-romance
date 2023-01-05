const slideMove = () => {

}

const romance = () => {
    checkCookie('anm') === true ? '' : (setCookie('anm','created',3),typing("Romance","Romance."));
}

const typing = (id, txt) => {
    let idx = 0;
    const typingDiv = document.getElementById(id);
    const rmInterval = setInterval(() => {
        typingDiv.innerHTML = typingDiv.innerHTML + txt[idx];
        idx++;
        if (typingDiv.innerHTML.length === txt.length) {
            const rmTimeout = setTimeout( () => {
                document.getElementsByClassName('Romance')[0].style.display='none';
                document.getElementsByClassName('asidel')[0].style.display='block';
                document.getElementsByClassName('asider')[0].style.display='block';
                clearTimeout(rmTimeout);
            }, 3000);
            clearInterval(rmInterval);
        }
    }, 180);
}

const setCookie = (key, value, expiredays) => {
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    let cookie_value = escape(value) + ((expiredays == null) ? '' : '; expires=' + exdate.toUTCString());
    document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';expires=' + exdate.toUTCString() + ';path=/';
}

const getCookie = (key) => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

const checkCookie = (key) => {
    return getCookie(key) !== undefined ? true : false;
}
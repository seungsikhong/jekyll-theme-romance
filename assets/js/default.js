const slideMove = () => {

}
const typing = (id, txt) => {
    let idx = 0;
    let typingDiv = document.getElementById(id);
    const rmInterval = setInterval(() => {
        typingDiv.innerHTML = typingDiv.innerHTML + txt[idx];
        idx++;
        if (typingDiv.innerHTML.length === txt.length) {
            let rmTimeout = setTimeout( () => {
                document.getElementsByClassName('Romance')[0].style.display='none';
                document.getElementsByClassName('asidel')[0].style.display='block';
                document.getElementsByClassName('asider')[0].style.display='block';
                clearTimeout(rmTimeout);
            }, 3000);
            clearInterval(rmInterval);
        }
    }, 180);
}
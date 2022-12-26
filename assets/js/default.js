const slideMove = () => {

}
const typing = (id, txt) => {
    let idx = 0;
    let typingDiv = document.getElementById(id);
    let timer = setInterval(() => {
        typingDiv.innerHTML = typingDiv.innerHTML + txt[idx];
        idx++;
        if (typingDiv.innerHTML.length === txt.length) {
            clearInterval(timer);
        }
    }, 180);
}
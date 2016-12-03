function autoResizeDiv()
{
    document.getElementById('main-container').style.height = window.innerHeight;
}
window.onresize = autoResizeDiv;
autoResizeDiv();

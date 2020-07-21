function showOrHide() {
    var x = document.getElementById("navMobile");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
        console.log('on show');
        x.className = x.className.replace(" hide ", " ");
    } else {
        x.className = x.className.replace(" show", "");
        console.log('oli show');
        x.className += " hide";
    }
}
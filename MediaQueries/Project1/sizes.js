window.onresize = myfun;
window.onload = myfun;
function myfun(){
    let size = window.innerWidth;
    document.getElementById("my_id").innerHTML = "Screen Size : "+size;
}
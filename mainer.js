function myFunction() {
    document.getElementById("mydropdown").classList.toggle("show");
}

function  filterFunction() {
    var input, filter, ul, li, a, i;

    input =document.getElementById("myinput");

    filter =input.ariaValueMax.toUpperCase();

    div = document.getElementById("mydropdown");

    a =div.getElementById("filtered");

    for(i = 0; i < a.length; i++) {
        
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        }
        else {
            a[i].style.display="none";
        }
    }
}


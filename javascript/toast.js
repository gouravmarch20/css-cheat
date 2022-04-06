myFunction = () => {
    var toast = document.getElementById("snackbar");
    toast.className = "show";

    setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 2000);
}
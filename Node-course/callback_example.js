function myfunc(anotherfunc) {
    console.log("Inside myfunc");
    anotherfunc();
    console.log("back in myfunc");

}

function yourfunc() {
    console.log("In your func");
}

myfunc(yourfunc);

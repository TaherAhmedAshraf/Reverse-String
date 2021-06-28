


function reverseString(){
    var string = document.getElementById("String").value;
    var index = (string.length);
    console.log(index)
    var newstring = ""

    for(var i = index -1; i>= 0; i--){
        newstring += string[i]
    }
    document.getElementById("StrOutput").value = newstring;
}


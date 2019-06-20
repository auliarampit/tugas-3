function reverse(str){
    let reverse = "";
    for(i = str.length -1; i >= 0; i-- ){
        reverse += str[i];
    }
    return reverse;
}

function palidrome(data){
    
    if(reverse(data)== data){
        return true;
    } else{
        return false;
    }
}
console.log(palidrome("makam"));
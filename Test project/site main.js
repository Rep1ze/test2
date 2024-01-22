function NDS(){
    let a = prompt("Enter your bet No NDS")
    if(!a || isNaN(a) || a < 0){
        alert("Your bet must have any symbol")
    }else{
        let b = prompt("Your NDS in %")
        if(!b || isNaN(b) || b < 0){
            alert("Your NDS must have any symbol")
        }else{
            alert(a * b / 100 + " Your NDS")
            alert(a * b / 100 + a++ + " Your NDS + Summ")
        }
    }
}
let revealed = document.getElementById("reveal")
function revealX(){
    let x = 5
    if(x>3){
 console.log("x is more than 3")
    }
    else{
        console.log("x is less than 3")
    }
}
let x = 1

revealX()
//in the console "x is more than 3" is revealed. 
//in the creation phase all of the variables have a space in memory as well as the function
//what matters is the context of everything surrounding the variable. Execution context.

let revealed = document.getElementById("reveal")
console.log(revealed)
function revealX(){
   
    if(x>3){
 console.log("x is more than 3")
 revealed.innerHTML = ` ${x},x is more than 3`
    }
    else{
        console.log("x is less than 3")
        revealed.innerHTML = ` ${x},x is less than 3`
    }
}
let x = 1

revealX()
//in the console "x is more than 3" is revealed. 
//in the creation phase all of the variables have a space in memory as well as the function
//what matters is the context of everything surrounding the variable. Execution context.
//now that only the global variable exists the execution context has changed to global,
//even though the variable is below the function, the interpreter makes 2 passes and the variable already exists in memory
//2 types of scope global-accessible anywhere in script, local-accessible in functions only

    function revealY(){
        a = 2
      }
     revealY()
      console.log(a,"this is a");
      //this actually tricked me and i thought that a would be considered not defined
      //this is a question i found online and  it says since a doesnt have 'let','var' or 'const'. since 
      //it's not declared the compiler gives it a global scope

      // References. In JavaScript, there are two kinds of variables types: primitives variables (strings, numbers, and booleans) and References variables (arrays and objects). Primitives variables save in memory in their values, and references save in memory as virtual id.
      //this is something I was also confused about when taking a js skill test. Objects have unique ids so one object is never the same as another 

      


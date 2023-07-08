

var string = "";
// document.querySelector("input").value = string;
var buttons = document.querySelectorAll("button");


const keysallowed = ["1","2","3","4","5","6","7","8","9","0",];

const opers = ["/","*","+","-","."];

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
        // console.log(e.target)
        if (e.target.innerHTML === 'AC'){
            string = ""
            document.querySelector("input").value = string;
            
            
        }
        else if (e.target.innerHTML === '='){
            var answer = eval(string);
            document.querySelector("input").value = answer;
            string = answer;

        }
        else if(e.target.innerHTML === 'DEL'){
            string = string.slice(0,-1);
            document.querySelector("input").value = string;
        }
        else if (keysallowed.includes(e.target.innerHTML)){
            string = string +  e.target.innerHTML;
            document.querySelector("input").value = string;
        }
        else if (opers.includes(e.target.innerHTML)){
            let lastchar1 = string.charAt(string.length-1);
            console.log("The last char1 "+ lastchar1);
            if (opers.includes(lastchar1) === false){
                string = string + e.target.innerHTML;
                document.querySelector("input").value = string;
            }
        }
        // console.log(string)
    })

})


document.addEventListener("keydown", function (ev){
    // console.log();
    let keyvalue = ev.key;
    // console.log(keyvalue)


    if (keysallowed.includes(keyvalue)){
            string = string + keyvalue;
            document.querySelector("input").value = string;
        
    }
    else if(opers.includes(keyvalue)) {
        let lastchar = string.charAt(string.length-1);
        // console.log("the last char was"+ lastchar)
        if (opers.includes(lastchar) === false){
            string = string + keyvalue;
            document.querySelector("input").value = string;
        }

    }
    else if (keyvalue === "Enter"){
        var answer = eval(string);
        document.querySelector("input").value = answer;
        string = answer;
    }
    else if(ev.which === 8){
        string = string.slice(0,-1);
        document.querySelector("input").value = string;
    }
    else if(ev.which === 27){
        string = ""
        document.querySelector("input").value = string;

    }

})
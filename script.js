

var string = "";
var buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
        console.log(e.target)
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
        else{
            string = string +  e.target.innerHTML;
            document.querySelector("input").value = string;
        }
        console.log(string)
    })

})
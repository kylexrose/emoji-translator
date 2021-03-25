document.querySelector("#translator-input").addEventListener('input',() => translateAll())
for (let button of document.querySelectorAll(".radio-button")){
    button.addEventListener('click', () => translateAll())
}
document.querySelector("#help").addEventListener('click', () => {
    const helpList = document.querySelector("#helpList");
    if (helpList.classList.length){
        console.log(helpList.classList)
        helpList.classList.remove("invisible");
    }else{
        helpList.classList.add("invisible");
    }
})

function translateAll(){
    const input = document.querySelector("#translator-input").value;
    const radios = document.querySelectorAll(".radio-button");
    let selectedValue;
    for(let radio of radios){
        if(radio.checked){
            selectedValue = radio.value;
        }
    }
    
    let output = document.querySelector("#results");
    if (selectedValue === "encode"){
        output.innerHTML = encode(input);
    }else if(selectedValue === "translate"){
        output.innerHTML = translate(input);
    }else if(selectedValue === "madlib"){
        output.innerHTML = madlib(input);
    }else if(selectedValue === "search"){
        searchLoop(input);
    }else if(selectedValue === "random"){
        switch(Math.floor(Math.random() * 4)){
            case 0:
                output.innerHTML = encode(input);
                break;
            case 1:
                output.innerHTML = translate(input);
                break;
            case 2:
                output.innerHTML = madlib(input);
                break;
            case 3:
                searchLoop(input);
        }
    }
    function searchLoop(input){
    const array = search(input);
        output.innerHTML = "&nbsp";
        if (array.length === 0){
            output.innerHTML = "No Emojis were found"
        }else {
            console.log(array)
            for(let emoji of array){
            let newElement = document.createElement("p");
            newElement.innerHTML = emoji.symbol;
            output.appendChild(newElement);
            }
        }
    }
}


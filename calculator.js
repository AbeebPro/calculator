
let input = document.querySelector("#inputText");

const displayInput = (number) =>{
	input.value += number;
};

let result = () =>{
	input.value = eval(input.value)
};

let clr = () =>{
	input.value = "";
}

let del = () =>{
	input.value = input.value.slice(0,-1);
}
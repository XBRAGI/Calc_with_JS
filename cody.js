//const, var, let
const input_first = document.getElementById('input_first')
const input_second = document.getElementById('input_second')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multiply = document.getElementById('multiply')
const division = document.getElementById('division')

plus.onclick = function(){
	let result = Number(input_first.value) + Number(input_second.value)
	input_first.value = result
	input_second.value = ''
}

minus.onclick = function(){
	let result = Number(input_first.value) - Number(input_second.value)
	input_first.value = result
	input_second.value = ''
}

multiply.onclick = function(){
	let result = Number(input_first.value) * Number(input_second.value)
	input_first.value = result
	input_second.value = ''
}

division.onclick = function(){
	let result = Number(input_first.value) / Number(input_second.value)
	input_first.value = result
	input_second.value = ''
}


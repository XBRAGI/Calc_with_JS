//const, var, let
const input_first = document.getElementById('input_first')
const input_second = document.getElementById('input_second')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multiply = document.getElementById('multiply')
const division = document.getElementById('division')
const input_result = document.getElementById('input_result')


plus.onclick = function(){
	let result = Number(input_first.value) + Number(input_second.value)
	input_result.value = result
	input_second.value = ''
	input_first.value = ''
}

minus.onclick = function(){
	let result = Number(input_first.value) - Number(input_second.value)
	input_result.value = result
	input_second.value = ''
	input_first.value = ''
}

multiply.onclick = function(){
	let result = Number(input_first.value) * Number(input_second.value)
	input_result.value = result
	input_second.value = ''
	input_first.value = ''
}

division.onclick = function(){
	let result = Number(input_first.value) / Number(input_second.value)
	input_result.value = result
	input_second.value = ''
	input_first.value = ''
}



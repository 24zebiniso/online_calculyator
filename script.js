function appendNumber(number) {
    document.getElementById('display').value += number;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
function toggleOperations() { let operations = document.getElementById('operations');
    if (operations.style.display === 'none') {
        operations.style.display = 'grid'; operations.style.gridTemplateColumns = 'repeat(4, 1fr)'; } 
    else { operations.style.display = 'none'; } }
function a() { document.getElementById('display').value += '('; }
function b() { document.getElementById('display').value += ')'; }
function calculatePercentage() { 
    let display = document.getElementById('display'); 
    try { 
        display.value = parseFloat(display.value) / 100 ; } 
    catch (e) {
        display.value = 'Error'; } }
        function calculateFactorial() { let display = document.getElementById('display'); let number = parseInt(display.value); if (isNaN(number)) { display.value = 'Error'; return; } let result = factorial(number); display.value = result; }        
function factorial(n) { 
    if (n === 0 || n === 1) {
         return 1; } 
    else { return n * factorial(n - 1); } }
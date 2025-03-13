window.thismonth = ('0' + (new Date().getMonth() + 1)).slice(-2);

window.thisyear = new Date().getFullYear().toString().slice(-2);

window.getRandomNumber = function() {return Math.floor(100 + Math.random() * 900)};





function clearOutput() {
    document.getElementById('output').innerHTML = '';
}

function printSelections() {
    const type = document.getElementById('type').value;
    const product = document.getElementById('product').value;
    const country = document.getElementById('country').value;
    const description = document.getElementById('description').value;
    if (description === "") {
        const output = `Please write a Description`;
        document.getElementById('output').innerHTML = output;
    } else {
        const output = `
            ${type + country + description + "_" + product+ "_" + window.thisyear + window.thismonth + "_REV1.DOCX"}`;
        document.getElementById('output').innerHTML = output;
    }
}

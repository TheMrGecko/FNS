window.thismonth = ('0' + (new Date().getMonth() + 1)).slice(-2);

window.thisyear = new Date().getFullYear().toString().slice(-2);

window.getRandomNumber = function() {return Math.floor(100 + Math.random() * 900)};





function clearOutput() {
    document.getElementById('output').innerHTML = '';
}

function printSelections() {
    const Customer = document.getElementById('customer').value;
    const market = document.getElementById('market').value;
    const work = document.getElementById('work').value;
    const product = document.getElementById('product').value;
    const country = document.getElementById('country').value;

    const output = `
        <div style="font-weight: bold; color: black; font-size: 24px; border: 4px solid orange; padding: 10px; margin-right: 25%; margin-left: 25%; text-align: center;"> 
            ${Customer.toUpperCase().replace(/ /g, '_')}_${work}_${window.thisyear + window.thismonth + market + product + window.getRandomNumber() + country}${".DOCX"}
        </div>
    `;

    document.getElementById('output').innerHTML = output;
}

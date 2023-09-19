
function calculateGST() {
    var pn = document.getElementById("pn").value;
    var pp = parseFloat(document.getElementById("pp").value);
    var pq = parseFloat(document.getElementById("pq").value);
    var gstRate = parseFloat(document.getElementById("gstRate").value);
    var interstate = parseFloat(document.getElementById("interstate").value);

    var total = pp * pq;
    var gstAmount = (total * gstRate) / 100;

    if (interstate === 1) {
        var igst = gstAmount;
        var sgst = 0;
        var cgst = 0;
    } else {
        var sgst = gstAmount / 2;
        var cgst = gstAmount / 2;
        var igst = 0;
    }

    var totalPrice = total + gstAmount;

    var resultTable = document.getElementById("resultTable");
    var newRow = resultTable.insertRow();
    newRow.innerHTML = `<td>${pn}</td><td>${pq}</td><td>${total}</td>`;

    if (interstate === 1) {
        var newRow1 = resultTable.insertRow();
        newRow1.innerHTML = `<td>IGST ${gstRate}%</td><td></td><td>${igst}</td>`;
    } else {
        var newRow2 = resultTable.insertRow();
        newRow2.innerHTML = `<td>SGST ${gstRate / 2}%</td><td></td><td>${sgst}</td>`;

        var newRow3 = resultTable.insertRow();
        newRow3.innerHTML = `<td>CGST ${gstRate / 2}%</td><td></td><td>${cgst}</td>`;
    }

    var newRow4 = resultTable.insertRow();
    newRow4.innerHTML = `<td>Total</td><td></td><td>${totalPrice}</td>`;
}

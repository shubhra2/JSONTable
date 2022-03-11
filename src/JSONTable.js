function deleteRow(event) {
    let row = event.target.parentElement.parentElement;
    row.parentNode.removeChild(row);
}
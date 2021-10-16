let thanks = document.getElementById('thanks')
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('name')
thanks.innerHTML = 'DZIĘKUJEMY ' + myParam
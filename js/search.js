document.getElementById('searchInput').addEventListener('input', function() {
    var input, filter, divs, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase().replace(/\s/g, '');
    divs = document.getElementsByClassName('schedule');

    for (i = 0; i < divs.length; i++) {
        a = divs[i].getElementsByTagName('a')[0];
        txtValue = a.textContent || a.innerText;
        var itemText = txtValue.toUpperCase().replace(/\s/g, '');

        if (itemText.indexOf(filter) > -1) {
            divs[i].style.display = '';
        } else {
            divs[i].style.display = 'none';
        }
    }
});

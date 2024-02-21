document.getElementById('searchInput').addEventListener('input', function() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.replace(/\s/g, '');
    ul = document.getElementById('scheduleList');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0];
        txtValue = a.textContent || a.innerText;
        var itemText = txtValue.replace(/\s/g, '');

        if (itemText.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
});

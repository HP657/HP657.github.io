document.addEventListener('DOMContentLoaded', function() {
    var scheduleDiv = document.querySelector('.schedule');

    scheduleDiv.addEventListener('click', function() {
        var link = scheduleDiv.querySelector('a').getAttribute('href');
        window.location.href = link;
    });
});

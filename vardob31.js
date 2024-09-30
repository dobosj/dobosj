document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
});

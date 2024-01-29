document.getElementById('message').addEventListener('input', function() {
    var placeholder = this.nextElementSibling;
    if (this.value.trim() !== '') {
        placeholder.style.display = 'none';
    } else {
        placeholder.style.display = 'inline';
    }
});

document.getElementById('message').addEventListener('focus', function() {
    this.nextElementSibling.style.display = 'inline';
});

document.getElementById('message').addEventListener('blur', function() {
    if (this.value.trim() === '') {
        this.nextElementSibling.style.display = 'inline';
    }
});

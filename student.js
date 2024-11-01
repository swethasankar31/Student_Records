const scriptURL = 'https://script.google.com/macros/s/AKfycbzvHtztgLsMlMBSqP046lTk-A7hboVO3XfOpZyKpQGk6nhrl_gi6-LotSJuJfvJZtZd/exec';
        const form = document.forms['submit-to-google-sheet'];
        const success = document.getElementById('success');

        form.addEventListener('submit', e => {
            e.preventDefault();
            
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    success.innerHTML = "Data successfully submitted";
                    setTimeout(function () {
                        success.innerHTML = "";
                    }, 5000);
                    form.reset();
                })
                .catch(error => console.error('Error!', error.message));
        });
     
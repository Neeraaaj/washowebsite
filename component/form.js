if(typeof window !== 'undefined'){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxcxbi7pjIgdThl-tHg8Ck0h5C8e4FlwMB5Llb725AuBDf4FJaIsA_7ab1Vr7p3QDHFuw/exec'
    // const form = document.forms['contactform']
    const form = document.forms['contactform']   
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => alert("Thank you! your form is submitted successfully." ))
            .then(() => {  window.location.reload(); })
            .catch(error => console.error('Error!', error.message))
    })
}

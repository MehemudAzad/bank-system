//step-1 : add click event handler to the submit button
document.getElementById("btn-submit").addEventListener('click',()=>{
    const emailField = document.getElementById('email');
    const email = emailField.value;
    console.log(email);
    //step- 3: get the password
    //3.a: sset id on the html element
    //3.b: get the element
    //3.c: get the value from the element
    const passwordField = document.getElementById('password');
    const password= passwordField.value;
    console.log(password);

    //danger: do not verify email and password on the client side
    if(email === 'mehemudazad.km@gmail.com' && password === "secrethaha"){
        window.location.href = 'bank.html';
    }else{
        alert('toke ami tejjo sontan ghoshona korla tui password bhule gesos')
    }
})

//deposit and withdraw section



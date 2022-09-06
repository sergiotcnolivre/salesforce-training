// #10 - Submit the form using Ajax jQuery and print the form values in separated newly created div
function formSubmitEvent() {
    $('#form').submit((evt) => {
        evt.preventDefault();

        const validation = $('#form').validateForm([
            {
                id: 'name',
                required: true,
                requiredMessage: 'É obrigatório informar seu nome',
                errorMessage: 'O nome deve conter no mínimo 4 dígitos',
                validateCallback: name => name.length >= 4
            },
            {
                id: 'email',
                required: true,
                requiredMessage: 'É obrigatório informar um e-mail',
                errorMessage: 'Insira um e-mail válido',
                validateCallback(email) {
                    const regexValidation = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
                    return regexValidation.test(email);
                }
            },
            {
                id: 'pass',
                required: true,
                requiredMessage: 'É obrigatório informar uma senha',
                errorMessage: 'A senha deve conter no mínimo 6 dígitos',
                validateCallback: password => password.length >= 6
            },
        ]);
        if (!validation) {
            alert('Form is not valid');
            return;
        }
    }
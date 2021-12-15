class ClientComponent{
    get firstName() {return $('[qa-id="firstName"]')}
    get lastName() {return $('[qa-id="lastName"]')}
    get email() {return $('[qa-id="email"]')}
    get buttonSave() {return $('//button[span[.=\'Save\']]')}
}

export default new ClientComponent();
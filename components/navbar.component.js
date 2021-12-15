class NavbarComponent{
    get clients() {return $('//div[@id="top-menu"]//a[.="Clients"]')}
}

export default new NavbarComponent()

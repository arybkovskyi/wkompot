describe.only('WebDriverIo methods', function(){

    beforeEach(async function(){
        await browser.url('https://bormando.github.io/pagescrolling/')
    })
    it('scrolling to bottom ', async function () {
        const elem = await $('button');
        const footer = await $('.navbar.bottom');
        // await elem.scrollIntoView();
        await browser.execute((footer )=>{
            window.scrollBy(0, footer.offsetHeight)
        }, footer)
        await elem.click()
    });

    it('scrolling to element ', async function () {
        const elem = await $('button');
        const header = await $('.navbar.top');
        await browser.execute((elem, header )=>{
            window.scrollTo(
                0,
                elem.offsetTop - header.offsetHeight
            )}, elem , header)
        await elem.click()
    });
})
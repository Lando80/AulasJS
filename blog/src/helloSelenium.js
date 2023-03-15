const { Builder, By } = require("webdriver");

async function example () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://www.google.com");
    
    const campoPesquisa = await driver.findElement({id: "serch_form_input_homepage"})
    const botaoPesquisar = await driver.findElement({id: "serch_button_homepage"})
    await campoPesquisa.sendKeys('arautos do rei')
    await botaoPesquisar.click()
}


example();
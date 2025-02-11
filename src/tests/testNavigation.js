/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const assert = require('assert');
const { Builder, By, until } = require('selenium-webdriver');

async function TestNavigation() {
	let driver = await new Builder().forBrowser('firefox').build();

	try {
		await driver.get('http://localhost:3000/');

		let link = await driver.findElement(
			By.xpath('/html/body/div[1]/div[1]/div/a[2]')
		);
		await link.click();

		await driver.wait(until.urlContains('/informations'), 5000);

		let elementos = await driver.findElements(
			By.xpath('/html/body/div[1]/div/a/button')
		);
		let currentUrl = await driver.getCurrentUrl();

		assert.ok(currentUrl.includes('/informations'), 'URL inesperada');
		assert.ok(elementos.length === 0, 'Caiu na pagina 404');

		console.log('Teste concluído com sucesso');
	} catch (error) {
		console.error('Erro no teste:', error);
	} finally {
		await driver.quit();
	}
}

TestNavigation();

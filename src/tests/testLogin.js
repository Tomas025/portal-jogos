/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const assert = require('assert');
const { Builder, By, until } = require('selenium-webdriver');

async function testarLogin() {
	let driver = await new Builder().forBrowser('firefox').build();

	try {
		await driver.get('http://localhost:3000/login');

		// 2️⃣ Preencher os campos de login
		await driver
			.findElement(By.xpath('/html/body/div[1]/form/div/div[1]/input'))
			.sendKeys('tomasbraz43@hotmail.com');
		await driver
			.findElement(By.xpath('/html/body/div[1]/form/div/div[2]/input'))
			.sendKeys('Senh@167943258');

		await driver
			.findElement(By.xpath('/html/body/div[1]/form/div/button'))
			.click();

		await driver.wait(until.urlContains('/dashboard'), 5000);

		let elementos = await driver.findElements(
			By.xpath('/html/body/div[1]/div/a/button')
		);
		let currentUrl = await driver.getCurrentUrl();

		assert.ok(
			currentUrl.includes('/dashboard'),
			'O login falhou! A URL esperada não foi carregada.'
		);
		assert.ok(elementos.length === 0, 'Caiu na pagina 404');

		console.log('Teste concluído com sucesso');
	} catch (error) {
		console.error('Erro no teste:', error);
	} finally {
		await driver.quit();
	}
}

testarLogin();

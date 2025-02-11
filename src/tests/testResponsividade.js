/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const assert = require('assert');
const { Builder, By } = require('selenium-webdriver');

async function testarResponsividade() {
	let driver = await new Builder().forBrowser('firefox').build();

	try {
		// Simulando uma tela de celular (ex: iPhone 12 - 390x844)
		await driver.manage().window().setRect({ width: 390, height: 844 });

		await driver.get('http://localhost:3000/login');

		let formLogin = await driver.findElements(
			By.xpath('/html/body/div[1]/form')
		);

		assert.strictEqual(
			formLogin.length,
			1,
			'O formulario de login não foi exibido!'
		);

		console.log('Teste concluído com sucesso');
	} catch (error) {
		console.error('Erro no teste:', error);
	} finally {
		await driver.quit();
	}
}

testarResponsividade();

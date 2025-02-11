/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const assert = require('assert');
const { Builder, By, until } = require('selenium-webdriver');

async function TestRegister() {
	let driver = await new Builder().forBrowser('firefox').build();

	try {
		await driver.get('http://localhost:3000/register');

		await driver
			.findElement(
				By.xpath("//input[@placeholder='Digite seu nome de usuário']")
			)
			.sendKeys('testeSelenium');
		await driver
			.findElement(By.xpath("//input[@placeholder='Digite sua tagName']"))
			.sendKeys('testeSeleniumTag');
		await driver
			.findElement(By.xpath("//input[@placeholder='Digite seu email']"))
			.sendKeys('teste@selenium.com');
		await driver
			.findElement(By.xpath("//input[@placeholder='Digite sua senha']"))
			.sendKeys('senhaSegur@123');
		await driver
			.findElement(
				By.xpath("//input[@placeholder='Digite sua senha novamente']")
			)
			.sendKeys('senhaSegur@123');

		let selectElement = await driver.findElement(By.xpath('//select'));
		await selectElement.sendKeys('Criador de Conteúdo');

		await driver
			.findElement(By.xpath("//button[contains(text(), 'Entrar')]"))
			.click();

		await driver.wait(until.urlContains('/login'), 5000);
		let currentUrl = await driver.getCurrentUrl();

		assert.ok(currentUrl.includes('/login'), 'Cadastro falhou!');

		console.log('Teste concluído com sucesso');
	} catch (error) {
		console.error('Erro no teste:', error);
	} finally {
		await driver.quit();
	}
}

TestRegister();

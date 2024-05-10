import { Locator, Page } from "@playwright/test"

// Nombre de la clase
export class LoginPage{

    // Declarar variables con su tipo 
    readonly page: Page // 
    readonly username: Locator
    readonly password: Locator
    readonly loginButton: Locator
    constructor(page: Page){ // Requerir el page del test para que tenga el contexto del navegador en el momento que se crea el objeto.
        this.page = page // Se peude hacer o no. Es para agregar el contexto del navegador en el test al page local (LoginPage)
        this.username = page.locator("#user-name") // Buscar el selector para identificar el web element.
        this.password = page.locator("#password") // Buscar el selector para identificar el web element.
        this.loginButton = page.locator("#login-button") // Buscar el selector para identificar el web element.
    }
    
    // Crear funciones para reducir lineas de codigo en los tests.
    async submitLogin(user: any, password: any){
        await this.username.fill(user)
        await this.password.fill(password)
        await this.loginButton.click()
    }
}
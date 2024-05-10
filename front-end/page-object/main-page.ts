import { Locator, Page } from "@playwright/test"

// Nombre de la clase
export class MainPage{

    // Declarar variables con su tipo 
    readonly page: Page // 
    readonly invContainer: Locator
   
    constructor(page: Page){ // Requerir el page del test para que tenga el contexto del navegador en el momento que se crea el objeto.
        this.page = page // Se peude hacer o no. Es para agregar el contexto del navegador en el test al page local (LoginPage)
        this.invContainer = page.locator("[data-test='inventory-container']") // Buscar el selector para identificar el web element.
    }
}
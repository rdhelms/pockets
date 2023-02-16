import { PocketApp } from './App.js'

const rootElement = document.getElementById('app')
if (!rootElement) {
    throw new Error('No root element found with id "app"')
}

export const pocketApp = new PocketApp()

rootElement.replaceWith(pocketApp.el)

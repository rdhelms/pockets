import { MyPocket } from './MyPocket.js'
import { PocketHeader } from './components/Header.js'
import { PocketFooter } from './components/Footer.js'

// App
export class PocketApp extends MyPocket {
    el = document.createElement('div')

    data = {
        appName: 'Newest Pockets'
    }

    header = new PocketHeader()
    footer = new PocketFooter()

    constructor () {
        super()
        this.template = [
            this.header.el,
            this.footer.el,
        ]

        this.classes = ['pocket-app']
    }
}

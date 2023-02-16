import { MyPocket } from '../MyPocket.js'

export class PocketFooter extends MyPocket {
    constructor () {
        super()
        
        this.template = [
            document.createTextNode('Footer')
        ]

        this.el.addEventListener('click', () => {
            this.app.header.updateHeaderText('Hello from the footer')
        })
    }
}

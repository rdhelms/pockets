import { MyPocket } from '../MyPocket.js'

// Header
export class PocketHeader extends MyPocket {
    constructor () {
        super()
        this.classes = [
            'pocket-header'
        ]

        this.style = {
            height: '140px',
            fontSize: '24px',
            fontFamily: 'Arial',
            backgroundColor: 'blue',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }

        this.template = [
            document.createTextNode('Pockets')
        ]
    }

    updateHeaderText = (newText: string) => {
        this.template = [
            document.createTextNode(newText)
        ]
    }
}

import { pocketApp } from './index.js'
import { Pocket } from './lib/Pocket.js'

export class MyPocket extends Pocket {
    app!: typeof pocketApp

    constructor () {
        super()
        setTimeout(() => {
            this.app = pocketApp
        })
    }
}

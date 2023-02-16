export abstract class Pocket {
    private _template: (HTMLElement | Text)[] = []
    private _style: Partial<CSSStyleDeclaration> = {}

    el: HTMLElement = document.createElement('div')
    data: Record<string, unknown> = {}

    get template () {
        return this._template
    }

    set template (newTemplate: Pocket['_template']) {
        this.updateTemplate(newTemplate)
    }

    updateTemplate (newTemplate: Pocket['_template']) {
        this._template = newTemplate
        this.render()
    }

    get style () {
        return this._style
    }

    set style (newStyle) {
        this._style = newStyle
        for (const styleProp in this._style) {
            const styleValue = this._style[styleProp]
            if (styleValue) {
                this.el.style[styleProp] = styleValue
            }
        }
    }

    get classes () {
        return this.el.classList.toString().split(' ')
    }

    set classes (newClasses: string[]) {
        this.el.className = ''
        newClasses.forEach(className => {
            this.el.classList.add(className)
        })
    }

    constructor () {
        this.render()
    }

    addClass (className: string) {
        this.el.classList.add(className)
    }

    removeClass (className: string) {
        this.el.classList.remove(className)
    }

    toggleClass (className: string) {
        this.el.classList.toggle(className)
    }

    render () {
        this.el.innerHTML = ''
        this._template.forEach(element => {
            this.el.appendChild(element)
        })
    }
}

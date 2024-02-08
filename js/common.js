class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

      
       

        
        `
    }
}
customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
       
          <!-- Footer element add here  -->

        `
    }
}
customElements.define('my-footer', MyFooter)

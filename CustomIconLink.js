class CustomIconLink extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('custom-icon-link-template');
        const templateContent = template.content;

        // Create a shadow root
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(templateContent.cloneNode(true));

        // Set the icon and text content
        const iconClass = this.getAttribute('icon-class');
        const textContent = this.getAttribute('text-content');
        const iconElement = shadowRoot.querySelector('i');
        const textElement = shadowRoot.querySelector('span');
        if (iconClass) {
            iconClass.split(' ').forEach((className) =>
              iconElement.classList.add(className)
            );
          }
        textElement.textContent = textContent;
    }
}
customElements.define('custom-icon-link', CustomIconLink);
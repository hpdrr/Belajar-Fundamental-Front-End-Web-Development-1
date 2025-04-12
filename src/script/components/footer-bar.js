class FooterBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <h2>Made by Hapid Ramdani</h2>
        <p>&copy; 2025 Notes App</p>
    `;
  }
}

customElements.define("footer-bar", FooterBar);

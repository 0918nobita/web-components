class MyElement extends HTMLElement {
  constructor() {
    super();
    const p = document.createElement('p')
    p.innerHTML = 'Hello, Web Components!';
    this.appendChild(p);
    console.log('生成されました');
  }

  connectedCallback() {
    console.log('document に追加されました');
  }

  // disconnectedCallback: document から削除されたとき
  // attributeChangedCallback: 属性が変更されたとき

  adoptedCallback() {
    console.log('ownerDocument が変更されました', this.ownerDocument);
  }
}

customElements.define('my-element', MyElement);

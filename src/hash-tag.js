
class HashTag extends HTMLElement {
  connectedCallback(){
    const hash_id = this.innerText;
    this.innerHTML = `<a href="?&file-id=${hash_id}">${hash_id}</a>`
  }
}

customElements.define('hash-tag', HashTag);

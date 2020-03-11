import { LitElement, html } from 'lit-element';

export class SlotElement extends LitElement {

  render() {
    return html`
	  <section>
	    <slot></slot>
	  </section>
	  <hr>
	  <p>Slot name</slot>
	  <slot name="trigger"></slot>
	`;
  }
}
customElements.define('slot-element', SlotElement);
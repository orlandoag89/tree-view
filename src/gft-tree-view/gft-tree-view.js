import { LitElement, html } from 'lit-element';
import { gftTreeViewStyles } from './src/styles/gft-tree-view-styles';
import { hiddenElement, toggleElement } from './src/js/toggle-element';

export class GftTreeView extends LitElement {

  static get properties() {
    return {
      parentId: { type: String },
      parentClass: { type: String },
      parentMain: { type: String }
    };
  }
  static get styles() {
    return [gftTreeViewStyles];
  }

  render() {
    return html`
	  <div class="container">
	    <slot name="gft-tree-view"></slot>
		  <object class="gft-tree-view-presentation-data" id="gftTreeViewShowData" data=""></object>
	  </div>
	`;
  }

  firstUpdated() {
    super.firstUpdated();
    this.parentMain = this.parent;
    hiddenElement(this.parents);
    toggleElement(this.parents, this.object);
    hiddenElement(this.children);
    toggleElement(this.children, this.object);
  }

  get parents() {
    const query = this.parentMain + ' > li';
    return Array.from(document.querySelectorAll(query));
  }

  get children() {
    return Array.from(document.querySelectorAll(this.parentMain + ' li > ul > li'));
  }

  get object() {
    return this.shadowRoot.querySelector('#gftTreeViewShowData');
  }

  get parent() {
    let output = '';
    if (this.validateProperty(this.parentId)) {
      output = '#' + this.parentId;
    } else if (this.validateProperty(this.parentClass)) {
      console.error('Atention', 'If you use a class can be that others tags have been affect');
      output = '.' + this.parentClass;
    }
    return output;
  }

  validateProperty(field) {
    return !(field === undefined || field === '');
  }
}

customElements.define('gft-tree-view', GftTreeView);
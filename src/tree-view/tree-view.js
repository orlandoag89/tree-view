import { LitElement, html } from 'lit-element';
import { treeViewStyles } from './modules/tree-view-styles.js';
import { hiddenElement, toggleElement } from './script/hidden-element';

export class TreeView extends LitElement {

  static get styles() {
    return [treeViewStyles];
  }

  render() {
    return html`
      <div class="container">
        <ul class="parent">
          <li><a href="https://lit-element.polymer-project.org/guide/lifecycle#update">Parent1</a>
          </li>
          <li><a href="#">Parent2</a>
            <ul>
              <li><a href="#">Item1</a></li>
              <li><a href="#">Item2</a></li>
              <li><a href="#">Item3</a>
                <ul>
                  <li><a href="#">Item3.1</a></li>
                  <li><a href="#">Item3.2</a></li>
                  <li><a href="#">Item3.3</a>
                    <ul>
                      <li><a href="#">Item3.3.1</a>
                        <ul>
                          <li><a href="#">Item3.3.1.1</a></li>
                          <li><a href="#">Item3.3.2.2</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Item3.3.2</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Item3.4</a></li>
                </ul>
              </li>
              <li><a href="#">Item4</a></li>
            </ul>
          </li>
          <li><a href="https://polymer-library.polymer-project.org/2.0/docs/devguide/shadow-dom" target="_blank">Parent3</a>
          </li>
          <li><a href="#">Parent4</a>
            <ul>
              <li><a href="#">Item1</a></li>
              <li><a href="#">Item2</a></li>
            </ul>
          </li>
        </ul>
        <section class="container-data" id="section">
          <object class="presentation-data" id="iFrm" data=""></object>
        </section>
      </div>
    `;
  }

  get parents() {
    return Array.from(this.shadowRoot.querySelectorAll('.parent > li'));
  }

  get childrens() {
    return Array.from(this.shadowRoot.querySelectorAll('li > ul > li'));
  }

  get section() {
    return this.shadowRoot.querySelector('#section');
  }

  get iframe() {
    return this.shadowRoot.querySelector('#iFrm');
  }

  firstUpdated() {
    super.firstUpdated();
    hiddenElement(this.parents);
    hiddenElement(this.childrens);
    toggleElement(this.childrens, this.iframe);
    toggleElement(this.parents, this.iframe);
  }
}
customElements.define('tree-view', TreeView);
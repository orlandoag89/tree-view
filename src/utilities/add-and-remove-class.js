/**
 * Modificar el contexto del documento
 */
class AddAndRemoveClass {

  get parents() {
    return this.getArray(document.querySelectorAll('.parent > li'));
  }

  get childrens() {
    return this.getArray(document.querySelectorAll('li > ul > li'));
  }

  get section() {
    return document.querySelector('section');
  }

  get iframe() {
    return document.querySelector('#iFrm');
  }

  getArray(expression) {
    return Array.from(expression);
  }

  addHiddenClassToUL(array) {
    array.map(value => {
      if (value.tagName === 'UL') {
        value.classList.add('hidden');
      }
    });
  }

  removeHiddenClasFromUL(array) {
    const arrayFromTags = array.map(tag => {
      if (tag.tagName === 'UL') {
        tag.classList.toggle('hidden');
      }
      return tag.tagName;
    });
    let includesUl = arrayFromTags.includes('UL');
    if (!includesUl) {
      let href = array.map(val => {
        return val.href;
      })[0];
      this.iframe.data = href;
    }
  }

  hidden(array) {
    array.map(value => {
      const tmp = this.getArray(value.children);
      this.addHiddenClassToUL(tmp);
    });
  }

  show(array) {
    array.map(tag => {
      return this.getArray(tag.children);
    }).map(children => {
      children.map(liOrUl => {
        if (liOrUl.tagName === 'A') {
          liOrUl.addEventListener('click', evt => {
            evt.preventDefault();
            this.removeHiddenClasFromUL(children);
          });
        }
      });
    });
  }

  setHiddenParents() {
    this.hidden(this.parents);
  }

  setHiddenChildrens() {
    this.hidden(this.childrens);
  }

  removeHiddenChildren() {
    this.show(this.childrens);
  }

  removeHiddenParents() {
    this.show(this.parents);
  }
}

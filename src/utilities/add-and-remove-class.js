/**
 * Modificar el contexto del documento
 */
class AddAndRemoveClass {

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
    array.map(value => {
      console.log(value);
      if (value.tagName === 'UL') {
        value.classList.remove('hidden');
      } else {
        console.log('No tiene hijos');
      }
    });
  }

  hidden(array) {
    array.map(value => {
      const tmp = this.getArray(value.children);
      this.addHiddenClassToUL(tmp);
    });
  }

  show(array) {
    let tagsInArray = array.map(tag => {
      return this.getArray(tag.children);
    }).map(children => {
      children.map(liOrUl => {
        if (liOrUl.tagName === 'A') {
          liOrUl.addEventListener('click', evt => {
            this.removeHiddenClasFromUL(children);
          });
        }
      });
    });


    // array.map(value => {
    //   value.addEventListener('click', e => {
    //     const tmp = this.getArray(value.children);
    //     this.removeHiddenClasFromUL(tmp);
    //   });
    // });
  }

  setHiddenParents() {
    const parents = this.getArray(document.querySelectorAll('.parent > li'));
    this.hidden(parents);
  }

  setHiddenChildrens() {
    const lis = this.getArray(document.querySelectorAll('li > ul > li'));
    this.hidden(lis);
  }

  removeHiddenChildren() {
    const parents = this.getArray(document.querySelectorAll('li > ul > li'));
    this.show(parents);
  }

  removeHiddenParents() {
    const parents = this.getArray(document.querySelectorAll('.parent > li'));
    this.show(parents);
  }
}

class HiddenElement {

  getArray(expression) {
    return Array.from(expression);
  }

  addHiddenClassToUl(array) {
    array.map(tag => {
      if (tag.tagName === 'UL') {
        tag.classList.add('hidden');
      }
    });
  }

  hidden(array) {
    array.map(tag => {
      const tmp = this.getArray(tag.children);
      this.addHiddenClassToUl(tmp);
    });
  }

  removeHiddenClasFromUL(array, objectToShow) {
    const includesUl = array.map(tag => {
      if (tag.tagName === 'UL') {
        tag.classList.toggle('hidden');
      }
      return tag.tagName;
    }).includes('UL');
    if (!includesUl) {
      let href = array.map(val => {
        return val.href;
      })[0];
      objectToShow.data = href;
    }
  }

  show(array, objectToShow) {
    array.map(tag => {
      return this.getArray(tag.children);
    }).map(children => {
      children.map(childrenTag => {
        if (childrenTag.tagName === 'A') {
          childrenTag.addEventListener('click', evt => {
            evt.preventDefault();
            this.removeHiddenClasFromUL(children, objectToShow);
          });
        }
      });
    });
  }
}

const hiddenElement = arrayContent => {
  const hiddenElementObj = new HiddenElement();
  hiddenElementObj.hidden(arrayContent);
}

const toggleElement = (arrayContent, objectToShow) => {
  const hiddenElementObj = new HiddenElement();
  hiddenElementObj.show(arrayContent, objectToShow);
}

export { hiddenElement, toggleElement };
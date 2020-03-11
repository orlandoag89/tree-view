class ToggleElement {

  getArray(expression) {
    return Array.from(expression);
  }

  addHiddenClassToUl(tagsFromArray) {
    tagsFromArray.map(tag => {
      if (tag.tagName === 'UL') {
        tag.classList.add('hidden');
      }
    });
  }

  hidden(array) {
    array.map(tag => {
      const tags = this.getArray(tag.children);
      this.addHiddenClassToUl(tags);
    });
  }

  toggleHiddenClasFromUL(tags, objectToShow) {
    const includesUl = tags.map(tag => {
      if (tag.tagName === 'UL') {
        tag.classList.toggle('hidden');
      }
      return tag.tagName;
    }).includes('UL');

    if (!includesUl) {
      let href = tags.map(val => {
        return val.href;
      })[0];
      objectToShow.data = href;
    }
  }

  show(array, objectToShow) {
    array.map(tag => {
      return this.getArray(tag.children);
    }).map(children => {
      children.map(sonTag => {
        if (sonTag.tagName === 'A') {
          sonTag.addEventListener('click', evt => {
            evt.preventDefault();
            this.toggleHiddenClasFromUL(children, objectToShow);
          });
        }
      });
    });
  }
}

const hiddenElement = arrayContent => {
  const hidden = new ToggleElement();
  hidden.hidden(arrayContent);
}

const toggleElement = (arrayContent, objectToShow) => {
  const toggle = new ToggleElement();
  toggle.show(arrayContent, objectToShow);
}

export { hiddenElement, toggleElement };
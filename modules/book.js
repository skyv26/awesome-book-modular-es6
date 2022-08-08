class Book {
  constructor(props) {
    this.bookObject = {};
    this.preserveDataList = [];
    this.uList = props.uList;
  }

  loadData() {
    this.localStorageHandler(false);
    this.objIteratorHandler(true);
  }

  add(title, author) {
    this.bookObject = { title, author };
    this.preserveDataList.push(this.bookObject);
    this.objIteratorHandler();
  }

  remove(objId) {
    this.requestedDataHandler();
    this.preserveDataList.splice(objId, 1);
    this.objIteratorHandler();
  }

  objIteratorHandler(mode = false) {
    const htmlObjList = this.preserveDataList.map((each, id) => `<li class="list"><h2 class="bookTitle">"${each.title}"&nbsp;by</h2><h3 class="bookAuthor">&nbsp;${each.author}</h3><button class="remove-btn btn-${id}">Remove</button></li>`);
    this.uList.textContent = '';

    if (!mode) {
      this.localStorageHandler();
    }

    htmlObjList.forEach((each) => {
      this.uList.insertAdjacentHTML('afterbegin', each);
    });
  }

  localStorageHandler(mode = true) {
    if (mode) {
      localStorage.setItem('data', JSON.stringify(this.preserveDataList));
    } else {
      this.preserveDataList = JSON.parse(localStorage.getItem('data')) ?? []; // Nullish Coelasing Operator
    }
  }

  requestedDataHandler() {
    if (this.preserveDataList.length === 0) {
      this.localStorageHandler(false);
    }
  }
}

export default Book;
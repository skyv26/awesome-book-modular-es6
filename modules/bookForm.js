const bookForm = () => {
  return (
    `<section id="add-item" class="section books-add_section">
        <h2 class="heading">Add a new book</h2>
        <form class="input-form">
          <input type="text" class="form-title inputs" placeholder="Title" aria-label="enter the book title" />
          <input type="text" class="form-author inputs" placeholder="Author" aria-label="enter the book author's name" />
          <input type="submit" class="inputs" value="Add" aria-label="add the new book" />
        </form>
      </section>`
  );
};

export default bookForm;
const bookForm = (props) => `
    <section id="add-item" class="section books-add_section">
      ${props.heading({ textData: props.add ? 'Add a new book' : 'Update the book' })}
      <form class="input-form">
        <input type="text" class="form-title inputs" placeholder="Title" ${props.add ? '' : `value="${props.title}"`} aria-label="enter the book title" />
        <input type="text" class="form-author inputs" placeholder="Author"  ${props.add ? '' : `value="${props.authorName}"`} aria-label="enter the book author's name" />
        <input type="submit" class="inputs" value="Add" aria-label="add the new book" />
      </form>
    </section>`;

export default bookForm;
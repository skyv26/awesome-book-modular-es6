const viewBook = (props) => ` 
    <section id="list-item" class="section books-view_section active">
        ${props.heading({ textData: 'All Awesome Books' })}
        ${props.bookContainer([])}
    </section>`;
export default viewBook;
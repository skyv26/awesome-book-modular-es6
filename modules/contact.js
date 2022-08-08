const contactObj = [
  {
    text: 'Our email: ',
    link: 'mailto:dev.aakashv@gmail.com',
    content: 'dev.aakashv@gmail.com',
  },
  {
    text: 'Our phone number: ',
    link: 'tel:+917009243305',
    content: '+917009243305',
  },
  {
    text: 'Our address: ',
    link: null,
    content: 'Ferozepur, Punjab',
  },
];

const contact = (props) => `
  <section id="contact" class="section contact_section">
  ${props.heading({ textData: 'Contact Information' })}
    <div class="contact-info">
      <p class="desc">
        Do you have any questions or just want to say "Hello"?
        You can react out to us ?
      </p>
    </div>
    <ul class="contact-list">
      ${contactObj.map((each) => `
          <li class="list">${each.text}
            <a ${each.link ? `href="${each.link}"` : ''} class="contact-link email">
              ${each.content}
            </a>
          </li>`).join('')};
    </ul>
  </section>`;

export default contact;
const headerObj = [
  {
    link: '#list-item',
    active: true,
    text: 'List',
  },
  {
    link: '#add-item',
    active: false,
    text: 'Add New',
  },
  {
    link: '#contact',
    active: false,
    text: 'Contact',
  },
];

class Header {
  constructor() {
    this.str = null;
  }

  component() {
    this.str = `<header class="header">
      <div class="header-content_wrapper">
        <h1 class="logo">Awesome Books</h1>
        <nav class="menu">
          <ul class="menu-ul">
            ${headerObj.map((each) => `
              <li class="list">
                <a href=${each.link} class="link ${each.active ? 'active' : ''}">${each.text}</a>
              </li>`).join('')}
          </ul>
        </nav>
      </div>
    </header>`;
    return this.str;
  }
}

export default Header;
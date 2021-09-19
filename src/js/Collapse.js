/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
export default class Collapse {
  constructor(container) {
    this.container = container;
    this.collapseBlock = null;
    this.button = null;

    this.collapseToggle = this.collapseToggle.bind(this);
  }

  init() {
    this.buildIt();
    this.collapseBlock = document.querySelector('.collapsible');
    this.button = document.querySelector('.collapse-button');
    this.button.addEventListener('click', this.collapseToggle);
    this.collapseBlock.style.height = '0px';
  }

  buildIt() {
    const button = document.createElement('button');
    button.classList.add('collapse-button', 'button');
    button.textContent = 'Collapse';
    const collapsible = document.createElement('div');
    collapsible.classList.add('collapsible');
    const anim = document.createElement('div');
    anim.classList.add('anim');
    anim.textContent = 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. ';
    this.container.appendChild(button);
    this.container.appendChild(collapsible);
    collapsible.appendChild(anim);
  }

  collapseToggle() {
    this.collapseBlock.style.height === '0px'
      ? (this.collapseBlock.style.height = `${this.collapseBlock.scrollHeight}px`)
      : (this.collapseBlock.style.height = '0');
  }
}

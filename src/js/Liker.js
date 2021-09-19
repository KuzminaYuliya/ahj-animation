/* eslint-disable linebreak-style */
export default class Liker {
  constructor(container) {
    this.container = container;
    this.button = null;
    this.animationOption = null;
    this.previousOption = null;

    this.showHeart = this.showHeart.bind(this);
  }

  init() {
    this.buildIt();
    this.button = document.querySelector('.like-button');
    this.button.addEventListener('click', this.showHeart);
  }

  buildIt() {
    const button = document.createElement('button');
    button.classList.add('like-button', 'button');
    button.textContent = 'Like';
    this.container.appendChild(button);
  }

  showHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    do {
      this.animationOption = Math.ceil(Math.random() * 4);
    } while (this.animationOption === this.previousOption);
    this.previousOption = this.animationOption;
    this.container.appendChild(heart);
    heart.style.animationName = `fly-option-${this.animationOption}`;
    heart.addEventListener('animationend', this.removeHeart);
  }

  // eslint-disable-next-line class-methods-use-this
  removeHeart(event) {
    event.target.remove();
    event.target.removeEventListener('animationend', this.removeHeart);
  }
}

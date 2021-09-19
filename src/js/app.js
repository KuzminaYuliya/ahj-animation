/* eslint-disable linebreak-style */
import Collapse from './Collapse';
import CallbackChat from './CallbackChat';
import Liker from './Liker';

const collapseContainer = document.querySelector('.collapse-container');
const collapse = new Collapse(collapseContainer);
collapse.init();

const chatContainer = document.querySelector('.chat-container');
const chat = new CallbackChat(chatContainer);
chat.init();

const likerContainer = document.querySelector('.liker-container');
const liker = new Liker(likerContainer);
liker.init();

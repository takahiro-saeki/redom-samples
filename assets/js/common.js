import { el, mount, text, setChildren } from 'redom';
import Header from './component/Header';
import Main from './component/Main';
import page from 'page';
new Main();
document.body.style.margin = 0;

const index = mount(document.body, new Header());

import { el, mount, text, setChildren } from 'redom';
import style from '../../css/style';
import classNames from 'classnames';
import page from 'page';

export default class Header {
  constructor() {
    return this.baseComponent();
  }
  baseComponent() {
    const headerStyle = classNames(style['container-fluid'], style.header);
    const wrapper = el('header', { onclick: alert('test') }, {class: headerStyle});
    const headerText = el('nav', 'redom-example', {onclick: console.log('test')});
    setChildren(wrapper, [ headerText ])
    return wrapper;
  }
}

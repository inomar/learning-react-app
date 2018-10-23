// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import '../css/index.css';

import Heading from './heading';

export class Render {
  constructor(targetId: string) {
    const target = document.getElementById(targetId);
    if (target != null) {
      this.render(target);
    }
  }

  render(target: HTMLElement) {
    ReactDOM.render(<Heading name="inomar" />, target);
  }
}


export default new Render('react-app');

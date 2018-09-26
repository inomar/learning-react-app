import React, { Component } from 'react';
import MyCover from './MyCover';
import PropTypes from 'prop-types';

export default class MyBook extends Component {
  render() {
      return (
          <div>
              <MyCover isbn={ this.props.info.isbn } title={ this.props.info.title } />
              <ul>
                  <li>書名: { this.props.info.title }</li>
                  <li>価格: { this.props.info.price }</li>
                  <li>出版社: { this.props.info.published }</li>
              </ul>
          </div>
      )
  }
}

MyBook.propTypes = {
    info: PropTypes.object.isRequired,
    // info: {
    //     title: PropTypes.string.isRequired,
    //     price: PropTypes.number.isRequired,
    //     published: PropTypes.string.isRequired
    // }
}
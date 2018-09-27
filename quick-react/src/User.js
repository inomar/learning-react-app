import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class User extends Component {
  static propTypes = {
      name: PropTypes.string,
      age:  PropTypes.number,
      image: PropTypes.string,
      sex:  PropTypes.oneOf(
          [ "男性", "女性", "不明"]
      ),
      isNew: PropTypes.bool,
  };

  render () {
      return (
          <React.Fragment>
              <img src={this.props.image} width="200" />
              <p>{this.props.name}</p>
              <p>{this.props.age} 歳</p>
              <p>{this.props.sex}</p>
              <p>{this.props.isNew && 'NEW!'}</p>
          </React.Fragment>
      )
  }
}
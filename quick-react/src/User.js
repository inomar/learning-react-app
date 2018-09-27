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

  renderIsNew(isNew) {
      if(!this.props.isNew) {
          return '関数からの呼び出し'
      }
  }

  render () {
      return (
          <React.Fragment>
              <img src={this.props.image} width="200" />
              <p>{this.props.name}</p>
              <p>{this.props.age} 歳</p>
              <p>{this.props.sex}</p>
              <p>{this.props.isNew && 'NEW!'}</p>
              {(() =>{
                  if(this.props.isNew) {return '若いね〜'}
              })()}
              <p>{this.renderIsNew(this.props.isNew)}</p>
          </React.Fragment>
      )
  }
}
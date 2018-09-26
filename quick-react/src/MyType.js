import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Member { }

export default class MyType extends Component {
    render () {
        console.log(this.props.value);
        return <p>結果はコンソールを確認</p>
    }
}

MyType.propTypes = {
  prop1: PropTypes.instanceOf(Member),
  prop2: PropTypes.oneOf(['男', '女', '不明']),
  prop3: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
  ]),
  prop4: PropTypes.arrayOf(PropTypes.number),
  prop5: PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      sex: PropTypes.oneOf(['男', '女', '不明']),
  }),
  prop6: PropTypes.string,
}

MyType.defaultProps = {
    prop6: '名前無し',
}
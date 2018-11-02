import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Sample extends Component {
    static propTypes = {
        age: PropTypes.number.isReqired
    }

    renderIfFat(isFat) {
        if (isFat) {
            return <span>Fat!!</span>
        }
    }
    render() {
        return (
            <React.Fragment>
                <p>My name is {this.props.name} and {this.props.age} years old.({this.renderIfFat(this.props.isFat)})}</p>
                <p>cats: {this.props.cats.map((cat,index) => <li key={index}>{cat} 様</li>)}</p>
                <p>read me this {this.props.book.name} by {this.props.book.author}.</p>
            </React.Fragment>
        )
    }
}

Sample.propTypes = {
    name: PropTypes.string.isRequired
}
Sample.defaultProps = {
    name: '名無しのゴンベ'
}
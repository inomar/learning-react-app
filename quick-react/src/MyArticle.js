import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MyArticle extends Component {
    // static propTypes = {
    //     url: PropTypes.string.isRequired,
    //     title: PropTypes.string.isRequired,
    //     description: PropTypes.string.isRequired
    // };
    render() {
        return (
            <React.Fragment>
                <dl>
                    <a href={this.props.url} >
                      {this.props.title}
                    </a>
                </dl>
                <dd>
                    {this.props.description}
                </dd>
            </React.Fragment>
        );
    }
}
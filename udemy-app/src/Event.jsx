import React from 'react';

export default class Event extends React.Component {
    show(sufix,e) {
        console.log(`${this.props.greet}, ${e.target.value}${sufix}`);
    }

    render() {
        return (
            <form>
                <label htmlFor="textName">名前:</label>
                <input type="text" id="textName" onChange={this.show.bind(this,'さん')} />
                
            </form>
        )
    }
}
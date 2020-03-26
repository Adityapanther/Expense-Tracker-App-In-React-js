import React, {Component} from 'react';

class SubmitBtn extends Component{
    render(props) {
        return (
        <button onClick={this.props.data.fun} className="marmin">{this.props.data.name}</button>
        )
    }
}

export default SubmitBtn;
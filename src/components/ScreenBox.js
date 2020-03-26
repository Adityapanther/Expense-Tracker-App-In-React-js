import React,{Component,} from 'react';


class ScreenBox extends Component{

    render(props) {
        return (
            <div className="screen-box">
                <div class="title-screen marmin">
                    <h1>Total Saving</h1>
                </div>
                <div className="price-screen marmin">
                    <p>{this.props.value}</p>
                </div>
                <div className="currency-screen marmin">
                    <h3>Indian Rupes</h3>
                </div>
            </div>
        )
    }
}


export default ScreenBox;
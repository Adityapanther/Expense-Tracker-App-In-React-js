import React,{Component,} from 'react';


class InputContainer extends Component{

    render(props) {
        return (
            <div class="input-contaner marmin">
                    <label>
                        {this.props.data.label} <br />
                        <input type="number" 
                        value={this.props.data.value}
                         name={this.props.data.name}
                          onChange={this.props.data.fun}
                          required
                          />
                    </label>
            </div>
        )
    }
}


export default InputContainer;
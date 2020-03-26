import React,{Component,} from 'react';
import ScreenBox from './ScreenBox';
import InputContaner from './InputContainer';
import SubmitBtn from './SubmitBtn';

class InputBox extends Component{
    constructor(){
        super();
        this.state ={
            totalIncome: "",
            houseRent:"",
            education:"",
            other:"",
            display: 0
        }

        this.onChangeData = this.onChangeData.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeData(event){
        const {name, value} = event.target
       this.setState({
           [name]: value
       })
    }

    onSubmit(){
        let ti = parseInt(this.state.totalIncome);
        let edu = parseInt(this.state.education);
        let hr = parseInt(this.state.houseRent);
        let ot = parseInt(this.state.other);

        const exp = edu +hr +ot;
        const res = ti - exp;

        this.setState({
            'display': res
        })

        this.clearValue()

    }

    clearValue(){
        this.setState({
            totalIncome: "",
            houseRent:"",
            education:"",
            other:"",
        })
    }

    

    render() {
        
        return (
            <div className="container">
                <ScreenBox value={this.state.display} />
                <div className="input-box">
                <InputContaner data={{label: "Total Income", value:this.state.totalIncome, fun: this.onChangeData, name: 'totalIncome'}}/>
                <InputContaner data={{label: "House Rents", value:this.state.houseRent, fun: this.onChangeData, name: 'houseRent'}}/>
                <InputContaner data={{label: "Education", value:this.state.education, fun: this.onChangeData, name: 'education'}}/>
                <InputContaner data={{label: "Other",  value:this.state.other,fun: this.onChangeData, name: 'other'}}/>
                <SubmitBtn data={{name: "Calculate", fun: this.onSubmit}}/>
            </div>
            </div>
        )
    }
}


export default InputBox;
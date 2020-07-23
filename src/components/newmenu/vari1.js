import React,{Component} from 'react';
import Imgcondition from './imgcondition';

class Box extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div className={this.props.iconsize===1 || this.props.iconsize===2 ? `with20per card-inner`: `col-sm-3 card-inner`}
                 draggable={this.props.draggable}
                 onDragStart={this.props.onDragStart({ id: this.props.box.id })}
                 onDragOver={this.props.onDragOver({ id: this.props.box.id })}
                 onDrop={this.props.onDrop({ id: this.props.box.id })}
            >
                <div className={this.props.backactive === "black" ? `hover-effect1 widt${this.props.iconsize}`:`hover-effect widt${this.props.iconsize}`}>
                    <div className={`img-div sizer${this.props.iconsize} text-center`}>
                        <Imgcondition
                            box={this.props.box}
                            addTabs={this.props.addTabs}
                            color={this.props.color}
                        />


                        {/*<i className="fa fa-cube cursor-pointer"*/}
                        {/*onClick={()=>{this.addTabs("API Test")}}*/}
                        {/*style={{fontSize:"100px"}}></i>*/}
                    </div>
                    <h4 className={`text-center cursor-pointer ${this.props.fontsize}size`}
                        onClick={() => { this.props.addTabs(this.props.box.fparam) }}
                    >{this.props.box.name}</h4>
                </div>
            </div>

        );
    }
}
export default Box
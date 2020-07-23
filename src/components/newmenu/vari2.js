import React,{Component} from 'react';
import Imgcondition from './imgcondition';

class Box extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div className={this.props.iconsize===1 || this.props.iconsize===2 ? `width40per card-inner h-100 flex-row mt-1 pt-2 pb-2`: `width40per card-inner h-100 flex-row mt-1 pt-2 pb-2`}
                 draggable={this.props.draggable}
                 onDragStart={this.props.onDragStart({ id: this.props.box.id })}
                 onDragOver={this.props.onDragOver({ id: this.props.box.id })}
                 onDrop={this.props.onDrop({ id: this.props.box.id })}
                 onClick={()=> this.props.addTabs(this.props.box.fparam)}
            >
                <div className={this.props.backactive === "black" ? `hover-effect1 w-100 d-flex align-items-center pt-2 pb-2 pr-2`:` d-flex align-items-center hover-effect w-100 pt-2 pb-2 pr-2`}>
                    <div className={`img-div sizer${this.props.iconsize} text-center pt-0`}>
                        <Imgcondition
                            box={this.props.box}
                            addTabs={this.props.addTabs}
                            color={this.props.color}
                        />


                        {/*<i className="fa fa-cube cursor-pointer"*/}
                        {/*onClick={()=>{this.addTabs("API Test")}}*/}
                        {/*style={{fontSize:"100px"}}></i>*/}
                    </div>
                    <div>
                        <h4 className={` cursor-pointer ${this.props.fontsize}size  mb-0 mt-0`}
                            onClick={() => { this.props.addTabs(this.props.box.fparam) }}
                        >{this.props.box.name}</h4>
                        <p style={{fontSize:"12px"}} className={`${this.props.fontsize}size mb-0`}>
                            at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                            from a Lorem Ipsum passage, and going through the cites of the word in classical literature,

                        </p>
                    </div>
                </div>
            </div>

        );
    }
}
export default Box
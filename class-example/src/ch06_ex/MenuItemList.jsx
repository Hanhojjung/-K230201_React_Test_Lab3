import MenuItem from "./MenuItem";
import React, { Component } from 'react';

const menuNoti = [
    {id:1, message:"밀면"},
    {id:2, message:"치즈 크러스트 쉬림프 포테이토 하프 피자"},
    {id:3, message:"마왕족발"},
    {id:4, message:"하동녹차 버블티"}
    
]

var timer;
class MenuItemList extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            noti : []
        };
    }

    componentDidMount(){
        const{noti} = this.state;

        timer = setInterval(() => {
            if(noti.length<menuNoti.length){
                const index = noti.length;
                noti.push(menuNoti[index]);
                this.setState({
                    noti: noti
                });
            }else{
                
                clearInterval(timer);
                // this.setState({
                //     noti:[]
                // })
            }

        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.noti.map((noti) =>{
                    return <MenuItem key={noti.id} id={noti.id} message={noti.message}/>
                })}
            </div>
        );
    }
}

export default MenuItemList;
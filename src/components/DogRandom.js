import React from "react";
import axios from "axios";

export default class DogRandom extends React.Component {

    constructor(){
        super()
        this.state={
            url:''
        }
    }
componentDidMount(){
    this.getImage()
}
getImage=()=>{
    axios
    .get(" https://dog.ceo/api/breeds/image/random")
    .then(response => {
        console.log(response.data.message)
        this.setState({
            url:response.data.message
        })
    })
    .catch(err => {
      console.log(err);
    });

}


    render(){
        return (
            <div>
                <h>DogRandom</h>
            <img src={this.state.url}></img>
            </div>
        )
    }
}

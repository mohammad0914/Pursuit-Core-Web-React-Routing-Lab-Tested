import React from "react";
import axios from "axios";

export default class DogRandomWithId extends React.Component {

    constructor(){
        super()
        this.state={
            images:[]
        }
    }
    
componentDidMount(){
    this.getImage()
}
getImage=()=>{
    const  {id}=this.props.match.params

    axios
    .get(`https://dog.ceo/api/breeds/image/random/+${id}`)
    .then(response => {
        console.log(response.data.message)
        this.setState({
            images:response.data.message
        })
    })
    .catch(err => {
      console.log(err);
    });

}


    render(){
        return (
            
         this.state.images.map((image)=>{
        return <img src={image} key={image}/>
          })
          
        )
    }
}

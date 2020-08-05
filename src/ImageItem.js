import React from 'react';


export default class ImageItem extends React.Component{
    render(){
        return(
            <>
                <span>{this.props.title}</span>
                <img src={this.props.image} alt={this.props.title}/>
            </>
        )
    }
}
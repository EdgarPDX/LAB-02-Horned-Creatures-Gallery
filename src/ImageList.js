import React from 'react';
import ImageItem from './ImageItem.js'




export default class ImageList extends React.Component{
    
    render() {
        return(
            <> 
                
                
                    
                { 
                    this.props.images.map((image) => <li><ImageItem key={image.keyword} image={image.url} /></li>)
                }

                
              
                
            </>
            
            
        )
    }
}
import React from 'react';
import Header from './Header.js'
import './App.css';
// import ImageList from './ImageList.js';
import Images from './Data.js'

const options = [
  "narwhal",
  "rhino",
  "unicorn",
  "unilego",
  "triceratops",
  "markhor",
  "mouflon",
  "addax",
  "chameleon",
  "lizard",
  "dragon"
];
class App extends React.Component {
   state = {keyword: '' }

  handleChange = (e)=>{
   const keyword = e.target.value;      
    this.setState({keyword: keyword})
  }
  render() {
 
    const filteredImages = Images.filter(image => image.keyword === this.state.keyword)
    return (
      <>
          <Header />
          <main>
            <section className="options">
              <select className="image-filter" onChange={this.handleChange} keyword={Images.keyword}>
                
                  {
                    options.map(option => <option key={option} value={option}>{option}</option>)
                  }
                        
              </select>
            </section>
            <section>
              {
                filteredImages.map(image => <img src={image.url} alt={image.keyword}/>)
              }
            </section>
              
              
            
            
        
        
          </main>
      </>
    )  
  }
}

export default App;

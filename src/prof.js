
	import './App.css';
    import photo from "./photo.jpg";
    import React from 'react';
    
    class   Results extends React.Component  {
      constructor(props) {
        super(props);
        this.state = {
          fullName: "mchergui kairia",
          bio: "produit cosmetique",
          imgSrc: {photo},
          profession: "student",
          Show: true,
         
        };
      }
      
      
     // appearProfile() {
       
     // }
     render(){
      return (
        <div>
            
             <img src={photo}  width="300px" height="300px" />
       <h1>My name is  {this.state.fullName}</h1>
       <p>
         Im a  {this.state.profession} and  I'm interested by  
         {this.state.bio}
          
       </p> </div>
           
            
      
            
        
    
      );
    }
      }
   
    
  export default Results ;
import React from 'react';

const Component = props => {

    alert ('hi my name is ',props.name, 'im a ',props.profession,'and ',props.bio)
    return (
        <div>
          <h1 style={{display :'center' ,color :'red'}}> hi my name is {props.name}, im a {props.profession}and {props.bio} </h1>
          <img src='{props.children}'/>
          
               
                    
        </div>
        
    )
}

export default Component

import React from 'react';

class NextDay extends React.Component{

render(){
    return(
  
         <div className="next-day">
           
{/* BAD API FOR FOREAST  */}

               { console.log(this.props.forecast) }
 </div>
  )
    }
}

export default NextDay;
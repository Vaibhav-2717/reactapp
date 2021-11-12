import { Companies } from "react";

export class Components extends Companies{
    constructor(){ 
    super()
     this.state={
         message:"Welcome traveller"
     }
}  

changemessage(){
    this.setState({
        message:'thank you for subsrcibing'
    })
}
render(){
    return(
        <div>
            <p>from classs component:(this.state.message)</p>
             <button onClick={()=>this.changemessage()}>Subscribe</button>
        </div>
    )}
}
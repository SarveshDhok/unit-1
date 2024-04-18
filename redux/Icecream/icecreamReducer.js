import { BUY_ICECREAM } from "./icecreamTypes"

const intialstate  ={
        "numOfIceCream":10
    }
    
const icecreamReducer = (state=intialstate , action)=>{
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIceCream:state.numOfIceCream - 1
        }   
            default:return state
}
}

export default icecreamReducer;
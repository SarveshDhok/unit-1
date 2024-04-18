import React,{useState} from "react";
import { useDispatch , useSelector} from "react-redux";
import { buyIceCream } from "./icecream/icecreamActions";
// import { connect } from 'react-redux';

function IcecreamContainer(props){
    // const [number, setNumber] = useState(1)
    const numOfIceCream = useSelector(state => state.icecream.numOfIceCream)
    const dispatch = useDispatch();
return(
    <div>
        <h2>
            Number of Ice Cream - {numOfIceCream}
        </h2>
        <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
)
}

// const mapStateToProps = (state, ownProps) => {
//     return{
//         numOfCakes : state.cake.numOfCakes
//     }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return{
//         buyCake : number => dispatch(buyCake(number))
//     }
// }


export default IcecreamContainer;
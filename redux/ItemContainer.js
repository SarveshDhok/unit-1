import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./cake/cakeActions";
import { buyIceCream } from "./icecream/icecreamActions";

function ItemContainer(props){
    // const [number, setNumber] = useState(1)
    // const numOfCakes = useSelector(state => state.cake.numOfCakes)
    // const dispatch = useDispatch();
return(
    <div>
        <h2>
            Item = {props.item}
        </h2>
        <button onClick={props.buyItem}>Buy Items</button>
    </div>
)
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ?
                        state.cake.numOfCakes:
                        state.icecream.numOfIceCream
    return{
        item : itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ?
                                () => dispatch(buyCake()):
                                () => dispatch(buyIceCream())
    return{
        buyItem : dispatchFunction
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
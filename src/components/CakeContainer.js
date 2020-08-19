import React from 'react';
import { buyCake } from '../redux';
import {connect} from 'react-redux';
function CakeContainer(props){
    return(
        <div>
            <h2>Number of cakes: {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
}


// step #1 create mapStateToProps
const mapStateToProps = state => {
    return{
        numOfCakes: state.numOfCakes,
    }
}

// step #2 create mapDispatchToProps
const mapDispatchToProps = dispatch =>{
    return{
        buyCake: () => dispatch(buyCake())
    }
}

// step #3 make sure to use connect() and pass in our
// functions above as parameters
export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer);
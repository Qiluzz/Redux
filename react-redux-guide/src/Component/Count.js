import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as countActions from '../store/action/action.count';


function Count({ increment, decrement, count}) {

    return (
        <div>
            <button onClick={increment}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>
        </div>
    )
    
}
const mapStateToProps = state =>({
    count: state.count
})

// bindActionCreators({
//     increment(){
//         return {
//         type: 'increment'
//         }
//     },
//     decrement() {
//         return {
//         type: 'decrement'
//         }
//     }
// },dispatch)

// const mapDispatchToProps = dispatch => ({
//   increment() {
//     dispatch({
//       type: 'increment'
//     })
//   },
//   decrement() {
//     dispatch({
//       type: 'decrement'
//     })
//   }
// })
const mapDispatchToProps = dispatch => bindActionCreators(countActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Count)
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as countActions from '../store/action/action.count';


function Count({ increment, decrement, count,increment_async}) {

    return (
        <div>
            <button onClick={increment_async}>+</button>
            <span>{count}</span>
            <button onClick={()=>decrement(5)}>-</button>
        </div>
    )
    
}
const mapStateToProps = state =>({
    count: state.counter.count
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
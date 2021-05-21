import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modalActions from '../store/action/action.modal';


function Modal({ showModal, hideModal, isShow, showModal_async }) {
    const styles ={
        width:200,
        height:200,
        position:'absolute',
        top:'50%',
        left:'50%',
        marginLeft:'-100',
        marginTop:'-100',
        backgroundColor:'skyblue',
        display: isShow ? 'block' : 'none'
    }

    return (
        <div>
            <button onClick={showModal_async}>显示</button>
            <button onClick={hideModal}>隐藏</button>
            <div style={styles}>{isShow}</div>
        </div>
    )

}
const mapStateToProps = state => ({
    isShow: state.modal.isShow
})

const mapDispatchToProps = dispatch => bindActionCreators(modalActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Modal) 
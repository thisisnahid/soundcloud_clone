import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import React from 'react';

const mapStateToProps = (state) => ({
    errors: state.errors,
    formType: 'login'
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
            Signup
         </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { pageLoaded } from '../actions/motorcycleActions';

const MotorcyclePage = (props) => {

  useEffect(() => {
    props.pageLoaded(true)
  }, [])

  return(
    <div>
      <h1>Hello from Motorcycle Page</h1>
      <h3>{`Page loaded: ${props.loaded}`}</h3>
    </div>
  )
}

const mapStateToProps = (state) => ({
  loaded: state.motorcycleReducer.pageLoaded
}) 

export default connect(mapStateToProps, { pageLoaded })(MotorcyclePage);

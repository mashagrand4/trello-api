import React  from 'react';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/search';
import Button from "./common/Button";

const ProductList = () => {
  return (
    <>
      <div>
        <h1>SHOP</h1>
        <h4>Description</h4>
      </div>
      <nav>
        <Button name='Orders' />
      </nav>
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state.search,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

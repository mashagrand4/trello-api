import React  from 'react';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import * as actions from '../actions/search';
import ProductItem from "../components/ProductItem";

const ProductList = props => {
  const {list} = props;
  const items = list.map(item => {
      return <ProductItem key={item.id} product={item} />;
  });

  return (
    <>
      {items}
    </>
  );
};

ProductList.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
    title: PropTypes.string,
    description: PropTypes.string,
    publishedAt: PropTypes.string,
    map: PropTypes.func,
  }),
};

ProductList.defaultProps = {
  list: [],
};

const mapStateToProps = state => {
  return {
    ...state.search,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

import React  from 'react';
import styled from 'styled-components';
import InfiniteLoader from 'react-infinite-loader';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {VIDEO, CHANNEL, PLAYLIST} from '../constants/resultTypes';
import * as actions from '../actions/search';
import VideoItem from '../components/VideoItem';
import ChannelItem from '../components/ChannelItem';
import PlaylistItem from "../components/PlaylistItem";

const List = props => {
  const { fetchMoreItems, nextPageToken, value, list } = props;

  const handleVisit = () => {
    fetchMoreItems(value, nextPageToken);
  };

  const items = list.map(item => {
    switch (item.kind) {
      case VIDEO:
        return <VideoItem key={item.id} video={item} />;
      case CHANNEL:
        return <ChannelItem key={item.id} channel={item} />;
      case PLAYLIST:
        return <PlaylistItem key={item.id} playlist={item} />;
      default:
        return null;
    }
  });

  return (
    <>
      <SearchResults>{items}</SearchResults>
      {list.length ? (
        <InfiniteLoader
          loaderStyle={{
            borderLeftColor: '#dc2626',
            borderRightColor: '#dc2626',
          }}
          onVisited={handleVisit}
        />
      ) : (
        <EmptySearchList>No videos</EmptySearchList>
      )}
    </>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
  nextPageToken: PropTypes.string,
  fetchMoreItems: PropTypes.func,
};

List.defaultProps = {
  list: [],
  value: '',
  nextPageToken:'',
  fetchMoreItems: null,
};

const mapStateToProps = state => {
  return {
    ...state.search,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);

const SearchResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;

const EmptySearchList = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  color: #9c9c9c;
`;

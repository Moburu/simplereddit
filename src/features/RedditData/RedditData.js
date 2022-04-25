import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../components/Card/Card';
import './RedditData.css'
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, selectIsLoading } from './redditDataSlice';
import { Loader } from 'semantic-ui-react';


const RedditData = props => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className='RedditData'>
        {isLoading === true ? <Loader active inline='centered' /> :
          posts.map((post) => (
            <Card
                title={post['data'].title}
                thumbnail={post['data'].thumbnail === 'self' || post['data'].thumbnail === 'default' || post['data'].thumbnail === 'image' || post['data'].thumbnail === 'spoiler' ? 'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png' : post['data'].thumbnail}
                score={post['data'].score}
                author={post['data'].author}
                created={post['data'].created}
                num_comments={post['data'].num_comments}
                url={post['data'].url}
            />
          ))
        }
    </div>
  )
}

RedditData.propTypes = {}

export default RedditData

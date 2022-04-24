import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../components/Card/Card';
import './RedditData.css'
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts } from './redditDataSlice';



const RedditData = props => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  return (
    <div className='RedditData'>
        {posts.map((post) => (
            <Card
                title={post['data'].title}
                thumbnail={post['data'].thumbnail === 'self' ? 'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png' : post['data'].thumbnail}
                score={post['data'].score}
                author={post['data'].author}
                created={post['data'].created}
                num_comments={post['data'].num_comments}
                url={post['data'].url}
            />
        ))}
    </div>
  )
}

RedditData.propTypes = {}

export default RedditData

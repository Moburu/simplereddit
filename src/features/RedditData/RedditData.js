import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../components/Card/Card';
import './RedditData.css'
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts } from './redditDataSlice';



const RedditData = props => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  const handleClick = (e) => {
      e.preventDefault();
      console.log(posts);
  }

  return (
    <div className='RedditData'>
        {posts.map((post) => (
            <Card
                title={post.title}
                thubmnail={post.thubmnail}
                score={post.score}
                author={post.author}
                created={post.created}
                num_comments={post.num_comments}
                url={post.url}
            />
        ))}
    </div>
  )


}

RedditData.propTypes = {}

export default RedditData

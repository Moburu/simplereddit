import './Card.css';
import React from 'react'
import PropTypes from 'prop-types'
import fromNow from 'from-now';
import CardPlaceholder from '../../semantic-ui/CardPlaceholder';

const Card = props => {
  return (

    <div className='Card'>
        <CardPlaceholder />
        {/* <h2 className='post-title'>{props.title}</h2>
        <img className='post-thumbnail' src={props.thumbnail} alt={'Reddit thumbnail'} />
        <div className='post-info'>
          <span className='attribution'>Posted by {props.author}</span>
          <span className='timestamp'>{fromNow(props.created*1000)+' ago'}</span>
          <span className='comments'>{props.num_comments+' comments'}</span>
        </div> */}
    </div>
  )
}

Card.propTypes = {}

export default Card

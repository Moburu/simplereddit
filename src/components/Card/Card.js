import './Card.css';
import React from 'react'
import PropTypes from 'prop-types'

const Card = props => {
  return (
    <div className='Card'>
        <h2>{props.title}</h2>
        <img src={props.thumbnail} alt={'Reddit thumbnail'} />
        <div className='post-info'>
          <span className='attribution'>Posted by {props.author}</span>
          <span className='timestamp'>{props.created}</span>
          <span className='comments'>{props.num_comments}</span>
        </div>
    </div>
  )
}

Card.propTypes = {}

export default Card

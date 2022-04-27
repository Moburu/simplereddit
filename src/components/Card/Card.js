import './Card.css';
import React from 'react'
import fromNow from 'from-now';
import { Icon } from 'semantic-ui-react';

const Card = props => {
  const user_url = `https://reddit.com/u/${props.author}`;
  const post_url = `https://reddit.com${props.permalink}`;
  return (
        <div className='Card'>
          <div className='card-sidebar'>
            <Icon name='arrow up' />
            <span>{props.score}</span>
            <Icon name='arrow down'/>
          </div>
          <div className='card-body'>
            <h2 className='post-title'><a target='blank' rel='noreferrer' href={post_url}>{props.title}</a></h2>
            <img className='post-thumbnail' src={props.thumbnail} alt={'Reddit thumbnail'} />
            <div className='post-info'>
              <span className='attribution'><a target='_blank' rel='noreferrer' href={user_url}>u/{props.author}</a></span>
              <span className='timestamp'>{fromNow(props.created*1000)+' ago'}</span>
              <span className='comments'>{props.num_comments+' comments'}</span>
            </div>
          </div>
        </div>
  )
}

export default Card

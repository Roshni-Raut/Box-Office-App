import React from 'react'
import {Link} from 'react-router-dom'
import { Star } from '../styled'
import { StyledShowCard } from './ShowCardStyled'

const ShowCard = ({id,name,image,summary,onStarClick,starred}) => {
    const summaryAsText=summary?`${summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g,"")}...`:'No Description'
    return (
        <StyledShowCard>
            <div className="img-wrapper">
                <img src={image} alt="show"/>
            </div>
            <h1>{name}</h1>
            <p>{summaryAsText}</p>
            <div className="btns">
                <Link to={`/show/${id}`}>Read more</Link>
                <button  type="button" onClick={onStarClick}>
                    <Star active={starred}/>
                </button>
            </div>
        </StyledShowCard>
    )
}

export default ShowCard

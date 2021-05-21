import React from 'react'
import IMG_PLACEHOLDER from '../../image/not-found.png'
import { Star } from '../styled';
import { Headline, MainDataWrapper, TagList } from './ShowMainData.styled';

const ShowMainData = ({image,name,rating,summary,tags}) => {
    return (
        <MainDataWrapper>
            <img src={image?image.original:IMG_PLACEHOLDER} alt="show-cover"/>
            <div className="text-side">
                <Headline>
                    <h1>{name}</h1>
                </Headline>    
                <Star active/>
                <span>{rating.average||'N/A'}</span>
            </div>
            <div>
                <div className="summary" dangerouslySetInnerHTML={{__html:summary}}/>
                <div>
                    Tags:{' '}
                    <TagList>
                        {tags.map((tag,i) => (
                            <span key={i}>{tag}</span>
                        ))}
                    </TagList>
                </div>
            </div>
        </MainDataWrapper>
    )
}

export default ShowMainData

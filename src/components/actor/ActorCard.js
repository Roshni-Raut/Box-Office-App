import React from 'react'

const ActorCard = ({name,image,gender,country,birthday,deathday}) => {
    return (
        <div>
            <div>
                <img src={image} alt="actor"/>
            </div>
            <h1>{name}{gender?`(${gender})`:null}</h1>
            <p>{country?`Comes from (${country})`:'no country known'}</p>
            {birthday?<p>Born:{birthday}</p>:null}
            <p>{deathday?`Died :${deathday}`:'Alive'}</p>
        </div>
    )
}

export default ActorCard

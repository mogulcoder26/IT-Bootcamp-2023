import React from 'react'

const TeamCard = ({name,team,imgsrc}) => {
  return (
    <div className='main__card'>
    <div className='curve'>  
        <img className='img' src={imgsrc} alt="" />
    </div>
    <div className='card'>
            <div className='content'>
              <center>
                <h1>{name}</h1>
                <h1>{team}</h1>
                </center>
            </div>
    </div>
    </div>
  )
}

export default TeamCard

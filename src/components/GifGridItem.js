import React from 'react'

export const GifGridItem = ({title,url}) => {
    
    
    
    return (
        <div>
            <img className ='card animate__animated animate__bounce animate__delay-2s 'src={url} alt ={title}/>
            <p>{title}</p> 
        </div>
    )
}

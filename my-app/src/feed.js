import React from 'react';


const Feed = (props) =>{

    return(
        
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={props.download_url} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.author}</h5>
                        <p class="card-text">{props.width}</p>
                        <p class="card-text">{props.height}</p>
                    
                    </div>
                    </div>
                </div>
            </div>
    
    )
}

export default Feed;
/*
const Feed = ({author,download_url}) =>{
    return(
        <div className='div-feed'>
            <div style={{padding:'10px 5px',fontWeight:'bold'}}>{author}</div>
            <div style={{width:'100%',height:'auto'}}>
                <img src={download_url} alt=''/>
            </div>
        </div>
    )
}
*/
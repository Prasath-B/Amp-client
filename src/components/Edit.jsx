import React,{useState} from 'react'
import axios from 'axios'
import './Post/Post.css'
import {useHistory,useLocation} from 'react-router-dom'

const Edit = () => {

    let location = useLocation();


    const id =location.state._id;
    const [title, settitle] = useState(location.state.title);
    const [content, setcontent] = useState(location.state.content);
    const history = useHistory()
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post('https://hidden-lowlands-40120.herokuapp.com/update',{
            id,
            title,
            content
        }).then((res)=>{
            console.log(res.data)
            history.push('/')
        })
        .catch((err)=>console.log(err))
    }



    return (
        <div className='card'>
            <form className='card-body'>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input 
                type="text" 
                className="form-control input-lg" 
                name='title'
                placeholder="title of the blog"
                value={title}
                onChange={(e)=>settitle(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea 
                className="form-control"
                name='content'
                rows="3"
                placeholder='content of the blog'
                value={content}
                onChange={(e)=>setcontent(e.target.value)}   
                />
            </div>
                <button type='submit' className='btn btn-primary btn-lg' onClick={handleSubmit}>Update</button>
            </form>
                
        </div>
    )
}

export default Edit

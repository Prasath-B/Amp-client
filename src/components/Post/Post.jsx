import React,{useState} from 'react'
import axios from 'axios'
import  './Post.css';
import {useHistory} from 'react-router-dom'

const Post = () => {

    const [title, settitle] = useState();
    const [content, setcontent] = useState();
    const history = useHistory()

    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post('https://hidden-lowlands-40120.herokuapp.com/post',{
            title,
            content
        })
        .then((res)=>{
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
                onChange={(e)=>setcontent(e.target.value)}   
                />
            </div>
                <button type='submit' className='btn btn-primary btn-lg' onClick={handleSubmit}>Submit</button>
            </form>
                
        
        </div>
    )
}

export default Post


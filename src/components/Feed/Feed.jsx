import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {Link,useHistory} from "react-router-dom"
import './Feed.css'

var limit =5;
const Feed = () => {
    
    const [posts, setposts] = useState([])
    const [searchtext, setsearchtext] = useState('')
    // const [limit, setlimit] = useState(5)
    const history = useHistory()

    const getPosts = (URI)=>{
        axios.post(URI,{limit})
        .then((res)=>{
            setposts(res.data)
        })
        .catch((error) =>console.log(error))
    }

     const deletePost =(title)=>{
        axios.post('https://hidden-lowlands-40120.herokuapp.com/delete',{
            title
        }).then((res)=>{
            getPosts('https://hidden-lowlands-40120.herokuapp.com/posts')
        })
        .catch((err)=>console.log(err))
    }

    const search = ()=>{
        axios.post('https://hidden-lowlands-40120.herokuapp.com/search',{
            searchtext
        }).then((res)=>{
            setposts(res.data)
        })
        .catch((err)=>console.log(err))
    }

    useEffect(() => {
        getPosts('https://hidden-lowlands-40120.herokuapp.com/posts')
    },[])

    // useEffect(()=>{
    //     getPosts('https://hidden-lowlands-40120.herokuapp.com/posts')
    // },[deletePost])


   
    
 

    const editPost = (post)=>{
        history.push({pathname:'/edit',state:post})
    }

    const morepost =()=>{
        limit =limit+5
        console.log(limit)
        getPosts('https://hidden-lowlands-40120.herokuapp.com/posts')
    }


    return (<>
        <div className='feed-top'>
           <input type="text" 
           name="search" 
           className='search'
           placeholder='Search for blogs' 
           onChange={(e)=>setsearchtext(e.target.value)}
           />
           <button onClick={search} className='btn btn-success btn-lg'>Search</button> 
          <Link className='btn btn-lg btn-primary post-button' to='/post'>Post a blog</Link>
        </div>   
        <div  className='posts'>
            {posts.map((post)=>{
               
                return <div key={post._id} className='post'>
                    <h1 className='post-title'>{post.title}</h1>
                    <p className='date'>{post.date}</p>
                    <p className='post-content'>{post.content}</p>
                    <button  className='btn  btn-dark edit-button' onClick={()=>editPost(post)} >Edit</button>
                    <button className='btn  btn-danger' onClick={()=> deletePost(post.title)}>Delete</button>
                </div>
         })}

         <button onClick={morepost} className='more'>Load more posts</button>
        </div>
     </>  )
}

export default Feed

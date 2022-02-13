import axios from 'axios';
import React, { useEffect, useReducer } from 'react'

const reducer = (state, action)=>{
    switch(action.type){
        case 'POSTS_REQUEST':
            return {...state, loading:true};
        case 'POSTS_SUCCESS':
            return {...state, loading:false, posts:action.payload, error:''};
        case 'POSTS_FAIL':
            return {...state, loading:false, error:action.payload};
        default: return state        
    }
}

function HomePage() {

    const [state, dispatch] = useReducer(reducer, {loading:false, posts:[], error:''});
    const {loading, posts, error} = state;
    const loadPosts = async () => {
        dispatch({type:'POSTS_REQUEST'});
        try{
           const { data } = await axios.get("http://jsonplaceholder.typicode.com/posts")
           dispatch({type:'POSTS_SUCCESS', payload: data}) 

        }catch (err){
            dispatch({type:'POSTS_FAIL', payload: err.message})
        }
    }

    useEffect(()=>{
        loadPosts();
        console.log('useEffect')
    }, [])

  return (
    <div>
       {
       loading ? (<div>Loadind...</div>): error ? (<div>Error : {error}</div>)
       : posts.length === 0 ? (<div>No Posts</div>)
       : posts ? <ul>
           {
               posts.map((post)=>{
                   <li key={post.id}>
                       <h2>{post.title}</h2>
                       <p>{post.body}</p>
                   </li>               })
           }
       </ul>
    }
        
    </div>
  )
}

export default HomePage
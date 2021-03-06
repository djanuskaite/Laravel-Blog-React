import React, { useEffect, useState } from 'react'
import PostCard from "./PostCard";
import Post from "./Post";
import Pagination from "./Pagination";



const Main = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedPost, setSelectedPost] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const url = `http://blog.test/api/blog`;

    const getPosts = async () => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            console.log(data.data)
           const allPosts = data.data;
            if(allPosts){
                setPosts(allPosts);
            }else{
                setPosts([]);
                alert('No posts found!')
            }
            setLoading(false);
        } catch (error) {
            console.log('Something went wrong!');
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

    const urlById = `http://blog.test/api/post/`
    const openSelectedPost = async (id) => {
        const response = await fetch(urlById + id);
        const data = await response.json();
        console.log(data.data);
        setPosts([]);
        setSelectedPost(data.data);
    }
    useEffect(() => {
        openSelectedPost();
    }, []);

    const closePost = () => {
        setSelectedPost({});
        getPosts();
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPost);

    const paginate = (e, pageNumber) => {
        e.preventDefault();
        window.scroll(0,0);
        setCurrentPage(pageNumber);
    }

     return (
        <div>
            
            <PostCard posts={currentPosts} openSelected={openSelectedPost} loading={loading}/>
            <Pagination postsPerPage={postsPerPage} paginate={paginate} totalPosts={posts.length} />
            {(typeof  selectedPost.title != "undefined")?
                <Post post={selectedPost} closePost={closePost}/> :false
            }
            <hr/>
            
        </div>
    );
};

export default Main;
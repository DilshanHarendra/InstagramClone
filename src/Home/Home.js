import React, { useEffect, useState} from "react";
import Stories from "../Stories/Stories";
import Post from "../Post/Post";
import {auth, database} from "../firebasejs";



function Home(){

    const [posts,setPost]=useState([]);

    auth.onAuthStateChanged((user)=>{
            if (!user){
                window.location.replace('/signin');
            }
    });

    useEffect(()=>{

        var myPosts=[];

        async function getData(){
           await database.ref("post").on('value',async (snapshot)=>{
                myPosts=[]
               await snapshot.forEach(post=>{
                    let data={
                        data:post.val(),
                        id:post.key.split("-")[1]
                    }

                    myPosts=[data,...myPosts]

                })
               setPost(myPosts);
            });
        }

        getData();



    },[]);


        return <div className="home">
            <Stories/>
            <div className="container">
                {posts.map(post=>(
                    <Post key={post.id} data={post} pid={post.id} />
                    ))}

            </div>

        </div>;

}export default Home;
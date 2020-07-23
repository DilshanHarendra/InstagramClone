import React, {useEffect, useState} from 'react';
import {database} from "../firebasejs";

function CommentsDisplay(props) {

    const[comments,setcomments]= useState([]);

    useEffect(()=>{

        var arr=[];
        async function getData(){
           await database.ref("post/-"+props.pid+"/comments").on('value',async (snapshot)=>{
               arr=[];
                await snapshot.forEach(c=>{
                    var obj={
                        comments:c.val(),
                        username:c.key
                    }
                    arr=([...arr,obj])
                })

               setcomments(arr);
            })
        }
        getData();



    },[props.pid]);

        return (
            <div className="ml-3">

                {comments.map(comment=>(
                    <div key={comment.username} style={{color:'gray'}}><b style={{color:'black'}}>{comment.username+" "}</b> {comment.comments}</div>
                ))}
            </div>
        );

}

export default CommentsDisplay;
import React, {useEffect, useState} from "react";
import {storage} from "../firebasejs";
function PostImages(props) {
    const [pictures,setpictures]=useState("");

    useEffect(()=>{


            storage.ref(props.data).getDownloadURL().then(url=>{
                setpictures(url)
            })


    },[props.data]);


    return<>

        <img  className="postImage" src={pictures} alt={pictures} />


    </>

}
export default PostImages;
import React, { useEffect, useState } from 'react'
import '../css/card.css'
import img from '../images/img.png'
import tag from '../images/tag.png'

function Card(props) {
    let arr = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique numquam et placeat totam incidunt voluptatum blanditiis eveniet cum, inventore eius ea quis pariatur fugiat repellat doloremque? Modi fugiat ex tempore corporis deserunt, minima quam eius nam dolor ad ut repudiandae fuga odio eveniet neque ea natus aspernatur quos facere necessitatibus a aliquid atque magnam reprehenderit. Quos ipsa laudantium commodi quam, ipsam reiciendis accusantium reprehenderit quas unde eveniet impedit, alias harum culpa voluptates! Culpa ex sunt rem repudiandae voluptas ullam repellendus velit saepe vero, quaerat, expedita esse eum beatae cum voluptates natus placeat totam dolore ea magni cumque est distinctio dolor."]
    let brr = [];
    const [msg, setMsg] = useState("");
    const [tags, setTags] = useState([]);
    useEffect(() => {
        if (arr[0].length > 90) {
            setMsg(arr[0].slice(0, 90) + "...");
            console.log(msg);
        }
        let tagsarr = props?.imgdata?.imgdata?.tag.split(',');
        tagsarr.pop();
        console.log("props",tagsarr);
        setTags(tagsarr);
    },[])
    return (
        <div className="card">
            {/* <img src={img} alt="photo" className="sketch" /> */}
            <div className="img-div"><img src={`http://localhost:3000/${props?.imgdata?.img?.path}`} alt="photu" id="photu"/></div>
            <div className="img-name text-center">{props?.imgdata?.imgdata?.imgname}</div>
            <div className="tag text-center"><img src={tag} alt="tag" height="25" />
                
                {
                    tags.map((data,index)=>{
                        return <><p className="tag-name" id={index}>{data}</p></>
                    })
                }
            </div>
            <hr />
            <div className="sm-desc"><u>{props?.imgdata?.imgdata?.smdesc}</u></div>
            <div className="desc">{msg}</div>
            <div className="btn-div">
                <button className="read-more">Read More</button>
            </div>
        </div>
    )
}

export default Card

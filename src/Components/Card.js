import React, { useEffect, useState } from 'react'
import '../css/card.css'
import img from '../images/img.png'
import tag from '../images/tag.png'
import $ from 'jquery'
import Loader from './Loader'

function Card(props) {
    let arr = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique numquam et placeat totam incidunt voluptatum blanditiis eveniet cum, inventore eius ea quis pariatur fugiat repellat doloremque? Modi fugiat ex tempore corporis deserunt, minima quam eius nam dolor ad ut repudiandae fuga odio eveniet neque ea natus aspernatur quos facere necessitatibus a aliquid atque magnam reprehenderit. Quos ipsa laudantium commodi quam, ipsam reiciendis accusantium reprehenderit quas unde eveniet impedit, alias harum culpa voluptates! Culpa ex sunt rem repudiandae voluptas ullam repellendus velit saepe vero, quaerat, expedita esse eum beatae cum voluptates natus placeat totam dolore ea magni cumque est distinctio dolor."]
    const [msg, setMsg] = useState("");
    const [tags, setTags] = useState([]);
    const [disp, setDisp] = useState(false);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        if (arr[0].length > 90) {
            setMsg(arr[0].slice(0, 90) + "...");
            console.log(msg);
        }
        let tagsarr = props?.imgdata?.imgdata?.tag.split(',');
        tagsarr.pop();
        console.log("props", disp);
        setTags(tagsarr);
        setLoader(false);
    }, [])

    // const zoomin = (e) => {
    //     console.log(e.target.parentElement.parentElement.style);
    //     e.target.parentElement.parentElement.style="transform:scale(1.5);background-color:red;z-index:1";
    //     setDisp(true);
    // }

    // const zoomout = (e) => {
    //     e.target.parentElement.style="";
    //     setDisp(false);
    // }

    return (
        <div className="card">
            {/* <button className="close" style={disp?{display:"block"}:{display:"none"}} onClick={zoomout}>close</button> */}
            {/* <img src={img} alt="photo" className="sketch" /> */}
            <div className={`img-div ${!loader?"":"d-flex justify-content-center align-items-center"}`} style={{backgroundColor:`${loader?"black":""}`}} >{loader?<Loader/>:<img src={`http://localhost:8000//${props?.imgdata?.img?.path}`} alt="photu" id="photu" />}</div>
            <div className="details">
            <div className="img-name text-center">{props?.imgdata?.imgdata?.imgname}</div>
            <div className="tag text-center"><img src={tag} alt="tag" height="25" />

                {
                    tags.map((data, index) => {
                        return <p className="tag-name" id={index}>{data}</p>
                    })
                }
            </div>
            <hr />
            <div className="sm-desc"><u>{props?.imgdata?.imgdata?.smdesc}</u></div>
            <div className="desc">{msg}</div>
            <div className="btn-div">
                <button className="read-more">Read More</button>
            </div>
            <div className="date text-end">{props?.imgdata?.time?.slice(0, 10).split('-').reverse().join('-')}</div>
            </div>
        </div>
    )
}

export default Card

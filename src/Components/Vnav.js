import React from 'react'
import admin from '../images/admin.png'
import '../css/vnav.css'
import insta from '../images/insta.png'
import fb from '../images/facebook.png'
import twitter from '../images/twitter.png'

function Vnav(props) {
    return (
        <>
            <div className="vnav">
                <div className="hello">
                    <div className="greetings">
                        <span>Hello There</span>
                    </div>
                </div>
                <br />
                <div className="admin-img">
                    <img src={admin} alt="admin" />
                </div>
                <br />
                <div className="friends">
                    <div className="greetings">
                        <span>Lets Be Friends</span>
                    </div>
                </div>
                <br />
                <div className='social'>
                    <span className='text-center'>Follow on our social communities and receive NEW posts</span>
                    <br />
                    <div className="promo text-center">
                        <a href="" target="_blank"><img src={insta} alt="instagram" height="30px" /></a>
                        <a href="" target="_blank"><img src={fb} alt="facebook" height="30px" /></a>
                        <a href="" target="_blank"><img src={twitter} alt="twitter" height="30px" /></a>
                    </div>
                    <br />
                </div>
                <div className="latest-posts">
                    <div className="lposts">
                        <div className="greetings">
                            <span>Latest Posts</span>
                        </div>
                    </div>
                    <table class="tbl">
                    {
                        props.pdata.map((data,index)=>{
                            return <>
                                <tr className="posts" id={index}>
                                    <td className="txt text-center">{data.imgdata.imgname}</td>
                                    <td className="lp-img"><img src={`http://localhost:8000/${data.img.path}`} alt="lphotu" height="130"/></td>
                                </tr>
                                <hr />
                            </>
                        }).reverse()
                    }
                    </table>
                </div>
                <div className="categories">
                    <div className="greetings">
                        <span>Categories</span>
                    </div>
                    {/* drop down list code */}
                </div>
                <div className="tags">
                    <div className="greetings">
                        <span>Popular Tags</span>
                    </div>
                    {/* drop down list code */}
                </div>


            </div>
        </>
    )
}

export default Vnav

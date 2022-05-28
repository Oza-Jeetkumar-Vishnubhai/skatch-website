import React, { useEffect, useState } from 'react'
import '../css/home.css'
import Card from './Card'
import Vnav from './Vnav'

function Home() {

  const [imgdata, setImgdata] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchphotos = async () => {
    const data = await fetch('/getphoto');
    const parseData = await data.json();
    console.log("parsedData", parseData);
    setLoader(false);
    setImgdata(parseData);
  }

  useEffect(() => {
    fetchphotos();
  }, [])
  return !loader && (
    <>
      <div className="name text-center">thesketcher</div>
      <div className="sub-name text-center">Only thing I know how to use is a pencil</div>
      <div className="container">
        <div className="d-flex flex-md-wrap">
          <div className="left-par" style={{width:"75%"}}>
            <div className="d-flex flex-wrap justify-content-center">
              {
                imgdata.map((data, index) => {
                  console.log(index);
                  // return <><div className="col-4" id={index}><Card imgdata={data}/></div></>
                  return <><div id={index}><Card imgdata={data} /></div></>
                }).reverse()
              }
            </div>
            
          </div>
          {/* <div className="col-3"> */}
          <div className='right-par' style={{width:"25%"}}>
            {console.log(imgdata.slice(imgdata.length-3))}
            <Vnav pdata={imgdata.length<=3?imgdata:imgdata.slice(imgdata.length-3,imgdata.length)}/>
          </div>
        </div>
        <div className="navigation d-flex justify-content-evenly">
              <div className="prev"><button className="prev">Previous</button></div>
              <div className="next"><button className="next">Next</button></div>
            </div>
      </div>
    </>
  )
}

export default Home

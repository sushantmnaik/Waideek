// import { link } from "fs/promises";
// import { useRouter } from "next/navigation"
import data from "../data/follow.json";
import Link from "next/link";
import "../app/extra.css"

export default function About() { 
  // var link = window.location.pathname;
  
  // fetch(`./api/follow?app=Facebook`).then(res => res.json()).then(data => {
  //   return <><div>about</div><br/><div>{data}</div></>
  // })

  var dataset = Object.values(data);
  
  return (
    <>
    <body className="body">
      
      <h2>About</h2>
      <h3>Waideek is a platform that provides users with a comprehensive overview of various applications and their features. Our mission is to help users make informed decisions about which apps to use by providing detailed information and insights.</h3>
      <h4>Author : Sushant Naik</h4>
      <span>Follow me on :</span>
      <hr/>
      <div className=" p-5 mx-auto flex flex-wrap -m-4">

      {dataset.map((app, index) => {
        
        return (
          <div className="followbox bg-blue-500 bg-opacity-50 rounded m-1 shadow-2xl lg:w-1/4 md:w-1/2 p-1 w-full" key={index}>
            <Link href={app.link} className="link rounded ">
             <span className="text-blue-700 title-font text-lg font-medium">
                {app.title}
                </span>
                <br />
                <span>
                 {app.desc}

             </span>
             
            </Link>
            <br/>
          </div>
        );
      })}
      </div>
    </body>
    </>
  );
}
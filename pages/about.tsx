// import { link } from "fs/promises";
// import { useRouter } from "next/navigation"
import data from "../data/follow.json";
import Link from "next/link";
import "../app/extra.css"




import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown.css';

interface AboutProps {
  markdownContent: string;
}


export default function About({ markdownContent }: AboutProps) { 
  // var link = window.location.pathname;
  
  // fetch(`./api/follow?app=Facebook`).then(res => res.json()).then(data => {
  //   return <><div>about</div><br/><div>{data}</div></>
  // })

  var dataset = Object.values(data);
  
  
  return (
    <>
    <body className="body">
      
      <h2>About</h2>
      <h3>Waideek is an AI powered chat responser for all your queries and problems. It is an Gemini Powered website where you can chat with ai, fearlessly without any tension of login or signup and all at free of cost.</h3>
      <h4>Author : Sushant Naik</h4>

      <hr/>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="markdown-body" style={{ background: 'transparent' }}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdownContent}
        </ReactMarkdown>
      </article>
      </main>

      <hr/>
      <span>Follow me on :</span>
      <hr/>
      <div className=" p-5 mx-auto flex flex-wrap -m-4">

      {dataset.map((app, index) => {
        
        return (
          <div className="followbox bg-blue-500 bg-opacity-50 rounded m-2 shadow-2xl lg:w-1/4 md:w-1/2 p-1 w-full" key={index}>
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



export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'README.md');
  const markdownContent = fs.readFileSync(filePath, 'utf8');

  return {
    props: {
      markdownContent,
    },
  };
}
// import '../styles/globals.css'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
    return <>
     <Nav/>
     <div className='bg-blue-400'>
        
     <Component {...pageProps} />
     </div>
    </>
}

export default MyApp
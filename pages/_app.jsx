// import '../styles/globals.css'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
    return <>
     <Nav/>
     <div className='bg-grey-900'>
        
     <Component {...pageProps} />
     </div>
    </>
}

export default MyApp
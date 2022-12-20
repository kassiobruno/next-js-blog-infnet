import { AppProps } from "next/app";
import '../styles/global.scss';
import AuthProvider from "../contexts/auth";
import Header from "../components/Header";


function MyApp({ Component, pageProps }: AppProps) {
 
    return (
      <>
        <AuthProvider>
          <Header />
          <Component {...pageProps} />  
        </AuthProvider>        
      </>    
    )
  }

  

export default MyApp
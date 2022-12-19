import { AppProps } from "next/app";
import '../styles/global.scss';
import AuthProvider from "../contexts/auth";
import Logo from "../components/Logo";
import ActivityIndicator from 'react-activity-indicator';
import Header from "../components/Header";
import { AuthContext } from "../contexts/auth";
import { useContext } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const {signed, loading}:any = useContext(AuthContext);

  if (loading) {
    return (
      <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator number={3} duration={200} activeColor="#0070bf" borderWidth={2} borderRadius="50%" diameter={25} />
      </div>
    );
  }
  
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
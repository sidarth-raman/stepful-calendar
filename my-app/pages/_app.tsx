// pages/_app.tsx
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
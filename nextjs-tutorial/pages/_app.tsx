import { AppProps } from 'next/app';
import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Footer from '../src/component/Footer';
import Top from '../src/component/Top';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default App;

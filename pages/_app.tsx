import type {AppProps} from 'next/app';
import {cache} from '@emotion/css';
import {CacheProvider} from '@emotion/react';
import GlobalStyles from '@/styles/GlobalStyles';
import Layout from '@/components/common/Layout';

const App = ({Component, pageProps}: AppProps) => (
  <CacheProvider value={cache}>
    <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </CacheProvider>
);

export default App;

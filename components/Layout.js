import Nav from './Nav';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900'>
      <Head>
        <title>Eisleyy's Playground</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className='container mx-auto min-h-screen max-w-md'>{children}</main>
    </div>
  );
}

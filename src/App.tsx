import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Button, Container } from 'react-bootstrap';

function App() {
  return (
    <div className='flex flex-col min-h-[100vh] text-gray-800'>
      <Header />
      <main className='my-16 text-center flex-1 max-w-[800px] mx-auto'>
        <Container>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6'>
            A website-based
            <br />
            multi-chain crypto wallet
            <br />
            for{' '}
            <a href='https://polkadot.network' target='_blank' className='text-polkadot'>
              Polkadot
            </a>{' '}
            &{' '}
            <a href='https://kusama.network' target='_blank' className='text-polkadot'>
              Kusama
            </a>{' '}
            ecosystem
          </h1>
          <p className='text-2xl'>Begin the web3 journey right from your favorite browsers</p>
          <div>
            <Button variant='primary' size='lg' href='https://app.coongwallet.io/new-wallet' className='m-2'>
              Create New Wallet
            </Button>
            <Button disabled={true} variant='outline-primary' size='lg' className='m-2'>
              <span>Restore Existing Wallet</span>
              <span className='whitespace-nowrap text-xs'> (Coming soon)</span>
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;

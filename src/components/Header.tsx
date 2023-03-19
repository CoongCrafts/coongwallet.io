import { FC } from 'react';
import { Props } from '../types';
import CoongWalletLogo from '../assets/images/coong-text-logo.svg';
import { Button, Container } from 'react-bootstrap';

const Header: FC<Props> = ({ className = '' }) => {
  return (
    <header className={`${className} border-b border-black/10`}>
      <Container>
        <div className='flex justify-between items-center h-[64px] max-w-[800px] mx-auto'>
          <a href='/'>
            <img src={CoongWalletLogo} alt='Coong Wallet Logo' className='h-[34px]' />
          </a>
          <div>
            <Button variant='primary' href='https://app.coongwallet.io'>
              Open Wallet
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

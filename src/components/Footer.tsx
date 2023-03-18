import { FC } from 'react';
import { Props } from '../types';
import { Container } from 'react-bootstrap';

const Footer: FC<Props> = ({ className = '' }) => {
  return (
    <footer className={`${className} border-t border-black/10`}>
      <Container>
        <div className='flex flex-col sm:flex-row justify-between items-center py-4 gap-4'>
          <span>Copyright &copy; 2023 - Coong Wallet</span>
          <div>
            <a href='https://twitter.com/CoongWallet'>Twitter</a> - <a href='https://github.com/CoongCrafts'>Github</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

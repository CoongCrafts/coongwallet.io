import { FC } from 'react';
import { Props } from '../types';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer: FC<Props> = ({ className = '' }) => {
  return (
    <footer className={`${className} border-t border-black/10`}>
      <Container>
        <div className='flex flex-col sm:flex-row justify-between items-center py-4 gap-4'>
          <span>Copyright &copy; 2023 Coong Wallet</span>
          <div className='flex gap-6'>
            <a href='https://twitter.com/CoongWallet' target='_blank'>
              <FontAwesomeIcon icon={faTwitter} size='2x' className='text-gray-600 hover:text-gray-800' />
            </a>
            <a href='https://github.com/CoongCrafts/coong-wallet' target='_blank'>
              <FontAwesomeIcon icon={faGithub} size='2x' className='text-gray-600 hover:text-gray-800' />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

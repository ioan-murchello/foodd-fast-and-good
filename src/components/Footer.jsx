import styled from 'styled-components';
import paper from '../assets/icons/veg.svg'


const Footer = () => {
  return (
    <Wrapper>
      <div className='footer'>
        <div className='container'>
          <div className='social'>
            <div className='subtitle'>We are in social networks:</div>
            <a href='#' className='link'>
              instagram
            </a>
            <a href='#' className='link'>
              facebook
            </a>
          </div>
          <div className='pepper'>
            <img src={paper} alt='pepper' />
          </div>
          <div className='call'>
            <div className='subtitle'>Or call us</div>
            <a href='#' className='link'>
              +333333233
            </a>
            <a href='#' className='link'>
              +333333222
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styled.footer`
  .footer {
    min-height: 180px;
    background-color: #000;
    padding: 45px 0 50px 0;
    color: #fff;
    .container {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      @media(max-width: 600px){
        flex-direction: column;
        align-items: flex-start;
        row-gap: 20px;
      }
    }
    .subtitle {
      font-size: 20px;
    }
    .link {
      display: block;
      margin-top: 15px;
      font-size: 16px;
      color: #fff;
    }
    .call {
      text-align: right;
    }
  }
`;

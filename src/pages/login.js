import React from 'react';
import styled from 'react-emotion';

import Wrapper from '../components/Wrapper';


const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`


let LoginBox = ({ className }) => (
  <div className={className + ' col-10'}>
    <div className="row">
      <LogoOnMobile/>
      <div className="col-12 col-sm-8 left box">
        <div className="col-12 col-sm-10">
          <div className="login-form row">
            <div className="col-12">
              <input type="text" className="neon-input-default" placeholder="Username"/>
            </div>
            <div className="col-12">
              <input type="password" className="neon-input-default" placeholder="Password"/>
            </div>
            <div className="col-12 col-md-4" style={
                {
                  marginTop: '.5em'
                }
              }>
              <a href="#">
                <button className="neon-btn neon-btn-block neon-btn-primary">Login</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 d-none d-sm-block col-sm-4 right box">
        <div className="web-logo"></div>
      </div>
    </div>
  </div>
);

LoginBox = styled(LoginBox)`
  width: 100%;
  position: relative;
  .row {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .box {
    display: flex;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .15);
    input {
      margin: 5px 0px;
    }
  }
  .left {
    padding: 1.5em .75em;
    background: #fff;
    height: 80%;
    transform: translateX(2vw);
    @media screen and (max-width: 576px) {
      transform: translateX(0vw);
    }
    .title {
      font-weight: 700;
      font-size: 3em;
      margin-bottom: 0px;
    }
  }
  .right {
    background: -webkit-linear-gradient(left,#38bbb1,#48bbe5);
    justify-content: center;
    height: 300px;
    transform: translateX(-2vw);
    .web-logo {
      background-image: url(${'/assets/logo-white.png'});
      background-size: 100% auto;
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: center;
      width: 100%;
      height: 100%;
    }
  }
`


let LogoOnMobile = ({ className }) => (
  <div className={ className + ' d-block d-sm-none'}>
    <div className="web-logo"></div>
  </div>
)

LogoOnMobile = styled(LogoOnMobile)`
  justify-content: center;
  width: 100%;
  height: 150px;
  transform: translateX(-2vw);
  margin-bottom: 1.5em;
  .web-logo {
    background-image: url(${'/assets/logo-black.png'});
    background-size: auto 150px;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    width: 100%;
    height: 100%;
  }
`


const Login = () => (
  <Page className="container">
    <LoginBox/>
  </Page>
);

export default Wrapper(Login);

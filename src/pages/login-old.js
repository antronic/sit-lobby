import React from 'react';
import {
  compose,
  withHandlers,
  withState,
  lifecycle,
} from 'recompose';

import styled from 'styled-components';

// import mockBg from '$dummy/get_bg.json';
// const mockBg = fetch('https://api.desktoppr.co/1/wallpapers/random');

// Functions

function bgStateChange(bgStateChanger) {
  return setTimeout(() => bgStateChanger(() => 'blur'), 2000);
}

function bgLoaded(bgStateChanger) {
  bgStateChange(bgStateChanger);
}

async function getBg({ bgSetImg, bgStateChanger }, cb) {
  const data = await fetch(
    'https://pixabay.com/api/?q=mountain&per_page=3&orientation=horizontal&key=6673933-6d0fdfab0e9d0895eea164dc0',
    {
      method: 'GET',
      mode: 'cors',
    },
  );
  const res = await data.json();
  const img = res.hits[0].webformatURL;
  // Background Lazy load
  const bgImg = document.createElement('IMG');
  bgImg.src = img;
  bgImg.addEventListener('load', () => {
    if (!bgStateChanger === false) bgLoaded(bgStateChanger);
    bgSetImg(() => img);
    setTimeout(() => { if (!cb === false) cb(); }, 1000);
  });
}
// Functions


let LoginBox = ({
  className,
  bgImg,
}) => (
  <div className={`${className} text-center align-items-center justify-content-center col-lg-3 col-sm-6 col-10 container login-box`} style={{
    backgroundImage: `url(${bgImg})`,
  }}>
    <div className="neon-glass"></div>

    <div className="login-form col-10">
      <div className="">
        <img id="login-logo" src="/assets/logo-mock.png"/>
      </div>
      <form action="https://learning.sit.kmutt.ac.th/api/auth" method="post">
        <div className="input-group">
          <input name="username" type="text" className="neon-input-default" placeholder="Student ID"/>
        </div>
        <div className="input-group">
          <input name="password" type="password" className="neon-input-default" placeholder="Password"/>
        </div>
        <input name="mailhost" type="hidden" value="st.sit.kmutt.ac.th"/>
        <button className="login-button">Login</button>
      </form>
    </div>
  </div>
);

LoginBox = styled(LoginBox)`
  display: flex;
  overflow: hidden;
  z-index: 512;
  position: absolute;
  height: auto;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .25);
  background-size: 80vw 80vh;
  background-position-x: center;
  background-position-y: center;
`;
LoginBox = compose(
  withState('bgImg', 'bgSetImg', ''),
  withHandlers({}),
  lifecycle({
    componentDidMount() {
      getBg(this.props, () => {
        const { className } = document.querySelector('.login-box');
        document.querySelector('.login-box').className = `${className} show`;
      });
    },
  }),
)(LoginBox);

let LoginPage = ({
  bgImg,
  className,

  bgStateClass,
}) => (
  <div className={`login-page ${className}`}>
    <div className="login-bg login-bg-glass"></div>
    <div className={`login-bg login-bg-img ${bgStateClass}`} style={{
      backgroundImage: `url(${bgImg})`,
    }}></div>
    <LoginBox />
    <h2>Loading image...</h2>
  </div>
);

LoginPage = styled(LoginPage)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .login-bg {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: cover;
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
    background-position-x: center;
  }
  .login-bg-img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    z-index: 128;
    -webkit-filter: blur(0px);
    filter: blur(0px);
  }
  .login-bg-glass {
    background-color: rgba(0, 0, 0, .35);
    background: -webkit-linear-gradient(#57343b30,#4058702a);
    z-index: 129;
  }
  .login-bg-img.blur {
    -webkit-filter: blur(5px);
    filter: blur(5px);
  }
`;

const enhance = compose(
  withState('bgStateClass', 'bgStateChanger', ''),
  withState('bgImg', 'bgSetImg', ''),
  withHandlers({}),
  lifecycle({
    componentDidMount() {
      getBg(this.props);
    },
  }),
)(LoginPage);

export default enhance;

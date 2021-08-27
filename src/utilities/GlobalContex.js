import React, { useState, useEffect } from 'react';

export const GlobalContext = React.createContext();

export default function GlobalProvider({ children }){
    useEffect(() => {
        window.addEventListener('resize', () => {
            setSize(sizeCheck());
          });
    }, []);
    const [size, setSize] = useState(sizeCheck());
    const [nav, setNav] = useState('landing');

    return(
        <GlobalContext.Provider value={{
            size: size,
            setSize: setSize,
            nav: nav,
            setNav: setNav
         }}>
            {children}
        </GlobalContext.Provider>
    );
};

function isWideCheck(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    let ratio = (height / width);
    if(ratio <= 0.57338028169 && height <= 540){
      return true;
    }
    else{
       return false;
    }
}
function isExtraLargeCheck(){
    return (window.matchMedia("(min-width: 1200px)").matches ? true : false);
}
function isLargeCheck(){
    return (window.matchMedia("(min-width: 992px)").matches ? true : false);
}
function isMediumCheck(){
    return (window.matchMedia("(min-width: 768px)").matches ? true : false);
}
function isSmallCheck(){
    return (window.matchMedia("(min-width: 576px)").matches ? true : false);
}
function isExtraSmallCheck(){
    return (window.matchMedia("(max-width: 576px)").matches ? true : false);
}
function sizeCheck(){
    if(isWideCheck()){
      return 'wide';
    }
    if(isExtraLargeCheck()){
      return 'extralarge';
    }
    else if(isLargeCheck()){
      return 'large';
    }
    else if(isMediumCheck()){
      return 'medium';
    }
    else if(isSmallCheck()){
      return 'small';
    }
    else if(isExtraSmallCheck()){
      return 'extrasmall';
    }
}
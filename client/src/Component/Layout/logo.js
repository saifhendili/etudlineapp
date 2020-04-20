import React, { Fragment, useState } from 'react';

function Logo() {
  const [sethover, HandelMouseOver] = useState({
    ishover1: false,
    ishover2: false,
    ishover3: false,
  });
  const { ishover1, ishover2, ishover3 } = sethover;
  const SetItem = () => {
    HandelMouseOver({ ...sethover, ishover1: !ishover1 });
  };
  const setitemhover2 = () => {
    HandelMouseOver({ ...sethover, ishover2: !ishover2 });
  };
  const setitemhover3 = () => {
    HandelMouseOver({ ...sethover, ishover3: !ishover3 });
  };
  const oui = () => {
    console.log(sethover.ishover3);
  };
  return (
    <div>
      {!sethover.ishover1 && !sethover.ishover2 && !sethover.ishover3 ? (
        <div className='logokink'>
          <span className='firstnlogo' onClick={() => oui()}>{`<Etud`}</span>
          <span
            className='secnlogo'
            onMouseOver={() => SetItem()}
          >{`Line`}</span>
          <span
            className='slashnlogo'
            onMouseOver={() => setitemhover2()}
          >{`/`}</span>
          <span
            className='secnlogo'
            onMouseOver={() => setitemhover3()}
          >{`>`}</span>
        </div>
      ) : sethover.ishover2 ? (
        <div className='logokink2'>
          <div className='firstdivreverse'>
            <span
              className='slashnlogo2'
              onMouseLeave={() => HandelMouseOver(!ishover2)}
            >{` / `}</span>
            <span
              className='secnlogo'
              onMouseLeave={() => HandelMouseOver(!ishover1)}
            >{`Line `}</span>
            <span className='firstnlogo'>{`<Etud`}</span>
          </div>

          {ishover2 ? <span className='lastitemlog'>{`>`}</span> : ''}
        </div>
      ) : sethover.ishover3 ? (
        <div className='logokink2'>
          <div className='firstdivreverse'>
            <span
              className='lastitemlog'
              onMouseLeave={() => HandelMouseOver(!ishover3)}
            >{`>`}</span>
            <span
              className='slashnlogo2'
              onMouseLeave={() => HandelMouseOver(!ishover2)}
            >{` / `}</span>
            <span
              className='secnlogo'
              onMouseLeave={() => HandelMouseOver(!ishover1)}
            >{`Line `}</span>
            <span className='firstnlogo'>{`<Etud`}</span>
          </div>
        </div>
      ) : (
        <div className='logokink2'>
          <div className='firstdivreverse'>
            <span
              className='secnlogo'
              onMouseLeave={() => HandelMouseOver(!ishover1)}
            >{`Line `}</span>
            <span className='firstnlogo'>{`<Etud`}</span>
          </div>
          {ishover1 ? <span className='slashnlogo2'>{` / `}</span> : ''}
          {ishover1 ? <span className='lastitemlog'>{`>`}</span> : ''}
        </div>
      )}
    </div>
  );
}

export default Logo;

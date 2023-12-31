import React from "react";


const AButton = ({onclick, children}) => {

  const onDown = e => {
    const target = e.target.closest('.js-btn');
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const h = target.offsetHeight;
    const w = target.offsetWidth;
    const span = document.createElement('span');
    span.classList.add('cP6k');
    span.style.setProperty('width', w + 'px');
    span.style.setProperty('height', h + 'px')
    span.style.setProperty('top', y + 'px')
    span.style.setProperty('left', x + 'px')
    target.querySelector('.gtBI').append(span)
  }

  const onUp = e => {
    const target = e.target.closest('.js-btn');
    target.querySelector('.gtBI').innerHTML = '';
  }

  return (
    <button
      // onClick={onclick}
      onMouseDown={onDown}
      onMouseUp={onUp}
      className="js-btn r2DG V7r1 EGpD Kp43 aPJp x4dM dDTU"
    >
      {children}
      <div className="gtBI"></div>
    </button>
  )
}

export default AButton;



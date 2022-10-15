import React, { useState, useEffect } from "react";

const btnTypes = [
  {
    id: 'image',
    className: ['roundButton'],
  },
  {
    id: 'ingredients',
    className: ['roundButton'],
  },
  {
    id: 'all ingredients',
    className: ['roundButton'],
  }
];

const BtnContainer = () => {
  const [btns, setBtns] = useState(btnTypes);

  const removeCss = (btn, arry) => {
    const highlightBtn = arry.map((item) => {
      if (item.id === btn.id) {
        return { ...item, className: ['roundButton', 'activeBtn'] }
      } else {
        return { ...item, className: ['roundButton'] }
      }
    });
    setBtns(highlightBtn);
  }

  return (
    <div className="btnContainer">
      {
        btns.map((btn) => {
          return (
            <button
              key={btn.id}
              className={`${btn.className.join(' ')}`}
              onClick={() => removeCss(btn, btnTypes)}
            >
              {btn.id}
            </button>
          )
        })
      }
    </div>
  )
}

export default BtnContainer 
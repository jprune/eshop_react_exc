import React from 'react';
import Card from './Card';

function CardContainer({ shopData, setStateOfCart }) {
  return (
    <div>
      <h1 className="text-5xl text-center py-6 font-bold">Your best Iphone store!</h1>
      <div className="flex flex-wrap justify-center items-center">
        {shopData.map((item, idx) => <Card data={item} key={idx} setStateOfCart={setStateOfCart} />)}
      </div>
    </div>

  );
}

export default CardContainer;

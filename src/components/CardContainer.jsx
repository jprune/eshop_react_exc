import React from 'react';
import Card from './Card';

function CardContainer({ shopData, setStateOfCart, cart }) {
  return (
    <div>
      <h1 className="text-5xl text-center py-6 font-bold">Your best Iphone store!</h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {shopData.map((item, idx) => <Card data={item} key={idx} setStateOfCart={setStateOfCart} cart={cart} />)}
      </div>
    </div>

  );
}

export default CardContainer;

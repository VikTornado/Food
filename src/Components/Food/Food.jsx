import React, { useState } from 'react';
import {data} from "../../Data/Data.js"

const Food = (props) => {

const [foods, setFoods] = useState(data)
  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
           {/* <FoodButtons category={filterType}/> */}
           <div className='max-w-[1640] mx-auto  items-center p-4'>
            <h1 className='text-orange-600 text-center font-bold text-4xl'>Top Rated Menu Items</h1>
            <div>
                <div>
                    <p className={'font-bold text-grey-700'}>Filter Type</p>
                    <div>
                        <button onClick={()=> setFoods(data)} className={"m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"}>All</button>
                        <button onClick={()=> filterType('burger')} className={"m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"}>Burgers</button>
                        <button onClick={()=> filterType('pizza')} className={"m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"}>Pizza</button>
                        <button onClick={()=> filterType('soup')} className={"m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"}>Salads</button>
                        <button onClick={()=> filterType('chicken')} className={"m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"}>Chicken</button>
                    </div>
                </div>
                <div>
                    <p className='font-bold text-grey-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390] w-full'>
                        <button onClick={() => filterPrice('$')} className={'m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'}>$</button>
                        <button onClick={() => filterPrice('$$')} className={'m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'}>$$</button>
                        <button onClick={() => filterPrice('$$$')} className={'m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'}>$$$</button>
                        <button onClick={() => filterPrice('$$$$')} className={'m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'}>$$$$</button>
                        <button onClick={() => filterPrice('$$$$$')} className={'m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'}>$$$$$</button>
                    </div>
                </div>
            </div>
</div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default Food;

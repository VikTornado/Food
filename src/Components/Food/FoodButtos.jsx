import React from "react";


const FoodButtons = (props) => {
    console.log(props);
    return(
<div className='max-w-[1640] mx-auto  items-center p-4'>
<h1 className='text-orange-600 text-center font-bold text-4xl'>Top Rated Menu Items</h1>
            <div>
                <div>
                    <p className={'font-bold text-grey-700'}>Filter Type</p>
                    <div>
                        <button onClick={props.catecory} className={"m-1 border rounded-xl px-5 py-1 border-orange-600 bg-orange-600 hover:text-white"}>All</button>
                        <button className={"m-1 border rounded-xl px-5 py-1 border-orange-600 bg-orange-600 hover:text-white"}>Burgers</button>
                        <button className={"m-1 border rounded-xl px-5 py-1 border-orange-600 bg-orange-600 hover:text-white"}>Pizza</button>
                        <button className={"m-1 border rounded-xl px-5 py-1 border-orange-600 bg-orange-600 hover:text-white"}>Salads</button>
                        <button className={"m-1 border rounded-xl px-5 py-1 border-orange-600 bg-orange-600 hover:text-white"}>Chicken</button>
                    </div>
                </div>
                <div>
                    <p className='font-bold text-grey-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390] w-full'>
                        <button className={'border rounded-xl px-5 py-1 border-orange-600 bg-orange-600 hover:text-white'}>$</button>
                        <button className={'border rounded-xl px-5 py-1 border-orange-600 bg-orange-600 hover:text-white'}>$</button>
                        <button className={'border rounded-xl px-5 py-1 border-orange-600 bg-orange-600 hover:text-white'}>$</button>
                        <button className={'border rounded-xl px-5 py-1 border-orange-600 bg-orange-600 hover:text-white'}>$</button>
                        <button className={'border rounded-xl px-5 py-1 border-orange-600 bg-orange-600 hover:text-white'}>$</button>
                    </div>
                </div>
            </div>
</div>
    )
}

export default FoodButtons

import React from 'react';
import img1 from "../images/1.png"
import img2 from "../images/2.png"
import img3 from "../images/3.png"
import img4 from "../images/4.png"
import img5 from "../images/5.png"
import img6 from "../images/6.png"

const HeadLineCard = () => {
    return (
        <div className={"max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6"}>
            {/*card*/}
            <div className={"rounded-xl relative"}>
                {/*overlay*/}
                <div className={"absolute w-full h-full bg-black/50 rounded-xl text-white"}>
                    <p className={"font-bold text-2-xl px-2 pt-4"}>Sun's Out, BOGO's Out</p>
                    <p className={"p-2"}>Through 8/26</p>
                    <button className={"border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2"}>Order Now</button>
                </div>
                <img className={"max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"} src={img1} alt={`1`}/>
            </div>
            {/*card*/}
            <div className={"rounded-xl relative"}>
                {/*overlay*/}
                <div className={"absolute w-full h-full bg-black/50 rounded-xl text-white"}>
                    <p className={"font-bold text-2-xl px-2 pt-4"}>New restaurants</p>
                    <p className={"p-2"}>Added Daily</p>
                    <button className={"border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2"}>Order Now</button>
                </div>
                <img className={"max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"} src={img2} alt={`2`}/>
            </div>
            {/*card*/}
            <div className={"rounded-xl relative"}>
                {/*overlay*/}
                <div className={"absolute w-full h-full bg-black/50 rounded-xl text-white"}>
                    <p className={"font-bold text-2-xl px-2 pt-4"}>We Delivered Desert Too</p>
                    <p className={"p-2"}>Testy Treats</p>
                    <button className={"border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2"}>Order Now</button>
                </div>
                <img className={"max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"} src={img3} alt={`3`}/>
            </div>
            {/*card*/}
            <div className={"rounded-xl relative"}>
                {/*overlay*/}
                <div className={"absolute w-full h-full bg-black/50 rounded-xl text-white"}>
                    <p className={"font-bold text-2-xl px-2 pt-4"}>We Delivered Desert Too</p>
                    <p className={"p-2"}>Testy Treats</p>
                    <button className={"border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2"}>Order Now</button>
                </div>
                <img className={"max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"} src={img4} alt={`4`}/>
            </div>
            {/*card*/}
            <div className={"rounded-xl relative"}>
                {/*overlay*/}
                <div className={"absolute w-full h-full bg-black/50 rounded-xl text-white"}>
                    <p className={"font-bold text-2-xl px-2 pt-4"}>We Delivered Desert Too</p>
                    <p className={"p-2"}>Testy Treats</p>
                    <button className={"border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2"}>Order Now</button>
                </div>
                <img className={"max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"} src={img5} alt={`5`}/>
            </div>
            {/*card*/}
            <div className={"rounded-xl relative"}>
                {/*overlay*/}
                <div className={"absolute w-full h-full bg-black/50 rounded-xl text-white"}>
                    <p className={"font-bold text-2-xl px-2 pt-4"}>We Delivered Desert Too</p>
                    <p className={"p-2"}>Testy Treats</p>
                    <button className={"border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2"}>Order Now</button>
                </div>
                <img className={"max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"} src={img6} alt={`6`}/>
            </div>
        </div>
    );
};

export default HeadLineCard;

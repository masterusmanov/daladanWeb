import React from 'react';
import one from '../../assets/images/slider/2.png'
import two from '../../assets/images/slider/3.png'
import three from '../../assets/images/slider/4.png'
import four from '../../assets/images/slider/5.png'
import five from '../../assets/images/slider/6.png'
import six from '../../assets/images/slider/7.png'
import seven from '../../assets/images/slider/8.png'
import eight from '../../assets/images/slider/9.png'
import hero from '../../assets/images/slider/1.png'

const datas = [
    {img: hero, title: "Donli mahsulotlar"},
    {img: one, title: "Mahalliy mevalar"},
    {img: two, title: "Poliz ekinlar"},
    {img: three, title: "Sitrus mevalar"},
    {img: four, title: "Dala mahsulotlari"},
    {img: five, title: "Baliq mahsulotlari"},
    {img: six, title: "Poliz mahsulotlari"},
    {img: seven, title: "Chorvachilik"},
    {img: eight, title: "Parrandachilik"},
];

const dataOne = [
    {img: hero, title: "Donli mahsulotlar"},
    {img: one, title: "Mahalliy mevalar"},
    {img: two, title: "Poliz ekinlar"},
    {img: three, title: "Sitrus mevalar"},
    {img: four, title: "Dala mahsulotlari"},
    {img: five, title: "Baliq mahsulotlari"},
    {img: six, title: "Poliz mahsulotlari"},
    {img: seven, title: "Chorvachilik"},
    {img: eight, title: "Parrandachilik"},
    {img: hero, title: "Donli mahsulotlar"},
    {img: one, title: "Mahalliy mevalar"},
    {img: two, title: "Poliz ekinlar"},
    {img: three, title: "Sitrus mevalar"},
    {img: four, title: "Dala mahsulotlari"},
    {img: five, title: "Baliq mahsulotlari"},
    {img: six, title: "Poliz mahsulotlari"},
    {img: seven, title: "Chorvachilik"},
    {img: eight, title: "Parrandachilik"},
]

function CaruselTwo(){
    return(
        <div>
            <div className='hidden xl:flex items-center justify-between mt-[100px] xl:px-2 2xl:px-0'>
            {datas.map((data, index) => (
                <div key={index} className=" grid items-center cursor-pointer">
                    <img src={data.img} alt="" className='w-[100px] h-[100px] mx-auto'/>
                    <h1 className="text-center font-[600]">{data.title}</h1>
                </div>
            ))}
        </div>
        <marquee className="xl:hidden">
            <div className='flex items-center gap-[50px] mt-[50px] xl:px-2 2xl:px-0'>
                {dataOne.map((datam, index) => (
                    <div key={index} className="grid items-center cursor-pointer gap-2">
                        <img src={datam.img} alt="" className='w-[70px] h-[70px] md:w-[80px] md:h-[80px] rounded-full mx-auto'/>
                        <h1 className="text-center font-[600] text-[16px]">{datam.title}</h1>
                    </div>
                ))}
            </div>
        </marquee>
        </div>
    )
}

export default CaruselTwo;
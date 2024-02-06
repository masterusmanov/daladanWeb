import React, { useEffect, useState } from "react";

export default function HomeTwo() {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
          const data = await response.json();
          setTodo(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div className="container mx-auto mt-[60px] xl:mt-[100px]">
      <div className="flex items-center justify-between px-2 lg:px-0 xl:px-2 2xl:px-0">
        <h1 className="text-[16px] md:text-[24px] font-[700]">Mashhur mahsulotlar</h1>
        <div className="flex items-center">
          <a href="#" className="text-[#25B679] font-[500] text-[16px]">Barchasini ko'rish</a>
          <i className='bx bx-chevron-right text-[24px] text-[#25B679]'></i>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-6 px-2">
        {todo && todo.map((data, index) => (
            <div key={index} className="border border-black w-[250px] h-[400px] rounded-t-2xl">
                <img src={data.image} alt="image" className="w-full rounded-t-2xl p-2 h-[250px] ob"/>
                <h1>{data.title}</h1>
            </div>
        ))}
      </div>

    </div>
  );
}

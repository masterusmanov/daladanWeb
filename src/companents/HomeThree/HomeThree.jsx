// eslint-disable-next-line no-unused-vars
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
        <h1 className="text-[16px] md:text-[24px] font-[700]">Poliz mahsulotlar</h1>
        <div className="flex items-center">
          <a href="#" className="text-[#25B679] font-[500] text-[16px]">Barchasini ko`rish</a>
          <i className='bx bx-chevron-right text-[24px] text-[#25B679]'></i>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10 px-2 mt-[25px]">
        {todo && todo.slice(0, 10).map((data, index) => (
            <div key={index} className=" bg-[#ffff] w-[150px] h-[300px] md:w-[220px] md:h-[360px] 2xl:w-[250px]  lg:h-[400px] 2xl:h-[450px] rounded-t-2xl">
                <div>
                  <i className='bx bx-heart absolute text-[24px] ml-[100px] md:ml-[160px] p-2 bg-red-200 rounded-full mt-[5px] md:mt-[10px]'></i>
                  <img src={data.image} alt="image" className=" p-2 w-full rounded-t-2xl h-[180px] md:h-[220px] lg:h-[250px] 2xl:h-[300px] object-cover"/>
                </div>
                <div className="p-2">
                    <p className="text-[14px] text-[#6B6B6B]"><i className='bx bx-alarm'></i> {new Date().getDate()}.{new Date().getMonth() + 1}.{new Date().getFullYear()}</p>
                    <h1 className="text-[#979797] text-[14px] md:text-[17px] mt-[15px]">{data.title.slice(0, 15)}...</h1>
                    <p className="text-[#25B679] font-[700] text-[20px] mt-[15px] md:mt-[30px]">${data.price}</p>
                </div>
            </div>
        ))}
      </div>

    </div>
  );
}

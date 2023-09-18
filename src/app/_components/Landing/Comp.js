import React, { useEffect, useRef, useState } from "react";

export default function Comp({ data }) {
  const [pizzaData, setPizzaData] = useState([]);
  const [pizzaSize, setPizzaSize] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const btnRef = useRef(null);
  const sizeRef = useRef(null);

  function handleInfo(e, ref, setvariable) {
    const btns = Array.from(ref.current.children);
    btns.forEach((el) => {
      el.style.color = "white";
      el.style.transform = "scale(1)";
    });

    e.target.style.color = "green";
    e.target.style.transform = "scale(1.3)";
    setvariable((prevData) => [e.target.textContent]);
  }

  function handleClick(e) {
    handleInfo(e, btnRef, setPizzaData);
  }

  function handleSize(e) {
    handleInfo(e, sizeRef, setPizzaSize);
  }
  function handleOrder(e) {
    setOrderModal(true);
    e.target.style.display = "none";
    setTimeout(() => {
      setShowSuccess(true);
    }, 5000);
  }

  const orderMessage = `Your Order for ${pizzaData[0]} of ${
    pizzaSize[0]
  } size with ${data.join("|")} will be delievered soon...`;

  return (
    <section
      id="comp"
      className="bg-black flex flex-col capitalize justify-center items-center h-screen text-white"
    >
      <p>{alert}</p>
      <p>which pizza you are looking for ?</p>
      <div
        ref={btnRef}
        className="flex capitalize flex-col gap-4 items-center mt-6 mb-10 "
      >
        <button onClick={handleClick}>paneer pizza</button>
        <button onClick={handleClick}>marghareeta pizza</button>
        <button onClick={handleClick}>chicken pizza</button>
        <button onClick={handleClick}>plain pizza</button>
      </div>
      <p className="mb-4">Select the size for your pizza :</p>
      <div
        ref={sizeRef}
        className="flex capitalize flex-col gap-4 items-center "
      >
        <button onClick={handleSize}>regular</button>
        <button onClick={handleSize}>medium</button>
        <button onClick={handleSize}>large</button>
      </div>
      <a
        onClick={handleOrder}
        className={` mt-8 cursor-pointer p-2 bg-white text-lime-600 ${
          data.length === 3 && pizzaData.length && pizzaSize.length
            ? "block"
            : "hidden"
        } rounded-2xl text-2xl`}
      >
        order now
      </a>
      {orderModal && (
        <>
          <p className={` text-lime-600 text-5xl mt-8  `}>
            {showSuccess ? `Order Successful !!!` : "Processing..."}
          </p>
          <p className="w-9/12 text-xl mt-4 text-lime-400 text-center">
            {showSuccess && orderMessage}
          </p>
        </>
      )}
    </section>
  );
}

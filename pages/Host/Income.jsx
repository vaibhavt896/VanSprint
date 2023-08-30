import React from "react";
import IncomeGraphImage from "/assets/images/income-graph.png";

export default function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ];

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Earnings</h1>
        <p className="text-xl md:text-2xl mb-10">
          Uncover your income trends and financial insights.
        </p>
        <div className="relative mb-12">
          <img
            className="w-full md:w-auto mx-auto mb-8 rounded-md shadow-xl"
            src={IncomeGraphImage}
            alt="Income graph"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-6 rounded-lg shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">$2,260</h2>
            <p className="text-xl md:text-2xl">Total Earnings</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transactionsData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">${item.amount}</h3>
              <p className="text-gray-400">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

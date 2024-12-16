import React from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  const { products, onDel } = props;
  return (
    <>
      <div>
        <Link to={`/products/add`}>
          <button className="bg-green-500 text-white font-bold px-4 py-2 rounded-md mt-4 ml-64">
            Add product
          </button>
        </Link>
        <div className="overflow-x-auto  mt-4 px-64">
          <table className=" min-w-full table-auto border-collapse border border-black">
            <thead>
              <tr className="bg-gray-100">
                <td className="px-4 py-2 border  border-gray-300 text-center">
                  name
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  price
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  image
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  description
                </td>
                <td className="px-4 py-2 border border-gray-300 text-center">
                  action
                </td>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td className="px-4 py-2 border text-center border-gray-300">
                      {product.name}
                    </td>
                    <td className="px-4 py-2 border text-center border-gray-300">
                      {product.price}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      <img className=" w-32" src={product.img} alt="" />
                    </td>
                    <td className=" px-4 py-2 text-center border border-gray-300">
                      {product.des}
                    </td>
                    <td className="px-4 py-2 text-center border border-gray-300">
                      <button
                        className="bg-red-500 mr-4 text-white font-bold px-4 py-2 rounded-md"
                        onClick={() => onDel(product.id)}
                      >
                        Delete
                      </button>
                      <Link to={`/products/${product.id}/update`}>
                        <button className="bg-indigo-500 text-white font-bold px-4 py-2 rounded-md">
                          Update
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default List;

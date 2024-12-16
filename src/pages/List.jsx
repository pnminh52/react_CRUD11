import React from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  const { products, onDel } = props;
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl ml-32">List Product</h1>
        <Link to={`/products/add`}>
          <button className="ml-32 mt-2 px-4 py-2 bg-green-500 text-white font-bold border border-green-500 rounded-md">
            Add product
          </button>
        </Link>
        <div>
          <table className="border border-black ml-32 mt-4">
            <thead>
              <tr className="bg-gray-200">
                <td className="text-center border border-black px-8 py-2 text-lg font-bold">
                  {" "}
                  Name
                </td>
                <td className="text-center border border-black px-8 py-2 text-lg font-bold">
                  Price
                </td>
                <td className="text-center border border-black px-8 py-2 text-lg font-bold">
                  Image
                </td>
                <td className="text-center border border-black px-8 py-2 text-lg font-bold">
                  Description
                </td>
                <td className="text-center border border-black px-8 py-2 text-lg font-bold">
                  {" "}
                  Action
                </td>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr>
                    <td className="text-center border border-black px-8 py-2">
                      {product.name}
                    </td>
                    <td className="text-center border border-black px-8 py-2">
                      {product.price}
                    </td>
                    <td className="text-center border border-black px-8 py-2">
                      <img src={product.img} alt="" />
                    </td>
                    <td className="text-center border border-black px-8 py-2">
                      {product.des}
                    </td>
                    <td className="text-center border border-black px-8 py-2">
                      <button
                        className="mt-2 mr-2 px-4 py-2 bg-red-500 text-white font-bold  rounded-md"
                        onClick={() => onDel(product.id)}
                      >
                        Delete
                      </button>
                      <Link
                        className="mt-2 px-4 py-2 bg-indigo-500 text-white font-bold  rounded-md"
                        to={`/products/${product.id}/update`}
                      >
                        <button>Update</button>
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

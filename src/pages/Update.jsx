import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Update = ({ products, onUpdate }) => {
  const { id } = useParams();
  const [inputValue, setInputValue] = useState({});
  const crtPrd = products.find((item) => item.id == id);
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const onEventUpdate = (e) => {
    e.preventDefault();
    const updateData = { ...crtPrd, ...inputValue };
    onUpdate(updateData);
  };

  return (
    <>
      <div>
        <h1>Product Update</h1>
        <form action="" onSubmit={onEventUpdate}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onInput={onChange}
            defaultValue={crtPrd?.name}
          />

          <input
            type="number"
            name="price"
            placeholder="price"
            onInput={onChange}
            defaultValue={crtPrd?.price}
          />

          <input
            type="text"
            name="des"
            placeholder="des"
            onInput={onChange}
            defaultValue={crtPrd?.des}
          />

          <input
            type="text"
            name="img"
            placeholder="img"
            onInput={onChange}
            defaultValue={crtPrd?.img}
          />

          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Update;

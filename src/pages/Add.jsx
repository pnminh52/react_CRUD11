import React from "react";

const Add = (props) => {
  const { errors, onAdd, onChange } = props;
  const errD = errors.map((item) => {
    return { [item.context.label]: item.message };
  });
  const [err1, err2, err3, err4] = errD;
  return (
    <>
      <div>
        <h1>Product Add</h1>
        <form action="" onSubmit={onAdd}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onInput={onChange}
          />
          <span>{err1?.name}</span>
          <input
            type="number"
            name="price"
            placeholder="price"
            onInput={onChange}
          />
          <span>{err2?.price}</span>
          <input type="text" name="des" placeholder="des" onInput={onChange} />
          <span>{err3?.des}</span>
          <input type="text" name="img" placeholder="img" onInput={onChange} />
          <span>{err4?.img}</span>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Add;

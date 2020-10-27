import React from 'react';

function FilterableProductTable({ products, searchResult }) {
  console.log(products.data);

  return (
    <div>
      {products.data.map((item) => (
        <div key={item.id}>
          <p>{item.category}</p>
          <p
            style={{
              color: item.stocked ? '' : 'red',
            }}
          >
            {item.name}
          </p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default FilterableProductTable;

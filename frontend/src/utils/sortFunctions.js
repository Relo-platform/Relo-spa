const SORT_FUNCTIONS = {
  price_asc: (a, b) => a.rent_price - b.rent_price,
  price_desc: (a, b) => b.rent_price - a.rent_price,
  bedrooms: (a, b) => b.bedrooms - a.bedrooms,
};

export default SORT_FUNCTIONS;

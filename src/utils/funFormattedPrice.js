const formattedPrice = (number) => {
  return number.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
  });
};

export default formattedPrice;

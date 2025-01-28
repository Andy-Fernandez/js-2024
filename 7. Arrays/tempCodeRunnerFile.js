const getPricePRoductWithDescount = (price, descount) => {
  return price*((100-descount)/100)
}

console.log(getPricePRoductWithDescount(100, 10));
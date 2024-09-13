const calculateLoan = (principal, years, interestRate) => {
  let monthlyPayment = principal;
  let overallPayment = principal;
  const resultsArray = []; 

  for (let year = 1; year <= years; year++) {
      overallPayment *= (1 + interestRate / 100);
      monthlyPayment = overallPayment / (12 * year);
      resultsArray.push({ 
          year, 
          overallPayment: overallPayment.toFixed(2), 
          monthlyPayment: monthlyPayment.toFixed(2) 
      });
      console.log(`Year ${year}: ${overallPayment.toFixed(2)} BGN`);
  }

  return resultsArray;
};

export default calculateLoan;

const calculateLoan = (principal, period, interestRate) => {
  const overallPayment = principal * (1 + interestRate / 100* period); // Total payment after all months
  const monthlyPayment = overallPayment / period; // Monthly payment

  return [{
      overallPayment: overallPayment.toFixed(2),
      period,
      monthlyPayment: monthlyPayment.toFixed(2),
  }];
};

export default calculateLoan;

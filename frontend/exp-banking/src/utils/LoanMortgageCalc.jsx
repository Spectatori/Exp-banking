const calculateLoan = (principal, loanTermMonths, interestRate) => {
  const monthlyInterestRate = interestRate / 100 / 12;

  const monthlyPayment = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths) / (Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1);

  const overallPayment = monthlyPayment * loanTermMonths;

  const amortizationSchedule = [];
  let remainingBalance = principal;
  for (let i = 1; i <= loanTermMonths; i++) {
    const interestPayment = remainingBalance * monthlyInterestRate;
    const principalPayment = monthlyPayment - interestPayment;
    remainingBalance -= principalPayment;

    amortizationSchedule.push({
      month: i,
      monthlyPayment: monthlyPayment.toFixed(2),
      interestPayment: interestPayment.toFixed(2),
      principalPayment: principalPayment.toFixed(2),
      remainingBalance: remainingBalance.toFixed(2),
    });
  }

  return [{
      overallPayment: overallPayment.toFixed(2),
      period: loanTermMonths,
      monthlyPayment: monthlyPayment.toFixed(2),
  }];
};

export default calculateLoan;

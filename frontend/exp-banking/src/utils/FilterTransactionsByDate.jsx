export const calculateTotal = (transactions) => {
  return transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
};

export const filterTransactions = (transactions, timeSpan) => {
  const today = new Date();
  
  return transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.dateOfTransaction);

    switch (timeSpan) {
      case 'daily':
        return transactionDate.toDateString() === today.toDateString();
      case 'weekly':
        const oneWeekAgo = new Date(today);
        oneWeekAgo.setDate(today.getDate() - 7);
        return transactionDate >= oneWeekAgo && transactionDate <= today;
      case 'monthly':
        const oneMonthAgo = new Date(today);
        oneMonthAgo.setMonth(today.getMonth() - 1);
        return transactionDate >= oneMonthAgo && transactionDate <= today;
      default:
        return true;
    }
  });
};

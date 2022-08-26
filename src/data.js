export default myAccounts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        id: 1,
        type: "IRA",
        accountNumber: 5200,
        balance: "5763.36",
        change: -0.08,
        changeTotal: "8,916.69",
      },
      {
        id: 2,
        type: "AAA",
        accountNumber: 1812,
        balance: "2,010,926.10",
        change: 0.21,
        changeTotal: "38,881.63",
      },
      {
        id: 3,
        type: "AAA",
        accountNumber: 3810,
        balance: "10,050,054.07",
        change: 0.07,
        changeTotal: "8,916.69",
      },
    ]);
  }, 300);
})

// console.log(myAccounts);

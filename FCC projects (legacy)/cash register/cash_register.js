// Work in progress

function checkCashRegister(price, cash, cid) {
  // calculate change due
  let changeDue = cash - price;

  let summarizedCID = cid.reduce((accumulator, currentValue) => accumulator + currentValue[1], 0);

  let totalCID = cid.reduce((acc, curr) => acc + curr[1], 0);


  // handle insufficient funds in the cash register
  if(summarizedCID < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] }
  }

  // handle closed drawer = exact change is available *
  else if(summarizedCID === changeDue) {

    // should have function for comparing cid with changeDue: CLOSED
    // compares individual denominations with changeDue to check if there is exact amount available for each denomination to provide the change

        // 1. iterate through denominations in cid
        // 2. for each denomination, check if there is enough available to provide required change
        // 3. determine exact change availability by accumulating the available denominations that can be used
        // 4. Compare accumulated change with required change: If they match, the drawer can be considered closed (exact change available)

    return { status: "CLOSED", change: changeDue }
  }

  else {
    // Sort the CID from highest to lowest
    let sortedCID = cid.sort((a, b) => {
      return b[1] - a[1];
    });

    return { status: "OPEN", change: sortedCID }
  }

  return changeDue;
}

checkCashRegister(
   19.5,
  20,
  [["PENNY", 1.01],
   ["NICKEL", 2.05],
   ["DIME", 3.1],
   ["QUARTER", 4.25],
   ["ONE", 90],
   ["FIVE", 55],
   ["TEN", 20],
   ["TWENTY", 60],
   ["ONE HUNDRED", 100]
  ]
);
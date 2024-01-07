# CASH REGISTER

Design a cash register drawer function `checkCashRegister()` that accepts purchase price as the first argument (`price`), payment as the second argument (`cash`), and cash-in-drawer (`cid`) as the third argument.

`cid` is a 2D array listing available currency.

The `checkCashRegister()` function should always return an object with a status key and a change key.

Return {status: `"INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return `{status: "CLOSED", change: [...]}` with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return `{status: "OPEN", change: [...]}`, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
<br>

    Currency Unit	Amount
    Penny	$0.01 (PENNY)
    Nickel	$0.05 (NICKEL)
    Dime	$0.1 (DIME)
    Quarter	$0.25 (QUARTER)
    Dollar	$1 (ONE)
    Five Dollars	$5 (FIVE)
    Ten Dollars	$10 (TEN)
    Twenty Dollars	$20 (TWENTY)
    One-hundred Dollars	$100 (ONE HUNDRED)
<br>

See below for an example of a cash-in-drawer array:

    [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ]


<br>

## Learned

**2D array** (matrice)

  - collection of data elements arranged in a grid-like structure with rows and columns
  - each element in the array is referred to as a cell and can be accessed by its row and column indices/indexes
  - create two-dimensional arrays in JavaScript through jagged arrays — an array of arrays
  - fixed in size
  - each row should have a similar number of elements (columns)
<br>

  USE:

  - efficient storage and manipulation of large amounts of data (image or video processing, scientific simulations, spreadsheet apps, apps that involve data tables, image processing, and game development)
  - simplify calculation by enabling the use of matrix operations
  - can represent mathematical matrices in linear algebra and a wide range of data, such as graphs, maps, and tables
<br><br>

[Learn more](https://www.freecodecamp.org/news/javascript-2d-arrays/#:~:text=A%20two%2Ddimensional%20array%2C%20also,row%20and%20column%20indices%2Findexes)
<br>

**Sorting 2D arrays**

    cid.sort((a, b) => {
      return b[1] - a[1]; // Sort by the second element of each sub-array (the value)
    });

**Calculating value of 2D arrays**

`reduce()`

Used to "reduce" an array into a single value. It iterates through each element of the array and accumulates a single result.

It takes a callback function and an initial value as arguments:

The callback function receives four parameters:

- Accumulator (`acc`): The value that accumulates the partial result.
  - Current value (`curr`): The current element being processed in the array.
  - Current index: The index of the current element being processed.
  - Source array: The array `reduce()` was called upon.

- The initial value is optional. It represents the initial value of the accumulator (acc). If provided, the reduction starts from this initial value. If omitted, the first element of the array is used as the initial accumulator value, and the reduction starts from the second element.

    array.reduce(callback(accumulator, currentValue[, currentIndex, array]), initialValue)

<br>

_Izvršava unkciju povratnog poziva "reducer" na svakom elementu niza, redom, prosljeđujući povratnu vrijednost iz izračuna na prethodnom elementu. Konačni rezultat rada reduktora preko svih elemenata niza je jedna vrijednost

Prvi put kada se povratni poziv pokrene nema "povratne vrijednosti prethodnog izračuna". Ako je isporučena, umjesto nje može se koristiti početna vrijednost. Inače se element polja s indeksom 0 koristi kao početna vrijednost i iteracija počinje od sljedećeg elementa (indeks 1 umjesto indeksa 0)._


<br><br>

## Steps

1. Check for Closed Drawer

    If the total cash in the drawer is equal to the change due, `return {status: "CLOSED", change: cid}`.
      This handles the case where the exact change is available.

2. Calculate Change Amount

   Determine the change amount by subtracting the price from the cash received.

3. Initialize Variables

   Initialize variables for change and a copy of the cash-in-drawer to avoid modifying the original array.

4. Handle Insufficient Funds

   Check if the cash-in-drawer has less than the required change. If so, `return {status: "INSUFFICIENT_FUNDS", change: []}`.

5. Calculate Change from Highest to Lowest

   Iterate through the currency units (from highest to lowest) and calculate the change using the available denominations.

6. Adjust Change Based on Drawer Contents

   While calculating change, make sure to use the available currency units from the drawer.

7. Check for Exact Change

   If the change calculated matches the original change amount, `return {status: "OPEN", change: result}`.
   If not, `return {status: "INSUFFICIENT_FUNDS", change: []}`.

<br><br>

        PRICE = cijena proizvoda
        CASH = gotovina (kupac)
        CASH IN DRAWER = gotovina (kasa)
        CHANGE DUE = ostatak
        CHANGE IN DRAWER = preostalo u kasi nakon plaćanja i vraćanja ostatka

<br><hr><br>

[source](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register)





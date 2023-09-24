/* Map the debris

According to Kepler's Third Law, the orbital period  T
of two point masses orbiting each other in a circular or elliptic orbit is:

T=2πa3μ‾‾‾√

a
  is the orbit's semi-major axis
μ=GM
  is the standard gravitational parameter
G
  is the gravitational constant,
M
  is the mass of the more massive body.
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

---
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris

*/


function orbitalPeriod(arr) {

  // Constants
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  // Function to calculate orbital period
  function calculateOrbitalPeriod(avgAlt) {
    const a = earthRadius + avgAlt; // Semi-major axis
    const T = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM); // Orbital period formula
    return Math.round(T); // Round to the nearest whole number
  }

  // Map the input array to calculate orbital periods
  const result = arr.map(obj => {
    return {
      name: obj.name,
      orbitalPeriod: calculateOrbitalPeriod(obj.avgAlt),
    };
  });

  return result;
}

const resultArray = orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
console.log(resultArray); // Output: [ { name: 'sputnik', orbitalPeriod: 86400 } ]

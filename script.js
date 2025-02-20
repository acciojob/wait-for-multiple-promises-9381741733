//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  // Show "Loading..." initially
  output.innerHTML = `<tr><td colspan="2" class="text-center">Loading...</td></tr>`;

  function createPromise(id) {
    const time = (Math.random() * 2 + 1).toFixed(3); // Random time between 1 and 3 seconds
    return new Promise((resolve) => {
      setTimeout(() => resolve({ id, time }), time * 1000);
    });
  }

  const promises = [createPromise(1), createPromise(2), createPromise(3)];

  Promise.all(promises).then((results) => {
    output.innerHTML = ""; // Clear the loading row

    results.forEach((result) => {
      const row = `<tr>
                    <td>Promise ${result.id}</td>
                    <td>${result.time}</td>
                   </tr>`;
      output.innerHTML += row;
    });

    // Calculate the max time
    const maxTime = Math.max(...results.map((r) => parseFloat(r.time))).toFixed(3);
    output.innerHTML += `<tr class="table-secondary">
                            <td><strong>Total</strong></td>
                            <td><strong>${maxTime}</strong></td>
                          </tr>`;
  });
});

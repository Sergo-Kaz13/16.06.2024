const timeHasPassed = document.getElementById("timeHasPassed");

const current = new Date();
const old = new Date("2024-06-16");

const days = Math.ceil(
  Math.abs(old.getTime() - current.getTime()) / (1000 * 3600 * 24)
);

const year = Math.floor(days / 365);

const months = Math.floor((days - year * 360) / 30);

timeHasPassed.innerHTML = `
  <table class="table">
    <thead>
      <tr>
        <th>Роки</th>
        <th>Місяці</th>
        <th>Дні</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${year}</td>
        <td>${months}</td>
        <td>${days}</td>
      </tr>
    </tbody>
  </table>
`;

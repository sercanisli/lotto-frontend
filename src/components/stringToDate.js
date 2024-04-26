export function stringToDate(dateString) {
    const day = Number(dateString.slice(0, 2));
    const month = Number(dateString.slice(3, 5)) - 1; // Ay değeri 0-11 aralığında olmalı
    const year = Number(dateString.slice(6, 10));
    return new Date(year, month, day);
  }
  
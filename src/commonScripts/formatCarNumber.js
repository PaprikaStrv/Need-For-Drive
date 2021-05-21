export const formatCarNumber = (carNumber) => {
    const first = carNumber.slice(0, 1).toLocaleUpperCase();
    const second = carNumber.slice(1, 4);
    const third = carNumber.slice(4, 6).toLocaleUpperCase();
    const region = carNumber.slice(6, carNumber.length);

    return `${first} ${second} ${third} ${region}`;
}
module.exports = function reverse(n) {
    let nPol = 0; //число с которым будем работать
    if (n < 0)
        // если число отрицательное то делаем его положительным
        nPol = -n;
    else nPol = n;
    let nString = String(nPol); //переводим число в строку;
    let arr = nString.split(""); // переводим число в массив чисел
    let arrR = []; //Новый массив развёрнутых чисел
    for (let i = arr.length; i > 0; i--) {
        // разворачиваем массив чисел
        arrR.push(arr[i - 1]);
    }
    let Nrev = +arrR.join(""); //склеиваем обратно в строку и переводим её в число
    return Nrev;
};

function solution(price, money, count) {
    const prices = count % 2 ? (price + (price * count)) * parseInt(count / 2) + (price + (price * count)) / 2 : (price + (price * count)) * parseInt(count / 2)
    return prices - money > 0 ? prices - money : 0;
}
function solution(order) {
    return order.reduce((sum, menu) => sum + (menu.includes('latte') ? 5000 : 4500), 0);
}
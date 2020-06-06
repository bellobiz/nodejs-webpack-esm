const Food = {
    orderFood: 'Rice and Beans',
    get myOrderedFood() {
        return `Please I need ${this.orderFood}`
    }
};

export default Food;
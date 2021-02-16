class Store {

    state = [];

    constructor() {
        console.log('se ha creado una instancia de Store');
        this.state = [];
    }


    async set(object) {
        this.state.push(object)
        return this.state.length;
    }

    async get(){
        return this.state.slice(-10);
    }

}

module.exports = Store;
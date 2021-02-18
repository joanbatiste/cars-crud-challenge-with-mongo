class Storage {

    state = [];

    constructor() {
        console.log('se ha creado una instancia de Store');
        this.state = [];
    }

    async findById(id){  // PROMISE OF INSTACE
        const instance = this.state[id-1];
        if(!instance) {
            throw new Error('Id not found');
        } 
        return instance
    }

    async updateById(id, nextObject){
        await this.findById(id);
        this.state[id-1] = nextObject;
        return nextObject;
    }

    async set(object) {
        this.state.push(object)
        return this.state.length;
    }

    async get(){
        return this.state.slice(-10);
    }

}

module.exports = Storage;
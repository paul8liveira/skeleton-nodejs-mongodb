class ExampleController {    
    constructor(example) {
        //aqui recebemos a model
        this.Example = example;
    }

    get(req, res) {
        return this.Example.find({})
            .then(example => res.send(example))
            .catch(err => {
                throw err;
            });
    }  
}

export default ExampleController;
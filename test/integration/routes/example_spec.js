//vamos considerar aqui nesse exemplo que temos uma rota chamada /products no nosso serviço
//request = faz parte do pkg supertest que está exposto como global no helpers.js
//expect = é parte do pkg chai foi exposto como global no helpers.js 

import Example from '../../../src/models/example';

describe('Routes: Example', () => {    
    const defaultObj = {
        name: 'name',
        description: 'description',
    };

    const expectedObj = {
        __v: 0,
        _id: '56cb91bdc3464f14678934ca',
        name: 'name',
        description: 'description',
    };    

    beforeEach(() => {
        const example = new Example(defaultObj);
        example._id = '56cb91bdc3464f14678934ca';
        return Example.deleteMany({})
            .then(() => example.save());
    });
    afterEach(() => Example.deleteMany({}));
            

    //validando o retorno de uma rota
    describe('GET /example', () => {
        it('isso deve validar um objeto teste', done => {
            request
                .get('/example')
                .end((err, res) => {
                    expect(res.body).to.eql([expectedObj]);
                    done(err);
                });
        });
    });    
});
module.exports = {

    create: (req, res, next) => {
        let body = [
            req.body.name,
            req.body.description,
            req.body.price,
            req.body.imageurl
        ];
        req.app.get('db').create_product(body).then(resp => {
            res.status(200).send('Product created successfully')
        }).catch(err =>{
            res.status(500).send('Whoops something went wrong:',err)
            console.log(err)
        });
    },

    getOne: (req, res, next) => {
        req.app.get('db').read_product([req.params.id]).then(product =>{
            res.status(200).send(product)
        }).catch(err =>{
            res.status(500).send('Whoops something went wrong:',err)
            console.log(err)
        });
    },

    getAll: (req, res, next) => {
        req.app.get('db').read_products().then(products =>{
            res.status(200).send(products)
        }).catch(err =>{
            res.status(500).send('Whoops something went wrong:',err)
            console.log(err)
        });
    },

    update: (req, res, next) => {
        // console.log('update hit')
        req.app.get('db').update_product([req.params.id, req.query.description]).then(resp =>{
            res.status(200).send('Product updated successfully')
        }).catch(err =>{
            res.status(500).send('Whoops something went wrong:',err)
            console.log(err)
        });

    },

    delete: (req, res, next) => {
        // console.log('delete hit')
        req.app.get('db').delete_product([req.params.id]).then(resp =>{
            res.status(200).send('Product deleted successfully')
        }).catch(err =>{
            res.status(500).send('Whoops something went wrong:',err)
            console.log(err)
        });
    }
}
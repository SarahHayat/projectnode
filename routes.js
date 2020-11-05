const Router = require('express').Router
const router = Router();
const store = {
    resources: {
        res_id: {
            id : 'ceci est un id',
            name: 'xx',
            
        }
    }
}

router.get('/resources/:id', (req, res) => {
    console.log(req.params)
    const idx = "l'id est " + req.params.id
    res.send(idx)
})

router.post('/resources/', (req, res) => {
    const resource = req.body
    resource.id = Object.keys(store.resources.lenght + 1)
    store.resources[resource.id] = resource
    res.json()
})

router.put('/resources/:id', (req,res)=>{
    const id = req.params
    if( req.params.id === req.body.id ){
        store.ressurces[id] = req.body
    }
    else{
        res.status(400).end()
    }
})

router.delete('/resources/:id', (req, res) =>{
    const { id } = req.params
    if (store.resources[id]){
        delete store.resources[id]
         res.json({success : true})
    }
    else {
        res.status(400).end()
    }
})

router.patch('/resources/:id', (req, res)=>{
    const id = req.params.id
    const resource = {...store.resources[id], ...req.body}
    store.ressurces[id] = resource
    res.json()
})
module.exports = router

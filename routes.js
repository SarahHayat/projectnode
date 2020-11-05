const Router = require('express').Router
const router = Router();
const store = {
    ressources: {
        res_id: {name: 'xx'}
    }
}

router.get('/ressources/:id', (req, res) => {
    console.log(req.params)
    const idx = "l'id est " + req.params.id
    res.send(idx)
})

router.post('/ressources/', (req, res) => {
    const stor1 = {
        ressources: {
            res_id: {name: 'Sarah'},
        },
    }
})

router.patch('/ressources/:id', (req,res)=>{

})


module.exports = router

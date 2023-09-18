import { urlencoded, Router, json } from "express"; 
import { socketServer } from "../app.js";

const router = Router();


router.use(json());
router.use(urlencoded({extended: true}));

router.post('/', (req, res, next)=>{
    let product = req.body;
    //const {title, description, price, thumbnail, code, stock, status, category, id} = req.body;
    try{
        manager.addProducts(product);
        res.status(200).json({message: "Producto Agregado", product: req.body});

        socketServer.emit('add-product', "Producto Agregado");

    }

    catch(err) {

        socketServer.emit('add-product', "Codigo Repetido");
        next(err);
    }
})

export default router;
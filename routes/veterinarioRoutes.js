import express from 'express';
const router = express.Router();
import { 
    registrar, 
    perfil, 
    confirmar, 
    autenticar, 
    olvidePassword,
    comprobarToken,
    nuevoPassword 
} from '../controllers/veterinarioController.js';
import checkAuth from '../middleware/authMidddleware.js';

// Area Publica
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
router.post('/olvide-password', olvidePassword);
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);

// Area Privada
router.get('/perfil', checkAuth, perfil);

export default router;

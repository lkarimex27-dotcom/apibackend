const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuario');

const router = Router();

router.get('/', usuariosGet);
router.post('/', usuariosPost);
router.put('/:id', usuariosPut);
router.delete('/:id', usuariosDelete);

module.exports = router;
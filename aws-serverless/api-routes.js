// Initialize express router
let router = require('express').Router();

// Import contact controller
var contactController = require('./contactController');

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API It is Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});


// Contact routes
router.route('/contacts')
    .get(contactController.index);
    
router.route('/contacts/add')
    .post(contactController.new);

router.route('/contacts/update/:contact_id')
    .put(contactController.update);

router.route('/contacts/delete/:contact_id')
    .delete(contactController.delete);

// Export API routes
module.exports = router;
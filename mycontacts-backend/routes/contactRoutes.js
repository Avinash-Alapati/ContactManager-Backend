const express = require('express');
const router = express.Router();
const { getContact , createContact , getSingleContact , updateContact , deleteContact} = require('../controllers/contactController')


router.route('/').get(getContact);

router.route('/').post(createContact);

router.route('/:id').get(getSingleContact);

router.route('/:id').put(updateContact);

router.route('/:id').delete(deleteContact);

module.exports = router;
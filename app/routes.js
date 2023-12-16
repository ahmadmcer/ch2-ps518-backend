// routes.js
const handler = require('./handler');

const routes = [
  // Customer Users
  {
    method: 'GET',
    path: '/api/search/customers',
    handler: handler.searchCustomers,
  },
  {
    method: 'GET',
    path: '/api/customers',
    handler: handler.getAllCustomers,
  },
  {
    method: 'GET',
    path: '/api/customers/{id}',
    handler: handler.getCustomerById,
  },
  {
    method: 'POST',
    path: '/api/customers',
    handler: handler.createCustomer,
  },
  {
    method: 'PUT',
    path: '/api/customers/{id}',
    handler: handler.updateCustomer,
  },
  {
    method: 'DELETE',
    path: '/api/customers/{id}',
    handler: handler.deleteCustomer,
  },

  // SME Users
  {
    method: 'GET',
    path: '/api/search/smes',
    handler: handler.searchSMEs,
  },
  {
    method: 'GET',
    path: '/api/smes',
    handler: handler.getAllSMEs,
  },
  {
    method: 'GET',
    path: '/api/smes/{id}',
    handler: handler.getSMEById,
  },
  {
    method: 'POST',
    path: '/api/smes',
    handler: handler.createSME,
  },
  {
    method: 'PUT',
    path: '/api/smes/{id}',
    handler: handler.updateSME,
  },
  {
    method: 'DELETE',
    path: '/api/smes/{id}',
    handler: handler.deleteSME,
  },

  // SME Social Media
  {
    method: 'GET',
    path: '/api/smes/{sme_id}/socialmedia',
    handler: handler.getSMEsocialmediaById,
  },
  // {
  //   method: 'POST',
  //   path: '/api/smes/{sme_id}/socialmedia',
  //   handler: handler.createSMEsocialmedia,
  // },
  {
    method: 'PUT',
    path: '/api/smes/{sme_id}/socialmedia',
    handler: handler.updateSMEsocialmedia,
  },

  // Feedbacks
  {
    method: 'GET',
    path: '/api/feedbacks',
    handler: handler.getAllFeedbacks,
  },
  {
    method: 'GET',
    path: '/api/feedbacks/{id}',
    handler: handler.getFeedbackById,
  },
  {
    method: 'GET',
    path: '/api/feedbacks/customers/{customer_id}',
    handler: handler.getFeedbacksByCustomerId,
  },
  {
    method: 'GET',
    path: '/api/feedbacks/smes/{sme_id}',
    handler: handler.getFeedbacksBySMEId,
  },
  {
    method: 'POST',
    path: '/api/feedbacks',
    handler: handler.createFeedback,
  },
  {
    method: 'PUT',
    path: '/api/feedbacks/{id}',
    handler: handler.updateFeedback,
  },
  {
    method: 'DELETE',
    path: '/api/feedbacks/{id}',
    handler: handler.deleteFeedback,
  },

  // Categories
  {
    method: 'GET',
    path: '/api/categories',
    handler: handler.getAllCategories,
  },
  {
    method: 'GET',
    path: '/api/categories/{id}',
    handler: handler.getCategoryById,
  },

  // Vouchers
  {
    method: 'GET',
    path: '/api/vouchers',
    handler: handler.getAllVouchers,
  },
  {
    method: 'GET',
    path: '/api/vouchers/{id}',
    handler: handler.getVoucherById,
  },
  {
    method: 'POST',
    path: '/api/vouchers',
    handler: handler.createVoucher,
  },
  {
    method: 'PUT',
    path: '/api/vouchers/{id}',
    handler: handler.updateVoucher,
  },
  {
    method: 'DELETE',
    path: '/api/vouchers/{id}',
    handler: handler.deleteVoucher,
  },

  // Login
  {
    method: 'POST',
    path: '/api/login',
    handler: handler.login,
  },

  // Logout (if needed)
  {
    method: 'POST',
    path: '/api/logout',
    handler: handler.logout,
  },
];

module.exports = routes;

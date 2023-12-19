// handler.js
const db = require('./database');

// CRUD operations for customer_users table
const searchCustomers = async (request, h) => {
  try {
    const { query } = request.query;
    const [rows] = await db.query('SELECT * FROM customer_users WHERE name LIKE ?', [`%${query}%`]);
    return rows;
  } catch (error) {
    console.error('Error searching customers:', error.message);
    throw error;
  }
};

const getAllCustomers = async (request, h) => {
  try {
    const [rows] = await db.query('SELECT * FROM customer_users');
    return rows;
  } catch (error) {
    console.error('Error fetching all customer users:', error.message);
    throw error;
  }
};

const getCustomerById = async (request, h) => {
  try {
    const { id } = request.params;
    const [rows] = await db.query('SELECT * FROM customer_users WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    console.error('Error fetching customer user by ID:', error.message);
    throw error;
  }
};

const createCustomer = async (request, h) => {
  try {
    const {
      name, username, password, email, phone, profile_picture,
    } = request.payload;
    const created_at = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    const [result] = await db.query(
      'INSERT INTO customer_users (name, username, password, email, phone, profile_picture, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, username, password, email, phone, profile_picture, created_at],
    );
    return { id: result.insertId, message: 'Customer created successfully!' };
  } catch (error) {
    console.error('Error creating customer:', error.message);
    throw error;
  }
};

const updateCustomer = async (request, h) => {
  try {
    const { id } = request.params;
    const {
      name, username, password, email, phone, profile_picture,
    } = request.payload;
    await db.query(
      'UPDATE customer_users SET name = ?, username = ?, password = ?, email = ?, phone = ?, profile_picture = ? WHERE id = ?',
      [name, username, password, email, phone, profile_picture, id],
    );
    return { message: 'Customer updated successfully!' };
  } catch (error) {
    console.error('Error updating customer:', error.message);
    throw error;
  }
};

const deleteCustomer = async (request, h) => {
  try {
    const { id } = request.params;
    await db.query('DELETE FROM customer_users WHERE id = ?', [id]);
    return { message: 'Customer deleted successfully!' };
  } catch (error) {
    console.error('Error deleting customer:', error.message);
    throw error;
  }
};

// CRUD operations for sme_users table
const searchSMEs = async (request, h) => {
  try {
    const { query } = request.query;
    const [rows] = await db.query('SELECT * FROM sme_users WHERE name LIKE ?', [`%${query}%`]);
    return rows;
  } catch (error) {
    console.error('Error searching SMEs:', error.message);
    throw error;
  }
};

const getAllSMEs = async (request, h) => {
  try {
    const [rows] = await db.query('SELECT * FROM sme_users');
    return rows;
  } catch (error) {
    console.error('Error fetching all SME users:', error.message);
    throw error;
  }
};

const getSMEById = async (request, h) => {
  try {
    const { id } = request.params;
    const [rows] = await db.query('SELECT * FROM sme_users WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    console.error('Error fetching SME user by ID:', error.message);
    throw error;
  }
};

// const createSME = async (request, h) => {
//   try {
//     const {
//       username, password, name, email, phone, profile_picture, banner_picture, description,
//     } = request.payload;
//     const created_at = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
//     const [result] = await db.query(
//       'INSERT INTO sme_users (username, password, name, email, phone, profile_picture, banner_picture, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
//       [username, password, name, email, phone, profile_picture, banner_picture, description, created_at],
//     );
//     return { id: result.insertId, message: 'SME created successfully!' };
//   } catch (error) {
//     console.error('Error creating SME:', error.message);
//     throw error;
//   }
// };

const createSME = async (request, h) => {
  const {
    username, password, name, email, phone, profile_picture, banner_picture, description,
  } = request.payload;

  try {
    // Create SME
    const [smeResult] = await db.query(
      'INSERT INTO sme_users (username, password, name, email, phone, profile_picture, banner_picture, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())',
      [username, password, name, email, phone, profile_picture, banner_picture, description],
    );
    const smeId = smeResult.insertId;

    // Create SME Social Media with the same ID
    await db.query(
      'INSERT INTO sme_socialmedia (sme_id, facebook, instagram, x, tiktok, whatsapp, telegram, youtube, linkedin, website) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [smeId, '', '', '', '', '', '', '', '', ''],
    );

    return {
      id: smeId,
      message: 'SME and SME Social Media created successfully!',
    };
  } catch (error) {
    console.error('Error creating SME with Social Media:', error.message);
    throw error;
  }
};

const updateSME = async (request, h) => {
  try {
    const { id } = request.params;
    const {
      username, password, name, email, phone, profile_picture, banner_picture, description,
    } = request.payload;
    await db.query(
      'UPDATE sme_users SET username = ?, password = ?, name = ?, email = ?, phone = ?, profile_picture = ?, banner_picture = ?, description = ? WHERE id = ?',
      [username, password, name, email, phone, profile_picture, banner_picture, description, id],
    );
    return { message: 'SME updated successfully!' };
  } catch (error) {
    console.error('Error updating SME:', error.message);
    throw error;
  }
};

const deleteSME = async (request, h) => {
  try {
    const { id } = request.params;
    await db.query('DELETE FROM sme_users WHERE id = ?', [id]);
    return { message: 'SME deleted successfully!' };
  } catch (error) {
    console.error('Error deleting SME:', error.message);
    throw error;
  }
};

// CRUD operations for sme_socialmedia table
const getSMEsocialmediaById = async (request, h) => {
  try {
    const { sme_id } = request.params;
    const [rows] = await db.query('SELECT * FROM sme_socialmedia WHERE sme_id = ?', [sme_id]);
    return rows[0];
  } catch (error) {
    console.error('Error fetching SME social media by SME ID:', error.message);
    throw error;
  }
};

// const createSMEsocialmedia = async (request, h) => {
//   try {
//     const {
//       sme_id, facebook, instagram, x, tiktok, whatsapp, telegram, youtube, linkedin, website,
//     } = request.payload;
//     const [result] = await db.query(
//       'INSERT INTO sme_socialmedia (sme_id, facebook, instagram, x, tiktok, whatsapp, telegram, youtube, linkedin, website) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
//       [sme_id, facebook, instagram, x, tiktok, whatsapp, telegram, youtube, linkedin, website],
//     );
//     return { message: 'SME social media created successfully!' };
//   } catch (error) {
//     console.error('Error creating SME social media:', error.message);
//     throw error;
//   }
// };

const updateSMEsocialmedia = async (request, h) => {
  try {
    const { sme_id } = request.params;
    const {
      facebook, instagram, x, tiktok, whatsapp, telegram, youtube, linkedin, website,
    } = request.payload;
    await db.query(
      'UPDATE sme_socialmedia SET facebook = ?, instagram = ?, x = ?, tiktok = ?, whatsapp = ?, telegram = ?, youtube = ?, linkedin = ?, website = ? WHERE sme_id = ?',
      [facebook, instagram, x, tiktok, whatsapp, telegram, youtube, linkedin, website, sme_id],
    );
    return { message: 'SME social media updated successfully!' };
  } catch (error) {
    console.error('Error updating SME social media:', error.message);
    throw error;
  }
};

// CRUD operations for feedbacks table
const getAllFeedbacks = async (request, h) => {
  try {
    const [rows] = await db.query('SELECT * FROM feedbacks');
    return rows;
  } catch (error) {
    console.error('Error fetching all feedbacks:', error.message);
    throw error;
  }
};

const getFeedbackById = async (request, h) => {
  try {
    const { id } = request.params;
    const [rows] = await db.query('SELECT * FROM feedbacks WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    console.error('Error fetching feedback by ID:', error.message);
    throw error;
  }
};

const getFeedbacksByCustomerId = async (request, h) => {
  const { customer_id } = request.params;

  try {
    const [feedbacks] = await db.query(
      'SELECT * FROM feedbacks WHERE customer_id = ?',
      [customer_id],
    );

    return feedbacks;
  } catch (error) {
    console.error('Error getting feedbacks by Customer ID:', error.message);
    throw error;
  }
};

const getFeedbacksBySMEId = async (request, h) => {
  const { sme_id } = request.params;

  try {
    const [feedbacks] = await db.query(
      'SELECT * FROM feedbacks WHERE sme_id = ?',
      [sme_id],
    );

    return feedbacks;
  } catch (error) {
    console.error('Error getting feedbacks by SME ID:', error.message);
    throw error;
  }
};

const createFeedback = async (request, h) => {
  try {
    const {
      customer_id, sme_id, rating, comment, category_id,
    } = request.payload;
    const [result] = await db.query(
      'INSERT INTO feedbacks (customer_id, sme_id, rating, comment, category_id) VALUES (?, ?, ?, ?, ?)',
      [customer_id, sme_id, rating, comment, category_id],
    );
    return { id: result.insertId, message: 'Feedback created successfully!' };
  } catch (error) {
    console.error('Error creating feedback:', error.message);
    throw error;
  }
};

const updateFeedback = async (request, h) => {
  try {
    const { id } = request.params;
    const {
      customer_id, sme_id, rating, comment, category_id,
    } = request.payload;
    await db.query(
      'UPDATE feedbacks SET customer_id = ?, sme_id = ?, rating = ?, comment = ?, category_id = ? WHERE id = ?',
      [customer_id, sme_id, rating, comment, category_id, id],
    );
    return { message: 'Feedback updated successfully!' };
  } catch (error) {
    console.error('Error updating feedback:', error.message);
    throw error;
  }
};

const deleteFeedback = async (request, h) => {
  try {
    const { id } = request.params;
    await db.query('DELETE FROM feedbacks WHERE id = ?', [id]);
    return { message: 'Feedback deleted successfully!' };
  } catch (error) {
    console.error('Error deleting feedback:', error.message);
    throw error;
  }
};

// CRUD operations for categories table
const getAllCategories = async (request, h) => {
  try {
    const [rows] = await db.query('SELECT * FROM categories');
    return rows;
  } catch (error) {
    console.error('Error fetching all categories:', error.message);
    throw error;
  }
};

const getCategoryById = async (request, h) => {
  try {
    const { id } = request.params;
    const [rows] = await db.query('SELECT * FROM categories WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    console.error('Error fetching category by ID:', error.message);
    throw error;
  }
};

// CRUD operations for vouchers table
const getAllVouchers = async (request, h) => {
  try {
    const [rows] = await db.query('SELECT * FROM vouchers');
    return rows;
  } catch (error) {
    console.error('Error fetching all vouchers:', error.message);
    throw error;
  }
};

const getVoucherById = async (request, h) => {
  try {
    const { id } = request.params;
    const [rows] = await db.query('SELECT * FROM vouchers WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    console.error('Error fetching voucher by ID:', error.message);
    throw error;
  }
};

const createVoucher = async (request, h) => {
  try {
    const {
      sme_id, customer_id, name, image, description,
    } = request.payload;
    const [result] = await db.query(
      'INSERT INTO vouchers (sme_id, customer_id, name, image, description) VALUES (?, ?, ?, ?, ?)',
      [sme_id, customer_id, name, image, description],
    );
    return { id: result.insertId, message: 'Voucher created successfully!' };
  } catch (error) {
    console.error('Error creating voucher:', error.message);
    throw error;
  }
};

const updateVoucher = async (request, h) => {
  try {
    const { id } = request.params;
    const {
      sme_id, customer_id, name, image, description,
    } = request.payload;
    await db.query(
      'UPDATE vouchers SET sme_id = ?, customer_id = ?, name = ?, image = ?, description = ? WHERE id = ?',
      [sme_id, customer_id, name, image, description, id],
    );
    return { message: 'Voucher updated successfully!' };
  } catch (error) {
    console.error('Error updating voucher:', error.message);
    throw error;
  }
};

const deleteVoucher = async (request, h) => {
  try {
    const { id } = request.params;
    await db.query('DELETE FROM vouchers WHERE id = ?', [id]);
    return { message: 'Voucher deleted successfully!' };
  } catch (error) {
    console.error('Error deleting voucher:', error.message);
    throw error;
  }
};

// Login for Customer or SME
const login = async (request, h) => {
  const {
    email, username, password, userType,
  } = request.payload;

  try {
    let tableName; let idFieldName; let nameFieldName;

    // Determine the table and field names based on the user type
    if (userType === 'customer') {
      tableName = 'customer_users';
      idFieldName = 'customer_id';
      nameFieldName = 'name';
    } else if (userType === 'sme') {
      tableName = 'sme_users';
      idFieldName = 'sme_id';
      nameFieldName = 'name';
    } else {
      return h.response({ message: 'Invalid user type' }).code(400);
    }

    // Check if the email/username and password match
    const [user] = await db.query(
      `SELECT * FROM ${tableName} WHERE (email = ? OR username = ?) AND password = ?`,
      [email, username, password],
    );

    if (!user || user.length === 0) {
      return h.response({ message: 'Invalid credentials' }).code(401);
    }

    // Return login result
    const loginResult = {
      userId: user[0][idFieldName],
      nama: user[0][nameFieldName],
    };

    return loginResult;
  } catch (error) {
    console.error('Error during login:', error.message);
    throw error;
  }
};

// Logout (if needed)
const logout = async (request, h) =>
// Implement logout logic here (if applicable)
// ...

  // eslint-disable-next-line implicit-arrow-linebreak
  ({ message: 'Logout successful' });

module.exports = {
  searchCustomers,
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  searchSMEs,
  getAllSMEs,
  getSMEById,
  createSME,
  updateSME,
  deleteSME,
  getSMEsocialmediaById,
  // createSMEsocialmedia,
  updateSMEsocialmedia,
  getAllFeedbacks,
  getFeedbackById,
  getFeedbacksByCustomerId,
  getFeedbacksBySMEId,
  createFeedback,
  updateFeedback,
  deleteFeedback,
  getAllCategories,
  getCategoryById,
  getAllVouchers,
  getVoucherById,
  createVoucher,
  updateVoucher,
  deleteVoucher,
  login,
  logout,
};

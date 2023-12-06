# **API Documentation**

## **Base URL**

- **Base URL:** `https://ch2-ps518.et.r.appspot.com`

## **Customer Users**

### Get All Customers
- **Endpoint:** `/api/customers`
- **Method:** `GET`
- **Description:** Retrieve a list of all customer users.
- **Response:**
  - `200 OK`: Returns an array of customer users.

### Get Customer by ID
- **Endpoint:** `/api/customers/{id}`
- **Method:** `GET`
- **Description:** Retrieve a specific customer user by ID.
- **Parameters:**
  - `id` (path): ID of the customer user.
- **Response:**
  - `200 OK`: Returns the details of the specified customer user.
  - `404 Not Found`: If the customer user with the given ID is not found.

### Create Customer
- **Endpoint:** `/api/customers`
- **Method:** `POST`
- **Description:** Create a new customer user.
- **Request Body:**
  - `name`: Customer's name.
  - `username`: Customer's username.
  - `password`: Customer's password.
  - `email`: Customer's email.
  - `phone`: Customer's phone number.
  - `profile_picture`: URL of the customer's profile picture.
- **Response:**
  - `201 Created`: Returns the ID and a success message of the newly created customer.

### Update Customer
- **Endpoint:** `/api/customers/{id}`
- **Method:** `PUT`
- **Description:** Update an existing customer user by ID.
- **Parameters:**
  - `id` (path): ID of the customer user to be updated.
- **Request Body:**
  - `name`: Customer's name.
  - `username`: Customer's username.
  - `password`: Customer's password.
  - `email`: Customer's email.
  - `phone`: Customer's phone number.
  - `profile_picture`: URL of the customer's profile picture.
- **Response:**
  - `200 OK`: Returns a success message indicating the customer was updated.
  - `404 Not Found`: If the customer user with the given ID is not found.

### Delete Customer
- **Endpoint:** `/api/customers/{id}`
- **Method:** `DELETE`
- **Description:** Delete a customer user by ID.
- **Parameters:**
  - `id` (path): ID of the customer user to be deleted.
- **Response:**
  - `200 OK`: Returns a success message indicating the customer was deleted.
  - `404 Not Found`: If the customer user with the given ID is not found.

## **SME Users**

### Get All SMEs
- **Endpoint:** `/api/smes`
- **Method:** `GET`
- **Description:** Retrieve a list of all SME users.
- **Response:**
  - `200 OK`: Returns an array of SME users.

### Get SME by ID
- **Endpoint:** `/api/smes/{id}`
- **Method:** `GET`
- **Description:** Retrieve a specific SME user by ID.
- **Parameters:**
  - `id` (path): ID of the SME user.
- **Response:**
  - `200 OK`: Returns the details of the specified SME user.
  - `404 Not Found`: If the SME user with the given ID is not found.

### Create SME
- **Endpoint:** `/api/smes`
- **Method:** `POST`
- **Description:** Create a new SME user.
- **Request Body:**
  - `username`: SME's username.
  - `password`: SME's password.
  - `name`: SME's name.
  - `email`: SME's email.
  - `phone`: SME's phone number.
  - `profile_picture`: URL of the SME's profile picture.
  - `banner_picture`: URL of the SME's banner picture.
  - `description`: SME's description.
- **Response:**
  - `201 Created`: Returns the ID and a success message of the newly created SME.

### Update SME
- **Endpoint:** `/api/smes/{id}`
- **Method:** `PUT`
- **Description:** Update an existing SME user by ID.
- **Parameters:**
  - `id` (path): ID of the SME user to be updated.
- **Request Body:**
  - `username`: SME's username.
  - `password`: SME's password.
  - `name`: SME's name.
  - `email`: SME's email.
  - `phone`: SME's phone number.
  - `profile_picture`: URL of the SME's profile picture.
  - `banner_picture`: URL of the SME's banner picture.
  - `description`: SME's description.
- **Response:**
  - `200 OK`: Returns a success message indicating the SME was updated.
  - `404 Not Found`: If the SME user with the given ID is not found.

### Delete SME
- **Endpoint:** `/api/smes/{id}`
- **Method:** `DELETE`
- **Description:** Delete an SME user by ID.
- **Parameters:**
  - `id` (path): ID of the SME user to be deleted.
- **Response:**
  - `200 OK`: Returns a success message indicating the SME was deleted.
  - `404 Not Found`: If the SME user with the given ID is not found.

## **SME Social Media**

### Get SME Social Media by SME ID
- **Endpoint:** `/api/smes/{sme_id}/socialmedia`
- **Method:** `GET`
- **Description:** Retrieve the social media details of a specific SME by SME ID.
- **Parameters:**
  - `sme_id` (path): ID of the SME user.
- **Response:**
  - `200 OK`: Returns the social media details of the specified SME.
  - `404 Not Found`: If the SME user with the given ID is not found.

### Create SME Social Media
- **Endpoint:** `/api/smes/{sme_id}/socialmedia`
- **Method:** `POST`
- **Description:** Create social media details for a specific SME.
- **Parameters:**
  - `sme_id` (path): ID of the SME user.
- **Request Body:**
  - `facebook`: SME's Facebook URL.
  - `instagram`: SME's Instagram URL.
  - `x`: SME's X URL.
  - `tiktok`: SME's TikTok URL.
  - `whatsapp`: SME's WhatsApp number.
  - `telegram`: SME's Telegram username.
  - `youtube`: SME's YouTube URL.
  - `linkedin`: SME's LinkedIn URL.
  - `website`: SME's website URL.
- **Response:**
  - `201 Created`: Returns a success message indicating the social media details were created.
  - `404 Not Found`: If the SME user with the given ID is not found.

### Update SME Social Media
- **Endpoint:** `/api/smes/{sme_id}/socialmedia`
- **Method:** `PUT`
- **Description:** Update social media details for a specific SME by SME ID.
- **Parameters:**
  - `sme_id` (path): ID of the SME user.
- **Request Body:**
  - `facebook`: SME's Facebook URL.
  - `instagram`: SME's Instagram URL.
  - `x`: SME's X URL.
  - `tiktok`: SME's TikTok URL.
  - `whatsapp`: SME's WhatsApp number.
  - `telegram`: SME's Telegram username.
  - `youtube`: SME's YouTube URL.
  - `linkedin`: SME's LinkedIn URL.
  - `website`: SME's website URL.
- **Response:**
  - `200 OK`: Returns a success message indicating the social media details were updated.
  - `404 Not Found`: If the SME user with the given ID is not found.

## **Feedbacks**

### Get All Feedbacks
- **Endpoint:** `/api/feedbacks`
- **Method:** `GET`
- **Description:** Retrieve a list of all feedbacks.
- **Response:**
  - `200 OK`: Returns an array of feedbacks.

### Get Feedback by ID
- **Endpoint:** `/api/feedbacks/{id}`
- **Method:** `GET`
- **Description:** Retrieve a specific feedback by ID.
- **Parameters:**
  - `id` (path): ID of the feedback.
- **Response:**
  - `200 OK`: Returns the details of the specified feedback.
  - `404 Not Found`: If the feedback with the given ID is not found.

### Create Feedback
- **Endpoint:** `/api/feedbacks`
- **Method:** `POST`
- **Description:** Create a new feedback.
- **Request Body:**
  - `customer_id`: ID of the customer providing the feedback.
  - `sme_id`: ID of the SME receiving the feedback.
  - `rating`: Rating given in the feedback.
  - `comment`: Text comment provided in the feedback.
  - `category_id`: ID of the feedback category.
- **Response:**
  - `201 Created`: Returns the ID and a success message of the newly created feedback.

### Update Feedback
- **Endpoint:** `/api/feedbacks/{id}`
- **Method:** `PUT`
- **Description:** Update an existing feedback by ID.
- **Parameters:**
  - `id` (path): ID of the feedback to be updated.
- **Request Body:**
  - `customer_id`: ID of the customer providing the feedback.
  - `sme_id`: ID of the SME receiving the feedback.
  - `rating`: Rating given in the feedback.
  - `comment`: Text comment provided in the feedback.
  - `category_id`: ID of the feedback category.
- **Response:**
  - `200 OK`: Returns a success message indicating the feedback was updated.
  - `404 Not Found`: If the feedback with the given ID is not found.

### Delete Feedback
- **Endpoint:** `/api/feedbacks/{id}`
- **Method:** `DELETE`
- **Description:** Delete a feedback by ID.
- **Parameters:**
  - `id` (path): ID of the feedback to be deleted.
- **Response:**
  - `200 OK`: Returns a success message indicating the feedback was deleted.
  - `404 Not Found`: If the feedback with the given ID is not found.

## **Categories**

### Get All Categories
- **Endpoint:** `/api/categories`
- **Method:** `GET`
- **Description:** Retrieve a list of all categories.
- **Response:**
  - `200 OK`: Returns an array of categories.

### Get Category by ID
- **Endpoint:** `/api/categories/{id}`
- **Method:** `GET`
- **Description:** Retrieve a specific category by ID.
- **Parameters:**
  - `id` (path): ID of the category.
- **Response:**
  - `200 OK`: Returns the details of the specified category.
  - `404 Not Found`: If the category with the given ID is not found.

## **Vouchers**

### Get All Vouchers
- **Endpoint:** `/api/vouchers`
- **Method:** `GET`
- **Description:** Retrieve a list of all vouchers.
- **Response:**
  - `200 OK`: Returns an array of vouchers.

### Get Voucher by ID
- **Endpoint:** `/api/vouchers/{id}`
- **Method:** `GET`
- **Description:** Retrieve a specific voucher by ID.
- **Parameters:**
  - `id` (path): ID of the voucher.
- **Response:**
  - `200 OK`: Returns the details of the specified voucher.
  - `404 Not Found`: If the voucher with the given ID is not found.

### Create Voucher
- **Endpoint:** `/api/vouchers`
- **Method:** `POST`
- **Description:** Create a new voucher.
- **Request Body:**
  - `sme_id`: ID of the SME offering the voucher.
  - `customer_id`: ID of the customer claiming the voucher.
  - `name`: Name of the voucher.
  - `image`: URL of the voucher image.
  - `description`: Text description of the voucher.
- **Response:**
  - `201 Created`: Returns the ID and a success message of the newly created voucher.

### Update Voucher
- **Endpoint:** `/api/vouchers/{id}`
- **Method:** `PUT`
- **Description:** Update an existing voucher by ID.
- **Parameters:**
  - `id` (path): ID of the voucher to be updated.
- **Request Body:**
  - `sme_id`: ID of the SME offering the voucher.
  - `customer_id`: ID of the customer claiming the voucher.
  - `name`: Name of the voucher.
  - `image`: URL of the voucher image.
  - `description`: Text description of the voucher.
- **Response:**
  - `200 OK`: Returns a success message indicating the voucher was updated.
  - `404 Not Found`: If the voucher with the given ID is not found.

### Delete Voucher
- **Endpoint:** `/api/vouchers/{id}`
- **Method:** `DELETE`
- **Description:** Delete a voucher by ID.
- **Parameters:**
  - `id` (path): ID of the voucher to be deleted.
- **Response:**
  - `200 OK`: Returns a success message indicating the voucher was deleted.
  - `404 Not Found`: If the voucher with the given ID is not found.

## **Important Notes:**
- All endpoints are prefixed with `/api`.
- Ensure to include the appropriate headers, such as `Content-Type: application/json`, in your requests.
- The API follows RESTful conventions, and the HTTP methods (GET, POST, PUT, DELETE) correspond to specific actions.
- Provide necessary parameters in the request URL for operations that require them.
- All date and time values are in UTC format unless specified otherwise.
- Handle errors by checking the HTTP status codes and the corresponding error messages in the response.
- For security reasons, always use HTTPS when interacting with the API.

## **Example Usage:**
### 1. Get All Customers
- **Request:**
  ```http
  GET /api/customers
  ```
- **Response (200 OK):**
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "username": "johndoe",
      "email": "john@example.com",
      "phone": "+123456789",
      "profile_picture": "https://example.com/johndoe.jpg",
      "created_at": "2023-01-01T12:00:00Z"
    },
    // Additional customer objects...
  ]
  ```

### 2. Create SME
- **Request:**
  ```http
  POST /api/smes
  Content-Type: application/json

  {
    "username": "smeshop",
    "password": "secretpassword",
    "name": "SME Shop",
    "email": "info@smeshop.com",
    "phone": "+987654321",
    "profile_picture": "https://example.com/smeshop.jpg",
    "banner_picture": "https://example.com/smeshop-banner.jpg",
    "description": "Your one-stop SME shop."
  }
  ```
- **Response (201 Created):**
  ```json
  {
    "id": 1,
    "message": "SME created successfully!"
  }
  ```

### 3. Get SME Social Media
- **Request:**
  ```http
  GET /api/smes/1/socialmedia
  ```
- **Response (200 OK):**
  ```json
  {
    "sme_id": 1,
    "facebook": "https://facebook.com/smeshop",
    "instagram": "https://instagram.com/smeshop",
    "x": "https://x.com/smeshop",
    "tiktok": "https://tiktok.com/@smeshop",
    "whatsapp": "+987654321",
    "telegram": "@smeshop",
    "youtube": "https://youtube.com/smeshop",
    "linkedin": "https://linkedin.com/company/smeshop",
    "website": "https://smeshop.com"
  }
  ```

Berikut adalah dokumentasi penggunaan API untuk beberapa endpoint yang telah diimplementasikan:

### 1. **Customer Users**

#### 1.1 Mendapatkan Semua Customer Users

- **Endpoint:** `/api/customers`
- **Metode:** `GET`
- **Deskripsi:** Mendapatkan daftar semua customer users.

#### 1.2 Mendapatkan Customer User Berdasarkan ID

- **Endpoint:** `/api/customers/{id}`
- **Metode:** `GET`
- **Deskripsi:** Mendapatkan informasi customer user berdasarkan ID.

#### 1.3 Membuat Customer User Baru

- **Endpoint:** `/api/customers`
- **Metode:** `POST`
- **Deskripsi:** Membuat customer user baru.

#### 1.4 Memperbarui Informasi Customer User

- **Endpoint:** `/api/customers/{id}`
- **Metode:** `PUT`
- **Deskripsi:** Memperbarui informasi customer user berdasarkan ID.

#### 1.5 Menghapus Customer User

- **Endpoint:** `/api/customers/{id}`
- **Metode:** `DELETE`
- **Deskripsi:** Menghapus customer user berdasarkan ID.

### 2. **SME Users**

#### 2.1 Mendapatkan Semua SME Users

- **Endpoint:** `/api/smes`
- **Metode:** `GET`
- **Deskripsi:** Mendapatkan daftar semua SME users.

#### 2.2 Mendapatkan SME User Berdasarkan ID

- **Endpoint:** `/api/smes/{id}`
- **Metode:** `GET`
- **Deskripsi:** Mendapatkan informasi SME user berdasarkan ID.

#### 2.3 Membuat SME User Baru

- **Endpoint:** `/api/smes`
- **Metode:** `POST`
- **Deskripsi:** Membuat SME user baru.

#### 2.4 Memperbarui Informasi SME User

- **Endpoint:** `/api/smes/{id}`
- **Metode:** `PUT`
- **Deskripsi:** Memperbarui informasi SME user berdasarkan ID.

#### 2.5 Menghapus SME User

- **Endpoint:** `/api/smes/{id}`
- **Metode:** `DELETE`
- **Deskripsi:** Menghapus SME user berdasarkan ID.

### 3. **SME Social Media**

#### 3.1 Mendapatkan Informasi Social Media SME Berdasarkan SME ID

- **Endpoint:** `/api/smes/{sme_id}/socialmedia`
- **Metode:** `GET`
- **Deskripsi:** Mendapatkan informasi social media SME berdasarkan SME ID.

#### 3.2 Membuat Informasi Social Media Baru untuk SME

- **Endpoint:** `/api/smes/{sme_id}/socialmedia`
- **Metode:** `POST`
- **Deskripsi:** Membuat informasi social media baru untuk SME.

#### 3.3 Memperbarui Informasi Social Media untuk SME

- **Endpoint:** `/api/smes/{sme_id}/socialmedia`
- **Metode:** `PUT`
- **Deskripsi:** Memperbarui informasi social media untuk SME berdasarkan SME ID.

### 4. **Feedbacks**

#### 4.1 Mendapatkan Semua Feedbacks

- **Endpoint:** `/api/feedbacks`
- **Metode:** `GET`
- **Deskripsi:** Mendapatkan daftar semua feedbacks.

#### 4.2 Mendapatkan Feedback Berdasarkan ID

- **Endpoint:** `/api/feedbacks/{id}`
- **Metode:** `GET`
- **Deskripsi:** Mendapatkan informasi feedback berdasarkan ID.

#### 4.3 Membuat Feedback Baru

- **Endpoint:** `/api/feedbacks`
- **Metode:** `POST`
- **Deskripsi:** Membuat feedback baru.

#### 4.4 Memperbarui Feedback

- **Endpoint:** `/api/feedbacks/{id}`
- **Metode:** `PUT`
- **Deskripsi:** Memperbarui feedback berdasarkan ID.

#### 4.5 Menghapus Feedback

- **Endpoint:** `/api/feedbacks/{id}`
- **Metode:** `DELETE`
- **Deskripsi:** Menghapus feedback berdasarkan ID.

### 5. **Categories**

#### 5.1 Mendapatkan Semua Categories

- **Endpoint:** `/api/categories`
- **Metode:** `GET`
- **Deskripsi:** Mendapatkan daftar semua categories.

#### 5.2 Mendapatkan Category Berdasarkan ID

- **Endpoint:** `/api/categories/{id}`
- **Metode:** `GET`
- **Deskripsi:** Mendapatkan informasi category berdasarkan ID.

### 6. **Vouchers**

#### 6.1 Mendapatkan Semua Vouchers

- **Endpoint:** `/api/vouchers`
- **Metode:** `GET`
- **Deskripsi:** Mendapatkan daftar semua vouchers.

#### 6.2 Mendapatkan Voucher Berdasarkan ID

- **Endpoint:** `/api/vouchers/{id}`
- **Metode:** `GET`
- **Deskripsi:** Mendapatkan inform

asi voucher berdasarkan ID.

#### 6.3 Membuat Voucher Baru

- **Endpoint:** `/api/vouchers`
- **Metode:** `POST`
- **Deskripsi:** Membuat voucher baru.

#### 6.4 Memperbarui Voucher

- **Endpoint:** `/api/vouchers/{id}`
- **Metode:** `PUT`
- **Deskripsi:** Memperbarui voucher berdasarkan ID.

#### 6.5 Menghapus Voucher

- **Endpoint:** `/api/vouchers/{id}`
- **Metode:** `DELETE`
- **Deskripsi:** Menghapus voucher berdasarkan ID.

**Catatan:** Pastikan untuk mengganti `{id}` dan `{sme_id}` dengan parameter yang sesuai dengan implementasi Anda. Selain itu, pastikan untuk menyertakan informasi request payload yang diperlukan untuk operasi pembuatan dan pembaruan data.
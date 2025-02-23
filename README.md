Ecom Admin Dashboard
The Ecom Admin Dashboard is a comprehensive web application designed to streamline the
management of your e-commerce platform. It offers a user-friendly interface for administrators to
efficiently oversee products, orders, and customer interactions.
## Features
- **Product Management**: Easily add, update, or remove products from your catalog.
- **Order Tracking**: Monitor and manage customer orders with real-time updates.
- **Customer Insights**: Access detailed information about your customers to better understand their
preferences.
- **Sales Analytics**: Visualize sales data through interactive charts and graphs to inform business
decisions.
## Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
## Installation
To set up the Ecom Admin Dashboard locally, follow these steps:
1. **Clone the repository**:
 ```bash
 git clone https://github.com/surajsd11/Ecom-Admin-Dashboard.git
 ```
2. **Navigate to the project directory**:
 ```bash
 cd Ecom-Admin-Dashboard
 ```
3. **Install server dependencies**:
 ```bash
 cd server
 npm install
 ```
4. **Install client dependencies**:
 ```bash
 cd ../client
 npm install
 ```
5. **Set up environment variables**:
 - Create a `.env` file in the `server` directory.
 - Add the following variables:
 ```env
 PORT=5000
 MONGO_URI=your_mongodb_connection_string
 JWT_SECRET=your_jwt_secret_key
 ```
6. **Start the development servers**:
 - For the backend:
 ```bash
 cd ../server
 npm start
 ```
 - For the frontend:
 ```bash
 cd ../client
 npm start
 ```
 The backend server will run on `http://localhost:5000`, and the frontend on `http://localhost:3000`.
## Usage
Once both servers are running, you can access the dashboard at `http://localhost:3000`. Log in with
your administrator credentials to start managing your e-commerce platform.

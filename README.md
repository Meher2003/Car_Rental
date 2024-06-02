# Car Rental MERN App

## Overview

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for car rental. The app allows users to search for cars, book reservations, and pay for rentals. It is designed to be user-friendly, responsive, and scalable.

## Features

- **User-friendly Frontend**: Built with React.js, the frontend is responsive and easy to navigate.
- **Scalable Backend**: Utilizes Node.js and Express.js to handle server-side operations efficiently.
- **Database**: MongoDB is used to store user data and car rental information securely.

## Tech Stack

- **Frontend**: React.js, HTML, CSS, Bootstrap, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/meher2003/car-rental-mern-app.git
    cd car-rental-mern-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following:
    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

4. **Run the application**:
    ```bash
    npm start
    ```

   The frontend should now be running on `http://localhost:3000` and the backend on `http://localhost:5000`.

## Usage

1. **Search for Cars**: Users can search for available cars based on their preferences.
2. **Book Reservations**: Users can book a car for a specified duration.
3. **Payment**: Users can pay for their rentals through the application.

## Project Structure

```plaintext
.
├── client                   # React frontend
│   ├── public
│   └── src
│       ├── components       # React components
│       ├── pages            # React pages
│       ├── App.js           # Main App component
│       └── index.js         # Entry point
├── server                   # Node.js backend
│   ├── config               # Configuration files
│   ├── models               # Mongoose models
│   ├── routes               # Express routes
│   ├── controllers          # Route handlers
│   └── server.js            # Entry point
├── .env                     # Environment variables
├── .gitignore
├── package.json
├── README.md
└── ...

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/feature-name`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/feature-name`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the developers of the MERN stack for their tools and frameworks.

## Contact

- **Meher Datey** - [meherpdatey@gmail.com](mailto:meherpdatey@gmail.com)

```

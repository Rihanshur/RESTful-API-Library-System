# Library API

This repository contains a simple RESTful API for managing a library system. The API allows performing basic CRUD operations on books, interacting with a MySQL database.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Retrieve all books from the library
- Add a new book to the library
- Update the details of a specific book

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MySQL installed and running
- (Add any other prerequisites specific to your project)

## Installation

1. Clone the repository:

   ```bash
   npm install
   ```

2. Set up your MySQL database and configure the connection in the appropriate files.

## Usage
Start the server:
```
node index.js

```
- Test the API endpoints using tools like Postman or your preferred API testing method.

## Project Structure
The project structure is organized as follows:

``` 
|-- app/
|   |-- books/
|       |-- getAllBooks.js
|       |-- addNewBook.js
|       |-- updateBookDetails.js
|-- index.js
|-- package.json
```

## Endpoints :

- Retrieve All Books: GET /api/books - Fetches all books from the database, handling connection errors.

- Add New Book: POST /api/books - Adds a new book using validated JSON payload, manages duplicate entries.

- Update Book Details: PUT /api/books/{id} - Updates specific book details, validating input, handling non-existent books.


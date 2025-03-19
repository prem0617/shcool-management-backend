# School Finder API

This project is a Node.js and Express-based API that allows users to fetch a list of schools sorted by their proximity to a given latitude and longitude. The API connects to a MySQL database and utilizes the Haversine formula to calculate the nearest schools based on geographical distance.

## Features
- Connects to MySQL using a connection pool.
- Fetches all schools from the database.
- Uses the Haversine formula to calculate the geographical distance.
- Returns a sorted list of schools based on proximity to the user's location.

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/prem0617/shcool-management-backend.git
   cd school-finder-api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your database credentials:
   ```env
   MYSQL_HOST=your-mysql-host
   MYSQL_USER=your-mysql-user
   MYSQL_PASSWORD=your-mysql-password
   MYSQL_DATABASE=your-mysql-database
   MYSQL_PORT=3306
   ```

## Database Setup
Run the following SQL query to create the `school_table`:
```sql
CREATE TABLE school_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL
);
```

## API Endpoints

### 1. **List Schools Based on User's Location**
#### Endpoint:
```
GET /listSchools
```
#### Parameters:
| Parameter   | Type    | Description                      |
|------------|--------|----------------------------------|
| latitude   | float  | User's current latitude         |
| longitude  | float  | User's current longitude        |

#### Example Request:
```
GET /listSchools?latitude=28.7041&longitude=77.1025
```
#### Example Response:
```json
{
  "message": "Schools sorted by distance",
  "schools": [
    {
      "id": 1,
      "name": "ABC School",
      "address": "Delhi, India",
      "latitude": 28.6,
      "longitude": 77.1,
      "distance": 11.23
    },
    {
      "id": 2,
      "name": "XYZ School",
      "address": "Noida, India",
      "latitude": 28.5,
      "longitude": 77.3,
      "distance": 22.14
    }
  ]
}
```

## Project Structure
```
school-finder-api/
│── src/
│   ├── controllers/
│   │   ├── school.controller.ts
│   ├── routes/
│   │   ├── school.route.ts  
│   ├── lib/
│   │   ├── connectDB.ts  
│   ├── index.ts       
│── .env             # Environment variables
│── package.json     # Dependencies
│── README.md        
```

## Running the Project
1. Start the server:
   ```sh
   npm run dev
   ```
2. The server will start on `http://localhost:8000`.
3. Test the API using Postman or a browser.

## License
This project is licensed under the MIT License.


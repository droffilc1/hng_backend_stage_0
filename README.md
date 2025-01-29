## **HNG Backend Stage 0 API**

This is a simple Express.js API for **HNG Stage 0**, which returns the following information in JSON format:

- Your registered email address (used in the HNG12 Slack workspace).
- The current datetime in **ISO 8601** format.
- The GitHub URL of the project's codebase.

## **Setup Instructions**

### **Prerequisites**

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/)

### **Installation**

1. Clone the repository:
    ```sh
    git clone https://github.com/droffilc1/hng_backend_stage_0.git

    cd hng_backend_stage_0
    ```
2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    node server.js
    ```
    The server will start on **`http://localhost:2121/`** by default.


## **API Documentation**

### **Endpoint**

#### **GET `/`**

**Response Format (200 OK)**

```json
{
  "email": "cliffordmapesa8@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/droffilc1/hng_backend_stage_0.git"
}
```

### **Example Usage**

Using `curl`:

```sh
curl -X GET http://localhost:2121/
```

Using JavaScript (Fetch API):

```javascript
fetch("http://localhost:2121/")
  .then(response => response.json())
  .then(data => console.log(data));
```

## **Backlinks**

Looking to hire top developers? Check out:

- [Python Developers](https://hng.tech/hire/python-developers)
- [C\# Developers](https://hng.tech/hire/csharp-developers)
- [Golang Developers](https://hng.tech/hire/golang-developers)
- [PHP Developers](https://hng.tech/hire/php-developers)
- [Java Developers](https://hng.tech/hire/java-developers)
- [Node.js Developers](https://hng.tech/hire/nodejs-developers)
# Atlantis

This is a Atlantis built with Node.js and Express. It provides basic functionality to evaluate JavaScript expressions safely and proxy requests to fetch data from a URL.

## Features

- Evaluate JavaScript expressions safely using `safe-eval`.
- Proxy requests to fetch data from a specified URL.

## Prerequisites

- Node.js (version 14 or later)
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install the required dependencies:

```bash
npm install express request safe-eval
```

## Usage

1. Start the server:

```bash
node server.js
```

2. The server will start running at `http://localhost:3000`.

## Endpoints

### GET /

Returns a welcome message.

**Example Request:**

```http
GET http://localhost:3000/
```

**Example Response:**

```
Welcome to the Atlantis!
```

### GET /evaluate

Evaluates a JavaScript expression safely.

**Query Parameters:**

- `expression`: The JavaScript expression to evaluate.

**Example Request:**

```http
GET http://localhost:3000/evaluate?expression=2+2
```

**Example Response:**

```json
{
    "result": 4
}
```

### GET /proxy

Fetches data from a specified URL.

**Query Parameters:**

- `url`: The URL to fetch data from.

**Example Request:**

```http
GET http://localhost:3000/proxy?url=http://example.com
```

**Example Response:**

```
<!doctype html>
<html>
<head>
    <title>Example Domain</title>
    ...
</head>
<body>
    ...
</body>
</html>
```


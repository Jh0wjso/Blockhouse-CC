# Blockhouse CC

This project is a web application built using Next.js for the frontend and Django for the backend. The frontend uses TypeScript, Tailwind CSS, and Chart.js to create a dynamic user interface with various charts. The backend is built with Django, providing an API for managing data and serving it to the frontend.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Frontend](#frontend)
- [Backend](#backend)
- [Docker Setup](#docker-setup)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, you'll need to clone the repository and install the necessary dependencies.

```bash
git clone https://github.com/yourusername/blockhouse-cc.git
cd blockhouse-cc
```

### Backend (Django)

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Create a virtual environment and activate it:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
3. Install the Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Apply migrations:
   ```bash
   python manage.py migrate
   ```
5. Run the Django development server:
   ```bash
   python manage.py runserver
   ```

### Frontend (Next.js)

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install the Node.js dependencies:
   ```bash
   npm install
   ```
3. Run the Next.js development server:
   ```bash
   npm run dev
   ```

## Docker Setup

To run the entire application using Docker, make sure you have Docker and Docker Compose installed. Then, in the root directory of the project, run the following command:

```bash
sudo docker-compose up --build
```

This will build and start the following services:

- **Django Server**: Running on `http://localhost:8000`
- **Next.js Client**: Running on `http://localhost:3000`
- **Postgres Database**

## API Endpoints

The backend API is built using Django and serves data to the frontend. Below are some example endpoints:

- **GET /api/bar-chart-data**: Retrieves data for the bar chart.
- **GET /api/candlestick-chart-data**: Retrieves data for the candlestick chart.

Make sure to configure your frontend to point to these endpoints.

## Frontend

The frontend is built using Next.js with TypeScript and Tailwind CSS. The charts are implemented using Chart.js. Here's an overview of the key features:

- **Chart.js**: Used to create dynamic charts including Bar, Candlestick, Line, and Pie charts.
- **Tailwind CSS**: Provides utility-first styling for the frontend.
- **TypeScript**: Ensures type safety and better developer experience.

## Backend

The backend is built using Django and provides a RESTful API to serve data to the frontend. It also handles interactions with the PostgreSQL database.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

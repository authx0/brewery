<<<<<<< HEAD
# Brewery
test
=======
# Brewery Dashboard

## Overview
The Brewery Dashboard is a Spring Boot application designed to provide insights and management capabilities for breweries. It allows users to view and manage brewery data through a user-friendly web interface.

## Features
- View brewery information including name and location.
- Responsive dashboard layout.
- Integration with a database for persistent data storage.

## Technologies Used
- Java
- Spring Boot
- Thymeleaf
- Maven
- CSS for styling

## Project Structure
```
brewery-dashboard
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── example
│   │   │           └── brewerydashboard
│   │   │               ├── BreweryDashboardApplication.java
│   │   │               ├── controller
│   │   │               │   └── DashboardController.java
│   │   │               ├── model
│   │   │               │   └── BreweryData.java
│   │   │               ├── service
│   │   │               │   └── DashboardService.java
│   │   │               └── repository
│   │   │                   └── DataRepository.java
│   │   └── resources
│   │       ├── application.properties
│   │       ├── static
│   │       │   └── css
│   │       │       └── style.css
│   │       └── templates
│   │           └── dashboard.html
│   └── test
│       └── java
│           └── com
│               └── example
│                   └── brewerydashboard
│                       └── BreweryDashboardApplicationTests.java
├── pom.xml
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd brewery-dashboard
   ```
3. Build the project using Maven:
   ```
   mvn clean install
   ```
4. Run the application:
   ```
   mvn spring-boot:run
   ```
5. Access the dashboard at `http://localhost:8080`.

## Usage
Once the application is running, you can interact with the dashboard to view and manage brewery data. The interface is designed to be intuitive and user-friendly.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.
>>>>>>> bda134e (upload files)

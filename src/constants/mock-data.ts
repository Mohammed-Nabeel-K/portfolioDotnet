
import type { LucideIcon } from "lucide-react"; // Keep for type reference if used locally, but not for iconName
// Import specific icons ONLY if they are used for something other than being stored as a component in data
import { 
  Briefcase, GraduationCap, Award, 
  // Lucide icons used for skills and projects if not directly referenced
  CodeXml, Cpu, Server, Network, Blocks, Layers, Database, DatabaseZap, 
  Filter, KeyRound, UsersRound, Cookie, Gauge, FileText, GitFork, Github, 
  Container, Box, IterationCw, Shapes, TestTube2, TestTubes, Building,
  Lightbulb, Palette, Brain, FileCode, Cloud, ShieldCheck, Zap, BarChartBig,
  NotebookText, PanelTopOpen, Users, Repeat, CreditCard, ClipboardList, Settings2
} from 'lucide-react';


// --- Project Data ---
export interface Technology {
  name: string;
  iconName?: string; // Store the string name of the Lucide icon
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  dataAiHint: string;
  technologies: Technology[];
  category: string; 
  repoUrl?: string;
  liveUrl?: string;
  features?: string[];
}

export const projectsData: Project[] = [
  {
    id: "inventory-order-management",
    title: "Inventory & Order Management System",
    description: "A comprehensive system for managing inventory, customer orders, and stock movements, featuring a layered API architecture, role-based access, and detailed reporting.",
    longDescription: `
This project involves designing and implementing a robust Inventory & Order Management System. Key aspects include:
- **Database Design**: SQL database with tables for Users, Products, Customers, Orders, OrderItems, and StockMovements, including auditing fields and reorder levels.
- **API Architecture**: Built with ASP.NET Core Web API and EF Core, following a layered architecture (Controllers, Services, Repositories, DTOs). Secured with JWT authentication and role-based access control (Admin, Manager, Sales).
- **Core Functionalities**: User login, product viewing (with search/filter), order placement (atomically updating inventory), viewing specific order details, and manual stock updates for authorized users.
- **Business Rules**: Product availability checks, automatic stock reduction, logging stock movements, low stock alerts based on reorder levels, and role-specific product management.
- **Validation & Error Handling**: Global exception handling middleware, action logging (ILogger/Serilog), and prevention of orders for inactive/out-of-stock products.
- **Admin & Manager APIs**: Endpoints for adding/updating products, generating sales reports by date range, and viewing current inventory status.
- **Reporting**: Example: Monthly sales summary by user, detailing total orders, revenue, and top products sold.
- **Bonus - Automation**: Background services (IHostedService) for daily low stock alerts and automatic cancellation of old pending orders.
- **Bonus - Security & Performance**: JWT auth, caching, EF Core optimizations (AsNoTracking, projections), and query optimization with indexing.
    `,
    imageUrl: "https://placehold.co/800x600.png?text=Inventory+System",
    dataAiHint: "inventory management",
    technologies: [
      { name: "ASP.NET Core", iconName: "Server" },
      { name: "EF Core", iconName: "DatabaseZap" },
      { name: "SQL", iconName: "Database" },
      { name: "JWT", iconName: "KeyRound" },
      { name: "Layered Architecture", iconName: "Layers" },
      { name: "Serilog", iconName: "FileText" },
      { name: "Redis Cache", iconName: "Gauge" },
      { name: "IHostedService", iconName: "Settings2" },
      { name: "xUnit", iconName: "TestTube2" },
      { name: "Swagger", iconName: "PanelTopOpen" },
      { name: "Git", iconName: "GitFork" },
    ],
    category: "Backend System",
    repoUrl: "#", 
    liveUrl: "#", 
    features: [
      "Secure User Authentication & Authorization (JWT, RBAC)",
      "Comprehensive Product & Inventory Management",
      "Efficient Order Processing & Stock Control",
      "Role-Specific Data Access & Operations",
      "Detailed Sales and Inventory Reporting",
      "Automated Low Stock Alerts & Order Management (Bonus)",
      "Robust Error Handling & Logging",
      "Optimized API Performance & Security (Bonus)"
    ]
  },
  {
    id: "crm-system",
    title: "CRM System (Ongoing)",
    description: "Modular microservices-based CRM using .NET Core, Clean Architecture, CQRS, Dapper, and MySQL for enhanced scalability and maintainability.",
    longDescription: `
• Set up and constructed 7+ modular microservices using .NET Core, Clean Architecture, and CQRS to improve scalability and maintainability.
• Combined Dapper ORM with MySQL to optimize complex query performance and reduce data retrieval time.
• Built 100+ secure RESTful APIs implementing JWT-based authentication and Role-Based Access Control (RBAC).
• Used RabbitMQ for asynchronous communication between services, enhancing system decoupling and performance.
• Implemented Redis Cache to reduce database load and improve response times for frequently accessed data.
• Containerized services with Docker for consistent development and deployment workflows.
• Wrote 120+ unit and integration tests using xUnit to ensure application quality and prevent regressions.
• Configured structured logging and error tracking with Serilog to support observability and diagnostics.
• Improved system responsiveness and maintainability through architectural optimization and infrastructure enhancements.
• Leveraged version control and collaborated on codebase management using Git, contributing to over 150 commits, ensuring smooth integration and collaborative development within the team.
    `,
    imageUrl: "https://placehold.co/800x600.png?text=CRM+System",
    dataAiHint: "crm software",
    technologies: [
      { name: ".NET Core", iconName: "Cpu" }, 
      { name: "Microservices", iconName: "Blocks" }, 
      { name: "Clean Architecture", iconName: "Layers" }, 
      { name: "CQRS", iconName: "Repeat" },
      { name: "Dapper ORM", iconName: "Layers" }, 
      { name: "MySQL", iconName: "Database" }, 
      { name: "xUnit", iconName: "TestTube2" }, 
      { name: "RabbitMQ", iconName: "IterationCw" },
      { name: "Serilog", iconName: "FileText" },
      { name: "Redis Cache", iconName: "Gauge" },
      { name: "JWT", iconName: "KeyRound" },
      { name: "Docker", iconName: "Container" },
      { name: "Swagger", iconName: "PanelTopOpen" },
      { name: "Postman", iconName: "Network" },
      { name: "Agile Scrum", iconName: "IterationCw" }
    ],
    category: "Microservices",
    repoUrl: "#", 
    liveUrl: "#", 
    features: [
      "Modular Microservice Design", 
      "CQRS Pattern Implementation", 
      "Optimized Data Access with Dapper", 
      "Secure JWT Authentication & RBAC", 
      "Asynchronous Communication (RabbitMQ)",
      "Distributed Caching (Redis)",
      "Containerization (Docker)",
      "Comprehensive Testing (xUnit)",
      "Structured Logging (Serilog)"
    ]
  },
  {
    id: "belvoir",
    title: "Belvoir",
    description: "Custom tailoring and dress rental service with a .NET Core backend, Dapper, MySQL, and Razorpay integration for seamless e-commerce operations.",
    longDescription: `
• Led product development and prioritized features for custom tailoring and dress rental services.
• Produced and optimized 80+ backend APIs using .NET Core and Dapper, improving database performance with MySQL.
• Connected Razorpay payment gateway for secure transactions and seamless checkout experiences.
• Activated JWT authentication and Role-Based Access Control (RBAC) for secure access and data protection.
• Enhanced fashion accessibility by offering affordable rental options for premium outfits, increasing customer engagement.
• Boosted backend performance, reducing query execution times by optimizing SQL queries and improving system responsiveness.
• Managed version control and partnered on code quality using Git and GitHub, contributing to over 140 pull requests, ensuring smooth and efficient team collaboration.
• Planned backend architecture with scalability in mind, ensuring easy future growth for the platform.
• Worked with cross-functional teams, including frontend developers and designers, to ensure seamless integration of backend and frontend systems.
    `,
    imageUrl: "https://placehold.co/800x600.png?text=Belvoir+Fashion",
    dataAiHint: "fashion ecommerce",
    technologies: [
      { name: ".NET Core", iconName: "Cpu" }, 
      { name: "Dapper ORM", iconName: "Layers" }, 
      { name: "MySQL", iconName: "Database" }, 
      { name: "Azure", iconName: "Cloud" },
      { name: "JWT", iconName: "KeyRound" },
      { name: "Razorpay", iconName: "CreditCard" },
      { name: "Docker", iconName: "Container" },
      { name: "ClickUp", iconName: "ClipboardList" },
      { name: "Git", iconName: "GitFork" },
      { name: "GitHub", iconName: "Github" },
      { name: "Swagger", iconName: "PanelTopOpen" },
      { name: "Postman", iconName: "Network" },
      { name: "Bcrypt", iconName: "ShieldCheck" }
    ],
    category: "E-commerce",
    repoUrl: "#", 
    liveUrl: "#", 
    features: [
      "Product Ownership & Feature Prioritization", 
      "Optimized Backend APIs",
      "Secure Payment Gateway Integration (Razorpay)",
      "JWT Authentication & RBAC",
      "Scalable Backend Architecture",
      "Cross-functional Team Collaboration"
    ]
  },
  {
    id: "ecommerce-backend-monolith",
    title: "E-commerce Backend",
    description: "Backend for an e-commerce application using ASP.NET Core, EF Core, and SQL Server with monolithic architecture.",
    longDescription: `
This project involved developing the backend for an e-commerce application using ASP.NET Core, Entity Framework Core, and SQL Server, based on a monolithic architecture.

Key Features Implemented:
- User authentication and role-based access using JWT.
- Product and category management with full CRUD operations.
- Shopping cart functionality and order processing system with real-time stock and pricing updates.
- Secure payment integration using Razorpay for online transactions.
- APIs for an admin panel to manage users, orders, and inventory.
- Data handling performed with Entity Framework Core (code-first approach) targeting SQL Server.
- Code organized using a layered architectural pattern: Controllers, Services, and Repositories.
    `,
    imageUrl: "https://placehold.co/800x600.png?text=E-commerce+Backend",
    dataAiHint: "ecommerce backend",
    technologies: [
      { name: "ASP.NET Core", iconName: "Server" },
      { name: "Entity Framework Core", iconName: "DatabaseZap" },
      { name: "SQL Server", iconName: "Database" },
      { name: "JWT", iconName: "KeyRound" },
      { name: "Razorpay", iconName: "CreditCard" },
      { name: "Layered Architecture", iconName: "Layers" },
      { name: "Monolithic Architecture", iconName: "Building" }
    ],
    category: "E-commerce Backend",
    repoUrl: "#", 
    liveUrl: "#", 
    features: [
      "JWT Authentication & Role-Based Access",
      "Product & Category Management (CRUD)",
      "Shopping Cart & Order System",
      "Real-time Stock & Pricing Updates",
      "Razorpay Payment Integration",
      "Admin Panel APIs",
      "EF Core (Code-First) with SQL Server",
      "Layered Architecture (Controllers, Services, Repositories)"
    ]
  },
  {
    id: "car-price-prediction",
    title: "Car Price Prediction Using Machine Learning",
    description: "Predicting the selling price of used cars using machine learning techniques, based on features like brand, year, mileage, fuel type, and more.",
    longDescription: `
Project Overview:
This project focuses on predicting the selling price of used cars using machine learning techniques. It utilizes a dataset containing various car features such as brand, year of manufacture, kilometers driven, fuel type, transmission type, engine capacity, power, and more. The goal is to build a predictive model that estimates car prices accurately based on these inputs.

Key Features & Workflow:
Data Cleaning & Preprocessing:
- Loaded and cleaned a real-world dataset (Cardetails.csv)
- Removed unnecessary columns like torque
- Handled missing values and removed duplicate records
- Extracted car brand names from the name column
- Cleaned string-based numeric fields (e.g., mileage, engine, max_power)
- Encoded categorical variables (e.g., fuel type, transmission, seller type, owner)

Feature Selection & Transformation:
- Selected relevant features affecting the price
- Transformed categorical data into numerical format for model compatibility

Model Building:
- Split the dataset into training and testing sets using train_test_split
- Trained a Linear Regression model using Scikit-learn
- Evaluated the model performance using R² Score and Mean Squared Error (MSE)

Prediction:
- Built a test input model with realistic car attributes
- Successfully predicted the selling price of the car using the trained model

Outcome:
The model provides reliable price predictions for used cars based on detailed input attributes. This can be beneficial for buyers, sellers, or used car platforms to estimate fair market prices.

Future Enhancements:
- Implement more advanced algorithms like Random Forest, Gradient Boosting, or XGBoost for better accuracy
- Integrate the model into a web or mobile app for real-time usage
- Use one-hot encoding and feature scaling for more robust preprocessing
    `,
    imageUrl: "https://placehold.co/800x600.png?text=Car+Price+ML",
    dataAiHint: "machine learning car",
    technologies: [
      { name: "Python", iconName: "FileCode" },
      { name: "Pandas", iconName: "Table2" },
      { name: "NumPy", iconName: "Table2" }, // Table2 can represent tabular data handling
      { name: "Scikit-learn", iconName: "BrainCircuit" },
      { name: "Jupyter Notebook", iconName: "NotebookText" },
      { name: "Matplotlib", iconName: "BarChartBig" },
    ],
    category: "Machine Learning",
    repoUrl: "#", 
    liveUrl: "#", 
    features: [
      "Comprehensive Data Cleaning and Preprocessing",
      "Feature Selection and Transformation",
      "Linear Regression Model Training (Scikit-learn)",
      "Model Performance Evaluation (R² Score, MSE)",
      "Predictive Modeling for Used Car Prices",
      "Plans for Advanced Algorithms and App Integration"
    ]
  },
];

// --- Blog Data ---
export interface Article {
  slug: string;
  title: string;
  date: string; 
  excerpt: string;
  content: string; 
  tags: string[];
  imageUrl?: string;
  dataAiHint?: string;
}

export const articlesData: Article[] = [
  {
    slug: "mastering-async-await-dotnet",
    title: "Mastering async/await in .NET",
    date: "2024-05-15",
    excerpt: "Deep dive into asynchronous programming in .NET with C#, exploring best practices and common pitfalls.",
    content: `
## Introduction
Asynchronous programming is crucial for building responsive and scalable applications. In .NET, \`async\` and \`await\` keywords make it easier.

### Key Concepts
- \`Task\` and \`Task<TResult>\`
- Understanding the synchronization context
- Avoiding deadlocks

\`\`\`csharp
public async Task<string> GetDataAsync()
{
    // Simulate network latency
    await Task.Delay(1000);
    return "Data fetched successfully!";
}
\`\`\`

## Best Practices
1. Use \`ConfigureAwait(false)\` in library code.
2. Avoid \`async void\`.
3. Understand the implications of \`async Task Main\`.

More content here...
    `,
    tags: [".NET", "C#", "Async", "Performance"],
    imageUrl: "https://placehold.co/800x400.png?text=Async+Code",
    dataAiHint: "code abstract",
  },
  {
    slug: "my-dotnet-learning-journey",
    title: "My Journey Learning .NET – Tips from My First Year as a Developer",
    date: "2024-07-29",
    excerpt: "Hi everyone, I’m a developer working with .NET, and I’d like to share how I started this journey — from writing basic C# code to building actual APIs and backend systems. Looking back at my first year, every struggle taught me something valuable.",
    content: `## My Journey Learning .NET – Tips from My First Year as a Developer
Hi everyone,
I’m a developer working with .NET, and I’d like to share how I started this journey — from writing basic C# code to building actual APIs and backend systems. Looking back at my first year, every struggle taught me something valuable.

## Getting Started with .NET
I began by learning the fundamentals of C#, like classes, methods, OOP principles, and exception handling. Once I was comfortable with those, I started creating small console-based applications to apply what I had learned.

Then, I moved on to ASP.NET Core, where I explored how to create APIs, connect with databases, and work on real backend logic.

## What Helped Me Learn Effectively
I built mini projects to apply concepts practically.

I relied on official documentation and tutorial articles to understand new topics.

Watching video tutorials helped me visualize the code and workflows.

I spent a lot of time debugging, which strengthened my understanding of the framework.

## Key Concepts That Made a Difference
Understanding the middleware pipeline gave me control over how requests and responses were handled.

Learning about dependency injection made my code cleaner and easier to test.

Using async/await improved performance and scalability.

Implementing API versioning early helped me think ahead about future updates.

## Tools That Supported Me
Visual Studio – my main development environment.

Postman – essential for testing APIs.

Git – for version control.

Swagger – for documenting and interacting with my Web APIs.

## Lessons from Mistakes
Ignoring clean code practices early made future changes difficult.

I underestimated the importance of input validation at first.

Overlooking simple error messages cost me time — now I pay attention to every detail.

## Final Thoughts
.NET can feel huge at first, but with practice and the right mindset, it becomes manageable and enjoyable. Start small, stay consistent, and focus on building real things. You’ll be surprised how far you can go in just a year.
`,
    tags: [".NET", "C#", "Career", "Learning", "Beginner Tips"],
    imageUrl: "https://placehold.co/800x400.png?text=Learning+.NET",
    dataAiHint: "learning code",
  },
  {
    slug: "things-i-wish-i-knew-dotnet",
    title: "Things I Wish I Knew When I Started .NET Development",
    date: "2024-07-30",
    excerpt: "When I first started working with .NET, I was focused on building APIs quickly — but I didn't fully understand many of the powerful features built into the framework. Over time, I realized how some early lessons could have made my journey smoother and more efficient.",
    content: `## Things I Wish I Knew When I Started .NET Development
When I first started working with .NET, I was focused on building APIs quickly — but I didn't fully understand many of the powerful features built into the framework. Over time, I realized how some early lessons could have made my journey smoother and more efficient.

## Minimal Hosting Looks Simple — But Deserves Attention
With the minimal hosting model introduced in .NET 6, a lot happens behind the scenes in just a few lines of code. I initially just copied boilerplate setups, but later realized how critical it was to understand how services, middleware, and routing are configured in Program.cs.

## Dependency Injection Is Not Just for Large Applications
I used to create objects manually, not realizing how central dependency injection is in .NET applications. Once I got familiar with registering and injecting services properly, it made the code more modular, testable, and scalable.

## Middleware Gives You Control
At first, I ignored middleware, thinking it was only needed in complex apps. But later, I started using it for exception handling, logging, and authentication — and it gave me much more control over how requests and responses flow through the application.

## Add API Versioning Early
When I made changes to existing endpoints, I quickly understood the pain of not using API versioning. Planning for versions early helps you manage growth and support changes without breaking existing consumers.

## Use Async/Await Wherever Possible
Blocking operations might seem fine at first, but they impact performance as the app grows. Learning to use async/await for I/O-bound operations helped me build more responsive APIs and follow modern best practices.

## Enable Swagger from Day One
Once I added Swagger to my projects, everything became easier — from testing endpoints to sharing documentation with others. It’s an essential tool for working with APIs and speeds up collaboration across teams.

## Centralized Logging and Error Handling
Early in my journey, I had scattered try-catch blocks and inconsistent error messages. I later learned to use built-in logging features and custom exception handling middleware to manage this in one place. It made the app cleaner and easier to troubleshoot.

## Final Thought
.NET development has a learning curve, but once you understand the architecture and best practices, it becomes incredibly powerful. If you're just starting out, don't be afraid to dive deeper into how things work — it will save you time and frustration down the road.`,
    tags: [".NET", "C#", "Development Tips", "Best Practices", "Career"],
    imageUrl: "https://placehold.co/800x400.png?text=.NET+Insights",
    dataAiHint: "code development",
  },
  {
    slug: "lessons-from-real-world-dotnet-projects",
    title: "What I Learned from Building Real-World Projects in .NET",
    date: "2024-07-31",
    excerpt: "Learning from tutorials and documentation is helpful — but working on real-world projects taught me lessons that no course ever could. Each project challenged me differently and helped me grow as a developer. Here's what stood out the most from my practical experience with .NET.",
    content: `## What I Learned from Building Real-World Projects in .NET
Learning from tutorials and documentation is helpful — but working on real-world projects taught me lessons that no course ever could. Each project challenged me differently and helped me grow as a developer. Here's what stood out the most from my practical experience with .NET.

## Planning the Structure Before Writing Code
In my early projects, I jumped into coding without a clear structure. Over time, I realized the importance of planning — setting up layers like controllers, services, repositories, and models properly made everything more maintainable and scalable.

## Clean Architecture Makes a Difference
Initially, I built everything in a single layer, but as complexity increased, the code became hard to manage. Learning and applying concepts like Clean Architecture or layered architecture helped me separate concerns, making the codebase easier to test, extend, and debug.

## Writing APIs That Make Sense to Others
I used to name endpoints based on what made sense to me. But when I started working in teams or integrating with other apps, I realized the importance of clear API design, consistent naming, proper use of HTTP verbs, and returning useful responses.

## Validating Inputs Is Not Optional
I learned (the hard way) that assuming users will send correct data is risky. Adding model validation and proper error messages became a standard part of my development process. It’s one of the simplest ways to improve application quality.

## Testing — Even Basic — Goes a Long Way
At first, I skipped testing to “save time,” but that time often came back as debugging headaches. Eventually, I started writing unit tests for core logic and integration tests for APIs. It gave me confidence in my code and reduced surprises in production.

## Real Projects Expose Real Problems
When building apps like dashboards, management systems, or public APIs, I ran into actual issues like rate limits, authentication flaws, inconsistent data, or deployment troubles. These taught me practical lessons you rarely get from tutorials.

## Logging Is Invaluable in Real Environments
In local development, everything seems smooth. But once I deployed real projects, I learned the importance of structured logging and meaningful logs. They helped trace issues, monitor performance, and communicate better during support or debugging.

## Final Thought
Every real-world project has its own challenges, but each one is a chance to grow. Working on actual problems — not just textbook exercises — helped me learn more about writing maintainable, scalable, and secure .NET applications.
`,
    tags: [".NET", "C#", "Software Development", "Best Practices", "Project Experience"],
    imageUrl: "https://placehold.co/800x400.png?text=Real+Projects",
    dataAiHint: "project development",
  }
];

// --- Resume Data ---
export interface ResumeItem {
  id: string;
  type: 'experience' | 'education' | 'certification'; 
  title: string; 
  subtitle: string; 
  dateRange: string;
  descriptionPoints: string[];
  icon?: LucideIcon; 
}

export const resumeData: ResumeItem[] = [
  {
    id: "exp-bridgeon",
    type: "experience",
    title: "Dotnet Developer Intern",
    subtitle: "Bridgeon Solutions",
    dateRange: "Aug 2024 – Present",
    descriptionPoints: [
      "Developed scalable web applications using ASP.NET Core, C#, Entity Framework Core, and Dapper ORM for efficient data access and management.",
      "Designed and deployed RESTful Web APIs with complex business logic, data validation, pagination, sorting, and filtering.",
      "Created data access layers using EF Core (LINQ, Migrations) and Dapper (raw SQL, stored procedures).",
      "Established JWT-based authentication and role-based authorization for securing APIs and managing user access.",
      "Integrated Swagger for automated API documentation and Serilog for structured logging.",
      "Utilized Redis for distributed caching to improve performance and reduce database load.",
      "Managed cookies and session state to handle user sessions securely.",
      "Constructed custom middleware, applied async/await for request/response optimization.",
      "Ensured input validation, error handling, and response standardization for consistent API behavior.",
      "Conducted API testing with Postman and used Git for version control and collaborative development.",
      "Participated in Agile Scrum methodology, including sprint planning, stand-ups, and retrospectives.",
    ],
    icon: Briefcase,
  },
  {
    id: "edu-mca",
    type: "education",
    title: "MCA (Master of Computer Applications)",
    subtitle: "APJ Abdul Kalam Technological University",
    dateRange: "Sep 2022 – Apr 2024",
    descriptionPoints: [
      "Completed Master's degree focused on advanced computer science topics and software development.",
      "Gained in-depth knowledge of algorithms, data structures, and software engineering principles.",
      "Specialized in enterprise application development using the .NET framework.",
      "Participated in several group projects, enhancing teamwork and communication skills.",
    ],
    icon: GraduationCap
  },
  {
    id: "edu-bsc",
    type: "education",
    title: "BSc Computer Science",
    subtitle: "Calicut University",
    dateRange: "Aug 2018 – Apr 2021",
    descriptionPoints: [
      "Completed Bachelor's degree with a strong foundation in computer science principles.",
      "Studied core subjects including programming, database management, and operating systems.",
      "Developed a foundation in C, C++, Java, and Python programming languages.",
      "Undertook a final year project on 'Library Management System' using Java and MySQL.",
      "Active member of the college tech club."
    ],
    icon: GraduationCap
  },
  {
    id: "cert-dbms",
    type: "certification",
    title: "Data Base Management System",
    subtitle: "NPTEL",
    dateRange: "Completed Apr 2025", 
    descriptionPoints: [
      "NPTEL certification focusing on advanced database concepts, design, and management.",
      "Covered topics including relational algebra, SQL, normalization, and transaction management.",
      "Learned about database security and optimization techniques.",
      "Completed all modules and passed the final examination with distinction.",
      "Applied learned concepts in practical assignments and case studies."
    ],
    icon: Award
  },
  {
    id: "cert-cloud",
    type: "certification",
    title: "Cloud Computing Certification",
    subtitle: "NPTEL",
    dateRange: "Completed Apr 2024",
    descriptionPoints: [
      "NPTEL certification covering fundamental cloud computing principles, service models (IaaS, PaaS, SaaS), and deployment strategies.",
      "Explored various cloud platforms and virtualization technologies.",
      "Understood security considerations and best practices for cloud environments.",
      "Gained insights into cloud storage, networking, and compute services.",
      "Successfully completed course assignments and final assessment."
    ],
    icon: Award
  },
];

// --- Skills Data ---
export interface Skill {
  name: string;
  level: number; 
  category: string;
  iconName?: string; 
  description?: string;
}

export const skillCategories = [
  "Programming Languages",
  "Backend Technologies & APIs",
  "Database & ORM",
  "Security, Caching & Logging",
  "Version Control & DevOps",
  "Architectures & Methodologies",
  "Testing & Quality Assurance",
];

export const skillsData: Skill[] = [
  // Programming Languages
  { name: "C#", level: 95, category: "Programming Languages", iconName: "CodeXml", description: "Primary language for .NET development, proficient in advanced features, asynchronous programming, and LINQ." },
  
  // Backend Technologies & APIs
  { name: ".NET Core", level: 90, category: "Backend Technologies & APIs", iconName: "Cpu", description: "Building high-performance, cross-platform applications with .NET Core." },
  { name: "ASP.NET Core", level: 90, category: "Backend Technologies & APIs", iconName: "Server", description: "Developing robust RESTful APIs, Web APIs, and microservices using ASP.NET Core." },
  { name: "REST API", level: 90, category: "Backend Technologies & APIs", iconName: "Network", description: "Designing and implementing RESTful APIs following best practices for web services." },
  { name: "Web API", level: 90, category: "Backend Technologies & APIs", iconName: "Server", description: "Creating HTTP services using ASP.NET Web API for broad client reach." },
  { name: "Microservices", level: 85, category: "Backend Technologies & APIs", iconName: "Blocks", description: "Developing and deploying scalable microservices-based applications." },


  // Database & ORM
  { name: "Microsoft SQL Server", level: 90, category: "Database & ORM", iconName: "Database", description: "Experience with MS SQL Server, including T-SQL, database design, and optimization." },
  { name: "MySQL", level: 80, category: "Database & ORM", iconName: "Database", description: "Proficient with MySQL for relational database management and development." },
  { name: "Entity Framework", level: 85, category: "Database & ORM", iconName: "DatabaseZap", description: "Utilizing Entity Framework (including EF Core) for object-relational mapping in .NET applications." },
  { name: "Dapper ORM", level: 80, category: "Database & ORM", iconName: "Layers", description: "Using Dapper for high-performance data access and lightweight ORM capabilities." },
  { name: "ADO.NET", level: 75, category: "Database & ORM", iconName: "Database", description: "Working with ADO.NET for direct database interaction and fine-grained control over data operations." },
  { name: "LINQ", level: 90, category: "Database & ORM", iconName: "Filter", description: "Leveraging Language Integrated Query (LINQ) for expressive and efficient data querying in C#." },

  // Security, Caching & Logging
  { name: "JSON Web Token (JWT)", level: 85, category: "Security, Caching & Logging", iconName: "KeyRound", description: "Implementing secure authentication and authorization using JWT for stateless applications." },
  { name: "Role-based Access Control (RBAC)", level: 80, category: "Security, Caching & Logging", iconName: "UsersRound", description: "Designing and implementing RBAC systems to manage user permissions effectively." },
  { name: "Cookies", level: 75, category: "Security, Caching & Logging", iconName: "Cookie", description: "Utilizing cookies for session management and storing user-specific information securely." },
  { name: "Redis Cache", level: 80, category: "Security, Caching & Logging", iconName: "Gauge", description: "Integrating Redis for distributed caching to improve application performance and scalability." },
  { name: "Serilog", level: 85, category: "Security, Caching & Logging", iconName: "FileText", description: "Implementing structured logging with Serilog for comprehensive application monitoring and diagnostics." },

  // Version Control & DevOps
  { name: "Git", level: 90, category: "Version Control & DevOps", iconName: "GitFork", description: "Proficient in Git for version control, including branching, merging, and collaboration workflows." },
  { name: "GitHub", level: 90, category: "Version Control & DevOps", iconName: "Github", description: "Utilizing GitHub for repository hosting, CI/CD pipelines (GitHub Actions), and collaborative development." },
  { name: "Docker", level: 80, category: "Version Control & DevOps", iconName: "Container", description: "Containerizing applications with Docker for consistent development, testing, and deployment environments." },
  { name: "Docker Compose", level: 75, category: "Version Control & DevOps", iconName: "Box", description: "Using Docker Compose to define and manage multi-container Docker applications." },

  // Architectures & Methodologies
  { name: "Agile (Scrum)", level: 90, category: "Architectures & Methodologies", iconName: "IterationCw", description: "Experienced in Agile development methodologies, particularly Scrum, for iterative and collaborative project delivery." },
  { name: "Object-Oriented Programming (OOP)", level: 95, category: "Architectures & Methodologies", iconName: "Shapes", description: "Strong understanding and application of OOP principles (Encapsulation, Inheritance, Polymorphism)." },
  { name: "Monolithic Architecture", level: 80, category: "Architectures & Methodologies", iconName: "Building", description: "Developing and maintaining applications based on monolithic architectural patterns." },
  { name: "Three-Layer Architecture", level: 85, category: "Architectures & Methodologies", iconName: "Layers", description: "Designing applications using the classic N-Tier/Three-Layer architecture for separation of concerns." },
  { name: "Clean Architecture", level: 80, category: "Architectures & Methodologies", iconName: "Layers", description: "Applying Clean Architecture principles to build maintainable, testable, and independent systems." },
  
  // Testing & Quality Assurance
  { name: "Unit Testing", level: 85, category: "Testing & Quality Assurance", iconName: "TestTube2", description: "Writing comprehensive unit tests to ensure code quality and reliability." },
  { name: "Integration Testing", level: 80, category: "Testing & Quality Assurance", iconName: "TestTubes", description: "Performing integration tests to verify interactions between different components and services." },
  { name: "xUnit", level: 85, category: "Testing & Quality Assurance", iconName: "TestTube2", description: "Using xUnit.net as a primary framework for writing unit tests in .NET applications." },
];

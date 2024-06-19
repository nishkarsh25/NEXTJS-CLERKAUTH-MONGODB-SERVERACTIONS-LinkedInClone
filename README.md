# NEXTJS-CLERKAUTH-MONGODB-SERVERACTIONS-LinkedInClone

Welcome to the NEXTJS project! This comprehensive guide will walk you through every aspect of this project, including its structure, setup instructions, usage, API endpoints, backend, frontend, contributing guidelines, license information, and how to get in touch for support or inquiries.

## Introduction

LinkedIn Clone is a web application designed to replicate the features and user experience of LinkedIn, a popular social networking platform for professionals. It leverages Next.js for server-side rendering and TypeScript for type safety and enhanced developer experience. Users can create profiles, share posts, interact with connections, and stay updated with industry news.


## Features

### Authentication and User Management

- **User Registration**: Secure registration process using Clerk authentication.
- **Login and Logout**: Seamless login and logout functionalities for users.
- **Profile Management**: Users can update their profiles, including profile photos and personal information.

### Social Networking Features

- **Create and Share Posts**: Users can create posts with text content and optional images.
- **Like and Comment**: Interactive features for liking posts and leaving comments.
- **View Connections**: Ability to view and manage connections, similar to LinkedIn's networking capabilities.

### News and Updates

- **News Section**: Dedicated section for displaying industry news and updates.
- **Read More**: Clickable links to read full articles or news pieces.

### UI Components and Design

- **Responsive Design**: Utilizes Tailwind CSS for responsive and modern UI design.
- **Icons**: Lucide Icons library for graphical elements and icons.




## Live Demo

You can try out the live demo of the app [here](https://nextjs-oneentry-headless-cms-blogapp.onrender.com/).

## Folder Structure
```
linkedin-clone/
├── .clerk/                         # Clerk authentication configuration (if using Clerk)
├── .git/                           # Git repository (if initialized)
├── .github/                        # GitHub Actions workflows (if using GitHub Actions)
├── .next/                          # Next.js build output (automatically generated)
├── components/                     # React components
│   ├── Feed.tsx                    # Component for displaying user feed
│   ├── News.tsx                    # Component for displaying news
│   ├── Sidebar.tsx                 # Sidebar component
│   ├── Post.tsx                    # Component for displaying a single post
│   ├── PostContent.tsx             # Component for displaying post content
│   ├── SocialOptions.tsx           # Component for social interactions on a post
│   ├── CommentInput.tsx            # Component for adding comments
│   ├── Comments.tsx                # Component for displaying comments
│   └── shared/
│       └── ProfilePhoto.tsx        # Shared component for user profile photo
├── lib/                            # Backend logic and utilities
│   ├── db.ts                       # Database connection setup (MongoDB, etc.)
│   ├── serveractions.ts            # Server-side actions (API handlers, CRUD operations)
│   ├── utils.ts                    # Utility functions (file handling, data manipulation)
│   └── clerkConfig.ts              # Clerk authentication configuration (if using Clerk)
├── models/                         # Data models (Post, User, Comment)
│   ├── post.model.ts               # Post data model definition
│   ├── user.model.ts               # User data model definition
│   └── comment.model.ts            # Comment data model definition
├── app/                          # Next.js pages
│   ├── layout.tsx                   # Custom App component (layout, global styles)
│   ├── pages.tsx                   # Homepage
│   ├── api/                        # API routes
│   │   ├── posts/
│   │   │   ├── [postId]/
│   │   │   │   ├── like.ts         # API endpoint for liking a post
│   │   │   │   ├── dislike.ts      # API endpoint for disliking a post
│   │   │   │   ├── comment.ts      # API endpoint for adding a comment to a post
│   │   │   │   └── index.ts        # API endpoint for fetching post details
│   │   │   └── index.ts            # API endpoint for fetching all posts
│   ├── login.tsx                   # Login page
│   ├── feed.tsx                    # Feed page
│   ├── news.tsx                    # News page
│   └── _error.tsx                  # Error page (custom error handling)
├── public/                         # Static assets (images, fonts)
│   └── banner.jpg                  # Example banner image
├── styles/                         # CSS styles (or SCSS, Tailwind CSS, etc.)
│   ├── globals.css                 # Global styles (reset, typography)
│   └── Home.module.css             # Component-specific styles (CSS Modules)
├── tests/                          # Test files (unit tests, integration tests)
├── .gitignore                      # Git ignore file
├── next.config.js                  # Next.js configuration file
├── package.json                    # Node.js dependencies and scripts
├── tsconfig.json                   # TypeScript configuration file
└── README.md                       # Project documentation (README)



```



## GIF's

<img src="https://github.com/nishkarsh25/NEXTJS-CLERKAUTH-MONGODB-SERVERACTIONS-LinkedInClone/blob/main/Screenshots/ss1.gif" alt="Screenshot 1" width="1000"> 


## Technologies Used

- **Next.js 14**: React framework with server-side rendering and routing capabilities.
- **TypeScript**: Adds static typing to JavaScript for improved developer experience and code quality.
- **App Router**: Next.js's built-in routing system for handling client-side navigation and dynamic routing.
- **oneentry**: API client for interacting with external data sources, used here for fetching blog content.
- **Tailwind CSS**: Utility-first CSS framework for styling components, providing a scalable and maintainable CSS solution.
- **ESLint & Prettier**: Tools for code linting and formatting, ensuring consistent code style and catching potential errors.
- **GitHub Actions**: Implements continuous integration for automated testing and deployment workflows.


## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/NEXTJS-CLERKAUTH-MONGODB-SERVERACTIONS-LinkedInClone.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   

3. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## API Endpoints

### Get All Posts

- **Description:** Fetches all posts from the server.
- **Method:** `GET`
- **Endpoint:** `/api/posts`

### Create a Post

- **Description:** Creates a new post.
- **Method:** `POST`
- **Endpoint:** `/api/posts`

### Like a Post

- **Description:** Likes a specific post.
- **Method:** `POST`
- **Endpoint:** `/api/posts/:postId/like`

### Dislike a Post

- **Description:** Removes a like from a specific post.
- **Method:** `POST`
- **Endpoint:** `/api/posts/:postId/dislike`

### Get Post Likes

- **Description:** Retrieves likes for a specific post.
- **Method:** `GET`
- **Endpoint:** `/api/posts/:postId/like`

### Create a Comment

- **Description:** Adds a comment to a specific post.
- **Method:** `POST`
- **Endpoint:** `/api/posts/:postId/comments`

### Delete a Comment

- **Description:** Deletes a comment from a specific post.
- **Method:** `DELETE`
- **Endpoint:** `/api/posts/:postId/comments/:commentId`


## Server Actions

### getAllPosts

- **Description:** Retrieves all posts stored in the database.
- **Implementation:** This function fetches all posts asynchronously from the MongoDB database using Mongoose.

### createPostAction

- **Description:** Creates a new post and stores it in the database.
- **Implementation:** This action accepts text content and an optional image file, uploads the image to a cloud storage service (if provided), and then saves the post details in MongoDB using Mongoose.

### likePostAction

- **Description:** Adds a user's like to a specific post.
- **Implementation:** This action updates the likes array for a post document in MongoDB, ensuring that each user can like a post only once.

### dislikePostAction

- **Description:** Removes a user's like from a specific post.
- **Implementation:** This action removes a user's like from the likes array of a post document in MongoDB, effectively reversing the operation of `likePostAction`.

### createCommentAction

- **Description:** Posts a new comment on a specific post.
- **Implementation:** This action adds a new comment to the comments array of a post document in MongoDB, associating the comment with the corresponding post.

### deleteCommentAction

- **Description:** Deletes a comment from a specific post.
- **Implementation:** This action removes a comment from the comments array of a post document in MongoDB, ensuring that only authorized users can delete comments they have posted.

These server actions encapsulate the core functionalities of interacting with posts and comments within the LinkedIn clone application. Each action is designed to manage specific operations related to posts and comments stored in the MongoDB database. Adjustments can be made based on specific business logic and security requirements.




## How to Use

### Logging In

1. **Navigate to the Homepage**

   - Open the application in your web browser.

2. **Click on Login**

   - If you have an account, click on the "Login" button. If not, you can register first.

### Creating a Post

1. **Navigate to the Feed Section**

   - Once logged in, click on the "Feed" section from the navigation menu.

2. **Click on New Post**

   - Click on the "New Post" button to create a new post.

3. **Fill out the Form**

   - Enter your message in the text input and optionally upload an image.

4. **Click Post**

   - Click the "Post" button to publish your post.

### Interacting with Posts

- **Like a Post**
  
  - Click on the "Like" button to like a post.

- **Comment on a Post**
  
  - Click on the "Comment" button to leave a comment on a post.




## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.



## Credits

This project uses the following open-source technologies and libraries:

- [Next.js](https://nextjs.org/): A React framework for server-side rendering and static site generation.
  
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
  
- [Shadcn UI](https://shadcn.dev/): A component library for building user interfaces.
  
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
  
- [Lucide Icons](https://lucide.dev/): Icon library used for theme toggle icons (Sun and Moon).

- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework used for responsive and customizable styling.
  
- [Clerk](https://clerk.dev/): A user authentication and identity management system.

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas): Cloud-based MongoDB database service.

- [Render](https://render.com/): Cloud platform for deploying and scaling web applications and APIs.


Each of these technologies and libraries plays a crucial role in the functionality and design of the Blog App. Please visit their respective websites or repositories to learn more about how they can be used in your projects.


## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com




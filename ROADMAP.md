# Portfolio Development Roadmap

This document outlines the step-by-step plan for building a streamlined and professional portfolio website. The development process is broken down into smaller, manageable parts to ensure a clean and maintainable codebase.

## 1. Foundation and Setup

The first step is to establish a solid foundation for the project.

-   **1.1. Project Initialization:**
    -   [x] Set up a new Next.js project with TypeScript.
    -   [x] Integrate Tailwind CSS for styling.
-   **1.2. Database and ORM:**
    -   [x] Configure Prisma as the Object-Relational Mapper (ORM).
    -   [ ] Connect Prisma to a SQLite database for local development and a more robust database (e.g., PostgreSQL) for production. *(Current API writes to JSON file)*
    -   [x] Define the `Project` model in the Prisma schema.
-   **1.3. Design System:**
    -   [ ] Define a consistent color palette in `tailwind.config.js`.
    -   [ ] Establish a typographic scale (font sizes, weights, and families).
    -   [ ] Set up a spacing system for margins, padding, and gaps.

## 2. Core Components

Create a set of reusable components that will be used throughout the application.

-   **2.1. Navbar Component:**
    -   [ ] Design a responsive navigation bar.
    -   [ ] Include links to the Home, Projects, About, and Contact pages.
-   **2.2. Footer Component:**
    -   [ ] Design a simple and clean footer.
    -   [ ] Include links to social media profiles and a copyright notice.
-   **2.3. ProjectCard Component:**
    -   [x] Design a card to display a single project.
    -   [ ] Include the project's title, a short description, and a thumbnail image.
    -   [ ] Add a link to the full project details or a live demo.
-   **2.4. ProjectList Component:**
    -   [x] Create a component that fetches and displays a list of projects using the `ProjectCard` component.
    -   [ ] Implement a responsive grid layout.

## 3. Pages

Build the main pages of the portfolio.

-   **3.1. Home Page:**
    -   [x] Create a compelling hero section with a brief introduction.
    -   [ ] Display a selection of featured projects.
-   **3.2. Projects Page:**
    -   [ ] Display a complete list of all projects using the `ProjectList` component.
    -   [ ] Add filtering or categorization options.
-   **3.3. About Page:**
    -   [ ] Provide a more detailed background, including skills and experience.
    -   [ ] Include a downloadable resume.
-   **3.4. Contact Page:**
    -   [ ] Create a contact form for inquiries.
    -   [ ] Include an email address and links to professional profiles.

## 4. Backend and Data Management

Develop the backend API to manage project data.

-   **4.1. Fetch Projects API:**
    -   [ ] Create an API route to fetch all projects from the database.
-   **4.2. Add Project API:**
    -   [x] Create an API route to add a new project.
    -   [x] Handle image uploads and store the image path in the public folder.
    -   [ ] **CRITICAL: Update API to store project metadata in the database using Prisma, instead of `lib/projects.json`.**
-   **4.3. Update Project API:**
    -   [ ] Create an API route to update an existing project.
-   **4.4. Delete Project API:**
    -   [ ] Create an API route to delete a project.

## 5. Admin and Content Management

Build a secure area for managing the portfolio content.

-   **5.1. Admin Page:**
    -   [ ] Create a dedicated page for project management, accessible only to the admin.
    -   [ ] Display a table of all projects with options to edit or delete them.
-   **5.2. Authentication:**
    -   [ ] Implement a secure login system for the admin page (e.g., using NextAuth.js).
-   **5.3. Project Form:**
    -   [ ] Create a form for adding and editing projects.
    -   [ ] Include fields for the title, description, image, and other project details.

## 6. Final Touches and Deployment

Add the finishing touches and deploy the application.

-   **6.1. Animations and Transitions:**
    -   [ ] Add subtle animations and transitions to enhance the user experience.
-   **6.2. Optimization:**
    -   [ ] Optimize images and other assets for fast loading times.
    -   [ ] Ensure the website is fully responsive and accessible.
-   **6.3. Deployment:**
    -   [ ] Deploy the application to a hosting platform like Vercel or Netlify.
    -   [ ] Set up a custom domain.

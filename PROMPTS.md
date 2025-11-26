# Copilot Prompts

This file stores the prompts generated for Copilot to assist with the development of the portfolio website. Each prompt is associated with a specific task from the `ROADMAP.md`.

## 3. Pages

### 3.1. Home Page / 2.4. ProjectList Component
**Roadmap Task:** Update the frontend (ProjectList component or its parent page) to fetch project data from the new `/api/projects` endpoint.

**Prompt for Copilot:**
```
Copilot, I need your help to update the frontend of my Next.js project to fetch and display project data from our new API endpoint.

**Goal:** Modify the `app/page.tsx` file to fetch project data from `/api/projects` and pass it to the `ProjectList` component.

**Details:**
*   **File:** Modify `app/page.tsx`.
*   **Data Fetching:** Since this is a Server Component in Next.js App Router, you should fetch the data directly. Use `fetch` to make a `GET` request to our `/api/projects` endpoint.
*   **Data Handling:**
    *   The `fetch` call should be made within the `Home` component function.
    *   Add the `{ cache: 'no-store' }` option to the `fetch` call to ensure the data is always fresh.
    *   Parse the JSON response and extract the `projects` array.
*   **Component Usage:** Pass the fetched `projects` array as a prop to the `ProjectList` component.
*   **Error Handling:** Wrap the `fetch` call in a `try/catch` block to handle potential network or server errors gracefully. Log any errors to the console.
*   **Types:** Ensure the fetched data is correctly typed. You might need to define a `Project` interface.

**Expected Code Structure (for app/page.tsx):**

```typescript
import ProjectList from "./components/project-list";
// ... other imports

// Define the Project type/interface if not already available globally
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  createdAt: string;
}

export default async function Home() {
  let projects: Project[] = [];
  try {
    // Note: Construct the full URL for server-side fetch
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.statusText}`);
    }
    const data = await response.json();
    projects = data.projects; // Adjust if the API returns a different structure
  } catch (error) {
    console.error("Error fetching projects:", error);
    // Optional: Render a fallback UI
  }

  return (
    <main
      className="grid mx-auto justify-center max-w-2xl"
      style={{ gap: "var(--size-4xl)", margin: "var(--size-4xl) auto" }}>
      {/* ... other sections */}
      <section>
        <h2>My Projects</h2>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
```

## 4. Backend and Data Management

### 4.1. Fetch Projects API
**Roadmap Task:** Create an API route to fetch all projects from the database.

**Prompt for Copilot:**
```
Copilot, I need your help to create a new API route in my Next.js project.

**Goal:** Create an API endpoint that fetches all projects from the database using Prisma and returns them as a JSON response.

**Details:**
*   **File:** Create a new file at `app/api/projects/route.ts`.
*   **Method:** The API should handle `GET` requests.
*   **Prisma Client:** Use the `prisma` client imported from `@/lib/prisma-client`.
*   **Logic:**
    *   In the `GET` function, use `prisma.project.findMany()` to retrieve all projects.
    *   Return a `NextResponse.json()` with the fetched projects.
    *   Include basic error handling for database access.

**Expected Code Structure (rough outline):**

```typescript
// app/api/projects/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma-client';

export async function GET(request: Request) {
  try {
    // Fetch projects using prisma.project.findMany()
    // Return NextResponse.json(projects)
  } catch (error) {
    // Handle errors and return an appropriate NextResponse.json() error message
  }
}
```
```

### 4.2. Add Project API
**Roadmap Task:** Update API to store project metadata in the database using Prisma, instead of `lib/projects.json`.

**Prompt for Copilot:**
```
Copilot, I need your help to refactor an existing API route in my Next.js project.

**Goal:** Modify the `POST` function in `app/api/upload-project/route.ts` to save project data to the database using Prisma instead of writing to a JSON file.

**Details:**
*   **File:** `app/api/upload-project/route.ts`.
*   **Prisma Client:** Import the `prisma` client from `@/lib/prisma-client`.
*   **Logic:**
    *   Remove the code that reads from and writes to `lib/projects.json`.
    *   After the image is saved to the filesystem, use `prisma.project.create()` to save the new project's `title`, `description`, and `image` path to the database.
    *   Return a JSON response with a success message and the newly created project object.
    *   Wrap the database operation in a try/catch block for error handling.
```
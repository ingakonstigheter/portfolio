# Project Overview

This is a portfolio website built with Next.js, React, and TypeScript. It uses Tailwind CSS for styling and has a backend that handles project uploads. The project is set up to use Prisma with a SQLite database, but currently, project data is being stored in a JSON file.

## Key Technologies

-   **Framework:** [Next.js](https://nextjs.org/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Database:** [Prisma](https://www.prisma.io/) with [SQLite](https://www.sqlite.org/index.html) (schema defined, but not currently used for project storage)
-   **Linting:** [ESLint](https://eslint.org/)

## Project Structure

-   `app/`: Contains the main application code, including pages and components.
-   `app/api/`: Contains the API routes.
-   `app/components/`: Contains the reusable React components.
-   `lib/`: Contains helper functions, type definitions, and the project data.
-   `prisma/`: Contains the database schema and migration files.
-   `public/`: Contains the static assets, including uploaded project images.

## Building and Running

To get the project up and running, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at [http://localhost:3000](http://localhost:3000).

## Development Conventions

### Data Storage

Currently, project data is stored in `lib/projects.json`. The API route at `app/api/upload-project/route.ts` handles writing to this file.

The Prisma schema for a `Project` model is defined in `prisma/schema.prisma`, but it is not currently being used by the API. To use the database, the API route would need to be updated to use the Prisma client.

### Linting

The project uses ESLint for code linting. To run the linter, use the following command:

```bash
npm run lint
```

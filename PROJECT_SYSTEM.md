# Project Management System

## Overview

This project implements a content management system for your portfolio using **Prisma** with **SQLite** for local development. It allows you to upload projects with text and images, which are then displayed on your portfolio.

## Architecture

### Data Layer (`lib/projectData.ts`)

Separated data access functions that can be easily migrated to a database later:

- `getAllProjects()` - Fetch all projects ordered by creation date
- `getProjectById(id)` - Fetch a single project
- `createProject(data)` - Create a new project
- `updateProject(id, data)` - Update a project
- `deleteProject(id)` - Delete a project

### Components

#### `ProjectCard` (`app/components/ProjectCard.tsx`)

Displays a single project with:

- Image preview
- Title
- Description (truncated to 120 characters)
- Creation date
- Hover animation effects

#### `ProjectList` (`app/components/ProjectList.tsx`)

Renders a responsive grid of project cards:

- Responsive layout (auto-fill with min 300px columns)
- Empty state message
- Uses CSS variables for spacing

### API Routes

#### `POST /api/upload-project`

Handles project uploads:

1. Accepts FormData with `title`, `description`, and `image`
2. Saves image to `public/uploads/`
3. Saves project metadata to database using Prisma
4. Returns success/error response

### Database

**Prisma Schema** (`prisma/schema.prisma`):

```prisma
model Project {
  id          Int     @id @default(autoincrement())
  title       String
  description String
  image       String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

**Database**: SQLite (local file: `dev.db`)

## Setup & Installation

1. **Dependencies installed**:

   ```bash
   npm install @prisma/client prisma
   ```

2. **Database initialized**:

   ```bash
   npx prisma migrate dev --name init
   ```

3. **Prisma Client generated**:
   ```bash
   npx prisma generate
   ```

## Usage

### Upload a Project

1. Navigate to `/admin`
2. Fill in the form with title, description, and image
3. Click "Upload Project"
4. The project will be saved to the database and displayed on the homepage

### View Projects

Projects are automatically fetched and displayed on the homepage in a responsive grid.

## Future Enhancements

- [ ] Migrate to PostgreSQL/MySQL for production
- [ ] Add project editing/deletion UI
- [ ] Add image optimization and CDN support
- [ ] Implement authentication for admin page
- [ ] Add project categories/tags
- [ ] Add pagination for large project lists

## File Structure

```
lib/
├── projectData.ts          # Data access functions
├── prisma.ts               # Prisma client singleton
└── generated/prisma/       # Generated Prisma types

app/
├── components/
│   ├── ProjectCard.tsx     # Individual project card component
│   └── ProjectList.tsx     # Project list grid component
├── api/upload-project/
│   └── route.ts            # Upload endpoint
└── page.tsx                # Homepage with projects

prisma/
├── schema.prisma           # Database schema
└── migrations/             # Database migrations

public/uploads/            # Uploaded images directory
```

# Projects Page Documentation

## Overview
The ProjectsPage.vue is a comprehensive display of IT projects and technical skills on a personal webpage. It serves as a portfolio showcase with search capabilities and technology visualization.

## Current Features

### 1. Project Display Section
**Component**: ProjectCard.vue
**Functionality**:
- **Grid Layout**: Projects displayed in a responsive grid (1 column on mobile)
- **Project Information Display**:
  - Project name and ID
  - Status badges (Active, Staging, Archived) with color coding
  - Category badges (Production, Internal, Demo) with color coding
  - Date range with smart formatting
  - Role and company information
  - Project description
  - Achievements and challenges (when available)
  - Client information and team size
  - External links (GitHub, Demo, Documentation)
  - Technology tags for each project

**Visual Features**:
- Hover effects with scaling and background color transitions
- Status/category color coding (green for active/production, blue for staging/internal, gray for archived/demo)
- Responsive layout adapting to screen sizes

### 2. Search Functionality
**Current Implementation**:
- **Text-based search** with real-time filtering
- **Search scope** includes:
  - Project name
  - Description
  - Company name
  - Role
  - Technologies used
- **Case-insensitive search**
- **Real-time filtering** with Vue computed properties
- **No results message** when search yields no matches
- **Search placeholder** in Polish: "Szukaj projektów..."

### 3. Technology Display Section
**Component**: TechnologyCard.vue
**Functionality**:
- **Technology Statistics**: Shows project count for each technology
- **Skill Level Visualization**: Progress bars showing proficiency (1-5 scale)
- **Layered Organization**: Technologies grouped by layers:
  - Language (PHP, JavaScript, Python, etc.)
  - Frontend (Vue.js, React, HTML, CSS, etc.)
  - Backend (Laravel, Django, FastAPI, etc.)
  - Database (PostgreSQL, MySQL, Microsoft SQL Server)
  - DevOps (Docker, Linux, Apache, etc.)
  - Tools (Git, XML, EDI, etc.)

**Visual Features**:
- **Grouped display** by technology layers
- **Progress bars** with animated skill levels
- **Hover effects** with background transitions
- **Project count indicators** showing usage across projects

### 4. Data Management
**Data Sources**:
- `src/data/projects.ts`: Contains 18 projects from 2010-2025
- `src/data/technologies.ts`: Contains 39 base technologies with skill levels
- `src/utils/experience.ts`: Utility functions for data processing

**Data Processing**:
- **Technology Statistics**: Automatically calculates project count per technology
- **Layer Grouping**: Organizes technologies by predefined layers
- **Sorting**: Technologies sorted by usage frequency (project count)

### 5. Responsive Design
- **Mobile-first approach** with responsive grid layouts
- **Adaptive columns**: 1 column on mobile, 2-3 columns on larger screens
- **Flexible spacing** and typography scaling
- **Touch-friendly** hover states

## Technical Architecture

### Components Structure
```
ProjectsPage.vue (Main container)
├── ProjectCard.vue (Individual project display)
│   ├── Badge.vue (Status/category badges)
│   ├── Link.vue (External links)
│   └── Tag.vue (Technology tags)
└── TechnologyCard.vue (Individual technology display)
```

### Data Flow
1. Projects and base technologies imported from data files
2. Technology statistics calculated using utility functions
3. Technologies grouped by layers and sorted by usage
4. Search filtering applied in real-time via computed properties
5. Filtered results rendered in responsive grid layout

### Styling
- **TailwindCSS** for utility-first styling
- **Custom hover animations** with scale and shadow effects
- **Color-coded badges** for visual categorization
- **Gradient backgrounds** and backdrop blur effects
- **Smooth transitions** (300ms duration) for interactive elements

## Current Limitations & Improvement Opportunities

### Search & Filtering
- **Limited to text search** - no advanced filtering by:
  - Technology stack
  - Project category
  - Date ranges
  - Project status
  - Company/client
- **No search highlighting** in results
- **No search history** or suggestions
- **No faceted search** capabilities

### Animations & Transitions
- **Basic hover effects** only
- **No page load animations**
- **No staggered animations** for grid items
- **No smooth filtering transitions** when search results change
- **No skeleton loading states**

### User Experience
- **No sorting options** for projects (by date, relevance, etc.)
- **No pagination** or infinite scroll for large datasets
- **No detailed view** or modal for projects
- **No technology filtering** from technology section to projects
- **No export/share** functionality

## Data Statistics (Current)
- **Total Projects**: 18 (spanning 2010-2025)
- **Total Technologies**: 39 unique technologies
- **Technology Layers**: 6 distinct layers
- **Active Projects**: 6 currently active
- **Companies Represented**: 3 main companies (Skłodowscy, DEV Made IT, Freelance)

## File Dependencies
- `/src/components/pages/ProjectsPage.vue` - Main component
- `/src/components/ProjectCard.vue` - Project display component
- `/src/components/TechnologyCard.vue` - Technology display component
- `/src/data/projects.ts` - Project data source
- `/src/data/technologies.ts` - Technology data source
- `/src/utils/experience.ts` - Data processing utilities
- `/src/types/experience.ts` - TypeScript type definitions

# Candidate Management App

A modern, professional Next.js application for managing candidates, built with TypeScript, Tailwind CSS, and shadcn/ui components.

## Overview

This application allows users to add, view, search, sort, and delete candidates with a sleek, responsive UI. It includes form validation, local storage persistence, confirmation modals, and a dark mode toggle for an enhanced user experience.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Fonts**: Google Fonts (Poppins)
- **State Management**: React Hooks (useState, useEffect)
- **Data Persistence**: Local Storage
- **Icons**: Heroicons (SVG)

## Features

- **Candidate Management**: Add, view, search, sort, and delete candidates
- **Form Validation**: Real-time validation with clear error messages
- **Search Functionality**: Filter candidates by name, role, or email
- **Sorting Options**: Sort by name or role
- **Responsive Design**: Fully responsive across all screen sizes (mobile, tablet, desktop) with mobile-first approach
- **Dark Mode**: Toggle between light and dark themes
- **Data Persistence**: Candidates saved to local storage
- **Loading States**: Elegant loading spinner during data fetch
- **Confirmation Modals**: Safe deletion with shadcn/ui Dialog component
- **Empty States**: Friendly illustrations and messages
- **Animations**: Smooth transitions and hover effects
- **Modern UI**: shadcn/ui Card-based layout with shadows and rounded corners

## Setup Steps

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Run Development Server**:

   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   Navigate to `http://localhost:3000`

4. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
app/
  layout.tsx          # Root layout with Google Fonts and favicon
  page.tsx            # Main page with dark mode toggle
  globals.css         # Global styles with Tailwind and shadcn/ui CSS variables
components/
  AddCandidateForm.tsx # Form to add candidates with validation
  CandidateItem.tsx   # Card component for individual candidates
  CandidateList.tsx   # List with search, sort, and empty state
  Input.tsx           # Reusable input component using shadcn/ui
  Modal.tsx           # Reusable modal component using shadcn/ui Dialog
  Card.tsx            # Reusable card component using shadcn/ui Card
  LoadingSpinner.tsx  # Loading spinner component
  DarkModeToggle.tsx  # Dark mode toggle button
  ui/                 # shadcn/ui components
    button.tsx
    card.tsx
    input.tsx
    dialog.tsx
    label.tsx
types/
  candidate.ts        # Candidate interface
utils/
  storage.ts          # Local storage utilities
public/
  favicon.png         # Website favicon
```

## Usage

- **Adding Candidates**: Use the form on the left to add new candidates with name, email, and role
- **Viewing Candidates**: Candidates are displayed as cards on the right with avatar initials
- **Searching**: Use the search bar to filter candidates by name, role, or email
- **Sorting**: Click "Sort by Name" or "Sort by Role" to reorder the list
- **Deleting Candidates**: Click "Delete" on a candidate card and confirm in the modal
- **Dark Mode**: Toggle between light and dark themes using the button in the top-right
- **Responsive**: The layout adapts to different screen sizes

## Screenshots

### Light Mode

![Light Mode Screenshot](https://via.placeholder.com/800x400/ffffff/000000?text=Light+Mode+Screenshot)

### Dark Mode

![Dark Mode Screenshot](https://via.placeholder.com/800x400/1f2937/ffffff?text=Dark+Mode+Screenshot)

### Mobile View

![Mobile View Screenshot](https://via.placeholder.com/400x600/e5e7eb/000000?text=Mobile+View+Screenshot)

_Note: Replace placeholder images with actual screenshots of your application._

## Customization

### Favicon

The favicon is set to `public/favicon.png` (originally `images/management_7457832.png`). To replace it:

1. Add your custom favicon image to the `public/` folder as `favicon.png`
2. The app will automatically use the new icon
3. For best compatibility, use a PNG format (ICO also works)

### Colors and Theme

Modify the color scheme in `app/globals.css` by updating the Tailwind classes and custom component styles.

### Fonts

Change the font in `app/layout.tsx` by importing a different Google Font from Next.js.

## Code Quality

- **TypeScript**: Strong typing with interfaces and proper type annotations
- **Reusable Components**: Modular components for maintainability
- **Separation of Concerns**: Clean folder structure and component responsibilities
- **Tailwind Best Practices**: Utility-first styling with custom component classes
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Optimized with useMemo for filtering/sorting
- **Comments**: Well-documented code for clarity

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### Netlify

1. Push your code to GitHub
2. Connect your repository to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Manual Deployment

```bash
npm run build
npm start
```

The app will be available at `http://localhost:3000` for local development.

## Future Enhancements

- Add pagination for large candidate lists
- Implement candidate editing functionality
- Add export/import features for candidate data
- Integrate with a backend API for data persistence
- Add candidate status tracking (applied, interviewed, hired)
- Implement user authentication and multi-user support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

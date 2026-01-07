# Modern UI Patterns with Tailwind CSS

Common UI patterns and their Tailwind implementations for quick reference.

## Button Patterns

### Primary Button
```jsx
<button className="px-6 py-3 bg-black text-white font-medium rounded-lg
  hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black
  focus:ring-offset-2 active:scale-95 transition-all duration-200">
  Primary Action
</button>
```

### Secondary Button (Outlined)
```jsx
<button className="px-6 py-3 border-2 border-black text-black font-medium
  rounded-lg hover:bg-black hover:text-white focus:outline-none
  focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-200">
  Secondary Action
</button>
```

### Ghost/Tertiary Button
```jsx
<button className="px-4 py-2 text-black/70 font-medium hover:text-black
  hover:underline focus:outline-none focus:ring-2 focus:ring-black
  focus:ring-offset-2 rounded transition-colors">
  Tertiary Action
</button>
```

### Disabled State
```jsx
<button disabled className="px-6 py-3 bg-black/30 text-white/50 font-medium
  rounded-lg cursor-not-allowed">
  Disabled Button
</button>
```

## Card Patterns

### Basic Interactive Card
```jsx
<div className="group rounded-xl border border-black/10 bg-white p-6
  hover:border-black/20 hover:shadow-xl hover:-translate-y-1
  transition-all duration-300 cursor-pointer">
  <h3 className="text-xl font-bold text-black/80 mb-2
    group-hover:text-black transition-colors">
    Card Title
  </h3>
  <p className="text-black/60 leading-relaxed">
    Card description goes here with some details about the content.
  </p>
</div>
```

### Card with Image
```jsx
<div className="group overflow-hidden rounded-xl border border-black/10
  bg-white hover:border-black/20 transition-all duration-300 hover:shadow-xl">
  <div className="aspect-video overflow-hidden bg-black/5">
    <img src="/image.jpg" alt="Description"
      className="h-full w-full object-cover transition-transform
      duration-300 group-hover:scale-105" />
  </div>
  <div className="p-6">
    <h3 className="text-lg font-bold text-black/80 mb-2">Card Title</h3>
    <p className="text-sm text-black/60">Description text here.</p>
  </div>
</div>
```

### Glassmorphism Card
```jsx
<div className="backdrop-blur-md bg-white/10 border border-white/20
  rounded-xl p-6 shadow-lg">
  <h3 className="text-xl font-bold text-white mb-2">Glass Card</h3>
  <p className="text-white/80">Frosted glass effect for overlays.</p>
</div>
```

## Form Patterns

### Input with Label
```jsx
<div className="space-y-2">
  <label htmlFor="email" className="block text-sm font-medium text-black/70">
    Email Address
  </label>
  <input
    id="email"
    type="email"
    className="w-full px-4 py-3 border border-black/20 rounded-lg
      focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent
      transition-all"
    placeholder="you@example.com"
  />
</div>
```

### Input with Error State
```jsx
<div className="space-y-2">
  <label htmlFor="email" className="block text-sm font-medium text-black/70">
    Email Address
  </label>
  <input
    id="email"
    type="email"
    className="w-full px-4 py-3 border-2 border-red-500 rounded-lg
      focus:outline-none focus:ring-2 focus:ring-red-500
      focus:border-transparent"
    placeholder="you@example.com"
    aria-invalid="true"
    aria-describedby="email-error"
  />
  <p id="email-error" className="text-sm text-red-600 flex items-center gap-1">
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
    Please enter a valid email address
  </p>
</div>
```

### Textarea
```jsx
<div className="space-y-2">
  <label htmlFor="message" className="block text-sm font-medium text-black/70">
    Message
  </label>
  <textarea
    id="message"
    rows={4}
    className="w-full px-4 py-3 border border-black/20 rounded-lg
      focus:outline-none focus:ring-2 focus:ring-black
      focus:border-transparent resize-none"
    placeholder="Enter your message..."
  />
</div>
```

## Loading States

### Skeleton Loader
```jsx
<div className="animate-pulse space-y-4">
  <div className="h-4 bg-black/10 rounded w-3/4"></div>
  <div className="h-4 bg-black/10 rounded w-1/2"></div>
  <div className="h-32 bg-black/10 rounded"></div>
</div>
```

### Spinner
```jsx
<div className="flex items-center justify-center">
  <div className="animate-spin rounded-full h-8 w-8 border-2
    border-black/20 border-t-black"></div>
</div>
```

### Button Loading State
```jsx
<button disabled className="px-6 py-3 bg-black text-white font-medium
  rounded-lg flex items-center gap-2 cursor-not-allowed">
  <div className="animate-spin rounded-full h-4 w-4 border-2
    border-white/30 border-t-white"></div>
  Loading...
</button>
```

## Toast/Notification Patterns

### Success Toast
```jsx
<div className="flex items-center gap-3 px-4 py-3 bg-green-50
  border border-green-200 rounded-lg shadow-lg">
  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
  <p className="text-sm font-medium text-green-800">
    Changes saved successfully!
  </p>
</div>
```

### Error Toast
```jsx
<div className="flex items-center gap-3 px-4 py-3 bg-red-50
  border border-red-200 rounded-lg shadow-lg">
  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
  </svg>
  <p className="text-sm font-medium text-red-800">
    Failed to save changes. Please try again.
  </p>
</div>
```

## Modal/Dialog Pattern

### Basic Modal
```jsx
<div className="fixed inset-0 z-50 flex items-center justify-center
  bg-black/50 backdrop-blur-sm">
  <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4
    overflow-hidden" role="dialog" aria-modal="true">
    {/* Header */}
    <div className="px-6 py-4 border-b border-black/10">
      <h2 className="text-xl font-bold text-black/80">Modal Title</h2>
    </div>

    {/* Content */}
    <div className="px-6 py-4">
      <p className="text-black/60">
        Modal content goes here with detailed information.
      </p>
    </div>

    {/* Footer */}
    <div className="px-6 py-4 bg-black/5 flex justify-end gap-3">
      <button className="px-4 py-2 text-black/70 font-medium
        hover:text-black transition-colors">
        Cancel
      </button>
      <button className="px-4 py-2 bg-black text-white font-medium
        rounded-lg hover:bg-black/90 transition-colors">
        Confirm
      </button>
    </div>
  </div>
</div>
```

## Badge/Tag Patterns

### Basic Badge
```jsx
<span className="inline-flex items-center px-3 py-1 rounded-full
  bg-black/5 text-black/70 text-xs font-medium tracking-tight">
  Tag Name
</span>
```

### Status Badges
```jsx
{/* Success */}
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full
  bg-green-100 text-green-800 text-xs font-medium">
  Active
</span>

{/* Warning */}
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full
  bg-yellow-100 text-yellow-800 text-xs font-medium">
  Pending
</span>

{/* Error */}
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full
  bg-red-100 text-red-800 text-xs font-medium">
  Error
</span>
```

## Navigation Patterns

### Horizontal Nav (Desktop)
```jsx
<nav className="flex items-center gap-6">
  <a href="/" className="text-black font-medium hover:text-black/70
    transition-colors">
    Home
  </a>
  <a href="/about" className="text-black/60 font-medium hover:text-black
    transition-colors">
    About
  </a>
  <a href="/projects" className="text-black/60 font-medium hover:text-black
    transition-colors">
    Projects
  </a>
</nav>
```

### Active Link State
```jsx
<a href="/about" className="text-black font-medium border-b-2
  border-black pb-1">
  About
</a>
```

## Empty State Pattern

```jsx
<div className="flex flex-col items-center justify-center py-16 px-6
  text-center">
  <svg className="w-16 h-16 text-black/20 mb-4" fill="none"
    stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
  <h3 className="text-xl font-bold text-black/70 mb-2">
    No projects yet
  </h3>
  <p className="text-black/50 mb-6 max-w-sm">
    Get started by creating your first project. It only takes a few seconds.
  </p>
  <button className="px-6 py-3 bg-black text-white font-medium rounded-lg
    hover:bg-black/90 transition-colors">
    Create Project
  </button>
</div>
```

## Responsive Patterns

### Mobile-First Grid
```jsx
{/* 1 col mobile, 2 cols tablet, 3 cols desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards here */}
</div>
```

### Hide/Show Based on Breakpoint
```jsx
{/* Show only on mobile */}
<div className="block lg:hidden">Mobile Menu</div>

{/* Show only on desktop */}
<div className="hidden lg:block">Desktop Sidebar</div>
```

### Responsive Spacing
```jsx
<section className="px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-16">
  {/* Content */}
</section>
```

## Accessibility Utilities

### Focus Ring
```jsx
<button className="focus:outline-none focus:ring-2 focus:ring-black
  focus:ring-offset-2 rounded-lg">
  Accessible Button
</button>
```

### Screen Reader Only Text
```jsx
<span className="sr-only">
  Additional context for screen readers
</span>
```

### Skip to Main Content
```jsx
<a href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4
  focus:left-4 bg-black text-white px-4 py-2 rounded-lg z-50">
  Skip to main content
</a>
```

## Animation Patterns

### Hover Scale
```jsx
<div className="transition-transform duration-300 hover:scale-105">
  Hover to scale
</div>
```

### Fade In
```jsx
<div className="animate-fade-in opacity-0" style={{
  animation: 'fadeIn 0.5s ease-in forwards'
}}>
  Fades in on load
</div>

{/* Add to tailwind.config.js: */}
{/*
theme: {
  extend: {
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' }
      }
    }
  }
}
*/}
```

### Respect Reduced Motion
```jsx
<div className="transition-transform motion-reduce:transition-none
  hover:scale-105 motion-reduce:hover:scale-100">
  Respects prefers-reduced-motion
</div>
```

## Dark Mode Patterns

### Basic Dark Mode
```jsx
<div className="bg-white dark:bg-black text-black dark:text-white">
  Adapts to system dark mode preference
</div>
```

### Dark Mode Card
```jsx
<div className="bg-white dark:bg-black/90 border border-black/10
  dark:border-white/10 rounded-xl p-6">
  <h3 className="text-black dark:text-white font-bold">Title</h3>
  <p className="text-black/60 dark:text-white/60">Description</p>
</div>
```

---

**Pro Tip**: Combine these patterns with the UX principles in SKILL.md to create cohesive, accessible, and modern interfaces. Always test responsive behavior and interactive states!

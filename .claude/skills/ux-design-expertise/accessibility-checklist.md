# Accessibility Checklist (WCAG 2.1 AA)

Use this checklist when reviewing components or pages for accessibility compliance.

## Visual Design

- [ ] **Text Contrast**: Normal text has minimum 4.5:1 contrast ratio
- [ ] **Large Text Contrast**: Text 18pt+ (or 14pt bold+) has minimum 3:1 contrast ratio
- [ ] **UI Component Contrast**: Interactive elements have 3:1 contrast against adjacent colors
- [ ] **Color Independence**: Information isn't conveyed by color alone (use icons, text, patterns)
- [ ] **Focus Indicators**: Visible focus states with 3:1 contrast ratio minimum
- [ ] **Touch Targets**: Interactive elements are minimum 44x44px (mobile)
- [ ] **Text Spacing**: Line height at least 1.5x font size, paragraph spacing at least 2x font size
- [ ] **Resize Text**: Interface works when text is zoomed to 200%

## Keyboard Navigation

- [ ] **Tab Order**: Logical tab order follows visual order
- [ ] **Keyboard Accessible**: All interactive elements accessible via keyboard
- [ ] **Focus Visible**: Current focused element is clearly visible
- [ ] **No Keyboard Trap**: Users can navigate out of all components using keyboard
- [ ] **Skip Links**: "Skip to main content" link available (optional but recommended)
- [ ] **Shortcuts**: If custom shortcuts exist, they don't conflict with browser/screen reader shortcuts
- [ ] **Escape Key**: Modals/dialogs/dropdowns close with Escape key
- [ ] **Enter/Space**: Buttons activate with Enter or Space keys

## Screen Reader Support

- [ ] **Semantic HTML**: Proper use of semantic elements (button, nav, main, article, etc.)
- [ ] **Heading Hierarchy**: Logical heading structure (h1 → h2 → h3, no skipping levels)
- [ ] **Alt Text**: Images have descriptive alt text (decorative images use alt="")
- [ ] **Form Labels**: All form inputs have associated <label> elements
- [ ] **ARIA Labels**: Icon-only buttons have aria-label or aria-labelledby
- [ ] **ARIA Landmarks**: Page regions use proper landmarks or ARIA roles
- [ ] **Link Purpose**: Link text describes destination (avoid "click here")
- [ ] **Error Identification**: Errors are clearly announced to screen readers
- [ ] **Live Regions**: Dynamic content changes use aria-live when appropriate
- [ ] **Hidden Content**: Decorative elements use aria-hidden="true"

## Forms & Input

- [ ] **Label Association**: Every input has a visible, associated label
- [ ] **Required Fields**: Required fields marked clearly (not just with asterisk)
- [ ] **Error Messages**: Validation errors are specific and helpful
- [ ] **Error Location**: Errors appear near the relevant input
- [ ] **Success Confirmation**: Form submission success is clearly announced
- [ ] **Input Types**: Appropriate input types used (email, tel, number, etc.)
- [ ] **Autocomplete**: Autocomplete attributes used for common fields
- [ ] **Field Instructions**: Helper text provided for format requirements

## Media & Animation

- [ ] **Video Captions**: Videos have captions for deaf/hard of hearing users
- [ ] **Audio Transcripts**: Audio content has text transcripts
- [ ] **Reduced Motion**: Animations respect prefers-reduced-motion preference
- [ ] **Auto-play Control**: No auto-playing audio/video, or controls provided
- [ ] **Animation Duration**: Non-essential animations can be paused or stopped
- [ ] **Pause/Stop**: Moving content can be paused, stopped, or hidden

## Mobile & Touch

- [ ] **Touch Targets**: Minimum 44x44px for all interactive elements
- [ ] **Spacing**: Adequate spacing between touch targets (8px minimum)
- [ ] **Pinch Zoom**: Viewport doesn't prevent pinch-to-zoom
- [ ] **Orientation**: Content works in both portrait and landscape
- [ ] **Gestures**: Multi-touch gestures have single-touch alternatives
- [ ] **Text Size**: Minimum 16px font size to prevent auto-zoom on iOS

## Content & Structure

- [ ] **Page Title**: Each page has unique, descriptive title
- [ ] **Language**: Page language is declared in HTML lang attribute
- [ ] **Consistent Navigation**: Navigation is consistent across pages
- [ ] **Bypass Blocks**: Repeated content can be bypassed (skip links)
- [ ] **Link Distinction**: Links are visually distinct from regular text
- [ ] **Reading Order**: DOM order matches visual order

## Error Handling

- [ ] **Error Identification**: Errors are clearly identified
- [ ] **Error Description**: Error messages describe the problem
- [ ] **Error Suggestion**: Suggestions provided for fixing errors
- [ ] **Error Prevention**: Critical actions have confirmation steps
- [ ] **Undo**: Destructive actions can be undone or confirmed

## Quick Testing Tools

### Browser Extensions
- **axe DevTools**: Automated accessibility testing
- **WAVE**: Visual feedback about accessibility issues
- **Lighthouse**: Chrome DevTools built-in audit

### Manual Tests
- **Keyboard Only**: Navigate entire page using only keyboard
- **Screen Reader**: Test with NVDA (Windows), JAWS (Windows), or VoiceOver (Mac/iOS)
- **Zoom Text**: Increase text size to 200% and verify layout
- **Color Contrast**: Use WebAIM Contrast Checker

### Testing Checklist
1. Navigate with Tab key only (no mouse)
2. Test with screen reader enabled
3. Check color contrast with tool
4. Verify form validation errors
5. Test with zoom at 200%
6. Check responsive on mobile device
7. Run automated accessibility scan

## Priority Levels

### Critical (Fix Immediately)
- Keyboard navigation completely broken
- Form inputs without labels
- Insufficient color contrast on body text
- Images missing alt text
- Heading hierarchy completely wrong

### High (Fix Soon)
- Missing focus indicators
- Touch targets too small
- Poor error messages
- Inconsistent navigation
- Videos without captions

### Medium (Fix When Possible)
- Non-semantic HTML usage
- Missing skip links
- No reduced-motion support
- Minor contrast issues on secondary text

### Low (Enhancement)
- Optimize tab order
- Add ARIA landmarks
- Enhance screen reader experience
- Improve touch target spacing

---

**Remember**: Accessibility isn't a checklist to complete once—it's an ongoing commitment to inclusive design. Test with real users who rely on assistive technologies when possible.

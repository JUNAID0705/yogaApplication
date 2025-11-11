# 🤝 Contributing to Yoga Studio App

Thank you for your interest in contributing to the Yoga Studio app!

## 🌟 Ways to Contribute

### 1. Report Bugs
- Check if the bug has already been reported
- Include steps to reproduce
- Provide browser/OS information
- Include screenshots if applicable

### 2. Suggest Features
- Describe the feature clearly
- Explain the use case
- Consider implementation complexity

### 3. Improve Documentation
- Fix typos or unclear instructions
- Add examples
- Improve existing guides

### 4. Submit Code
- Follow the code style below
- Test your changes
- Update documentation if needed

---

## 💻 Development Setup

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/yoga-studio.git
   cd yoga-studio
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
5. **Make your changes**
6. **Test thoroughly**
   ```bash
   npm run dev
   ```
7. **Commit your changes**
   ```bash
   git commit -m "Add: your feature description"
   ```
8. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
9. **Create a Pull Request**

---

## 📝 Code Style Guidelines

### JavaScript/React
- Use functional components with hooks
- Use meaningful variable names
- Add comments for complex logic
- Keep components small and focused
- Use ES6+ features

### Example:
```jsx
// Good
const BookingButton = ({ onBook, isLoading }) => {
  return (
    <button 
      onClick={onBook}
      disabled={isLoading}
      className="px-6 py-3 bg-primary-600 text-white rounded-lg"
    >
      {isLoading ? 'Booking...' : 'Book Now'}
    </button>
  )
}

// Avoid
const btn = ({ f, l }) => <button onClick={f}>{l ? 'Booking...' : 'Book Now'}</button>
```

### CSS/Tailwind
- Use Tailwind utility classes
- Keep custom CSS minimal
- Use responsive modifiers (sm:, md:, lg:)
- Follow mobile-first approach

### File Organization
- Components in `src/components/`
- Pages in `src/pages/`
- Utilities in `src/lib/`
- Context in `src/context/`

---

## 🧪 Testing

Before submitting:
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile devices
- [ ] Test all user flows
- [ ] Check for console errors
- [ ] Verify responsive design
- [ ] Test authentication flows
- [ ] Test booking functionality

---

## 📋 Pull Request Guidelines

### PR Title Format
- `Add: [feature description]` for new features
- `Fix: [bug description]` for bug fixes
- `Update: [what was updated]` for updates
- `Docs: [documentation change]` for docs

### PR Description Should Include
- What changes were made
- Why the changes were needed
- How to test the changes
- Screenshots (if UI changes)
- Related issues (if any)

### Example PR Description
```markdown
## What
Added ability to filter classes by difficulty level

## Why
Users requested an easier way to find beginner classes

## How to Test
1. Go to Schedule page
2. Use the new filter dropdown
3. Select "Beginner"
4. Verify only beginner classes show

## Screenshots
[Include screenshots]

## Related Issues
Closes #123
```

---

## 🎨 Feature Ideas

Want to contribute but not sure what to work on? Here are some ideas:

### Easy
- [ ] Add class search functionality
- [ ] Add user profile picture upload
- [ ] Add email notifications for bookings
- [ ] Add class ratings/reviews
- [ ] Add favorite classes feature

### Medium
- [ ] Add payment integration (Stripe)
- [ ] Add instructor profiles
- [ ] Add class categories/tags
- [ ] Add booking history export
- [ ] Add admin dashboard

### Advanced
- [ ] Add real-time class availability updates
- [ ] Add video streaming for online classes
- [ ] Add mobile app (React Native)
- [ ] Add multi-language support
- [ ] Add analytics dashboard

---

## 🐛 Bug Reporting Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- Browser: [e.g. Chrome 120]
- OS: [e.g. Windows 11]
- Device: [e.g. Desktop, iPhone 12]

**Additional context**
Any other relevant information.
```

---

## ✨ Feature Request Template

```markdown
**Feature Description**
Clear description of the feature.

**Use Case**
Why is this feature needed? Who will use it?

**Proposed Solution**
How should this feature work?

**Alternatives Considered**
Other ways to solve this problem.

**Additional Context**
Mockups, examples, or references.
```

---

## 📜 Code of Conduct

### Our Standards
- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the community
- Show empathy towards others

### Unacceptable Behavior
- Harassment or discrimination
- Trolling or insulting comments
- Publishing private information
- Unprofessional conduct

---

## 🙏 Recognition

Contributors will be:
- Listed in the project README
- Mentioned in release notes
- Credited in commit history

---

## 📞 Questions?

- Open an issue for questions
- Check existing documentation first
- Be specific and provide context

---

## 🎉 Thank You!

Every contribution, no matter how small, is valuable and appreciated!

**Happy Contributing! 🚀**

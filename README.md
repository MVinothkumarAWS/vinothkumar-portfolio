# Vinothkumar Mani - Portfolio

[![CI](https://github.com/MVinothkumarAWS/vinothkumar-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/MVinothkumarAWS/vinothkumar-portfolio/actions/workflows/ci.yml)
[![Deploy](https://github.com/MVinothkumarAWS/vinothkumar-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/MVinothkumarAWS/vinothkumar-portfolio/actions/workflows/deploy.yml)
[![License](https://img.shields.io/github/license/MVinothkumarAWS/vinothkumar-portfolio)](https://github.com/MVinothkumarAWS/vinothkumar-portfolio/blob/master/LICENSE)

![Portfolio Preview](.github/README_ASSETS/3d-portfolio.png)

## 👨‍💻 About Me

**AWS Solutions Architect** with 3+ years of hands-on AWS expertise and 6+ years of total IT experience in cloud architecture, DevOps, and full-stack development. Skilled in AWS, .NET, C#, and MERN stack, specializing in microservices design, CI/CD automation (Jenkins, Terraform), and cloud monitoring (Prometheus, Grafana, CloudWatch).

## 🌐 Live Demo

[View Live Portfolio](https://vinothkumar-portfolio.vercel.app) *(Coming Soon)*

## ✨ Features

- **3D Graphics**: Interactive Three.js 3D models and animations
- **Responsive Design**: Fully responsive across all devices
- **Modern Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Smooth Animations**: Framer Motion for fluid transitions
- **Contact Form**: Integrated EmailJS for direct communication
- **CI/CD Pipeline**: Automated testing and deployment with GitHub Actions
- **Type-Safe**: 100% TypeScript with strict type checking
- **Optimized Performance**: Code splitting and lazy loading

## 🛠️ Technologies Used

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for Three.js
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework

### Backend & Services
- **EmailJS** - Email service for contact form
- **Vercel** - Hosting and deployment

### Development
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **GitHub Actions** - CI/CD pipelines

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MVinothkumarAWS/vinothkumar-portfolio.git
cd vinothkumar-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Add your EmailJS credentials to `.env`:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_ACCESS_TOKEN=your_access_token
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Build for Production

```bash
npm run build
```

The build output will be in the `dist/` folder.

## 🧪 Testing & Quality

```bash
# TypeScript type checking
npm run ts:check

# ESLint
npm run lint

# Build verification
npm run build
```

## 🔧 Configuration

### Environment Variables

Required environment variables for EmailJS integration:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_ACCESS_TOKEN=your_access_token
```

Get your credentials from [EmailJS](https://www.emailjs.com/)

### Personal Information

Update your personal information in `src/constants/config.ts`:
- Name, title, contact information
- About section content
- Social media links

Update your work experience, projects, and testimonials in `src/constants/index.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. Go to [Vercel](https://vercel.com/signup)
2. Import your GitHub repository
3. Add environment variables
4. Deploy!

See `.github/QUICK_START.md` for detailed deployment instructions.

### CI/CD Pipeline

This project includes GitHub Actions workflows for:
- **CI**: Build and test on every push
- **Deploy**: Automatic deployment to production
- **Code Quality**: Quality checks on pull requests
- **Dependencies**: Weekly dependency updates

See `.github/SETUP_GUIDE.md` for CI/CD setup instructions.

## 📂 Project Structure

```
vinothkumar-portfolio/
├── .github/              # GitHub Actions workflows and documentation
├── public/               # Static assets
│   ├── desktop_pc/      # 3D model assets
│   └── planet/          # 3D model assets
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # React components
│   │   ├── atoms/       # Atomic components
│   │   ├── canvas/      # 3D canvas components
│   │   ├── layout/      # Layout components
│   │   └── sections/    # Page sections
│   ├── constants/       # Configuration and data
│   ├── hoc/             # Higher-order components
│   ├── types/           # TypeScript types
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── .env.example         # Environment variables template
└── package.json         # Dependencies and scripts
```

## 📊 Features & Sections

### Hero Section
- 3D animated computer model
- Animated text introduction
- Scroll indicator

### About Section
- Professional summary
- Service cards:
  - Cloud Solutions Architect
  - Full Stack Developer
  - DevOps / CI-CD
  - AI & ML Integration
  - C# & ASP.NET Developer

### Experience Section
- Timeline of work experience
- Key achievements and responsibilities

### Tech Stack Section
- 3D rotating technology balls
- Technologies: HTML5, CSS3, JavaScript, TypeScript, React, Node.js, C#, ASP.NET, Redux, Tailwind CSS, MongoDB, Docker, Git, Figma

### Projects Section
- Featured projects with descriptions
- Technologies used
- Links to live demos and source code

### Testimonials Section
- Client and company testimonials
- Professional recommendations

### Contact Section
- Email contact form with validation
- 3D Earth model
- Direct email integration

## 🎯 Key Improvements

This portfolio includes several professional improvements:

✅ **Code Quality**
- 100% TypeScript coverage
- Zero ESLint warnings
- Removed all `@ts-ignore` comments
- Proper error handling

✅ **Performance**
- Code splitting and lazy loading
- Bundle size reduced by 71KB
- Optimized 3D rendering

✅ **Accessibility**
- Keyboard navigation support
- ARIA labels and attributes
- Screen reader friendly

✅ **User Experience**
- Form validation
- Loading states
- Error boundaries
- Mobile-optimized

✅ **DevOps**
- CI/CD pipelines
- Automated testing
- Automated deployment
- Code quality checks

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Vinothkumar Mani**
- Email: vinoaws1212@gmail.com
- Location: Chennai, India
- GitHub: [@MVinothkumarAWS](https://github.com/MVinothkumarAWS)

## 🙏 Acknowledgments

- Three.js for amazing 3D graphics
- React Three Fiber for React integration
- EmailJS for email service
- Vercel for hosting
- All open-source contributors

---

**Made with ❤️ by Vinothkumar Mani**

*Portfolio showcasing AWS Solutions Architecture, Full-Stack Development, and DevOps expertise*

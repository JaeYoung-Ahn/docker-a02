# docker-a02

```markdown
   [![Deploy to GitHub Pages](https://github.com/JaeYoung-Ahn/docker-a02/actions/workflows/deploy.yml/badge.svg)](https://github.com/JaeYoung-Ahn/docker-a02/actions/workflows/deploy.yml)
   ```

## Submission Requirements
GitHub Repo URL:
https://github.com/JaeYoung-Ahn/docker-a02/

GitHub Pages URL:
https://jaeyoung-ahn.github.io/docker-a02/

Summary Example:

"I used Vite for fast React setup, Docker for consistent development environments (via Dockerfile.dev and docker-compose.yml), 
and GitHub Actions to automate deployment. 
The workflow builds the app, generates static files in dist/, and deploys them to GitHub Pages ."



# My React Application

## Project Description  
A **production-ready React application** containerized with Docker and automatically deployed to GitHub Pages. Designed for seamless development and deployment workflows, this project demonstrates modern DevOps practices including:  
- 🐳 Dockerized development environment  
- ⚡ Vite-powered React build  
- 🤖 GitHub Actions CI/CD pipeline  
- 🌐 GitHub Pages hosting  

**Key Features**:  
- Hot-reloading development server  
- Isolated development environment via Docker  
- Automated deployment on code push  
- Optimized production build process  

## Technology Stack  
**Core Technologies**:  
- React 18  
- Vite 5  
- Node.js 18  

**DevOps Tools**:  
- Docker + Docker Compose  
- GitHub Actions  
- GitHub Pages  

**Development Dependencies**:  
- ESLint + Prettier  
- PostCSS  
- Vitest (Testing)  


## Setup Instructions  

### **Local Development (Without Docker)**  
1. Clone the repository:  https://github.com/JaeYoung-Ahn/docker-a02.git
2. Install dependencies:  npm install
3. Start development server:  npm run dev

### **Docker Development Environment**  
1. Build and start container:  docker-compose up

2. Access the app at: `http://localhost:5173`  

**Common Docker Commands**:  
| Command | Description |  
|---------|-------------|  
| `docker-compose build` | Rebuild container |  
| `docker-compose down` | Stop container |  
| `docker exec -it react-app-dev sh` | Access container shell |  

---

## Deployment Details  
**GitHub Pages Workflow**:  
1. **Trigger**: Pushes to `main` branch  
2. **Build Process**:  
- Installs Node.js 18  
- Runs `npm install`  
- Executes `npm run build`  
3. **Deployment**:  
- Uploads `dist` artifacts  
- Publishes to GitHub Pages via `gh-pages` branch  

**Configuration**:  
- Vite base path: `/JaeYoung-Ahn/` (set in `vite.config.js`)  
- GitHub Pages source: `GitHub Actions` (configured in repository settings)  

**Access Deployment**:  
`https://JaeYoung-Ahn.github.io/docker-a02`  



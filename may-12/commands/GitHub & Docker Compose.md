
---

# 🔗 **Phase 3: Git, GitHub & Docker Compose**

---

## 🧩 **Part 1: Git Essentials**

### 📦 1. **Initialize and Configure Git**

```bash
git init                          # Initialize local git repo
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --list                 # Check current config
```

---

### 📁 2. **Basic Git Commands**

```bash
git status                        # Check current changes
git add <file>                    # Stage a file
git add .                         # Stage all files
git commit -m "message"           # Commit with message
git log                           # View commit history
git diff                          # See unstaged changes
git diff --staged                # See staged differences
```

---

### 🔁 3. **Branches**

```bash
git branch                        # List all branches
git branch <branch-name>          # Create a new branch
git checkout <branch-name>        # Switch to branch
git checkout -b <branch-name>     # Create + switch
git merge <branch-name>           # Merge into current
git branch -d <branch-name>       # Delete branch
```

---

### 🗂️ 4. **Remote GitHub Setup**

```bash
git remote add origin <repo-url>       # Link remote repo
git remote -v                          # Check remotes
git push -u origin main                # Push first time
git push                               # Push changes
git pull                               # Pull from remote
git clone <repo-url>                   # Clone repo
```

---

### 🛡️ 5. **.gitignore**

Create a `.gitignore` file to avoid committing unwanted files:

```
node_modules/
.env
*.log
```

---

### 🔐 6. **SSH Setup (Optional for GitHub)**

```bash
ssh-keygen -t ed25519 -C "you@example.com"
cat ~/.ssh/id_ed25519.pub            # Copy this and add to GitHub > Settings > SSH Keys
```

---

## 🧩 **Part 2: Docker Compose**

### 📄 1. **Create docker-compose.yml**

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    depends_on:
      - mongo

  mongo:
    image: mongo
    ports:
      - "27017:27017"
```

---

### ⚙️ 2. **Common Docker Compose Commands**

```bash
docker-compose up                     # Start services
docker-compose up -d                  # Start in background
docker-compose down                   # Stop and remove containers/networks
docker-compose stop                   # Stop containers only
docker-compose ps                     # List running services
docker-compose logs                   # Show logs
docker-compose exec <svc> bash        # Enter container shell
```

---

### 📦 3. **Build/Rebuild Containers**

```bash
docker-compose build                  # Build all services
docker-compose build <service-name>   # Build a specific one
docker-compose up --build             # Build and run
```

---

### 🔁 4. **Volumes and Envs in Compose**

#### Mount volume:

```yaml
volumes:
  - .:/app
```

#### Use `.env` file:

```yaml
environment:
  - PORT=${PORT}
```

`.env`:

```
PORT=3000
```

---

### 📁 Example Folder Structure

```
project/
├── Dockerfile
├── docker-compose.yml
├── .gitignore
├── app.js
└── package.json
```

---



---

# 🐳 **Phase 2: Docker Essentials**

> Learn containerization — build, run, manage, and network containers.

---

## 📦 1. **Docker Basics**

```bash
docker -v                           # Check Docker version
docker info                         # View Docker system info
docker help                         # Show general help
```

---

## 🧱 2. **Images**

```bash
docker pull <image>                # Pull image from Docker Hub
docker images                      # List all local images
docker rmi <image-id or name>      # Remove an image
docker rmi -f <image-id>           # Force remove
```

### 🔧 Build Custom Image (from Dockerfile)

```bash
docker build -t <tag-name> .       # Build image from Dockerfile in current dir
docker build -f <Dockerfile.dev> -t <tag> .  # Use a custom Dockerfile
```

---

## 🚀 3. **Containers**

```bash
docker run <image>                          # Run container from image
docker run -it <image> bash                 # Run in interactive terminal mode
docker run -d <image>                       # Run in detached (background) mode
docker run -p 3000:3000 <image>             # Map port (host:container)
docker run --name <container-name> <image>  # Assign a name
docker run -v <host_path>:<container_path> <image>  # Mount volume
```

### Useful Flags:

* `-d`: detached
* `-p`: port mapping
* `-v`: volume mount
* `--rm`: auto-remove after stop
* `-it`: interactive + tty shell
* `--name`: set custom name

---

## 🔄 4. **Managing Containers**

```bash
docker ps                          # Running containers
docker ps -a                       # All containers (including stopped)
docker start <container>           # Start container
docker stop <container>            # Stop container
docker restart <container>         # Restart container
docker rm <container>              # Remove container
docker logs <container>            # Show logs
docker exec -it <container> bash   # Access shell inside container
```

---

## 📁 5. **Volumes (Data Persistence)**

```bash
docker volume create <volume-name>                   # Create volume
docker volume ls                                     # List volumes
docker volume inspect <volume-name>                  # Details
docker volume rm <volume-name>                       # Remove

# Use volume in run
docker run -v <volume-name>:<container-path> <image>
```

---

## 🌐 6. **Networking**

```bash
docker network ls                    # List networks
docker network create <net-name>     # Create custom bridge network
docker network rm <net-name>         # Remove network
docker network inspect <net-name>    # View details

# Run containers in custom network
docker run --network <net-name> <image>
```

---

## 🧼 7. **Cleanup Commands**

```bash
docker system prune                 # Remove unused data (asks before deleting)
docker image prune -a               # Remove unused images
docker container prune              # Remove stopped containers
docker volume prune                 # Remove unused volumes
```

---

## 🛠️ 8. **Example Flow: Build and Run a Node.js App**

### **Folder Structure**

```
project/
├── app.js
└── Dockerfile
```

### **Dockerfile**

```Dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "app.js"]
```

### **Build and Run**

```bash
docker build -t my-node-app .
docker run -p 3000:3000 my-node-app
```

---



---

# ✅ **Phase 1: Bash Basics**

> Master command-line essentials — file system, permissions, processes, variables, and utilities.

---

## 📂 1. **Navigation & Directory Commands**

```bash
cd <folder-name>           # Go into a folder
cd ..                      # Move one level up
cd                         # Go to home directory
cd /                       # Go to root directory
pwd                        # Print working directory (current path)
ls                         # List files and folders
ls -l                      # List in long format (permissions, owner, size)
ls -a                      # Include hidden files
ls -lah                    # Long + All + Human-readable
```

---

## 📁 2. **File and Directory Management**

```bash
mkdir <folder-name>        # Create a directory
mkdir -p a/b/c             # Create nested directories

rmdir <folder-name>        # Remove empty directory
rm -r <folder-name>        # Remove directory and contents
rm -rf <folder-name>       # Force delete all contents recursively

touch <file-name>          # Create empty file
rm <file-name>             # Remove a file
mv <old-name> <new-name>   # Rename or move a file/folder
cp <src> <dest>            # Copy file
cp -r <src-dir> <dest-dir> # Copy directory recursively
```

---

## 📝 3. **File Content Viewing & Editing**

```bash
cat <file-name>            # Show file content
less <file-name>           # Paginated viewer
head <file-name>           # First 10 lines
tail <file-name>           # Last 10 lines
tail -f <file-name>        # Live log viewer

nano <file-name>           # Edit in nano editor
vim <file-name>            # Edit in vim editor
```

---

## 🔐 4. **File Permissions**

```bash
ls -l                      # Check permissions
chmod +x <file.sh>         # Make a file executable
chmod 755 <file/folder>    # Set rwxr-xr-x permissions
chmod 644 <file>           # rw-r--r--

chown <user>:<group> <file>  # Change owner
```

---

## 🔄 5. **Process & System Monitoring**

```bash
ps                         # List current shell processes
ps aux                     # Show all processes
top                        # Live process monitor
htop                       # Better version of top (if installed)
kill <pid>                 # Kill a process by PID
kill -9 <pid>              # Force kill
```

---

## 🌐 6. **Network Commands**

```bash
ping <host>                # Ping a server
curl <url>                 # Fetch a URL
wget <url>                 # Download file from URL
netstat -tulnp             # Show network ports (if installed)
```

---

## ⚙️ 7. **Environment Variables**

```bash
echo $HOME                 # Print value of environment variable
export VAR=value           # Set a variable temporarily
echo $VAR                  # Access it
unset VAR                  # Remove variable
```

---

## 🧪 8. **Useful Shortcuts & Bash Tricks**

```bash
history                    # Show command history
!n                         # Run nth command from history
clear                      # Clear terminal
ctrl + r                   # Reverse search through history
tab                        # Auto-complete file or command
ctrl + c                   # Cancel current process
ctrl + d                   # Exit terminal
```

---

## 📂 Example Folder Flow

```bash
mkdir project
cd project
touch index.html app.js
mkdir assets
cd assets
touch logo.png
cd ..
ls -lah
```

---

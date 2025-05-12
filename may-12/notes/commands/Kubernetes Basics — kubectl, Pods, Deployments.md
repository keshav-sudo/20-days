

---

# ☸️ **Phase 4: Kubernetes Basics — `kubectl`, Pods, Deployments**

---

## ⚙️ 1. **Cluster Setup (for local development)**

### ✅ Using `minikube` (or other)

```bash
minikube start                          # Start a local cluster
kubectl cluster-info                    # Cluster details
kubectl get nodes                       # List nodes
```

---

## 🔧 2. **`kubectl` Basics**

```bash
kubectl version --client               # Client version
kubectl config view                    # View kubeconfig
kubectl get all                        # Get everything (pods, svc, etc)
kubectl get pods                       # List pods
kubectl get svc                        # List services
kubectl get deployments                # List deployments
kubectl get nodes                      # List all nodes
```

---

## 📦 3. **Create a Pod (imperative)**

```bash
kubectl run mypod --image=nginx                  # Create a pod
kubectl run mypod --image=nginx --port=80        # With exposed port
kubectl delete pod mypod                         # Delete pod
```

---

## 📄 4. **Create a Pod (declarative)**

### `pod.yaml`

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
    - name: nginx
      image: nginx
      ports:
        - containerPort: 80
```

```bash
kubectl apply -f pod.yaml              # Create pod from YAML
kubectl describe pod nginx-pod         # Details
kubectl delete -f pod.yaml             # Delete
```

---

## 🚀 5. **Deployments**

### Create Deployment (imperative)

```bash
kubectl create deployment nginx-deploy --image=nginx
kubectl get deployments
kubectl scale deployment nginx-deploy --replicas=3   # Scale up/down
kubectl delete deployment nginx-deploy
```

---

### YAML Example: `deployment.yaml`

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deploy
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx
          ports:
            - containerPort: 80
```

```bash
kubectl apply -f deployment.yaml
kubectl get deployments
kubectl delete -f deployment.yaml
```

---

## 🌐 6. **Services**

### Expose Pod or Deployment

```bash
kubectl expose pod nginx-pod --port=80 --target-port=80 --type=NodePort
kubectl expose deployment nginx-deploy --port=80 --type=NodePort
```

### Get Service Details

```bash
kubectl get svc
kubectl describe svc <service-name>
```

---

## 🔄 7. **Common Maintenance Commands**

```bash
kubectl delete pod <name>               # Delete pod
kubectl delete deployment <name>        # Delete deployment
kubectl rollout restart deployment <name>  # Restart
kubectl rollout history deployment <name>  # View rollout history
kubectl rollout undo deployment <name>     # Rollback
```

---

## 🧼 8. **Cleanup**

```bash
kubectl delete all --all                # Delete everything
```

---


---

# ☸️ **Phase 6: Kubernetes Real-World (Ingress, Helm, HPA, Monitoring, Dashboard)**

---

## 🌐 1. **Ingress Controllers & Resources**

### 📦 Install NGINX Ingress Controller (minikube):

```bash
minikube addons enable ingress
kubectl get pods -n ingress-nginx      # Check if running
```

---

### 📄 Sample `ingress.yaml`:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
    - host: my-app.local
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: my-service
                port:
                  number: 80
```

```bash
kubectl apply -f ingress.yaml
```

👨‍💻 **Add to `/etc/hosts` (Linux/macOS):**

```
127.0.0.1 my-app.local
```

---

## 📦 2. **Helm (Package Manager for Kubernetes)**

### 🔧 Install Helm (once):

```bash
curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash
```

### ✅ Basic Helm Commands:

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update

helm search repo nginx
helm install my-nginx bitnami/nginx
helm list
helm uninstall my-nginx
```

### 🔧 Helm Template Install:

```bash
helm create mychart
helm install custom mychart/
```

---

## 📊 3. **Horizontal Pod Autoscaler (HPA)**

### Enable Metrics Server:

```bash
minikube addons enable metrics-server
kubectl get deployment metrics-server -n kube-system
```

---

### ✅ Create HPA:

```bash
kubectl autoscale deployment nginx-deploy --cpu-percent=50 --min=1 --max=5
kubectl get hpa
```

---

## 📈 4. **Metrics & Prometheus + Grafana (monitoring)**

### Using Helm to Install Prometheus + Grafana:

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
helm install prometheus prometheus-community/kube-prometheus-stack
```

```bash
kubectl get pods
kubectl get svc

# Port forward Grafana
kubectl port-forward svc/prometheus-grafana 3000:80
```

> 🧠 Default Grafana login:
>
> * Username: `admin`
> * Password: `prom-operator` (unless changed)

---

## 🖥️ 5. **Kubernetes Dashboard**

### Enable Dashboard:

```bash
minikube addons enable dashboard
minikube dashboard        # Opens in browser
```

---

### 🔐 Access Token (for login):

```bash
kubectl create serviceaccount dashboard-admin-sa
kubectl create clusterrolebinding dashboard-admin-sa \
  --clusterrole=cluster-admin \
  --serviceaccount=default:dashboard-admin-sa

kubectl get secret                           # Find token secret
kubectl describe secret <secret-name>        # Copy token
```

---

## 🔥 Final Cleanup (optional)

```bash
helm uninstall <release-name>
kubectl delete -f ingress.yaml
kubectl delete hpa <name>
```

---


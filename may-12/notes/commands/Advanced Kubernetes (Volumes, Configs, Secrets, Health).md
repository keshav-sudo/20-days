Perfect! Now let’s dive into **🔥 Phase 5: Advanced Kubernetes — Volumes, ConfigMaps, Secrets, Health Checks, and Namespaces**.
This is the **real-world orchestration** layer — mastering these makes your K8s usage **production-ready**.

---

# ☸️ **Phase 5: Advanced Kubernetes (Volumes, Configs, Secrets, Health)**

---

## 📁 1. **Volumes (Persistent Volume + Claim)**

### 🧾 `pv.yaml`

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: my-pv
spec:
  capacity:
    storage: 1Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: /data/pv
```

---

### 🧾 `pvc.yaml`

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
```

---

### Pod using PVC

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pvc-pod
spec:
  containers:
    - name: busybox
      image: busybox
      command: [ "sleep", "3600" ]
      volumeMounts:
        - mountPath: "/data"
          name: storage
  volumes:
    - name: storage
      persistentVolumeClaim:
        claimName: my-pvc
```

```bash
kubectl apply -f pv.yaml
kubectl apply -f pvc.yaml
kubectl apply -f pod-using-pvc.yaml
```

---

## 🔐 2. **Secrets**

```bash
kubectl create secret generic my-secret --from-literal=password=supersecret
kubectl get secrets
kubectl describe secret my-secret
```

### Use secret in Pod

```yaml
env:
  - name: DB_PASSWORD
    valueFrom:
      secretKeyRef:
        name: my-secret
        key: password
```

---

## ⚙️ 3. **ConfigMaps**

```bash
kubectl create configmap app-config --from-literal=APP_MODE=dev
kubectl get configmap
kubectl describe configmap app-config
```

### Use ConfigMap in Pod

```yaml
env:
  - name: APP_MODE
    valueFrom:
      configMapKeyRef:
        name: app-config
        key: APP_MODE
```

---

## ❤️ 4. **Health Checks (Liveness & Readiness)**

```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 3000
  initialDelaySeconds: 10
  periodSeconds: 5

readinessProbe:
  httpGet:
    path: /ready
    port: 3000
  initialDelaySeconds: 5
  periodSeconds: 5
```

---

## 🌐 5. **Namespaces**

```bash
kubectl get namespaces
kubectl create namespace dev
kubectl config set-context --current --namespace=dev
kubectl delete namespace dev
```

---

## ⚡ 6. **Resource Limits**

```yaml
resources:
  requests:
    memory: "64Mi"
    cpu: "250m"
  limits:
    memory: "128Mi"
    cpu: "500m"
```

---

## 🧼 7. **Delete All in a Namespace**

```bash
kubectl delete all --all -n dev
```

---

✅ You’ve now covered **persistent storage, secure secrets/configs, probes, and resource management** in Kubernetes.

Next is **🔥 Phase 6: Kubernetes Real-World — Ingress, Helm, Autoscaling, Metrics, Dashboard**. Want to proceed?

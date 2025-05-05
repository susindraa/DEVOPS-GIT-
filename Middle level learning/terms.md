#done-space 

#space/terms

 
## 🔌 What is an API?
?
> **API (Application Programming Interface)** lets different software systems **talk to each other** — like a waiter between your app and a service.
In DevOps, APIs are used for **automation**, **integration**, and **monitoring** across tools (Jenkins, GitHub, AWS, DockerHub, etc).
---
## 💡 Why APIs Matter in DevOps?
- ✅ Automate deployments
- ✅ Trigger Jenkins jobs remotely
- ✅ Fetch metrics from Prometheus/Grafana
- ✅ Manage resources on AWS, Kubernetes, GitHub
- ✅ Build integrations (Slack alerts, dashboards, bots)
---
## 📟 Common API Use Cases
| Tool           | Use with API                              |
| -------------- | ----------------------------------------- |
| **Jenkins**    | Trigger builds, check job status          |
| **GitHub**     | Get PRs, commits, create issues           |
| **Docker Hub** | Get image metadata, tags                  |
| **Kubernetes** | Use K8s REST API (or via `kubectl proxy`) |
| **AWS**        | AWS SDK/CLI uses APIs under the hood      |
| **Prometheus** | Query metrics using HTTP endpoints        |
| **Slack**      | Send alerts from CI/CD                    |
-
---
## 📦 Basic API Terms to Know
|Term|Meaning|
|---|---|
|**Endpoint**|URL that represents a resource (`/jobs`, `/pods`)|
|**Request**|API call from client to server (e.g., `GET`, `POST`)|
|**Response**|Data returned by the server (usually JSON)|
|**Status Code**|HTTP code like `200`, `404`, `500`|
|**Headers**|Metadata (e.g., Auth tokens, Content-Type)|
|**Payload**|The body/data you send in a request|
---
## 🔧 Sample API Call using cURL (CLI Tool)
### 👉 Trigger Jenkins Job
```bash
curl -X POST "http://jenkins.local/job/build-job/build" \
--user "admin:your-token"
```
---
### 👉 GitHub API: Get Repo Info
```bash
curl -H "Authorization: token YOUR_TOKEN" \
https://api.github.com/repos/yourname/yourrepo
```
---
### 👉 Kubernetes API (via proxy)
```bash
kubectl proxy &
curl http://localhost:8001/api/v1/namespaces/default/pods
```
---
## 📘 Tools to Try API With
🛠️ CLI: `curl`, `httpie`
📋 GUI: Postman, Insomnia
🧩 Scripting: Python (`requests`), JS (`axios`)
🔒 Auth: OAuth2, Bearer Tokens, API Keys
---
Want a real-world **API automation example** (e.g. triggering Jenkins with Python or posting to Slack)? I can show you one!
<!--SR:!2025-05-02,1,158-->





## 🧭 What is a Namespace?
?
> A **Namespace** is a way to logically **group and isolate resources** — like a virtual environment or folder — so multiple teams/apps can use the same cluster _without conflict_.
---
## ☸️ In Kubernetes (K8s)
In K8s, **Namespaces** divide the cluster into **virtual sub-clusters**.
### 🎯 Why Use It?
✅ Avoid name collisions between resources
✅ Apply RBAC (access control)
✅ Better organization of environments (dev, test, prod)
✅ Easier resource quota management
---
## 📦 Default Namespaces in Kubernetes
|Namespace|Purpose|
|---|---|
|`default`|Default workspace if none is specified|
|`kube-system`|System components (DNS, scheduler, etc.)|
|`kube-public`|Publicly readable, mostly for cluster info|
|`kube-node-lease`|Tracks node heartbeats|
-
---
## 🔧 Common kubectl Commands
```bash
kubectl get namespaces                             # List all namespaces
kubectl create namespace dev                       # Create a new namespace
kubectl delete namespace dev                       # Delete a namespace
kubectl get pods -n dev                            # View pods in dev namespace
kubectl apply -f app.yaml -n dev                   # Deploy app to dev namespace
```
---
## 🧾 Sample YAML with Namespace
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: myapp
  namespace: dev
spec:
  containers:
  - name: myapp
    image: nginx
```
---
## 🧠 Where Else Namespaces Exist?
|Tool|Use of Namespace|
|---|---|
|**Linux**|Process, network, user namespaces (for isolation)|
|**Docker**|Uses Linux namespaces internally for container isolation|
|**Cloud (AWS)**|IAM namespaces in resource policies|
|**Terraform**|Workspace == Namespace conceptually|
---
## 🏹 DevOps Use Cases
- 📍 Deploy multiple environments (dev, staging, prod) in the same K8s cluster
- 📍 Isolate CI/CD pipelines per team
- 📍 Apply resource limits per namespace
- 📍 Control access (via RBAC) to avoid cross-team interference
---
Want me to show a **Jenkinsfile deploying to a specific namespace**? Or how Helm uses namespaces?
<!--SR:!2025-05-02,1,150-->




## 📂 What is a File System?
?
> A **File System** is the **way data is stored and organized** on disk — it defines how files and directories are named, stored, accessed, and managed.
---
## 💡 Why File System Matters in DevOps?
In DevOps, you're constantly dealing with files and directories:
- Scripts (`.sh`, `.yaml`, `.tf`)
- Logs
- Configuration files (`nginx.conf`, `.env`)
- Binaries and volumes (in Docker, K8s)
- Knowing file systems helps you: ✅ Manage storage
	- ✅ Troubleshoot disk issues
	- ✅ Mount volumes in containers
	- ✅ Secure file access
	- ✅ Automate tasks using shell scripts
---
## 🧱 Common File System Types
|File System|Used In|Notes|
|---|---|---|
|`ext4`|Linux|Most common Linux FS|
|`NTFS`|Windows|Supports permissions, large files|
|`FAT32`|USB drives (cross-OS)|Simple, but limited|
|`xfs`|High-performance Linux FS|Good for large files|
|`tmpfs`|RAM-based FS|Used in containers & caching|
|`overlayfs`|Docker|Used in image layering|
|`efs`|AWS Elastic File System|Shared file storage|
|`nfs`|Network File System|Shared access over network|
-
## 🧰 Useful Linux Commands
```bash
df -h               # Check disk usage
du -sh *            # Size of folders/files
ls -lh              # Detailed file list
mount               # Show mounted file systems
cat, less, tail     # Read files
chmod / chown       # Change permissions / ownership
```
---
## 📦 In Docker & Kubernetes
### 🔸 Docker
```bash
docker volume create myvol
docker run -v myvol:/data ubuntu
```
 Docker uses **overlay file systems** to manage container layers.
---
### 🔸 Kubernetes
```yaml
volumeMounts:
  - mountPath: "/data"
    name: myvol
volumes:
  - name: myvol
    emptyDir: {}
```
You can also use:
- `hostPath`
- `persistentVolumeClaim`
- `nfs`
- `awsElasticBlockStore`
---
## 🔒 File System Permissions
```bash
chmod 755 file       # Set permissions
chown user:group file # Set ownership
```
DevOps often uses permissions to: ✅ Secure secret files
- ✅ Manage deploy scripts
- ✅ Limit log access
---
Want me to show **how Jenkins handles file systems**, or how **Docker volumes** map into containers?
<!--SR:!2025-05-02,1,150-->




 
## 🌐 Networks (In DevOps Context)
?
---
### 🧠 **General Meaning**
A **network** is a group of **connected systems** (like servers, containers, or virtual machines) that can **communicate** with each other to share data.
---
### 🎯 **Why It Matters in DevOps**
- Apps/services need to talk to databases, APIs, or each other.
- CI/CD tools (like Jenkins, GitLab) push/pull from remote servers.
- Containers (like Docker) use **network bridges** to communicate.
---
### 🔧 **Common Networking Concepts in DevOps**
---
#### 🧩 **1. IP Address**
Unique ID for each machine on a network (e.g. `192.168.1.10`).
#### 🧱 **2. Subnet**
A smaller network within a bigger one (used to group machines).
#### 🔁 **3. DNS (Domain Name System)**
Translates names (`google.com`) into IP addresses (`142.250.67.238`).
#### 🛡 **4. Firewall**
Controls what traffic is allowed or blocked between machines.
#### 🔄 **5. Port**
A logical connection point (e.g., port 80 for HTTP, 22 for SSH).
---
### 🐳 **Docker Networking (DevOps Hotspot)**
|Type|Description|
|---|---|
|`bridge`|Default. Isolated container network on a single host.|
|`host`|Container shares host machine's network stack.|
|`none`|No networking. Totally isolated container.|
|`overlay`|Allows Docker containers on **multiple hosts** to communicate (used in **Swarm** or **Kubernetes**).|
|`macvlan`|Assigns a **MAC address** to containers (advanced use).|
---
### 🧪 **Example in Docker:**
```bash
docker network create my_custom_net
docker run -d --network=my_custom_net --name=web nginx
docker run -d --network=my_custom_net --name=db mysql
```
> Both containers can now talk to each other using their container names like: `web` can access `db:3306`
---
### ☁️ **Cloud Networking (AWS, Azure, GCP)**
|Term|Meaning|
|---|---|
|**VPC**|Virtual Private Cloud – isolated network in cloud|
|**Subnet**|Sub-section of a VPC|
|**Security Group**|Acts like a firewall in the cloud|
|**Load Balancer**|Distributes traffic among multiple servers|
|**NAT Gateway**|Gives private instances access to the internet|
---
### ⚡ Use-Cases in DevOps
- Ensuring Jenkins agents can connect to GitHub
- Allowing Docker containers to communicate securely
- Deploying microservices with controlled traffic flow
- Monitoring with Prometheus/Grafana across networks
---
Want me to add **Kubernetes networking**, **network troubleshooting commands**, or a visual mindmap for this?
<!--SR:!2025-05-02,1,150-->



 
## 🛠️ Service File (DevOps Context)
?
---
### 💡 **What is a Service File?**
> A **service file** is a configuration file used to define how a **background service (or daemon)** should behave — how it starts, stops, restarts, logs, etc.
---
### 🔧 **1. Linux (systemd) – `.service` File**
🗂 Location:
- `/etc/systemd/system/yourapp.service`
📄 Structure:
```ini
[Unit]
Description=My Custom App Service
After=network.target
[Service]
ExecStart=/usr/bin/python3 /opt/app/app.py
Restart=always
User=ubuntu
[Install]
WantedBy=multi-user.target
```
▶️ Commands:
```bash
sudo systemctl start yourapp.service
sudo systemctl enable yourapp.service
sudo systemctl status yourapp.service
```
✅ **Use in DevOps**:
Used to define persistent microservices, build agents, custom scripts, web apps etc.
---
### 🐳 **2. Docker Compose - Services**
In a `docker-compose.yml` file, `services` define containers:
```yaml
services:
  web:
    image: nginx
    ports:
      - "80:80"
  db:
    image: mysql
    environment:
      MYSQL_ROOT_PASSWORD: root
```
🧠 **Here:**
Each container (e.g., `web`, `db`) is treated as a **service** in the stack.
---
### ☸️ **3. Kubernetes - Service Manifest**
A **Kubernetes Service** is used to expose a group of Pods:
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  type: ClusterIP
  selector:
    app: myapp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
```
🔗 This acts like a **load balancer** inside the cluster to let pods talk.
---
### 📦 Summary Table
| Context             | Purpose                               | Format/Tool |
| ------------------- | ------------------------------------- | ----------- |
| **Linux (systemd)** | Manage daemons/apps on system startup | `.service`  |
| **Docker Compose**  | Define containers as services         | `YAML`      |
|**Kubernetes**|Expose Pods over the network|`YAML`|
---
Want examples for creating your own `.service` file, or comparisons between **systemd vs Docker service**, or even a cheat sheet?
<!--SR:!2025-05-02,1,150-->








 
## 🩺 Health Check
?
---
### [!caution] Definition
Health Check is a mechanism to automatically verify **whether a service, container, or system component is functioning properly**. It helps automation tools like Docker, Kubernetes, or monitoring systems detect failures and take corrective actions.
---
### 📦 **1. Docker Health Check**
You can define a health check in your Dockerfile:
```Dockerfile
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8080/ || exit 1
```
📌 Docker uses this to mark containers as:
- `healthy`
- `unhealthy`
🧠 Useful for orchestration tools to decide if a container should be restarted.
---
### ☸️ **2. Kubernetes Health Probes**
K8s provides **two types of health checks**:
#### ✅ Liveness Probe
- Checks **if the app is alive**.
- If it fails, K8s restarts the container.
```yaml
livenessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 10
```
#### 🔍 Readiness Probe
- Checks **if the app is ready to serve traffic**.
- If it fails, the pod is removed from the load balancer.
```yaml
readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 5
```
---
### 🧠 Why Health Checks Matter in DevOps?
✅ Auto-restart broken services
✅ Prevent broken apps from getting traffic
✅ Early failure detection
✅ Automation-friendly (CI/CD, Infra-as-Code)
---
### >[!example] Examples
- A **Node.js app** might expose `/health` endpoint returning `200 OK`.
- A **Spring Boot app** exposes `/actuator/health`.
---
Want me to generate sample `Dockerfile`, `deployment.yaml`, or a shell script for a custom health check?
<!--SR:!2025-05-02,1,150-->



 
## ⚡ Cache in DevOps
?
---
### [!caution] Definition
Cache is a temporary **storage layer** that stores frequently accessed data, files, or results **so that future requests are faster**.
It avoids recomputation or re-fetching of the same data from a slower source.
---
### 🧱 Where Caching is Used in DevOps
#### 1️⃣ **Build Caching**
- Speeds up CI/CD pipelines.
- Prevents re-downloading dependencies.
🛠️ **Example:**
- `npm ci` or `maven install` can use cache to skip re-installing.
📁 GitHub Actions:
```yaml
- uses: actions/cache@v3
  with:
    path: ~/.m2/repository
    key: ${{ runner.os }}-maven-${{ hashFiles('**/pom.xml') }}
```
---
#### 2️⃣ **Docker Layer Cache**
- Docker builds image layers.
- If nothing changed in the layer, it uses the cached version.
```Dockerfile
# Cache will hit here if package.json hasn’t changed
COPY package.json .  
RUN npm install
```
💡 Tip: Put frequently unchanged commands early in your Dockerfile to maximize caching.
---
#### 3️⃣ **Web Cache / CDN**
- Used to cache static files (HTML, JS, images).
- Reduces server load and latency.
🌍 Examples:
- **Cloudflare**, **Akamai**, **AWS CloudFront**
---
#### 4️⃣ **Application-Level Caching**
- Inside your code — cache DB query results, computed values, etc.
- Redis or Memcached are common tools.
```python
# Python Flask + Redis example
@app.route("/users")
def users():
    cached = redis.get("users")
    if cached:
        return cached
    result = db.query("SELECT * FROM users")
    redis.set("users", result)
    return result
```
---
#### 5️⃣ **Kubernetes & Helm Chart Cache**
- Helm caches downloaded charts to avoid re-pulling:
```bash
helm repo update
```
---
### ✅ Benefits
- ⚡ Speeds up build & deployment
- 📉 Reduces bandwidth/CPU usage
- 🔄 Increases repeatability
- 💸 Saves cost on compute & storage
---
### ![[advantage image.png|90]] **Advantages of Cache**
- Reuse of expensive computations or downloads
- Improves performance drastically
- Helps in high-availability and fault tolerance
---
### ![[disadvantage image.png|70]] **Drawbacks**
- ❌ Stale cache can serve outdated data
- ❌ Hard to invalidate programmatically
- ❌ Inconsistent cache across environments can cause bugs
---
Want me to show you:
- How to use caching in Jenkins pipelines?
- How to cache Python, Node, or Java builds?
    Let me know your stack and I’ll tailor it.
<!--SR:!2025-05-02,1,150-->




 
## 📦 Blueprint Deployment
?
---
### [!caution] Definition
Blueprint Deployment refers to deploying **infrastructure, services, or environments** using a **predefined configuration or template**, often **version-controlled** and reusable.
It acts as a **ready-made plan or skeleton** to spin up complete systems in a repeatable way.
---
### 🧰 Common Tools for Blueprint Deployments
#### ☁️ **Cloud Providers**
- **AWS CloudFormation**: Uses **YAML/JSON** templates to define infra.
- **Azure ARM Templates**: Blueprint for VMs, networks, storage, etc.
- **Google Deployment Manager**
#### 📐 **Infrastructure as Code (IaC)**
- **Terraform**: Uses `.tf` files to create repeatable environments.
- **Pulumi**: Blueprint using real programming languages (Python, Go, etc.)
#### ⚙️ **Configuration Management**
- **Ansible Playbooks**
- **Chef Recipes**
- **SaltStack Formulas**
#### 🧪 **CI/CD Pipelines**
- Jenkins, GitHub Actions, or GitLab CI use blueprints to define **jobs/stages** in YAML files.
---
### ![[advantage image.png|90]] Advantages of Blueprint Deployment
- **Repeatability** 🌀: Same config = same result, every time.
- **Versioning** 📌: Stored in Git for traceability.
- **Scalability** 📈: Clone and deploy to multiple regions/envs.
- **Faster Rollouts** 🚀: Zero manual setup = rapid delivery.
---
### 🏗️ Example: Terraform Blueprint
```hcl
module "webapp" {
  source = "./modules/webapp"
  instance_type = "t2.micro"
  region        = "us-east-1"
}
```
✅ One blueprint = one reusable module. Use it across teams and projects.
---
### 🧭 Blueprint in Kubernetes
**Helm Charts** = Blueprints
They package all K8s YAML files (`deployment.yaml`, `service.yaml`, `ingress.yaml`) into a reusable, versioned chart.
```bash
helm install my-app ./my-app-chart
```
---
### 💡 Use-Cases
✅ Deploying a **standard microservice pattern** across teams
✅ Bootstrapping a **dev/test/prod** environment quickly
✅ Creating **multi-cloud infra** with minimal effort
✅ Managing **disaster recovery** environments from a blueprint
---
### ![[disadvantage image.png|70]] Drawbacks / Cautions
- ❌ Changes to blueprint may break environments if not validated
- ❌ One-size-fits-all doesn't work for complex custom systems
- ❌ Requires DevOps maturity and governance
---
Let me know if you want:
- A sample **Terraform or Helm blueprint**
- How to **modularize** blueprints for team use
- GitOps-based deployment flows using blueprints
I'll customize the learning to your stack or cloud provider.
<!--SR:!2025-05-02,1,150-->






## 🔀 Load Balancer
?
---
### [!caution] Definition
Load Balancer is a network service that automatically distributes **incoming traffic** (requests) across **multiple backend servers**, ensuring:
- **High availability**
- **Fault tolerance**
- **Optimal resource utilization**
---
### 📍 Where It Fits in DevOps
✅ Used in **production deployments**, **staging**, **multi-region infra**, and **microservices architecture**
✅ Load balancers sit between **clients** and your **application servers** (like NGINX, Node.js, or containers)
---
### 🧱 Types of Load Balancers
|Type|How It Works|Example Tools|
|---|---|---|
|🔢 **Layer 4 (Transport)**|Uses IP address + TCP/UDP ports|AWS NLB, HAProxy, MetalLB|
|🧠 **Layer 7 (Application)**|Uses HTTP headers, cookies, URL paths, etc.|AWS ALB, NGINX, Traefik, Envoy|
---
### 🧰 Common Load Balancer Tools in DevOps
- **NGINX** / **HAProxy** – Self-managed LBs for Kubernetes or VMs
- **AWS ALB / NLB** – Cloud-native for EC2, ECS, EKS
- **Kubernetes Ingress Controller** – Acts as an app-layer LB
- **Istio / Linkerd** – Service mesh LBs for internal traffic
- **Azure Load Balancer / Google Load Balancer**
---
### ![[advantage image.png|90]] Advantages of Load Balancer
- ⚖️ **Distributes traffic** across multiple instances
- 💥 **Handles server failures** by rerouting
- 🌍 **Enables horizontal scaling**
- 🔐 **Supports SSL termination**
- 📊 **Monitors backend health**
---
### 🚀 Example: NGINX Load Balancer
```nginx
http {
  upstream backend {
    server app1.example.com;
    server app2.example.com;
  }
  server {
    listen 80;
    location / {
      proxy_pass http://backend;
    }
  }
}
```
---
### ☸️ Load Balancer in Kubernetes
- **Ingress** acts as a **Layer 7 Load Balancer**
- **Service Type `LoadBalancer`** provisions cloud LB (if using AWS/GCP)
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app
spec:
  type: LoadBalancer
  selector:
    app: my-app
  ports:
    - port: 80
      targetPort: 8080
```
---
### ![[disadvantage image.png|70]] Drawbacks / Considerations
- ❗ Misconfigured health checks = unnecessary failovers
- ❗ Costly in cloud if not optimized
- ❗ Needs TLS/SSL management
- ❗ Stateful apps may require **sticky sessions** or IP hash
---
### 💡 Pro Tips
- 🔄 Use **round robin**, **least connection**, or **IP hash** strategies
- 🧪 Always setup **health checks** for backends
- 🛡️ Terminate **HTTPS at load balancer** to offload TLS
- 📈 Integrate with **monitoring** like Prometheus or AWS CloudWatch
---
Want a breakdown on:
- **Ingress + NGINX + Helm setup** in Kubernetes?
- **AWS ALB + ECS setup?**
- **Self-hosted HAProxy config example?**
Let me know your stack or use-case!
<!--SR:!2025-05-02,1,150-->




Here’s a **DevOps-focused** breakdown of **SonarQube**, tailored for your usage in CI/CD pipelines, code quality assurance, and automation workflows:

---

## 🧪 SonarQube
?
---
### [!caution] Definition
SonarQube is an **open-source platform** used for **continuous inspection of code quality**.
It detects:
- **Bugs 🐛**
- **Code Smells 🧼**
- **Security Vulnerabilities 🔐**
- **Duplications**
- Across **many languages** (Java, JS, Python, C++, etc.)
---
### 📍 Where It Fits in DevOps
✅ Used in **CI/CD pipelines** to **automate code quality checks**
✅ Integrated with **Jenkins**, **GitHub Actions**, **GitLab CI**, etc.
✅ Improves **developer feedback loops** and **security posture**
---
### ⚙️ Typical SonarQube Pipeline Integration
```bash
# Step 1: Build your project
mvn clean install
# Step 2: Run SonarQube scan
mvn sonar:sonar \
  -Dsonar.projectKey=my-app \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=YOUR_TOKEN
```
---
### 🔌 Components of SonarQube
|Component|Description|
|---|---|
|🧠 **Sonar Scanner**|CLI tool or Maven/Gradle plugin for analysis|
|🗃 **Sonar Server**|Web UI + REST API for managing dashboards|
|📊 **Quality Gate**|Ruleset (pass/fail) for code checks|
|📍 **Rules & Profiles**|Define what to check (e.g., SQL injection)|
|🔄 **Plugins**|Support for various languages + tools|
---
### 🧠 Quality Gate
A **Quality Gate** is a set of conditions like:
- 🟥 Code Coverage > 80%
- 🟥 No new critical bugs
- 🟥 No new security hotspots
- 🟥 Maintainability rating: A
🚫 **If failed → Jenkins build will break!**
---
### 🛠️ Integration Example in Jenkins
```groovy
pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'mvn clean install'
      }
    }
    stage('SonarQube Analysis') {
      steps {
        withSonarQubeEnv('MySonarQube') {
          sh 'mvn sonar:sonar'
        }
      }
    }
    stage('Quality Gate') {
      steps {
        timeout(time: 1, unit: 'MINUTES') {
          waitForQualityGate abortPipeline: true
        }
      }
    }
  }
}
```
---
### ![[advantage image.png|90]] Advantages of SonarQube
- 🧹 Enforces **clean code** across teams
- 🔐 Catches **security issues early** (OWASP, CWE, SANS)
- 📉 Helps **reduce technical debt**
- 🚦 Breaks the build if **code quality degrades**
- 🌐 Great **dashboard** and **history tracking**
---
### ![[disadvantage image.png|70]] Drawbacks / Limitations
- 🧱 Setup complexity (especially on-premise)
- 🕐 Longer CI times on large repos
- 🔐 Needs care with **token/security** in CI
- 🔄 Some language support is better in paid version
---
### ☁️ SonarQube Editions
|Edition|Highlights|
|---|---|
|**Community**|Open-source, basic features|
|**Developer**|Branch analysis, PR decoration|
|**Enterprise**|Multi-project, governance tools|
|**Data Center**|High availability & scaling|
---
### 📍 Used With
- Jenkins, GitHub Actions, GitLab CI
- Maven / Gradle / npm / Python / CMake
- Kubernetes (can be containerized)
- IDEs like IntelliJ, VS Code (via plugins)
---
Want a **Docker + Jenkins + SonarQube** setup guide next?
Or a cheat sheet of SonarQube CLI + Quality Gate rules?
<!--SR:!2025-05-02,1,150-->


## 🌐 HTTP Status Codes
?
---
### [!caution] Definition
HTTP Status Codes are **three-digit responses** returned by a server to indicate the outcome of an HTTP request.
They are grouped into **five categories**, each serving a distinct purpose.
---
### 📊 Categories of Status Codes
|Code Range|Category|Meaning|
|---|---|---|
|**1xx**|🔄 _Informational_|Request received, processing continues|
|**2xx**|✅ _Success_|Request successfully received/processed|
|**3xx**|🔁 _Redirection_|Further action needed to complete req.|
|**4xx**|❌ _Client Error_|Request is faulty from client side|
|**5xx**|💥 _Server Error_|Server failed to fulfill a valid req.|
---
### ✅ 2xx – Success Codes
|Code|Meaning|Use Case|
|---|---|---|
|**200**|OK|Standard success|
|**201**|Created|Resource created (e.g., POST)|
|**202**|Accepted|Request accepted, still processing|
|**204**|No Content|Success with no return data|
---
### ❌ 4xx – Client Error Codes
|Code|Meaning|Use Case|
|---|---|---|
|**400**|Bad Request|Malformed syntax, invalid params|
|**401**|Unauthorized|Auth required / invalid token|
|**403**|Forbidden|Auth valid but access denied|
|**404**|Not Found|Resource doesn’t exist|
|**409**|Conflict|Duplicate or state conflict|
|**422**|Unprocessable Entity|Validation failed (commonly in APIs)|
---
### 💥 5xx – Server Error Codes
|Code|Meaning|Use Case|
|---|---|---|
|**500**|Internal Server Error|Generic server-side failure|
|**502**|Bad Gateway|Invalid response from upstream server|
|**503**|Service Unavailable|Server overloaded / down for maintenance|
|**504**|Gateway Timeout|Upstream server timed out|
---
### 🔁 3xx – Redirection Codes
|Code|Meaning|Use Case|
|---|---|---|
|**301**|Moved Permanently|Resource has a new permanent URI|
|**302**|Found|Temporary redirect|
|**304**|Not Modified|Cached version is still valid|
|**307**|Temporary Redirect|Like 302 but preserves HTTP method|
---
### 🔄 1xx – Informational Codes
|Code|Meaning|Use Case|
|---|---|---|
|**100**|Continue|Client can continue with request|
|**101**|Switching Protocols|Protocol upgrade (e.g., HTTP→WebSocket)|
|**102**|Processing|Server is processing (WebDAV)|
---
### ![[advantage image.png|90]] Common Usage in DevOps & API
- ✅ 200, 201, 204 – Success signals in REST APIs
- ❌ 400/401/403/404 – Validate auth and user errors
- 💥 500/502/503 – Alerting via logs/monitoring tools (Prometheus, Grafana)
- 📦 422 – Preferred for **validation** errors in modern REST APIs
---
Want me to format this for **Obsidian**, or generate a **cheat sheet image** or **status code chart**?
<!--SR:!2025-05-02,1,150-->



 
## 🔐 Whitelisting
?
---
### [!caution] Definition
Whitelisting is a security mechanism that explicitly **allows** specific entities (e.g. IP addresses, applications, domains, emails) to access a system, service, or resource, while **blocking everything else** by default.
---
### 🎯 Purpose in DevOps
- Strengthen **network-level** and **application-level** security
- Prevent unauthorized access to **CI/CD pipelines**, **servers**, or **internal APIs**
- Ensure only trusted agents/nodes (e.g., Jenkins agents, deploy bots) interact with the infrastructure
---
### 🔧 Common Use Cases
|Area|Whitelisting Target|Example|
|---|---|---|
|🔐 **Firewall rules**|IP addresses|Allow only specific office IPs to SSH server|
|🔗 **APIs**|API keys or domains|Whitelist domain for webhook callbacks|
|💻 **Server access**|User agents or tokens|Allow Jenkins agent via known SSH key|
|📡 **Cloud storage**|VPC, subnet, IAM identity|Whitelist VPC for S3 bucket access|
|📦 **Containers / K8s**|Image registries or ports|Allow only signed images from trusted registry|
---
### ✅ Benefits
- Reduces **attack surface**
- Simplifies **monitoring** by only allowing known traffic
- Easier to **audit access** logs
---
### ❌ Drawbacks
- Needs **constant updates** when IPs/domains change
- May cause **deployment failures** if not updated (e.g., new agent blocked)
- Not scalable for **dynamic or multi-cloud environments** unless automated
---
### 🚀 DevOps Tip
Automate whitelisting with tools like:
- 🔄 **Terraform** + AWS security groups
- 🔐 **Vault** for dynamic secrets and access
- 📜 GitOps for version-controlled whitelisting rules
---
Want it formatted for **Obsidian**, or add examples from **Jenkins**, **AWS**, or **Kubernetes** usage?
<!--SR:!2025-05-02,1,150-->



 
## 🛡️ Firewall Enabling
?
---
### [!caution] Definition
Firewall Enabling refers to the process of activating and configuring a **network security system** that monitors and controls **incoming and outgoing traffic** based on **predefined security rules**.
---
### 🎯 Purpose in DevOps
- 🔐 Protect build servers, agents, containers, and clusters from **unauthorized access**
- 🎯 Enforce **least privilege principle** in deployment environments
- 📦 Secure communication between **microservices**, **Kubernetes pods**, or **CI/CD tools**
---
### 🔧 Common Types of Firewalls
|Type|Usage in DevOps|
|---|---|
|🖥️ **Host-based**|Protect individual Jenkins agents, EC2|
|🌐 **Network-based**|Secure AWS VPC, GCP network, Azure NSG|
|🔍 **Application layer**|Protect web apps from SQL injection/XSS|
|🔁 **Next-gen firewalls**|Cloud-native (like AWS WAF, Azure Firewall)|
---
### 🔧 Enabling Firewalls – DevOps Scenarios
|Platform|Command / Tool|Example|
|---|---|---|
|🐧 Linux|`ufw enable`, `firewalld`|`ufw allow 8080/tcp` for Jenkins|
|☁️ AWS|Security Groups, NACL|Allow 22 from office IP only|
|🐳 Docker|User-defined bridge + iptables|Control which containers can talk|
|☸️ Kubernetes|Network Policies (Calico, Cilium)|Allow ingress to pod only from monitoring ns|
|🏗️ Jenkins / CI/CD|Restrict webhooks, agents via firewall|Enable only GitHub webhook IPs|
---
### ✅ Benefits
- Prevents **unauthorized access** to critical infrastructure
- Supports **zero-trust architecture**
- Enables **network segmentation** in production
---
### ❌ Drawbacks
- Can cause **deployment errors** if misconfigured
- Needs syncing with **dynamic environments** (e.g., cloud IP changes)
- Manual rules → hard to **scale and audit**
---
### ⚙️ DevOps Pro Tips
- 🔄 **Automate firewall rules** using Infrastructure as Code (Terraform, Ansible)
- 🔍 Monitor logs for dropped packets and alerts
- 🧠 Combine firewall with **intrusion detection systems (IDS)** for deeper visibility
---
Want this in **Obsidian format** with icons or embed support (e.g., diagrams)? Or example setup for Jenkins + Docker + AWS?
<!--SR:!2025-05-02,1,150-->





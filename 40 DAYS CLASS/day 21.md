#space/jenkins/40-day-course/21-Day-ci-cd 

#done-space 

### **Jenkins CI/CD Interview Notes**  

---

#### **1. CI/CD Process in Your Organization**
?
- **Tools Used**:
  - **Source Code**: GitHub.
  - **CI/CD Orchestrator**: Jenkins.
  - **Build**: Maven (Java example).
  - **Security**: AppScan (static code analysis, vulnerability checks).
  - **Deployment**: Argo CD (GitOps) + Kubernetes (Helm charts).
- **Workflow**:
  1. Developer commits code → triggers Jenkins pipeline.
  2. Jenkins pulls code → builds with Maven.
  3. Code quality/security scans (SonarQube/AppScan).
  4. Argo CD detects changes in Git → deploys to Kubernetes.
- **Alternative**: For non-Kubernetes setups, deploy to EC2 instances.
<!--SR:!2025-05-04,1,190-->

---

#### **2. Triggering Jenkins Pipelines**
?
- **Methods**:
  1. **Webhooks** (Most Efficient):
     - GitHub sends JSON payload to Jenkins on code commit.
     - Configurable in GitHub repo settings.
  2. **Polling**:
     - Jenkins checks Git for changes periodically (e.g., every minute).
     - Resource-intensive.
  3. **Cron Jobs**:
     - Scheduled triggers (e.g., daily at 11 AM).
     - Risk of delays between commits and triggers.
<!--SR:!2025-05-04,1,130-->

---

#### **3. Backing Up Jenkins**
?
- **Primary Method**: Backup the `.jenkins` folder (hidden directory in Jenkins home).
  - Use `rsync` to sync to EBS volumes/snapshots.
- **Advanced**:
  - Backup external databases (if Jenkins uses them).
  - Plugins like **ThinBackup** for config/job backups.
<!--SR:!2025-05-04,1,130-->

---

#### **4. Handling Secrets in Jenkins**
?
- **Options**:
  1. **Jenkins Credentials Plugin**: Store secrets in Jenkins (encrypted).
  2. **HashiCorp Vault**: External secrets management (recommended for enterprises).
  3. **Environment Variables**: Mask sensitive data in logs.
- **Best Practice**: Never hardcode secrets in pipelines.
>[!hint]- CP, HV, EV
<!--SR:!2025-05-04,1,130-->

---

#### **5. Latest Jenkins Version**
?
- **Check**: Always refer to [Jenkins Official Site](https://www.jenkins.io/).
  - Example (as of 2023): Jenkins 2.414.x (LTS).
- **Why It Matters**: Shows familiarity with updates/security patches.
<!--SR:!2025-05-06,3,230-->



#### **6. Shared Modules/Libraries**
?
- **Purpose**: Reuse pipeline code across teams/projects.
  - Example: A generic "build and deploy" pipeline shared across Java/Python teams.
- **Implementation**:
  - Create a shared library repo (Groovy scripts).
  - Import into Jenkins pipelines via `@Library('shared-lib')`.
<!--SR:!2025-05-04,1,190-->

---

#### **7. Multi-Language Builds**
?
- **Solution**: Use **Docker Agents** in Jenkins pipelines.
  - Example:
```groovy
    pipeline {  
      agent none  
      stages {  
        stage('Build Frontend') {  
          agent { docker 'node:14' }  
          steps { sh 'npm install && npm build' }  
        }  
        stage('Build Backend') {  
          agent { docker 'maven:3.8' }  
          steps { sh 'mvn package' }  
        }  
      }  
    }  
```
- **Benefits**: No dependency conflicts, isolated environments.
<!--SR:!2025-05-04,1,190-->

---

#### **8. Auto-Scaling Jenkins Workers**
?
- **AWS Integration**:
  - Use EC2 Auto Scaling Groups (ASG) for worker nodes.
  - Scale based on CPU/queue load.
- **Plugins**: **Amazon EC2 Plugin** to manage dynamic agents.
<!--SR:!2025-05-04,1,190-->

---

#### **9. Adding Worker Nodes**
?
1. Go to **Manage Jenkins → Manage Nodes and Clouds**.
2. Click **New Node** → Enter node name (e.g., `linux-worker-1`).
3. Configure:
   - Remote root directory (e.g., `/home/jenkins`).
   - Launch method (SSH with keys).
4. Save → Connect agent to master.
<!--SR:!2025-05-04,1,130-->

---

#### **10. Installing Plugins**
?
- **UI**:
  1. **Manage Jenkins → Plugins → Available**.
  2. Search for plugins (e.g., Docker Pipeline, Blue Ocean).
- **CLI**:
```bash
  java -jar jenkins-cli.jar -s http://localhost:8080 install-plugin PLUGIN_NAME  
```
<!--SR:!2025-05-04,1,190-->

---

#### **11. JNLP (Java Network Launch Protocol)**
?
- **Purpose**: Allows Jenkins master to communicate with agents.
- **Usage**:
  - Download `agent.jar` from Jenkins master.
  - Launch agent with:
```bash
    java -jar agent.jar -jnlpUrl http://jenkins-master:8080/computer/agent-name/jenkins-agent.jnlp -secret AGENT_SECRET  
```
<!--SR:!2025-05-04,1,130-->

---

#### **12. Common Jenkins Plugins**
?
1. **Pipeline**: Define pipelines as code (Jenkinsfile).
2. **Docker Pipeline**: Integrate Docker containers.
3. **Blue Ocean**: Modern UI for pipeline visualization.
4. **GitHub Integration**: Webhook triggers.
5. **SonarQube Scanner**: Code quality checks.
6. **Credentials Binding**: Secure secrets in pipelines.
<!--SR:!2025-05-04,1,130-->

---

### **GitHub Reference & Resources**  
- **Sample Project**: [Jenkins Zero-to-Hero Repo](https://github.com/Abhishek-DevOps/Jenkins-Zero-to-Hero).  
- **Interview Q&A**: Detailed answers in the repo’s `interview-questions.md`.  

---

### **Key Takeaways**  
- **Jenkins vs. GitHub Actions**: Use Jenkins for complex/private pipelines; GitHub Actions for public repos.  
- **Security**: Always use secrets management tools (e.g., HashiCorp Vault).  
- **Scalability**: Auto-scale workers using cloud providers (AWS ASG).  

Let me know if you need further breakdowns or examples! 😊
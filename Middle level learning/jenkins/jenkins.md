
#goes-to/jenkins 


- ![[Day 19 jenkins zero to hero]]



### **Jenkins & DevOps Tutorial Notes**  
*(For Practical Learning & Interview Prep)*  

---

### **1. DevOps Overview**  
?
- **What is DevOps?**  
  - Culture shift merging Development (Dev) & Operations (Ops) to enable continuous software delivery.  
  - **Key Goals**: Faster releases, automated testing, improved collaboration.  
  - **Lifecycle Stages**:  
    1. **Continuous Integration (CI)**  
    2. **Continuous Delivery (CD)**  
    3. **Continuous Deployment**  
    4. **Continuous Monitoring**  
- **DevOps vs. Waterfall/Agile**:  
  - **Waterfall**: Linear, slow, no mid-project feedback.  
  - **Agile**: Iterative sprints (2-4 weeks), client feedback.  
  - **DevOps**: Automated CI/CD pipelines, daily/hourly releases.  
- **Key Tools**:  
  - **CI Tools**: Jenkins, Bamboo, Travis CI.  
  - **Configuration Management**: Ansible, Chef, Puppet.  
  - **Monitoring**: Nagios, Prometheus.  

---

#### **2. Jenkins Fundamentals**  
?
- **What is Jenkins?**  
  - Open-source automation server for CI/CD.  
  - **Key Features**:  
    - 1,800+ plugins for integrations.  
    - Distributed builds (master-slave architecture).  
    - Pipeline-as-Code (Jenkinsfile).  



- **Installation of jenkins on (Windows)**:  
- ?
?
  1. **Prerequisites**:  
     - Install JDK 8+ (Set `JAVA_HOME` environment variable).  
  2. **Steps**:  
     - Download Jenkins `.msi` installer from [jenkins.io](https://www.jenkins.io).  
     - Run installer (default port: `8080`).  
     - Unlock Jenkins using initial admin password.  
     - Install recommended plugins.  




- **Jenkins Architecture**:  
?
  - **Master-Slave Model**:  
    - **Master**: Manages jobs, schedules builds, monitors slaves.  
    - **Slave/Agent**: Executes jobs on remote machines.  

---

#### **3. Jenkins Pipeline & Jobs**  
?
- **Pipeline Concepts**:  
  - **Pipeline**: Automated process for building, testing, deploying code.  
  - **Declarative vs. Scripted Pipelines**:  
    - **Declarative**: Simpler syntax, ideal for most use cases.  
    - **Scripted**: Groovy-based, flexible for complex workflows.  
- **Creating a Pipeline**:  
```groovy
  pipeline {
      agent any
      stages {
          stage('Build') {
              steps {
                  echo 'Compiling code...'
              }
          }
          stage('Test') {
              steps {
                  echo 'Running tests...'
              }
          }
          stage('Deploy') {
              steps {
                  echo 'Deploying to production...'
              }
          }
      }
  }
```
- **Freestyle Jobs**:  
  - Use cases: Simple tasks (e.g., running shell scripts).  
  - Example:  
    1. **New Item** → Freestyle project.  
    2. **Build Section**: Add shell/batch command (e.g., `echo "Hello Jenkins"`).  
- **Integrating with GitHub**:  
  1. **Source Code Management**: Add GitHub repo URL.  
  2. **Build Triggers**: Use webhooks for auto-trigger on commit.  

---

#### **4. Advanced Jenkins**  
?
- **Distributed Builds (Master-Slave)**:  
  - **Setup**:  
    - Add a new node in Jenkins → **Manage Jenkins → Manage Nodes**.  
    - Launch agent using JNLP (Java Web Start).  
- **Security**:  
  - **Authentication**: LDAP, Jenkins database, OAuth.  
  - **Authorization**: Role-Based Access Control (RBAC) via plugins. 
- **Backup & Restore**:  
  - Use plugins like **ThinBackup**.  
  - Backup directory: `JENKINS_HOME`.  
- **Key Plugins**:  
  - **GitHub Integration**: Pull code from repositories.  
  - **Blue Ocean**: Modern UI for pipelines.  
  - **Docker**: Integrate containerized builds.  

---

#### **5. Interview Questions**  

- **DevOps**:  


- **Q**: How is DevOps different from Agile?  
?
- **A**: DevOps focuses on CI/CD automation; Agile focuses on iterative development. 


- **Q**: What are CI/CD benefits?  
?
- **A**: Faster releases, fewer bugs, better collaboration.  

- **Jenkins**:  

- **Q**: Explain Jenkins master-slave architecture.  
?
- **A**: Master schedules jobs, slaves execute them.  


- **Q**: How to secure Jenkins?  
?
- **A**: Use RBAC, LDAP integration, HTTPS.  



- **Q**: What is a Jenkinsfile?  
?
- **A**: Text file defining pipeline stages (checked into SCM).  





- **Commands**:  
  - Start Jenkins: `java -jar jenkins.war`.  
  - Restart Jenkins: Access `/restart` or `/safeRestart` URL.  

---

#### **6. Practice Tasks**  

1. **Create a Pipeline Job**:  
   - Automate build, test, deploy stages using a `Jenkinsfile`.  
2. **Integrate GitHub**:  
   - Set up a job to trigger on code commit.  
3. **Master-Slave Setup**:  
   - Configure a slave node for distributed builds.  
4. **Email Notifications**:  
   - Configure SMTP in Jenkins to send build alerts.  

**Example Command for Windows Agent**:  
```bash
java -jar agent.jar -jnlpUrl http://JENKINS_MASTER:8080/computer/AgentName/slave-agent.jnlp -secret YOUR_SECRET
```

---

**Key Resources**:  
- [Jenkins Plugins Index](https://plugins.jenkins.io)  
- [Jenkins Pipeline Syntax](https://www.jenkins.io/doc/book/pipeline/syntax/)  
- [DevOps Tools Cheat Sheet](https://www.simplylearn.com/devops-tools)  

Practice these concepts hands-on to solidify understanding! 🚀
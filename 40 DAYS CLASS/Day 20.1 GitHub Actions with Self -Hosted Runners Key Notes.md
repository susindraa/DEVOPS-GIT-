
#space/40-day-course/21-Day-ci-cd 
 



### **GitHub Actions with Self-Hosted Runners: Key Notes**  

---

#### **1. Introduction**  
- **Purpose**: Learn to configure **self-hosted runners** for GitHub Actions (vs. GitHub-hosted runners).  
- **Use Case**: Deploy a Python project using a self-hosted runner (EC2 instance).  
- **Key Topics**:  
  - Differences between GitHub-hosted and self-hosted runners.  
  - Setup steps for self-hosted runners.  
  - Security considerations.  
  - Comparison with Jenkins.  
  - Common interview questions.  

---

#### **2. GitHub-Hosted vs. Self-Hosted Runners**  
| **GitHub-Hosted Runners** | **Self-Hosted Runners** |  
|---------------------------|--------------------------|  
| Free for public repos.     | Required for private repos or custom needs. |  
| No control over hardware.  | Full control over hardware (e.g., EC2, Docker). |  
| Terminated after job runs. | Persistent and reusable. |  
| Limited security for sensitive data. | Better security for private/enterprise projects. |  

**When to Use Self-Hosted Runners**:  
- **Private repositories** (security concerns).  
- **Custom hardware requirements** (e.g., 32GB RAM, specific dependencies).  
- **Compliance** (data residency, network isolation).  

---

#### **3. Setup Steps for Self-Hosted Runners**  
1. **Launch EC2 Instance**:  
   - OS: Ubuntu (recommended).  
   - Configure security groups: Open **HTTP (80)** and **HTTPS (443)** for inbound/outbound traffic.  

2. **GitHub Configuration**:  
   - Go to **Repo Settings → Actions → Runners → New Self-Hosted Runner**.  
   - Follow steps to download/configure the runner:  
     ```bash
     # Example commands (token provided by GitHub):  
     mkdir actions-runner && cd actions-runner  
     curl -o actions-runner-linux-x64-2.XXX.X.tar.gz -L https://github.com/actions/runner/releases/download/v2.XXX.X/actions-runner-linux-x64-2.XXX.X.tar.gz  
     tar xzf ./actions-runner-linux-x64-2.XXX.X.tar.gz  
     ./config.sh --url https://github.com/your-repo --token YOUR_TOKEN  
     ./run.sh  # Start listening for jobs  
     ```  

3. **Update GitHub Actions Workflow**:  
   - Modify `.github/workflows/your_workflow.yml` to use `self-hosted` label:  
     ```yaml
     jobs:
       build:
         runs-on: self-hosted  # Instead of ubuntu-latest
     ```  

---

#### **4. Security Best Practices**  
- **Token Security**: Never expose the runner token (equivalent to GitHub access).  
- **Network Rules**: Restrict EC2 instance ports to HTTP/HTTPS only.  
- **Isolation**: Use dedicated instances/VPCs for critical workloads.  

---

#### **5. Comparison: GitHub Actions vs. Jenkins**  
| **GitHub Actions** | **Jenkins** |  
|---------------------|-------------|  
| Ideal for **public projects** (free, integrated with GitHub). | Better for **private/enterprise projects** (flexibility, plugins). |  
| Simpler setup for GitHub-native workflows. | Requires manual agent/worker setup (SSH, Docker). |  
| Limited customization for runners. | Advanced customization (plugins, distributed builds). |  
| Built-in secrets management. | Requires plugins for secrets (e.g., HashiCorp Vault). |  

**When to Choose**:  
- **GitHub Actions**: Public repos, lightweight CI/CD, GitHub ecosystem.  
- **Jenkins**: Complex pipelines, legacy systems, private enterprise needs.  

---

#### **6. Interview Questions & Answers**  
1. **Q**: Why use self-hosted runners over GitHub-hosted?  
   **A**: Security (private repos), custom hardware/dependencies, compliance.  

2. **Q**: How to secure sensitive data in GitHub Actions?  
   **A**: Use **GitHub Secrets** (Settings → Secrets & Variables → Actions).  

3. **Q**: How does GitHub Actions compare to Jenkins?  
   **A**: GitHub Actions is simpler for GitHub-native projects, while Jenkins offers more flexibility for complex/private workflows.  

4. **Q**: Explain a GitHub Actions workflow file.  
   **A**: A YAML file in `.github/workflows/` defining triggers (`on: push/pull_request`), jobs, steps, and runner labels.  

---

#### **7. Practice & Next Steps**  
- **Try It**:  
  - Launch an EC2 instance.  
  - Configure a self-hosted runner for a sample Python project.  
- **Explore**:  
  - GitHub Actions Matrix Strategy (parallel jobs).  
  - Integrate with Docker/AWS services.  
- **Watch**: Follow-up video on **GitLab CI/CD** for end-to-end Java projects.  

---

#### **Resources**  
- [GitHub Actions Documentation](https://docs.github.com/en/actions)  
- [Sample Project Repository](https://github.com/Abhishek-DevOps/GitHub-Actions-Zero-to-Hero)  

Let me know if you need further clarifications or a deep dive into any section! 😊
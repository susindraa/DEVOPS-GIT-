

#done-space



### GitHub Actions: Zero to Hero Notes

---


#space/40-day-course/20-Day-Github

#### **1. Introduction to GitHub Actions**
?
- **What is GitHub Actions?**
  - A CI/CD solution integrated with GitHub.
  - Executes workflows based on events (e.g., `push`, `pull_request`, `issues`).
  - Uses YAML files in `.github/workflows/` directory.
<!--SR:!2025-05-04,1,150-->

---

#### **2. Key Features of GitHub**
?
- **Event-Driven Workflows**
  - Triggers on GitHub events: `push`, `pull_request`, `scheduled`, etc.
  - Example:
```yaml
on:
  push:
	branches: [ main ]
  pull_request:
	branches: [ main ]
```
- **Jobs and Steps**
  - **Jobs**: Groups of steps (similar to Jenkins pipelines).
  - **Steps**: Individual tasks (e.g., checkout code, install dependencies).
  - Example:
```yaml
    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - name: Checkout code
            uses: actions/checkout@v3
          - name: Setup Python
            uses: actions/setup-python@v2
            with:
              python-version: '3.9'
```
- **Pre-Built Actions**
  - Reusable plugins from GitHub Marketplace (e.g., `actions/checkout`, `actions/setup-python`).
<!--SR:!2025-05-04,1,150-->

---

#### **3. Example: Python Test Pipeline**
?
- **Goal**: Run tests on every commit.
- **Workflow File** (`.github/workflows/python-ci.yml`):
```yaml
  name: Python CI

  on: [push]

  jobs:
    test:
      runs-on: ubuntu-latest
      strategy:
        matrix:
          python-version: [3.8, 3.9]
      steps:
        - uses: actions/checkout@v3
        - name: Set up Python ${{ matrix.python-version }}
          uses: actions/setup-python@v2
          with:
            python-version: ${{ matrix.python-version }}
        - name: Install dependencies
          run: |
            pip install pytest
        - name: Run tests
          run: pytest src/test_addition.py
```
- **Explanation**:
  - Checks out code using `actions/checkout@v3`.
  - Sets up Python versions 3.8 and 3.9 using `actions/setup-python@v2`.
  - Installs `pytest` and runs tests.
<!--SR:!2025-05-04,1,150-->

---

#### **4. GitHub Actions vs Jenkins**
?
- **Advantages of GitHub Actions**:
  - **Hosting**: Fully managed by GitHub (no server setup/maintenance).
  - **Cost**: Free for public repositories; lower overhead for private repos.
  - **Ease of Use**: Simple YAML syntax, pre-built actions.
  - **Integration**: Native with GitHub (secrets management, PR checks).
- **Disadvantages**:
  - **Platform Lock-in**: Tightly coupled with GitHub (hard to migrate to other platforms).
  - **Limited Plugins**: Smaller ecosystem compared to Jenkins.
<!--SR:!2025-05-05,5,230-->

---

#### **5. Advanced Use Case: Java + Maven + Sonar + Kubernetes**
?
- **Workflow Steps**:
  1. Checkout code.
  2. Set up Java with Maven.
  3. Build and test code.
  4. Run SonarQube analysis.
  5. Deploy to Kubernetes.
- **Example Workflow**:
```yaml
  name: Java CI/CD

  on:
    push:
      branches: [ main ]

  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - name: Set up JDK
          uses: actions/setup-java@v3
          with:
            java-version: '11'
        - name: Build with Maven
          run: mvn clean install
        - name: SonarQube Scan
          uses: sonarsource/sonarqube-scan-action@master
          env:
            SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
    deploy:
      needs: build
      runs-on: ubuntu-latest
      steps:
        - name: Deploy to Kubernetes
          uses: azure/k8s-deploy@v1
          with:
            kubeconfig: ${{ secrets.KUBECONFIG }}
```
- **Secrets Management**:
  - Store sensitive data (e.g., `SONAR_TOKEN`, `KUBECONFIG`) in GitHub Secrets (**Settings → Secrets**).
<!--SR:!2025-05-04,1,150-->

---

#### **6. Best Practices of Github**
?
- **Use Matrix Builds**: Test across multiple environments (e.g., Python 3.8, 3.9).
- **Reuse Workflows**: Avoid duplication using shared workflows.
- **Self-Hosted Runners**: For compute-heavy tasks or security requirements.
  - Configure in **Settings → Actions → Runners**.
<!--SR:!2025-05-05,5,230-->

---

#### **7. Learning Resources**
- **GitHub Actions Docs**: [Official Documentation](https://docs.github.com/en/actions)
- **Example Repositories**:
  - [Argo CD Workflows](https://github.com/argoproj/argo-cd/tree/master/.github/workflows)
  - [Python CI Example](https://github.com/your-repo/python-ci-example)

---

### Practice Exercise
1. **Create a Simple Python Workflow**:
   - Fork [this example repo](https://github.com/your-repo/github-actions-demo).
   - Add a workflow to run tests on every push.
2. **Add Secrets**:
   - Store a dummy API key in GitHub Secrets and use it in a workflow step.
3. **Explore Matrix Builds**:
   - Modify the Python workflow to test on Ubuntu, macOS, and Windows.

---

By mastering GitHub Actions, you can automate CI/CD pipelines seamlessly within GitHub, reducing infrastructure management and accelerating deployments! 🚀
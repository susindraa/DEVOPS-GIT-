## 🧩 **JENKINS**

### ✅ Beginner

1. **What is Jenkins and what problems does it solve?**
    - it solves the problem of overutilization of resources. 
    - it helps continous integration and continous development.
    - _Follow-up:_ How is Jenkins different from tools like GitHub Actions or CircleCI?
        - when the execution becomes complex using github action and circleci is difficult. 
        - The availability of plugins is huge compared to other tools. 
        - The flexibility and community development and support is large in jenkins compared to github actions and circleCI
2. **How do you install a Jenkins plugin?**
	1. we required prerequisites like java to install based the instance install the plugin and use thourgh command line or through graphical interface through web browser
    
    - _Follow-up:_ How do you verify plugin compatibility with Jenkins versions?
        
3. **What is a Jenkins Pipeline?**
	1. pipeline is structured execution of commands defined in the jenkins or in file, which integrates everything like pulling source code, installing dependencies, defining  variables, testing the code, artifact development and deployment. 
    
    - _Follow-up:_ Can you describe a scenario where using a pipeline helped streamline your CI/CD?
	    - yeah pull the code - install the dependencies - define variables if required - test the code - report the status - deploy the file 
	    - 
        
4. **What's the difference between Freestyle projects and Pipelines?**
	1. freestyle is simple and sample pipeline, which is used for basic tasks or use to test simple or single file in the jenkins, with or without code.
	2. on the other hand pipeline is used to execute large and multi stage pipe lines, we can use it for post build and prebuild and use the pipeline multiple times.
    
    - _Follow-up:_ Why would you migrate Freestyle jobs to Pipelines?
        
5. **How do you trigger a Jenkins job automatically?**
	1. using timesentive
	2. using webhooks
	3. push triggered
	4. 
    
    - _Follow-up:_ How would you trigger a job when code is pushed to a specific Git branch?
	    - using webhooks
        

---

### ⚙️ Intermediate

1. **Explain the structure of a `Jenkinsfile`.**
	1. it start with agent and then define the environment and then contains the stages. In the stages section we define the what to build.
    
    - _Follow-up:_ How do you handle pipeline versioning or reuse across projects?
        - during the configure we will trigger the particular or required pipelines to reuse them
2. **How do you manage secrets and credentials securely in Jenkins?**
	1. using credential pluging and mostly keeping the jenkins file in the source.
    
    - _Follow-up:_ How would you rotate credentials in a live Jenkins pipeline?
		- Through credentials plugin
        
3. **What are post-build actions? Give examples.**
    - what should happen after the build is successful, for we gave trigger the pipe if there is a push in the github, it will build pipeline, test the code and build the code. once build is successful it will deploy the file in the server and deploy the file in client server.
    - _Follow-up:_ How would you notify different teams based on success or failure of a build?
	    - using email notification plugin
    
4. **How do you implement parallel stages in a Jenkins pipeline?**
	1.  dont know
    
    - _Follow-up:_ What are the performance implications of using too many parallel stages?
    - dont know
        
6. **What’s the difference between scripted and declarative pipelines?**
	1. Scripted is wrote based on groovy. scripted pipe is easy and good for large  size files if the file size is large it is best to operate.
	2. Declarative pipelines is better for small size coding. it is easier to read and write compared to scripted.
    
    - _Follow-up:_ Which one do you prefer and why?
	    - Depending on the file, mostly scripted if want to reuse the file and pipeline.
        

---

### 🔬 Advanced

1. **How would you scale Jenkins to handle hundreds of builds per day?**
	1. using the blueocean plugin for better visualization.
	2. using pipelines we can handle hundereds of builds
	3. It is better to place the jenekins file in the source rather than placing the code in the jenkins applications itself
    
    - _Follow-up:_ Have you worked with dynamic agents using Kubernetes or cloud providers?
	    - yes
        
2. **How do you handle Jenkins master-slave architecture and agent management?**
	1. using role based plugin to configure master and slave architecture.
    
    - _Follow-up:_ How do you ensure security when agents are provisioned dynamically?
	    - using credential plugin we can enhance the security and always follow least access convention
        
3. **Describe a disaster recovery plan for Jenkins.**
	1. There are different types of backup plugins are available using the backup files we can revive to last backup position
    
    - _Follow-up:_ What files or configurations are critical for backup?
	    - i forgot  i think backup files
        
4. **How do you integrate Jenkins with tools like SonarQube, Docker, and Kubernetes?**
	1. go to plugin column  try to install and configure required tool, provide the credential and define environmental variables. Now we are good to go.
    
    - _Follow-up:_ Can you walk through a pipeline that includes code analysis and container deployment?
	    - first take a new pipeline
	    - if the code is in the git hub select source code from git hub then provide credentials if it is private.
	    - write groovy code in the pipeline specifying stages and what to build or other provide jenkins file from the source code.
        
5. **How do you troubleshoot stuck or hanging builds in Jenkins?**
	1. go  to the stuck build no and check the log files, then troubleshoot them.
    
    - _Follow-up:_ Have you used the `Thread Dump` feature or build logs to isolate issues?
	    - no 
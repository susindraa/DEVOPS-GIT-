## **DOCKER**

### ✅ Beginner

1. **What is Docker, and how is it different from a virtual machine?**
	1. Docker allocate resources depending on the dependencies and requirement of the application, in case of virtual machines once we allocated resources the resources will either we use it completely or not.
    
    - _Follow-up:_ What are some common use cases where containers are better than VMs?
	    - better resource utilization of  resources.
	    - Auto creation of system specifications
	    - There is no need for installation of dependencies by the user or client. 
	    - The docker images contains the all the required dependencies to run the application. 
        
2. **What is the purpose of the Dockerfile?**
	1. Docker files contains structured instructions how and what type of dependencies are required and how and what type of docker file to create.
    
    - _Follow-up:_ What are best practices for creating a clean and efficient Dockerfile?
        - Install only necessary packages.
        - if the code is repetitive use the already deveolped images.
        - use .dockerigonre files 
3. **How do you list all running containers and stop one?**
	1. docker get containers 
	2. docker terminate conatinersname
    
    - _Follow-up:_ How do you remove a container and its volumes?
	    - docker delete container name
        
4. **What's the difference between an image and a container?**
	1. conatiner i like an instance where you can run the image. Image contains all the files to run a application
    
    - _Follow-up:_ How do you inspect the history of an image?
	    - docker log.files
        
5. **How do you expose a port in Docker?**
	1. docker run -d  httpd 80:80 --name httpd container name
    
    - _Follow-up:_ What happens if you don’t map a port when running a container?
	    - we cannot pull the image outside the environment like if it is a web application we cannot access it.
        

---

### ⚙️ Intermediate

1. **How do volumes work in Docker, and what types of volumes are there?**
	1. dont know
    
    - _Follow-up:_ When would you use a bind mount over a named volume?
        
2. **How do you optimize the size of a Docker image?**
	1. using multi stage docker file
    
    - _Follow-up:_ How would you reduce the number of layers in a Dockerfile?
	    - dont know
        
3. **How do you troubleshoot a failing container?**
	1. through log files
    
    - _Follow-up:_ What logs or commands do you use first?
	    - docker docker name log files
        
4. **What are multi-stage builds in Docker and why are they useful?**
	1. In multi stage we separate the docker image building, in the first stage we provide the dependencies to build image and in the second stage we provide only the specific required dependencies to run the image. so we can reduce the image size to minimal
    
    - _Follow-up:_ Can you show a Dockerfile example that uses multi-stage builds?
        - yes check chat gpt
5. **How do you handle environment-specific configurations in Docker?**
	1. i will either give in the .dockerignorefiles or if i am jenkins will use credential plugins to separate the variables from the docker
    
    - _Follow-up:_ Have you used Docker Compose or `.env` files for this?
        - yes i did

---

### 🔬 Advanced

1. **What happens under the hood when you run `docker run`?**
	1. docker create a namespace and checks the required packages and run the commands provided in the docker file.
    
    - _Follow-up:_ Can you explain the role of cgroups and namespaces?
        - Namespaces is like creation of unique or separate space or instance to run an application. Cg groups uses the kernel process of linux, they mostly stops the over utilization of resources.
2. **How would you secure a Docker container in production?**
	1. dont know
    
    - _Follow-up:_ What tools or configurations do you use to restrict privileges?
        - dont know
3. **Explain how Docker networking works (bridge, overlay, host).**
    - They are for the communation between the nodes.
	    - bridge is default one where, nodes can communicate with each other.
	    - Host is will communicate with nodes where the node is hosted
	    - Overlay network required the developer to define to which node it needs it allow communication
    - _Follow-up:_ What happens when two containers on different networks try to communicate?
	    - depending on the network type 
        
4. **What’s the difference between ENTRYPOINT and CMD in a Dockerfile?**
	1. entry point and cmd are used to execute the variable or commands
	2. In entrypoint we cannot change or modify while executing the programme but in the cmd we can modify while executing the programme
    
    - _Follow-up:_ How do you override ENTRYPOINT at runtime?
	    - no, we cannot override
        
5. **How do you manage Docker at scale (e.g., using Docker Compose, Swarm, or Kubernetes)?**
	1. using kubernets or like softwares
    
    - _Follow-up:_ What challenges have you faced scaling services across environments?
	    - mostly port allocation difference.
	    - Loss of dependencies when there is new version.
	    - version difference and compatibility issues.
	    - 



[[Day 23 Containers, Docker, and Buildah]]

#done-space

#space/docker/40-day-course/24-Day-docker 


# Docker 0 to Hero: Part 1 Briefing Document

**Date:** October 26, 2023 (Based on source content) **Author:** AI Language Model (Based on Abhishek's content) **Sources:** Excerpts from "Pasted Text" (Abhishek's DevOps Course - Day 24)

## Overview

This briefing document summarizes the main themes and important ideas presented by Abhishek in Day 24 of his complete DevOps course, focusing on "Docker 0 To Hero" Part 1. The session covers fundamental Docker concepts, terminology, installation, basic usage (building and running containers), and sharing Docker images via a public registry (Docker Hub). Abhishek emphasizes the importance of watching the previous video (Day 23) which covered the basics of containers.

## Main Themes and Important Ideas

### 1. Why Containers are Lightweight
?
- **Core Difference from Virtual Machines:**
	- Containers differ fundamentally from virtual machines (VMs) in that they do not bundle a full guest operating system. Instead, they share the kernel of the host operating system.
		- _"on to your right side there is a virtual machine which has a complete guest operating system so that's why it's very heavy in nature whereas to your left side you have a container that does not have an operating system they just have some base image or they just have some base operating system and rest of the things they use from the host operating system like the critical things like the kernel and all the important things they use from the host operating system..."_
- **Application and Dependencies:**
	- Containers primarily include the application code, its dependencies, and some required system dependencies to run the application.
	- _"containers do not have a full operating system they just have application Plus application dependencies plus some required system dependencies to run your application..."_
- **Resource Efficiency:**
	- Due to the absence of a full OS, containers are significantly lighter and consume fewer resources compared to VMs. Multiple containers can run on the same host OS, sharing its kernel.
	- _"containers are very lightweight in nature that means to say that on a specific virtual machine itself you can create multiple containers and if the containers are not running they don't use resources from the kernel..."_
- **Logical Isolation:**
	- While sharing the kernel, containers maintain logical isolation through specific files and folders within their image, preventing interference and security breaches between containers.
	- _"containers even though like I say that they don't have complete operating system but they need to have some part of logical isolation without that logical isolation any people who can log into your kubernetes cluster any hacker who can get into your kubernetes cluster or a specific container he can get into your all the containers that are present on your cluster which is like a dangerous hack right or you are compromising with the security of your applications..."_
- **Files and Folders in a Container vs. Host:**
	- Abhishek clarifies which files and folders are typically part of a container image (e.g., /bin, /sbin, /etc, /lib, /usr, /var, /root) for isolation, and which are shared from the host OS/kernel (e.g., host file system, networking stack, system calls, namespaces, control groups). He refers viewers to his GitHub repository for a detailed breakdown.
- **Size Comparison:**
	- To illustrate the "lightweight" nature, Abhishek compares the size of an official Ubuntu Docker image (around 28 MB) with a full Ubuntu virtual machine image (around 2.3 GB), highlighting the significant difference.
	- _"this Ubuntu container based image has all of these files and folders anybody who is implementing application on this Ubuntu base image they that application will use all of these files and folders from the Ubuntu official Docker image and rest of the things like the kernel related things networking stack related things or the file system related things it will use from the host operating system or from the kernel right make sense perfect so now to explain you this is official Ubuntu Docker image and this image is just 28.16 MB on Linux AMD 64 platform okay it is just 28.16 MB if you compare it with a Ubuntu virtual machine image like you know it can go up to 2.3 GB..."_
<!--SR:!2025-05-10,5,190-->

### 2. Docker as a Platform and its Architecture
?
- **Containerization Implementation:**
	- Docker is presented as a platform that implements the concept of containerization.
	- _"if containerization is a concept then Docker is a platform that implements this containerization okay..."_
- **Key Components:** The Docker architecture involves:
	- **Docker Client:** The command-line interface (CLI) used by users to interact with Docker.
	- **Docker Daemon (Docker D):** A background service that listens for Docker API requests and manages Docker objects (images, containers, networks, volumes). It is the "heart of Docker."
	- **Docker Registries:** Services that store Docker images (e.g., Docker Hub, private registries).
	- **Workflow:** The Docker client sends commands to the Docker daemon, which then performs actions like building images, running containers, and pushing/pulling images from registries.
	-
<!--SR:!2025-05-10,5,210-->

### 3. Docker Life Cycle
?
- **Docker File:**
	- The process begins with writing a Dockerfile, which is a set of instructions defining how to build a Docker image. These instructions include the base image, application code, dependencies, and startup commands.
	- _"Docker file is basically a set of instructions so a set of instructions is like you tell a Docker demon that okay get me a base image..."_
- **Docker Image:**
	- Using the docker build command and the Dockerfile, the Docker daemon creates a Docker image. An image is a read-only template that contains everything needed to run an application.
	- _"using the docker CLI you submit this Docker file to Docker Daemon using the docker build command and it creates a Docker image for you once the docker image is created what is an image image is just like if you come compare it with a virtual machine so image is just like a snapshot..."_
- **Docker Container:**
	- When a Docker image is run using the docker run command, the Docker daemon creates a running instance of the image, which is a Docker container.
	- _"once this Docker image is run using the docker run command what happens is this receives the docker run command and it again creates a Docker container for you right so this Docker container is your final output which has like I always tell you system dependencies application libraries and your application itself..."_
- **Sharing via Registry:**
	- Docker images can be shared with others by pushing them to a Docker registry. Others can then pull and run these images.
<!--SR:!2025-05-10,5,210-->

### 4. Docker Terminology
?
Abhishek explains essential Docker terms:
- **Docker Daemon (Docker D):** A service that listens to Docker requests and manages Docker objects.
- **Docker Client:** The CLI tool for interacting with the Docker daemon.
- **Docker Registry:** A place to store and share Docker images (e.g., Docker Hub).
- **Docker Hub:** A popular public Docker registry. Users need to create an account to push their own images. It can also host private repositories.
- **Docker File:** A text file containing instructions for building a Docker image.
- **Docker Image:** A read-only template used to create Docker containers.
- **Docker Desktop:** A user-friendly application for running Docker on local machines (Windows, macOS, Linux), often handling the underlying VM setup.
<!--SR:!2025-05-15,10,250-->

He clarifies the difference between GitHub (for source code) and Docker Hub (for Docker images), both being version control platforms for their respective artifacts.

### 5. Docker Installation and Basic Usage
?
- **Installation on EC2:**
	- Abhishek demonstrates installing Docker on an Ubuntu EC2 instance using sudo apt update and sudo apt install docker.io -y.
	- **Verifying Installation:**
		- The sudo systemctl status docker command is used to check if the Docker service is running.
		- **Addressing Permission Issues:**
			- The initial attempt to run docker run hello-world without sudo fails due to permission issues. Abhishek explains that Docker daemon runs as root, and users need to be added to the docker group to run Docker commands without sudo. This is achieved using sudo usermod -aG docker ubuntu (assuming the user is ubuntu), followed by logging out and back in to activate the group membership.
			- **Running a Basic Container:**
				- After resolving the permission issue, docker run hello-world successfully executes, demonstrating a basic Docker container run.
<!--SR:!2025-05-07,2,150-->

### 6. Building and Running a First Docker Container
?
- **Example Application:** Abhishek uses a simple Python "Hello World" application (app.py) as an example.
- **Docker File Creation:** He shows a basic Dockerfile for this application, including:
- FROM ubuntu:latest: Specifying the base image.
- WORKDIR /app: Setting the working directory inside the container.
- COPY . /app: Copying the application files into the container.
- RUN apt-get update && apt-get install -y python3: Installing Python 3 within the image.
- CMD ["python3", "app.py"]: Defining the command to run the application when the container starts.
- **Building the Docker Image:** The docker build -t <dockerhub_username>/my-first-docker-image:latest . command is used to build the Docker image, tagging it with a repository name and the latest tag. The dot (.) indicates that the Dockerfile is in the current directory.
- **Running the Docker Container:** The docker run --rm <dockerhub_username>/my-first-docker-image:latest command is used to run a container from the newly built image. The --rm flag automatically removes the container after it exits. The output "hello world" confirms the successful execution of the application within the container.
<!--SR:!2025-05-10,5,190-->



### 7. Pushing Docker Image to a Public Registry (Docker Hub)
?
- **Docker Login:** Before pushing, the user needs to log in to Docker Hub using docker login and providing their Docker Hub username and password.
- **Docker Push:** The docker push <dockerhub_username>/my-first-docker-image:latest command is used to push the local Docker image to the specified Docker Hub repository.
- **Verification on Docker Hub:** Abhishek then logs into his Docker Hub account to show that the my-first-docker-image repository has been created (or updated) with the latest tag, making the image publicly accessible.
- **Pulling the Image:** He explains that others can now use the docker pull <dockerhub_username>/my-first-docker-image:latest command to download and run this image on their own machines.
<!--SR:!2025-05-06,1,130-->

## Next Steps (Part 2 Preview)

In the next session (Day 25), Abhishek plans to cover advanced Docker concepts, including:

- Multi-stage Dockerfiles.
- Reducing Docker image size (best practices).
- Writing more complex Dockerfiles.
- Docker interview questions.

## Key Takeaways

- Containers offer a lightweight and resource-efficient way to package and run applications compared to virtual machines by sharing the host OS kernel.
- Docker is a platform that implements containerization through its client-daemon architecture and the use of Dockerfiles, images, and containers.
- Understanding Docker terminology is crucial for effective use and communication within the Docker ecosystem.
- Docker simplifies application deployment and sharing by packaging all necessary components into a portable image that can be easily run on any Docker-enabled environment.
- Docker Hub serves as a central repository for sharing Docker images publicly or privately.

This briefing document provides a comprehensive overview of the topics covered in Abhishek's "Docker 0 To Hero" Part 1 session, highlighting the fundamental concepts and practical steps involved in getting started with Docker. Viewers are encouraged to refer to the associated GitHub repository for more detailed information and to practice the demonstrated commands.

convert_to_textConvert to source



### From deep seek


### **Docker Zero to Hero: Comprehensive Notes**  

---

#### **1. Why Containers are Lightweight**
?
- **Containers vs. VMs**:
  - **VMs**: Include a full guest OS, making them heavy (e.g., ~2.3 GB for Ubuntu VM).
  - **Containers**: Share the host OS kernel and only include application-specific dependencies (e.g., Ubuntu container image: ~28 MB).
  - **Isolation**: Containers use minimal system dependencies (e.g., `/bin`, `/etc`, `/lib`) for logical isolation between applications.
- **Files/Folders in Containers**:
  - **Unique to Containers**: `/bin`, `/sbin`, `/etc`, `/lib`, `/usr`, `/var`, `/root` (ensures isolation).
  - **Shared from Host**: File system, networking stack, kernel system calls, namespaces, cgroups.
<!--SR:!2025-05-10,5,190-->

---

#### **2. Docker Architecture & Lifecycle**
?
- **Components**:
  - **Docker Daemon**: Background service managing containers/images.
  - **Docker CLI**: Client to interact with the Daemon.
  - **Docker Registry**: Stores images (e.g., Docker Hub).
- **Lifecycle**:
  1. **Write a Dockerfile**: Instructions to build an image (base image, dependencies, commands).
  2. **Build Image**: `docker build -t <image_name> .` creates a portable image.
  3. **Run Container**: `docker run <image_name>` starts the application.
  4. **Push to Registry**: Share images via `docker push <username>/<repo>:<tag>`.
<!--SR:!2025-05-14,9,230-->

---

#### **3. Key Terminology**
?
- **Docker Image**: Immutable template with app + dependencies (e.g., `ubuntu:latest`).
- **Docker Container**: Runnable instance of an image.
- **Dockerfile**: Text file with build instructions.
- **Registry**: Platform to store/share images (e.g., Docker Hub, AWS ECR).
- **Docker Desktop**: GUI tool for local Docker management (Windows/Mac).
<!--SR:!2025-05-06,1,170-->

---

#### **4. Installing Docker**
?
**Steps (Ubuntu EC2 Instance)**:
1. Update packages:
   ```bash
   sudo apt update
   ```
2. Install Docker:
   ```bash
   sudo apt install docker.io -y
   ```
3. Verify installation:
   ```bash
   sudo systemctl status docker
   ```
4. Fix permissions (avoid `sudo`):
   ```bash
   sudo usermod -aG docker $USER
   # Log out and back in to apply changes
   ```
<!--SR:!2025-05-06,1,170-->

---

#### **5. Creating Your First Docker Image**
?
**Example: Simple Python App**
- **Project Structure**:
  ```
  ├── app.py
  └── Dockerfile
  ```
- **app.py**:
  ```python
  print("Hello World!")
  ```
- **Dockerfile**:
  ```dockerfile
  FROM ubuntu:latest
  WORKDIR /app
  COPY . .
  RUN apt-get update && apt-get install -y python3
  CMD ["python3", "app.py"]
  ```
**Build & Run**:
```bash
docker build -t abhishekh/my-first-image:latest .  
docker run -it abhishekh/my-first-image  
# Output: "Hello World!"  
```
<!--SR:!2025-05-06,1,130-->

---

#### **6. Pushing to Docker Hub**
?
1. **Log in**:
   ```bash
   docker login
   ```
2. **Tag and Push**:
   ```bash
   docker push abhishekh/my-first-image:latest
   ```
3. **Verify**: Check your Docker Hub account for the uploaded image.
---
#### **7. Common Issues & Fixes**
- **Permission Denied**: Add user to the `docker` group and relogin.
- **Image Size**: Use lightweight base images (e.g., Alpine Linux) and multi-stage builds (covered in Part 2).
<!--SR:!2025-05-10,5,210-->

---

#### **8. Next Steps (Part 2)**  
- Advanced Dockerfiles (multi-stage builds).  
- Optimizing image size.  
- Docker networking, volumes, and interview Q&A.  

---

**GitHub Repository**: [Link](https://github.com/abhishekf5/devops-zero-to-hero) (Code samples, best practices, and interview prep).  

**Key Takeaway**: Docker abstracts environment setup, enabling consistent app execution across systems. Containers are lightweight, portable, and isolate apps securely.  

--- 

Let me know if you'd like further clarifications or hands-on examples! 🐳


[[Day 25 Docker containerzation for django]]

### **Study Notes: Deploying a Django Application with Docker**

#space/docker/40-day-course/25-Day-docker-django  

#done-space

#### **1. Core Concepts**
?
- **Containers vs. VMs**
  - Containers: Lightweight, share OS kernel, isolated processes.
  - VMs: Heavyweight, emulate hardware, full OS required.
- **Django Basics**
  - Project: Config (`settings.py`), URLs (`urls.py`), Apps (modular components).
  - View: Renders templates (e.g., `views.py` → HTML in `templates/`).
<!--SR:!2025-05-07,2,150-->



#### **2. Docker Workflow**
?
1. **Dockerfile Structure**
```dockerfile
   FROM ubuntu:latest                  # Base image
   WORKDIR /app                        # Working directory
   RUN apt update && apt install -y python3 python3-pip  # Install Python
   COPY requirements.txt .             # Copy dependencies
   RUN pip3 install -r requirements.txt  # Install packages
   COPY . .                            # Copy source code
   EXPOSE 8000                         # Expose port
   ENTRYPOINT ["python3"]              # Non-overridable command
   CMD ["manage.py", "runserver", "0.0.0.0:8000"]  # Default args
```
2. **Key Commands**
   - Build: `docker build -t django-app .`
   - Run: `docker run -d -p 8000:8000 django-app`
   - Port Mapping: `-p 8000:8000` (host:container).
<!--SR:!2025-05-06,1,130-->



#### **3. Key Differences**
- **`ENTRYPOINT` vs. `CMD`**
?
  - `ENTRYPOINT`: Fixed executable (e.g., `python3`).
  - `CMD`: Default arguments (can be overridden).
<!--SR:!2025-05-10,5,190-->




#### **4. Security & Networking**
?
- **AWS EC2 Setup**
  - Allow inbound traffic on port 8000 in Security Groups.
<!--SR:!2025-05-07,2,150-->



#### **5. Practice Tasks**
?
1. **Deploy the Example App**
```bash
   git clone <repo-url>
   cd python-web-app
   docker build -t django-app .
   docker run -p 8000:8000 django-app
```
2. **Modify the Dockerfile**
   - Use `python:3.8-slim` as the base image.
3. **Add a New Route**
   - Update `views.py` and `urls.py`, rebuild the container.
<!--SR:!2025-05-07,2,150-->

#### **6. Advanced Topics**
?
- **Multi-stage Builds**: Reduce image size.
- **Docker Compose**: Orchestrate multi-container apps (e.g., Django + PostgreSQL).
<!--SR:!2025-05-10,5,190-->

---

**Quiz Answer**  
- **AWS Free Tier**: 1 t2.micro instance (750 hrs/month).  

**Next Steps**  
- Experiment with Docker commands.  
- Explore Docker networking and volume mounting for databases.
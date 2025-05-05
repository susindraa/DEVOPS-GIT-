
#space/docker/40-day-course/21-Day-docker-networking-bridge 
#done-space

Certainly! Here are concise notes based on the content provided, designed to help you revise and practice Docker networking concepts:

---

### **Docker Networking Notes**
?
#### **Why Docker Networking?**
- **Purpose**: Allows containers to communicate with each other and the host system.
- **Scenarios**:
  1. Containers need to communicate (e.g., frontend ↔ backend).
  2. Containers need isolation (e.g., login container isolated from finance container).
<!--SR:!2025-05-09,4,270-->

---

#### **Key Concepts**


1. **Default Networking (Bridge Network)**:
?
   - **What is it?**
     - Out-of-the-box network created by Docker.
     - Uses a virtual Ethernet (`docker0`) to connect containers to the host.
   - **How does it work?**
     - Containers on the same host share the `docker0` bridge.
     - Containers can communicate with each other using IP addresses.
   - **Limitations**:
     - All containers on the same bridge can talk to each other by default (no isolation).
     - Not secure for sensitive applications.
<!--SR:!2025-05-06,1,230-->



1. **Host Networking**:
?
   - **What is it?**
     - Binds the container directly to the host’s network.
     - Shares the same IP address as the host.
   - **Advantages**:
     - No need for port mapping; direct access to the host network.
   - **Disadvantages**:
     - Less secure because there is no network isolation.
     - Not recommended for production environments.
<!--SR:!2025-05-06,1,170-->



1. **Custom Bridge Networks**:
?
   - **What is it?**
     - User-defined bridge networks for better isolation and control.
   - **How to create**:
 ```bash
     docker network create <network-name>
 ```
   - **How to use**:
 ```bash
     docker run --network=<network-name> <image-name>
 ```
   - **Advantages**:
     - Logical isolation between containers.
     - Can control which containers can communicate with each other.
<!--SR:!2025-05-06,1,150-->




1. **Overlay Networking**:
?
   - **What is it?**
     - Used in multi-host environments (e.g., Docker Swarm or Kubernetes).
     - Creates a common network across multiple Docker hosts.
   - **When to use**:
     - When working with container orchestration tools like Kubernetes.
<!--SR:!2025-05-06,1,250-->

---

#### **Practical Examples**




1. **Default Bridge Network**:
?
   - Run two containers:
 ```bash
     docker run -d --name login nginx
     docker run -d --name logout nginx
 ```
   - Inspect their IPs:
 ```bash
     docker inspect login | grep IPAddress
     docker inspect logout | grep IPAddress
 ```
   - Test communication:
 ```bash
     docker exec -it login ping <logout-ip>
 ```
<!--SR:!2025-05-07,2,190-->



1. **Custom Bridge Network**:
?
   - Create a custom bridge:
 ```bash
     docker network create secure-network
 ```
   - Run a container on the custom network:
 ```bash
     docker run -d --name finance --network=secure-network nginx
 ```
   - Verify isolation:
 ```bash
     docker exec -it login ping <finance-ip>  # Should fail
 ```
<!--SR:!2025-05-06,1,130-->




1. **Host Networking**:
?
   - Run a container with host networking:
 ```bash
     docker run -d --name host-demo --network=host nginx
 ```
   - Inspect the container:
 ```bash
     docker inspect host-demo
 ```
   - Note: The container shares the host’s IP address.
<!--SR:!2025-05-07,2,150-->

---

#### **Key Commands**
?
- List all networks:
```bash
docker network ls
```
- Inspect a network:
```bash
  docker network inspect <network-name>
```
- Remove a network:
```bash
  docker network rm <network-name>
```
<!--SR:!2025-05-06,1,170-->

---

#### **Comparison of Networking Options**
?
- Comparison of Networking Options
- ![[Pasted image 20250417192516.png]]
-
<!--SR:!2025-05-07,2,150--> 

| **Type**            | **Use Case**                           | **Advantages**                          | **Disadvantages**                      |
|----------------------|----------------------------------------|-----------------------------------------|----------------------------------------|
| Default Bridge       | Basic communication between containers | Easy to use                            | No isolation; less secure              |
| Host                 | Direct access to host network          | No port mapping required               | No isolation; insecure                 |
| Custom Bridge        | Secure, isolated communication         | Logical isolation; flexible            | Requires manual setup                  |
| Overlay              | Multi-host environments                | Works across multiple Docker hosts     | Complex; used in orchestration systems |

---

#### **Practice Questions**
1. What is the default network in Docker, and how does it work?
2. How do you create a custom bridge network, and why would you use it?
3. What is the difference between host networking and bridge networking?
4. How can you isolate one container from another using Docker networking?
5. What is overlay networking, and when is it used?

---

#### **Hands-On Practice**
1. Create three containers: `login`, `logout`, and `finance`.
2. Use the default bridge network for `login` and `logout`.
3. Use a custom bridge network for `finance` and verify that `login` cannot communicate with `finance`.
4. Run a container with host networking and inspect its network configuration.
5. Delete unused networks to clean up your environment.

---

These notes should help you quickly revise Docker networking concepts and practice them effectively. Good luck!
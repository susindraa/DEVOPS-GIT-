
 #done-space

#space/40-day-course/06-day-devops-linux  
# Linux Operating System and Shell Scripting Basics - Study Notes




## **1. Operating System (OS) Overview**
?
- **Definition**: Acts as a bridge between **hardware** (CPU, RAM, I/O) and **software** (applications like Jenkins, Python).
- **Role**: Facilitates communication between software and hardware.
- **Examples**: Windows, macOS, Linux.
<!--SR:!2025-05-04,1,190-->

---

## **2. Why Linux is Popular**
?
- **Free & Open-Source**: No licensing costs; customizable.
- **Secure**: Less prone to malware; no antivirus needed by default.
- **Fast & Efficient**: Optimized for performance in production environments.
- **Distributions (Distros)**:
  - Ubuntu, CentOS, Red Hat, Debian, Alpine.
  - Choose based on use case (e.g., Ubuntu for ease, CentOS for enterprise).
<!--SR:!2025-05-04,1,190-->

---

## **3. Linux Architecture**
?
- **Kernel**: Core component managing:
  - **Device Management** (CPU, I/O).
  - **Memory Management** (RAM allocation).
  - **Process Management** (task scheduling).
  - **System Calls** (interface for applications).
- **System Libraries**: Pre-built functions (e.g., `glibc`).
- **User Space**:
  - Compilers (GCC), user processes, system software (e.g., GUI tools).
<!--SR:!2025-05-04,1,190-->

---

## **4. Shell Scripting Basics**
?
- **Shell**: Command-line interface (CLI) to interact with the OS.
- **Why Use Shell Scripting?**: Automate tasks, manage servers without GUI.
<!--SR:!2025-05-04,1,190-->

### **Basic Commands**
?
- 
| **Command** | **Description** | **Example** |
|-------------|-----------------|-------------|
| `pwd`       | Print current directory | `pwd` → `/home/ubuntu` |
| `ls`        | List files/folders | `ls -ltr` (detailed list with timestamps) |
| `cd`        | Change directory | `cd /var/log` |
| `touch`     | Create empty file | `touch file.txt` |
| `vi`/`nano` | Text editor | `vi script.sh` → `i` to insert, `:wq` to save |
| `mkdir`     | Create directory | `mkdir project` |
| `rm`        | Remove file | `rm file.txt`; `rm -r dir` (delete directory) |
| `cat`       | Display file content | `cat script.sh` |
<!--SR:!2025-05-05,3,250-->



### **Monitoring Commands**
?
- 
| **Command** | **Purpose** | **Example** |
|-------------|-------------|-------------|
| `free -m`   | Check memory usage | `free -m` (RAM in MB) |
| `nproc`     | Number of CPUs | `nproc` → `1` (for a basic EC2 instance) |
| `df -h`     | Disk space | `df -h` (human-readable format) |
| `top`       | Real-time system stats | `top` (CPU, memory, processes) |
<!--SR:!2025-05-04,1,190-->

---

## **5. Key Differences: Linux vs. Windows**
?
- 
| **Feature**       | **Linux**                          | **Windows**                     |
|--------------------|------------------------------------|---------------------------------|
| **Cost**           | Free                               | Paid (proprietary)              |
| **Security**       | Less vulnerable to malware         | Requires antivirus              |
| **GUI**            | CLI-focused; optional GUI          | GUI-centric                     |
| **Usage**          | Dominates servers, cloud, DevOps   | Common in personal computing    |
<!--SR:!2025-05-04,1,190-->

---

## **6. Shell Scripting Use Cases**
?
- **Automation**: Deploy apps, backups, log analysis.
- **Real-Time DevOps Project Example** (Upcoming Video):
  - Automate server monitoring.
  - Deploy applications using scripts.
<!--SR:!2025-05-04,1,190-->

---

## **7. Additional Resources**
- **Playlists**:
  - [DevOps Zero to Hero](link) (Full course).
  - [Shell Scripting Mastery](link) (Basics to advanced).
- **Videos**:
  - [Linux Basics for DevOps](link).
  - [Shell Scripting Interview Questions](link).

---

## **Summary**
- **OS**: Manages hardware-software interaction.
- **Linux**: Preferred for DevOps due to speed, security, and cost.
- **Shell Scripting**: CLI commands (`ls`, `cd`, `vi`) and monitoring tools (`top`, `df`).
- **Next**: Real-world DevOps project using shell scripting.

👉 **Action Items**: 
1. Practice commands in a Linux VM (e.g., AWS EC2).
2. Watch the **Shell Scripting Intermediate** video.
3. Explore the `top` command for system monitoring.
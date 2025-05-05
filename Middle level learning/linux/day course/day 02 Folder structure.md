
[[day 01  getting started]]


#done-space 


#space/linux/02-day


# Understanding the Folder Structure

### Explanation of System Directories



### **Symbolic Links (Less Significant)**
?
- ![[Pasted image 20250418083406.png]]
-
<!--SR:!2025-05-05,1,190--> 





- `/sbin -> /usr/sbin`   {{System binaries for administrative commands (linked to `/usr/sbin`)}}. 

</br>


- `/bin -> /usr/bin`   {{  Essential user binaries (linked to `/usr/bin`).   }}              </br>



- `/lib -> /usr/lib`     {{Shared libraries and kernel modules (linked to `/usr/lib`).}}          





### **Important System Directories**
?
- ![[Pasted image 20250418083436.png]]
-
<!--SR:!2025-05-05,1,190-->


- `/boot`  {{Stores files needed for booting the system (not relevant in containers). }}

</br>


- `/usr`  {{Contains most user-installed applications and libraries.}} 

- `/var`  {{Stores logs, caches, and temporary files that change frequently. }}
</br>


- `/etc`  {{Stores system configuration files. }}




### **User & Application-Specific Directories**
?
- ![[Pasted image 20250418083448.png]]
-
<!--SR:!2025-05-05,1,190--> 


Directory  Description                                                           


- `/home`    {{Default location for user home directories.}}      

</br>

- `/opt`     {{Used for installing optional third-party software. }}     


</br>


- `/srv`     {{Holds data for services like web servers (rarely used in containers). }}
</br>



- `/root`    {{Home directory for the root user. }}                                    

### **Temporary & Volatile Directories**
?
- ![[Pasted image 20250418083506.png]]
-
<!--SR:!2025-05-05,1,190--> 





- `/tmp`  {{Temporary files (cleared on reboot). }}
</br>


- `/run`  {{Holds runtime data for processes. }}


</br>


- `/proc` {{ Virtual filesystem for process and system information.}} 
</br>

- `/sys`  {{Virtual filesystem for hardware and kernel information.}} 
</br>

- `/dev`  {{Contains device files (e.g., `/dev/null`, `/dev/sda`). }}

### **Mount Points**
?
- ![[Pasted image 20250418083523.png]]
-
<!--SR:!2025-05-05,1,190--> 




Directory  Description                                                     

- `/mnt`     {{Temporary mount point for external filesystems.}}     
</br>

- `/media`   {{Mount point for removable media (USB, CDs).}}       
</br>

- `/data`    {{Likely your **mounted volume** from Windows (`C:/ubuntu-data`).}} 





[[Day 03 User management]]
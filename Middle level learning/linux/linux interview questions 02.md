
#goes-to/linux 
#space/linux/interview-questions 


 #done-space  


### What do you mean by Linux? Explain its features.
?
- Linux is a Unix-like open-source computer [operating system](https://www.interviewbit.com/operating-system-interview-questions/) (OS) that directly manages hardware and resources of a system such as CPU, memory, and storage, and manages the communication between software and hardware. It was first released on 5 October 1991 by Linus Torvalds for computers and is considered more secure and faster than Windows. It is freely distributable and is generally built around Linux Kernel (low-level system software that is used to manage hardware resources for users). Furthermore, it can be installed in mobiles, laptops, computers, notebooks, etc. Flavors of Linux OS include Ubuntu, Debian, SUSE Linux, Gentoo, etc.
- Some important features of Linux OS include:
- Free and Open Source: It is freely and easily available to anyone.
- Robust and Adaptable: Linux can operate for prolonged periods without crashing and considered to have very much immune to security threats.
- More secure: It is more secure as it provides security using authentication features like password authentication, security auditing, and file system access control.
- Multiprogramming System: More than one can function or an application can run simultaneously.
- Application Support: It has its own software repository i.e., place or storage location from where software can be retrieved so that users can download and install applications.
- Supports customized keywords: There are many different languages used throughout the world, therefore Linux supports the installation of multiple languages keyboards.
- GUI (Graphical User Interface): It provides an interface for users to interact with the system and allows to use of GUI applications such as VLC, Firefox, etc.
- Enhance your chances of performing well in the interviews with our comprehensive guide, which covers important topics on Linux to help freshers, as well as experienced candidates, ace their interviews.
<!--SR:!2025-05-02,1,170-->





## Linux OS internals
### 1. Name the file that is used to automatically mount file systems.
?
- File that is used to automatically mount file systems is a Fstab file.
[](https://assets.interviewbit.com/assets/ibpp/interview_guides/assets/desktop/study_plan-fb58ec94dd27940f470d62dee6d85c8161f6afc2b9dcbced18278212ce50b8b9.svg.gz)
- Create a free personalised study plan
- Get into your dream companies with expert guidance
- Real-Life Problems
- Prep for Target Roles
<!--SR:!2025-05-02,1,170-->



### 2. What is BASH?
?
- BASH (Bourne Again Shell) is basically a command language interpreter. It was written by Brian Fox for GNU OS and can be used in place of Bourne Shell. It is similar to Bourne Shell but includes some additional features such as command-line editing that make it easier and more convenient to use. It is the default user shell on most Linux installations. It is basically an interpreted and non-compiled process that can also run in the terminal window. It is also capable of reading commands from shell scripts.
<!--SR:!2025-05-02,1,170-->



### 3. What is Kernel? Explain its functions.
?
- A kernel is considered the main component of Linux OS. It is simply a resource manager that acts as a bridge between hardware and software. Its main role is to manage hardware resources for users and is generally used to provide an interface for user-level interaction. A kernel is the first program that is loaded whenever a computer system starts. It is also referred to as low-level system software.
- Its other main functions include:
- Memory Management
- Process Management
- Device Management
- Storage Management
- Manage access, and use of various peripherals that are connected to the computer.
<!--SR:!2025-05-02,1,170-->


### 4. What are two types of Linux User Mode?
?
There are two types of Linux user mode as given below:
- Command Line
- GUI
<!--SR:!2025-05-02,1,170-->



### 5. What is LILO?
?
- LILO (Linux Loader) is basically a bootloader for Linux that is used to load Linux into memory and start the OS. It is also known as a boot manager that facilitates a dual boot of a computer. It can function as either a master boot program or secondary boot program and performs various functions such as locating kernel, identifying other supporting programs, loading memory, and starting the kernel. If you want to use Linux OS, then you need to install a special bootloader i.e., LILO for it as it allows fast boot of Linux OS.
- Explore InterviewBit’s Exclusive Live Events
<!--SR:!2025-05-02,1,170-->



### 6. What is swap space?
?
- Swap space, as the name suggests, is basically a space on a hard disk that is used when the amount of physical memory or RAM is full. It is considered a substitute for physical memory. Its main function is to substitute disk space for RAM memory when real RAM does not have enough space to hold all programs that are executing, and more space is required. In simple words, it can be used as an extension of RAM by Linux.
<!--SR:!2025-05-02,1,170-->




### 7. What do you mean by a Process States in Linux?
?
- Linux Process is a type of process that can be in a number of different states. The process enters these states from start till end. Process states in Linux are as follows:
- **New/Ready:** In this state, a new process is created and is ready to run.
- **Running:** In this state, the process is being executed.
- **Blocked/Wait:** In this state, the process is waiting for input from the user and if doesn't have resources to run such as memory, file locks, input, then it can remain in a waiting or blocked state.
- **Terminated/Completed:** In this state, the process has completed the execution or terminated by the OS.
- **Zombie:** In this state, the process is terminated but information regarding the process still exists and is available in the process table.
<!--SR:!2025-05-02,1,170-->




### 8. What is Linux Shell? What types of Shells are there in Linux?
?
- Linux shell is a user interface present between user and kernel. It is used for executing commands and communication with Linux OS. Linux shell is basically a program used by users for executing commands. It accepts human-readable commands as input and converts them into kernel understandable language.
- Different types of shells are commonly used on typical Linux system as listed below:
- CSH (C Shell)
- KSH (Korn Shell)
- BASH (Bourne Again Shell)
- TCSH
- ZSH
- Bourne Shell
<!--SR:!2025-05-02,1,170-->



### 9. Name different types of modes used in VI editor.
?
- VI editor (Visual Editor) is basically a default text editor that usually comes with most of the Linux OS. There are basically three types of modes used in VI editor as given below:
- **Command Mode/Regular Mode:** It is the default mode for the vi editors. It is generally used to type commands that usually perform particular or specific vi functions. To enter this mode from another mode (Insert mode), one must press [esc]. In simple words, it lets you view the content.
- **Insertion Mode/Edit Mode:** This mode allows you to do text editing, or type text into a file. To enter this mode from another mode (command mode), one must press [esc]. In simple words, it lets you delete or insert text or content.
- **Ex Mode/Replacement Mode:** This mode is generally used to save the files and execution of the commands. It basically executes files with different parameters. To enter this mode, one must press [:]. In simple words, it lets you overwrite content or text.
<!--SR:!2025-05-02,1,170-->




### 10. What is a maximum length for a filename under Linux?
?
- The maximum length for a filename under Linux is 255 bytes.
<!--SR:!2025-05-02,1,170-->



### 11. Name the Linux that is specially designed by Sun micro system.
?
- Linux that is specially designed by Sun micro system is Solaris.
<!--SR:!2025-05-02,1,170-->



### 12. Under the Linux system, what is the typical size for swap partitions?
?
- The typical size for a swap partition under a Linux system should be twice the amount of physical memory or RAM available on the system.
<!--SR:!2025-05-02,1,170-->



### 13. What are file permissions in Linux? Name different types of file systems in Linux.
?
- There are three owners in the Linux System i.e., user, group, and others. These owners have three types of permissions defined as listed below:
- **Read (r):** It allows the user to open and read the file or list the directory.
- **Write (w):** It allows the user to open and modify the file. One can also add new files to the directory.
- **Execute (x):** It allows the user to execute or run the file. One can also lookup a specific file within a directory.
<!--SR:!2025-05-02,1,170-->




### 14. What are basic elements or components of Linux?
?
- Linux generally consists of five basic elements or components as given below:
- **Kernel:** It is considered a core or main part of Linux and is generally responsible for all major activities of OS such as process management, device management, etc.
- **System Library:** These are special functions or programs with the help of which application programs or system utilities can access features of the kernel without any requirement of code. It is simply used to implement the functionality of the OS.
- **System Utility:** These are utility programs that are responsible to perform specialized and individual-level tasks. They are considered more liable and allow users to manage the computer.
- **Hardware:** It is physical hardware that includes items such as a mouse, keyboard, display, CPU, etc.
- **Shell:** It is an environment in which we can run our commands, shell scripts, and programs. It is an interface between user and kernel that hides all complexities of functions of the kernel from the user. It is used to execute commands.
<!--SR:!2025-05-02,1,170-->





### 15. What is LVM and why is it required?
?
- LVM (Logical Volume Management) is basically a tool that provides logical volume management for the Linux kernel. It is being introduced simply to make physical storage device management easier. It also includes allocating disks, striping, mirroring, resizing logical volumes. Its main advantages are increased abstraction, flexibility, and control. It simply allows for flexible disk space management. It is especially required to resize the size of the file system online. In Linux, the size of the LVM partition can be extended using “lvextend” command and can be reduced using “lvreduce” commands, respectively.
<!--SR:!2025-05-02,1,170-->



### 16. What is a “/proc” file system?
?
- Proc file system is a pseudo or virtual file system that provides an interface to the kernel data structure. It generally includes useful information about processes that are running currently. It can also be used to change some kernel parameters at runtime or during execution. It is also regarded as a control and information center for the kernel. All files under this directory are named virtual files.
<!--SR:!2025-05-02,1,170-->




### 17. What do you mean by the daemons?
?
- Daemons also referred to as the background process, is a long-running Linux program that runs in the background. They do not have any controlling terminal, therefore, they run in the background. These are the processes that are generally started when the system is bootstrapped and terminate or end only when the system is shut down. It is simply the way of extending the functionality of the base OS. It provides and offers several functions that are not available in OS. Its main purpose is to handle periodic requests and then forward the requests to the appropriate programs for execution.
<!--SR:!2025-05-02,1,170-->




### 18. Name daemon that controls the print spooling process.
?
- The daemon that controls that print spooling process is the Line printing daemon.
<!--SR:!2025-05-02,1,170-->





### 19. What is a Zombie Process?
?
- Zombie Process, also referred to as a defunct or dead process in Linux, is a process that has finished the execution, but its entry remains in the process table. It usually happens due to a lack of correspondence between parent and child processes. This process occurs for the child process because the parent process needs to read the status of the child process. Once it is completed using the wait system call, this process is removed from the process table.
<!--SR:!2025-05-02,1,170-->





### 20. What is the difference between cron and anacron?
?
- **Cron:** It is a program in Linux that is used to execute tasks at a scheduled time. It works effectively on machines that run continuously.
- **Anacron:** It is a program in Linux that is used to execute tasks at certain intervals. It works effectively on machines that are powered off in a day or week.
|Cron|Anacron|
|---|---|
|It is a daemon.|It is not a daemon.|
|It can be scheduled by any normal user.|It can only be used by super users.|
|It is considered ideal for servers.|It is considered ideal for desktops and laptops.|
|It expects the system to run 24*7|It does not expect the system to run 24*7|
|Its minimum granularity is in minutes.|Its minimum granularity is only in days|
|It is used to execute scheduled commands.|It is used to execute commands periodically.|
<!--SR:!2025-05-02,1,170-->





### 21. What is load average in Linux?
?
- Load average, as the name suggests, is the average system load on Linux servers being calculated over a given period of time. The load average of Linux servers can be found using “top” and “uptime” commands. It is simply used to keep track of system resources. It is represented by a decimal number starting at 0.00. It tells you the load that the system has been under.
<!--SR:!2025-05-02,1,170-->



### 22. What do you mean by Shell Script?
?
- Shell Script, as name suggests, is a script especially written for shell. Here, script means programming language that is being used to control applications. It simply allows the execution of different commands that are entered in the shell. It generally helps you to create complex programs containing conditional statements, loops, and functions. It is very easy to debug, can simplify everyday automation processes, and is much quicker as compared to writing big programs.
<!--SR:!2025-05-02,1,170-->



### 23. What is INODE and Process Id?
?
- **INODE:** It is a unique name given to each file by OS. Each inode has a unique inode number within a file system. It stores various information about files in Linux such as ownership, file size, file type, access mode, number of links, etc.
- **Process Id (Identifier):** It is a unique Id given to each process. It is simply used to uniquely identify an active process throughout the system until the process terminates.
<!--SR:!2025-05-02,1,170-->





### 24. Name the first process that is started by the kernel in Linux and what is its process id?
?
- The first process started by the kernel in Linux is “init” and its process id is 1.
<!--SR:!2025-05-02,1,170-->



### 25. What is CLI and GUI?
?
- **CLI (Command Line Interface):** It is basically a command-line program that usually accepts text as input to execute or run functions of the operating system. It allows users to type declarative commands simply to give instructions to the computer to perform or execute operations. It usually requires less memory to use as compared to other interfaces as well as it does not require Windows and a low-resolution monitor can be used. It usually provides greater flexibility of use and can also be used to perform things easily that are most difficult to do with GUI.
- **GUI (Graphical User Interface):** It is basically a human-computer interface that allows users to interact with electronic devices through graphical icons and visual indicators. The use of these graphical elements or icons makes it easier for users to interact with the system. It is visually intuitive and allows higher productivity. It is usually a combination of graphical and textual interaction that uses menus, buttons, message boxes, etc.
<!--SR:!2025-05-03,2,230-->






## Linux Networking
### 1. What are the advantages of using NIC teaming?
?
- NIC (Network Interface Card) teaming has several advantages as given below:
- Load Balancing
- Failover
- Increases uptime
<!--SR:!2025-05-02,1,170-->




### 2. What do you mean by Network bonding?
?
- Network Bonding, also known as NIC Teaming, is a type of bonding that is used to connect multiple network interfaces into a single interface. It usually improves performance and redundancy simply by increasing network throughput and bandwidth.
<!--SR:!2025-05-02,1,170-->



### 3. What are different network bonding modes used in Linux?
?
- Different network bonding modes used in Linux are listed below:
- **Mode-0 (balance-rr):** It is the default mode and is based on round-robin policy. It offers features like fault tolerance and load balancing.
- **Mode-1 (active-backup):** It is based on an active-backup policy. In this, only one node responds or works at the time of failure of other nodes.
- **Mode-2 (balance-xor):** It sets an XOR (exclusive-or) mode for providing load balancing and fault tolerance.
- **Mode-3 (broadcast):** It is based on broadcast policy. It sets a broadcast mode for providing fault tolerance and can be used only for specific purposes.
- **Mode-4 (802.3ad):** It is based on IEEE 802.3ad standard also known as Dynamic Link Aggregation mode. It sets an IEEE 802.3ad dynamic link aggregation mode and creates aggregation groups that share the same speed and duplex settings.
- **Mode-5 (balance-tlb):** It is also known as Adaptive TLB (Transmit Load Balancing). It sets TLB mode for fault tolerance and load balancing. In this mode, traffic will be loaded based on each slave of the network.
- **Mode-6 (balance-alb):** It is also known as Adaptive Load Balancing. It sets ALB mode for fault tolerance and load balancing. It doesn’t need any special switch support.
<!--SR:!2025-05-02,1,170-->




### 4. Name default ports used for DNS, SMTP, FTP, SSH, DHCP and squid.
?
- Default ports used for various services are as follows:
|Service|Port|
|---|---|
|DNS|53|
|SMTP|25|
|FTP|20 (Data transfer), 21 (Connection established)|
|SSH|22|
|DHCP|67/UDP (dhcp server), 68/UDP (dhcp client)|
|squid|3128|
<!--SR:!2025-05-02,1,170-->





### 5. What is SSH? How we can connect to a remote server via SSH.
?
- SSH (Secure Shell), as the name suggests, is basically a protocol that is being used to securely connect to remote servers or systems and enables two systems to communicate. It is considered the most common way to have access to remote Linux servers. It generally transmits data over encrypted channels therefore security is considered at a high level. To connect to a remote server via SSH, you need to own a domain name and IP address.
<!--SR:!2025-05-02,1,170-->



### 6. Write the difference between Soft and Hard links?
?
- **Hard Links:** It is a special kind of file that points to the same underlying inode as another file. It can be referred to as an additional name for an existing file on Linux OS. Total number of hard links for a file can be displayed using the “ls -l” command. Such links cannot be used across file systems. Hard links can be created using the following command:
- $ ln [original filename] [link name]
- **Soft Links:** It is also termed a symbolic Link. Soft links are kinds of files that usually point to another file. It does not include any amount of data in the target file and simply points to another entry anywhere in the file system. Such links can be used across file systems. Soft links can be created using the following command:
- $ ln -s [original filename] [link name]
|Hard Links|Soft Links|
|---|---|
|It is considered a mirror copy of the original file.|It is considered a symbolic link to the original file.|
|It usually shares the same inode number.|It usually shares different inode numbers.|
|It contains the original contents of the files.|It does not contain the actual contents but contains the location of the original file.|
|Any changes made to the original file will directly reflect other files.|Any changes or modifications made to the soft link will directly reflect the original file and its hard links.|
|It cannot be used for linking directories.|It can be used for linking directories.|
|Such links are faster as compared to soft links.|Such links are slower as compared to hard links.|
<!--SR:!2025-05-02,1,170-->





### 7. Name three standard streams in Linux.
?
- Standard streams are basically I/O (Input and Output) communication channels between a program and its environment in Linux. Input and output in the Linux environment are distributed across three standard streams. Three standard streams in Linux are as follows:
1. Standard Input (stdin)
2. Standard Output (stdout)
3. Standard Error (stderr)
<!--SR:!2025-05-02,1,170-->




### 8. Why /etc/resolv.conf and /etc/hosts files are used?
?
- **/etc/resolv.conf:** It is used to configure DNS name servers as it contains the details of the nameserver i.e., details of your DNS server. The DNS server is then used to resolve the hostname of the IP address.
- **/etc/hosts:** It is used to map or translate any hostname or domain name to its relevant IP address.
<!--SR:!2025-05-02,1,170-->



## Linux Commands



### 1. What is the function of grep command?
?
- Grep (Global regular expression print) is a command that is used to the global search for a string of characters in a specified file. The text search pattern is generally known as a regular expression. It simply makes use of pattern-based searching.
- **Syntax:** grep [options] pattern [files]
- **Example:** $ grep -c "linux" interview.txt
- The above command will usually print the total count of the word “Linux” in the file “interview.txt”.
<!--SR:!2025-05-02,1,170-->





### 2. What is netstat command?
?
- netstat (Network statics) command is generally a networking tool being used for troubleshooting and configuration and used to display all network connections on a system. It simply provides a way to check whether various aspects of TCP/IP are working and what connections are present.
<!--SR:!2025-05-02,1,170-->



### 3. What is the ping command?
?
- Linux ping (Packet Internet Groper) command is a command that is used to check connection status between source and destination. In simple words, this command is used to check whether a network is available and if the host is reachable. It can also be used to troubleshoot different connectivity issues, verify connectivity at an IP -level to a second TCP/IP device, and name resolution. One can use this command to test both the computer name and IP address of the computer.
<!--SR:!2025-05-02,1,170-->




### 4. Which command is used to check the default run level?
?
- The command used to check the default run level is “/etc/inittab”.
<!--SR:!2025-05-02,1,170-->


### 5. Which command is used to check the size of file or directory?
?
- The command used to check the size of the file or directory is “du”. Here “du” stands for disk usage that is used to check information of disk usage of files and directories on a machine. It is also used to display files and directory sizes in a recursive manner.
**Example:**
- $ du -sh /var/log/*
- 1.8M /var/log/anaconda
- 384K /var/log/audit
- 4.0K /var/log/boot.log
- 0 /var/log/chrony
- 4.0K /var/log/cron
- 4.0K /var/log/maillog
- 64K /var/log/messages
<!--SR:!2025-05-02,1,170-->



### 6. Which command is used to count the number of characters in a file?
?
- The command that is used to count the number of characters in a file in Linux is “wc”. Here “wc” stands for word count. It is used to count the number of lines, words, and characters in a text file.
<!--SR:!2025-05-02,1,170-->




### 7. Explain working of env command.
?
- “env” command is basically a shell command that is used to print a list of current environmental variables. Here, “env” stands for the environment. It can also run another process in another environment without any modification of the current environment. It allows you to run programs in a modified environment. It is generally used by shell scripts to launch the correct interpreter. It can also be useful for checking if wrong environment variables prevent the application from starting during troubleshooting.
- **Example:**
- $env
- PHYTHON_PIP_VERSION=9.0L1
- HOME=/root
- DB_NAME=test
- PATH=/usr/local/bin:/usr/local/sbin
- LAND=C.UTF=8
- PYTHON_VERSION=3.4.6
- PWD=/
- DB_URI=mongodb://database:27017/test
<!--SR:!2025-05-02,1,170-->





### 8. What is the pwd command?
?
- “pwd” command is basically a command that is used to print the complete path of the current working directory starting from the root (/). Here, “pwd” stands for Print Working Directory. It is considered one of the most basic and most used commands in Linux. This command is usually a built-in shell command and is also available in different shells such as bash, ksh, zsh, bourne shell, etc.
<!--SR:!2025-05-03,2,230-->







### 9. Name the command that is used to check all the listening ports and services of your machine.
?
# netstat -ntlp
<!--SR:!2025-05-02,1,170-->





### 10. Which command is used to check the memory status?
?
- The command used mostly to check memory status in Linux is “free”. Other commands that can be used are given below:
- **“cat” command:** It can be used to show or display Linux memory information. (cat/proc/meminfo)
- **“vmstat” command:** It can be used to report statistics of virtual memory.
- **“top” command:** It can be used to check the usage of memory.
- **“htop” command:** It can be used to find the memory load of each process.
<!--SR:!2025-05-02,1,170-->





### 11. What is pipe?
?
- In Linux, a pipe is basically a form of redirection that is used to send the output of one command to another command for further processing. It simply takes the output from one command and uses it as an input for another. It provides asynchronous execution of commands with help of buffered I/O routines.
<!--SR:!2025-05-02,1,170-->





### 12. What are Linux directory commands?
?
There are basically five Linux directory commands that are used to work with files and directories as given below:
- **pwd:** It stands for “print working directory”. This command is generally used to display the path of the present or current working directory. **Syntax:** $ pwd
- **cd:** It stands for “change directory”. This command is generally used to change the present working directory to the directory that we want to work on. **Syntax:** $ cd <path to new directory>
- **Is:** It stands for “list”. This command is generally used to show the full list of content of files and directories in the present working directory. **Syntax:** $ ls
- **mkdir:** It stands for “make directory”. This command generally allows users to create directories in Linux. **Syntax:** $ mkdir <name (and path if required) of new directory>
- **rmdir:** It stands for “remove directory”. This command is used to remove/delete each directory that is specified on the command line. **Syntax:** $ rmdir <name (and path if required) of directory>
<!--SR:!2025-05-02,1,170--> 





### 13. What do you mean by unmask?
?
Umask, also known as user file-creation mask, is a Linux command that allows you to set up default permissions for new files and folders that you create. In Linux OS, umask command is used to set default file and folder permission. It is also used by other commands in Linux like mkdir, tee, touch, etc. that create files and directories.
Syntax: `umask [-p] [-S] [mask]`
Where,
[mask]: It represents the permission masks that you are applying.
[-S]: It displays the current mask as a symbolic value.
[-p]: It displays the current mask along with umask command thus allowing it to be copied and pasted as a future input.
<!--SR:!2025-05-02,1,170-->





### 14. Name the command used to review boot messages.
?
The command that is used to review boot messages is the “dmesg” command.
## Linux vs Other OS
<!--SR:!2025-05-02,1,170-->




### 1. Write difference between Linux and Unix.
?
**Linux:** It is an open-source and free-to-use Operating system that was first developed in 1991 by Linus Torvalds. It is specially designed to offer free and low-cost OS for personal computer users. It has very low hardware requirements and facilitates powerful support for networking. Different versions of Linux are known as variants.
**Example:** Red Hat, Android, etc.
**Unix:** It is a closed source OS derived from the original AT&T Unix and was first developed in the 1960s. It is not open source and is not free to use. It is generally capable of handling activities from multiple users at the same time. Furthermore, it is specially designed to be more portable, multi-user, and multitasking in a time-sharing configuration. Different versions of Unix are known as distros.
**Example:** HP-UX, Solaris, etc.
|Linux|Unix|
|---|---|
|It is mostly used for computer software and hardware, tablet PCS, mainframes, etc.|It is mostly used on web servers, workstations, mainframes, and PCs but Intel, HP, etc.|
|It can be used by everyone as it is freely available.|It can be used only by its copywriters who have access to it.|
|It is considered just the kernel.|It is considered a complete package of OS.|
|It supports more file systems than Unix and its file support system includes Ext2, Ext3, Xfs, FAT, etc.|It supports a lesser file system as compared to Linux and its file support system includes gpfs, hfs, jfs, etc.|
|Its source code is available to the general public.|Its source code is not available to the general public.|
|It is freely distributed and is free of cost.|It is not freely distributed and comes with a customized cost.|
|It is portable and can be executed on different hard drives.|It is non-portable.|
|Its installation does not require any specific hardware components.|Its installations require specific hardware components.|
|It is more compatible and flexible with different hardware systems available.|It is less compatible and flexible with different hardware systems as compared to Linux.|
|Its default shell is BASH.|Its default shell is Bourne Shell.|
<!--SR:!2025-05-02,1,170-->





### 2. What is the difference between BASH and DOS?
?
**BASH (Bourne Again Shell)**: It is basically a powerful command shell and scripting language that is being developed from the Bourne shell used on UNIX systems. It runs on multiple OS and new features are added regularly. It can read and execute commands from a file known as a shell script.
**DOS (Disk Operating System)**: It is basically an OS that runs from a hard disk drive. It was the first OS system used by IBM-compatible computers. It basically provides a command-line in which users are allowed to give instructions in the form of commands.
|BASH|DOS|
|---|---|
|In BASH, commands are case-sensitive.|In DOS, commands are not case-sensitive.|
|In this, / character are directory separator and \ acts as an escape character.|In this, \ is a directory separator and / acts as a command argument delimiter.|
|It can take input with its built-in “read” command.|It cannot take input during run time and one can only pass “/argument” during execution from the command line.|
<!--SR:!2025-05-02,1,170-->



### 3. What is samba? Why is it required?
?
Samba is basically an open-source software suite. It runs a number of different Operating systems such as OpenVMS, IBM , etc. It is generally used to connect Linux machines to Microsoft network resources simply by providing Microsoft SMB support. It provides more secure, stable, fast file and print services for every client or user using SMB (Server Message Block) or CIFS (Central Server Message Block) protocol.
<!--SR:!2025-05-02,1,170-->




## Linux Interview MCQs


- Name file system that is used to access remote systems.
- nfs
- swap
- hpfs
- ext2



- Which of the following modems is not compatible with Linux?
?
- External
- Internal
- Winmodem
- None of the above
<!--SR:!2025-05-02,1,170-->

- Name command that is used to remove files.
?
- delete
- dm
- rm
- None of the above
<!--SR:!2025-05-02,1,170-->


- Which of the following vi commands is generally used to delete the current line?
?
- Del
- DD
- Delete
- dd
<!--SR:!2025-05-02,1,170-->


- Which of the following is the default shell normally used on the Linux system?
?
- RSH
- CSH
- BASH
- TCSH
<!--SR:!2025-05-02,1,170-->


- Maximum size (in bytes) of the filename in Linux can be?
?
- 64 bytes
- 32 bytes
- 255 bytes
- 128 bytes
<!--SR:!2025-05-02,1,170-->


- Name the directory that contains configuration files in Linux.
?
- /root/
- /etc/
- /bin/
- None of the above
<!--SR:!2025-05-03,2,230-->


- Name the command that can be used to copy files across systems.
?
- TELNET
- FTP
- SSH
- RSH
<!--SR:!2025-05-02,1,170-->



- Which TCP/IP protocol is generally used to remove terminal connection service.
?
- TELNET
- RARP
- FTP
- None of the above
<!--SR:!2025-05-02,1,170-->


- Which out of the following type of file system is used for Linux Systems?
?
- nfs
- swap
- hpfs
- ext2
<!--SR:!2025-05-02,1,170-->



- Name command that is commonly used to record sessions in Linux.
?
- Session
- Script
- Both A and B
- None of the above
<!--SR:!2025-05-02,1,170-->


- What should be the first line of shell script?
?
- !#/bin/bash
- !#/usr/bin/bash
- !#/bin/sh
- !#bash
<!--SR:!2025-05-02,1,170-->


- Name the person who developed Linux.
?
- Linus Torvalds
- Dennis Ritchie
- Prof. Andrew S. Tannenbaum
- None of the above
<!--SR:!2025-05-02,1,170-->



- Name command that can immediately shutdown a computer running Linux.
?
- shutdown
- shutdown now
- telinit 0
- telinit 6
<!--SR:!2025-05-02,1,170-->




- Name the Operating System that is not based on Linux.
?
- CentOS
- Redhat
- BSD
- None of the above
<!--SR:!2025-05-02,1,170-->
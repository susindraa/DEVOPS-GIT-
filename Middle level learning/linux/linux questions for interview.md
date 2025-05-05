

#done-space 

#goes-to/linux 


#space/linux/interview-questions 



1. What is Linux?::An open-source Unix-like operating system kernel used to build operating systems that manage hardware and software resources.
<!--SR:!2025-05-02,1,170-->


2. What command lists all files, including hidden ones?::ls -a
<!--SR:!2025-05-02,1,170-->

3. How do you view the current working directory?::pwd
<!--SR:!2025-05-02,1,170-->

4. How do you search for a specific string inside a file?::grep 'pattern' filename
<!--SR:!2025-05-02,1,170-->


5. What does `>` and `>>` mean in Linux?::`>` overwrites a file, `>>` appends to a file.
<!--SR:!2025-05-02,1,170-->


6. How do you find the path of a command like docker or nginx?::which docker
<!--SR:!2025-05-02,1,170-->


7. What's the difference between hard link and soft link?::Hard links point to the file's data directly; soft links (symbolic) point to another file name.
<!--SR:!2025-05-02,1,170-->



8. How to show line numbers in a file using `cat`?::cat -n filename
<!--SR:!2025-05-02,1,170-->






9. What does chmod 755 file do?::Sets permissions to rwxr-xr-x (owner has full, others can read and execute).
<!--SR:!2025-05-02,1,170-->


10. How do you change ownership of a file?::chown user:group filename
<!--SR:!2025-05-02,1,170-->


11. What is the use of `chgrp`?::Changes the group ownership of a file.
<!--SR:!2025-05-02,1,170-->


12. How do you view permissions of a file?::ls -l
<!--SR:!2025-05-02,1,170-->


13. How to give execute permission to a file?::chmod +x filename
<!--SR:!2025-05-02,1,170-->


14. How do you copy a file and rename it at once?::cp old.txt new.txt
<!--SR:!2025-05-02,1,170-->


15. How do you delete all `.log` files in a directory recursively?::find . -name "*.log" -type f -delete
<!--SR:!2025-05-02,1,170-->



16. How to list top 10 largest files in a directory?::du -ah . | sort -rh | head -n 10
<!--SR:!2025-05-02,1,170-->


17. Command to create symbolic link?::ln -s original.txt link.txt
<!--SR:!2025-05-02,1,170-->


18. Difference between `mv` and `cp`?::`mv` moves or renames a file; `cp` makes a copy.
<!--SR:!2025-05-02,1,170-->






19. How to list all running processes?::ps aux or top
<!--SR:!2025-05-02,1,170-->


20. How to kill a process by PID?::kill <pid>
<!--SR:!2025-05-02,1,170-->


21. How do you kill a process by name?::killall <process-name>
<!--SR:!2025-05-02,1,170-->


22. Difference between kill and pkill?::kill uses PID; pkill uses name or pattern.
<!--SR:!2025-05-02,1,170-->


23. How do you run a command in background?::command &
<!--SR:!2025-05-02,1,170-->






24. How do you check open ports?::netstat -tuln or ss -tuln
<!--SR:!2025-05-02,1,170-->


25. How do you check network configuration?::ip a or ifconfig
<!--SR:!2025-05-02,1,170-->


26. How to test connectivity to a host?::ping hostname
<!--SR:!2025-05-02,1,170-->


27. Command to download content from a URL?::curl or wget
<!--SR:!2025-05-02,1,170-->


28. How to see active connections?::netstat -an or ss
<!--SR:!2025-05-02,1,170-->





29. How to install a package in Ubuntu?::sudo apt install package-name
<!--SR:!2025-05-02,1,170-->


30. What's the difference between apt update and upgrade?::Update refreshes repo index; upgrade installs new versions.
<!--SR:!2025-05-02,1,170-->


31. How do you restart a service with systemctl?::sudo systemctl restart service-name
<!--SR:!2025-05-02,1,170-->


32. How do you enable a service at boot time?::sudo systemctl enable service-name
<!--SR:!2025-05-02,1,170-->


33. How do you view logs of a service?::journalctl -u service-name
<!--SR:!2025-05-02,1,170-->




34. How do you define a variable in bash?::myvar="value"
<!--SR:!2025-05-02,1,170-->
35. What does `$0`, `$1`, `$@` mean in shell scripting?::$0 = script name, $1 = first argument, $@ = all args
<!--SR:!2025-05-02,1,170-->

36. How to run a script file?::bash script.sh or ./script.sh
<!--SR:!2025-05-02,1,170-->

37. How to create a scheduled cron job?::crontab -e
<!--SR:!2025-05-02,1,170-->


38. Write a basic for loop in bash::for i in {1..5}; do echo $i; done
<!--SR:!2025-05-02,1,170-->







39. Where are most Linux logs stored?::/var/log/
<!--SR:!2025-05-02,1,170-->
40. How do you view last 50 lines of a log file?::tail -n 50 logfile.log
<!--SR:!2025-05-02,1,170-->
41. How do you check disk space usage?::df -h
<!--SR:!2025-05-02,1,170-->
42. How to check memory usage?::free -m or top
<!--SR:!2025-05-02,1,170-->
43. How to debug a failed service?::systemctl status service-name
<!--SR:!2025-05-02,1,170-->




44. - 
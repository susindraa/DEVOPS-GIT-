

#space/linux/08-day

# Linux System Monitoring



## Introduction to System Monitoring
?
Monitoring system resources is essential to ensure optimal performance, detect issues, and troubleshoot problems in Linux. Various tools allow us to monitor CPU, memory, disk usage, network activity, and running processes.
<!--SR:!2025-05-02,1,230-->

## Index of Commands Covered



### CPU and Memory Monitoring
?
- `top` – Real-time system monitoring
- `htop` – Interactive process viewer (requires installation)
- `vmstat` – Report system performance statistics
- `free -m` – Show memory usage
<!--SR:!2025-05-02,1,230-->




- – Real-time system monitoring
?
- `top`
<!--SR:!2025-05-02,1,230--> 



- – Interactive process viewer (requires installation)
?
- `htop`
<!--SR:!2025-05-02,1,230--> 


- – Report system performance statistics
?
- `vmstat`
<!--SR:!2025-05-02,1,230--> 



- – Show memory usage
?
- `free -m`
<!--SR:!2025-05-02,1,230--> 




### Disk Monitoring
?
- `df -h` – Check disk space usage
- `du -sh /path` – Show disk usage of a specific directory
- `iostat` – Display CPU and disk I/O statistics
<!--SR:!2025-05-02,1,230-->



- – Check disk space usage
?
- `df -h`
<!--SR:!2025-05-02,1,230--> 

- – Show disk usage of a specific directory
?
- `du -sh /path`
<!--SR:!2025-05-02,1,230--> 


- – Display CPU and disk I/O statistics
?
- `iostat`
<!--SR:!2025-05-02,1,230--> 





### Network Monitoring
?
- `ifconfig` – Show network interfaces (deprecated, use `ip a`)
- `ip a` – Show network interface details
- `netstat -tulnp` – Show active connections and listening ports
- `ss -tulnp` – Alternative to `netstat` for socket statistics
- `ping hostname` – Test network connectivity
- `traceroute hostname` – Show network path to a host
- `nslookup domain` – Get DNS resolution details
<!--SR:!2025-05-02,1,230-->





- – Show network interfaces (deprecated, use `ip a`)
?
- `ifconfig`
<!--SR:!2025-05-02,1,230--> 



- – Show network interface details
?
- `ip a`
<!--SR:!2025-05-02,1,230--> 


- – Show active connections and listening ports
?
- `netstat -tulnp`
<!--SR:!2025-05-02,1,230--> 


- – Alternative to `netstat` for socket statistics
?
- `ss -tulnp`
<!--SR:!2025-05-02,1,230--> 



- – Test network connectivity
?
- `ping hostname`
<!--SR:!2025-05-02,1,230--> 


- – Show network path to a host
?
- `traceroute hostname`
<!--SR:!2025-05-02,1,230--> 


- – Get DNS resolution details
?
- `nslookup domain`
<!--SR:!2025-05-02,1,230--> 







### Log Monitoring
?
- `tail -f /var/log/syslog` – Live monitoring of system logs
- `journalctl -f` – Live system logs for systemd-based distros
- `dmesg | tail` – View kernel logs
<!--SR:!2025-05-02,1,230-->



- – Live monitoring of system logs
?
- `tail -f /var/log/syslog`
<!--SR:!2025-05-02,1,230--> 


- – Live system logs for systemd-based distros
?
- `journalctl -f`
<!--SR:!2025-05-02,1,230--> 


- – View kernel logs
?
- `dmesg | tail`
<!--SR:!2025-05-02,1,230--> 




## CPU and Memory Monitoring



### Using `top`
?
To view real-time CPU and memory usage:
```bash
top
```
Press `q` to quit.
<!--SR:!2025-05-02,1,230-->




### Using `htop`
?
A user-friendly alternative:
```bash
htop
```
Use arrow keys to navigate and `F9` to kill processes.
<!--SR:!2025-05-02,1,230-->




### Using `vmstat`
?
To check CPU, memory, and I/O stats:
```bash
vmstat 1 5  # Update every 1 sec, show 5 updates
```
<!--SR:!2025-05-02,1,230-->




### Checking Memory Usage
?
```bash
free -m
```
Shows free and used memory in megabytes.
<!--SR:!2025-05-02,1,230-->

## Disk Monitoring


### Using `df`
?
Check available disk space:
```bash
df -h
```
<!--SR:!2025-05-02,1,230-->

### Using `du`
?
Find the size of a directory:
```bash
du -sh /var/log
```
<!--SR:!2025-05-02,1,230-->



### Using `iostat`
?
Check disk and CPU usage:
```bash
iostat
```
<!--SR:!2025-05-02,1,230-->

## Network Monitoring



### Checking Network Interfaces
?
```bash
ip a  # Show IP addresses and interfaces
```
<!--SR:!2025-05-02,1,230-->


### Viewing Open Ports and Connections
?
```bash
netstat -tulnp  # Show listening ports
ss -tulnp  # Alternative to netstat
```
<!--SR:!2025-05-02,1,230-->



### Testing Connectivity
?
```bash
ping google.com  # Test internet connection
traceroute google.com  # Trace the path to Google
```
<!--SR:!2025-05-02,1,230-->


### Checking DNS Resolution
?
```bash
nslookup example.com
```
<!--SR:!2025-05-02,1,230-->

## Log Monitoring

### Live Monitoring of System Logs
?
```bash
tail -f /var/log/syslog  # Follow logs in real-time
journalctl -f  # Systemd logs
```
<!--SR:!2025-05-02,1,230-->



### Checking Kernel Logs
?
```bash
dmesg | tail
```
<!--SR:!2025-05-02,1,230-->
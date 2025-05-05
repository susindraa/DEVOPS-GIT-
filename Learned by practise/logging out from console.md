If you want to **disconnect from a console session** using Bash, the method depends on what you're trying to disconnect from:

### **1. Disconnect from SSH Session**

If you're connected to a remote server via SSH and want to disconnect:

```bash
exit
```

or

```bash
logout
```

Alternatively, you can press:

- `Ctrl + D` (End-of-File signal, which logs you out)
    

### **2. Detach from a Running Process (Without Stopping It)**

If you've started a long-running process and want to disconnect but keep it running:

- **Using `nohup` (No Hangup)**
    
    ```bash
    nohup command &  
    ```
    
    Example:
    
    ```bash
    nohup python script.py &
    ```
    
    This keeps the process running even if you close the terminal.
    
- **Using `disown`** (After running a process in the background with `&`)
    
    ```bash
    disown -h %1
    ```
    
    (Replace `%1` with the job number if needed)
    
- **Using `screen` or `tmux`** (Better for SSH sessions)
    
    ```bash
    screen -S mysession
    ```
    
    Run your commands, then **detach** with:
    
    ```
    Ctrl + A, then D
    ```
    
    Later, you can **reconnect** with:
    
    ```bash
    screen -r mysession
    ```
    

Let me know if you need help with a specific scenario! 🚀
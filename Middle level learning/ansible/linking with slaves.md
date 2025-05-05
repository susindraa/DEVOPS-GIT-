


#goes-to/ansible 


i created 5 instances in the terraform, four ansible slaves and one master intance, now i want to move to ansible, how can i install ansible in all the instances and connect all of them with master


Great job spinning up your Ansible master and slave instances using Terraform! 🙌 Now that the infrastructure is ready, here’s a **step-by-step guide** to install Ansible on the master, connect to all the slave nodes, and set up your Ansible inventory.

---

## 🛠️ Step-by-Step Setup: Ansible Master & Slaves

---

### ✅ **1. SSH Into the Master Instance**

Get the public IP of your master instance (from the AWS Console or Terraform output), then SSH into it:

```bash
ssh -i your-key.pem ubuntu@<master-public-ip>
```

---

### ✅ **2. Install Ansible on the Master**

Once inside the master node:

```bash
sudo apt update
sudo apt install -y ansible
```

Verify:

```bash
ansible --version
```

---

### ✅ **3. Add Private Key to Master**

Upload your private key (`.pem`) to the Ansible master:

```bash
scp -i your-key.pem your-key.pem ubuntu@<master-public-ip>:~
```

Inside the master:

```bash
chmod 400 your-key.pem
```

---

### ✅ **4. Create the Ansible Inventory File**

Create a file named `hosts.ini`:

```ini
[slaves]
slave1 ansible_host=<ip-1> ansible_user=ubuntu ansible_ssh_private_key_file=~/your-key.pem
slave2 ansible_host=<ip-2> ansible_user=ubuntu ansible_ssh_private_key_file=~/your-key.pem
slave3 ansible_host=<ip-3> ansible_user=ubuntu ansible_ssh_private_key_file=~/your-key.pem
slave4 ansible_host=<ip-4> ansible_user=ubuntu ansible_ssh_private_key_file=~/your-key.pem
```

Replace `<ip-1>` through `<ip-4>` with your EC2 public IPs.

---

### ✅ **5. Test Connection**

Run:

```bash
ansible -i hosts.ini slaves -m ping
```

You should see a `pong` response from all 4 slaves. 🎯

---

### ✅ **6. Install Ansible on Slaves (Optional)**

You typically don't need to install Ansible on the slaves (only the master needs it), but if you do:

```bash
ansible -i hosts.ini slaves -m apt -a "name=ansible state=present update_cache=yes" --become
```

---

### ✅ **7. Run Your First Playbook (Optional)**

Create a sample playbook to install something on all slaves:

```yaml
# install_nginx.yml
- hosts: slaves
  become: yes
  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present
        update_cache: yes
```

Run it:

```bash
ansible-playbook -i hosts.ini install_nginx.yml
```

---

Let me know if you want to:

- Create the `hosts.ini` dynamically using Terraform outputs?
    
- Automate the private key transfer?
    
- Set up passwordless SSH?
    

Happy to walk you through that!
[[ansible 1-05 days]]




#space/ansible/day-6

#goes-to/ansible 
# Setup EC2 Collection and Authentication
?
## Install boto3
```
pip install boto3
```
## Install AWS Collection
```
ansible-galaxy collection install amazon.aws
```
## Setup Vault 
1. Create a password for vault
```
openssl rand -base64 2048 > vault.pass
```
2. Add your AWS credentials using the below vault command
```
ansible-vault create group_vars/all/pass.yml --vault-password-file vault.pass
```




 
## **2. Episode 6 Overview – Focus: Ansible Variables and Precedence**
The objective of this episode:
- Learn how to create AWS resources (e.g., EC2 instance, S3 bucket) using Ansible through **Ansible Collections**.
- Understand **Ansible Variables**, their **usage**, and **precedence** rules.

---

## **3. Using Ansible to Interact with AWS APIs**
### **Key Concepts:**
- **Why API-based interaction?**
  - Previously, Ansible was used to connect to remote nodes (like EC2 instances) via SSH to install packages or configure systems.
  - For resource provisioning (e.g., creating an EC2 instance), you **cannot use SSH** directly; instead, you must interact with AWS APIs.
### **How does Ansible handle this?**
- Ansible uses **Collections** — modules that run locally on the control node and communicate with external services like AWS via APIs.
- These modules are not installed by default and need to be **explicitly installed**.

### **Demo: Creating an EC2 Instance via Ansible**
#### **Steps:**
1. **Install the Amazon AWS Collection**:
```bash
   ansible-galaxy collection install amazon.aws
```
2. **Install Boto3 (AWS SDK for Python)**:
```bash
   pip install boto3
```
3. **Create an Ansible Role for EC2 Creation**:
   - Use `ansible-galaxy` to initialize a role:
     ```bash
     ansible-galaxy role init ec2
     ```
1. **Write the Playbook/Role Task to Create EC2**:
   - Example task in `tasks/main.yml`:
 ```yaml
     - name: Launch an EC2 instance
       amazon.aws.ec2_instance:
         aws_access_key: "{{ ec2_access_key }}"
         aws_secret_key: "{{ ec2_secret_key }}"
         region: us-east-1
         instance_type: t2.micro
         image_id: ami-0c55b159cbfafe1f0
         network:
           assign_public_ip: yes
 ```
1. **Secure AWS Credentials using Ansible Vault**:
   - Create encrypted file to store secrets:
```bash
 ansible-vault create vault.yml
```
   - Add credentials inside:
 ```yaml
     ec2_access_key: YOUR_ACCESS_KEY
     ec2_secret_key: YOUR_SECRET_KEY
 ```
6. **Run the Playbook with Vault**:
```bash
   ansible-playbook ec2_create.yml --vault-password-file=vault.pass
```

---

## **4. Introduction to Ansible Variables**
?
### **Why Variables?**
- Hardcoding values like `ami_id`, `instance_type`, etc., makes your playbook **non-reusable**.
- Variables allow playbook customization without modifying code.
### **Basic Syntax – Jinja2 Templating**
- Variable usage:
```yaml
  instance_type: "{{ type }}"
```
### **Default Variables in Role**
- Define variables in `defaults/main.yml`:
```yaml
  type: t2.micro
```
- Reference in tasks:
```yaml
  instance_type: "{{ type }}"
```
### **Overriding Defaults**
- Override in `vars/main.yml`:
```yaml
  type: t2.medium
```
- **Precedence**: `vars/main.yml` > `defaults/main.yml`
---
<!--SR:!2025-05-04,1,170-->





## **5. Ansible Variable Precedence**
?
- There are **22 places** where variables can be declared in Ansible, but only a few are commonly used:
-
| Priority | Location |
|---------|----------|
| **Lowest** | Role defaults (`defaults/main.yml`) |
| Medium | Role vars (`vars/main.yml`) |
| Medium | Group variables (`group_vars/*.yml`) |
| High | Play vars (defined in `vars:` section of play) |
| **Highest** | Extra vars (`--extra-vars` or `-e`) |
### **Example of Overriding:**
```bash
ansible-playbook site.yml -e "type=t2.large"
```
This will override any variable set in defaults or vars.
<!--SR:!2025-05-04,1,230-->

---




## **6. Common Variable Declaration Methods**
?
### **a. Role Defaults**
Used for general/default values. Typically found in:
```
roles/ec2/defaults/main.yml
```
### **b. Role Vars**
For team/project-specific overrides. Typically found in:
```
roles/ec2/vars/main.yml
```
### **c. Play-level Vars**
Defined directly in the playbook:
```yaml
- hosts: localhost
  vars:
    type: t2.xlarge
  roles:
    - ec2
```
### **d. Group Variables**
Used to define variables per group in inventory:
```
group_vars/app.yml
group_vars/db.yml
```
### **e. Command-line Extra Vars**
Most powerful way to override:
```bash
ansible-playbook site.yml -e "type=t2.nano"
```
<!--SR:!2025-05-04,1,170-->

---

## **7. Best Practices**
?
- **Use `defaults/main.yml`** for base/default values.
- Allow teams to **override** using `vars/main.yml`.
- Use **Ansible Vault** for **secrets** like API keys.
- Prefer **extra-vars** when overriding from CLI during one-off runs.
- Avoid hardcoding sensitive or frequently changing data in tasks.
<!--SR:!2025-05-04,3,250-->

---

## **8. Security Considerations**
?
- Never commit sensitive information (like AWS keys) into public repositories.
- Always encrypt such data using **Ansible Vault**.
- Store Vault password securely (e.g., in CI tools, encrypted files).
<!--SR:!2025-05-04,1,170-->

---

## **9. Summary of Key Takeaways**
- **Ansible Collections** are used to manage infrastructure/cloud automation.
- Use **Boto3** and **Amazon AWS Collection** to interact with AWS.
- **Variables** provide flexibility and reusability in Ansible.
- **Variable precedence** determines which value takes effect when multiple variables share the same name.
- Always follow best practices for **security**, especially with **secrets**.

---

## **10. Upcoming Topics**
- Network Automation with Ansible
- Advanced use cases of collections
- More hands-on demos with variables and real-world use cases

---

## **GitHub Resource**
- All files and documentation related to the series are available in a GitHub repository.
- Folder-wise structure ensures easy navigation and reuse.

---

If you'd like, I can also generate a **PDF version** or **Markdown-formatted notes** for offline use. Let me know!





[[day 07.]]
 





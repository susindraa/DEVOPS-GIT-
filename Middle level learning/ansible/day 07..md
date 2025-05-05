
[[Middle level learning/ansible/day 06|day 06]]


#goes-to/ansible 

#space/ansible/day-7



# Ansible Realtime project
?
## Task 1
[](https://github.com/iam-veeramalla/ansible-zero-to-hero/blob/main/Day-07/README.md#task-1)
- Create three(3) EC2 instances on AWS using Ansible loops
- 2 Instances with Ubuntu Distribution
- 1 Instance with Centos Distribution
- Hint: Use `connection: local` on Ansible Control node.
## Task 2
[](https://github.com/iam-veeramalla/ansible-zero-to-hero/blob/main/Day-07/README.md#task-2)
- Set up passwordless authentication between Ansible control node and newly created instances.
## Task 3
[](https://github.com/iam-veeramalla/ansible-zero-to-hero/blob/main/Day-07/README.md#task-3)
- Automate the shutdown of Ubuntu Instances only using Ansible Conditionals
- Hint: Use `when` condition on ansible `gather_facts
# ec2 create yaml
```
---
- hosts: localhost
  connection: local
  tasks:
  - name: Create EC2 instances
    amazon.aws.ec2_instance:
      name: "{{ item.name }}"
      key_name: "abhi-aws-keypair"
      instance_type: t2.micro
      security_group: default
      region: ap-south-1
      aws_access_key: "{{ec2_access_key}}"  # From vault as defined
      aws_secret_key: "{{ec2_secret_key}}"  # From vault as defined      
      network:
        assign_public_ip: true
      image_id: "{{ item.image }}"
      tags:
        environment: "{{ item.name }}"
    loop:
      - { image: "ami-0e1d06225679bc1c5", name: "manage-node-1" } # Update AMI ID according 
      - { image: "ami-0f58b397bc5c1f2e8", name: "manage-node-2" } # to your account
      - { image: "ami-0f58b397bc5c1f2e8", name: "manage-node-3" }
```
## ec2 shutdown yaml
```
---
- hosts: all
  become: true
  tasks:
    - name: Shutdown ubuntu instances only
      ansible.builtin.command: /sbin/shutdown -t now
      when:
       ansible_facts['os_family'] == "Debian"
```
<!--SR:!2025-05-04,1,170-->


 [[Middle level learning/ansible/Day 08|Day 08]]
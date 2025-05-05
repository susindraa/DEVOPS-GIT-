#done-space 



#space/linux/03-day

[[day 02 Folder structure|day 02 Folder structure]]


# User Management in Linux

## Introduction to User Management in Linux
?
- Linux is a multi-user operating system, meaning multiple users can operate on a system simultaneously. Proper user management ensures security, controlled access, and system integrity.
- Key files involved in user management:
	- `/etc/passwd` – Stores user account details.
	- `/etc/shadow` – Stores encrypted user passwords.
	- `/etc/group` – Stores group information.
	- `/etc/gshadow` – Stores secure group details.
- 
<!--SR:!2025-05-02,1,210-->



- `/etc/passwd` – Stores user account details.
	- `/etc/shadow` – Stores encrypted user passwords.
	- `/etc/group` – Stores group information.
	- `/etc/gshadow` – Stores secure group details.
- 

## Creating Users in Linux
?
- To create a new user in Linux, use:
### `useradd` Command (For most Linux distributions)
```bash
useradd username
```
- This creates a user without a home directory.
- To create a user with a home directory:
```bash
useradd -m username
```
- To specify a shell:
```bash
useradd -s /bin/bash username
```
### `adduser` Command (For Debian-based systems)
```bash
adduser username
```
- This is an interactive command that asks for a password and additional details.
<!--SR:!2025-05-02,1,210-->

## Managing User Passwords
?
- To set or change a user’s password:
```bash
passwd username
```
### Enforcing Password Policies
- **Password expiration**: Set password expiry days
```bash
chage -M 90 username
```
- **Lock a user account**
```bash
passwd -l username
```
- **Unlock a user account**
```bash
passwd -u username
```
<!--SR:!2025-05-02,1,210-->

## Modifying Users
?
- Modify an existing user with `usermod`:
- Change the username:
```bash
usermod -l new_username old_username
```
- Change the home directory:
```bash
usermod -d /new/home/directory -m username
```
- Change the default shell:
```bash
usermod -s /bin/zsh username
```
<!--SR:!2025-05-02,1,210-->

## Deleting Users
?
- To remove a user but keep their home directory:
```bash
userdel username
```
- To remove a user and their home directory:
```bash
userdel -r username
```
<!--SR:!2025-05-02,1,210-->

## Working with Groups
?
### Creating Groups
```bash
groupadd groupname
```
### Adding Users to Groups
```bash
usermod -aG groupname username
```
### Viewing Group Memberships
```bash
groups username
```
<!--SR:!2025-05-02,1,210-->

### Changing Primary Group
?
```bash
usermod -g new_primary_group username
```
<!--SR:!2025-05-02,1,210-->

## Sudo Access and Privilege Escalation
?
### Adding a User to Sudo Group
- On Debian-based systems:
```bash
usermod -aG sudo username
```
- On RHEL-based systems:
```bash
usermod -aG wheel username
```
### Granting Specific Commands with Sudo
- Edit the sudoers file:
```bash
visudo
```
- Then add:
```bash
username ALL=(ALL) NOPASSWD: /path/to/command
```
<!--SR:!2025-05-02,1,210-->





----
- To create a new user in Linux, use:
### `useradd` Command (For most Linux distributions)
?
```bash
useradd username
```




- This creates a user without a home directory.



- To create a user with a home directory:
?
```bash
useradd -m username
```



- To specify a shell:
?
```bash
useradd -s /bin/bash username
```




### `adduser` Command (For Debian-based systems)
?
```bash
adduser username
```
- This is an interactive command that asks for a password and additional details.





- **Password expiration**: Set password expiry days
?
```bash
chage -M 90 username
```



- **Lock a user account**
?
```bash
passwd -l username
```


- **Unlock a user account**
?
```bash
passwd -u username
```




- Change the username:
?
```bash
usermod -l new_username old_username
```



- Change the home directory:
?
```bash
usermod -d /new/home/directory -m username
```




- Change the default shell:
?
```bash
usermod -s /bin/zsh username
```






- To remove a user but keep their home directory:
?
```bash
userdel username
```



- To remove a user and their home directory:
?
```bash
userdel -r username
```



### Creating Groups
?
```bash
groupadd groupname
```



### Adding Users to Groups
?
```bash
usermod -aG groupname username
```


### Viewing Group Memberships
?
```bash
groups username
```



[[day 04 File management]]
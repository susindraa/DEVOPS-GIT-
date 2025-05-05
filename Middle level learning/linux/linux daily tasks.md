
#goes-to/linux 



- [ ] [me@linuxbox ~]$ dateThu Mar 8 15:09:41 EST 2025
- [ ] [me@linuxbox ~]$ uptime
- [ ] [me@linuxbox ~]$ df
- [ ] [me@linuxbox ~]$ free
- [ ] [me@linuxbox ~]$ exit
- [ ] [me@linuxbox ~]$ pwd
- [ ] [me@linuxbox ~]$ ls
- [ ] [me@linuxbox ~]$ cd /usr/bin
- [ ] [me@linuxbox ~]$ ls -lt
- [ ] [me@linuxbox ~]$ ls -lt --reverse
- [ ] [me@linuxbox ~]$ file picture.jpg
- [ ] [me@linuxbox ~]$ less /etc/passwd
- [ ] /  The root directory. Where everything begins.
- [ ] /bin Contains binaries (programs) that must be present for the system to boot and run. Note that modern Linux distributions have deprecated /bin in favor of /usr/bin (see below)..
- [ ] ~/.config and ~/.local =These two directories are located in the home directory of each desktop user. They are used to store user-specific configuration data for desktop applications.
- [ ] Wildcard
Meaning
*
Matches any characters
?
Matches any single character
[characters]
Matches any character that is a member of the set characters
[!characters] or [^characters]
Matches any character that is not a member of the set characters
[[:class:]]
Matches any character that is a member of the specified class

- [ ] cp item1 item2
- [ ] cp item... directory
- [ ] mv item1 item2
- [ ] mv item... directory
- [ ] -i
--interactive
Before overwriting an existing file, prompt the user for confirmation. If this option is not specified, mv will silently overwrite files.
-u
--update
When moving files from one directory to another, only move files that either don't exist, or are newer than the existing corresponding files in the destination directory.
-v
--verbose
Display informative messages as the move is performed.
- [ ] rm item...
- [ ] ln file link
- [ ] ln -s item link
- [ ] ls -l
- [ ] [me@linuxbox playground]$ ls -l
- [ ] [me@linuxbox playground]$ ls -li 
- [ ] [me@linuxbox playground]$ ln -s fun fun-sym
- [ ] type command
- [ ] [me@linuxbox ~]$ which ls 
- [ ] [me@linuxbox ~]$ which cd
- [ ] [me@linuxbox ~]$ help cd
- [ ] [me@linuxbox ~]$ whatis ls
- [ ] [me@linuxbox ~]$ info coreutils
- [ ] command1; command2; command3...
- [ ] [me@linuxbox ~]$ unalias foo[me@linuxbox ~]$ type foobash: type: foo: not found
- [ ] [me@linuxbox ~]$ ls -l /usr/bin > ls-output.txt
- [ ] [me@linuxbox ~]$ ls -l ls-output.txt
- [ ] [me@linuxbox ~]$ less ls-output.txt
- [ ] [me@linuxbox ~]$ ls -l /bin/usr > ls-output.txt 
- [ ] [me@linuxbox ~]$ ls -l ls-output.txt
- [ ] [me@linuxbox ~]$ > ls-output.txt
- [ ] [me@linuxbox ~]$ ls -l /usr/bin >> ls-output.txt
- [ ] [me@linuxbox ~]$ command1 > logfile.txt; command2 >> logfile.txt; command3 >> logfile.txt
- [ ] [me@linuxbox ~]$ { command1; command2; command3; } > logfile.txt
- [ ] [me@linuxbox ~]$ ls -l /bin/usr 2> ls-error.txt
- [ ] [me@linuxbox ~]$ ls -l /bin/usr > ls-output.txt 2>&1
- [ ] [me@linuxbox ~]$ ls -l /bin/usr &> ls-output.txt
- [ ] [me@linuxbox ~]$ ls -l /bin/usr 2> /dev/null
- [ ] [me@linuxbox ~]$ ls -l /usr/bin | less
- [ ] [me@linuxbox ~]$ ls /bin /usr/bin | sort | less
- [ ] [me@linuxbox ~]$ ls /bin /usr/bin | sort | uniq | less
- [ ] [me@linuxbox ~]$ ls /bin /usr/bin | sort | uniq -d | less
- [ ] grep pattern [file...]
- [ ] [me@linuxbox ~]$ ls /usr/bin | tail -n 5
- [ ] [me@linuxbox ~]$ head -n -5 text_header_footer.txt | tail -n +5 > text.txt
- [ ] [me@linuxbox ~]$ ls /usr/bin | tee ls.txt | grep zip 
- [ ] [me@linuxbox ~]$ echo this is a testthis
- [ ] [me@linuxbox ~]$ echo *
- [ ] [me@linuxbox ~]$ echo D*
- [ ] [me@linuxbox ~]$ echo *s 
- [ ] [me@linuxbox ~]$ echo [[:upper:]]*
- [ ] [me@linuxbox ~]$ echo /usr/*/share 
- [ ] [me@linuxbox ~]$ echo ~[me@linuxbox ~]$ echo ~bob 
- [ ] [me@linuxbox ~]$ echo Front-{A,B,C}-Back
- [ ] [me@linuxbox ~]$ echo Number_{1..5}
- [ ] [me@linuxbox ~]$ echo {01..15}
- [ ] [me@linuxbox ~]$ printenv | less
- [ ] [me@linuxbox ~]$ ls -l $(which cp)
- [ ] [me@linuxbox ~]$ echo this is a test 
- [ ] [me@linuxbox ~]$ ls -l two words.txt 
- [ ] [me@linuxbox ~]$ echo $(df -h)
- [ ] [me@linuxbox ~]$ history | less
- [ ] [me@linuxbox ~]$ history | grep /usr/bin
- [ ] [me@linuxbox ~]$ !88
- [ ] In this chapter we will look at this essential part of system security and introduce the following commands:
●id – Display user identity
●chmod – Change a file's mode
●umask – Set the default file permissions
●su – Run a shell as another user
●sudo – Execute a command as another user
●chown – Change a file's owner
●chgrp – Change a file's group ownership
●addgroup – Add a user or a group to the system
●usermod – Modify a user account
●passwd – Change a user's password
User Group Other
rwx    rwx     rwx

![[Pasted image 20250409112823.png]]
![[Pasted image 20250409112836.png]]
![[Pasted image 20250409112911.png]]
![[Pasted image 20250409113028.png]]
![[Pasted image 20250409113059.png]]
![[Pasted image 20250409113123.png]]
- [ ] [me@linuxbox ~]$ kill -l
Making a Process Hangup Proof
As we discussed, above many command line programs will respond to the HUP signal by terminating when its controlling terminal “hangs up” (i.e. closes or disconnects). To prevent this behavior, we can launch the program with the nohup command. Here’s an example.

![[Pasted image 20250409113819.png]]
![[Pasted image 20250409113856.png]]
- [ ] [me@linuxbox ~]$ printenv | lessDoing so, we should get something that looks like this:
- [ ] [me@linuxbox ~]$ echo $HOME
- [ ] [me@linuxbox ~]$ set | less
- [ ] [me@linuxbox ~]$ printenv USER
- [ ] [me@linuxbox ~]$ alias
- [ ] ![[Pasted image 20250409114124.png]]
- [ ] export PATH
The export command tells the shell to make the contents of PATH available to child processes of this shell. In a sense, it converts a shell variable into an environment variable.
- [ ] [me@linuxbox ~]$ ll
- [ ] :q
The shell prompt should return. If, for some reason, vi will not quit (usually because we made a change to a file that has not yet been saved),
- [ ] :q!
Tip: If
- [ ] Saving Our Work
To save the change we just made to our file, we must enter an command mode. This is done by pressing the : key while in normal mode. After doing this, a colon character should appear at the bottom of the screen.
:
To write our modified file, we follow the colon with a w and then press Enter.
:w
The file will be written to the hard drive, and we should get a confirmation message at the bottom of the screen, like this: "foo.txt" [New] 1L, 45C written
- [ ] ![[Pasted image 20250409114631.png]]
- [ ] g to last line
- [ ] Switching Between Files
To switch from one file to the next, use this ex command:
:bn
To move back to the previous file use the following:
:bp
- [ ] Debian style
dpkg
apt, apt-get, aptitude
- [ ] Debian
apt update; apt install package_name
- [ ] Installing a Package from a Package File
If a package file has been downloaded from a source other than a repository, it can be installed directly (though without dependency resolution) using a low-level tool (see Table 14-5).
Table 14-5: Low-Level Package Installation Commands
Style
Command(s)
Debian
dpkg -i package_file
- [ ] Removing a Package
Packages can be uninstalled using either the high-level or low-level tools. The high-level tools are shown in Table 14-6.
Table 14-6: Package Removal Commands
Style
Command(s)
Debian
apt remove package_name
Red Hat
dnf erase package_name
For example, to uninstall the emacs package from a Debian-style system, we can use this command:
apt remove emacs
- [ ] Updating Packages from a Repository
The most common package management task is keeping the system up-to-date with the latest versions of packages. The high-level tools can perform this vital task in a single step (see Table 14-7).
Table 14-7: Package Update Commands
Style
Command(s)
Debian
apt update; apt upgrade
Red Hat
dnf update
For example, to apply all available updates to the installed packages on a Debian-style system, we can use this command:
apt update; apt upgrade
- [ ] Listing Installed Packages
Table 14-9 lists the commands we can use to display a list of all the packages installed on the system.
Table 14-9: Package Listing Commands
Style
Command(s)
Debian
dpkg -l
- [ ] ![[Pasted image 20250409115506.png]]
- [ ] ping
The most basic network command is ping. The ping command sends a special network packet called an ICMP ECHO_REQUEST to a specified host. Most network devices receiving this packet will reply to it, allowing the network connection to be verified.
Note: It is possible to configure most network devices (including Linux hosts) to ignore these packets. This is usually done for security reasons, to partially obscure a host from a potential attacker. It is also common for firewalls to be configured to block ICMP traffic.
For example, to see whether we can reach linuxcommand.org (one of our favorite sites ;-), we can use ping like this:
[me@linuxbox ~]$ ping linuxcommand.org
- [ ] traceroute
The traceroute program (some systems use the similar tracepath program instead) lists all the “hops” network traffic takes to get from the local system to a specified host. For example, to see the route taken to reach slashdot.org, we would do this:
[me@linuxbox ~]$ traceroute slashdot.org
- [ ] ip
The ip program is a multi-purpose network configuration tool that makes use of the full range of networking features available in modern Linux kernels. It replaces the earlier and now deprecated ifconfig program. The ip program is used to examine various network settings and statistics. Through the use of its many options, we can look at a variety of features in our network setup. With ip, we can examine a system's network interfaces and routing table. First, the interfaces:
[me@linuxbox ~]$ ip address show
- [ ] [me@linuxbox ~]$ ip route show 
- [ ] ip [-options] object [command]
- [ ] [me@linuxbox ~]$ ftp fileserver
- [ ] curl - Transfer a URL
Another popular file transfer program is curl. Its most basic usage works like this:
[me@linuxbox ~]$ curl https://linuxcommand.org
We specify a URL and curl downloads the first page of the URL and outputs it to standard output. Multiple URLs can be specified.
curl supports most network protocols including HTTP, HTTPS, FTP, IMAP, POP3, SFTP, SMB, and others. Table 16-2 lists a few of the many options that curl supports.
- [ ] wget - Non-interactive network downloader
Another command-line program for file downloading is wget. It is useful for downloading content from both web and FTP sites. Single files, multiple files, and even entire sites can be downloaded. To download the first page of linuxcommand.org we could do this:
[me@linuxbox ~]$ wget http://linuxcommand.org/index.php
- [ ] Secure Shell (SSH) was developed. SSH solves the two basic problems of secure communication with a remote host.
1.It authenticates that the remote host is who it says it is (thus preventing so-called man-in-the-middle attacks).
2.It encrypts all of the communications between the local and remote hosts.
[me@linuxbox ~]$ ssh remote-sys 

[me@linuxbox ~]$ ssh bob@remote-sys

[me@linuxbox ~]$ ssh remote- 

ssh-keygen -f "/home/me/.ssh/known_hosts" -R "remote-sys"

[me@linuxbox ~]$ ssh remote-sys 'ls *' > dirlist.txt 

[me@linuxbox ~]$ ssh remote-sys 'ls * > dirlist.txt'


[me@linuxbox ~]$ scp remote-sys:document.txt



[me@linuxbox ~]$ scp bob@remote-sys:document.txt .


- [ ] ![[Pasted image 20250409120331.png]].
- [ ] find – Find Files the Hard Way
While the locate program can find a file based solely on its name, the find program searches a given directory (and its subdirectories) for files based on a variety of attributes. We’re going to spend a lot of time with find because it has a lot of interesting features that we will see again and again when we start to cover programming concepts in later chapters.
In its simplest use, find is given one or more names of directories to search. For example, to produce a listing of our home directory we can use this:
[me@linuxbox ~]$ find ~
[me@linuxbox ~]$ find ~ | wc -l 

- [ ] User-Defined Actions
In addition to the predefined actions, we can also invoke arbitrary commands. The traditional way of doing this is with the -exec action. This action works like this:
-exec command {} ;
Here command is the name of a command, {} is a symbolic representation of the current pathname, and the semicolon is a required delimiter indicating the end of the command. Here’s an example of using -exec to act like the -delete action discussed earlier:
-exec rm '{}' ';'
Again, since the brace and semicolon characters have special meaning to the shell, they must be quoted or escaped.
It’s also possible to execute a user-defined action interactively. By using the -ok action in place of -exec, the user is prompted before execution of each specified command.





- [ ] ![[Pasted image 20250409120538.png]]
- [ ] grep
The main program we will use to work with regular expressions is our old pal grep. The name “grep” is actually derived from the phrase “global regular expression print,” so we can see that grep has something to do with regular expressions. In essence, grep searches text files for the occurrence text matching a specified regular expression and outputs any line containing a match to standard output.
[me@linuxbox ~]$ ls /usr/bin | grep zip



- [ ] [me@linuxbox ~]$ grep -h '.zip' dirlist*.txt
- [ ] ![[Pasted image 20250409121249.png]]
- [ ] ![[Pasted image 20250409121334.png]]
- [ ] ![[Pasted image 20250409121355.png]]
- [ ] ![[Pasted image 20250409121424.png]]
- [ ] ![[Pasted image 20250409121443.png]]
- [ ] 

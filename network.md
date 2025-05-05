# notes
Here is a detailed briefing document reviewing the main themes and most important ideas or facts from the provided YouTube transcript excerpts about networking concepts:

## Briefing Document: Networking Fundamentals (Based on YouTube Transcript)

**Source:** Excerpts from a YouTube video titled "Pasted Text" (likely a transcript of a networking tutorial).

**Presenter:** Abishek

**Date of Source:** (Not explicitly mentioned, but likely a recent tutorial based on cloud computing references)

**Purpose of Source:** To explain networking concepts from fundamental principles, including IP addresses, subnets, CIDR, ports, DNS, TCP handshake, and components within a Virtual Private Cloud (VPC) on AWS. The video aims to build foundational knowledge and culminates in implementing networking projects on AWS.

**Key Themes and Concepts:**

This source provides a foundational overview of core networking concepts, focusing on how devices communicate and are organized, particularly within cloud environments like AWS. The key themes covered are:

1. **Device Identification (IP Addresses):** Every device connected to a network needs a unique identifier to enable communication.
2. **Network Segmentation and Organization (Subnets and VPCs):** Large networks can be divided into smaller, more manageable, and secure segments.
3. **Addressing and Sizing Networks/Subnets (CIDR):** A standard method for representing and calculating the size of IP address ranges.
4. **Application Identification (Ports):** Within a single device, different applications use unique identifiers (ports) to receive and send data.
5. **Communication Protocols and Processes (DNS, TCP Handshake, Data Layers):** The underlying mechanisms that allow devices to find each other and establish reliable communication.
6. **Security and Access Control (Security Groups, Network ACLs, Bastion Hosts):** Mechanisms for controlling traffic flow and protecting network resources.
7. **Cloud Networking (AWS VPC):** Applying these networking concepts within a cloud computing environment.

**Most Important Ideas and Facts:**

- **IP Addresses as Unique Identifiers:**
- Every device needs a unique number to avoid confusion and enable targeted communication.
- "To avoid that each of this devices should should have a unique number and that unique identification is nothing but IP address..." (2:53)
- IP addresses are crucial for directing data, tracking activity, and monitoring devices.
- **IPv4 Format:** The common format is four sets of numbers separated by dots (e.g., 172.16.3.4, 10.1.2.4).
- Each number in an IPv4 address ranges from 0 to 255.
- An IPv4 address is 32 bits long, divided into four bytes (each byte is 8 bits).
- The 0-255 range comes from representing an 8-bit number (2^8 = 256 possible values, from 0 to 255).
- IP addresses can be converted to binary format (bits) for computer understanding.
- **Subnets for Network Segmentation:**
- Subnets divide a larger network (like a school or office network) into smaller, isolated segments.
- "subnet is basically if you look at the name itself it says sub networking..." (16:04)
- This segmentation provides **security, privacy, and isolation**. For example, separating finance data into a secure network.
- **Types of Subnets:** Private subnets (no direct internet access) and Public subnets (internet access).
- Public subnets often use an Internet Gateway for external connectivity.
- Within a VPC (Virtual Private Cloud) on AWS, subnets are created within the larger VPC network.
- **CIDR (Classless Inter-Domain Routing):**
- CIDR is a method for explaining **how many IP addresses are available** in a particular subnet or network range.
- "This cidr or cidr is a way of explaining how many IP addresses are available in a particular subnet..." (22:14)
- It's represented by a slash followed by a number (e.g., /24, /16, /27).
- The number after the slash indicates how many bits are "static" or common to the network address. The remaining bits determine the number of available host IP addresses.
- The number of available IP addresses is calculated as **2^(32 - CIDR_number)**.
- Examples:
- /24: 32 - 24 = 8 bits available for hosts. 2^8 = 256 IP addresses.
- /16: 32 - 16 = 16 bits available for hosts. 2^16 = 65,536 IP addresses.
- /27: 32 - 27 = 5 bits available for hosts. 2^5 = 32 IP addresses.
- CIDR allows for flexible allocation of IP addresses within a larger network.
- **Ports for Application Identification:**
- On a device, multiple applications can run simultaneously. Ports are used to distinguish between these applications.
- "Port is a unique number for your application in an instance there can be hundreds of application and using Port you can distinguish the request has to go to which particular..." (40:38)
- Applications listen on specific ports (e.g., web servers often use port 80 for HTTP or 443 for HTTPS).
- Accessing an application from the internet requires the device's IP address and the application's port number (e.g., IP_address:Port_number).
- Some ports are reserved or commonly used by specific applications (e.g., 3306 for MySQL, 8080 for Jenkins).
- **Networking Protocols and Processes:**
- **DNS (Domain Name Service):** Translates human-readable domain names (like google.com) into machine-readable IP addresses.
- "there is a system called DNS which is nothing but domain naming service you can understand it as a simple database..." (45:10)
- Routers or DNS servers maintain mappings between domain names and IP addresses.
- DNS resolution is the first step when accessing a website.
- **TCP Handshake (Three-Way Handshake):** A process for establishing a reliable connection between two devices before data transfer.
- Ensures the server is ready to receive the request.
- Involves three steps: SYN (synchronize), SYN-ACK (synchronize-acknowledge), ACK (acknowledge).
- Considered a prerequisite before initiating data requests.
- **Data Packaging (Packets):** Data is broken down into smaller units called packets for transmission.
- Each packet includes the source and destination IP addresses.
- Routers determine the path for these packets.
- This occurs at the networking layer (Layer 3) of the OSI model.
- **Security and Access Control in AWS VPCs:**
- AWS provides multiple layers of security within a VPC.
- **Security Groups:** Act as a **virtual firewall** for individual EC2 instances.
- They operate at the **instance level**.
- Security groups **only allow** traffic (cannot explicitly deny).
- Default behavior is to deny all inbound traffic and allow all outbound traffic.
- **Network ACLs (NACLs):** Act as a **stateless firewall** for subnets.
- Operate at the **subnet level**.
- NACLs can both **allow and deny** traffic.
- They process rules in order based on rule number (lowest number first).
- If a deny rule is met, the traffic is blocked regardless of security group settings.
- NACLs provide a higher level of organizational control over network traffic.
- **Internet Gateway:** Allows communication between a VPC and the internet.
- **Bastion Hosts (Jump Hosts):** A server located in a public subnet that acts as a secure gateway to access instances in private subnets.
- Provides a central point for managing and auditing access to private resources.
- "it act as a mediator between your private subnet and it acts as a mediator like between your private subnet and the external persons or the public subnet..." (2:50:14)
- **AWS VPC Implementation:**
- VPCs are created with a defined IP address range (using CIDR) which determines their size (number of available IPs).
- Subnets are created within a VPC, each with its own CIDR range, splitting the larger VPC IP space.
- The size of a subnet's CIDR determines the number of IPs available within that subnet.
- Route tables define how network traffic is directed within the VPC and to external networks (like the internet via an Internet Gateway).

**Practical Demonstrations and Examples:**

The source highlights practical application through demonstrations on AWS:

- Creating a custom VPC with a specified CIDR range.
- Creating public and private subnets within the VPC.
- Launching EC2 instances in a public subnet and configuring security groups to allow access (e.g., on port 8000).
- Illustrating how NACLs can override security group rules by explicitly denying traffic at the subnet level, even if allowed by the security group.
- Demonstrating accessing a private instance via a Bastion host in a public subnet.

**Assessment Opportunities:**

The presenter includes assignments to reinforce learning:

- Converting IP addresses to binary format.
- Calculating the number of IP addresses in a CIDR range.
- Implementing the demonstrated AWS VPC, subnets, security groups, and NACLs.

**Overall Significance:**

This source provides a clear and structured introduction to essential networking concepts, building from the basics of device identification to more complex topics like network segmentation and security within a cloud environment. The use of analogies and practical AWS examples makes the abstract concepts more tangible and provides a solid foundation for further learning in networking and cloud infrastructure. The emphasis on security layers (Security Groups and NACLs) is particularly relevant for understanding best practices in cloud deployments.



# qwen

Here’s a structured summary of the key concepts and practical steps from the provided transcript:

---

### **1. IP Addressing & CIDR Notation**
- **IPv4 Structure**:
  - Format: Four octets separated by dots (e.g., `192.168.1.1`).
  - Each octet ranges from **0 to 255** (256 possible values per octet).
  - Total possible IPv4 addresses: $256^4 = 4,294,967,296$.
- **CIDR (Classless Inter-Domain Routing)**:
  - Notation: `/X` (e.g., `/24`), where `X` represents the number of fixed bits in the network prefix.
  - **Calculations**:
    - Total IPs: $2^{(32 - X)}$.
    - Example: `/24` → $2^8 = 256$ IPs, `/26` → $2^6 = 64$ IPs.
  - Common CIDR blocks: `/8`, `/16`, `/24`, `/27`, `/29`.

---

### **2. Virtual Private Cloud (VPC)**
- **Purpose**: Isolated network environment in AWS for secure resource deployment.
- **Key Components**:
  - **Subnets**:
    - Public Subnets: Accessible from the internet (e.g., load balancers).
    - Private Subnets: Isolated from the internet (e.g., databases, backend servers).
  - **Internet Gateway**: Enables communication between VPC and the internet.
  - **NAT Gateway**: Allows private subnet instances to access the internet (outbound only).
  - **Route Tables**: Define routing rules for traffic within the VPC.
- **Creating a VPC**:
  - Use **"VPC and More"** option in AWS Console for automated setup (public/private subnets, route tables, etc.).
  - Choose a CIDR block (e.g., `192.168.0.0/16` for 65,536 IPs).
  - Example: Splitting a `/16` VPC into subnets:
    - Finance Subnet: `192.168.3.0/24` (256 IPs).
    - Development Subnet: `192.168.4.0/24` (256 IPs).

---

### **3. Subnetting & Network Design**
- **Subnetting Process**:
  - Divide a larger network into smaller, logical segments.
  - Example: Split a `/24` network (`192.168.1.0/24`) into four `/26` subnets:
    - `192.168.1.0/26` (64 IPs).
    - `192.168.1.64/26` (64 IPs).
    - `192.168.1.128/26` (64 IPs).
    - `192.168.1.192/26` (64 IPs).
- **Private IP Ranges** (RFC 1918):
  - `10.0.0.0/8` (10.x.x.x).
  - `172.16.0.0/12` (172.16.x.x to 172.31.x.x).
  - `192.168.0.0/16` (192.168.x.x).

---

### **4. Security Groups & Network Access**
- **Security Groups**:
  - Act as virtual firewalls for EC2 instances.
  - Rules:
    - **Inbound**: Control incoming traffic (e.g., allow HTTP on port 80).
    - **Outbound**: Default allows all traffic; restrict as needed.
  - Example: Allow SSH (port 22) only from specific IPs.
- **Best Practices**:
  - Avoid using default security groups (create custom ones).
  - Restrict access to critical ports (e.g., MySQL on 3306, Jenkins on 8080).

---

### **5. Bastion Hosts (Jump Hosts)**
- **Purpose**: Secure access to instances in private subnets.
- **Implementation**:
  - Deploy a Bastion Host in a public subnet.
  - Use SSH tunneling to connect to private instances via the Bastion Host.
  - Example Command:
    ```bash
    ssh -i "key.pem" ec2-user@bastion-public-ip
    ssh ec2-user@private-instance-ip
    ```

---

### **6. Load Balancing & Target Groups**
- **Application Load Balancer (ALB)**:
  - Distributes traffic to EC2 instances in private subnets.
  - Configured with **Target Groups** (e.g., route HTTP traffic to instances on port 80).
- **Steps**:
  1. Create ALB in a public subnet.
  2. Configure listeners (e.g., HTTP on port 80).
  3. Attach target groups pointing to EC2 instances.
  4. Set health checks (e.g., ping path `/health`).

---

### **7. Auto Scaling Groups**
- **Purpose**: Automatically adjust EC2 instance count based on demand.
- **Components**:
  - **Launch Template**: Defines instance configuration (AMI, instance type, security groups).
  - **Scaling Policies**: Static (fixed number) or dynamic (CPU-based).
- **Steps**:
  1. Create a launch template.
  2. Define Auto Scaling Group with min/max/desired instance counts.
  3. Attach target group for load balancing.

---

### **8. Practical Steps in AWS Console**
1. **Create VPC**:
   - Use "VPC and More" → Choose CIDR (e.g., `192.168.0.0/16`).
   - AWS creates public/private subnets, route tables, and internet gateway.
2. **Launch EC2 Instances**:
   - Deploy instances in private subnets.
   - Assign Elastic IPs for public access (if needed).
3. **Configure Security Groups**:
   - Allow HTTP (80), HTTPS (443), or custom ports (e.g., 9000).
4. **Set Up ALB**:
   - Deploy in public subnet → Attach target group with private instances.
5. **Test Application**:
   - Install a simple app (e.g., Python HTTP server on port 8000).
   - Access via ALB DNS name.

---

### **9. Common Issues & Troubleshooting**
- **Elastic IP Limit**: Release unused IPs if quota is reached.
- **Misconfigured Target Groups**: Ensure target port matches application port.
- **Security Group Errors**: Verify inbound/outbound rules.
- **Route Table Issues**: Check routes for internet gateway (public subnets) and NAT gateway (private subnets).

---

### **10. Key Takeaways**
- **Isolation**: Use private subnets for sensitive resources.
- **Scalability**: Combine Auto Scaling Groups with ALBs for fault-tolerant apps.
- **Security**: Restrict access via security groups and Bastion Hosts.
- **Practice**: Replicate the architecture in your AWS account (modify CIDRs, add availability zones).

---

Let me know if you’d like diagrams or further details on any section!



# raw form the youtube

hello everyone my name is abishek and welcome back to my channel this video

0:05

aims at explaining the networking Concepts right from the fundamentals

0:11

even if you don't understand what exactly is an IP address you can go

0:16

ahead and watch this video this is a 3our long video I broke this video down

0:23

into five chapters and using each chapter you will learn networking con Cs

0:30

and towards the end of these five chapters you will Implement two networking related projects on AWS so

0:39

you will not only learn the networking fundamentals you will learn Advanced networking Concepts on AWS and you will

0:46

be able to implement a two architecture project as well as you will learn

0:51

Advanced networking Concepts such as security groups and NSS so what are you

0:56

waiting for

1:02

IP address IP address is a very simple

1:09

concept so IP address is used to generate or to provide a unique

1:19

address to a particular device that is connected to your network don't worry

1:25

I'll make it simple let's say you have a home

1:31

network there is a house and within this house there is a Wi-Fi or local network

1:38

that is created through a router and there are two people or two persons living in this house and each

1:45

person has two devices so overall there are four devices that are connected to

1:52

this local network or the Wi-Fi network now what happened was one of the

1:59

these devices was used to connect to a payments

2:05

website and made a payment you want to track which of these

2:13

devices was connected to this payment device and you want to block access in the future probably also uh there's a

2:20

kid in the house and you might want the device that is used by the kid to access

2:28

Instagram or you might want one person who is using this particular device to block access to

2:35

youtube.com now if each of these devices does not have a unique identification

2:42

number how can you do that right it's practically not possible and you will

2:48

end up doing all these devices access blocked to these

2:53

websites So to avoid that each of this devices should should have a unique

3:00

number and that unique identification is nothing but IP address it's not just

3:06

about blocking access probably you want to track the activities of a particular device or you want to monitor activities

3:13

of a particular device in all of these cases IP address comes into

3:18

handy now your next question should be abishek okay I understood IP address is a unique number that is given to device

3:26

let's say in my house if there are four devices each device gets a unique IP address but my next question is how does

3:33

this unique address look like so you said this is a unique address but how exactly does it look like so just like

3:41

human beings have names or houses have the house number

3:47

which are unique right of course human beings names are not unique but if you take about houses where you have a

3:54

unique identification number for each house so this particular representation

4:00

is done through IP V4 for devices there

4:05

is also a standard called IPv6 we'll talk about it later but for generating

4:11

unique address for each device the standard that is followed is

4:17

ipv4 and using ipv4 you can generate huge number of unique addresses now why

4:23

is that required you might say that abishek why do I need to follow this particular practice in my house Network

4:30

there are only four devices so I can simply uh say one device as 1.1 one

4:35

device as 1.2 third device as 2.1 and fourth device as 2.2 now each of them

4:41

got unique identification but what if there are 10 more devices that got added

4:47

or instead of this house let's take example of your

4:53

school or your University where there can be 10,000 or uh 20 ,000 devices that

5:01

are connected to a particular number so for each of these things to maintain a

5:07

proper standard see for your house if you maintain this particular standard so for your school and University you have

5:13

to create a different standard so to maintain a proper standard the one that is used is IP V4 so using IP V4 what you

5:22

will do is you will generate a unique identification number in the format such

5:28

as 172 2.6.3 do4 or 10.

5:35

1.2.4 so these are the IP addresses that is if you are using IP V4 standard for

5:42

your device you will see addresses in this particular format today you can go to your laptop and uh type the command

5:50

called if config or uh ip config and you will see this kind of representations

5:56

for your device now these things are called as IP addresses now let's try to

6:03

understand what is the significance that you get when you assign this kind of numbers so if you watch carefully for

6:09

each number there is a DOT right so here there is a DOT here there is a DOT here there is a DOT and

6:16

here there is a DOT what is the advantage so the advantage that you get is each of this number can vary from 0

6:25

to 255 so that means the number number of unique identifications that you generate

6:33

varies from 250 0 to 255 multiplied by 0 to 255 multiplied by 0 to 255 multiplied

6:42

by 0 to 255 so this is the number of unique IP

6:47

addresses that you can generate using IP V4 standard now your next question has to

6:54

be abishek why 255 why can't it be 0 to th000

7:00

so with ipv4 standard what you do is of

7:05

course this is a number that you see but for computer it does not understand

7:10

numbers it only understands bits so each of this number is one

7:18

byte or eight bits right so overall what exactly is an

7:26

IP address IP address is nothing but four bytes or 32

7:34

bits and each bite right four bytes each

7:39

by is separated by a DOT so how does an IP address would look

7:45

like IP addresses would look like 0 to 255 0 to 255 0 to

7:52

255 got it so why 255 that is because in computer language in pv4 standard you

8:01

have four bytes and one by is nothing but eight bits so four bytes is nothing

8:07

but 32 bits so overall each of this number that you can see can be varied

8:14

from 0 to 255 only so this is a standard you cannot change it and this standard

8:19

is called as ipv4 if I repeat one more time got it so how does IP addresses

8:26

look like so tomorrow if you create an E2 instance or a virtual machine in Azure what are the numbers that you

8:32

would usually see you will not see something like 600. 400 do 150 do10 this

8:40

will not be possible numbers that you would see can probably be 192 do 168

8:48

do 12.14 any number in all of these four

8:54

places that is separated by dot should be varied from 0 to 255 only

9:00

I know I'm repeating this multiple times but I want to make sure you all understand how the IP address is

9:06

represented it is only represented between 0 to 255 that is because in

9:11

computer language ipv4 represents IP addresses in four bytes and each of the

9:18

bite right each of the four bytes is nothing but eight bits right and how are this eight bits

9:26

represented if I have to write this IP address I have to write 32 hyphens for

9:31

example okay this is 1 2 3 4 5 6 7 8 this is one

9:38

bit 1 2 3 4 5 6 7 8 this is another bit

9:44

1 2 3 4 5 6 7 8 this is another bit 1 2

9:49

3 4 5 6 7 8 this is another bit so this is bite one bite two by three and bite

9:58

four so this is how IP addresses are represented now when I say 192 what

10:05

happens is how does computer understand this 192 computer understands this 192

10:12

as 1 1 0 0 0 0

10:17

0 now how did I write this particular thing that is very simple for each bite

10:25

sorry each bit that you see here you start with zero you call it as two 2^ 0 this is 2^ 1 this is 2^ 2 this is 2^ 3 2

10:34

power 4 2 power 5 2^ 6 and 2 power 7 because the first number is 192 2^ 7 +

10:41

2^ 6 that is 128 + 64 which comes to 192

10:47

this is how computer understands your IP address the reason why

10:53

maximum number that you can see here right if you want to see here even if you put one one 1 1 1 1

11:01

1 computer understands this as 2^ 0 + 2^ 1 2^ 2 2^ 3 4 5 6 and 7 which combinely

11:10

comes to 255 that's why maximum number in an IP

11:15

address can be 255 only if you see something like this 192

11:20

do 600 do 12. uh 254 this is not an IP

11:27

address because 600 is not possible now I hope it is very clear how IP address

11:33

is represented in the IP V4 format now if you want to try out few IP addresses you

11:40

can give it a try like your assignment can be convert this particular IP

11:46

address that is 172 probably uh

11:53

dot 32 dot 16 Dot fun convert this IP address

12:01

into the format that I have explained that is using the bits format how does

12:08

computer understand this particular IP address so to to do this what you'll simply do you will convert each bite

12:16

into eight hyphens you will write two hyphens and under two under this eight hyphens you can write 2 power 0 2 power

12:23

1 2^ 2 2^ 3 and convert this particular thing let's say if I have to write this

12:28

by default I know 32 is just 2 power 5 so this is first decimal second decimal

12:35

third fourth fifth sixth 7th right if I have something like this in the fifth

12:42

place I'll just put one and in all of the places I'll put zero right so this is how IP address is

12:50

converted in the decimal sorry hexad decimal or octed format it's octed format it's not hexa so this is how

12:57

number is converted into octed format and how computer understands the IP

13:02

address perfect now you will understand later point of time why I'm stressing so much on this particular representation

13:09

when we try to understand subnets and cadr this comes very very handy so I hope IP address part is clear

13:17

now let's move to the next concept that is

13:23

subnet abishek IP address is very clear where let's say if I have a home Network

13:29

or a school network and within the school network what I'll simply do is I

13:35

will say I just need some whenever I'm creating uh this particular Network

13:40

let's say I'm creating a VPC on AWS or I'm creating something on open stack

13:46

okay so I'm requesting the network provider let's say some 65,000 IP

13:51

addresses and I got 65,000 IP addresses I know the maximum people that

13:58

would connect to my network if it is a school network or office Network maximum

14:03

people that would convert connect to it is only 40K so I have just taken 25k IP

14:09

addresses as a space so I know okay this amount cannot be exceeded now I'll create a school Wi-Fi

14:16

or office Wi-Fi right let's call office Wi-Fi and we will call this uh office

14:23

Wi-Fi as free Wi-Fi because anyone can connect to it so any new employee that

14:29

is joining this company has started accessing this network right this person this person this person everyone has

14:36

started accessing this free network now what happened one day was

14:41

there is this employee who accessed a malicious website okay so this person

14:47

has accessed a malicious website that was written by a hacker and because this person has

14:53

accessed it hacker got access into this particular device and now if you

14:59

understand carefully all of these devices are connected to the same network that means hacker got access to

15:07

one device but because they are connected to the same network hacker can access all the

15:13

devices right so technically all the devices are

15:19

hacked now if this is your office Network there can be some sensitive

15:25

files or there can be payroll of the employees or there can be some financial data of

15:34

the company that are stored in some servers such as your bank details or any any such thing so hacker got access to

15:41

everything so your complete company Network got hacked now this should not

15:47

happen right of course this should never happen so there is a concept in networking which is called as

15:55

subnet what exactly is this concept of of subnet very simple subnet is basically

16:04

if you look at the name itself it says sub networking where if you take the same

16:11

example you can create a VPC in AWS or you can create a new network on your open stack with 65,000 IP addresses and

16:20

what you will simply do is you will say out of this 65 IP addresses okay or out

16:27

of this complete Network I will split it into two parts okay and

16:33

one network I will use only for finance related

16:38

things all the sensitive information of the company I will call this network as

16:43

secure network like sometimes if you go uh to a uh to your company or if you go

16:49

to your school network you will see some secure networks which you don't have access to and then you'll have some free

16:54

network or this network can have a password but this will be shared if you are an employee you just go to your

17:01

admin and you ask for a password and they will share this password with you so I'll call it as a free network and so

17:08

I will try to split this network into two parts and I will say Network one should be strictly used by Finance team

17:15

and network 2 can be used by anyone now even if the hacker one of these people

17:22

tries to access a malicious website and hacker gets access to it all the devices

17:28

in this particular Network are compromised but still all of these are sensitive this is important for the

17:33

company this concept is called as subnetting and this particular network

17:41

is called as subnet and this particular network is called as subnet why are they called as subnets because they are part

17:49

of a bigger Network and you have tried to split it so that's why you call it as

17:54

subnet right understood the advantage of creating a sub subnet the advantage of

18:00

creating a subnet is you get

18:08

security you have the privacy and you have a proper

18:14

isolation that's why subnets are used today you can go back and you can create

18:19

Subnet in your home Wi-Fi network as well right you can say only the uh heavy

18:26

usage appliances should use a particular subnet and other appliances should use a different subnet that's totally possible

18:32

you can create subnets in any kind of network right so this will give security privacy as well as

18:40

isolation now I'll come back to the concept of subnet uh addresses like uh

18:46

how subnet one gets IP addresses and how subnet 2 gets IP addresses but before

18:52

that just understand that there are two types of subnets one is private subnet

18:58

two is public subnet if you ever used the cloud provider you might have uh

19:04

heard about this terms called private and public subnet but what exactly are these so private subnet is some Network

19:13

that does not have access to Internet and public subnet is a subnet

19:20

that has access to Internet that's the only difference it's a very simple

19:25

difference right so private subnet has access to to uh does not have access to Internet and public subnet has access to

19:33

Internet how do you do that how can you enable access to Internet don't worry it's a very simple concept uh you know

19:41

if you already know about Cloud providers like AWS or Azure all that you need to do is you can go to this

19:47

particular subnets and you can attach route tables to this particular

19:54

subnet and destination of a particular route of this subnet you can provide as

19:59

an internet gateway and that will grant access to the internet even if you don't

20:05

know this particular concept you can ignore FNA because right now we are learning the

20:11

fundamentals of networking so just understand access to Internet public subnet no access to Internet private

20:18

subnet now let's go back to the concept that I was explaining right abishek you

20:24

mentioned in the last slide in a very simple way that you have a office

20:29

Network right and in the office Network you said you will simply

20:35

split finance

20:40

and free subnet where everyone can join you mentioned it as very simple way

20:46

where there are 65 IP addresses but how do you actually know how many IP

20:53

addresses this Finance uh subnet gets and how many IP addresses that this particular subnet net gets right overall

21:00

when you created this VPC in AWS you have requested for 655,000 IP addresses

21:07

what is VPC VPC is just nothing but a private Network so you have requested for a private network from AWS and you

21:13

said you need 65,000 IP addresses now you are saying you will create two subnets in the 65,000 IP addresses

21:21

one is finance and two is a free subnet

21:28

everyone can access but how will you say that this Finance subnet let's say it

21:34

only needs 2506 IP addresses and this need rest all IP addresses how will you

21:41

divide that it's very simple again wherever you are creating this subnet

21:47

right so if you're creating on private Cloud you have platforms like open stack

21:52

if you're creating on public Cloud providers like AWS or Azure in any of the cases when ever you are creating

21:59

this subnet you will be asked to provide a cidr

22:06

range this is also called as cider so this cider or cidr is a way of

22:14

explaining how many IP addresses are available in a particular

22:21

subnet right here I want to say my finance particular thing just needs 256

22:27

IP addresses and rest all can be given to this free subnet where anyone will access this particular Network now how

22:34

will you do cidr is the solution how does cidr work right so concept of cidr

22:41

is very very simple don't worry I'll explain it in a very simple way people usually get

22:48

uh find it difficult but the calculation is very simple so what you will do when

22:55

you create this particular subnet let's use AWS as an example so you will go to

23:00

AWS and you will say I want to create a subnet of course you need to go to the

23:06

VPC first right this is the VPC that you have initially created you'll go to this VPC inside the VPC you'll go to the

23:13

subnet and within the subnet what you will do I mean you are creating the subnet when you are creating you will be

23:20

asked for a cidr and when you want to create this cadr The Simple Solution is you say

23:31

17216 do 3.0 SL 24 so if you require 256 IP

23:40

addresses you will provide Hyun 24 now how did I do this right this should be

23:48

your million dollar question that is abishek how did you understand if I need

23:53

256 IP addresses I need to provide 176 do uh

23:59

16.30 sl24 or 192 16. 4.0 sl24 whatever is the IP

24:10

address of the VPC followed by sl24 how did you understand this it is very

24:15

simple again like I mentioned you pick up any IP address in the VPC range okay let's

24:22

say while creating VPC you have provided the range as 1726

24:29

do 0.0 pick up any IP address uh I mean you

24:34

said the VPC IP address name should be 172.16.0.0 to

24:42

17216 do 255.255 that is you have 65,000 IP

24:50

addresses now pick up any IP address so let's pick up 172 dot 16 do 3.4 let's

25:00

take this as an example and as I've told you represent this in the uh octet format that is 1 2 3 4 5 6 7 8 1 2 3 4 5

25:15

6 7 8 1 2 3 4 5 6 7 8 and finally 1 2 3

25:22

4 5 6 7 8 right so I'm representing this

25:28

particular IP address you can pick up any IP address I'm representing this particular IP address in the ipv4 by

25:35

standard where for each bite I have written the bits so overall if you

25:40

combine here there are eight bits here there are eight bits here

25:47

there are eight bits and here there are eight bits so if you combine all of

25:52

these things what is the output 32 bits right

25:58

and as I have mentioned you each of this particular thing can represent only

26:05

between 0 to 255 and I have mentioned I just need 256

26:10

IP addresses for the finance domain so only this last thing is enough right so

26:18

if I just provide 17216 3.0 to

26:23

17263 255 I got my required 256 IP address addresses so I don't need this

26:30

eight this eight this eight that means this eight can be common this eight can

26:37

be common this eight can be common only this thing will vary so what was my VPC

26:43

IP address bpc IP address was 172.16.0.0

26:50

to 255.255 right so all these three things

26:56

can be common for my device so this can be the host Network or the common things

27:02

and this has to vary so that's why I'm providing 17216 do3 do0

27:12

sl24 why 24 because I've cancelled 24 that is all this 24 bits can remain

27:19

static can remain same and only this eight bits have to vary so that's why I

27:24

said 0o followed by 24 don't worry I'll try to explain it one

27:31

more time if you did not understand so what was my VPC IP address or the

27:37

primary uh uh Network address 1721 16.

27:43

0.0 to 17216 do

27:50

255.255 this was my IP address range right now if I just need 256 IP

27:57

addresses I can pick up something like

28:03

17216 3.0 3.1 3.2 3.4 to

28:10

3255 right what are the number of IP addresses here 256 IP

28:16

addresses right so this solves my problem either I can pick 17216 3.0 to

28:24

3255 or 17216 4.0 to

28:30

4255 5.0 to 5255 anything solves my problem so what I can simply do is if I

28:38

need 256 IP addresses from this particular VPC range to provide to the

28:45

finance Network thing either I can use 17216 Dot

28:52

3.24 4.24 6.24 or even 2440

29:01

sl24 right I can provide any of these things as the cidr range for my

29:12

Subnet now let's make it even more simple let's say

29:19

right this is my office Network and here here same I

29:29

want a finance domain uh sorry Finance subnet and this is my free subnet and in

29:35

the finance subnet I just want two addresses nothing more than that I just

29:40

want two addresses and here right here I want to provide rest all addresses for

29:47

the devices that are getting connected so if I just need two addresses what I

29:53

can simply do is I can provide one

29:59

72.6 do 3.0 /31 why 31 so if you remember the uh

30:07

hyphens thing there are 32 hyphens right out of which I have cancelled 31 hyphens

30:14

so there is only one hyphen left and one value of a bit is nothing but it can be

30:20

either one or it can be zero so there are two IP addresses that are generated when you are calculating the cidr thing

30:28

right you should not calculate from 2^ 0 so if you have 32 and out of which 31

30:36

are stried out so there is only one that is left so always try to calculate 32

30:41

minus the number that is provided here if 31 is provided 32 minus 31 and 2

30:48

power the number that is left so here 2^ 1 is left so the answer is

30:53

two so similarly if we are taking 24 here 30 2 - 24 what is left 8 what is 2

31:03

8 256 IP addresses right so if you just want uh let's say 32 IP addresses what

31:11

you will do 32 minus 27 is 5 and 2^ 5 is

31:17

32 so I can simply provide here 27 so depending on this particular

31:23

calculation you will take the cidr range so if there is a IP address like this

31:29

right so if there is some IP address like 10 do sorry subnet with cidr range

31:35

like 10.0.0.0 sl8 what does that

31:42

mean 32 - 8 which is 24 so the number of

31:48

IP addresses is 2 power 24 which is almost like I think a very

31:54

huge number right 256 into 256 into 256 so that's a very huge number 2^ 24 so

32:02

whenever you are seeing something with sl8 which is nothing but it is also called as class a IP addresses and if

32:09

you are seeing something with sl6 which are called as Class B and you see sl24

32:15

which is called slash C here you just have 255 or sorry 256 IP addresses here

32:21

you have 256 into 256 and here you have 256 into 256 into 256

32:29

this is just a common representation don't worry most of the times you will see sl8 sl6 and

32:36

sl24 but along with that you might see sl27 you might see sl28 you might see

32:42

/29 as well whenever you are seeing something like this don't get panicked just simple thing that has to come to

32:49

your mind is 32 minus 27 which is five so number of IP addresses is 32 when you

32:55

see 29 32 - 2 9 which is three so number of IP addresses 2^ 3 which is 8 very

33:02

simple calculation and straightforward right so this is the thing that has to be in your back of

33:08

mind so next time when you create a VPC observe these things carefully or you

33:14

are on open stack you are on Azure anywhere whenever you are creating a new

33:20

network okay it will immediately ask you for the range of that particular Network

33:27

so let's say when I'm creating VPC it will initially ask me for a range and range I can provide like I told you

33:33

either 10 172 198 anything so I'll just say

33:39

19260 do0 sl16 that is I will have 65,000 IP address and now when I create

33:48

subnets inside this VPC depending on the requirement from the development team or depending on the

33:55

requirement from the team if they are asking 32 IP addresses only what I'll simply do I'll say

34:02

19216 do3 do3 or four anything here 3.0

34:09

sl27 this is what I'll give you and why I'm doing it very quickly because I'm very used to this particular calculation

34:16

so you can take few calculations as example in Internet you just search for cidr calculators you will get hundreds

34:23

of it and verify if your calculation is right so tomorrow if someone is asking

34:28

me that abishek this is my VPC and I want to create a new VPC uh sorry subnet

34:34

with 64 IP addresses I just want subnet with 64 IP addresses immediately what

34:40

I'll do is I'll just okay look at this IP address randomly I'll say 19216 whatever is my uh favorite number

34:47

so I'll just say 5.0 SL okay 64 this is 2^ 6 so 32 minus

34:55

28 sorry 26 is six so 2^ 6 is 64 so I'll

35:01

just say SL 26 right now why I'm only modifying this

35:06

particular number because they are asking below 256 So Below 266 I'll just

35:13

modify this particular thing this will be staed I'll just put this as zero if they're asking more than 256 let's say

35:19

someone is asking me 65,000 IP addresses so what I'll do 19216

35:26

do0 /6 this is the cadr range that I would provide I hope these examples made the

35:34

concept of cadr clear to you and what you will do is go to the cidr calculator

35:40

on internet and take random numbers like this and try to estimate what will be

35:46

the cidr number for it or what will be the number of IP addresses for it I can

35:51

give you some assignments what is the number of IP addresses for this

35:57

particular C IDR range okay let me write in a new one what are the number of IP addresses

36:04

for this particular cidr that you see 172 do 168

36:11

dot 3.0 sl30 and what is the cadr for

36:19

10.0.0 sl8 so in the comment section you can mention what will be the number of IP

36:26

addresses for both of this cidr range let me see how many of you can get this

36:32

right and before we move to the next topic there is one more thing that you have to remember most of the times when

36:39

we talk about private subnets you will see this numbers only 192 172 10 right why you would uh see

36:49

mostly this numbers is because these are the ones that are used for private

36:56

subnets okay so this just like a practice so even with Amazon or wherever

37:01

you are creating you would see these numbers as the starting ones when you create private subnets because these are

37:07

the numbers that are used for private subnets right so when you are creating a private subnet your cidr range cannot be

37:14

3.4. 5.6 or 5.0 SL 24 this cannot be

37:21

your thing because probably this public one of these public IP addresses has

37:27

been taken by some particular website for example 8.8.8.8

37:33

is a public IP address that is taken by google.com this is the DNS for the

37:39

google.com so if you keep this for your application there will be a conflict so

37:45

anytime private IP addresses should be starting with this only right so I hope this concept is

37:51

clear so what did we cover till now till now we covered the concept of

37:58

IP address we covered the concept of uh cidr we covered the concept of subnet

38:04

within subnet we try to cover what is private subnet we try to cover what is

38:10

public subnet as well these are the things that we have covered till now and

38:16

the next concept is about ports ports is again a very very simple concept you

38:22

don't have to get confused with it so whenever we provide IP addresses to connect to websites we provide some

38:29

ports right uh colon 80 colon 443 or we

38:34

say uh colon 36 or colon 808 what exactly are these things so basically to

38:42

bind an application so let's take a virtual machine okay on this virtual

38:47

machine I have deployed an application okay now on this virtual machine there can be number of applications okay

38:56

so what you you can do is for application you can provide a unique

39:01

Port again ports are also in a particular range only you cannot create port with number one lakh right so and

39:10

there are some ports that are taken also right for example um there is a specific

39:15

for port for MySQL better not to take that particular port or uh there can be

39:21

a uh port for Jenkins usually Jenkins starts on 8080 so better not to take that particular port so whenever you are

39:28

starting your application start with unique ports such as 9,000 right or you can take 9191 these

39:36

kind of ports right for example better not to take ports like 3306 which are taken by other kind of applications so

39:44

these things comes with practice and uh you know what if you go back to the

39:49

topic that we are discussing whenever you create application on a virtual machine to ask

39:57

access this application from the internet you need two things one is the IP address of this virtual machine of

40:04

course if it's a public IP address only you can access it from the internet if it's a private IP address you can access

40:10

only within your network let's say this is a public IP address so to access this

40:15

particular application if this application has Port 9191 so you will say 172 do 16 sorry public IP address

40:24

let's say 3. 4. 5. 8 colum 991 91 now if

40:31

this application has Port uh 5162 so you will access using 5162 so

40:38

what is a Port Port is a unique number for your application in an instance

40:44

there can be hundreds of application and using Port you can distinguish the request has to go to which particular

40:55

application let's quickly recap what we have learned as part of episode one in

41:02

episode one we learned about IP address what exactly is a subnet what are the

41:07

different types of subnets we learned about cidr how to read write and perform

41:14

calculations on cidr blocks if you are not aware of this networking Basics I'll

41:20

highly recommend you to watch episode one and the link to episode one is in the

41:25

description now let move towards the Whiteboard and start understanding the concept for today that is OSI

41:33

model we all interact with servers on a day-to-day basis let's take a simple

41:40

example let's say I open my laptop open one of my favorite browsers

41:46

and search for google.com within a fraction of seconds I receive a response back which is

41:53

nothing but Google homepage a HTML page basically but how does this

42:01

thing happen how is my request from my personal laptop sent over the internet

42:10

to one of these Google servers and how is the response received

42:17

back to my personal laptop what are the different components

42:23

that are involved and what are the different layers in which the Journey of data takes

42:32

place I'm calling it as journey of data because whatever you are trying to

42:38

request and whatever you are trying to send is all data so OSI

42:46

model is one of the popular models that helps you understand the Journey of

42:53

data across the internet what are the different layers that are involved and

42:58

OSI model explains this entire thing in seven

43:04

layers layer 7 to layer 1 sometimes it can be layer 1 to layer seven if you are

43:10

at the receiving end of the data but what exactly each of these layers do

43:16

what happens to my data in each of these layers when I say layer seven layer 6

43:22

layer five layer 4 layer 3 2 and 1 what what each of these layers

43:28

actually do how my data gets transformed in each of these layers and finally how

43:35

does it reach one of these Google servers let's try to understand the same thing in today's video we will use the

43:41

same example that is request to google.com and let's try to understand the complete workflow

43:48

here before we understand the Journey of data that is even before your browser

43:55

initiates a request to the Google server there are two things that happens that

44:00

is even before the OSI model comes into picture they

44:05

are number one is DNS resolution it is also good to understand

44:12

these Concepts before you understand the OSI model and what each and every layer does because this is also part of the

44:21

entire workflow that you are trying to learn the networking Concepts DNS resolution and the second

44:26

thing that happens is the TCP handshake now why these things happens

44:33

even before your request is initiated right even before the request starts or

44:39

even before the request is sent why these things happens because let's say you are searching for or you are

44:47

trying to make a request to https

44:54

www.google.com first of all what your r router that is your home router or your

44:59

browser tries to do is they will try to verify if

45:05

www.google.com is mapped to any particular IP address so there is a system called DNS

45:13

which is nothing but domain naming service you can understand it as a

45:18

simple database right just try to understand it as simple database where records are maintained right if I have

45:26

to explain this in a very simple way just try to understand that every router has this information which is records of

45:34

domain name mapping with IP address right so when you are saying

45:39

www.google.com in this domain naming service there is an IP address against

45:45

the google.com domain name now when you search for this www.google.com router verifies this

45:52

initially in the local cache right just like your laptop has a local cache or

45:58

you know you have uh the local memory similarly your router initially searches

46:05

this for in the uh local cache where previously if your router has made a

46:10

request to this particular website it might have maintained it record its records in the local cache if this

46:16

information is not available in the local gache then it goes to your internet service provider and verifies

46:23

this particular mapping if there is any mapping for the domain name in your internet service providers

46:29

DNS every internet service provider maintains a DNS where the complete records are available right so

46:36

google.com is usually mapped to the IP address 8.8.8.8 so if this mapping happens if this

46:44

domain that you're trying to reach is actually valid only then you will move to the second stage why this needs to be

46:52

performed because let's say I'm trying to access something like the

46:58

www. abishek vera.com now this is something that does not even

47:05

exist I did not create this domain I did not map it to particular IP address now

47:10

what's the point of you know starting with this entire data Journey sometimes

47:15

you might be uploading some 10gb file or you might be sending a huge amount of

47:20

data now if the DNS itself is not resolved what's the point of even

47:26

starting the dat Journey or what's the point of even initiating the request why should your browser or router initiate a

47:32

request right so this is the first step that happens DNS resolution if the DNS

47:38

resolution happens then comes your second stage which is nothing but

47:44

TCP handshake now what is the TCP handshake

47:50

again it's a very simple concept let's say this is your laptop and this is the

47:56

Google server now you are trying to send a

48:01

request to it you are ready to send a request but is the server that you're

48:07

trying to send is ready to accept your

48:13

request what if it denies your request even after sending this entire thing right what if you cannot make a

48:20

handshake with it hand check is nothing but you are just trying to say hi and it says hi I'm okay to accept your request

48:27

so there is a TCP handshake which is usually called as a three-way

48:33

handshake that gets performed even before your request initiation or even

48:38

before your OSI model comes into picture now how does this three-way handshake perform So when you say

48:46

www.google.com what your router or browser what they try to do is they

48:51

initially send a high to the server like let's say this is your laptop and this is your

48:58

server so initially router tries to send a high in networking terminology we call

49:03

it as sync and if this server is ready to accept if it says that okay I'm good

49:10

then it says hi which is in the networking

49:16

terminology sync acknowledged and

49:22

finally your laptop says acknowledged so so this happens in three steps that's

49:29

why we call it as a three-way handshake now you might ask me but abishek why can't it be very simple as you say sync

49:36

and it says sync techn knowled and it's done so it's a very uh detailed

49:41

explanation let's not go into it but if you are interested there is also something called two-way

49:48

handshake and there's also something called four-way handshake so if you are interested you can go through these

49:54

things you can read about difference between two way 3way and four-way handshake 3-way is the most popular and

50:01

which is mostly used so that's why uh I'm talking about the three-way handshake but you can also read about

50:07

these things so these are the two you can consider as prerequisites even before your data uh request initiation

50:15

takes place one is DNS resolution two is the TCP

50:21

handshake now that you understand both of these Concepts that is if DNS resolu ution is done and TCP hand check is also

50:29

done then your data initiation or your data request initiation starts now let's

50:37

try to understand that in terms of the OSI model now I hope you understood why did I explain this even before the OSI

50:44

model because when you are learning networking it's important to understand the end to endend part of

50:50

it now to start with OSI model let's take same example when you search

50:55

https www.g

51:02

google.com and I'm assuming DNS resolution is successful and TCP

51:08

handshake is successful so what happens after that is your are

51:13

browser right understand this carefully your browser initiates a HTTP or

51:22

https request to the server that is this

51:28

one right so you are searching for google.com in the browser so your

51:34

browser is initiating a request now it did not send the request but the initial process has started now when the initial

51:41

process has started it says use HTTP based request why because you have asked

51:48

for it let's say you're asking for FTP then your browser initiates a FTP based

51:54

request right so this particular stage is called as layer 7even which is the

52:00

initial stage and also called AS application

52:07

layer in this particular layer you can pass some headers right and you can also

52:14

provide information for the authentication or whatever is required but this happens in the layer

52:21

7 then comes like once you or browser has initiated the HTTP request right if

52:27

I go back to this particular thing once the request is initiated now what should be the next step if you think about it

52:34

the next step should be data encryption right because no one in the

52:43

entire process like from your laptop to the server data goes through multiple

52:48

routers I'll talk about it what are these routers but basically data first goes to your home router then it goes to

52:55

your internet service Provider from them it goes to a different router different router and finally it goes to the Google

53:02

server so if your data is encrypted then even if someone tries to hack your data

53:07

they don't understand what exactly it is and that's where we use https right so when you use https The

53:15

Next Step that has to happen after the HTTP request initiation

53:21

is data encryption which is also called as data formatting and this layer in OSI

53:28

model is called as layer six which is also called as presentation

53:35

layer now all of these layers are virtual just for you to understand so Osa model is trying to just explain you

53:42

that okay this is the first step that happens this is the second step that happens and once HTTP request is made

53:49

data is encrypted what should be the next step The Next Step should be your

53:54

browser should create a session what exactly this is very simple

54:01

let's say today you can go to facebook.com and probably search for

54:07

facebook.com/ abishek vamala 20 minutes later take a different tab or

54:14

probably take a different window as well and search for facebook.com/ Raju or

54:21

John your browser will not ask you to authenticate one more time initially

54:26

when you search for facebook.com/ abisheka it will ask you to log into Facebook but even after 20 minutes if

54:34

you search for slj orxy Z facebook.com does not ask you to authenticate because

54:41

there is a session that is maintained and this session is very very important because sometimes let's take example of

54:48

your banking transaction okay so initially you log to

54:54

your bank and probably you try to send someone uh some amount or you know you

54:59

try to make a transaction what if your session gets disconnected in one minute you just have

55:06

one minute you complete your transaction or you make a transaction and you want to make one more transaction right

55:11

unless you log out your bank server should not ask you to log in one more time and that happens only if your

55:18

browser creates a session we all use sessions on a day-to-day basis whether you're using Instagram Facebook or

55:25

anything there are session that are maintained so once the HTTP request is initiated second thing that happens is

55:32

encryption which is nothing but data formatting in the presentation layer and then a session is created with you and

55:40

the server so so that the server does not ask you to authenticate multiple times and this particular thing is

55:46

called as session layer and one interesting thing about

55:53

all these three layers right layer seven layer six and layer five is that all of

55:59

these three layers are maintained by your browser right so all these three

56:05

layers happen at your browser level what does that mean let's say you're using

56:11

Chrome or you're using Firefox or you're using any particular browser layer 7 layer six and layer five are taken care

56:18

by those browsers itself right your browser initiates a

56:24

request then your browser depending upon https and what kind of certificates that

56:29

you're providing it takes care of encryption and your browser only takes

56:35

care of session if you want an example just go to your browser go to your

56:40

browser settings and try to clear cash as well as cookies and then try to

56:46

authenticate with the facebook.com let's say you authenticated facebook.com 2

56:51

minutes later if you delete the cookies and cash it will ask you to authenticate one more time because you have deleted

56:58

the session session is basically stored in cookies and cash right so layer 7 six

57:05

and five are taken care by your browser itself we did not even come to the router

57:12

part if this is my laptop and this is my server laptop is connected to my home

57:20

router till now whatever I discussed happening is happening in the browser itself my request even did not reach

57:27

this particular browser if I'm talking about only layer 6 5 and four now the

57:33

next thing that happens is once the session is also created to

57:39

transmit the data right if we are taking this example some cases the data that

57:45

can transmitting can be of 10 GB also right probably you are trying to

57:51

upload a movie or you are trying to do something so if if you are trying to do

57:57

data in one at a time right if 10 GB if you're trying to upload at once or you know even simple things such as

58:04

requesting to google.com what usually happens is your data is

58:12

segmented right that is the data that you are trying to send or the data that

58:18

you are trying to receive is segmented and split into

58:24

parts so this particular particular thing is called as segmentation and this happens in layer four along with the

58:31

segmentation in this particular layer the protocol is also defined whether you

58:37

want to use TCP or UDP right so there are only two protocols which are like

58:43

these are the widely used TCP as well as UDP and in layer four once all of these

58:49

things happen data segmentation takes place and the particular protocol is

58:55

also identified in this layer how is the protocol identified mostly these are standardized let's say if you're using

59:01

HTTP the protocol is TCP if you're using something like DNS or something else the

59:07

protocol is UDP so these Protocols are standardized and whether I mean if you

59:13

are using HTTP PCP is the protocol that is used to transmit the data from here on that is the segments of data that got

59:22

split are transmitted using the TCP protocol and this layer is called as

59:28

transport layer now once the data segmentation is

59:34

also done now it's time to send the data and to send the data the first thing

59:39

that happens is the data that send is received by your router and what

59:48

your router does is router does two particular things one is to the

59:54

segmented data let's say say you want to travel from Delhi to

1:00:00

Mumbai here you know what is your destination right you know that you want to travel from Delhi to Mumbai and

1:00:07

second thing is what is the shortest path probably you can travel from T to

1:00:12

Mumbai in 20 different ways but you will only pick up the shortest path similarly

1:00:19

even in this example data from your personal laptop

1:00:24

to google.com that is from India to the US there will be multiple hops for your data that is there are multiple routers

1:00:32

that are involved probably your home router then your internet service provider from your internet service provider to etc etc XYZ and finally it

1:00:40

reaches the Google server so which routers or which hops should your data

1:00:46

take to reach the Google server in the fastest way to understand that what we

1:00:52

will do in the layer three is that we will add Source IP address as well as

1:00:59

destination IP address to each segment right and here once you add the source

1:01:05

IP address and the destination IP address we call this data as

1:01:11

packets right so packets have a clear information of how to travel which path

1:01:17

to take and who takes this decision this decision is taken by your router and

1:01:23

this layer is called as networking layer just try to take this example Delhi to

1:01:29

Mumbai if you have to travel you need to know what is your source and what is your destination if you want to send 100

1:01:35

people from Delhi to Mumbai to each and every person you will tell them that okay this is the path that you have to

1:01:40

take similarly in layer three your router comes into picture and your router tells each and every packet that

1:01:47

okay this is the source this is the destination IP address and you need to travel through these hops right and this

1:01:54

layer is called as Network layer then comes your Layer Two and in

1:02:01

Layer Two like okay now your router received the information but if you

1:02:07

understand it carefully usually these routers are connected to switches right

1:02:14

even if you look at your uh home network your router is connected to a ethernet port and from the ethernet port your

1:02:21

router is connected to the cables right so if you're talking about this e ports

1:02:26

or if you're talking about this switches right now data has to be sent some or

1:02:32

the other time to these ethernet uh ports or to the switches right so at

1:02:38

this point of time when the data has to be sent to the ethernet uh ports the data has to be transformed from the

1:02:44

packets to frames depending upon the medium that

1:02:51

you're using if you're using router the data is converted into packets then if

1:02:56

you're using these switches the data is converted into frames and in this frames

1:03:01

along with this IP address that you have provided Mac information is also added

1:03:08

which is nothing but Mac information tells these switches what are the other components within your network right so

1:03:15

here Mac components are also added now you might be thinking but why can't I use packets because your medium has

1:03:21

changed from router this request is being sent to switches and switches only

1:03:27

understands how data can be transmitted in the frames so this layer is called as

1:03:32

data link layer finally you have layer one that is

1:03:39

your data end of the day or your router switches end of the day are connected

1:03:46

to optical cables and guess what language this

1:03:51

optical cables understand the language these optical cable understands is

1:03:57

electronic signals right so here your data is transmitted into electronic signals and

1:04:04

using optical cables data is transmitted very fast right and this is how your data is transform

1:04:13

right if if I have to explain this in one single slide one more time you have layer seven layer 6 layer five layer 4 3

1:04:23

2 and 1 so if you take take your personal laptop and this is your Google

1:04:30

server for example now when you initiate a request to

1:04:36

www.google.com so initially what your browser does starts with layer 7even I mean the process starts with layer 7

1:04:44

where first of all it defines what is the type of request so mostly we use

1:04:49

HTTP type request so HTTP or https now once it identifies that okay I have to

1:04:55

initiate a HTTP based request second thing that it does in the layer six is

1:05:00

encrypt the data once the data is also encrypted the

1:05:05

next thing that happens is create a session with the server now once the session is created

1:05:11

with the server because data has to be transmitted within fraction of seconds

1:05:17

segmentation of data is important and that happens in layer four

1:05:23

and here along with the segmentation the protocol is also identified depending upon the request that you are making if

1:05:29

it is HTTP TCP request is most widely used once the segmentation is also done

1:05:35

right now the data is divided into small parts after that data reaches your

1:05:42

routers and within the routers the path to transmit the data is

1:05:49

identified because in this layer we add the IP address for each and every segment and here we call them as

1:05:57

packets once packets are also created then the next thing is from the

1:06:03

routers you will move towards the switches and here data is converted into

1:06:08

frames where you add the MAC address of each and every component that is there

1:06:14

so that you know like you add the MAC address so that within the network this switch can understand what are the other

1:06:20

components to transmit the data and finally layer one is a physical layer

1:06:26

where these switches are connected to optical cables and here the data is converted to electric signals or

1:06:32

electronic whatever you would like to call right so when you initiated the

1:06:38

request from layer seven layer 6 5 4 3 2 1 what happened from your laptop it went

1:06:45

to your router from router it went to switch and it connected to the cable now it goes through multiple hops over the

1:06:53

internet and finally it will reach one of these Google servers right from layer

1:06:58

one which is let's say this is one of the cables then it is connected to other routers other switch and again cable and

1:07:06

this entire thing happens and the data is transmitted and finally it reaches one of these Google servers Now

1:07:12

understand carefully what happens here when this data received by one of these Google

1:07:18

servers again the OSI model comes into picture where initially data is received

1:07:24

by one of these Google physical servers so one of these Google physical servers is connected to a optical cable so L1

1:07:33

from there it will go to one of the switch boards then it identifies which router to use from there the data which

1:07:41

you have been using as uh packets like whether it's a TCP or UDP right let's

1:07:47

say we are using the TCP protocol so here the TCP data is taken into place from there once you have the TCP data

1:07:55

here then session is validated after that de encryption takes

1:08:01

place from there it will go to one of the Google's applications and this

1:08:07

Google application will say hey okay this is your request so let me give you a HTML page as a response P here this

1:08:15

application is a microservice or any particular monolith application which has the source code and it understands

1:08:22

depending upon your request okay I want to generate a HTML p now again this HTML page is sent back to

1:08:29

your personal laptop and same thing happens right before it reaches your personal laptop your router is connected

1:08:36

to a physical cable so it has to move from L1 L2 L3 L4 5 6 and finally reach

1:08:42

your particular laptop so this is the entire OSI model and you know basically

1:08:49

when you are sending the request L7 to L1 data is transmitted right data is

1:08:56

transmitted through L7 to L1 layers now when you are at the receiving end data

1:09:02

is received from layer one to layer seven so these are all the these are not the physical layers right these are just

1:09:09

a way of explanation of OSI model for you to understand the data transmission

1:09:15

in a better way OSI model explains it in this particular P of course Osa model is

1:09:23

not the latest model there are models like TCP IP

1:09:28

model right which is again based on OSI model but the thing is in TCP IP model

1:09:35

L7 L6 L5 is combined because you know more or less these are our performed by

1:09:42

the same component that is your browser so L7 L6 and L5 are combined and called

1:09:47

as a single layer in the TCP IP model so why people usually prefer OSI model

1:09:54

because this is a standard and if you understand this standard you typically understand the entire

1:10:01

transmission of data whether it's TCP IP model or any new model they are all based on the OSI model right so don't

1:10:08

get confused if you see TCP IP model it's exactly the same only difference is L7 L6 and L5 are combined

1:10:16

and usually they are called as one single layer in the tcpip moduel right

1:10:21

so this is the video for today and how this I model is helpful for the devops

1:10:27

engineers I will tell you that it is not completely must have thing right

1:10:35

this knowledge is kind of a good to have thing I'll tell you the reason why

1:10:40

because these days all of these things is standardized and this entire thing is

1:10:46

completely automated like you won't see anyone using wi Shack these days unless you are working in the core networking

1:10:52

company and probably if you're dealing with the layer three layer two or you know if you are involved in any sort of

1:10:58

uh networking companies only then you see people using these kind of things right the wire Shar or any tools to

1:11:04

decrypt the packets understand these things but if you have a high level knowledge of OSI model that is more than

1:11:10

enough you don't have to dig dive and try to understand what are the different protocols in layer three right you don't

1:11:16

have to understand what are the different types of uh techniques that are available in layer 2 because there

1:11:22

are this is a ocean and whatever I taught in this particular video it's

1:11:28

more than enough if you are trying to understand networking as a devops engineer so today's class let's learn

1:11:34

what is virtual private Cloud let's understand why you need virtual private Cloud what are the different components

1:11:41

of virtual private cloud and also how do they interact with each other and

1:11:47

finally there is a fear amongst a lot of people that virtual private cloud is a

1:11:52

difficult topic you might say that yes abishek we have that concern because VPC

1:11:58

involves a lot of networking there are multiple components and it's difficult to understand why and how each of these

1:12:04

component is interacting what purpose are they solving so don't worry if you have any such fear or even if you are

1:12:10

completely new to networking and VPC after today's video you along with me

1:12:15

will say that virtual private cloud is an easy concept and I understand this concept end to end so we will do

1:12:23

practicals as well but practical will not be of today's video because it is very very important to have strong

1:12:30

foundational knowledge on VPC so today's video I will try to add that

1:12:35

foundational knowledge on VPC for you and in tomorrow's video we will Deep dive into slightly more complicated

1:12:41

topic of uh VPC that is related to security and in day after video we will try to do a practical video deploy

1:12:48

application inside VPC and explore the complete flow of VPC so that will be the entire thing but how will I make this

1:12:55

concept easy for you you might ask me what I'll do is I will take a real life scenario okay so we will take a very

1:13:02

much real life scenario that um all of us understand and we will use the same real life scenario to understand the

1:13:09

concept of VPC so this real life scenario has nothing to do with AWS but still I will correlate and make this

1:13:15

concept very very easy for you in the lines of AWS so let's quickly start the video and

1:13:21

understand virtual private Cloud so to start with the example the scenario that I was talking about let's say that there

1:13:29

is a huge land okay so let's call this as a village okay so we have a village

1:13:35

and there are lot of people in this Village but there are specific set of lazy people in this Village okay so

1:13:42

these lazy people are lazy enough that they can't construct their own houses

1:13:48

why they can't construct their own houses because they don't want to maintain their houses they don't want to manage their houses and also so they

1:13:55

don't want to go through all the construction process and everything related to their houses so these people

1:14:01

they are actually looking for some people and at the same time there is one

1:14:06

wise person in this Village okay let's say that this wise person is called ABC

1:14:12

so there is a wise person called ABC in the village what he has done is he saw

1:14:17

this opportunity of lazy people and he said that okay let me grab this opportunity and make money out of it so

1:14:24

this wise person ABC what he has done is he went to this Village and he acquired

1:14:29

a huge land in this Village okay so he acquired this entire land in this Village and he said that okay hey lazy

1:14:37

people what I'm going to do is I'm going to construct the houses for you but for that you have to send me a request with

1:14:44

your entire requirements like what are the resources that you require in this house what is the capacity uh that you

1:14:49

require in this house and fill me all the details and give it to me and in return I'll give you house and I'll take

1:14:56

money from you right so this person has started the process and what this uh ABC

1:15:03

or the vice person has done is he has constructed this house in the land that he has acquired so he purchased this

1:15:09

entire land and he uh constructed a house and he said that I'll maintain this house for you so this person felt

1:15:15

happy for it and then seeing this other person also approach and he has constructed house for the other person

1:15:20

as well so in future there is one more person and he has constructed house for that one more person so it is going well

1:15:27

and all of these people their problem is solved that they don't want to maintain the entire construction and maintenance

1:15:34

this person the vice person ABC is taking care of it and they are all happy but there are other bunch of people what

1:15:41

they have done is they saw this they were happy about it but they realized that these bunch of people they have

1:15:46

realized that there is some kind of security issue here there is some kind of privacy Beach that means for the

1:15:52

purpose of uh saving a lot of money money what this person has done is he has constructed the houses but they are

1:15:58

very nearby and there is some kind of security bridge that anyone who access this house can has can hack hack or

1:16:05

access the other house and can also access the other house so that way there is some kind of security bridge that is

1:16:11

happening here so these people said that okay we are also looking for houses from you but we want it in a much better way

1:16:17

not in this way where if one of these houses compromised that the other houses are also compromised so this person to

1:16:24

not to lose the business and you know uh because he want to construct more and more uh these things what he said is

1:16:30

okay give me some time and he came back with A New Concept called secure land

1:16:36

okay so what he said is okay I have this entire property but if you come as a group where if you want uh a group

1:16:43

housing or something what I can do is I can build a secure property for you

1:16:49

people so inside this entire land what this person ABC has done is he has buil

1:16:55

a secure property for these people and this security uh secure property what he said is only people who have access to

1:17:03

the secure property like he said that I'll construct a gate here which will act as a Gateway right so this gate will

1:17:08

act as a Gateway and only this people or the people's relatives or people who

1:17:13

know these people only can enter this secure property right so what happens is

1:17:19

let's say someone wants to meet this person okay and this person has one property here the other person this

1:17:25

person has one property here and this person has a property here right so now

1:17:31

there is one of the relatives of this person right let's call this person as a now the relative of a wants to meet this

1:17:38

person so what the secure property does is this person can definitely meet him

1:17:44

but he first has to pass through this gate so there can be a security guard or someone who will guard this property and

1:17:51

once he enters this so this is a property that all of these people own right so the secure property this is all

1:17:57

the public thing where everybody owns this but if this person this XY Z person

1:18:02

let's say he wants to go and meet this person called a now he need to understand how to go to this property

1:18:08

right now because I'm drawing this picture you know how to go from here to here but eventually to go from here to

1:18:14

here there has to be another guide here so this guide basically explains okay uh move from here to here and finally

1:18:21

you'll reach the person a again once you reach this person a there will be another security guard or there will be

1:18:27

some kind of person here who will validate okay is this the right person you entered the Gateway you moved into

1:18:34

the secure property but again do you want to meet a do you want to meet B do you want to meet C so if you are a valid

1:18:40

person who wants to meet a then only I will accept your request to meet the person a so this way what this ABC the

1:18:49

wise person has done is he has solved the problem of security breach and solve the problem of security and now

1:18:56

everybody is enjoying the secure property looking at these people there are another bunch of people who came to

1:19:02

him and he has built another secure property another secure property another secure property this way he started

1:19:08

making his business now why did I explain this story to you people you might be thinking has abishek gone mad

1:19:14

why is he saying all of these things and how is how is it going to be related to

1:19:20

AWS okay now let's try to relate the same thing to AWS in in the last class I

1:19:25

showed you how to create an easy2 instance how to deploy an application and how to access that application right

1:19:31

so now let's go to the same scenario where there is this big region okay so let's

1:19:40

call this region as Mumbai or Ohio or whatever you would like to what happened

1:19:45

was there are people okay so there are companies let's say this company as

1:19:50

example.com this company as example 1.com then there is another company called example 2.com so these people

1:19:58

initially they were maintaining their own data centers but it was becoming too hectic for them so they said that okay

1:20:04

uh if there is someone who is going to help us with this data center we will offboard that to them or there is a new

1:20:10

startup now they said that okay we can't affort to build a new data center we can't affort to maintain it now we are

1:20:15

also looking for someone so AWS saw this opportunity right so in this case who is

1:20:21

the vice person AWS is the vice person what aw said is hey okay what I can do

1:20:27

is inside this region let's say there is region called Mumbai or Ohio or throughout the world what AWS did is AWS

1:20:34

started building their own data centers in the previous example that

1:20:39

person has acquired a lot of land right the vice person here what AWS did is AWS started purchasing or building their own

1:20:46

data center so AWS built this entire data center in Mumbai region for example or Ohio region or Frank uh Frankfurt

1:20:53

anywhere AWS started building their own data centers now what AWS said

1:20:59

is hey lazy companies or hey startup hey example one example two example three so

1:21:05

we can host your applications inside our data centers or you can request us

1:21:11

saying that hey uh I want one virtual machine I want 10 virtual machines I want 20 virtual machines and we will

1:21:16

take your request you give me money and I will create the instances for you so this was going by uh I mean this exact

1:21:23

same thing what we did uh previously and this was going very fine where example.com 1 they requested and what

1:21:30

AWS did so this is the story of 2013 2014 okay so during this time what AWS

1:21:37

did is if example.com is requesting it uh 10 ec2 instances so it went to the

1:21:43

data center in region Mumbai or whichever region it requested and it created 10 E2 instances okay so again

1:21:51

inside the data centers there will be multiple physical servers let's say this is a phys phical server and example.com

1:21:56

requested 2 E2 instances so it gave 2 E2 instances inside This Server let's call it server

1:22:02

one so then there is example two and what AWS did is it created again request

1:22:09

of example two in the server one only then there is uh example three and what AWS did is again it went to here and it

1:22:17

created server let's say it requested for one server it created in server one only here what I'm talking about virtual

1:22:22

machine one virtu two virtual machine Mach and two virtual machines so this is fine all of this problem is solved and

1:22:29

AWS is also giving them virtual machines inside the data center inside data center like I told you there can be

1:22:34

multiple servers for one server AWS choose one server and soled all of their problem but what happened is let's say

1:22:41

so this is a uh Theory what happened what can happen is that in this case so if there is a hacker and let's say this

1:22:48

is startup okay let's say this is startup if there is a hacker here because they were not maintaining proper

1:22:53

security he entered into this server he tried to make some false request to this application inside uh the physical

1:23:00

virtual machine and he was able to hack this particular server now because all

1:23:05

of them are in the same physical server inside the AWS data center hacker can easily come here hacker can easily come

1:23:12

here hacker can easily come here and he can hack the entire thing right so just

1:23:18

because of example three or just because of startup what happened is all of the servers are hacked because AWS was

1:23:25

creating entire instances or AWS was creating all the things in same things or it can also create in different

1:23:31

things but what happens if it creates in the same server right so till 2013 2014

1:23:37

this was happening so to solve this problem like I told you even in the previous example to solve the security

1:23:42

breach what AWS said is okay we will come up with a new Concept in that case it was Secure community in AWS terms it

1:23:49

is called as VPC right so what AWS said Is We will build a VPC for you or in the other way

1:23:58

around like in the previous case the Builder will build the entire secur community and give it to you but in the

1:24:03

AWS terms AWS will give you documentation AWS will give you examples who is the one who builds this entire

1:24:09

VPC and maintains the VPC it is devops or AWS devops Engineers okay so AWS

1:24:15

devops engineer looking at the documentation of AWS they will go to the AWS portal and they will request for the

1:24:21

VPC and they will configure everything inside the VPC now let's see what is inside the VPC

1:24:27

using the same example itself in the same example what I told you I'll try to convert that into AWS example right so

1:24:34

this is AWS data center again so there is uh let's take

1:24:40

example of one company here so let's say there is TCS and inside TCS there is uh

1:24:46

one project and this project is owned by a devops engineer so what this devops

1:24:52

engineer does is he will go to AWS and let's say there is a region called Mumbai he'll go to AWS and say hey AWS

1:25:00

give me a VPC now how do you define the size of a VPC in the previous case because it was

1:25:06

a land you can Define the size of land in some Acres or in some hectars or something but how do you define the size

1:25:12

of a VPC so for defining the size of VPC there is something called as IP address

1:25:19

range okay so what is this IP address range so IP address range whenever a

1:25:24

devops engineer creates a VPC what AWS asks is what is the IP address range so

1:25:30

if you say for example the IP address range is 172.16.0.0

1:25:36

sl16 that means AWS will allocate 255 into 255 now don't worry about this

1:25:43

calculation what is abish calculating and what is happening here you will understand this in future for Now understand that AWS will give you 6536

1:25:51

IP addresses okay so how do you define the size of a VPC you can Define the size of VPC using the IP address ranges

1:25:58

so devops engineer will say hey for our project in TCS I need this particular IP

1:26:04

address range for the VPC which means I need 6536 IP addresses so technically

1:26:10

you can assign these IP addresses to 6536 applications instances whatever you

1:26:16

would like to call to right so this much IP addresses can be allocated using the VPC but what devops engineer will do is

1:26:23

PC can be one project but inside the project there will be multiple sub

1:26:29

projects right so there can be one project related to payments one project related to transactions one project

1:26:34

related to XYZ so what this devops engineer will do is for One internal

1:26:39

project let's say there is one internal project here there is one internal project here one internal project here

1:26:45

so this devops engineer will split the IP address ranges right so what he will say is okay for this particular uh sub

1:26:53

project this particular sub project and this particular sub projects divide the IP addresses so here he'll say

1:27:00

17216 1.024 2.0 sl24 3.04 so this particular thing will get

1:27:07

some 255 IP addresses this particular thing will get some 255 and this particular will get some 255 okay now

1:27:13

again don't worry about the calculation how abishek is calculating and all that is irrelevant to this discussion for now

1:27:19

just understand that for TCS there will be internal projects and depending upon the internal projects this devops

1:27:25

engineer will split saying that okay even the VPC might have one IP address

1:27:31

range but I will split them to three different IP address ranges for three projects and this particular concept is

1:27:37

called subnet okay the name itself says that it is sub Network right so it is subnet

1:27:44

what you are doing here the VPC is created with a particular IP address range you are splitting the IP address

1:27:51

for your sub projects devops engineer is splitting this for the sub projects calling it subnet and inside this sub

1:27:57

project let's say this sub project has only one application so you deploy an E2 instance and you deploy that application

1:28:03

here there can be two instances here can be three instances depending upon the sub project it is up to the sub project

1:28:09

development leads how many applications do they want to deploy inside a subnet they will they will contact devops

1:28:15

engineer as well but for now let's say this is the configuration so there is sub project sub project sub project one

1:28:21

application two application three applications so now what devops engineer will do after this once he creates the

1:28:26

subnet and all now devops engineer like we discussed in the previous example he will create a Gateway right why is this

1:28:34

Gateway required if there is no Gateway nobody can access this particular uh uh

1:28:39

VPC right so without a gate nobody can enter the Gated Community or the secure Community similarly without this gate

1:28:46

nobody can access or enter to this entire uh property itself let's say there is a relative uh in previous case

1:28:53

here let's say there is a customer who wants to access application in this ec2 instance there is customer who wants to

1:28:58

access application in this ec2 instance so he has to definitely come through this uh uh Gateway itself to the VPC so

1:29:05

firstly there will be a Gateway and what this Gateway will do is Gateway is just like a pass for someone to enter to this

1:29:13

VPC now once they enter what will happen like I told you this is one subnet this is one subnet and this is one subnet but

1:29:20

this is all a free space right inside the VP see these are the subnets which

1:29:26

we call as private subnets because they don't have access to Internet but then there is something called as public

1:29:32

subnet right so what is public subnet public subnet is the one that a user

1:29:37

first access inside the VPC so how does public subnet connect to the user or how does public subnet connect to the

1:29:44

internet basically is using the internet gateway so this particular thing this

1:29:49

particular Gateway here we call it as internal Gateway sorry internet gateway through the internet gateway there is a

1:29:55

public subnet from which the user enters to this okay once the user enters

1:30:02

basically there let's say there is a load balancer here okay what is load balancer load balancer is the one uh

1:30:08

that forwards the request depending up the load for example there is this application and the user from the

1:30:14

internet want to access this application now how will the request from this public subnet from the load balancer

1:30:20

goes to this application right so there has to be a particular path so for this public subnet what you

1:30:28

will do is you will create something called as a router in AWS terminology you will call it as a route table so you

1:30:34

will create a route table this route table defines how should application or

1:30:39

how should the request go to the application right so you have a load balancer load balancer can send the

1:30:45

request depending upon the target group we will discuss about load balancer in detail later but for now just understand

1:30:50

that there is a internet gateway once from the internet gate there is a public subnet from the sub subnet request goes

1:30:57

to the load balancer load balancer is assigned with the public subnet and for the load balancer what you will do is

1:31:03

you will create a Target group of this application okay so now what happens is

1:31:08

if the request from the load balancer has to go to the subnet load balancer does not know how to go to this

1:31:14

particular thing so what you'll do is for the subnet you will create something called as a route table okay so this

1:31:21

route table defines and tells the load balancer okay go through this particular part so that you'll reach me and once

1:31:28

the request from internet now reached here but still at the E2 instance like I told you in the previous example there

1:31:34

can be a security guard here who can block your request similarly for the E2 instance there can be something called

1:31:40

as Security Group okay so there will be something called as Security Group where this

1:31:47

Security Group can say okay so on which Port do you want uh do you want to access me or from which which IP address

1:31:54

are you coming from what is your IP address then the security group can say okay only if it is coming from this

1:32:00

particular IP address in the Internet only if you're trying to access me on a particular IP address then I will allow

1:32:06

the access and that way you will finally reach your application okay so what is happening on the whole if someone from

1:32:13

the Internet is trying to access an application in the private subnet here first of all he has to the request has

1:32:20

to go through the internet gateway once it reach the internet gateway it will go to the public Subnet in the VPC right

1:32:27

what is public subnet it's a common subnet across the VPC once it goes to the public subnet there is a load

1:32:33

balancer here right what is load balancer doing load balancer is attached with the public subnet and load balancer

1:32:40

has a Target group so when request goes to the load balancer load balancer is the one that takes the request to the

1:32:47

private subnet and to the application right so to reach I mean for the load balancer to understand how to go go to

1:32:54

this application the subnet is here but what is the route path for the subnet so

1:33:00

there is something called as route table right so route table is the one which defines the path once the path is

1:33:05

defined it can go here but still there is something that can block that is called as a security group once the

1:33:12

security group also allows you your request is finally reached now let's try to write these things okay so that you

1:33:18

understand what exactly has happened first of all from the internet right so let's say this is

1:33:24

internet there is person in the internet here he is using a laptop and what he is trying to do is he's trying to let's say

1:33:31

access an application which is called for example example.com or okay let's leave the uh a

1:33:40

domain and let's call he is trying to reach uh something

1:33:46

called 172 do 16. 3.1 SL something okay

1:33:53

in General he'll not use the private IP address he will use the load balancer IP address to reach there but for your

1:33:59

understanding let's say he's trying to reach one application in the private submit okay so to reach what I have told you first is there is a devops engineer

1:34:06

who has created a VPC right inside the VPC what is there here there is

1:34:12

basically an internet gateway okay so let's say this is the internet gateway and then inside this VPC right if you

1:34:21

call this entire thing as VPC which has has a basic IP address block or the IP

1:34:26

address range this entire thing has a IP address range inside this what he has done is for project a he has created a

1:34:32

subnet Project G Project B has created a subnet and project C has created a subnet again what is a subnet this is

1:34:39

the entire IP address range so for each project you can divide the IP address range if this IP address range is

1:34:46

172.16.0.0 sl16 this can be 17216

1:34:52

1.0 24 2.04 3.02 24 that way you can

1:34:58

split now let's say there is one application inside the subnet one easy to instance and end goal is to reach

1:35:05

from here from the internet which is completely outside of VPC you want to reach from here to here okay so what is

1:35:12

the process firstly it will come here it will see that there is an internet gateway here it will pass through the

1:35:19

internet gateway and once you pass through the internet gateway like I told you there is a public subnet here

1:35:24

okay what is public subnet public subnet is the one that can be accessed to the public outside the VPC but they have to

1:35:31

pass through the uh internet gateway once they pass through the internet gateway in the public subnet there is

1:35:36

something called as load balancer in AWS world you will call it as elastic load

1:35:42

balancer okay so you have elastic load balancer it can be application load balancer Network load balancer we'll

1:35:47

talk about that later now you have an elastic load balancer here so what this elastic load balancer does is your

1:35:53

request Quest from the external world has reached the elastic load balancer from the elastic load balancer now it

1:35:59

has to go here but how will the load balancer understand that it has to go here this is a private subnet right but

1:36:07

for elastic load balancer or for the load balancer to send your request to the private subnet there has to be a

1:36:12

proper route okay so who will Define this route there is like I told you something

1:36:18

called as a route table okay okay now you need to have a

1:36:25

route table and using this particular path your request has to flow right so

1:36:30

what you will do is for elastic load balancer one thing you will attach the private subnet and you will attach the

1:36:36

target group okay so what is Target group you will understand when you learn more about the elastic load balancer but

1:36:42

for the load balancer to understand request has to go here firstly you need to create something called as Target

1:36:47

group and you have to assign this instance to the Target group and at the same time the subnet should have the

1:36:53

route so that the traffic is Flowing here okay so and here like I told you

1:36:58

there is a Security Group which can block the request or accept the request so these are the entire flow what are the components that we talked till now

1:37:05

one is internet gateway then we talked about public

1:37:10

subnet then we talked about load

1:37:16

balancer then we talked about route tables which are basically routers in uh

1:37:22

other terminology so routers are the one which forwards a request even from your home laptop if you're trying to access a

1:37:29

particular website there are routers and there are multiple hops using multiple hops different routers connect to each

1:37:35

other and forward your request and finally your request goes to a particular server even in AWS that's the

1:37:40

same but you call it as route table here so you have route table that you understood then you understood about

1:37:47

security groups right so these are the critical components of VPC additionally there are

1:37:54

few things which I'll cover very quickly but in future class that is in tomorrow's class we will talk about them

1:37:59

in detail one is like let's say you have one Security Group here you have another Security Group here you have another

1:38:06

Security Group here okay but within a subnet okay if you want to define the

1:38:11

same Security Group to multiple applications multiple E2 instances or you want to repeat the security group

1:38:17

configuration there is something called as NSS okay NSS are basically automation

1:38:23

for security groups where instead of defining the same thing again and again you can Define that as part of NSS okay

1:38:30

and finally there is one more concept that I will explain and I'll conclude today's class that is the concept of NAD

1:38:38

gateways now what is n Gateway I'll try to explain in this scenario itself instead of directly explaining you the

1:38:45

example and see uh the concept of NAD Gateway now the request from here has reached this application which is well

1:38:51

and good but now what if the request I mean sorry now what if

1:38:57

this particular application here tries to access something from the internet okay now till now we talked about this

1:39:03

workflow right workflow flowing from here to here but what if the application tries to access something from the

1:39:10

internet from google.com let's say this application wants to download a package which is quite common right U you might

1:39:16

want to download something to your server so there is a server here and you want to download something from internet

1:39:22

so what is a problem here you might say that okay again it can use the public subnet and it can flow and it can access

1:39:28

it the only problem is that okay uh okay the request can flow how the request will flow is a different challenge we

1:39:34

will discuss that but the only thing is when someone tries to access some resource from the internet one of the

1:39:41

critical things that you have to remember is if this is in the private subnet that means that there is some

1:39:46

sort of security here so it is a bad practice to expose your applications or

1:39:52

to expose your servers IP address to the internet okay so whoever is receiving

1:39:57

this in the internet so let's say you are trying to download something from xyz.com okay so xyz.com should not know

1:40:05

the IP address of your uh server or it should not know the IP address of your application anything it should not

1:40:12

know uh sorry it should not know the IP address of your private subnets applications or the servers easy to

1:40:22

instances it is going to be both Theory and practical and theoretically practically

1:40:29

we will understand one of the most important concepts of VPC which adds additional security that is security

1:40:37

groups as well as n right so this is what we are going to

1:40:43

learn in detail today both theoretically and practically so please watch the video till the end so that even you can

1:40:50

perform this act uh activity like even you can take this as an assessment and you can try this at your

1:40:57

end by watching this entire video got it so now without wasting any time let's

1:41:02

quickly see what is this Security Group what is this nccl and what exactly they

1:41:08

are going to do within the VPC so if we go back uh to yesterday's video very quickly what I told you is if

1:41:16

you consider this as VPC right let's say this is a virtual private cloud and I

1:41:21

have explained that okay in the world of virtual private Cloud the very first thing what you will do this is a real

1:41:27

life example right how organizations use VPC as of today this is the same thing

1:41:32

so initially you will have something called as an internet gateway right so

1:41:38

usually what happens is within the VPC there will be a public subnet so and

1:41:44

there will be private subnet right so what is a subnet basically I explained in the last class when you create VPC

1:41:51

you will Define what should be the I i p range or what should be the IP address range of your VPC it is just in the

1:41:58

similar terms you can consider how many IP addresses you want inside this VPC

1:42:04

right so usually uh let's say that when I create VPC if I say that the IP range has to be 10. 1.0.0 hyph 16 then that

1:42:14

technically means you will have within the VPC 6536 IP addresses okay so this

1:42:20

defines the size of VPC how big a VPC or how small a VPC so when you have 6536

1:42:26

VPC uh IP addresses that means technically you can use

1:42:32

6536 applications components within this VPC okay so let's not go into the detail

1:42:37

of this but just understand that when you create VPC then you define an IP address range which defines what should

1:42:43

be the size of your VPC now within that you can divide subnets so subnets are basically like within VPC if you have

1:42:50

multiple projects okay so as a devops engineer you have created an AWS account then you have created a VPC for one of

1:42:57

the project within the project also there will be internal projects right so for each internal project for group of

1:43:02

applications you can Define private subnets okay so this private subnets

1:43:08

basically will not have access to Internet that's why they are called private subnets so by default these

1:43:13

applications cannot be accessed from internet so that's where VPC comes comes into picture and what VPC does is

1:43:20

whenever let's say this is a user okay I know that I'm taking time

1:43:25

here but this is very very important for everyone to understand when user eventually want to reach here like you

1:43:31

know user want to access an application here what happens is user firstly tries to go through this internet gateway okay

1:43:37

and this is a public subnet where anyone can access this P public subnet okay

1:43:42

saying that you can add few conditions here through the internet gateway and through the apaa gateways you can add

1:43:48

conditions and validate few things is this user good user bad user hacker or whatever it is we will talk about that

1:43:53

later so through the internet gateway initially what happens is within this public subnet devops Engineers usually

1:44:00

place a load balancer okay so load balancer can be directly accessed from outside world and

1:44:06

what happens is this load balancer will talk to this private subnet okay so load

1:44:12

balancer is the one that has access to private subnet and this user has the access to load balancer and within the

1:44:17

load balancer also you can do lot of configurations you can restrict traffic you can say that okay

1:44:23

uh etc etc and you can make this more secure with the load balancer as well but today's topic is

1:44:29

about once the load balancer forwards the request to the private subnet okay

1:44:34

so there are two things one is you can add additional security at the layer of

1:44:40

the subnet okay for each subnet AWS says that hey you can add more SEC security

1:44:46

at the subnet level okay so if you add more security at the subnets level what

1:44:51

we will do is we will start using using nscls whereas even if you bypass this

1:44:56

let's say you have not added anything at the uh sublet level you can as a devops engineer or the application owner what

1:45:03

you can do is you can add more security at the ec2 instance level okay the level

1:45:09

where your application is actually deployed so at the ec2 instance level if

1:45:15

you add security then we call it as security groups so using security groups you can add more security at the ec2

1:45:21

instance level whereas if you want to add more security here at the subnet

1:45:26

level then we will call I mean we will use NSS okay don't worry even if you

1:45:32

haven't understood exactly what is happening here when I deep dive and explain it further you will understand

1:45:37

but for now here what I wanted to explain is in AWS there are multiple layers where you can add security

1:45:44

because security is one of the key components for any organization if they want to move to public Cloud what they

1:45:50

will first see is is that public Cloud secure enough or not you can talk about

1:45:55

costing you can talk about any level of things but for any public Cloud tomorrow if there is new public Cloud what you

1:46:01

will first see is how secure this public cloud is because you are going to put all of your application in the public

1:46:06

Cloud right so if you if your organization is using AWS it will have your organizational user details you

1:46:14

will have uh details like the database and everything is hosted on AWS so first thing organizations look at is how

1:46:20

secure is AWS and that's where AWS says that okay we will do our part so the

1:46:27

fundamental thing that AWS says is in AWS security is a shared

1:46:35

responsibility understand this sentence very keen in AWS security is always a

1:46:41

shared responsibility what does this mean so AWS says that okay from our side

1:46:46

we will try to add as much security as possible like we will tell you that you can use VPC we will tell you that hey uh

1:46:54

you can add uh security groups you can add nsel's you can add uh API Gateway you

1:47:01

can add a lot of security but along with that we will need that means AWS is

1:47:07

saying along with the things that we are adding we need help of devops Engineers

1:47:12

or AWS admins whoever it is like right most of the times AWS admins are also

1:47:18

devops Engineers these days or network admins system admins whatever your company calls it but AWS says that

1:47:24

security should be a shared responsibility we will do our part as devops Engineers AWS admins or network

1:47:30

admins you also have to do your part and that where I mean that's exactly where

1:47:35

all of these component comes into picture whether adding load balancer for your organization uh do you want to use

1:47:41

default load balancer different load balancer do you want to use API Gateway or not and how exactly you want to

1:47:47

configure security groups and NSS all of these things devops engineer play a very

1:47:53

critical role in today's topic we will debug and deep dive into security groups

1:47:58

and NSS which comes at the last point of security right which comes at the last

1:48:05

point of security but this is very critical because if you are not taking necessary actions at the last point then

1:48:12

your application will be easily hacked right nccls and security groups are very

1:48:18

critical because of this very reason that is they act as a last point of security in your AWS account just before

1:48:25

the user request reach the application right if this is

1:48:30

user and this is where the application is it has to travel a long path right

1:48:36

the request has to travel a long path within the VPC it goes through multiple

1:48:41

components but when it reach here before this point the last point of security is

1:48:47

served by security groups and nscls okay so that's why

1:48:53

this is very important and we will try to focus I will explain you like what and when to use Security Group and what

1:49:00

and when to use nscls so firstly let's start with this concept on understanding

1:49:05

what is the primary difference between security groups and nsls so Security Group basically serves

1:49:14

at the instance level okay now what do I mean by this on day three so whoever has

1:49:20

followed our day three's video or in general what we have done on day three is firstly we created an AWS account

1:49:27

right in the AWS account in the default VPC like whenever you create AWS account

1:49:33

itself AWS will give you a default VPC without VPC AWS will not deal with anything if you want to create custom

1:49:39

vpcs you can do as we will do today but by default AWS will give you a VPC and what we have noticed is we created an E2

1:49:47

instance and within this ec2 instance we tried to deploy a Jenkins application

1:49:52

and and as a user we tried to access this genkins application what happened

1:49:57

we were not able to access this application by default because as I showed you in that video there was

1:50:05

something that was blocking this one right so by default as I told you in AWS

1:50:10

security is a shared responsibility and by default what AWS says is we will not allow anything to your instance directly

1:50:18

okay so if you want to do that you need to configure your Security Group

1:50:24

okay so if we want to configure anything at the instance level that we do within

1:50:29

the security group Concept in AWS and that's exactly where to access the genkins application deployed in the ec2

1:50:36

instance we have allowed port 8080 or you can also allow all

1:50:43

traffic okay so this is where devops engineers and the applications owners have to be very careful instead of

1:50:49

opening port 8080 let's say in your organization you have opened some other Port let's

1:50:55

say you have opened Port 9,000 10,000 and multiple other ports and there was one hacker who was trying to access this

1:51:01

and they were luckily able to access these ports and they tried to hack something okay or additionally whenever

1:51:07

you open ports that are not used or you keep opening a lot of ports then there can be some kind of unwanted traffic

1:51:15

that can flow to your ec2 instance and reach the application so AWS is doing the part of by default not accepting any

1:51:22

traffic whereas as devops engineer you have to do your part by allowing only specify

1:51:27

traffic into your ec2 instance and into your application that thing is done by security groups Concept in AWS I hope

1:51:35

this is clear if you still feel that this is not clear when we do the Practical you will understand we will

1:51:41

deploy a python application and I'll show you the same thing again using the security groups now you might ask me

1:51:48

okay this is a very easy topic so it is an easy topic but there are few things to understand in the security group so

1:51:55

within the security group basically there are two things one is there is inborn

1:52:02

traffic and there is outborn traffic what is inborn and what is

1:52:08

outborn basically when you deploy your application inside the ec2 instance right so if this is an ec2 instance and

1:52:14

this is your application there are two kind of activities right what is the first activity as a

1:52:20

user user will try to access your application and as an application probably you will try to access

1:52:27

google.com or you will try to access something to get some kind of information or you want to access some third party application so this traffic

1:52:34

that is flowing into your application okay this is called as inbound

1:52:39

traffic and this traffic which is Flowing outside of your application is called as an outbound

1:52:46

traffic for example let's say uh this application that we are talking about is

1:52:51

amazon.com this is just a blunt example okay so user today I can be an user who

1:52:58

will try to access amazon.com and amazon.com probably can access any thirdparty application for example Razer

1:53:05

pay or amazon.com can access other application like Amazon pay to access

1:53:11

Amazon pay amazon.com this request has to move out of uh this one right go out

1:53:16

of your ec2 instance and access some other application that is Amazon pay and

1:53:21

user will try to access the application so this access where user is trying to

1:53:27

access amazon.com is called as inbone traffic whereas amazon.com trying to access the razor pay or the Amazon pay

1:53:34

is called as a outbound traffic okay so as part of security groups you can

1:53:39

manage both inbound traffic and you can manage the outbound traffic that is traffic coming into your E2 instance and

1:53:46

traffic going out of your E2 instance again like I told you you should be very careful because AWS by default what it

1:53:53

does okay by default when you create a security group or by default when you create an e to instance AWS will assign

1:53:59

a default Security Group because AWS will also take care of your security right so in this default Security Group

1:54:06

what AWS says is hey what I'll do is by default I will

1:54:12

allow all the outbound traffic okay all the outbound traffic I will allow like

1:54:18

using your application you can access anything in the internet except for Port 25 I will tell you why uh there is a

1:54:25

story behind this port 25 but except for Port 25 I'll allow you all the outbound

1:54:30

traffic and what AWS says is but anything that is coming inside okay

1:54:35

anyone who is trying to access your application as inborn traffic I will deny everything by default okay in the

1:54:43

security groups what aw is doing is for the inborn traffic and for the outbound traffic okay for the inbound traffic

1:54:49

what AWS is saying is okay I have lot of restrictions here I don't want to allow

1:54:54

anything if you want to allow anything then you can use the concept of security group inbone Traffic rules and you can

1:55:00

add the specific port number or the specific IP address where the traffic has to be accepted but as part of outb

1:55:07

traffic I'll allow everything and if you want to restrict okay or if you want to

1:55:12

do any uh specific configuration you can do in the outboard traffic okay so this is the thing

1:55:19

related to inbound and outbound traffic we will see in the practical video how we can use this inbound traffic outbound

1:55:24

traffic now talking about the story of Port 25 so what happens with Port 25 is that

1:55:31

so in this story AWS does not allow the outbound traffic default on the port 25

1:55:37

because Port 25 is basically a mailing service okay so AWS does not want you to

1:55:43

uh you know there AWS does not want any kind of spam activity or you know AWS does not want to record the IP address

1:55:49

of this ec2 instance or record the IP address where your application is hosted so AWS

1:55:55

by default blocks the port 25 only outbound traffic there can be a lot of spamming activities or something like

1:56:01

that okay so now let us see if Security Group is doing all of these things now

1:56:06

why I need NL first of all what is NL right you might have this question abishek you

1:56:12

have been talking about NL you keep saying NL NL what exactly is this NL so

1:56:18

NL basically stands for Network

1:56:27

Access Control list okay so this is a very complicated name that's why in the

1:56:33

world of AWS people just call it as n okay so NSL network access control list

1:56:41

basically goes a level Beyond okay so security groups is applied at the ec2

1:56:48

instance level whereas NSL is applied at the subnet level okay NSL is applied at the subnet level

1:56:57

now with NSL devops Engineers can play even critical role because let's say you

1:57:03

gave an E2 instance for development team one and what this development team did

1:57:10

is you know just to make their process quicker what they have done is they have

1:57:15

deployed a Jenkins application or any other application they know that they should not allow all the traffic but to

1:57:22

make it easy what they have done is they just said that okay I'll have all the traffic inside my E2 instance instead

1:57:28

they could have just opened Port 88 but what they've done is they said okay accept everything allow all the traffic

1:57:35

to my E2 instance and allow from all the IP address in the world it can be IP address from Turkey it can be IP address

1:57:41

from India all of everywhere everything and you know I'm fine with it so the problem is that this particular instance

1:57:48

owner or this particular development GP Development Group they have for some reason they have ignored the

1:57:56

security aspect in the AWS right because security groups are meant to open only specific ports and allow only specific

1:58:03

traffic into the ec2 instance so how and what you can do as devops Engineers is

1:58:08

instead of okay so this is fine every instance owner they can open specific ports whatever the traffic they would

1:58:14

like to but additionally what AWS says is if you go back to the previous diagram where I said uh this is VPC and

1:58:22

and if this is public subnet this is private subnet right similarly there will be lot of private

1:58:28

subnets so what aw said is we will give you more access instead of instance

1:58:33

owner defining what kind of ports or what kind of traffic is allowed if they do some kind of mistake there and if

1:58:39

they say that allow all kind of traffic as devops Engineers or administrators you will have one more layer where at

1:58:46

the subnet level at each of the subnet level what you can do is you can Define

1:58:51

what can of traffic do you want to deny understand this carefully here I'm saying what kind of traffic do you want

1:58:58

to deny so if you deny some traffic at the subnet layer even if you try to do

1:59:03

that or even if you try to accept that at the security group layer there will not be any advantage so devops engineer

1:59:11

Network Engineers or AWS administrators what they can do is they can make

1:59:17

advantage of nscls to Define their organizational Network traffic

1:59:22

okay so if something is applied at the subnet level then it is by default

1:59:27

applied to all the instances within the subnet okay so if there are 50 ec2

1:59:33

instances sorry if there are yeah if there are 50 ec2 instances inside this private subnet let's say you give this

1:59:39

private subnet to development team three this is just an example you gave them to development team three and what they

1:59:46

have done is they have created 50 E2 instances in inside this private subnet and for some reason they said allow all

1:59:53

traffic but because you have applied NSL configuration and you said by default

1:59:58

deny all the traffic and allow only specific things if you say that at the NSL layer what will happen is AWS will

2:00:06

deny all the traffic that is flowing in and only allow the configuration that is defined in the NSL so NSL will add as an

2:00:14

additional layer of security got it so instead of applying the configuration for E each and every

2:00:21

E2 instance also you can use NSL for automation so maybe in your organization

2:00:27

devops Engineers are the one who is taking care of the instance level security that is security groups as well

2:00:34

as nsls then what you can do effectively is instead of adding security groups for each and every E2 instance if you just

2:00:41

apply NSL to the subnet if there are 10,000 E2 instances also this NSL

2:00:48

configuration is directly applied to all the 10,000 ec2 inst es okay so that you

2:00:54

can automate this manual activity of assigning the rules to each and every

2:01:00

instance using Security Group so it is up to you whether you want to use Security Group whether you want to use

2:01:06

NSL or you want to use the combination of Security Group plus

2:01:11

NSL okay so NSL basically the primary purpose is you can deny what kind of

2:01:19

traffic that you would want to and you can allow what kind of traffic you want want to whereas security groups is only

2:01:24

for allowing Security Group does not have deny uh thing in Security Group you

2:01:30

will only configure the rules for allowing so now we discussed so much

2:01:35

here uh probably for some people there might be some kind of confusion so what we will do is we will try to deal this

2:01:42

same thing practically and make it understandable for people practical part

2:01:48

that I going to demonstrate on the AWS account today so if you watch this carefully what I'm

2:01:54

going to do today is this dotted lines represents virtual private Cloud so firstly I'll create a custom virtual

2:02:01

private Cloud you haven't seen how to create virtual private Cloud so that's going to be interesting so firstly I'll

2:02:07

show you how to create this virtual private Cloud on AWS and when you create virtual private Cloud as I told you

2:02:15

security is a shared responsibility so as I create virtual private cloud and provide the IP address range AWS by

2:02:22

default will create an internet gateway for me AWS by default will create NL

2:02:28

with default configuration and AWS will create a route table additionally what

2:02:34

I'll do is I will create an ec2 instance and attach a security group to this ec2

2:02:39

instance now once we do this we will play with this Security Group configuration and NSL and we will see

2:02:46

how traffic flows into this ec2 application sorry application inside the ec2 instance what happens if I block

2:02:53

something in the security group what happens if I allow something in NL and block that thing in uh sorry uh allow

2:03:00

something in Security Group and block that in NL right all love all love block all love we will try a lot of things so

2:03:06

let's see how does this configuration go and you can also try the same thing as your assignment so because I'll share

2:03:14

you all the steps right now you can watch the video and you can follow the steps as I do so let's quickly go on to the A s

2:03:22

Management console here so this is the AWS Management console right so what

2:03:28

I'll do now is move to the service called VPC so this is the VPC service

2:03:33

some people might be watching this for the first time they might have not seen VPC before so what we will do here is

2:03:39

once you go here you have lot of things within the VPC don't get scared some of these things you have already learned

2:03:46

about uh in the previous classes what is VPC what is subnets Route tables internet gateway security groups today

2:03:52

we learned about Nel's as well if there are few things that you don't understand don't be scared eventually you will

2:03:58

understand all of those things so click on VPC and let's click on create

2:04:04

VPC okay so there is two options here I mean there are two options here VPC only

2:04:11

VPC and more go for VPC and more because AWS will take care of creating the

2:04:17

resources for you I mean the default resources for you for example when I create this VPC using VPC and more what

2:04:24

AWS is going to do AWS is going to create public subnet for me as well as

2:04:29

private subnet for me in both the availability zones right I'm in the region North Virginia in North Virginia

2:04:35

there are two availability zones Us East 1 a Us East 1B so AWS will create four

2:04:42

subnets the public subnet and private subnet for me so that I don't have to create a lot of configuration in

2:04:48

realtime example like I told you public private subnet comb is used more then AWS is also going to create

2:04:55

route tables for me finally it creates internet gateway igw stands for internet

2:05:01

gateway and it also creates some VPC endpoints for S3 bucket which I'll tell you later right now S3 buckets is not

2:05:08

taught in this series so don't worry perfect now what I'll do after

2:05:14

this is you can provide any name or you can use the random name so I can provide some name here for this VPC let me call

2:05:21

this name name as demo VPC okay and this is exactly what I've been talking about

2:05:28

so here if you see if I provide this configuration sl16 what AWS is saying me

2:05:34

that you'll get 65,536 IPS if I want to modify if I just say this as

2:05:42

1.0/4 see what happened AWS said that you'll get only 256 IP address so in future if you require more than 256 IP

2:05:49

address then you have to modify this VPC or you have to add additional uh configuration so whenever you create the

2:05:55

VPC if you have an understanding of what is this going to be what is the size then that's better and you can modify

2:06:01

these things as well uh for example instead of 10.0.0 do uh something you can also change this to 192 series or

2:06:09

whatever series that you would like to so let me just change this to uh

2:06:15

whatever AWS was giving me by default and now what I'll do is here you can

2:06:21

configure number of availability zones that you want technically I want only one availability Zone because this is

2:06:27

just a demo thing but let it be you can go with the defaults at this point of time because you are just learning

2:06:33

number of public subnets I want public subnet because if you go back to the diagram I'm going to do this entire

2:06:39

thing using public subnet only perfect uh all the configuration is

2:06:46

provided now I can simply like this VPC endpoint uh right now you can put it as n as well but if you want to go with

2:06:52

default let it be as S3 Gateway click on create VPC now the VPC configuration will be

2:07:00

created see what exactly VPC is doing firstly it created the VPC then it is

2:07:05

configuring the DNS we will learn about DNS tomorrow don't worry then VPC

2:07:10

creation is done it has created subnet for me these are combinations of public and private subnet then it created

2:07:16

internet gateway that's why I keep saying security is the shared responsibility a s will create

2:07:22

configurations for you Additionally you have to look at those configurations you have to modify those configurations if

2:07:29

required add additional security if required AWS has then created route tables create route associate the route

2:07:36

tables with the public private subnets and finally you know AWS has also done the route table creation okay so this is

2:07:44

uh all the things uh that are created as part of this VPC workflow now let me go back to the VPC

2:07:51

that is created for me and here you can also look at the

2:07:56

rough diagram of how does this VPC look like just go to the resource map and here you'll get a total picture of how

2:08:03

your newly created VPC is looking like so just spend some time here and try to understand what is happening here this

2:08:09

is exactly what I've taught you on day four so you can understand if you don't understand you can ask me any specific

2:08:15

question as well perfect now this part is done I've created the VPC AWS has created internet

2:08:23

gateway for me see this is the default internet gateway in this picture you can see if you scroll down so this is the

2:08:29

default Ingress greatway that AWS has created for me and AWS also creates NL

2:08:36

and security groups which you will see so let me go back and create the ec2

2:08:41

instance now because I want to place the E2 instance in the public subnet of the VPC and demonstrate security groups as

2:08:49

well as NL go to inst instances click on launch

2:08:54

instance what we will do different in today's class from the previous class where we created E2 instance is let me

2:09:00

call this as demo instance let me choose the flavor as

2:09:06

ubben to T2 micro is fine for this class no problem provide the key value pair

2:09:13

whatever you would like to use uh I'll use this one called AWS login for

2:09:19

example here in the network configuration you have to edit this right so edit the network configuration

2:09:26

and in the network configuration don't go with the default VPC default VPC is the one AWS creates for you so that you

2:09:34

can start working with it if someone does not know the concept of VPC they just entered or they just started with

2:09:40

uh AWS they can use this default VPC and they can play with it that's what we did on class three on the day three we use

2:09:47

the default VPC which comes up with all the default configurations of AWS but now I want to play with my custom VPC in

2:09:54

your organizations you will always use the custom VPC only so demo VPC let me click on this

2:10:00

one and see what subnet is getting allocated to your instance right in this

2:10:06

case AWS is saying that I will allocate the private subnet for you which is a General Industry practice by default

2:10:12

your ec2 instance and the application should be in the private subnet but because today we are trying to

2:10:18

understand this concept and not going in detail load balancer and all the other configurations so I will change this to

2:10:24

the public subnet how do I do that just go back here and change the subnet demo

2:10:29

subnet public one Us East one okay so because I'm in the

2:10:35

availability Z I want to play with only one availability Zone I've choose the US East one availability Zone assign public

2:10:42

IP address yes I need a public IP address for my E2 instance create security group or select

2:10:48

any existing Security Group like I told you if you are not aware of these Concepts

2:10:54

then you can ask AWS you know uh to select any existing security groups but

2:10:59

in this tutorial I'm going to play with the AWS use custom VPC so let me let AWS

2:11:05

create Security Group for me and then let me tweak it rest all the configuration looks okay

2:11:12

to me let me create on launch instance now what we will do is inside

2:11:18

this AWS cc2 instance that is getting created for me I will install a python

2:11:24

application okay I will just use a very simple python application on this E2 instance and what I'll do inside this uh

2:11:32

python application is I'll run the application on Port 8,000 and now I'll

2:11:37

try to access by default you will I mean I think most of you already know that

2:11:43

when you try to do this the security group will block because the default security group that AWS created for you

2:11:49

will not allow the traffic directly you need to all the traffic explicitly so I

2:11:54

will enable all traffic I will enable Port 8,000 and show you what happens and then we will try to block the traffic we

2:12:01

will say block all traffic in NL and see what is going to happen Okay so this is going to be

2:12:08

interesting now the ec2 instance is also running let's get the IP address of the

2:12:13

ec2 instance and log into the ec2 instance using my terminal so this is my

2:12:20

terminal what I'll do is

2:12:29

SSH uh I hope I have that pem key AWS login pem perfect change the IP

2:12:36

address also great so let's see uh log to the E2

2:12:44

instance and what is the first thing that you would do after log to the ec2 instance you need to update the packages

2:12:50

right because I want to run the python application so firstly I want to update the packages see python is installed and

2:12:57

then I will run a simple HTP server so firstly do

2:13:02

sudo appt update it will not take much

2:13:08

time all the packages are getting

2:13:15

updated it will not take much time here perfect all the packages are updated now now let me see see if python is

2:13:21

installed or not so let me just run Python 3 command perfect python is also installed now I will just run a very

2:13:29

simple HTTP server on python for that you don't even write you don't even have to write a single uh command or you

2:13:36

don't even have to write a single file just say Python 3 minus M HTTP do

2:13:42

server and provide the port whatever you would like to so a simple HTTP server is

2:13:48

now running on Port 8,000 I ideally if you open this instance on this IP

2:13:54

address and access the port 8,000 you should be able to access but let's see what would happen so we saw the same

2:14:01

thing uh in the last class as well on day three there have used genkins and I start I tried to access the IP address

2:14:08

on Port 8,000 which failed and then I enabled right so let's try to do the same thing

2:14:14

now this is my instance copy the IP address just say

2:14:19

HTTP Callum IP address colon Port 8,000 the application will not be

2:14:26

accessed because what is happening let's go and see this is the ec2 instance this

2:14:32

ec2 instance is attached with a security group this is the default security group

2:14:37

that is attached and what is happening in this default Security Group is that you know what AWS is saying is I

2:14:44

will allow only Port 22 this is the port 22 that is only allowed the reason is

2:14:50

also because because AWS want only you I mean AWS only wants to allow the SSH

2:14:55

traffic if this is also not allowed then we will not be able to even log to the E2 instance so only SSH is allowed and

2:15:03

let us see what is the NSL configuration as well right so if we look at the NSL

2:15:11

configuration just go uh take I'll take a different tab here and open

2:15:19

VPC Network ACS so what is the network ACL attached

2:15:27

to rvpc this is rvpc right demo VPC so let go to that specific thing and see

2:15:32

what are the inbound rules why are we looking at inbound rules because inbound rules is the one that is coming to our

2:15:39

uh application so it says all the traffic is currently alled so Network

2:15:45

ACL which is the first layer of Defense okay which is the first layer of defense for the end ire subnet what is

2:15:52

configured here it said that okay allow all the traffic I don't have any problem you can say that there is also deny rule

2:15:58

here but deny rule will only be triggered if this condition is not met okay so order goes with the order of

2:16:05

priority whatever is here in the first row so it depends upon the number so

2:16:10

least number will be here first let's say I'll configure one more rule uh and the rule number is 200 so first rule 100

2:16:18

will be verified then rule 200 will be verified and finally it will go to rule star okay star is the last thing here

2:16:25

this condition is met right if this condition meets that is if all the traffic is allowed then there is no

2:16:32

problem okay let's say here instead of all traffic I can also say only all Uh

2:16:38

custom TCP traffic of Port 8,000 or I can say all love only custom uh TCP

2:16:43

traffic of Port 9,000 which we will see but for now all traffic is enabled so no problem from NSL what AWS did here is

2:16:52

from the internet gateway you got entry into the subnet okay because NSL is

2:16:57

allowing all the traffic so internet gateway can forward the request to the route table if there is a load balancer

2:17:03

here then the request would have gone to the load balancer from the route table request goes to the load balancer but

2:17:08

because there is no load balancer here from internet gateway if NSL accepts

2:17:14

then the traffic goes to the route table right so let me add an arrow here so that it is much clear

2:17:22

so this is what has happened here from the NSL Now traffic goes directly to the

2:17:28

route table and Route table would forward the request to the ec2 instance let's see what is happening and why if

2:17:35

NSL is accepting why the request is not going to the E2 instance that is because Security Group is blocking it first

2:17:42

layer of defense is cleared but the second layer or the last layer of the defense which is Security Group is

2:17:47

blocking the request now let's try to unblock it so for that go to the

2:17:53

security group edit the inbound

2:17:59

configuration add one more Rule and inside this say allow Port

2:18:08

8,000 so custom DP TCP means the custom Port 8,000 of TCP you're allowing Port

2:18:15

8,000 from any IP address for now you can say uh any IP address anywhere in

2:18:20

the world uh the uh the resource that is using ipv4 anywhere in the world just save the rules and as soon as it is

2:18:28

saved you will see that the configuration will be applied to ec2 instance and if I just refresh this page

2:18:33

you will see the output what is this output basically I'm just running a simple HTTP server right I'm not running

2:18:40

anything more than that this is a very simple HTTP server so that's why what is happening here is the request that you

2:18:46

have sent is listing out the directories that are available in that folder

2:18:51

anyways you got the request output you can verify or validate this request output here as well so you got 200

2:18:58

response that means the request is successfully sent and you have got the response back now what if okay what if

2:19:07

you have opened this port right so where is this in the security inbound rules

2:19:12

you have opened this port let's say you are the instance owner you are not the devops engineer and as part of the

2:19:18

instance ownership what you have done is you have enabled Port 8,000 but your organization has a very strict rule that

2:19:25

the port 8,000 should not be enabled so as devops engineer you can configure

2:19:30

this you can control this thing at the NSL level itself because you cannot monitor each and every ec2 instance and

2:19:37

you cannot control every ec2 instance you can say that for my organization or for this particular VPC I will block

2:19:45

Port 8,000 in the naacl right or the network ACL configuration see the what

2:19:51

would happen so the power of devops engineer using NSS this is Security Group where is NSL

2:19:59

let's go to the NSL Yep this is NSL this is the inbo rule what I will do is edit

2:20:05

inbo rules instead of allowing all traffic just remove this add new rule and what

2:20:12

you will say is in this specific

2:20:18

rule let me call this rule as 100 custom TCP Port range 8,000 I want to

2:20:25

block anything that is coming from internet just deny now let's save this change okay and

2:20:32

let's try to copy this URL take in a different browser and just try to enter

2:20:38

it and see now you will see that the request will not reach the application that is

2:20:44

because devops engineering team has blocked that specific IP range or devops

2:20:49

engineer has denied that particular traffic in the NL so it will be blocked for the entire subnet whether you are e

2:20:56

to instance owner whether you can be anything because the network configuration is blocked you cannot

2:21:02

access now again let's try to edit this inbound traffic Rule and say that for

2:21:09

100 I will just say all traffic Al

2:21:15

Love Save changes edit inbound rule I will add one

2:21:23

more inbound rule okay and that inbound rule number is 200 okay custom TCP Port

2:21:33

8,000 any guesses on what would happen I will deny this let's see how much you

2:21:38

have understood here I have added this rule number as 200 and I've have denied the traffic let's see if I save changes

2:21:46

and refresh this you will see that the traffic is sent even you have denied the

2:21:52

configuration in the NSL because NSL goes in this specific order right so the

2:21:58

order would be first you will verify the I mean AWS will verify the first lowest

2:22:04

number the lowest number is 100 or it goes with the specific order that is mentioned here it is mentioned in the

2:22:10

ascending order itself so firstly it will check rule number 100 which says all traffic is

2:22:16

allowed so this rule is met AWS will forward the request the request goes to

2:22:21

Security Group in the security group also you have allowed that Port 8,000 so it directly reach the specific

2:22:29

application what happens if I simply rename this one like if I make this as

2:22:35

200 and if I make this as 100 save changes

2:22:41

now okay so let's save one by one so let's keep this as uh

2:22:51

200 let keep this as 110 okay you can keep any number it just has to be the

2:22:56

order that's it now try to save the changes so it will reflect and 110 goes

2:23:01

above of so this is the first first rule what it says is if the port number is

2:23:06

8,000 block if the port number is not 8,000 then it will go to the next rule

2:23:12

what does the next rule say all love all the traffic now let us see what would happen just copy this URL take this in a

2:23:18

different Tab and try to refresh again the traffic will not reach the E2 instance the thing is now the

2:23:25

application developer will be confused hey what happened I have allowed the port 8,000 here but still my application

2:23:32

is not getting the traffic because devops engineer or the network Engineers have blocked this specific Port now this

2:23:39

port they might have blocked because there might be some security reasons there might be some concerns it's not

2:23:45

just about the port but with the NSS you can play around with different things you can play around with IP addresses

2:23:51

let's say you are worried about some IP address that is coming from XYZ country

2:23:57

and you know the IP address range you can say block the IP address that is coming from 3.4. 5.6

2:24:03

range or if you know the specific IP address you can provide the specific IP address if you know this if you don't

2:24:08

know the specific IP address you can provide the range as well 3.4.

2:24:14

0.016 right you can say anything you can block on the IP address you can block on

2:24:19

the port range you can play around with NCL and Security Group configuration so what you

2:24:25

have understood at the end even if you allow the configuration in the security groups NCL acts as the first layer of

2:24:31

defense and devops Engineers as well as system Engineers Network configurations or the admins who has access to nscls

2:24:39

they can overall block the configuration at the subnet level right so today we

2:24:45

understood the top topic of NSL and security groups with respect to allowing the access and blocking the access

2:24:51

please take this as an assessment you can watch this practical part one more time and you can try this at your end

2:24:58

this is really really important today we just tried with one public Subnet in future we will enhance the scope we will

2:25:04

add the private subnets we will add load balancers we will add API gateways We'll add a lot of configuration multiple

2:25:10

availability zones so there this concept you will understand even more in detailed way when we play with other

2:25:17

components of AWS but for that today you have have to practice this and let me

2:25:22

know in the comment section were you able to try the assessment were you able to solve this do you have any questions

2:25:29

please let me know in the comment section and I'll more than happy to reply to

2:25:49

it

2:26:06

so firstly let me give you a brief overview and you know what is this project about what are we going to

2:26:13

implement what are some things that we need to understand before the implementation of the project firstly

2:26:19

this project demonstrates how to create VPC and how to secure your applications

2:26:25

within a VPC in a production environment right so if you look at the architecture diagram here there is a VPC and inside

2:26:33

the private subnet we have deployed the applications and there is a public subnet where you have load balancer and

2:26:38

the N Gateway users would access this application through the internet gateway

2:26:43

to the load balancer and from the load balancer it will reach the applications in the private subnet right so this is

2:26:52

the entire architecture that even I'm trying to explain here so you can pause the video here and you can also just R

2:26:59

read through this entire thing so that you can explain this same thing when interviewers ask you in the interview

2:27:06

process but just a overview like in four lines first we will create a VPC that

2:27:12

has public subnets as well as private subnets in two availability zones now

2:27:17

why I need two availability zones you can ask me like AB when you explain the theory part you were just using one uh

2:27:25

VPC in that VPC you are only using one public subnet and one one private subnet and that to in one single availability

2:27:31

Zone but when you do this in production just you need to create two availability

2:27:36

zones instead of one so that for some reason if the data center of AWS in a

2:27:42

specific region or the availability zone of AWS in a specific region goes down

2:27:47

you will still have the other availability Zone that is serving the traffic for you so that's the only

2:27:53

purpose we create a VPC with public subnet and private Subnet in two availability zes and in the public

2:28:00

subnet what we will do is we'll deploy a ad Gateway and a load balancer why you need load balancer I'll explain you but

2:28:07

why you need an ad Gateway let's say this applications here if they want to access something from the internet

2:28:13

probably they want to get some uh you know Json information or they want to get some kind of information from other

2:28:19

apis in the the internet so it is better to mask the IP address of this

2:28:24

applications when they send a request so that's exactly what n Gateway does so let's say the IP address of this one is

2:28:32

17216 1.0 or 17263 do4 when the application or the

2:28:39

when the ec2 instance tries to access something from internet what this n Gateway says is okay let me change your

2:28:46

IP address to the public IP address of mine and send the so that your information will be hidden

2:28:53

even if that third party application is a false application or even if it is hacked there will not be any problem

2:28:59

because you don't know I mean that person does not know the IP address of this server that is about the public subnet

2:29:07

and in the private subnet you will launch these applications using an autoscaling group okay what is Autos

2:29:12

scaling group I'll just explain you in a minute finally we will see how to reach

2:29:18

this application through the internet traffic flows and we will also I mean I'll also tell you how this applications

2:29:24

access internet using the NAD Gateway so this is going to be the complete overview and before I jump onto the

2:29:31

video you should know about these four things because I covered these things in the day Zero to D6 but I did not cover

2:29:38

them to an extent that it is registered for everyone basan is something that I did not cover at all but the other three

2:29:44

things I covered but not to the fullest so let me give you an overview Autos scaling group load balancer they have

2:29:51

dedicated sessions in this AWS Z2 hero series but in this project I'll use them

2:29:57

so that you should understand the summary of it firstly what is an autoscaling group so autoscaling group

2:30:04

is you know you can just understand it as a concept let's say you want to deploy your application in two

2:30:09

availability zones instead of creating your ec2 instance two times what you can

2:30:15

do is you can just tell the aut scaling group that okay so create minimum of two

2:30:20

replicas and in case in case my application receives more requests and

2:30:25

if two servers are not enough to load this uh uh two servers sorry uh two

2:30:31

servers are not enough to accept the traffic incoming traffic let's say two servers can only accept 100 requests but

2:30:38

there are 200 requests that are coming at you what autoscaling group can do is it immediately can take a decision and

2:30:44

scale your servers to four in number five in number six in number right so this is a very basic example of Autos

2:30:50

scaling group in future we will discuss about Auto scaling group in detail so don't worry about it for

2:30:57

now then you have load balancer what is load balancer the name itself says what is load balancer it is something that

2:31:04

balance the load let's say there are 100 requests now we have two servers right there is server one here and there is

2:31:10

server two here hosting the same application so load balancer takes the responsibility of sending 50 requests

2:31:17

here and 50 requests here or if you have this instance very powerful right so you

2:31:22

can say send 60 request here 40 requests here 80 here 20 here and load balancer

2:31:27

will exactly balance the load right apart from that using load balancer you can also do path based routing host

2:31:33

based routing different kinds of routing mechanisms which we'll cover in depth when we come to the load balancer Topic

2:31:41

in the AWS Z to Hero series and one final topic is what is basan or a gum server this is a very

2:31:49

very simple concept ccept so these ec2 instances right that we are creating are created in a private subnet so they

2:31:55

don't have a public IP address or we cannot SSH into these instances directly

2:32:00

so what we will do is because we want to keep them secure we will not create any IP addresses public IP address for them

2:32:07

but we will create a basan host or just a jump host in this public subnet and

2:32:14

through that basan or jump host we will connect to this E2 instance and there are multiple advice ages of using basan

2:32:21

host the one mechanism is the same thing that I've just told you if you use basan host instead of directly connecting to

2:32:27

the server you can connect from the Bastion so that there will be a proper logging mechanism you can do proper

2:32:34

auditing of who is accessing this private subnet you can configure bunch of rules in that Bastion host where the

2:32:41

traffic actually moves or the SSH traffic actually goes to this application in the private subnet

2:32:46

through the basan host right so we will discuss about advantage of basan host again because this is not the topic

2:32:53

where we want to discuss about Bastion but this is a topic where we want to implement this entire architecture right

2:33:00

so I think we have enough information now we can get started with the project and let's see how to implement this end

2:33:07

to end on an AWS account okay so I have logged into my

2:33:14

AWS console and let's start with the creation of VPC so go to the search bar

2:33:20

type uh VPC so you will see an option for isolated Cloud resources VPC click

2:33:25

on that so you'll find an option called create VPC click on create VPC and there

2:33:33

will be two options here one is to create VPC only or create VPC and more

2:33:39

if you click on VPC only then you have to create all the things by yourself like for example uh you need to create

2:33:45

all the subnet configuration ipv4 IPv6 and a lot of other configuration but the

2:33:51

better thing is to go with VPC and more so when you click on VPC and more you

2:33:56

will see in the preview diagram what AWS creates for you so AWS creates a public

2:34:02

private subnet uh in US East 1A availability Zone and it will also create a public public subnet and

2:34:08

private Subnet in Us East 1B as well so if we go back to our diagram which we

2:34:13

have been talking about right so as I told you uh you can search that in the AWS black blogs as well just search for

2:34:19

AWS uh public private subnet architecture so this is the blog that I

2:34:25

was talking about uh which I wanted to share in the description this blog also has the information but you don't have

2:34:31

the complete details in this blog like they are very high level probably uh you know someone might not be able to follow

2:34:38

this and execute this so I'll explain in much better way so just use this diagram

2:34:43

as reference and we can Implement that in our own style the style that we have

2:34:48

learned from day 0 to day six so see what we are trying to do here when you click on VPC and more what AWS is

2:34:55

creating one public Subnet in Us East one a one public Subnet in Us East 1B

2:35:00

which is what we want right one public subnet here one public subnet here and then you have one private subnet uh here

2:35:07

in Us East 1 a and one private Subnet in 1B exactly same one private subnet here and one private subnet here so VPC is

2:35:14

getting created subnets are getting created and what all so along with the subnets of course

2:35:21

the subnets have to be attached with the route table when I explained the VPC architecture I told you route table is

2:35:27

the one which defines how to route the traffic within the subnet so if the subnet is not attached to Route table

2:35:33

technically nothing happens with the subnet so if you look at the public subnet it is attached with a route table

2:35:38

that has a destination as internet gateway awesome that is exactly what we want this public subnet should have a

2:35:45

route table with internet gateway attached to it so that traffic flows into the public subnet so that is also

2:35:51

done by the VPC here great and finally you have two private subnets which have

2:35:57

two different route tables expected because these two route tables are different and it is attached to a VPC

2:36:03

endpoint uh for S3 bucket now I don't want this one uh because this project has nothing to do with VPC endpoint and

2:36:11

when we talk about S3 buckets uh you will understand about what exactly this is for now just ignore this and I'll

2:36:16

also remove this from the configuration so okay VP and more is what I want then uh select the name of the

2:36:24

project let me call this as uh AWS prod

2:36:29

example use the same subnet uh there is no problem here because uh in this VPC

2:36:34

you have 6536 IPS which is too much uh so that's totally fine I don't want to

2:36:39

touch it no IPv6 I don't want to play with IPv6 I'm just using ipv4

2:36:45

configuration number of availability zones it is two that I require

2:36:51

perfect number of public subnets two if I change this one the reference diagram also gets changed number of private

2:36:57

subnets two n gateways yes I want one n Gateway in one particular availability

2:37:04

zone so let's say one per availability Zone and this is the VPC endpoint that I talking about just click on none you

2:37:10

will notice that this diagram also changed and now there is no VPC endpoint for S3 bucket perfect now let's click on

2:37:18

create VPC here and see that AWS creates bunch of

2:37:23

resources for you so take a pause here and read what are the resources that are getting created because this is very

2:37:30

very important okay maximum number of addresses have been reached the elastic IP addresses that's not a problem uh let

2:37:37

me go back and see uh how do you delete that you can just go to the ECT console

2:37:43

this is again something uh useful information while you do demos this is the advantage so then there is an issue

2:37:50

here while I was creating the VPC so the number of public uh elastic IP addresses

2:37:55

is reached so let me go here and release some elastic IP addresses okay

2:38:02

so these are some previous projects that I was doing so let me release those IP

2:38:09

addresses if the IP address is released then AWS will allocate this elastic IP

2:38:14

address to the other things that that I using so now if I go to the VPC console

2:38:21

let me click on retry here so you will see at this point of time the elastic IP addresses will also be created what is

2:38:28

elastic IP address elastic IP address in AWS is nothing but an IP address that

2:38:33

will remain the same even if the instance is deleted let's say you terminate an ec2 instance I'm just

2:38:40

giving an example if you assign ec2 instance with an elastic IP address what will happen even if the ec2 instance

2:38:47

goes down and comes back the IP address will remain the same in general it does not remain the same but if you're using

2:38:53

elastic IP address then the IP address will remain same in very simple language

2:38:58

if I have to explain in a plain English elastic IP address can be called as a static IP address because it never

2:39:05

changes okay so in this case the elastic IP address in my example it will get

2:39:10

attached to the N Gateway because like I explained you what is n Gateway it will

2:39:16

mask the IP address of my ec2 instance or the applications with the public IP address of the N Gateway so this is

2:39:24

where the VPC is using the elastic IP address perfect let's see the VPC

2:39:31

creation so VPC creation takes a little time uh at this stage creation of NAD gateway to activate uh I mean for the

2:39:38

NAD gateway to activate uh it will take couple of minutes so you need to wait patiently here uh for the N gateway to

2:39:44

be activated so now all of this is created

2:39:51

but even then you need to wait for a couple of minutes sometimes okay so sometimes your VPC is created but

2:39:57

sometimes AWS takes one or two minutes to reflect this in the VPC tab so if in

2:40:03

case in when you are performing the demo when you click on these vpcs and you see that the VPC is not visible here or it

2:40:10

is taking time please be patient sometimes it takes time okay now the VPC is created let's go to the VPC and see

2:40:17

if the resource architecture that we have created till now okay till now whatever we have created is available or

2:40:23

not okay till now what we have created we created a VPC with public subnets private subnets public subnets attached

2:40:29

to the route table and the internet gateway and the private subnet is attached to different route tables

2:40:36

perfect everything everything is looking fine till now now what are the other things needed so the other things that

2:40:42

are needed is the E2 instances where your applications are deployed we will do them with autoscaling group as I've

2:40:48

mentioned and the load balancer is also missing now once these things are deployed we will try the traffic from

2:40:54

outside but there is a thing that you need to do additionally will'll get

2:40:59

there so please watch it carefully okay now let's go to the console again and create the auto

2:41:06

scaling group so search for ec2 in the ec2 you can go for auto

2:41:12

scaling option just scroll down you'll see this option called autoscaling groups click on create autoscaling group

2:41:19

autoscaling group in AWS cannot be created directly you can use launch template so why you need launch template

2:41:26

because you can use this launch template across multiple uh autoscaling groups or this template acts as a reference like

2:41:32

tomorrow if you want to understand how your autoscaling group is behaving is your autoscaling group scaling one

2:41:39

instance 10 instances 100 instances you can use this launch template as reference so let me click on this launch

2:41:45

template firstly create that launch template will not have much configuration uh you just have to

2:41:52

mention what is the name of this launch template uh let me just call this name as the name of the launch template as uh

2:41:58

AWS prodad example let me give the same and uh what will be the name what are

2:42:04

you trying to do here basically uh deploying okay

2:42:09

verification or proof of concept for

2:42:16

AWS private subnet for app deploy in AWS private subnet

2:42:26

perfect now it is asking what should be the operating system of your or the you

2:42:32

know what should be the Ami not operating system what should be the Ami which image do you want to use ubo SOS

2:42:38

let me just pick up what I've been using that is the uento configuration click on the recently launched and uh this is the

2:42:44

uento configuration if you want to browse more you can click here what should be your instant type always pick

2:42:50

the free instances when you're are doing this proof of Concepts whenever it is required to use an additional

2:42:55

configuration I'll let you know in the key value pair pick up the key value pair that you want to

2:43:01

use do not touch anything with respect to this uh specific option here the subnet configuration uh let it be uh

2:43:08

create a new subnet sorry create a new Security Group okay and uh provide the

2:43:14

name of the security group again let me give the same thing AWS prodad

2:43:21

example just say Al love SSH accent this is just a

2:43:28

description you can give anything and here comes the important thing in which VPC do you want to launch I want to

2:43:34

launch this autoscaling group The instances in the VPC that I just

2:43:40

created and here you can add any inbound Security Group rules for the E2 instances that are getting created so my

2:43:48

application that I'm going to deploy I know that uh it is going to be deployed and access using Port 8,000 but what you

2:43:55

can do is you can just open all of the things as well if you're not sure about your application configuration but it is

2:44:01

always um you know suggested to keep the port that you are deploying I mean that

2:44:07

your application requires so you know what you can also do like I'm saying is just open all traffic but if you open

2:44:13

all traffic then you are not following the security standards so what I'll do is I'll open the ports that I require

2:44:21

one is the SSH Port that is Port 22 that is the port 22

2:44:27

from which source anywhere uh SSH Port I want to access from anywhere so you know

2:44:33

this is one and now add another Security Group for the application that is deployed inside these instances so I'm

2:44:39

going to deploy a python application very simple one so I'm will open port 8,000 so custom TCP Port range 8,000 in

2:44:47

your case you can change this according to the application that you want to deploy and again let me put accessible

2:44:53

from anywhere and I don't want to add any EBS

2:44:58

volumes or any other configuration so let me click on launch template you must be feeling abishek this is exactly

2:45:04

similar to E2 instance configuration yes it will be exactly same because here you

2:45:09

are using the autoscaling group to scale ec2 instances right so once you create that just refresh the page so that

2:45:16

autoscaling group will find the launch template Autos scaling group name again let me say AWS example uh prod or

2:45:25

AWS prod example what is a launch template AWS

2:45:30

prodad example is a launch template and now let me click on the

2:45:36

next button here you need to choose the VPC okay which VPC do you want to choose

2:45:41

you want to choose the VPC that you have created with right what is it saying for more applications you can use multiple

2:45:48

Ava a ability zones okay but in my case I want to choose the VPC that I've have just created availability zones and

2:45:55

subnets in which you want this ec2 instances to be available where this ec2

2:46:00

instances should be there if you go to the diagram they should be there in the private subnet so let's put them in the

2:46:06

private subnet this is the private subnet right

2:46:11

private one and this is the private Subnet in Us East B so I'm choosing two private subnets perfect

2:46:20

now all the things are available let me click on next do you want to attach a load

2:46:25

balancer now or do you want to attach a load balancer later so I'll not attach any load balancer here uh let's just not

2:46:32

go with any load balancer I'll attach load balancer in a different context I'll just create this load balancer okay

2:46:38

so I'll create an application load balancer in the public subnet but in the autoscaling group configuration for this

2:46:44

project I'm not creating any load balancer so okay

2:46:50

health checks everything is good let's click on the next button desired capacity specify the size

2:46:58

of Autos scaling Group by changing the desired capacity okay so let's say you want two E2 instances select this as two

2:47:06

what is the minimum and how much it can go up to maximum what is maximum like you are saying to start with two E2

2:47:12

instances but let's say during Christmas or during uh Diwali or some other festival occasions if if you receive lot

2:47:19

of traffic then autoc scaling group when the scaling when the traffic goes to 80%

2:47:25

90% depending upon the CPU monitoring what you can do with auto scaling is you

2:47:30

can tell Auto scaling to automatically go up to maximum capacity of three instances and four instances so you

2:47:36

don't have to worry about this right now you will learn this uh when we go to the in-depth topic analysis of autoscaling

2:47:44

groups so you can configure the scaling options here that's what I was talking about like when do you want to Define

2:47:50

when the E2 instances have to scale up and scale down so for now just keep it none and click on the next

2:47:56

button add notifications you can add notifications through SNS topics when an E2 instance is added or

2:48:03

terminated for now I don't want any of those things so let me click on next button and launch

2:48:13

configuration perfect now my autoscaling group is also getting created again this

2:48:18

will take 1 minute so just wait here before you move to the next so after a

2:48:24

minute you will see that the desired capacity is two and the instances are two now let's go to the AWS ec2 and see

2:48:32

if this autoscaling group indeed has created two instances for us or not and

2:48:37

I'll also verify if one of the instance is created in Us East 1A and the other instance is created in Us East 1B or not

2:48:44

okay for that let me go to uh ec2 here

2:48:51

perfect and uh click on the instances yes there are two instances perfect click on one of the instance where is

2:48:58

this created uh see this is created in Us East 1A now let's click on the other instance

2:49:07

go back here click on the other instance and see where is it

2:49:15

created uh see this is created in Us East 1 B perfect so you have this

2:49:21

configuration also done so Autos scaling group is created instance is created

2:49:26

here and here now before going to create the application load balancer you have to do one thing that is install the

2:49:33

application inside this servers right I want to install applications inside This Server so now what I'll do for that is

2:49:41

just go to those instances so here comes one thing that you have to watch carefully and this is very important so

2:49:49

let's go to the instance and try log to this instance so you will notice that this instance does not have a public IP

2:49:56

address and that is expected right so I have not given any public IP address here because these instances have to be

2:50:03

secure now you might ask me but abishek how do I log into this so that's where

2:50:08

our basan or the jum host comes to the picture so as I explained in the theory

2:50:14

part what does a Bastion or gy host does so it enables it act as a mediator

2:50:19

between your private subnet and it acts as a mediator like between your private

2:50:24

subnet and the external persons or the public subnet so I'll create a basan host here and access the private subnet

2:50:31

from there okay so what we will do is go back to the ec2 console click on the

2:50:38

instances and start creating a Bastian host launch instance so this is I think

2:50:46

all of us already know just call it as uh Bastian host and uh choose uento as the image

2:50:54

you can choose anything then choose T2 micro provide key

2:51:00

pair AWS login and what you will do here is make sure you add a Security Group

2:51:09

which has access to SSH right so because you need to SSH to the ec2 instance that

2:51:15

is the basan host and from there you have to s s to this private subnets and install the application so perfect SSH

2:51:23

is added uh sorry where is it yeah so SSH is already there so I don't have any

2:51:28

problem now there is one specific thing here called network settings edit and make sure this basan host is created in

2:51:35

the same VPC okay so if that is not in the same VPC then it will not be able to

2:51:40

access inside the VPC so I changed that configuration and added it to the

2:51:45

VPC perfect Auto assign public IP address yes enable without public IP address it

2:51:52

will not be of no use now just go and launch this instance

2:51:59

okay I will launch the instance and once the instance is launched what I'll do

2:52:04

I'll SSH to this particular instance from there I'll SSH to the private host

2:52:10

okay so what I'm doing for my personal laptop I'll SSH to basan from basan I'll

2:52:16

SSH to the private subnet but to SSH to the private subnet again

2:52:21

you want the key value pair which is present on my laptop so what I'll do

2:52:27

firstly I'll show you okay so I'll copy my key value pair to the Bashan host as

2:52:32

well why because if the Bashan host does not have the key value pair let's say Bashan host is here it does not have the

2:52:38

key value pair how can it log to the private host key value pair is in my personal instance so I will use a shell

2:52:45

command called SCP don't worry I'll show you all of these things

2:52:50

practically so let me refresh the instances now you will see three instances this is Bash and host and

2:52:57

these are instances in the private subnet perfect so let me get my terminal

2:53:03

this is my terminal and uh what I'll do is I know

2:53:08

my SSH key is here uh I've used an SSH key called uh AWS so just search for GP

2:53:16

AWS log I think I've used this pem file so firstly I want to copy the PM file

2:53:23

definitely I log into this Bashan host but along with log to this Bashan host I

2:53:28

also need to log to these instances for that this Bashan host should have the SSH access for these instances right it

2:53:34

should have the pem file so firstly let's copy the pem file so open this instance get the public IP address of

2:53:42

this instance okay now I'll use this command I'll also try to paste this

2:53:47

command in the description so that you can use this is called as a SCP command secure copy so what I am securely

2:53:53

copying I am copying this specific thing called AWS login pem which is the pem

2:53:59

file for my private subnet instances as well from my personal laptop to where am

2:54:05

I copying it I am copying uh sorry yeah I'm copying it to

2:54:11

the UB to E2 instance okay so here I'm using the identity file and then I want

2:54:16

to copy this file to the instance okay which instance is this this should be my

2:54:23

Bastian post instance so let me change the IP address of

2:54:28

it it is very clear right what does SCP do SCP securely copies file from one

2:54:35

host machine to the different host machine now from where I'm trying to copy I'm trying to copy from my personal

2:54:41

laptop to AWS ec2 instance that is the Bashan host so let remove this IP

2:54:47

address and copy the IP address of the basan

2:54:53

host so you will see what will happen let me just copy say yes and

2:55:01

you'll notice that the pem file is copied to the basan host perfect it is copied now let's go to the bastan host

2:55:08

and see if it is copied or not how do I log to the bastan host just copy this IP address again say

2:55:15

SSH minus I your key value pair pem file location UB to at theate this IP

2:55:26

address just do LS you will notice that the AWS PM file is available here if the

2:55:32

pem file is not available here you will not be able to perform the next command which is very very important that is I

2:55:38

will not be able to log into any of these instances I need to log into one of these instance because I want to

2:55:45

install the python application in one of the instance first okay so take the private IP

2:55:56

address SSH minus

2:56:01

I AWS pem file Ubuntu at theate private IP

2:56:08

address see I am able to log in to this specific instance with the private IP

2:56:13

address 10 014109 1014 0109 perfect so that means

2:56:21

now I'm able to log to the private instance as well I mean what is a private instance

2:56:28

easy to instance in the private subnet awesome now all that I'll do is install

2:56:33

the python application here so very simple python application uh let me do

2:56:38

one thing let me create a HTML page as well index.html so let's pick up a very

2:56:45

simple HTML P W3 School tools HTML

2:56:52

basic I'll pick up a very random example let's take this one copy this entire thing and put this

2:57:00

in my file so that I just want to host this file let me say

2:57:09

that my first AWS

2:57:15

project to demonstrate apps in private

2:57:23

subnet okay let me remove this and now save this file and just run

2:57:31

the python server using Python 3 minus M HTTP

2:57:36

do server on Port 8,000 okay let me run it

2:57:42

on Port 8,000 so my application is running in one of the instance that is 10

2:57:49

014109 so what I've done till now is I've used the autoscaling group perfect

2:57:55

let's go back to the diagram I've used the autoscaling group created the ec2 instance created a Bastion host logged

2:58:01

into only one of the instance so see why I've logged into only one of the instance because while using load

2:58:08

balancer I want to demonstrate that traffic is going to one particular instance it is hitting and giving you

2:58:14

back the response whereas when it goes to the other uh particular particular application in a different subnet it is

2:58:20

giving you a error response because this page is not available or the application is not available okay so for that

2:58:26

purpose I've installed python application in one E2 instance and I did not install in other E2 instance so this

2:58:33

is a effective way of explaining you the load balancing concept okay we will see

2:58:38

50% of the traffic should go to one instance you should get the response and 50% of the times it should go to other

2:58:44

and it should not get the traffic perfect now what I'll try to do

2:58:49

is create the load balancer and attach these instances as Target groups that will be our final stage so again let's

2:58:57

go here search for load balancer or go to E2 that's a easy way

2:59:04

and in the easy to you have load balancers so there are three different

2:59:10

load balancers now you don't have to worry about it what is application load balancer what is Network load balancer

2:59:15

classic load balancer Gateway load balancer we will come to that when we discuss about load balancer Topic in

2:59:21

detail that will come after day 20 or something so don't worry about it right now let's go with the default uh that is

2:59:28

the application load balancer not default I mean let's go with this one click on the create button and what is

2:59:34

an application load balancer on a high level it does the HTTP and https which is L7 load balancer layer 7 load

2:59:41

balancer so provide the load balancer name let's call it as AWS prod uh

2:59:50

example the load balancer should always be internet facing it should be in the public subnet right so we have discussed

2:59:56

this multiple times load balancer should be in the public subnet and should have access directly from the internet

3:00:04

gateway ipv4 makes sense what is the VPC that you want to provide so you know

3:00:12

what should be done provide the VPC that you have just created in which of the availability zones just pick up both the

3:00:18

availability zones no problem and it should be with the public subnet right so change to the public subnet even if

3:00:24

you put that in a private subnet AWS will give you an error so put both the subnets both the availability zones and

3:00:31

put the public uh subnet range now the security group uh you can

3:00:37

select any Security Group does not matter like you know or you can create a new security group as well what you are

3:00:43

trying to do in a security group is for the load balancer are you allowing all the traffic or not or in the VPC where

3:00:50

the load balancer is there are you providing access where in the security group you can Define okay open port 80

3:00:56

open port 8080 whatever it is so whatever I attached here is the default VPC you can remove this one uh the VPC

3:01:04

for AWS prod example and launch wizard so if it does not work what we can do is

3:01:09

we can create another Security Group and we can attach that another Security Group here so that what will happen is

3:01:17

load balancer which is listening on Port 880 should be accessed from the internet

3:01:22

what is this Security Group doing it is allowing SSH traffic and Port 8,000 traffic what is this doing uh I'm not

3:01:29

sure I need to look into this Security Group so let me remove this as well for now just add this one and if it does not

3:01:35

work I'll go to the security group and add Port 80 as well listeners and routing okay so you

3:01:42

need to create a Target group where you will Define which instance should be

3:01:48

accessible so create a Target group first just like launch template firstly we'll create a Target group and uh what

3:01:55

is the target group ec2 instances so which E2 instances do you want to access

3:02:01

Target group name just provide AWS prodad

3:02:08

example perfect and uh what you're trying to do is you are trying to use the HTTP protocol only to the instances

3:02:16

this is the VPC perfect heal check HTTP perfect move to the next

3:02:22

tab select the instances this is one instance and this is the other instance one instance has the application other

3:02:28

instance does not have the application but it is perfect for the demo later you can also add the instance uh add the

3:02:36

application to that instance and see that the traffic is Flowing you can try different things in one you can say hi

3:02:41

this is abishek in one you can say hi this is vamala and see how the load balancing is happening

3:02:50

targets perfect include as spending now create

3:02:56

Target group okay so if you have noticed here

3:03:03

what I'm trying to do is I have misconfigured I said that the target group on Port 80 so I need to just go

3:03:10

back there is no problem go back to your application and just change the port 80

3:03:15

right so the application that is running I can just simply go here and run the application on Port 80 the reason is

3:03:22

that I have misconfigured or just keep it like this and create the target group

3:03:27

just modify the target group this is the one right so what you will do is go back

3:03:33

to the Target group and here where you have option for

3:03:39

Targets this is the port I'm saying on Port 80 but actually the port is 8080 so

3:03:44

let me delete the target group no problem and recreate create Target group instances let me do

3:03:52

it very fast Target group name AWS Brad

3:03:58

example just say put 8,000 where I'm trying to

3:04:07

access http1 VPC fraud VPC health check is

3:04:15

fine these are the instances which I'm trying to access on Port 8,000 perfect

3:04:21

click on create Target group oh sorry just include as spending

3:04:27

below and click on the create Target group now the target group is getting

3:04:33

created so just wait uh for one minute here as well and what is this target group doing basically it has two E2

3:04:40

instances which it is uh verifying on Port 8,000 now I'll just go back and add

3:04:46

this target group to the load balance answer you might not find it at this

3:04:51

point of time just wait for a minute or do the configuration one more time okay go to the load balancers

3:04:58

create load balancer go to application load balancer create AWS prod

3:05:06

example internet facing yes click on the VPC prad

3:05:12

example both the subnets and both the subnets using the public thing right and

3:05:19

then the security groups like I told you firstly let let me put one Security Group if it does not work I know what to

3:05:25

do uh because I'm accessing the load balancer on Port 80 I can simply open the port 80 in the security

3:05:31

group because I'm accessing the load balancer on Port 80 Brad example perfect or I can access

3:05:39

the load balancer on Port 8,000 because I know this particular Security Group is exposing Port 8,000 but okay for the

3:05:46

purpose of video uh just to show you how this thing exactly work I'll just use the port 80 which is

3:05:53

default addon Services load balancer tags you have used the uh Target group

3:05:59

as well everything is looking fine create the load

3:06:04

balancer load balancer is created view the load balancer it will take again a minute so wait for a minute here for the

3:06:11

load balancer to provision and once the load balancer is provisioned let's try to access it from the outside world the

3:06:18

expectation is when you access the load balancer from outside world you should see that load balancer gives you a

3:06:24

response of the

3:06:30

application so let's wait for a minute

3:06:38

here so now the load balancer is in active state right so all the configuration is created at this point

3:06:44

of time and what I've done intentionally I did not create application in one of the uh servers right but all the other

3:06:52

configuration is completely created I have load balancer internet gateway public private all the things are

3:06:57

available now let me go back to the load balancer and try to access the load balancer you will see that the load

3:07:03

balancer is not accessible because the subnet that you have attached to the load balancer does not expose Port 80

3:07:10

I've already told you so let's see that in practice so even if you go to the load balancer you'll notice an error so

3:07:16

just scroll down down you will see that okay it says that the port 80 is not reachable why just click on this you it

3:07:24

will say security groups for your load balancer don't allow traffic on the listener Port so what you need to do is

3:07:31

either go to the security group so this is a security group right click on this Security Group open

3:07:38

it and allow the HTTP traffic on it how do you do that just go to the inborn

3:07:43

traffic rules edit inborn traffic rule add a new rule called

3:07:51

HTTP open port 80 perfect anywhere from the Internet is fine save

3:07:58

rules after a while once this configuration is reflected you should see this error will disappear what is

3:08:05

this error The Listener where you'll see this should disappear okay so it might take a

3:08:11

minute perfect now it is reflected now let us access this particular IP address

3:08:18

from the internet and see if I'm able to access the my first AWS project to

3:08:23

demonstrate app in private subnet congratulations you have implemented your first AWS project and you have

3:08:31

demonstrated a very complicated project the project that is used by most of the

3:08:37

engineers as devops I mean most of the devops engineers in their organizations we have implemented this entire concept

3:08:44

again like I told you I have intentionally not deployed in one of the instances so sometimes you'll get an

3:08:50

error okay so if you see here carefully what is happening is the page is not

3:08:56

getting reflected let me do it in two different types okay so Okay the reason

3:09:01

why it is going is uh there is a target group here uh which is actively monitoring the healthy Parts uh so for

3:09:08

example this is a target group right so what is happening here this target Group which I've have created has

3:09:15

a heal check okay and it is only forwarding the traffic to the healthiest

3:09:21

ec2 instance so one is healthy and one is unhealthy so what is happening is the load is always going to the healthiest

3:09:28

ec2 instance okay so in future videos I'll show you don't worry where I will

3:09:33

configure this heal check in a way where it should send irrespective of the heal check like you know you can disable this

3:09:39

heal check and send that uh send traffic to the both is instances but for now

3:09:44

perfect you don't have to bother about it the project is demonstrated and what you can do to see the load balancing

3:09:50

concept is go to the other E2 instance right so we have created two E2 instances right in one of the E2

3:09:56

instance I created python application saying this is my first AWS project go

3:10:02

to the other E2 instance in the same way that I've explained and call this as this is my second AWS project okay

3:10:10

deploy the application deploy the HTML page with my second AWS project and now

3:10:16

when you hit the load balancer once you should see my first AWS project and second time when you hit you should see

3:10:22

my second AWS project okay because that time both your E2 instances will be in a healthy State and Target groups will

3:10:29

forward one request to one E2 instance other request to other E2 instance so this is your assignment try to do it and

3:10:35

let me know in the comment section if you were able to perform the assignment or not thank you so much we'll meet in

3:10:41

one more interesting episode of AWS in episode 8 thank you so much see you take

3:10:47

care bye

English (auto-generated)

All

From Abhishek.Veeramalla

Cloud computing

Learning

Related

Recently uploaded

Watched




### Actual file 



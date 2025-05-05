#space/kubernetes/35-day

### Transcript


hello everyone my name is Abhishek and welcome back to my channel so today we are at day 35 of our complete devops

course and in this class we will try to learn about kubernetes services so service is very critical component of

kubernetes so in like like I told you in production scenarios we don't deploy a

pod but we usually deploy a deployment right so this is what we learned in the last class so this is our learning from

the last class similarly once you deploy a deployment for each deployment most of

the times you will create a service in the world of kubernetes so why will we create this service and what is the

importance of service let's try to understand in today's class okay so before we learn every anything what we

usually do is we'll try to learn the why aspect of it right why do we need a service in

kubernetes and what happens if there is no service in kubernetes okay so let's talk about the scenarios of no service

okay so now everything that I am going to talk about is assuming that what if

there is no concept of services in kubernetes okay so what will happen so

what will happen usually like our previous classes what a developer or devops engineer would do he will deploy

his pod as a deployment in kubernetes right and what that pod will do what the deployment would do it would create a

replica set and what replicas it would do it would create a pod if the Pod count is one it would create

a single pod or if the replicas are multiple then it would create multiple replicas let's say we have

the requirement of creating three replicas okay so assume this is replica one

replica 2 and replica three why do we need multiple replicas of a

pod for a general understanding let's say there is one user then in such cases you don't need it but let's say there

are 10 concurrent users concurrent is people trying to use same time like for example uh you and me might use WhatsApp

at the same time so like similarly there can be some thousands of users who are

trying to access WhatsApp uh at the same point of time so if every request is going to only one particular pod then

this pod will go down because it is getting too much of load so that's why what you usually do is you create

multiple replicas and the number of count of replicas depend upon the number of users trying to access your

applications and also number of connections one particular pod can take

okay so if somebody assume what is the ideal pod size or what is the ideal pod

count what will you say is it depends upon the number of concurrent users and number of users or the number of

requests one replica of your pod can I mean one replica of your application can handle so if one replica of your

application can handle 10 requests at one time and if you have 100 requests that are coming in then you have to

create 10 parts okay so you have to take this decision as a devops engineer as developers you have to sit together and

you have to take this decision okay now if we don't deviate let's say there are

three parts okay and now for these three parts the problem is that let's say one of this pod has gone down for some

reason okay there is some Network issuer in in the world of kubernetes in the world of containers a part going down or

a container going down is very common but what is the advantage of kubernetes is because of its Auto healing

capability okay so why we move towards kubernetes is because kubernetes has

this Auto healing capability containers are ephemeral so if the containers die they do not come up similarly if a part

goes down it will not come up automatically unless you have the auto healing behavior that is implemented by

the deployment in kubernetes or the replica set controller in kubernetes right so

sorry so now let's say you have the auto healing in place so what happens as soon

as this pod has gone down what will this uh replica set say don't worry I am here

let me create one more copy and this copy will be created even before the actual one is deleted or parallel it

happens okay so I have this one back but the problem is

that when this one comes up let's say previously the IP addresses were 172.16.3.4 3.5 and 3.6 I mean 172 3.4.5

something like that and next time when it came up the IP address will change previously if it is 170.16.3.4

when it comes up this time it might be 17.16.3.8 so what happened is okay the application

came up but the IP address of the application has changed and now we are talking about the scenario where there

is no Services Concept in kubernetes so what will happen is your application IP addresses you have

to share with your test team you have to share with your other project who is using these applications or thought as

third party applications or something what they usually do is they'll try to access this application let's say there

are three teams who are trying to access this application or three people who are trying to access this application what you said for user number one this is the

IP address user number two this is the IP address user number three this is the IP address so as a devops engineer you

thought I created a deployment which created a replica set which created three replicas of PODS and there are

three users so parallely also if they try to use my applications are accessible because I created three

replicas of the pods and for one person I said 170 to 16 3.4 for one person or

other team you said 172 16 3.5 and for the others you said 170 to 16 3.6 so you

are in an assumption that everything is right but now what has happened even though you have the auto healing

capability of kubernetes because the IP address has changed so this is part one

part two and part three but the IP address is new 172 16.3.8

so this user one or the project one let's say there are 10 people in Project one who are trying to test this

application what they said is your application is not reachable or your application is not working but as a

devops engineer what are you arguing no no my application is there I can see my application you are doing something

wrong end of the day you realized that after debugging he is trying to send request

to 172.16.3.4 but the IP address of your application is 170 to 16 3.8

so neither he is wrong nor he nor you are wrong because you have implemented

Auto healing and he said that I have used the same IP address that you that you gave so this is the problem and even

if you look at the real world okay so the real world will never work like this let's say all of us use

google.com on a day-to-day basis okay will Google ever tell you that try

to access my application on a IP address called 100.64.2.7 and for let's say there is

another user Google will say Okay access me on 172.16.3.9 so let's say Google has 100

replicas now Google will never tell you that 1 million user access on this port this particular IP address another

million people access on this specific IP address that doesn't work like that so what is the concept here the concept

is Google does a load balancing okay and

even I told you when I introduce you all to kubernetes so that there is a concept called load balancing in kubernetes okay

and I'll teach you later so what you will tell this user project one is okay

do not access using this IP addresses what you will do is I will create like

you know you created a deployment for this you will tell them that on top of this I

will create something called as a service the shortcut for service is SVC okay so

I will create something called as service and what you do is instead of accessing these specific things okay

directly try to access the service okay so what now the user project one team

does is instead of accessing the 172.16.3.4 let's say there are three

replicas let's write all the IP addresses 172.16.3.5 and

172.16.3.6 let's say these are the three IP addresses that you got from kubernetes clusters and then there are

three projects one is user project one then user project 2

then user project 3. previously you were giving them this IP

addresses and you are asking them to access the application using the IP addresses but what was going wrong when

the Pod was going down you have the auto healing Behavior but the problem is that the auto healing behavior when it spins

up to Newport the IP address was changed from 170 to 16 3.4 to 3.8 this can

happen to this specific pod as well and this can happen to the specific Port as well so what you will do is instead of

this Behavior instead of giving them each and every IP addresses

you can simply change this Behavior by creating a service on top of the

deployment so if you say that this is a deployment that has created three parts using a

replica set on top of this you will create something called as a service okay

and what this service does is it acts as a load balancer

how does it access a load balancer it uses a component in kubernetes that is called as Q proxy

now let's quickly not go into it because you will get confused for now let's assume that service is doing it ignore

about Q proxy for now okay so what service is offering is load balancing and you will tell these three user

projects that instead of accessing the IP address and this IP address can change very frequently so what you will

do is access me using the service name so what these people will do or what

this development teams will do instead of accessing the payments applications

on the specific IP addresses they will say payment

Dot default dot SVC okay so let's say this is the

name of the service that kubernetes provided as soon as you create a service what kubernetes does is if this is your

name of the service this is the namespace and this is dot SVC so kubernetes will give you something like this and you can tell them that okay you

can access my applications on this specific IP address that is the service IP address or the load balancing IP

address so these people will try to access these applications on the same IP address okay so everybody will use the

same IP address underlying what this load balancer what this service using Q proxy will do is it will forward the

request let's say 10 requests are coming from here 10 requests are coming from here 10 requests are coming from here it will just say okay send 10 request here

send 10 request here and send 10 request here so this is one problem without service you would have faced okay so if

there were no Services Concept in kubernetes you would fail terribly even implementing the auto healing capability

even you have deployments and pods your applications you will not work for certain people when the application goes

down it comes up with a new IP address so there is a problem and who is solving this problem the problem is solved by

service so what is one point that we learned about the advantage of service that is load balancing

now you should immediately get a question from the previous explanation that I just uh you know that I just

showed you you should get a question that okay Abhishek let's go back to the diagram once I got it out so what you

should ask is okay let's say that you gave this IP address I mean instead of IP address you gave this URL to them so

you know service should also face the same problem right because if user one

project was not able to reach this specific pod because the IP address URL

has changed right from 3.4 it has changed to 3.8 now a service what is it

actually doing it is just taking the request from this user and it is forwarding the request but even the

service should face the same problem because the IP address has changed the service should be sending the request to

170 to 16 3.4 but the new IP address is 172 16 3.8

right so you must ask me a question that okay Abhishek even the 10 requests that service has sent to 170 to 16 3.4 would

fail and again the problem is same user project one who is trying to access this pod using the service would fail

terribly right because there is no traffic so this is another problem that service

solve that is called as Discovery okay so what is it called the second advantage that you get using service is

service discovery so what service says is

okay I understood the problem that if I am if I am keeping a track of a

deployment okay let's say this is service service is keeping a track of deployment and which is creating three

parts for example and if one of these IP address is

changed let's say this IP address has changed if service also follows the same problem

of keeping a track of IP address the problem is not solved at all so what service said is okay I'll not bother

about IP address at all okay I will come up with a new process which

is called as labels and selectors

okay so how service does a service Discovery unlike the previous example

that I showed you unlike manually keeping track of IP addresses which can change any number of times okay and even

if there are two to three parts let's say service can keep track of IP addresses what if there are thousand

Parts this can happen like companies like Google they might have a thousand Parts okay I'm just giving an example

or they can have some 50 to 60 parts so if service manually keeps track of

all the IP addresses then this problem will arrive so that's why what service said is I'll introduce a new mechanism

called labels and selectors okay and what this labels and selectors will do is okay for every pod that is getting

created devops Engineers or developers what they will do is they will apply a

label okay so this label will be common for all the pods let's say this is payments right so you

can create a label for each of these parts called payment now what service says is I'll not bother

about IP address I will only watch for the pods with this specific label called payment okay so this can go down 100

times or this can go down thousand times I don't bother about it because I'm only watching about label so next time if if

this goes down and this can come up with an Uber new IP address but the label will remain the same why will label

remain the same because the replica set controller what it will do is it will deploy a new part with the same yaml

that it got right that is water healing so if a service is keeping track of your

pods using labels instead of IP address and the label is always the same the

problem is solved so this is the service Discovery

mechanism of kubernetes service so how kubernetes service will do a service mechanism using labels and selectors

okay so this is why kubernetes service concept is Advanced okay why kubernetes

service has a very good service Discovery mechanism is because of the concept that it uses which is called as

labels and selectors right I hope you got this answer let's go back to the previous slide to make it even clearer

so what service will do is okay I'll draw a new diagram probably

so the end mechanism would be you create a deployment okay so this is your deployment

and how do you create a deployment basically you create a yaml manifest right so let's say you created yaml

manifest what as a devops engineer you will do is whenever you create this deployment okay so you provide all the

specification that is required and all of the things along with that inside your metadata okay metadata of your

deployment you create something called as a label label is just a tag you can just say

app payment for example so now what this deployment will do it

will create a replica set and what this replica set will do let's say there are two replicas it will

create pod one and this is part 2 and for both the pods

it will have a label like a pod if you just do Cube CTL edit pod you can see the Pod right or you can do Cube serial

describe pod and you can you can see the Pod so what you will see is for this part there is a label called

app payment similarly there is also a label here called

app payment perfect so let's say this service has

gone down I might be repeating this multiple times but this is very important let's say

this part has gone down so the IP address will change but what will replica set say okay I have the yaml

Manifest and according to the yaml Manifest the Pod has to be created with this specific label so even if this is

going down 100 times 100 times it will come up with the same labels and selector now what

we will do from today's learning is we will create a service right because service offers a load balancing that is

required along with that what service is also doing is instead of looking at

looking or keeping track of IP addresses it will keep track of this label so whenever a new pod is created let's say

you increase the replica from two to three also so again a new pod will be created with label app

payment so service will understand oh okay there is a new pod so I have to keep track of this as well so this is

how service maintains a service Discovery process

so this is very important if interviewers are asking you you should be able to answer this okay so this is

the concept of labels and selectors perfect first one we learned is load

balancing second one we learned is about service Discovery let's learn about the third thing

so the third thing and the other important thing what a service can do is

any guesses what a service can do apart from this is it can also expose to

external world

now what is this another thing that I am going to talk about don't worry we will

do practicals and we will do demos of each and everything so even if in case in today's Theory you are understanding

few things and you are waiting for the demo don't worry in tomorrow's class we will do a detailed demo of service okay so I just don't want to hurry up in the

theory and move on to the demo part because practicals are as equal as your theory so if you understand Theory very

well then practicals you will able to understand very easy so we talked about two things if we see here I explained

already two things and I hope these two things are clear load balancing and service Discovery now the third thing is

exposing your application to the world what is this so yesterday's class what

we have seen is whenever we are creating a deployment right

the Pod that got created what has happened to this part this pod

came up with an IP address 172 16 3.4 okay whether you are accessing this you

know uh directly by sshing into the mini Cube or you have

created a your kubernetes cluster and you have SSH to the master or any worker node what is actually happening is

Whoever has access to this kubernetes cluster right it can be mini Cube it can be cops

it can be eks anything so whoever has access to this they can log into the kubernetes cluster and they can hit the

application but this is not a real world scenario right so you cannot ask your customer that okay SSH to my machine

login to kubernetes and access my application on this IP address will Google ever tell you this complicated

process so google.com you are anywhere in the world you don't require SSH or you don't

require anything you directly access your application on https.google.com right so this is what

you try to do so this is something that kubernetes cannot offer you directly by using

deployments so deployments can create a report and a user can SSH onto your kubernetes cluster then SSH into uh

probably Master node worker node and they can you know access the application but for end users somewhere your user

might be sitting in you know somewhere in Italy or he might be sitting somewhere in Austria now you cannot tell

him that okay you cannot have access to my application directly because you are not in my network firstly you have to

come to my network use VPN you cannot say all of these things right so what service will do additionally

is a service can expose your application okay so by Expose your application if

service can allow your application to access outside the kubernetes cluster right

outside the K8 cluster so how service will do it is basically whenever you are

taking a kubernetes service you are provided with three options okay we will see that in life don't worry like I'm

telling you whenever you are creating a kubernetes service resource in the ml manifest what you can say is you can

create this service of three types type 1

cluster IP type 2 you can create it as a node Port

mode type 3 you can create it as a load

balancer there are other types as well headless service and all I'm not talking about all of those things okay so these are

the default types so cluster IP node port and load balancing so what happens is if you create this

service using a cluster IP mode any service so this will be a by default

Behavior so your application will still be only accessed inside the kubernetes cluster

nothing will change for you only if you create a service with this cluster IP mode what happens is you will get the

two benefits that we talked till now that is Discovery and load balancing

okay what are you getting Discovery and load balancing but if you create service of type node Port mode

then what service will do is it will allow your application to be accessed inside

your organization okay so anybody within your organization or anybody within your

network who is not you know uh technically they might not have access to the kubernetes cluster but they have

access to your worker node IP addresses okay so if I have to just put it in a

very simple way Whoever has access to your notes load IP addresses only they can access the application if you create

your service as type node Port mode okay and finally load balancer type so what is load

balancer type so load balancer type is basically your service will expose your

application to external world let's say you have deployed this uh you

know everything on a eks kubernetes cluster so if you are creating a service of load balancer type then you will get

a elastic load balancer IP address for your specific service and whoever is

trying to access you know they can use this elastic any anywhere in the world because this is a public IP address

right so they can access using the public IP address

got it so like I was telling you previously payments Dot

default dot SVC so this is your you know uh

the service name or this is your this is where your service gets resolved but

when you create a service as uh you know external world or load balancer

service type of mode load balancer then if it is on any cloud provider then depending upon the cloud provider

implementation this load balancer will only work on cloud providers okay so if you are trying to do it on your mini

Cube or if you are trying to do it by default it will not work okay so there is a project which is trying to get this

work on the mini Cube as well but for now let's not go into the details if you try to do by default on minicube or any

local kubernetes clusters the service type load balancer will not work so what is the solution there that we will learn

in future classes there where we will learn about ingresses okay but

if you create load balancer service type then that means to say on your Cloud on your cloud provider there will be a

elastic load balancer IP address that will be created which is the public IP address using which you can access your

application okay if you create it as a node Port mode then you can access within your Whoever has access to your

AWS or whoever has access to your node inside the AWS they can access your

application cluster IP nobody can access whoever just has access to kubernetes

can access this thing now I'll explain everything in one simple diagram so that you will understand it in a much clearer

way so let's say

this is your entire kubernetes cluster

what you have done is you created a deployment

replica set pod all of these things is inside a node

okay let me this is part okay now let's assume all of this is inside a node

this is worker Node 1 for example

this is your kubernetes cluster which has assumed two to three nodes okay but for easy understanding I did not draw

all of them now there is a customer okay so what you will do is on top of this

like I told you you will create something called as a service so service will watch further part now

let's try to understand the customer's flow or let's try to understand the user flow depending upon the type of service

if you create this service as a cluster IP service

this is case one you have created this as a cluster IP so what will this

service do is if you create this using a cluster IP mode then this service will say okay don't worry about anything the

application should be accessed only for the people who has access to this kubernetes cluster so there is a customer or there is a user who is

trying to access this application he is sitting out of outside your organization okay so let's say this is public

and this is your organization something like you are using your home

Wi-Fi and he is using his home Wi-Fi very easy understanding okay so this is

public and this is your organization so he tries to reach but you know he cannot reach uh this specific thing let's say

he has access to the organization as well he cannot reach the application because the problem is the application

is sitting somewhere here and he do not have access to this specific time right so that is not

practically possible now let's say you have created a load balancer type service

what will happen is the service that got created it will say the if you assume

this cluster is on AWS it will notify AWS that oh I mean kubernetes API server

will notify AWS that okay eks I have a service of type load balancer

mode so can you give me a elastic load balancer IP address okay which means a public IP address

and which component of kubernetes is doing it there is a component in kubernetes that we learned that is

called as Cloud control manager right this is part of your kubernetes

master node what is this component kubernetes Cloud control manager so the cloud control manager will generate a

public IP address using the AWS implementation and it will return a public IP address and now what we what

pod will I mean what service will do is it will say whoever wants to access these pods you can access using a public

IP address okay so this is the public IP address so this public IP address by the

name itself it's public so that anyone who has access to Internet you just need to have access to Internet

so user who has access to Internet can access the application because the service type is load balancer

finally you have something called as node Port mode so when you create a service of node

Port mode then whoever has access like this is the public right or this is the user now he only has access to public

internet or he only has access to resources in the internet but what a

service type node Port will do is it will say that okay what I will do is instead of allowing only people who has

access to kubernetes Cluster what I'll do is I will say because the services of type node Port

mode I can allow access to people who has access to this worker Node 1 or

worker node 2 or worker node 3. okay so whoever can access the worker node IP addresses like like let's say these

worker nodes are easy to instances okay so whoever has access to the ec2 instance IP addresses they can access me

okay so the first case is if you create a load balancer type then anybody in the world can access it if you create a node

Port type mode then anybody who has access to worker nodes or the ec2 instances traffic or the VPC traffic

they can have access to the pods or the applications and in the third case that

is cluster IP mode then nobody has access to it even if you have access to the VPC even if you have access to the

ec2 instance only if you can log into this kubernetes cluster and if you have access to the network inside the

kubernetes cluster that is you have access to the container Network or you have access to flannel Calico whatever

you have configured only they can access this okay so these are the three things this is how a kubernetes service works

so what are the three advantages if you go back so the First Advantage that kubernetes

service offers you is load balancing second advantage that kubernetes service offers you is service Discovery third

Advantage is exposing the applications to the world so I explained each and everything using

examples and I hope you understood it like understand right from here if you have not understood the video go back to

this specific slide where I have explained what happens if you don't have a service in kubernetes watch the video

one more time you have the auto healing capability the deployment is giving you why you need a kubernetes service I

clearly explained here that is the IP address will get changed whenever a container comes up if you know you have

configured order healing so a new part comes up but the IP address has changed so you need a discovery mechanism and

you know to manage the traffic between the pods you need a load balancing mechanism similarly if you want to make these

applications available to Internet available to specific people in your organization like probably you want

everybody in the world to access this application if it is a open source application or if it is application that

you want everybody to access okay so for example best example is amazon.com

okay so here if we go back to this slide when will you choose cluster IP mode

when will you choose node Port mode and when will you choose load balancer one for example

amazon.com let's say we are working for Amazon okay and if as a devops engineer

if you have to understand services in a very simple words if you are working for amazon.com what

you will do is you will create a service of type load balancer this is just example guys okay so that

anybody in the world can access amazon.com okay there is one application let's say that is called amazon.com so

if you create a service of type load balancer then everybody in the world can access this

if you create so amazon.com is a load balancer don't get confused I'm just giving it as an example if you want

people inside your organization or people who have access to your VPC your nodes right only those people to access

then you will create service of type node Port mode if you want only devops Engineers or you

know if you want only people who have access to your kubernetes cluster Network

then you will create cluster IP mode take this as an assignment try to write

few lines try to see you know if you understood the concept well try to draw a diagram for this and you know post it

on your LinkedIn post it on your GitHub so you know this is how you can correct your understanding or you know

you can see if your understanding is right or wrong I hope you enjoyed the video if you like the video click on the

like button if you have any questions put that questions on the comment section also if you have any feedback share that with me finally don't forget

to subscribe my channel and share this with your friends and colleagues thank you so much I'll see you in the next

video take care everyone bye

English (auto-generated)

### Next



### **Kubernetes Interview Questions (Part 1) – Day 36 Notes**  
**By Abhishek**  

---

#### **1. Docker vs. Kubernetes**
?
**Docker**:
- Container platform (single-node).
- No built-in auto-healing/scaling.
- Limited to basic networking/storage.
**Kubernetes**:
- Container **orchestration** platform (multi-node cluster).
- **Auto-healing**: Restarts failed pods.
- **Auto-scaling**: Adjusts replicas based on load.
- **Enterprise features**: Advanced networking (Ingress, CNI plugins), RBAC, custom controllers (CRDs).
> *Key Point*: Kubernetes manages ephemeral containers at scale.
<!--SR:!2025-05-08,3,230-->

---

#### **2. Kubernetes Architecture Components**
?
- ![[Pasted image 20250420101754.png]]
<!--SR:!2025-05-08,3,230-->

| **Control Plane (Master)** | **Data Plane (Worker Nodes)** |  
|----------------------------|-------------------------------|  
| **API Server**: Entry point for all requests. | **kubelet**: Manages pod lifecycle (restarts, health checks). |  
| **Scheduler**: Assigns pods to nodes. | **kube-proxy**: Handles networking (IP tables, load balancing). |  
| **etcd**: Key-value store for cluster state. | **Container Runtime**: Runs containers (Docker, containerd, CRI-O). |  
| **Controller Manager**: Manages built-in controllers (e.g., ReplicaSet). |   |  
| **Cloud Controller Manager**: Integrates with cloud providers (e.g., AWS LB creation). |   |  

---

#### **3. Docker Swarm vs. Kubernetes**
?
- ![[Pasted image 20250420101740.png]]
-
<!--SR:!2025-05-08,3,230-->

| **Feature**       | **Docker Swarm**               | **Kubernetes**                |  
|-------------------|--------------------------------|-------------------------------|  
| **Complexity**    | Simple setup                  | Complex but flexible          |  
| **Scalability**   | Best for small-scale apps     | Enterprise-grade scaling      |  
| **Ecosystem**     | Limited third-party support   | Rich ecosystem (CNCF, Helm)   |  
| **Networking**    | Basic                        | Advanced (Calico, Flannel)    |  

> *Key Point*: Kubernetes is the industry standard for large-scale deployments.  

---

#### **4. Pod vs. Docker Container**
?
- **Pod**:
  - Kubernetes’ smallest deployable unit.
  - Wraps **one or more containers** (shared networking/storage).
  - Defined declaratively via YAML (vs. `docker run` commands).
- **Container**:
  - Standalone runtime instance (Docker).
> *Example*:
```yaml
> apiVersion: v1
> kind: Pod
> metadata:
>   name: nginx-pod
> spec:
>   containers:
>   - name: nginx
>     image: nginx:1.14.2
>     ports:
>     - containerPort: 80
```
<!--SR:!2025-05-08,3,230-->

---

#### **5. Namespaces in Kubernetes**
?
- **Purpose**: Logical isolation for multi-team/project environments.
- **Use Cases**:
  - Separate dev/stage/prod environments.
  - RBAC (Role-Based Access Control) for teams.
- **Commands**:
  - `kubectl get namespaces`
  - `kubectl create namespace <name>`
> *Key Point*: Namespaces prevent resource collisions (e.g., two teams deploying `app-v1`).
<!--SR:!2025-05-08,3,230-->

---

#### **6. kube-proxy Role**
?
- Manages **networking rules** on worker nodes.
- Uses **IP tables** (default) or **IPVS** to route traffic:
  - Routes requests to pods (e.g., NodePort: `node-ip:port` → pod).
  - Enables Service types: `ClusterIP`, `NodePort`, `LoadBalancer`.
<!--SR:!2025-05-06,1,190-->

---

#### **7. Kubernetes Service Types**
?
- ![[Pasted image 20250420101728.png]]
<!--SR:!2025-05-08,3,230-->

| **Type**         | **Description**                              | **Use Case**                  |  
|------------------|---------------------------------------------|-------------------------------|  
| **ClusterIP**    | Internal IP (accessible within cluster).   | Inter-pod communication.      |  
| **NodePort**     | Exposes app on `node-ip:port`.             | External access (dev/testing).|  
| **LoadBalancer** | Cloud-provided external IP (e.g., AWS ELB).| Production apps.              |  

> *Key Point*: `LoadBalancer` integrates with cloud providers via **Cloud Controller Manager**.  

---

#### **8. kubelet Role**
?
- **Primary Responsibility**: Ensures pods are running on worker nodes.
- **Actions**:
  - Monitors pod health.
  - Restarts failed pods (auto-healing).
  - Reports pod status to API server.
<!--SR:!2025-05-06,1,190-->

---

#### **9. Day-to-Day Kubernetes Tasks**
?
1. **Cluster Maintenance**:
   - Upgrading nodes, patching security vulnerabilities.
2. **Application Deployment**:
   - Managing deployments, rollbacks, scaling.
3. **Troubleshooting**:
   - Debugging pods (`kubectl logs`, `kubectl describe`).
   - Fixing networking issues (Services, Ingress).
4. **Monitoring**:
   - Setting up Prometheus/Grafana for cluster health.
5. **RBAC/Namespace Management**:
   - Configuring access controls for teams.
> *Interview Tip*: Emphasize **problem-solving** (e.g., "I resolved a pod crash-loop by analyzing logs").
<!--SR:!2025-05-08,3,230-->

---

#### **10. Key Commands Cheat Sheet**
?
- ![[Pasted image 20250420101912.png]]
-
<!--SR:!2025-05-08,3,230-->
  
  
  
  

| **Command**                          | **Purpose**                          |  
|--------------------------------------|--------------------------------------|  
| `kubectl get pods -o wide`           | List pods with details.              |  
| `kubectl describe pod <name>`        | Debug pod issues.                    |  
| `kubectl logs <pod-name>`            | View pod logs.                       |  
| `kubectl create -f pod.yaml`         | Deploy a pod from YAML.              |  
| `kubectl delete pod <name>`          | Delete a pod.                        |  

---

#### **Assignment**  
1. Practice answering these questions aloud (mock interview).  
2. Deploy a pod with a custom app (e.g., Python/Go) and expose it via `NodePort`.  
3. Post your learnings on LinkedIn: *"Today I aced Kubernetes interview questions! Key takeaways: [summary]."*  

**Next Video**: Kubernetes Ingress & Practical Services!  

--- 

**Key Takeaways**:  
- Kubernetes > Docker for scaling/enterprise needs.  
- Master: API Server, etcd, Scheduler. Worker: kubelet, kube-proxy.  
- Services: `ClusterIP` (internal), `NodePort` (dev), `LoadBalancer` (prod).  
- **Always** relate answers to real-world scenarios (e.g., auto-healing in production).  

👉 **Like/Share if this helped!** 🚀


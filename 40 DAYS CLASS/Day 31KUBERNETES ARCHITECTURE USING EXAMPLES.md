
#space/kubernetes/31-day




# Transcript


hello everyone my name is Abhishek and

welcome back to my channel so today we

are at day 31 of our free devops course

and in this video I'll be talking about

the kubernetes architecture

so before we jump on to the topic for

today let me start with a very lighter

note question why kubernetes is called

as k8s so everybody knows that

kubernetes in short is called as K8 but

to just start with a very uh fun

question let's see how many people can

answer this question why kubernetes is

actually called as k8s so this is not at

all an interview question so I'm just

trying to you know start with a very uh

simple question because we are going to

deal with a very complicated concept

okay so let's try to understand the

architecture of kubernetes but before

that if you know the answer definitely

put that in the comment section

## Docker vs Kubernetes

so coming to the architecture of

kubernetes firstly you should understand

the difference between Docker and

kubernetes so that is the same thing

that we try to understand on day 30. so

if you haven't watched our previous

video that is day 30 I'll highly

recommend you to watch that previous

video and then come back to the video

for today that is architecture of

kubernetes the reason why I'm telling

you is if you don't understand what a

Docker platform or what a container

platform offers and what is the reason

why we need to evolve to a container

orchestration platform you will never

understand the reason for container

architecture or you know sorry

kubernetes architecture so on a very

high level what I told you is your

kubernetes offers four fundamental

advantages over Docker that is

kubernetes is by default a cluster in

nature or cluster in Behavior then

kubernetes offer something called as

Auto healing kubernetes offer something

called as Auto scaling and finally it

offers multiple Enterprise level support

like kubernetes offers you Advanced load

balancing kubernetes offers you you know

security related things it offers you

Advanced networking so it offers you

multiple Enterprise level support which

is a major difference between Docker and

kubernetes so we understood these four

things in detail and today I am going to

explain you the architecture of

kubernetes also using this four examples

so you might ask me that Abhishek there

## Kubernetes Architecture

are hundreds of videos on internet which

explains about the kubernetes

architecture right so everybody says

that kubernetes has something called as

a control plane

and kubernetes has something called as

data plane right so this is something

that everybody explains and probably if

you have watched the previous videos or

you know if you have watched any other

video or if you have even read the

documentation of kubernetes you know

that there are multiple components in

com control plane like you know

kubernetes has uh API server kubernetes

has a component that is called as etcd

kubernetes has a component that is

called as a scheduler

then you have a controller manager and

then you have a cloud controller manager

which is called as CCM and similarly in

data plane also you have multiple

components like you know you have your

cubelet you have your Q proxy you have

your uh you know container runtime but

what exactly all of these things are so

even I can explain you that you know

these are the different components in

control plane these are the different

components in data plane and each

component does these these things but

you will never understand the

architecture of kubernetes in this way

so that's why what I am going to do is I

am going to compare this thing against

Docker so let us try to understand two

basic things in Docker the simplest

thing is container whereas in kubernetes

the simplest thing is POD so I will try

to compare both of these things and how

a container is what happens when a

container is created in Docker and what

happens when a pod is created in

kubernetes so that you will directly

understand the architecture of

kubernetes so you yourself will say what

is the advantage of each and every

component in kubernetes and why

kubernetes requires these many

components whereas in Docker you have

two to three components but in

kubernetes you have all of these

components by the end of this video you

will understand the advantage of each

and every component and why they are

actually required okay so watch this

video till the end so that you get a

clear understanding of these components

in kubernetes architecture and you will

say that kubernetes is very easy

though that is our primary goal to make

kubernetes easy

okay so let's start with creation of a

container in Docker so let's say you

have this platform okay so this is a

virtual machine on top of which you

install Docker let's say and what you

have done as a user is you have created

uh you have written a Docker file built

images I am not going there but you have

run a container using a basic command in

Docker that is Docker run okay so you

said Docker run and then you ran a

container but what is happening under

the hood so if you run a container

nothing will happen right let's say you

have installed a application let's say

you have installed a Java application

and on the platform you don't have Java

runtime

will your Java application actually run

no it will not run similarly even when

you are running a container you need to

have something called as a container

runtime

okay so without container runtime your

container will never run so in Docker

you have a container runtime component

that is called as Docker shim

so this is something that is happening

under the wooden Docker okay so now if

we move to kubernetes so kubernetes also

need to do some similar Behavior but

because kubernetes is an advanced

concept or because kubernetes provides

you Enterprise support with auto healing

Auto scaling and cluster-like behavior

what you basically do with kubernetes is

you create

a master and you create a worker

okay so for a basic example I am just

using one master and one node component

or worker component architecture so that

it will be very easy for you guys to

understand but in general there will not

be one worker there will be multiple

workers in kubernetes it doesn't mean

that you cannot create kubernetes with

one single node you can also do it but

in production always you have multiple

Masters and multiple workers but for

easy understanding let's say you have

just one master and you have just one

worker

so what happens is in kubernetes you

will not directly send the request to

worker but your request goes through

Master okay so your request always goes

through something called as a control

plane

now why you need to do this I'll explain

you or you will even understand by it

yourself so when you deploy your pod in

kubernetes the smallest level of

deployment is POD whereas in Docker you

deploy a container you can slightly

understand both of them are more or less

similar kind of things because I'll

explain the difference in detail in

tomorrow's class but for now just

understand that uh container a pod is

just like a wrapper over your container

which has some Advanced capabilities

so when user tries to deploy a part

similar to container or similar to

Docker your pod gets deployed okay let's

say your pod is getting deployed on this

this specific worker node but you have a

component in kubernetes that is called

as cubelet

so what is this cubelet doing is

basically this cubelet is responsible

for running your pod okay in Docker

basically you have a Docker engine okay

and basically you have Docker shim

okay in kubernetes you have something

called as a cubelet which is responsible

for maintaining this kubernetes pod okay

it always looks for okay if the Pod is

running or not if the Pod is not running

because kubernetes has a feature called

Auto healing I have to inform kubernetes

that okay the Pod is not running do

something so that's why kubernetes has a

component called cubelet but even if the

Pod has to run like I explained you here

there need to be something called as a

container runtime right inside a pod you

will definitely have container so for

this container to run even on kubernetes

you need to have something called as a

container runtime but the only

difference is

in kubernetes Docker is not mandatory in

Docker like I told you there is

something called as Docker shim but in

kubernetes you can either use Docker

shim you can either use container d

you can use Creo what are all these

things these are all company competition

to Docker shim okay so Docker has only

one support that is Docker shim whereas

kubernetes can support containerdy

kubernetes can support Creo kubernetes

can support Docker shim or any other

container runtimes which implements

kubernetes container interface now let's

not go into the details of it but

understand that kubernetes has a

standard call container interface if

some container runtime it can be Creo it

can be container D it can be Docker shim

if they can implement this container

interface or it can implement the

standard that kubernetes has said then

kubernetes allows you to use that

kubernetes container runtime or that

specific container runtime so what are

the two different components that we

learned we have cubelet and kubernetes

we have container runtime in kubernetes

cubelet is basically responsible for

ensuring that their pod is always

running if the Pod is not running then

kubernetes will inform uh there is a

component in kubernetes I I'll keep that

component and suspense but cubelet will

inform the specific component that okay

something has gone with the something

has gone wrong with the Pod let us

restart it or let us do something with

it so that is the responsibility of

cubelet and container runtime you

already understood now

in the previous class in one of the

previous classes I told you that in

Docker there is something called as

Docker 0 or you have a default

networking in Docker that is called as a

bridge networking

so this networking is mandatory for

running your pod even here in kubernetes

you have something called as cube proxy

so this Q proxy basically provides you

networking like every pod that you are

creating every container that you are

creating it has to be allocated with the

IP address right and it has to be

provided with a load balancing copper

capabilities because I told you

kubernetes has something called as Auto

scaling when you scale your pod instead

of one replica if you have two replicas

to your pod then there has to be a

component which says okay send 50

request here send fifty percent request

here so that is taken care by Q proxy so

we talked about three components one is

Q proxy which provides networking IP

addresses and also the load balancing

default load balancing capabilities in

kubernetes then you have cubelet which

is actually responsible for running your

application and if your application is

not running or if your pod is not

running then cubelet informs one of the

components and control plane that okay

something is going wrong and finally you

have container runtime which actually

runs your container so these are the

three components that are available on

the work or not so see you then directly

understood what are the different

components that are available in worker

node of kubernetes so

you are already done with data plane of

kubernetes or you are done with the

worker component of kubernetesk isn't it

## Kubernetes Components

easy all of you understood the

components that are in worker node

tomorrow if somebody asks you in the

interview what are the components that

are present in the worker node of

kubernetes you can directly tell them

that let me erase all of this stuff

okay so you can directly tell them that

in kubernetes worker node there are

three components and those three

components are nothing but your

let's write them so those three

components are nothing but

you have q proxy

you have

cubelet

and you have something called as

container

runtime

okay and you should be practically able

to explain the purpose of each of them

as well so that is the reason why I took

Docker as an example so that you guys

understand it so

Cube again let's repeat it cubelet is

basically responsible for creation of

the pods and it will basically ensure

that the Pod is always in the running

state if it is not then it takes the

necessary action using the uh kubernetes

control plane and then you have uh

something called as Q proxy Q proxy is

basically responsible for the networking

like generating the IP addresses or load

balancing basically it uses IP tables on

your Linux machine

okay so IP tables is a concept where you

know uh okay let's not go into the

details of Ip tables but just understand

that cubelet Q proxy uses iptable for

networking related configuration and

finally you have container runtime which

is responsible for running your

container okay so worker component is

done now let us move to control plane or

the master component of it

so this worker node or the data plane is

basically responsible for running your

application so using this three

components you have technically

everything to run your application right

so cubelet is deploying Cube proxy is

providing the networking container

runtime is providing the execution

environment for your container now why

you need actually control plane itself

so you should get this question the

reason for that is for any Enterprise

level tools or for any Enterprise level

components like I told you there are

some specific standards okay now

cluster is one specific standard like I

told you kubernetes has cluster now who

will decide that the Pod creation like

user has created a pod now who will

decide that okay should the Pod be

created on node one should the Pod be

created on node 2 or should the Pod be

created on node 3. so this is one

specific instruction but there can be

multiple instructions and there should

be a heart or there should be a core

component in your kubernetes that has to

deal with such kind of instructions okay

when multiple users are basically trying

to access your kubernetes cluster or

when multiple people are trying to uh

you know do some kind of hacking or some

kind of things so there has to be a

component in kubernetes which basically

acts as a core component of your

kubernetes and takes all the incoming

requests whether you want to in uh you

know in future you want to implement

some uh identity provided related

configuration SSO or you want to do some

security related stuff so there has to

be a core component which is basically

doing everything in kubernetes and that

core component is called as API server

and this component is present in your

master component or you can also call it

as a control plane of your kubernetes so

what is the purpose of API server so the

API server is a component that basically

exposes your kubernetes okay so this

kubernetes has to be exposed to the

external world all of these things are

basically internal to your kubernetes

the data plane all the worker nodes but

the heart of the kubernetes is your

kubernetes API server which basically

takes all the requests from external

world

now what this uh let's say the user is

trying to create a pod he tries to

access the API server and from the API

server kubernetes uh API server decides

that okay Node 1 is free but to schedule

a component on Node 1 you have a

component in kubernetes that is called

as scheduler

okay so what is the responsibility of

scheduler so scheduler is basically

responsible for scheduling your pods or

scheduling your resources on kubernetes

okay so who decides the information API

server but who acts on the information

that is AP uh sorry that is the cube

scheduler okay so what are the two

things that we have learned till now one

is API server the second thing that we

learned is scheduler so scheduler is

basically saying go and schedule this on

Node 1 or node 2. it is receiving this

information from API server

after this let's say that we are

deploying your production level

applications on this kubernetes cluster

there has to be a component inside your

kubernetes that basically acts as a

backup service or you know uh that

basically acts as a backing store of

entire cluster information okay even

when we are talking about Jenkins I told

you that backup is very essential in

kubernetes there is a component that is

called as etcd so etcd is basically a

key value store and the entire

kubernetes cluster information is stored

as objects are key value pairs inside

this etcd okay so the other component

that we learned is etcd what happens

without etcd you don't have the cluster

related information tomorrow if you want

to restore the cluster or you want to do

any information

etcd is basic component and finally you

have two more components that are

controller manager

and you have Cloud controller manager

let's put this Cloud controller manager

aside for a moment if you understand

what is a controller manager so

basically like I told you kubernetes

supports Auto scaling so to support Auto

scaling kubernetes has some components

like you know kubernetes has to

automatically detect disk and it has to

do kind of things so for that kubernetes

has basically some controllers

okay for example replica set

so replica set is basically is the one

that is maintaining state of your

kubernetes spots so tomorrow let us let

me say that one pod is not enough and I

will schedule two parts I'll Auto scale

one of my pod to two parts so there has

to be a component in kubernetes that

ensures that the two components or two

pods are actually running so that is

taken care by replica set in kubernetes

ml file if you say I require two parts

so a replica set controller basically

ensures that the two pods are always

running now there has to be a component

in kubernetes which ensures such

controllers are always running so that

component is called as controller

manager if you did not understand about

controller manager don't worry about it

in future classes when we talk about

deployments when we talk about Services

by yourself you will understand what a

controller manager is but for now just

understand that in kubernetes by default

there are multiple controllers like

electric assets and there has to be a

program or there has to be a component

which ensures that this controllers are

running that component is called as your

controller manager or that that manager

which is managing these controllers is

called as a controller manager

finally you have one component that is

## Cloud Controller Manager

called as Cloud controller manager okay

c c m

many people get confused with this

concept so that's why I thought I'll

take this as a different concept and

I'll explain you

okay so you all know that kubernetes can

be run on cloud platforms like eks

or you can also run it on AKs or you

know gke so what is happening is you are

running your kubernetes on cloud

platforms so basically This Cloud

platforms let's say you are using

elastic kubernetes surface so there is a

user request or there is a request to

create a load balancer or there is a

request to create storage

so if you directly send this information

to kubernetes so kubernetes has to

understand the underlying cloud provider

okay if kubernetes has to create a load

balancer on AWS or if kubernetes has to

create a storage service on AKs or on

Azure so kubernetes has to translate the

request from the user on to the API

request that your cloud provider

understands okay so this mechanism has

to be implemented on your Cloud control

manager that means to say let's say

tomorrow

there is a new Cloud that is implemented

called as Abhishek

okay and you want to run kubernetes on

this platform called as Abhishek okay so

you want to run kubernetes on the

platform called Abhishek now what

kubernetes tells you is that okay I

cannot write Logic for all of these

different Cloud providers I will provide

you a component called as Cloud control

manager so This Cloud controller manager

is a open source utility okay so this

code is available on GitHub tomorrow if

Abhishek creates a new cloud provider

what Abhishek can do is he can go to

this open source GitHub repository and

he can write the logic for his cloud

provider inside this Cloud controller

manager he can create a pull request to

the cloud controller manager saying that

okay so I have implemented a new cloud

and I want I want to support kubernetes

on my cloud provider so for that reason

what Abhishek has to do is he has to

write a bunch of logic and he has to

submit to Cloud controller manager so if

you are running kubernetes on on-premise

this component is not at all required or

this component does not have to be

created at all on your kubernetes

cluster so these are the various

components of your kubernetes so if you

have to sum up or if you have to just

put that in one specific slide basically

you have kubernetes divided into two

parts

one is your control plane and one is

your data plan

so if you have two worker nodes on your

two worker nodes you will have

kubernetes data plane components that

are three components one is your

cubelet second is your

Q proxy

third is your

container runtime so every kubernetes

worker node has these three components

so in some cases you will not see

container runtime in some documentations

but end of the day container runtime is

required so I consider it as also a

component okay so this is worker node

one but even on worker node 2 you will

have these three components okay one two

three every worker node will have these

components and then you have something

called as kubernetes Master which has

components like your

API server which is heart of your

kubernetes every request is received by

this API server then you have your

scheduler which schedules the resources

whether it has to go on worker Node 1

worker node 2 API server will take the

decision and scheduler will schedule on

that specific thing and then you have

something called as etcd which is

basically your data store or a key value

store which stores all the information

of your cluster and then you have

controller manager which is manager for

your kubernetes inbuilt controllers and

finally you have something called as

Cloud controller manager

okay so these are the different

components you have to explain in an

interview if your interviewer is asking

tell them that these are the components

on your kubernetes master and then these

are your components on your kubernetes

workers so this is the control plane and

this is the data plane so control plane

is the one that is controlling the

actions and data planes is the one that

is actually executing this your actions

okay I hope the concept is clear you

understood what are the master or

control plane components and what are

the worker node components so if you

want to practically try this out in even

before practically trying consider this

as an assignment that I am giving to you

so write a detailed notes okay so watch

this video and write a detailed notes

post it on your LinkedIn so that

everybody understands like when a

interviewer is trying to approach you he

understands that you know okay this guy

has the architecture knowledge on

kubernetes so post on LinkedIn saying

that okay today I understood about

kubernetes architecture these are the

different components in kubernetes and

this is of kubernetes basically works so

you know you can draw a specific diagram

like you know you can basically uh use

paint or something and tell them that

these are the different components and

kubernetes and how one component works

with connects with other component take

part creation as an example and put all

the details uh including uh you know the

diagram as well as the written part and

put that on your GitHub profile and

share that URL on the LinkedIn so that

you can create a GitHub profile and you

can also share that information on

LinkedIn so this is the assignment for

today and I hope you understood the

concept you understood each and every

component if you did not understand

something put that in the comment

section I'll definitely reply to your

comment saying that okay so you did not

understand about this thing and this is

how this component works if you like the

video click on the like button if you

have any feedback share that with me in

the comment section and don't forget to

share this video with your friends and

colleagues

so this is the video for today guys I'll

see you in the next video tomorrow where

we'll try to understand the kubernetes

Pod thank you so much for watching the

video take care everyone bye

English (auto-generated)

###




Here are structured notes based on the Kubernetes architecture video transcript:

---

# **Kubernetes Architecture Notes**  
**By Abhishek**  
*Day 31: Free DevOps Course*  

---

#### **1. Why "K8s"?**
?
- "Kubernetes" is abbreviated as **K8s** because there are **8 letters between "K" and "s"** in the word.
<!--SR:!2025-05-16,11,270-->

---

#### **2. Kubernetes vs. Docker**
?
- ![[Pasted image 20250420101408.png]]
-
<!--SR:!2025-05-08,3,230-->
  
  

| **Feature**               | **Docker**                          | **Kubernetes**                          |  
|---------------------------|-------------------------------------|-----------------------------------------|  
| **Scope**                 | Single-node container management    | Multi-node cluster orchestration       |  
| **Key Advantages**        | Lightweight, simple                | Auto-healing, Auto-scaling, Enterprise features (LB, security, networking) |  
| **Smallest Unit**         | Container                          | Pod (wrapper around containers)         |  

---

#### **3. Kubernetes Components**
?
Kubernetes is divided into two planes:
##### **A. Control Plane (Master Node)**
##### **B. Data Plane (Worker Nodes)**
<!--SR:!2025-05-08,3,230-->






##### **A. Control Plane (Master Node)**
?
1. **API Server**
   - Heart of Kubernetes.
   - Exposes Kubernetes to external requests.
   - Validates and processes all commands (e.g., pod creation).
2. **Scheduler**
   - Decides **which worker node** a pod should run on.
   - Works with API server to assign pods based on resource availability.
3. **etcd**
   - **Key-value store** backing up cluster state (e.g., pod count, node status).
   - Critical for disaster recovery.
4. **Controller Manager**
   - Manages built-in controllers (e.g., ReplicaSet) to ensure desired state (e.g., "always run 2 pods").
5. **Cloud Controller Manager (CCM)** *(Optional)*
   - Translates Kubernetes commands to cloud provider APIs (e.g., AWS EKS, Azure AKS).
   - Not needed for on-prem clusters.
<!--SR:!2025-05-06,1,190-->

##### **B. Data Plane (Worker Nodes)**
?
1. **kubelet**
   - Ensures pods are running.
   - Reports pod status to the control plane (auto-healing).
2. **kube-proxy**
   - Handles **networking** (IP allocation, load balancing via iptables).
3. **Container Runtime**
   - Runs containers inside pods (e.g., Docker, containerd, CRI-O).
   - Kubernetes supports multiple runtimes (unlike Docker, which only uses Docker Shim).
<!--SR:!2025-05-06,1,190-->

---

#### **4. How a Pod is Created**
?
1. User sends request → **API Server** (control plane).
2. **Scheduler** assigns pod to a worker node.
3. **kubelet** (on worker) creates the pod using the **container runtime**.
4. **kube-proxy** sets up networking (IP, load balancing).
5. **etcd** records the cluster state.
<!--SR:!2025-05-06,1,190-->

---

#### **5. Key Takeaways**
- Kubernetes **control plane** manages decisions; **data plane** executes them.
- **etcd** is the cluster’s "memory" (stores all state).
- **kubelet** is like Docker Engine but with auto-healing.
- **Cloud Controller Manager** is cloud-specific (e.g., AWS LB creation).
<!--SR:!2025-04-21,1,230-->

---

#### **Assignment**  
1. Draw the architecture diagram (control plane + data plane).  
2. Post detailed notes on LinkedIn/GitHub.  
3. Explain each component’s role in your own words.  

--- 

**Feedback Welcome!**  
If any part is unclear, ask in comments!  

**Next Video:** Deep dive into **Kubernetes Pods**.  

--- 

**LinkedIn Post Example:**  
*"Today I learned Kubernetes architecture! Key components: API Server, etcd, kubelet, and more. Here’s my summary: [GitHub Link]. #Kubernetes #DevOps"*  

--- 

Let me know if you'd like any section expanded! 🚀
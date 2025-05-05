#space/kubernetes/36-day

# Transcript


hello everyone my name is Abhishek and

welcome back to my channel so today we

are at Day 36 of our complete devops

course and in this class we'll be

talking about kubernetes interview

questions part one

now what is this and why I have decided

to do this video because ideally today's

class has to be on the

practical Services implementation and

introduction to Ingress but why I have

decided to do this interview questions

is like you know we have been learning

about kubernetes from past five to six

days and we have covered a lot of topics

like kubernetes architecture comparison

with Docker deployment spots containers

versus pods so we have covered some very

interesting topics and these are the

topics that interviewers will ask you uh

you know during your course of interview

so I thought to check how much concept

have you grabbed or you know how much

have you understood from the past videos

so this is a really good exercise that

we are going to do today you can

consider it as a mock interview you can

consider it as anything but what you

will do is try to answer the questions

like whenever I show you the question

number one okay firstly I'll not show

you the answer I'll just show you the

question so try to see how many are you

able to answer before I reveal the

answer okay so that you can give or you

can assess your score by yourself so if

you want you can also comment your score

below so there is no competition kind of

a thing here but the only thing is you

will understand how others are you know

taking the topics or are they practicing

the topic so that they are remembering

the concepts so that you can cancel it

as a feedback or retrospective for

yourself okay so without wasting any

time let us quickly jump on to the video

I will have 10 questions for you I mean

I have 10 questions for you and let us

see how many of you can answer how many

number of questions

so firstly the question number one

sorry for that lines I can quickly

remove them nowhere is there

so just clear the drawings here

perfect so the question number one is

what is the difference between Docker

and kubernetes so today's questions will

be scenario based questions and so here

what you need to do is try to answer

this question by yourself okay pause the

video here and try to see if you can

answer this question assume you are an

interview you are in an interview and

see if you can answer the difference

between Docker and kubernetes okay so

the answer for this would be I have also

explained this in the previous video I

think the very first class when I have

introduced you people to kubernetes in

that class itself I told you that Docker

is a container platform and kubernetes

is a container orchestration platform I

also have answers for you don't worry so

kubernetes is a container orchestration

platform and what kubernetes adds to the

docker is like you know containers are

ephemeral in nature that means to say a

containers can go down containers you

know for multiple reasons uh if a

container goes down then your

application is already down so your end

user who is trying to access your

application he will see a traffic loss

So to avoid that you can move to a

container orchestration platform

Solutions like kubernetes which will

offer you Auto healing Auto scaling

which will offer you like you know

because kubernetes is a cluster itself

like in production you can join or

combine multiple virtual machines and

create a kubernetes cluster so that even

if one of your nodes let's say Docker is

a single node platform right you install

Docker on a platform and you start your

container if that node itself goes down

for example your laptop has gone down

for some reason so your application is

not reachable but what kubernetes offers

is if one of the node goes down because

it's a cluster it will immediately move

of the Pod from that specific node to a

different node and finally it also has

many Enterprise capabilities like load

balancing it can offer integration with

custom resource definitions or you know

you can deploy any custom kubernetes

clusters controllers that are developed

by other people like for example Ingress

controllers right so there are multiple

Ingress controllers which can offer you

Advanced capabilities so in nutshell you

can extend the capabilities of

kubernetes cluster using the custom

resources as well

so this is the primary difference

between Docker and kubernetes let's say

you have not understood this one because

you are watching this video uh even what

even before watching the previous videos

and I'll highly recommend you to watch

our video I think day 31 where I

explained and compared the difference

between Docker and kubernetes so it was

complete 30 minutes class where we took

plenty enough time to understand the

comparison between Docker and kubernetes

so now if you are able to answer this

question assuming that you are an

interview you are in an interview then

yeah uh you get one Mark here okay so

question number two what are the main

components of kubernetes architecture so

this is one of the most asked interview

questions okay so you go to an any

kubernetes interview the interviewer

will definitely ask you this question

because kubernetes has a lot of

components and when I explained you in

day number 33 I guess the architecture

of kubernetes that is what I actually

like you know I took 40 minutes of time

to explain about the kubernetes

architecture because it's a very

important topic whenever you plan to

learn about kubernetes you should

understand how a you know how multiple

components of kubernetes are talking to

each other and how the kubernetes is

maintaining its robustness so in a

nutshell when somebody asks you this

question what you need to say is on a

very high level I can divide kubernetes

into control plane and the data plane on

the control plane you have components

like API server which is uh you know

responsible for handling the API is

talking to the end users and then you

have the scheduler which is responsible

for scheduling the resources on the

kubernetes cluster then you have etcd

Etc is a kubernetes object store where

you know all the resources of the

kubernetes are stored uh as objects in

kubernetes and then you have controller

manager so controller manager is

basically uh for example you have a

replication uh replica set or

replication controller so you know

controller manager is something that

takes care of this default controllers

in kubernetes and then you have Cloud

control manager so Cloud control manager

is in the last class I explained you

let's say you want to implement the

kubernetes on any cloud provider for

example Amazon has implemented

kubernetes as manage service on eks

platform so whenever you install this

kubernetes cluster what these Cloud

providers will do they will contribute

to the cloud control manager and they

will say like let's say you created a

service of type load balancer so what

happens under the hood is the cloud

control manager has the logic that is

written by the people at AWS which can

spin up a load balancer IP address for

you okay so when you create a load

balancer service type you are getting a

load balancer IP address on the AWS but

who is generating this right so Cloud

control manager is doing this with the

help of the contributions from the

people of AWS tomorrow if I write my own

cloud then what happens is I have to go

ahead and contribute to Cloud control

manager so that kubernetes can like

let's say somebody creates a service on

my cloud then the cloud control manager

can act and give you a load balancer IP

address so this is about the control

plane or the master load components of

kubernetes and then you have the data

plane where you have three primary

components one is cubelet one is Cube

proxy and then the final one is

container runtime so people also say

there is one more component called Cube

DNS but you can restrict yourself to

here where you can talk about cubelet Q

proxy and container runtime so cubelet

you all know it is responsible for

managing the pods let's say if pod is

running in a healthy state or not a pod

has to be restarted if the Pod has gone

down then cubelet takes care of starting

the Pod so cubelet is a component that

is responsible for managing the pods on

the nodes

then you have q proxy Q proxy is a

networking uh component of kubernetes uh

which typically takes care of uh

updating the IP tables for example you

create a service of type node Port so

what under the hood happens is the Q

proxy is the one that understands that

okay there is a service that is created

of type node Port so I have to go ahead

and update the IP tables in such a way

that somebody access the node IP address

call on a specific Port the request has

to be sent to the Pod okay so Q proxy is

the one that takes care of the

networking finally you have container

runtime what is container runtime so

container runtime is nothing but for a

container to run you need a runtime for

example if you have a Java application

and for Java application to run you have

a Java runtime similarly for containers

to run you have container runtime and

kubernetes is not opinionated about this

one like you can use Docker shim you can

use container ID you can use Creo

previously kubernetes was open created

because it only used to support a Docker

Sim out of the box okay but now you know

out of the box nothing is supported you

have to install the container runtime on

each and every node

okay then

so here interviewer might ask you one

question I have seen uh sometimes like

when you say kubernetes is not using

Docker Sim out of the box or kubernetes

is not using Docker as runtime out of

the box does that mean kubernetes is not

supporting Docker no it supports Docker

it supports Docker shim but nothing is

available out of the box let's say

previously when you install a kubernetes

cluster on each worker node you used to

get Docker Sim runtime out of the box

but now it's up to you like you can

install Docker Sim you can install

containerd you can install Creo any

container runtime that implements the

kubernetes container runtime interface

okay let's not go into the details of it

but if you want to understand the

details you can watch my kubernetes

architecture video that should be day 32

or 33.

then what are the main differences

between Docker swam and kubernetes so

this I haven't covered in my previous

videos but many people are asking about

it in the comment section so uh Dockers

fam uh

and kubernetes what is the difference

why we have to use kubernetes when we

have to use Docker slam so basically if

you look at the popularity kubernetes is

quite popular even when you compare

against any container orchestration

environments whether it can be Cloud

Foundry it can be miso as Marathon

Docker spam so kubernetes is a quite

popular choice and if you talk about

Docker fam Docker spam is a talker based

solution right so the major difference

is kubernetes is

suited for the Enterprise like you know

large organizations or even mid-skilled

organizations whereas Docker swam is

very easy to install it is very easy to

use but it is only suitable for the

small scale or you know very simple uh

app applications the reason for that is

you know when you are going for scaling

kubernetes has multiple options and when

you are going for you know Advanced

networking capabilities kubernetes can

uh do Advanced networking capabilities

very easily like you can use flannel

Calico or you know sdn ovn so all of

these things with kubernetes is very

easily and with dockersm the support is

very limited and the other important

thing is that you have a lot of third

party support for kubernetes like for

example the cncf community it has been

very active and because kubernetes

supports something unless custom

resource definitions so anybody who can

write a kubernetes controller

if they feel that kubernetes is not

supporting something they can extend the

capabilities of kubernetes right because

it's all about installing and deploying

a controller in kubernetes and you can

extend the capabilities to whatever

extent that you want

so this is the comparison on a very high

level so if you are looking for a mid

scale or large scale solution then go

for kubernetes but if you don't bother

about the scale then you know you can

choose Docker spam because Docker sperm

is also very easy and very simple to

install and use but you know if you look

at the market today kubernetes has uh

large openings and if you even take 10

JDS out of 10 Z is 10 JDS in devops will

have kubernetes so why should you go for

Docker swam if you are learning about

kubernetes or if you are learning about

container orchestration environments

then what is the difference between

Docker container and a kubernetes pod so

again I took almost 30 minutes to

explain this difference in one of the

videos so if you are trying to answer

this question you should definitely

answer and you know let us see how many

people will get this answers correct so

sometimes what happens is you people can

answer the questions but you people will

not be able to phrase the answers okay

so whenever the interviewer is asking so

if you take a lot of time thinking about

the answer then interviewer might feel

that okay so probably he does not know

the answer or he's searching for the

answer somewhere because these days

interview interviews are also not face

to face right so interviewer might feel

that you don't know the answer so these

are some of the standard questions that

you can expect in any interview so try

to be ready with the answer for these

questions okay so what is the difference

between Docker container and a

kubernetes spot

so as I explained equivalent is called

is nothing but a runtime specification

or you know uh what you do is in a yaml

file kubernetes resources are basically

written in yaml files okay so in a ml

file you can put together all of the

things that are required for your

container to run so that itself is a pod

but the only difference is

we enabled like pod is the lowest level

deployment in kubernetes in a pod you

can create one single container or

multiple containers so if you have

multiple containers then both of them

can talk within the pond using the same

network okay and they can also use this

same storage or you know same resources

inside the Pod so that's the only

difference between a pod and a container

so you can simply say a pod is nothing

but a runtime specification of a

container

what is a namespace in kubernetes so

again many people were asking this

question uh in the comment section uh

explain about the namespace namespace is

a very simple concept okay so namespace

is nothing but a kubernetes cluster is

used by multiple people in your

organization right so there are multiple

projects and multiple projects for each

project you cannot create a kubernetes

cluster in production because end of the

day let's say you have 20 projects which

are working on 20 micro Services all of

these 20 micro Services together might

uh you know create your end application

if you take about amazon.com for Amazon

there can be 20 different teams working

on 20 different micro services but end

of the day for amazon.com to function

what what is required all these 20 micro

Services should talk to each other and

should form a single application okay it

will be bundled uh probably as different

applications but all of them are

deployed in one single kubernetes

cluster end of the day so

a kubernetes cluster I mean in a

kubernetes cluster namespace is nothing

but a logical isolation of resources

networks are back and everything that

you can do for example there are two

projects and two projects you want to

deploy on a kubernetes cluster so you

will say for project a uh you will

create a namespace called namespace a

for Project B you will create namespace

called namespace B and within project a

there can be 10 developers they can work

on namespace a and the other 10

developers in Project B they can work in

namespace B so what happens is you have

provided them the same kubernetes

cluster but you have created two

different name spaces for them so in

that way they have a logical separation

physically they are in the same

kubernetes cluster but logically they

are separated with Concepts like rbac

what is rbac authentication then they

have different network policies they

have you know isolation of resources

like in namespace a let's say there is a

deployment

in namespace B there is another

deployment okay so here there is

application a and here there is

application B so developers of namespace

a you can restrict from accessing the

applications resources in the namespace

B so this is how your namespace

isolation works okay so to separate the

isolation or you know to create the

isolation to form this uh concept what

you can do is you can make use of the r

backs okay R back is nothing but role

based access control so we will talk

about the rbac for people who don't know

about our back don't worry about it but

for now if somebody is asking you what

is the namespace you can simply tell a

kubernetes namespace is a logical

isolation of resources so that multiple

project teams in a company can work on

the same kubernetes cluster but each of

them will have a dedicated namespace so

that nobody will interrupt the work of

the other people or other projects

what is the role of Q proxy

so this is question number six till

question number five uh let us see how

many people were able to answer all the

five questions still question number

five because more four questions I think

we covered already in our previous

classes let's see uh now question number

six what is the role of Q proxy

so again this I explained uh in one of

the previous classes so Q proxy

I think I explained even during the

question number two where uh we

discussed about the architecture of

kubernetes but if somebody asks you

dedicatedly like uh please elaborate

more on the Q proxy so I've written some

description here you can write down this

description somewhere or you know you

can as it easily uh you know you can

copy paste the description uh when

somebody is asking you

Q proxy basically is about configuring

the network rules okay on each of the

node that means to say like the

fundamental example that I gave you if a

user creates a service of node Port mode

okay so that means to say your pod can

be accessed on that specific node IP

call in the port that you configured in

your service.yaml file right but who is

doing these things under the hood right

so who is saying that when somebody

sends a request on the Node IP followed

by the port number the request has to be

routed to the Pod okay somebody has to

say this configuration right so Q proxy

is the one what it does is on every

Linux machine there is a concept called

IP tables okay so Cube proxy I mean you

you can configure Q proxy in different

modes but by default one is Q proxy

updates the IP tables so whenever

somebody access the application using

let's say your service is on node Port

mode so if they access the URL or if

they hit the URL node Port column port

port number

the queue proxy because it has

configured the IP tables the request is

sent from that specific node Port column

uh sorry node IP colon port to the Pod

okay so this entire routing is done

using the kernel and the IP tables so

you can also use ipvs and other things

but by default mode is IP tables in

kubernetes okay so this is about Q proxy

and I've also provided the uh you know

description here so that if you want you

can copy this description and you can

say say it as it is okay when you want

to convey it to your interviewer

then what is the different type sorry

what are the different types of services

within kubernetes

so

day number 36 sorry 35 when we talked

about Services I explained three

different services in kubernetes so this

is the question again where if somebody

asks you what are the different types of

services within kubernetes so

fundamentally I explained you Services

has three major responsibilities right

one is load balancing one is uh you know

the service

Discovery and finally to expose your

applications to the external World these

are the three major responsibilities of

a service in kubernetes so discover

service Discovery load balancing and

exposing the applications so service

Discovery and load balancing I already

explained now this question is about how

to expose this application outside the

kubernetes cluster or you know what is

the networking that you have configured

or what are the different types of

services that are available in

kubernetes service modes that are

available in kubernetes so the answer to

the question is you can create three

different of types of services in

kubernetes one is you can configure the

service mode as cluster IP mode second

is you can configure the service mode as

node Port mode and the third is you can

configure the service mode as load

balancer mode so

this is a straightforward answer but

your interviewer will definitely

you know ask you to elaborate more can

you elaborate the difference between

cluster mode

Port mode and the load balancer mode so

in the last class I explained uh

difference between each of them in

tomorrow's class you will see the

practicals as well but again if you have

to explain you the cluster IP mode what

happens if you create a service as a

cluster IP mode so your pods or you know

your service will basically get a

cluster IP so if you try to access your

service so you will be only able to

access the service using the cluster IP

which is only available or accessible

within the kubernetes cluster okay

whereas if you try to create the

services type node Port mode then your

service can be accessed on the Node IP

call in the port number that you define

in your service.yaml file so what

happens with that anybody in your

organization who has the access to your

node IP address for example you have

created a kubernetes cluster on your AWS

platform okay so what happens is you

have configured your worker nodes as ec2

instances so now anybody who can

basically reach that easy to instance so

you you if you can just ping the IP

address of the ec2 instance and that

means to say that your node is

accessible to that specific users so

whoever can access the nodes whoever can

access the worker nodes or whoever can

access the IP address of your kubernetes

cluster then they can basically access

your applications if they are deployed

in the node Port mode but for the end

users who are sitting outside your

organization okay so your end user is

somewhere in India and your applications

or your kubernetes cluster is somewhere

in the US so in such cases if they don't

have access to your network and if they

are outside your organization then you

have to expose your applications as load

balancer mode okay so what happens if

you do that you are Cloud control

manager component of kubernetes

basically it will create a public IP

address for you or it will create a load

balancer IP address for you and using

which you can anybody in the world can

access that applications okay so this

can also be done using Ingress but the

question is only related to services so

let us restrict to service only

so again the question is same here what

is the difference between node port and

load balancer type service because this

is a very frequently Asked question I

thought I'll also put this question here

so the description is same the one that

I just explained so you can pause the

video here and you can read the

description

question number one what is the role of

cubelet okay so here

when I explained you about the

architecture of kubernetes so I told you

that cubelet is a very important

component right because cubelet is very

I mean cubelet is the one that is

responsible for managing your pod life

cycle on the worker nodes so whenever

you install or whenever you schedule a

pod on the worker node using the cube

scheduler so the Pod can go down for

some reason or you know a pod can uh

something can happen to your Pawn so

there has to be someone who has to

inform the cube API server that okay the

Pod has gone down now uh you have to

send the information to the replica set

or the deployment and it has to scale up

the Pod okay so if your pod count has to

be one so if for some reason the Pod has

gone down and the replica has become

zero so your replica set controller has

to know that okay the Pod has gone down

so I have to ensure that the Pod comes

up and I have to scale up the part so

this information is actually

continuously monitored by the cubelet so

cubelet always watches that pod if it

goes down then it sends the notification

to the API server and then API server

node notifies the replica set controller

and then you know the replica set

controller again spins up or you know uh

it increases the scale to the required

amount so this is the life cycle so on a

high level what pod is doing so pod is

the one that is responsible for managing

the uh so cubelet is the one that is

responsible for managing the pods on the

worker nodes so I have provided the

description as well so that you can

explain the answer to to your

interviewer during the interviews

question number 10 and this is a very

important question what are your day to

day activities on kubernetes so many

people get confused here and I see also

many people asking that Abhishek I'm

getting the theory knowledge I'm able to

practice uh using your videos we were

able to you know get some understanding

of kubernetes and the devops itself but

when somebody asks us the question what

are the day-to-day activities as a

devops engineer or what are the

day-to-day activities on kubernetes we

are not able to answer so don't worry

about it actually you know it's a very

easy question or it's a very simple

question to answer and if you are

starting with a you know good answer

like this will be our first question

interviewer can ask you what are your

day-to-day activities on devops or what

are the day-to-day activities on

kubernetes so because this is your first

question or most probably uh in first

one or two questions

if you answer this question uh in a very

good way then it boosts your confidence

and this question is a very simple one

you don't have to complicate the

question or complicate your answer

simply say them that you know

as part of the devops engineer role we

manage kubernetes clusters for our

organization and we also ensure that you

know the applications are deployed onto

the kubernetes cluster and there are no

issues with the application so we have

set up monitoring on our kubernetes

cluster we ensure that whenever there

are bugs on the kubernetes cluster for

example uh the developers are not able

to troubleshoot some issue with respect

to pods developers are not able to

troubleshoot with respect to Services

they are not able to you know uh route

the traffic in inside the kubernetes

cluster so in such cases as subject

matter expertise on the kubernetes

Clusters we coming to picture and we

solve their problems but apart from that

we also do a lot of Maintenance

activities for example uh we have

kubernetes clusters with three Master

nodes and 10 worker nodes so we have to

do some continuous maintenance

activities on this worker nodes probably

uh you know upgrading the versions of

this worker nodes or installing some

default mandatory packages ensuring that

these worker nodes are not uh security

uh exposed to security vulnerabilities

so all of these things are our

day-to-day activities on kubernetes

apart from that we also serve as subject

matter expertise on kubernetes so if

anyone in the organization has any

issues with kubernetes they create a

jeera items for us or you know they

create tickets for us and we will help

them in solving or making them

understand the concept of kubernetes so

this is how you can explain so it is a

very simple answer it's a very

straightforward answer you don't have to

you know get scared about this question

so these are the 10 questions that I

have for today and let us see how many

people were able to get all the 10

questions correct because you know most

of the questions we have covered I think

eight questions we already covered in

the previous videos so let us see what

is the uh scorecard and uh yeah in

future videos we will learn about

Ingress we will learn about the

Practical implementation of services

we'll also talk about custom resources

definitions we will see a few things

about Helm so it's going to be four or

five videos more on kubernetes and after

that we'll also do a kubernetes

interview questions part two so if you

like the video click on the like button

and if you feel that someone who is not

following our 45 days of devops course

please share these videos with them so

that they'll also get benefit out of the

videos thank you so much I'll see in the

next video take care everyone bye

English (auto-generated)

###




### **Kubernetes Interview Questions (Part 1) – Day 36 Notes**  
**By Abhishek**  

---

#### **1. Docker vs. Kubernetes**
?
**Docker**:
- Container platform (single-node).
- No built-in auto-healing/scaling.
- Limited to basic networking/storage.
<!--SR:!2025-05-08,3,230-->

**Kubernetes**:  
- Container **orchestration** platform (multi-node cluster).  
- **Auto-healing**: Restarts failed pods.  
- **Auto-scaling**: Adjusts replicas based on load.  
- **Enterprise features**: Advanced networking (Ingress, CNI plugins), RBAC, custom controllers (CRDs).  

> *Key Point*: Kubernetes manages ephemeral containers at scale.  

---

#### **2. Kubernetes Architecture Components**
?
- ![[Pasted image 20250420101951.png]]
<!--SR:!2025-05-06,1,190-->

| **Control Plane (Master)**                                                             | **Data Plane (Worker Nodes)**                                       |     |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | --- |
| **API Server**: Entry point for all requests.                                          | **kubelet**: Manages pod lifecycle (restarts, health checks).       |     |
| **Scheduler**: Assigns pods to nodes.                                                  | **kube-proxy**: Handles networking (IP tables, load balancing).     |     |
| **etcd**: Key-value store for cluster state.                                           | **Container Runtime**: Runs containers (Docker, containerd, CRI-O). |     |
| **Controller Manager**: Manages built-in controllers (e.g., ReplicaSet).               |                                                                     |     |
| **Cloud Controller Manager**: Integrates with cloud providers (e.g., AWS LB creation). |                                                                     |     |

---

#### **3. Docker Swarm vs. Kubernetes**
?
- ![[Pasted image 20250420102005.png]]
-
<!--SR:!2025-05-06,1,190-->

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
> ```yaml
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
> ```
<!--SR:!2025-05-06,1,190-->

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
<!--SR:!2025-05-06,1,190-->

---

#### **6. kube-proxy Role**
?
- Manages **networking rules** on worker nodes.
- Uses **IP tables** (default) or **IPVS** to route traffic:
  - Routes requests to pods (e.g., NodePort: `node-ip:port` → pod).
  - Enables Service types: `ClusterIP`, `NodePort`, `LoadBalancer`.
<!--SR:!2025-05-08,3,230-->

---

#### **7. Kubernetes Service Types**
?
- ![[Pasted image 20250420102036.png]]
-
<!--SR:!2025-05-06,1,190-->
  
  

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
<!--SR:!2025-05-08,3,230-->

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
- ![[Pasted image 20250420102054.png]]
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
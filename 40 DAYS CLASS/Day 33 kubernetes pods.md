#space/kubernetes/33-day

### Transcript


foreign my name is Abhishek and welcome back to my channel so today we are at day 33 of

our complete devops course and in this class we are going to see how to deploy our first application in kubernetes

so before watching this video I'll highly recommend you to watch the previous videos day 30 31 and 32.

the reason why I ask everyone to watch these videos is because from Docker to kubernetes like you know

before you start your journey with kubernetes you have to understand the differences between Docker and

kubernetes this is one part of it and after that you should also understand two things one is the architecture of

kubernetes and the next thing is how to install kubernetes right so we covered

three topics in day 30 31 and 32. so if

you don't have the knowledge of these things then I will recommend you to not watch this video go back and watch the

videos and then come back to it because only then you will understand today's concept

so from day 30 I have been stressing on few points where kubernetes is better

than Docker and why people move to kubernetes one is because kubernetes is a cluster

two is kubernetes offers you scaling that is auto scaling kubernetes offers

you Auto healing right and kubernetes also offers something which is very important a

Enterprise level Behavior right so using kubernetes you can support a lot of

things for your containers so these are the four primary things and to start with kubernetes to get out to achieve

all of these things you have to learn about few terminologies okay so like we learned about the terminologies in

Docker in one of our previous classes similarly we should understand few Concepts in kubernetes before we go into

it so I'm not going to talk about the architecture of kubernetes here because we already covered it but I am going to

introduce you to few things which will make your understanding on kubernetes better because I don't want to directly

jump onto and explain like you know what is a part in kubernetes and how to deploy a pod how to install your

application it will hardly take me 15 minutes to do that but I will properly explain you the basics and then we will

go with the demo okay so that your fundamentals are clear firstly we are moving from Docker to

kubernetes right I mean we are moving our thing from containers to container

orchestration environment so in kubernetes the lowest level of deployment is a pod okay so in

kubernetes you cannot directly deploy a container in Docker what you are doing is you are building a container and you

are deploying a container right in kubernetes also we will use these containers that you have deployed in

Docker because end of the day whether it is kubernetes or whether it is Docker the end goal is to deploy your

applications in containers right so that is the concept of containerization but what kubernetes says is okay don't

deploy your application and container assist but deploy to me as a pod now

what is POD why we should deploy your container as a pod why can't you directly deploy as a container in

kubernetes as well so this has to be a fundamental question right because once you start learning kubernetes the very

first thing that you will see is people talk about part now if in Docker if you are installing

your applications using containers why you have to install in kubernetes using pods what is it and why is it different

okay so now basically a pod is described okay in terms of definition a pod is

described as a definition on

or definition of how to run a container

okay so what does this mean let's say in Docker whenever you want to run a

container what you would do is basically you would say docker run

minus D or minus t or minus i t followed by the name of the container then what

you would follow I mean the name of the image then you would pass minus P to do some Port mapping then you would say

minus V to do some Mount volume a volume mounts then if you have some Network you would say minus hyphen f and network and

you would pass the network detail so in Docker you are basically passing all of these arguments to run a container right

in command line whereas in kubernetes what you will do is you will pass those

specifications in the pod.yaml file okay so in kubernetes you basically have

a wrapper or you basically have a concept that is similar to container but it abstracts the user uh defined

commands in pod dot specification yaml so if it is confusing don't worry about

it I am going to explain it in a very clear way so what you do in kubernetes is you

instead of container you will deploy a pod okay now a pod can be a single

container or it can be multiple containers I'll tell you why a pod can be multiple

containers what are the advantages but first for now just go with a single container okay so assume you are

building a pod with one single container what you will do is similar to Docker end of the day pod is also exactly like

a Docker container the only difference when you have one single container the only difference is here instead of you

using a command called Docker run and then you pass all the different arguments you will try to put all of

them in a yaml file okay so inside the ml file you will say something like this API version is uh V1 then you provide

the name of this container sorry of this pod and all of these things then you will provide the specification so inside

the specification you will provide all of the details of the container okay so you have multiple containers option here

and inside which you provide specification of your containers so don't worry once you look into the

definition or the yaml file of the Pod you will understand oh okay it is exactly similar to your container but

the only thing is instead of command line you are trying to put everything in a yaml file that's the only difference now why kubernetes has to uh deal with

this complexity you might ask me a question that Abhishek if things are going well with Docker container and you

can deploy everything as a container in Docker platform why kubernetes has introduced this complexity why you have

to run things in kubernetes using yaml files so the thing is kubernetes like I told you is a Enterprise level platform

and what it want to do is it want to bring declarative capabilities

okay so or it want to build a standardization so the thing is you can

put these yaml files okay in kubernetes we deal everything with yaml files okay so whether it is

quad resource whether it is deployment resource whether it is Services we are going to talk about all of these things

in future but everything will be written in yaml files only okay so you have to

master yaml files uh you don't have to like you know mug up how to write a pod uh the ml file you don't have to mug up

how to write a deployment ml file don't worry about it we have bunch of examples and everybody make use of these examples

only like whether it's a senior devops engineer Junior devops everybody use this example from official kubernetes

documentation or from some samples but the thing that I want to mention is you have to understand how yaml files are

written so only then you will become expert in kubernetes because every day

we deal with ML files in kubernetes okay now so like I told you pod is nothing

but one or group of containers so why it has to be one or group of containers so

most of the times a pod is a single container but there are some cases where

you have some you know sidecar containers or you have some init containers so what

are these things like these are the things that support your axle container just to give you an example let's say

you have a container okay you have your application deployed in a container and this wants to read some config files or

you know this wants to read some uh user related files from another container so

in such cases what you will do is instead of creating two different uh pods in kubernetes you can put both of

them in a single part and what part says is if you put one or two containers or

multiple containers inside a single pod I will ensure that kubernetes will ensure that both of the containers will

have some advantages so that's why you put one or group of containers inside a single pod when it is required what are

the advantages so if you put group of containers in a single pod okay

let's say you have container a and container B and if you put both of them in one single pod in kubernetes then

kubernetes will allow you shared networking

shared storage okay so this way what happens is

container a and container B inside a single pod can talk to each other using

localhost that means to say if uh container wants

to talk to container we put uh three three thousand so it can simply access using localhost 3000 okay so the

application can be directly accessed and the information can be retrieved or if both of them wants to share some files

okay so even in such cases because both of them are in one single part they can share the files as well so that is one

of the reasons why people put multiple containers but it is a very rare case the usual practice for this is to create

some sidecar containers or init containers which is an advanced topic which I'll explain going ahead when we

talk about service mesh or when we talk about uh you know things like uh some advanced concepts of kubernetes

I will talk about why uh you put multiple containers inside apart but for now if you understand that there is a

pod and inside this part of kubernetes you have a container so

container and pod so basically what kubernetes does is it allocates a

cluster IP address to this pod okay and you can access the

applications inside the containers using this pod cluster IP address so IP addresses are not generated for the

containers but they are generated for the pods now don't worry or don't overthink the concept here because it is

fairly simple a pod is basically a wrapper that kubernetes has created for a

container to make the life of devops Engineers easy

because when we try to deal with containers like hundreds of containers thousands of containers in production if

you have a wrapper like pod which can Define everything in a yaml file okay

which can say like if a developer can go to a git repository or a devops engineer can go to a git repository and look for

the pod.yaml file he will understand everything about the container that okay so this container is running on the

application is running inside it on Port 80. it has a volume Mount then uh you

know what is the networking of it or you will understand multiple details that you have for your

Docker container so kubernetes has created a wrapper for it okay so most of the cases when you are dealing with a

pod you deal with a single container and you know you access the Pod sorry you access the container using the cluster

IP address that kubernetes gave for pod so who is giving this cluster IP address if you watch the previous videos Cube

proxy is generating this cluster IP address okay perfect so this is the concept of

pod in kubernetes so very first application that we are going to deploy we are going to deploy as a pod

okay don't worry we are going to when we do the demo you will understand this even in a better way but One More

Concept that I wanted to introduce here is

Cube CTL what is Cube CDL

so Cube CDL is nothing but like for Docker whenever you are trying to run any commands you have the docker CLI

right in kubernetes you have something called as cubesata so Cube CTL is command line

for kubernetes okay so what is it it's a command line tool for kubernetes so you

can directly interact with the kubernetes Clusters let's say you have a kubernetes cluster and inside that you

have 10 nodes okay so to understand how many nodes are there inside your kubernetes cluster you can just use this

Cube CTL command and say Cube CTL get nodes

okay so how you will understand these commands what are the different options I'll show you don't worry so if you want

to see how many parts are there you can simply say Cube CDL get pods if you want to see how many deployments are there Cube CDL get deployment if you want to

delete a deployment you want to create a deployment so for such cases to interact with kubernetes we have Cube CTL so

today's class we will first install cubectl

then we will create a kubernetes cluster that is mini Cube why we will create a

mini Cube kubernetes cluster because in last class I told you I showed you how to create a kubernetes cluster on AWS

using cops but for this you need to have some free credits on AWS

you can also run eks or any other systems but for that you need some free credits so if you don't want to spend on

your kubernetes clusters you can learn them using a local kubernetes cluster that is mini Cube or k3s or kind or any

kubernetes clusters installation of all of them are fairly simple don't worry about the installations at all but the

only thing is when you use this local kubernetes clusters they are not as equal as your

full-bone kubernetes full-blown kubernetes clusters but for our demo purposes or for our learning purposes

because we don't run huge applications we are not running applications that are CPU and memory intensive so even these

clusters are fine and we are not going to set up any High availability all of these things at this

point so you can use minicube so that you don't have to spend on your AWS okay

so first thing we will see is how to install cubectl then we will see how to create a kubernetes cluster on your

local using minicube I have a complete video as well where you can refer to this complete video I'll share the link

in the description if you find today's video is going fast with respect to installation don't worry you can refer

to this complete video so Cube CDL mini Cube and then we will see how to deploy a pod which is our first application on

kubernetes okay is the things clear till now let me

stop sharing here and let me proceed with the demo part

so I stopped sharing then let me share my terminal

okay just a second perfect so now my terminal

let me increase the font a bit perfect so now you guys are able to see

my terminal as well right so the very first thing that we'll do is

start with the installation of cubectl so to start with the installation of cubectl

just go to your browser search for cubectl don't do anything just say Cube CTL installation you'll go to this

specific page called install tool kubernetes click on it then choose the platform do

you want to install cubectle on Linux Mac OS or Windows click on for example I'm using Macos let me click on Macos

then there are multiple options do you want to install it on Intel or silicon

chip so silicon chip is nothing but your Mac M1 M2 or your arm processors these

are related to Silicon chip but if you are using the old Mac then you are basically on Intel so just copy the

script and your kubernetes Cube CTL installation is done so this is very very simple just copy

the script just execute it you will see that the cube CDL is installed so it barely takes a minute or so for the

entire installation now once you have the cube CTL installed just search Cube CTL version

so your Cube CTL is up and running perfect after this like I told you we'll

proceed with the installation of a local kubernetes cluster so here there are multiple options you can use mini Cube

k3s kind you can use uh micro k8s so there are

multiple options but in my case the videos that I'm going to demonstrate I

will prefer mini Cube because many many people or many subscribers already are using mini Cube if I teach them in kind

then they have to do some additional network settings so that's why I'll proceed with mini Cube but just to let

you know that uh on my local setup or whenever I am practicing things I prefer kind so once you learn kubernetes then

you can also move towards kind but for easy way to start with kubernetes start with mini Cube but why kind is better is

because kind is basically kubernetes in Docker that means to say your kubernetes nodes or your kubernetes entire setup as

is done as Docker containers okay this is a slightly Advanced concept how kind handles kubernetes clusters but

you can create hundreds of kubernetes clusters even on your personal laptop using kind whereas with mini Cube it's

not possible okay but for now let's Bother only about one single cluster so let's use mini Cube

so firstly install minicube so to install mini Cube again go to your browser

search for minicube you will go to your mini Cube kubernetes page click on it so

you will find the installation uh suggestion where you will be asked with your operating system similarly if you

are in Linux uh click on Linux then be very careful with the architecture

so if you are using xc8664 use this architecture if you are using arm64 then

click on this button arm64 is the arm processor so most of the times people on Linux must be using this x8664 unless

you uh change your configuration or you're using IBM P cluster or ibmc cluster uh sorry p uh operating system

or Zia operating system so in my case I am using Mac OS and you know I am using

the arm64 processor so as soon as I change this you will see that there is a change in the command so

let me copy these things here and let me execute so as soon as I execute this one

you will see that mini cube is installed the reason why I did not do is I already have mini Cube but the installation is

that's it like you just install these two commands and your mini Cube installation is done you can just search

for mini Cube and you will notice that your mini Cube installation is done

perfect so I have my Cube CTL I have my mini Cube my Cube CTL sorry uh I just

have my mini Cube I have to proceed with creating a cluster okay so what is mini Cube mini cube is a command line tool

that will allow you to create a kubernetes cluster but right now your mini cube is only created your kubernetes cluster is not created so to

do that the simple command is mini Cube start so if you just do mini Cube start your

kubernetes cluster will be started but if you are using Mac or if you are using

uh Windows understand that how mini Cube creates a cluster is it will create a

virtual machine first on top of this virtual machine it will create a single node kubernetes cluster okay what is it

single node kubernetes cluster like I told you in production or in uh you know

real-time scenarios we will use multi-node kubernetes cluster where we will have a master node or we will have

three Master nodes and we will have three worker nodes four worker nodes 100 worker nodes whatever is the requirement

but in general when you are doing High availability you will have three Master nodes and you will have n number of

worker nodes but because mini Cube like I told you it's a demo cluster or you know it's a

test cluster your practice cluster so it just creates one virtual machine on top of it it runs a single node kubernetes

cluster so to create a virtual machine on top of your Mac OS or on top of your

uh Windows firstly you need to have a virtualization

platform most of the time it comes by default so if you are on Mac all that you need to do is just run this command

minicube so okay so you can just use hyperkit this

is a command Okay so hyperkit comes by default and uh

so what I'm doing minicube start pass the memory requirements whatever is the requirement that required and then hyper

hyphen driver is equals to hyperkit so here you can change the values you can change it to virtualbox you can change

it to hyperkit whatever is your requirement Okay so let's say you are

not bothered about these things uh today's class we are only learning about the basics of kubernetes so in such

cases even if you do this simple mini Cube stat that is more than enough okay so the only difference is if you are

just doing mini Cube start then the kubernetes cluster will by default

use your Docker driver okay but Docker driver better uh you don't use it when you move to advanced kubernetes concepts

in such cases just use this command okay where you will use minicube start and

hyphen hyphen driver as hyperkit okay so now uh I think I have spent

enough time in explaining how to install kubernetes cluster now my Cube CTL is configured to understand that just say

Cube CDL get nodes okay when you do Cube CTL get notes you will notice that

Cube CTL is already connected to your kubernetes cluster and it is saying that okay there is one kubernetes cluster

that is running sorry there is one node that is running which is called mini Cube node so mini Cube uh reference that

node as mini Cube node and then the status is ready and this node itself is your control plane and data plane okay

because you just have one node architecture here awesome so mini cube is done kubernetes

is installed my nodes are up and running so what do you have to wait for so you can directly start with installation of

pod but how to do it so again go to your kubernetes documentation and search for

pod okay so if you see this like I told you pod is basically a yaml file okay so you

can simply copy this yaml file because we are just starting with kubernetes and even once you advance with kubernetes

also you have to take this examples as reference because nobody is going to mug

up these things as it will not give you any advantage learning these specific uh

things inside your yaml file is of no use all that you need to understand is like you know copy this specific thing

even for your future cases and just understand where do you have to update your commands Okay so yaml file will

remain same whether you are creating one pod file whether you are creating tomorrow you might be creating pod for different application Day After Tomorrow

you might be creating pod for another application the definition will be the same only thing that will change is

these values so these are all the keys and the values will change okay so today let us try with the default image that

is provided in the example called nginx but if you want to replace you can replace this image with any application

that we have created in our previous applications or in a previous Docker demos so we did a lot of Docker demos

where we created my first Docker or you know we created some golang based applications we created some python

based applications so that's fine you can use any of those images or you can go with the default

example that kubernetes is offering you here because we just uh wanted to run our first pod and see how pod works

right so here name of the image is nginx 1.14.2 you can change it like I told you

and then whenever you make this modification make sure you make this change as well so here the image that he

is giving I mean kubernetes is giving us it says that the container Port is 80 but in your case your application

container Port can be 8000 it can be nine thousand it can be anything so modify it accordingly okay but in this

case the image is this one and the container Port is this one so let us try

to First compare this with the docker Commander okay so that everybody will be clear because you people are coming from

Docker so let us try to debug and see what is the equivalent command for this

in Docker so here we are just saying docker run we are trying to run it so Docker

run minus D so we are running it in the background and then hyphen hyphen image you don't have to give image in Docker

you can simply say nginx this one hyphen hyphen name what is the name we are giving name as nginx so this is the name

and then minus P 80 to 80. so this is the equivalent command to pod okay so

the reason why I just explained you in this way is to make you understand that like I told you a pod is basically a

specification or a specification on of how to run your container so that's why I just showed you how the equivalent

command looks in docker save this one so now your Cube CTL will

come into picture Okay so use this command called Cube CTL which is similar to Docker CLI here this is a kubernetes

CLI the command you will say is create minus F power dot yaml so as soon as you

do this you will see that your pod is created that means your application is created so how do you see in Docker you

will see Docker PS so here you will say Cube CTL get pods okay so you see that the

kubernetes Pod is running if you do minus o wide then it will print the

entire details of this pod it said this is the IP address you can simply do curl

and then you can execute this specific IP address you will notice that the okay

so in this case you have to log into the cluster right so like previously if you

are not exposing this application from Docker container to external application we log into the container and we execute

it right the call command or something so in this case you have to log into your kubernetes cluster so the command is

easy just do minicube SSH okay so you will log into your kubernetes cluster if

you are using a real-time kubernetes cluster what you will do is instead of mini Cube SSH you will SSH to the master

or any worker node IP address and then you will just do call to the specific thing and you will notice that your

application is running it says thank you for using nginx so your first ever kubernetes application is created and

you were able to execute as well using Cube CTL get pods minus o wide

now the first question that you should ask me is Abhishek how do you remember all of these commands so I have been

working on kubernetes for a long time but for somebody to start with there is a very good reference called kubernetes

or cube CTL cheat sheet okay just just search for cube CTL cheat

sheet you will see this specific page go to this page and you have bunch of kubernetes commands Okay so just go

through this uh specific page whenever you uh want to find any specific command you are not understanding so even I

reference this page because it has bunch of examples and all of these examples are very very handy for us to understand

okay how let's say I want to search one command with respect to get the pods so

I can search for get pods and it gives me all options so you can it says that Cube CTL get pods get in all the

namespaces get uh your complete description of the Pod so all of these things are very much provided here

so reference Cube CTL cheat sheet okay so things are fine I have just installed

my first pod my pod is running everything looks good I was even able to access the Pod once I SSH into the

cluster now what is next so you were able to do this similarly you can also do Cube CTL delete uh pod

provide the name of the Pod okay so your pod will be deleted okay so Cube CTL is

basically life cycle but what is next so there are two things next one is like I told you

this part.yaml is a specification of your Docker container how a Docker container has to be run so here you can

enhance this specification as well like I told you here you can add more for example volumes

okay the syntax is not correct don't worry about it at all you can add a volume mounts so these things we will

learn as we go ahead because I don't want to complicate these things and explain you at this point of time itself

how to add persistent volumes how to add volumes how to add volume mounts to airpod a lot of these things are not

required at this point because we are just learning kubernetes so for now understood you understood how to deploy

your first application the next thing you have to ask me is how to add Auto scaling

Auto healing so these were the topics I was telling you that this is how kubernetes is better than Docker or any

container platform so you should ask me an expression is how to add this capabilities because this is the reason

why we started learning kubernetes because kubernetes is an entire Enterprise platform which we already saw

by looking at the architecture and all of the things now the next thing is kubernetes provides Auto scaling or not

a healing how do you get this to my application so ah if you ask me this

question Abhishek how to get this Auto healing Auto scaling capabilities to my application so the answer is what you

will do is on top of the Pod you have a wrapper coil deployment in kubernetes okay so you have to use your deployment

in kubernetes to get these features like Auto healing and auto scaling which will be at tomorrow's topics okay so to start

with kubernetes you also you always have to start with pod but to get this Advanced capabilities we will move from

pod to deployment now you can ask me why we have to learn POD at all because we have to move to deployment because

deployment is just a wrapper okay so tomorrow when I show you how to write a

deployment.yaml file you yourself will understand oh okay so deployment and pod are pretty much same only thing is we

are just changing the kind here okay so here instead of kind pod we are just modifying it and we are just saying it

as kind deployment and we add more things like we add uh some other things like template and we say okay so this is

my pod template specification but more or less what a kubernetes

deployment does is it acts as a wrapper on top of your pod which is going to be

your way to deploy your applications okay so it is going to be your way to deploy apps in kubernetes in real time

production scenarios you will not deploy pods but you will actually deploy your deployments or stateful sets or demon

sets these things which we will learn but to understand those things you need to have your foundations correct that is

you need to understand how does a pod Works in kubernetes okay so today we understood how does a pod work we logged

into the Pod we uh try to execute the Pod right all of these things are done

final things that I have to show you is how to verify the application let's say you have some issues with respect to the

applications that you are running so Cube CDL also offers some commands like you can say Cube CTL uh let me create

the Pod one more time Cube CDL so the Pod is created Now using the cube

CTL itself you can debug your applications like you know you can say Cube CTL logs followed by

the name of the Pod okay so once you provide the name of the Pod here you will see the logs of your application

okay uh Cube serial logs pod nginx right so

as soon as you do it you will see the logs okay so it is still not running don't worry about it but using cubectl

logs you can verify the logs of your kubernetes pod and using Cube CTL get

pods as you get the Pod information what you can also do is you can just say Cube CTL describe okay followed by the name

of your uh pod so if you do this you will notice that it will print all the

information of your pod so what is uh the current status of your pod so if your interviewer is asking you how do

you debug a pod you can simply say them that I use a command called Cube CTL describe pod using which I get the

status of everything inside a pod whether the Pod is currently running if there is any error what is the error in

the Pod if there is any issue with the Pod what is the issue with the Pod so you will get all that information with the Pod and once you understand it you

can also get the information of cube CTL logs part followed by the name of the part if

your application is throwing uh some logs you can also sorry what is the issue here

oh sorry Cube CTL logs nginx so if there is any logs currently this application

the demo application that kubernetes has shared is it is not throwing any logs but in real time in production your

application will throw the logs where you can see those logs using the cube CTL logs nginx okay so let's say if I

log into this uh specific pod one more cluster one more time and if I execute uh the HTTP server or the nginx server

you'll notice the logs even with respect to cube CTL logs in the next but for now that's okay so the interview question is

how do you debug pods or how do you debug's applications uh issues in kubernetes so your two go to commands

would be Cube CTL describe name of the pod nginx and the next command would be Cube

CDL logs name of the pod so this will be your two go to commands

describe will explain your complete details of your pod what is the issue with the Pod and all and to verify the

logs of your pod you can use the cube CTL logs command so this is the video for today I request everyone who is

watching this video to practice everything that we have learned today because going ahead the complexity will

increase we will go in we will like I told you we will learn about deployments we'll learn about Services we'll talk

about Auto healing water scaling all of these things for which it is very important for you guys to practice

today's session and also watch the previous videos on kubernetes okay so if you liked today's video click

on the like button don't forget to share this video with your friends and colleagues I'll see you in the next video take care everyone bye

English (auto-generated)

### Next:



### **Kubernetes Day 33 Notes: Deploying Your First Application**  
**By Abhishek**  

---

#### **1. Prerequisites**
?
- Watch **Day 30–32** videos:
  - Differences between Docker and Kubernetes.
  - Kubernetes architecture (control plane, worker nodes).
  - Kubernetes installation (e.g., `kubeadm`, `minikube`).
<!--SR:!2025-05-08,3,230-->

---

#### **2. Key Kubernetes Advantages Over Docker**
?
- ![[Pasted image 20250420101518.png]]
-
<!--SR:!2025-05-06,1,190-->
  
  
  

| **Feature**       | **Kubernetes**                          | **Docker**                     |  
|-------------------|----------------------------------------|--------------------------------|  
| **Deployment**    | Uses **Pods** (wrapper for containers) | Direct container deployment    |  
| **Scaling**       | Auto-scaling (via Deployments)         | Manual scaling                 |  
| **Healing**       | Auto-healing (restarts failed pods)    | No built-in healing            |  
| **Enterprise**    | Advanced networking, LB, security      | Limited to single-node setups  |  

---

#### **3. Kubernetes Pods**
?
- **What is a Pod?**
  - Smallest deployable unit in Kubernetes.
  - Contains **one or more containers** (usually one).
  - Abstraction over containers (like `docker run` but declarative via YAML).
- **Why Pods?**
  - Standardization: Define all specs (ports, volumes, etc.) in a **YAML file**.
  - Shared resources: Containers in the same pod share:
    - **Networking** (communicate via `localhost`).
    - **Storage** (shared volumes).
- **Pod YAML Example**
  ```yaml
  apiVersion: v1
  kind: Pod
  metadata:
    name: nginx-pod
  spec:
    containers:
    - name: nginx
      image: nginx:1.14.2
      ports:
      - containerPort: 80
  ```
  - Equivalent to `docker run -d --name nginx -p 80:80 nginx:1.14.2`.
<!--SR:!2025-05-08,3,230-->

---

#### **4. `kubectl` CLI Tool**
?
- **Purpose**: Interact with Kubernetes clusters (like `docker` CLI for Docker).
- **Common Commands**:
  - `kubectl get pods` → List all pods.
  - `kubectl create -f pod.yaml` → Deploy a pod.
  - `kubectl delete pod <name>` → Delete a pod.
  - `kubectl logs <pod-name>` → View pod logs.
  - `kubectl describe pod <name>` → Debug pod issues.
<!--SR:!2025-05-06,1,190-->

---

#### **5. Demo: Deploying a Pod with Minikube**  
?
1. **Install `kubectl`**:  
   - Follow platform-specific instructions from [Kubernetes docs](https://kubernetes.io/docs/tasks/tools/).  
   - Verify: `kubectl version`.  
2. **Set Up Minikube (Local Cluster)**:  
   - Install:  
 ```bash
 curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-arm64
 sudo install minikube-darwin-arm64 /usr/local/bin/minikube
```  
   - Start cluster:  
 ```bash
 minikube start --driver=hyperkit
 ```  
   - Verify: `kubectl get nodes` (should show `minikube` node).  
3. **Deploy a Pod**:  
   - Save the YAML above as `pod.yaml`.  
   - Deploy: `kubectl create -f pod.yaml`.  
   - Check status: `kubectl get pods -o wide`.  
   - Access the pod:  
 ```bash
 minikube ssh  # SSH into the cluster
 curl <POD_IP>  # Test NGINX (default page: "Thank you for using nginx")
 ```  

---

#### **6. Debugging Pods**  
?
- **View Logs**: `kubectl logs nginx-pod`.  
- **Inspect Pod**: `kubectl describe pod nginx-pod` (shows events, errors, config).  

---

#### **7. Next Steps: Deployments**  
- Pods are **low-level**; for production, use **Deployments** (wrappers over pods).  
- Deployments add:  
  - **Auto-healing** (restarts failed pods).  
  - **Auto-scaling** (adjusts replicas based on load).  
  - **Rolling updates** (zero-downtime deployments).  

---

#### **8. Cheat Sheet**  
?
- **`kubectl` Cheat Sheet**: [Official Docs](https://kubernetes.io/docs/reference/kubectl/cheatsheet/).  
- **Minikube Commands**:  
  - `minikube start` → Start cluster.  
  - `minikube stop` → Stop cluster.  

---

#### **Assignment**  
1. Deploy a pod with a custom image (e.g., Python/Go app from Docker demos).  
2. Debug it using `kubectl logs` and `describe`.  
3. Post your YAML and learnings on LinkedIn/GitHub!  

**Next Video**: Kubernetes Deployments (Auto-healing/scaling).  

--- 

**Key Takeaways**:  
- Pods = Kubernetes’ "containers" (defined via YAML).  
- `kubectl` = Swiss Army knife for Kubernetes.  
- Minikube = Easy local cluster for practice.  
- Debug with `logs` and `describe`.  

👉 **Like/Share if this helped!** 🚀






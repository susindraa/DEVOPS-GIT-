
#space/kubernetes/34-day
### Transcript



hello everyone my name is Abhishek and

welcome back to my channel so today is

day 34 of our complete devops course

congratulations we already reached day

34 of 45 days devops journey and uh you

know in this class we'll be talking

about kubernetes deployment

so from classes day 30 to 33 we try to

understand in depth about the kubernetes

architecture how is it compared with

Docker kubernetes installations

on-premise as well as cloud and today on

day 34 we will be learning about the

kubernetes deployment

so what is this kubernetes deployment to

understand that everyone must have

watched the previous video that is day

33 it is very important because we

talked about kubernetes parts

so let's try to understand the

difference here itself right if

kubernetes can do things with pod okay

so if you can deploy your application

onto kubernetes as part then why do you

require deployment okay so what is the

comparison that we are going to look at

the difference between a container

a pod

and a deployment

right so this is your interview question

as well so people will ask you in an

interview what is the difference between

a container pod and a deployment you

might feel this is a very entry level

question but if you can't answer this

question then you know uh

date itself your interviewer will

understand that you don't have uh

experience on kubernetes so basically

containers like we have watched from day

23 to day 30 you can create containers

using any container platforms like let's

say you have created a container using

Docker okay so to run this container

what you usually do is you provide the

specifications to run this container on

the command line right so how do you do

that basically you say talker

run minus i t right or minus D if you

want to run in the detached mode Then

followed by the name of the image then

if there is any port you will expose

using minus P if there is any volume you

will use minus V if there is any network

you will use hyphen hyphen Network so

similarly we will pass bunch of options

here right so this is how container

works and this is how I'm not going into

the workflow how you create a container

you write Docker file build Docker image

and container let's not go there but

just let's assume that this is how you

run a container on Docker platform so

what kubernetes said is okay let me

modify this process and let me bring a

Enterprise model to this so what what

does kubernetes say is instead of

writing all of these things in the

command line you can create a yaml

manifest

okay and inside this yaml manifest you

can Define all of these things that you

are defining here in the command line

option and you know you can just say

what are the things that are required

what is the container image right even

even you provide the container image

here then what is the port that you want

to run this specific container on what

is the volumes that you have and what is

a network so everything you can provide

in the yaml Manifest so a pod dot yaml

or a pod yaml manifest is nothing but a

running specification of your coupon

Docker container right so it's just like

a running specification what are the

parameters that you are that you require

to run a container esport so the only

difference here is a pod can be a single

or multiple containers okay so in a pod

you can create a single container or

multiple container why do you create

multiple containers is because let's say

you have an application that is

dependent on other other application

without which it cannot run or you know

you have a container here this is your

actual application container and in this

you have written your API Gateway rules

your load balancing rules like sidecar

containers so in such cases also you can

put both of them inside a single pod

so a popular use case is service mesh so

in case of service mesh you have a

container that is sidecar container and

this is your actual container so what is

the advantage is if you use a pod now

both of them can share the same

networking so both of them can

communicate using localhost and both of

them can have the same volume or storage

kind of things okay so this is about the

Pod now finally what is a deployment so

if you if you can ask me this question

Abhishek in day 33 we already saw how to

create a pod uh you know how to deploy

application using a pod we deployed

nginx application now why we have to

transition from Port to a deployment

because if you can deploy a container or

if you can deploy an application as a

container in kubernetes using a part

what is the purpose of using a

deployment this is a very valid question

right so your interviewer can also ask

you this question so to answer this

question it is very simple so kubernetes

like I always told you from day 23 or

from day 30 when we started learning

kubernetes kubernetes offers you some

things which is required I mean which is

the requirement for people to move from

container platforms like Docker to

kubernetes what are the two important

things that I told you the first thing

that I told you is the auto healing

Behavior

the second thing that I told you is auto

scaling Behavior okay

so does POD has this capability of

implementing Auto healing and auto

scaling no

so pod is equivalent not equivalent is

somewhere similar to your container

because a pod is doing nothing it is

just providing a yaml specification of

running your container nothing more than

that or in some cases a pod can run

multiple containers and it can offer

some Advantage there because these two

container can share networking and share

the storage space but

the thing that pod cannot do and which

is very important is the auto healing

and auto scaling capability so who

offers this thing in kubernetes this

kind of things in kubernetes can done

using deployment okay so if you want to

do some zero downtime deployments or you

know if you want to bring in Auto

healing water scaling then you should

never deploy your applications as pods

in kubernetes but instead you should

deploy as deployment and what deployment

will do end of the day it will deploy a

pod only

okay but instead of deploying a pod if

you deploy a deployment what it does is

let's say you have deployed this

deployment okay you have created a

deployment resource it will again create

some intermediate resource called

replica set and then replica set will

create something called as pod for now

forget about this replica set because

I'll teach you as we progress into the

video but

so this is how you can create part so

the practice that you have to do is or

What kubernetes suggests you is do not

create pod directly okay so end of the

day you will be creating pod only that's

why we saw in day 33 how to create a

port what is a part all of those things

you have to know the concept but do not

create it directly but create it using a

deployment resource

okay so what is this resource called

deployment resource and what this

deployment resource will do is firstly

it will create something called as a

replica set

which is your kubernetes controller okay

what is this this is a kubernetes

controller and then what happens is this

will roll out your ports okay

now why you need this intermediate

resource so the thing is what a

deployment does is inside your

deployment you can just say what is the

number of replicas of your pod that you

require okay so why is this required is

in some cases you know you always do not

want to have a single replica of your

container sometimes you are your load

will be too high you might want to talk

uh expose your application to a multiple

concurrent users who can access your

applications like you know you can say

100 users should go to pod one 100 users

should go to pod part two I mean a

replica of replica one of pod and

replica to off part that means to say

you are implementing you can call it as

high availability or load balancing or

whatever is a general terminology okay

so what you can do inside your

deployment yaml manifest deployment is

again AML manifest because in kubernetes

everything is a yaml manifest okay so

inside your deployment yaml manifest you

can just say replica count as two but

when you say this okay there has to be

something in Cuba it is that ensures

that okay you said I want two replicas

okay so deployment will create a pod

that I have already told you but if we

go back to the topics called Auto

healing and auto scaling okay what does

Auto healing mean if you say you need

two replicas okay

deployment will create using replica set

two uh two parts but what replica set

additionally does is because it's a

kubernetes controller what it will

always do is it will ensure that there

are two controllers even if some user

deletes one of these pods okay sorry

there are two parts so even if a user

deletes one of these pods he says that

okay accidentally I deleted one part no

there is only one part kubernetes will

say don't worry because you have

submitted a deployment yaml manifest to

me I Implement Auto healing using this

replica set controller okay so it will

always ensure that there is two number

of replicas on the controller if you are

not understanding this wait for the demo

in the demo live in live I will show you

how this is working okay so the end

process is you will create a deployment

okay and this deployment will roll out a

replica set okay which is called as RS

and this will create the number of PODS

that you have mentioned in the

deployment EML manifest okay what this

RS or replica set will do is it will

ensure that what user has provided in

the yaml Manifest it will ensure to be

implement the auto healing capability if

you say the replica count as two if you

can say the replica count as 100 this

replica set will always ensure that

there are 100 replicas of your pod on

the kubernetes cluster so that million

users can parallely use it maybe okay so

if user deletes one and if he makes it

99 what replica set will do is no no

because deployment told me that the Pod

count has to be 100 so let me put it

back to 100 okay so this is how a zero

downtime deployment of tomorrow let's

say you want to increase the replica

count from 100 to 150 okay you can just

go to this yaml manifest and change the

replica count from 100 to 150 I'll show

you how there's a diploma DML look like

but for now if you change the replica

confirm 100 to 150 then RS will say that

oh okay there is a new change in the

yaml Manifest so I have to increase the

Pod count from 100 to 150 let me create

50 more parts okay

50 more parts in the sense 50 more

replicas of your pod okay so this is how

a deployment works it will create a

replica set and this replica sets will

create a pod for you okay and this

replica set is a kubernetes controller

so if you are listening this word for

the first time kubernetes controller

don't worry you will get acquainted with

this because in kubernetes we deal with

a lot of controllers so controllers are

something which maintains a state you

know it always ensures that the desired

state is always present on the actual

cluster that means desired State and the

actual State on the cluster are same

so anything that is doing this behavior

in kubernetes is called a controller

okay so there are some default

controllers in kubernetes and you can

also create custom controllers like Argo

CD admission controllers all of these

are custom controllers that you are

creating whereas the default controllers

are also available in kubernetes which

ensures that the actual state is always

same as the desired State okay so

whenever you hear this term called

controller just understand okay

controller is something that will ensure

that uh the state in the yaml Manifest

if in yaml manifest you are saying uh

something has to be there it is always

there in the kubernetes cluster that is

maintained by the controllers in

kubernetes okay now this is the

introduction so the popular interviewer

interview questions here will be what is

the difference between pod

versus

container versus deployment so this is

question number one if you are not able

to answer go back and watch this

specific slide okay so here in this

slide I clearly explained container

versus pod versus deployment okay so

this is question number one and the

question number two will be what is the

difference between deployment and

replica set

so people will confuse here don't worry

it's very simple so replica set is

basically a kubernetes controller

that is the one that is implementing the

auto healing feature of your pods if a

pod is getting killed or if a deployment

says that increase the Pod by one so who

is doing this replica set controller so

replica set controller is the one which

is actually implementing the auto

healing capability by saying that the

actual state in the deployment yaml

manifest or the actual state in the

deployment should be on the cluster okay

so this is the desired state that is

provided in the ml manifest which always

have to be same on the axle state so

when you create a deployment a replica

set is created automatically which is

responsible for tracking this control

controller behavior in kubernetes

okay so this is it now let us try to see

this in Practical and don't get confused

it's a very simple topic even if you

refer to the kubernetes documentation

you can learn about deployments in 30

minutes not more than that okay so let

me stop this uh here and let me share

the screen

stop now let's take a terminal and let's

try to implement this life

so

share screen

perfect let's say I'm new to kubernetes

okay and I don't know anything only

thing that I know is from the last

classes if you use Cube CTL command you

can interact with the kubernetes okay so

you just have created a kubernetes

cluster it can be minicube cluster or it

can be the Clusters on AWS using cops

that I showed you okay minicube also we

have seen it's very simple to create so

I'm assuming all of you have a

kubernetes cluster and Cube CTL

configured now if I do Cube CTL get pods

okay so at this point of time there is

something so let me delete it okay so

that the demo will be clear so I have

one deployment and what I'll do using

Cube CDL I'll just delete it so that we

we are ready for our demo Cube CDL

delete deploy this specific thing now if

you notice Cube CTL

get pods there are no pods Cube CTL get

deployed there are no deployments so in

real world scenarios you cannot do all

of the like you know you cannot enter

multiple commands so you can just say

Cube CTL get all so it will list

everything like the deployments for

services all the kubernetes by default

Services it will list out in the

particular namespace okay perfect so

this is one interview question again if

somebody asks you how do you list out

all the resources that are available in

a particular namespace you can just say

Cube CTL get all and if you want for all

the namespaces just say Cube serial get

all minus a then it will list out for

all the namespaces all the applications

in your cluster okay but for now

just because uh you know I was doing

that command I just thought of

explaining you if you go back to the uh

specific course of today we will see

what will happen to kubernetes spots

because we stopped from there so I have

a port.aml let me open this spot.yaml

this is the same thing that we saw in

the last class okay so what is it just a

kubernetes pod simple kubernetes point

this is the example that we have copied

from the kubernetes documentation okay

and what is it doing there is a simple

nginx image and let us try to create it

how do you create it Cube CTL apply

minus F pod dot yaml now what happens as

soon as we apply it this will be created

on your kubernetes cluster let us see if

it got created Cube CTL get parts

awesome it got created how do we check

the IP address of this just say minus or

wide so it will print Cube CTL get pods

will just give you some information and

if you do Cube CTL get pods minus o wide

it will give all the information about

the part okay or you can also give a

cube CTL described anything is possible

so Cube CTL get pods minus so wide where

you got the IP address of this so what I

will do is to access this pod I need to

log into my kubernetes cluster so

because my kubernetes cluster is mini

Cube so mini Cube just says enter this

command called mini Cube SSH but if you

are using a remote kubernetes cluster

you have to use SSH minus IE your

identity file right followed by the name

or the node name or the IP address of

the node so that you log into your

kubernetes cluster but because minicube

makes our life easy for development it

just says that enter mini Cube SSH and

we will convert the command accordingly

and you will log into the kubernetes

cluster so now just say curl and this

specific thing your application is

running this is something that we saw in

the last class as well now I'll show you

something that will make you understand

why deployments are required the same

thing that I explained in the theory as

well just say Cube CTL

delete pod what was the name of the part

sorry I forgot Cube CDL get pods

okay let me copy this Cube CTL delete

odd engine X let's say someone perform

this action accidentally someone deleted

a pod on your cluster so now when I

click on the enter button or let's say

for some reason your pod got deleted

because of some network issues or for

some reason your pod got deleted now the

customer who is trying to access your

application usually customers won't

access using mini Cube SSH and all

because you know they are external

people who are outside your kubernetes

cluster so in future classes when we

learn about Ingress we learn about

service you will understand how that

happens in real time but for for now

just assume because we are still in the

concept of part you have done mini Cube

SSH and when you try to access the same

application that we did okay so using

the IP address I think I forgot the iPad

yeah curl 172 17003 now you will notice

that the application is not reachable

because you have killed the Pod the

application is gone now you should ask

me then what is the advantage of

kubernetes because the same thing was

happening in Docker also you told me

that kubernetes is a very robust

platform kubernetes supports Auto

healing water scaling weight so

kubernetes supports all of that but you

have to create the correct resource you

have created a pod instead you have to

create deployment okay now the next

question will be Abhishek but this

syntax is very huge how do I remember

all of these things don't worry nobody

remembers all of these things and it is

also not suggested to remember all of

these things what you need to do is just

go to official kubernetes documentation

or any examples that you want to follow

you can you are open to follow any

specific website

just go to the deployments and you know

here you have an example so in the

future if you want to deploy your

application you can simply modify this

image here right and if your application

has some volumes and specific thing you

can take example in the kubernetes

documentation itself you have a lot of

examples I'll show you you can pick the

right examples and then you can just

update the fields which are required

okay so that is how you have to deal

with it don't remember all of this

syntax because it's waste of time in

your interview nobody will ask you to

write the syntax people will ask you

what is image in container or what is

the labels and selectors what is the

role of it or what is the role of

replicas this is what people will ask

you okay so this is the same thing I

have on my cluster as well and if you

see here this is what I am telling you

inside deployment what you will do is

you will say how many parts you want to

create do you want to create one part do

you want to create two part do you want

to create three parts for example I'll

show you that I want to create only one

pod for now

now let us see what happens as soon as I

create the deployment Cube CDL get sorry

apply minus F or create minus f

deployment.yama as soon as I do this the

deployment is created but the magic is

Cube CTL get deployed deployment is

there but you will also notice when you

do Cube CTL get pod spot is also created

so this is what I was telling you so who

has created this part like I told you

the ecosystem is once you create a

deployment it will create something

called as a replica set for you and

replica set will create a pod for you

okay so we can see this same

if you do Cube CTL get deploy you notice

that the deployment is there then you do

just say Cube CTL get RS you'll see that

the replica set is also there RS is

short for shortcut for replica set okay

and then when you do Cube CTL get

powered your pod is also created okay

but what is the deployment deployment is

an abstraction that means you don't have

to create this replica set you don't

have to create this part what deployment

says is okay just create one resource

called deployment.yaml and I'll take

care of everything for you because I am

responsible for implementing Auto

healing and zero downtime in kubernetes

okay but deployment will not do it

directly deployment will take help of

replica set and replica set is a

kubernetes controller which is actually

doing it what is a kubernetes controller

kubernetes controller is nothing but a

go language application that kubernetes

has written which will ensure that you

know a specific behavior is implemented

now in this case what is the behavior

the behavior is that the desired State

or the desired number of replicas inside

the deployment have has to be available

on the cluster I'll show you live let's

take two terminals here okay I took two

terminals here and let us see it in life

let me just say Cube CTL

delete

pod this is the name of the Pod right

and before I click on enter what I'll do

is I'll watch for the parts Cube CTL get

pods minus W when you do minus W that

means you are watching it will show you

in live what is happening with the pods

so as soon as I click this button you

will notice that the Pod is getting

deleted but see the magic what is the

magic that replica set is doing for you

even before like it initially it

initiated the terminating signal but

before the termination is done it is

just terminating not terminated okay so

before the termination is done what it

has done is you know a new container is

getting created that means a new pod is

getting created and you see both of the

actions has taken place in parallel

terminating running that means

the termination and the running are

happening in parallel if someone there

is a malicious user let's say I am a

malicious user or I am a wrong person

who has deleted your pod then even

without your consent replica set because

it it knows that the deployment has told

it that the desired replica account for

the Pod is one so it ensured that the

Pod is always in running State even if

someone deletes it there is one part

that is available so if you if you just

see Cube CTL get pods you will notice

the same behavior so

right so the Pod is running now let me

increase the Pod count and show you just

save Vim deployment.yaml let me increase

the Pod count to three

okay now again let me apply this

manifest Cube CDL apply minus F

deployment.aml you can also use Cube CTL

edit command but apply is more easy okay

so that's why I just modify uh the yaml

file here and then I just use the apply

command so Cube CTL apply minus F

deployment or DML now let us again watch

for the pots Cube CTL get pods what is

the expectation here the replica count

should be increased by three and who has

to do it replicas it let us see if

replica set is doing it

configured now let us see what is going

to happen

if you see here there are three parts

okay now who has created these three

parts again replica set so deployment is

just a wrapper it's just a high level

abstraction deployment by default will

not do anything for you it's just like a

high level abstraction and who does the

things for you replica set controller

okay now let me delete one of the pods

and let us see what happens okay Cube

CTL get pods so there are three parts

right let let me delete one of these

parts randomly and again what replica

set has to do is it has to make sure

that three parts are running

irrespective of the one part that you

are deleting two parts so you are

deleting it also it always has to ensure

three ports are running because it's a

kubernetes controller that is

responsible for keeping a state that is

the kubernetes controller that is

responsible for auto healing let me

click enter

now let me see

uh

is the Pod deleted okay I just said get

sorry I have to do the delete operation

I was just confused why uh kubernetes is

not saying anything yeah delete a pod

and now let us see what is going to

happen see again the behavior is the

same even before deleting or parallelly

deletion and creation has happened so

that's what is the beauty of kubernetes

if you say Cube CTL get parts you will

see that the three parts are running

awesome right so this is how kubernetes

implements the auto healing capability

using deployment

replica set and pod okay so in real

world kubernetes or in production

scenarios you will never create a pod

directly but what you will do is you

will create a deployment okay so this

deployment will create replica set for

you and replica set will create a pod

for you okay so this is how kubernetes

will work in real time so your

assignment for today will be create a

deployment okay so take the same example

replace your image okay so here replace

your image and play with the kubernetes

like I showed you okay uh kill a pod and

see what is going to happen create new

one increase the replicas and see if

replica sets are getting created or not

okay so if you see here Cube CTL get RS

this is the replica set you have not

created but replica set is automatically

getting created right and that is

creating pods for you so understand this

Behavior Keep playing with it okay take

more examples of deployments you can

just search for you know just come here

randomly kubernetes deploy employment

examples

okay and just search for GitHub

you'll notice bunch of kubernetes

examples okay this is official

kubernetes repository and you have bunch

of examples here just take guest book

example okay and choose any of the

things that you want all in one for

example where you have the uh this one

here I guess

all in one dot yaml and here you have a

deployment so you can find bunch of

examples in the internet okay just play

around with these examples because this

is what you will do in real time as well

on a day to day basis you will not

create faults but you will create

deployments okay whether you are

creating this deployments directly or

you will put it in the git so those are

in the future but now you have to

understand this concept how kubernetes

does zero time deployment what is zero

time deployment if you see here I

increase the replica count from one to

three but it happened without disturbing

the existing Port even I deleted one

part okay then it did not Implement exp

sorry disturb the existing application

no live traffic is destroyed because

parallel creation and deletion has taken

place so user will not face any

disturbance okay of course there is role

of service there is role of Ingress

which we are going to learn in the

future but till this point you have to

be clear with the concept and I hope you

enjoy the video if you like the video

click on the like button if you have any

questions put the timestamp and ask the

question to me then if you like you know

feel there is someone who is going to be

benefited by these videos please share

the videos thank you so much I'll see in

the next video take care everyone

English (auto-generated)

###




Certainly! Below are the structured notes based on the provided transcript:

---

### **Notes: Kubernetes Production Systems - Day 32 of Complete DevOps Course**

#### **Presenter: Abhishek**

---

### **1. Introduction to Kubernetes in Production**

- **Delayed Start**: Apologized for the delay and emphasized that it's never too late to learn.
- **Focus of the Session**:
  - Managing the lifecycle of Kubernetes clusters in production systems.
  - Understanding how DevOps engineers handle creation, configuration, upgrades, and deletion of Kubernetes clusters.
<!--SR:!2025-04-21,1,230-->

---

### **2. Limitations of Local Kubernetes Clusters**
?
- **Popular Local Platforms**:
  - Minikube, k3s, k3d, microk8s.
  - These platforms are excellent for learning and development environments but are not suitable for production use.
- **Reasons for Avoiding Local Clusters in Production**:
  - Lack full-blown Kubernetes capabilities.
  - Do not support high availability setups.
  - Not designed for enterprise-level support or production-grade reliability.
<!--SR:!2025-05-08,3,230-->

---

### **3. Kubernetes Distributions**
?
- **Definition**:
  - A distribution is an enhanced version of open-source software tailored for specific needs.
  - Example: Linux distributions (Amazon Linux, Red Hat, CentOS, Ubuntu).
- **Kubernetes Distributions**:
  - Managed services or enhanced versions of Kubernetes provided by enterprises.
  - Examples:
    1. **Amazon EKS** (Elastic Kubernetes Service).
    2. **Red Hat OpenShift**.
    3. **VMware Tanzu**.
    4. **Rancher Labs** (Rancher).
    5. **Google GKE** (Google Kubernetes Engine).
    6. **Azure AKS** (Azure Kubernetes Service).
- **Why Use Distributions?**
  - Provide better customer experience and support.
  - Offer instant resolution for issues through licensed agreements.
  - Include additional tools, wrappers, and plugins for easier management.
<!--SR:!2025-05-08,3,230-->

---

### **4. Differences Between Kubernetes and Managed Services**
?
- **Self-Managed Kubernetes**:
  - Installed directly on EC2 instances or bare metal.
  - No external support; the organization manages everything.
- **Managed Services (e.g., EKS)**:
  - Provided by cloud providers like AWS, Google, or Azure.
  - Includes additional features, tools, and support.
  - Example: EKS has `eksctl` for managing clusters.
<!--SR:!2025-05-08,3,230-->

---

### **5. Popular Kubernetes Tools for Production**
?
- **COPS (Kubernetes Operations)**:
  - Widely used for managing hundreds of Kubernetes clusters.
  - Simplifies installation, upgrades, modifications, and deletions (lifecycle management).
  - Preferred over older tools like Kubeadm due to its automation and ease of handling upgrades.
- **Other Tools**:
  - **Kubeadm**: Requires manual steps for cluster setup and upgrades.
  - **Kubespray**: Another tool for managing Kubernetes clusters.
  - **OpenShift**: Uses Ansible playbooks for installation (requires Red Hat subscription).
<!--SR:!2025-05-08,3,230-->

---

### **6. Steps to Install Kubernetes Using COPS**
?
#### **Prerequisites**:
1. **AWS CLI**:
   - Configure using `aws configure`.
   - Requires AWS access key ID, secret access key, region, and output format.
2. **Python 3**:
   - Required for AWS CLI.
3. **kubectl**:
   - Command-line tool to interact with Kubernetes clusters.
4. **S3 Bucket**:
   - Used to store cluster configurations.
#### **Installation Process**:
1. **Create S3 Bucket**:
   - Example: `cops-ab-storage-1`.
2. **Run COPS Command**:
   - Example:
 ```bash
 cops create cluster --name=k8s-local --s3-bucket=cops-ab-storage-1 --region=us-east-1 --node-count=3 --node-size=t2.micro --ebs-volume-size=8
 ```
1. **Configure Domain**:
   - For local testing: Use `.k8.local`.
   - For production: Configure Route 53 with a custom domain (e.g., `example.com`).
4. **Finalize Cluster Setup**:
   - Wait for the cluster to initialize (takes a few minutes).
<!--SR:!2025-05-08,3,230-->

---

### **7. Cost Considerations**
?
- **AWS Billing**:
  - Creating EC2 instances, EBS volumes, and S3 buckets incurs costs.
  - Use free AWS credits or avoid running experiments if you want to save money.
- **Alternative for Learning**:
  - Use **Minikube** for local Kubernetes experiments.
  - Avoid running production-like setups unless necessary.
<!--SR:!2025-05-08,3,230-->

---

### **8. Key Takeaways**
- **Avoid Local Clusters in Production**:
  - Use managed services or enterprise distributions like EKS, OpenShift, or Rancher.

- **Understand Lifecycle Management**:
  - Tools like COPS simplify the management of Kubernetes clusters at scale.

- **Prepare for Interviews**:
  - Highlight your experience with production-grade tools like COPS, EKS, or OpenShift.
  - Avoid mentioning local tools like Minikube in interviews.

- **Custom Domains**:
  - Use `.k8.local` for local testing and custom domains (configured via Route 53) for production.

---

### **9. Next Steps**
- Upcoming Topics:
  - Kubernetes Pods.
  - Deployments, Services, and other core concepts.
- **Practice**:
  - Experiment with Minikube for local learning.
  - Use AWS credits to explore production-like setups with COPS.

---

### **Conclusion**
- Kubernetes in production requires robust tools and managed services.
- Focus on understanding lifecycle management and enterprise distributions.
- Stay consistent and patient while mastering Kubernetes—it’s a marathon, not a sprint!

---

If you have any specific questions or need further clarification, feel free to ask!
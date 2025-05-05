#space/kubernetes/38-day
### **Kubernetes Ingress - Comprehensive Notes**  

#### **1. Introduction to Ingress**
?
- **What is Ingress?**
  - Kubernetes Ingress is an API object that manages external access to services in a cluster, typically HTTP/HTTPS.
  - It provides **load balancing, SSL termination, and name-based virtual hosting**.
  - Acts as a **reverse proxy** to route traffic to different services based on rules.
<!--SR:!2025-05-08,3,230-->

- **Why Ingress?**
?
  - **Problem 1:** Kubernetes **Services** (NodePort/LoadBalancer) lack **enterprise-grade load balancing** features (e.g., sticky sessions, path/host-based routing, TLS termination).
  - **Problem 2:** Using **LoadBalancer-type services** for each app leads to **high costs** (cloud providers charge per static IP).
<!--SR:!2025-05-06,1,190-->

#### **2. Ingress vs. Traditional Load Balancers**
?
- **Legacy Systems (VMs/Physical Servers):**
  - Used **Nginx, HAProxy, F5** for advanced load balancing (sticky sessions, path-based routing, WAF, etc.).
- **Kubernetes Services Limitation:**
  - Only **round-robin load balancing** (basic traffic distribution).
  - No support for **TLS, host-based routing, or granular traffic rules**.
<!--SR:!2025-05-06,1,190-->

#### **3. How Ingress Solves These Problems**
?
- **Ingress Resource:**
  - Defines **routing rules** (e.g., `example.com/app1` → Service A, `example.com/app2` → Service B).
- **Ingress Controller:**
  - A **pod** that reads Ingress rules and configures the underlying load balancer (e.g., Nginx, Traefik, AWS ALB).
  - **Example Controllers:**
    - Nginx Ingress Controller
    - HAProxy Ingress
    - Traefik
    - Istio Gateway
<!--SR:!2025-05-08,3,230-->

#### **4. Key Features of Ingress**
?
1. **Host-Based Routing:**
   - Route traffic based on domain (`blog.example.com` → Blog Service).
2. **Path-Based Routing:**
   - Route based on URL path (`/api` → Backend, `/app` → Frontend).
3. **TLS Termination:**
   - Terminate SSL/TLS at the Ingress level (HTTPS support).
4. **Load Balancing:**
   - Advanced algorithms (sticky sessions, least connections).
<!--SR:!2025-05-06,1,190-->

#### **5. Practical Setup (Minikube Example)**
?
##### **Step 1: Enable Ingress on Minikube**
```sh
minikube addons enable ingress
```
- Installs the **Nginx Ingress Controller**.
##### **Step 2: Verify Ingress Controller**
```sh
kubectl get pods -n ingress-nginx
```
- Ensures the Ingress controller is running.
##### **Step 3: Create an Ingress Resource**
**Example `ingress.yaml`:**
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
spec:
  rules:
  - host: "foo.bar.com"
    http:
      paths:
      - path: /bar
        pathType: Prefix
        backend:
          service:
            name: my-service  # Your service name
            port:
              number: 80      # Service port
```
- Deploy:
```sh
kubectl apply -f ingress.yaml
```
- Check status:
```sh
kubectl get ingress
```
##### **Step 4: Test Host-Based Routing**
- Update `/etc/hosts` (for local testing):
```sh
echo "$(minikube ip) foo.bar.com" | sudo tee -a /etc/hosts
```
- Access via:
```sh
curl foo.bar.com/bar
```
<!--SR:!2025-05-08,3,230-->

#### **6. Production Considerations**
?
- **Ingress Controllers:**
  - Use **Helm** or **official manifests** for production-grade setups (e.g., AWS ALB, Nginx).
- **TLS Setup:**
  - Use **Cert-Manager** for automatic SSL certificates (Let’s Encrypt).
- **Scalability:**
  - One Ingress can handle **multiple services** (unlike LoadBalancer per service).
<!--SR:!2025-05-06,1,190-->

#### **7. Common Interview Questions**  


1. **Why use Ingress over LoadBalancer?**
?
   - Cost-efficient (single IP for multiple services).
   - Supports advanced routing (host/path-based, TLS).
<!--SR:!2025-05-08,3,230-->



1. **What is an Ingress Controller?**
?
- A pod that implements Ingress rules (e.g., Nginx, Traefik).
<!--SR:!2025-05-08,3,230-->




1. **How does Ingress handle HTTPS?**
?
- Terminates TLS at the Ingress level (offloads SSL decryption).
<!--SR:!2025-05-08,3,230-->



---  
### **Key Takeaways**  
✅ **Ingress** = **Routing rules** for external traffic.  
✅ **Ingress Controller** = **Load balancer** that enforces rules.  
✅ Solves **cost** (single IP) and **advanced routing** needs.  
✅ **Minikube setup:** `minikube addons enable ingress` + `/etc/hosts` for local testing.  

For a **detailed practical guide**, check the linked video in the description! 🚀


# Transcript


hello everyone my name is Abhishek and welcome back to my channel so today we are at day 38 of our complete devops

course and in this class we will be learning about kubernetes Ingress so people find this concept slightly tricky

or people find it slightly difficult because of two reasons one is they don't understand why Ingress is required right

if you don't understand why Ingress is required then definitely you will find the topic complicated and the second

thing is practical implementation so people try it on their mini Cube clusters or on their local kubernetes

clusters and they will not succeed with the setup so that's one of the other reasons why people find it difficult

I've also seen few videos and we also have created a end-to-end video on

Ingress on our particular channel so I'll also share the link in the description so that you can follow the

link where we have done end to end complete practical on how to set up Ingress and all of the things don't

worry even in today's class I'm going to explain you both the theory and the Practical okay so even if you

watch this video till the end you will get a very detailed understanding on why Ingress is required and how to

practically install Ingress and try out the things so you know if you have followed our previous class on service

Deep dive you know you'll be easily able to understand today's topic so if you haven't watched the video 37 that is on

Deep dive of kubernetes services I'll highly recommend you to go and watch video number 37 on the complete devops

course and only then come back so that you understand the concept of Ingress very well okay now without wasting any

time because we have to cover a lot of things in this specific video let me jump onto the video okay so firstly what

is ingress so you must be asking me that Abhishek

in the last class we used kubernetes services and service was offering me a lot of

good things right so I explained to that service was offering you service Discovery mechanism on kubernetes so it

is solving this problem it was also doing a load balancing for you right services for doing the load balancing we

have seen using the cube shark utility as well in the last video and it was also exposing the applications to

external world then why you need a tool like Ingress or why you need a concept like Ingress and what problem is it

solving so before 2015 uh December I guess or November so that was before

kubernetes version release 1.1 Ingress was not even there okay so

people were using kubernetes without Ingress that was that means people were using kubernetes with just service

concept okay and Ingress without Ingress so what they used to do was similarly uh

like we were doing till the last class so people used to create a deployment which would create a pod right and

additionally because you are creating a deployment you you will get Auto healing and auto scaling right these features

and then you will create a service on top of it so that you can expose your application within your kubernetes

cluster or outside the kubernetes cluster using the load balancer that is using the load balancer mode of

your service but there are some practical problems which people realized after using kubernetes okay so once

people started using kubernetes so obviously these users who migrated to kubernetes were migrating from the

Legacy systems like like people used to have virtual machines or physical servers on top of that they used to

install their applications okay and what people used to do was they used to use a

load balancer so these load balancers were something

like you know people used to use uh engine X engine X or you know people used to use

fi load balancer or any other load balancers that they want to use on their

virtual machines or physical servers okay and these are some Enterprise load balancers

okay so what is enterprise load balancing so they offer very good load

balance and capability load balancing capabilities like for example you can do ratio based load balancing that is you

can say uh send three requests to pod number one seven request to pod number two you don't have pods in the virtual

machines but just for your understanding I'm explaining you okay you can do ratio based you can do sticky sessions that

means if one request is going to pod one then all the requests of that specific user have to go to pod one only okay so

this is called sticky sessions they can use path based load balancing they can use domain or host based load balancing

okay they support uh you know whitelisting that means only allow

specific customers to access the application they can do blacklisting that means to say okay so these

customers are like hackers do not allow any users coming from Pakistan for example or do not allow any users coming

from USA do not allow any users coming from Russia so you can Define your traffic and you can say that okay so

this is the concept or these are the capabilities that Enterprise load balancers support

now the problem was when these people who were doing this virtual machines and

applications when they migrated from this to kubernetes okay so initially

they were very happy that kubernetes was offering you Auto healing Auto scaling automatic service Discovery uh exposing

the applications to external world so you know people used to create the same things that we we did like you know they

used to create a deployment after the deployment they used to create a service right and using the services they used

to get all the features that are available and using the deployment they used to get the healing and scaling

capabilities but off late they realized that okay service was providing load balancing mechanism but the load

balancing mechanism the service was providing is a simple round

Robin load balancing what is round robin if you are doing 10 requests what this

specific uh service using Q proxy right Cube proxy is updating your IP table rules what it does is it will send file

requests to pod number one and it will send five requests to pod number two let's assume there are two pods but this

is a very simple load balancing because people were coming from uh virtual machines and they used to get all of

these features against what they are getting in kubernetes is a very simple round robin they are not getting all of

these features and these are only list of features I gave you the commercial or the Enterprise load balancers they can

offer hundreds of features okay so you can simply read and you will see that you can do a web application firewall

you can do uh you know a lot of configurations like TLS you can add more

security using TLS so these load balancers offers all of these features okay so I within uh during this video

itself I have listed 10 close to 10 features which kubernetes was not supporting so these people were unhappy

with kubernetes okay so they said that okay a service was doing few things but still we are not happy and the other

thing that they have noticed this is problem number one and the problem number two is uh you can expose your

applications to external World using load balancer mode service right you can create your service as load balancer

mode but what is the problem is every time like let's say you have 100 Services if

you take companies like Amazon they have some thousands of services okay so for each of the service when they create the

service as type load balancer mode you know the cloud provider was charging

them for each and every IP address because these are Dynamic and public IP

address sorry sorry these are static public IP address so they don't charge

for the dynamic IP address but whenever the IP address becomes static so for static load balancing IP addresses and

static public load balancing IP address so if there are thousands of micro services or if there are thousands of

services that you require for your applications on kubernetes so cloud provider was charging very heavy

and Cloud providers are right in their terms because you are asking them for a static load balancing IP address and

they are charging you for money okay so this is another problem that these these people were facing in the previous

example okay what they used to do is because there was only one load balancer

okay in the contrary you have for each application you have one service right but on the physical or virtual virtual

servers people used to create one load balancer whether you have one application two application three applications so they used to configure

in their load balancer like okay if the request is coming to amazon.com

slash ABC send request to app one if it is coming to slash XYZ go to app2 and they

used to only expose this application uh sorry they only used to expose these load balancer with static public IP

address so what is happening is here they just

have one IP address which they are getting from the cloud provider or even within their organization they are only

exposing one specific IP address whereas here what is happening is you are exposing thousands of IP address and you

are getting charged so this is problem number two so let us write the two problems so that it is very clear to you

before I jump on to Ingress and how Ingress is solving this problem what is the problem number one

okay so the problem number one that we discussed is

Enterprise and

TLS that is secure load balancing capabilities so if you are using a service this thing

is missing people who are coming from the virtual machines they had very good load balancing capabilities like one two

three four five that I discussed in the previous slide like for example I can give you a basic example like it is

missing sticky sessions then it is missing uh TLS based load balancing that is secure load balancing https based

load balancing then the other thing it is missing was uh some uh a path based

load balancing like I just told you host based load balancing or domain-based load balancing so if request is going to

amazon.com go to this specific application if the request is going to amazon.in go to other applications so

that is host based load balancing and then there are many other things like uh like I told you ratio based load

balancing so I can write this list to 15 to 20 different things on top of my head but

you know it will only waste our time so what what is the thing is the services

in kubernetes was not offering all of this Enterprise level capabilities and the second point is

I just told you that if you are creating a service of type load balancer

then for each service kubernetes will charge you kubernetes will not charge you the cloud provider will actually

charge you right so the cloud provider will charge you this is a very important interview question as well people will

ask you what is the difference between load balancer type service and the uh traditional

kubernetes Ingress okay so what you will answer is the load balancing type service was good but it was missing all

of these capabilities and also you will say that the cloud provider will charge you for each and every load balancer

service type like if there are thousands of services you will be getting charged for thousands of load balancer static

public IP addresses okay so these are the two problems and these two problems you have to remember and it they have to

be on top of your head because this is very important interview Point okay so people will definitely ask you in your

uh interviews that what is ingress or why Ingress has to be created what is difference between load balancer service

type and Ingress so these questions will keep coming so definitely you have to remember those two points and now how

Ingress is solving those problem okay so what now kubernetes said is so kubernetes also admitted the problem

so kubernetes said that yeah we understand and till that point what happened was open shift open shift which

is red hat openshift which is again a kubernetes distribution they have implemented something called as

openshift routes which is very similar to kubernetes Ingress so kubernetes has understood that okay openshift has also

implemented something to solve the problem and even many users are requesting us saying that okay so this

is a very valid problem when we were on Virtual machines this is VM and this is kubernetes

okay so these customers kept on complaining on kubernetes GitHub page that when we were on Virtual machines we

were enjoying all the good capabilities of load balancers okay and because of which our

applications were very secure because of which you know we had reduced cost but once we moved to kubernetes we realized

that this is a very big problem so kubernetes people have also agreed to

it and what people at kubernetes said is okay we will Implement something called Ingress

okay so we will allow the users of kubernetes to create a resource called

Ingress and what you people have to do who are these people like nginx

F5 ambassador okay traffic

uh what are the other things like okay there are bunch of h a proxy so

these were the top load balancers that people were using uh here on the virtual

machines I don't think Ambassador was there till now but okay that doesn't matter so people were using these uh top

load balancers and what kubernetes said is okay I cannot Implement for each and every load balancer so what I'll do is I

will tell my users to create something called as a Ingress resource okay so as a kubernetes user you will create a user

sorry you will create a resource called Ingress resource and now all of these

load balancers okay so all of these companies what they will do is kubernetes set them that you create

something called as Ingress controller now what is this Ingress controller okay

so on a high level if you are creating Ingress resource on your kubernetes cluster and if you are saying that I

need a path based routing for example okay so you realize that you are missing

the path based routing on kubernetes which you are very heavily using on your virtual machines so you can come to your

kubernetes cluster create a Ingress resource I'll show you the example don't worry and you can say that okay I want

to create path based routing so you can kubernetes at that okay create one yaml file and inside the DML file say that

you know I want Pathways routing so you said the same thing but who will implement this okay so who will decide

that which load balancer you want to use so there are hundreds of load balancers in the market so what kubernetes said is

okay we cannot support all of you uh you know we cannot create the logic for all of you in the kubernetes master or the

API server instead you people create something called as Ingress controller okay what does English controller mean

so let's say that you want to create uh this specific capability using nginx

load balancer so the nginx company will write a nginx Ingress controller and as kubernetes users on this kubernetes

cluster you will deploy the Ingress controller okay you can deploy that using Helm charts you can deploy that

using yaml manifest okay and once you deploy the developer or again the devops

engineers they will create the Ingress ml service yaml resource for their kubernetes services okay so this Ingress

controller will watch for the Ingress resource and it will provide you the path based routing okay so if it is

complicated don't worry I'm explaining again okay so for example let's say this

is your kubernetes cluster what you are doing is you are creating a pod for example okay so you are writing

a yaml manifest for this and you have created a part now what will happen like I told you there is a component called

cubelet this cubelet will deploy your pod onto

one of the worker nodes so cubelet will also sit on the worker node and API server will notify cubelet using

scheduler that okay a pod is created and cubelet will deploy the pod

right and similarly let's say you are creating a service yaml manifest okay so there is

Q proxy and this Q proxy will what it will do this Q proxy will update the IP table

rules so for every resource that you are creating in kubernetes there is a component which is watching for that

resource and it is performing the required action okay so similarly even

if you are creating Ingress in kubernetes let's say you are creating Ingress

so there has to be a resource or component or a controller

which has to watch for this Ingress right so this was the problem so kubernetes said that okay I can create

Ingress resource but if I have to implement Logic for all the load balancers that are available in the market that is nginx F5 traffic

Ambassador HF proxy so kubernetes said that okay it is technically impossible I

cannot do it so what I'll do is I'll come up with the architecture and the architecture is user

will create Ingress resource okay

load balancing companies like nginx

F5 or any other load balancing companies they will write their own Ingress

controllers and they will place these Ingress controllers on GitHub and they will

provide the steps on how to install this Ingress controllers using Helm charts or any other ways and as a user instead of

just creating Ingress resource you also have to deploy Ingress controller okay

so it is up to the organization to choose which Ingress controller they

want to use what is ingress control at the end of the day it is just a load balancer

right sometimes it can be a load balancer plus API Gateway as well API Gateway offers you some additional

capabilities okay so end of the day what you need to do as

a user is on your kubernetes cluster the prerequisite is deploy a Ingress

controller which Ingress controller you will deploy let's say in your virtual machines world before you move to

kubernetes if you are using nginx so you will go to nginx GitHub page and

you will deploy the nginx Ingress controller onto the kubernetes cluster after that you will create Ingress

resource depending upon the capabilities that you need okay if you need path based routing you will create one type

of Ingress if you need TLS based Ingress you will create one type of Ingress if you need host base you will create one

type of Ingress so this is one time activity the one time activity for the devops engineers is to decide which

Ingress controller they want what what is ingress controller to decide which load balancer they want okay it can be

nginx it can be a file and they will go to their organizational GitHub page they will find the steps on how to deploy

this and once they realize how to deploy they will after that it can be one service two service 100 Services they

will only write the Ingress resource once they write the Ingress resource like you know Ingress does not have to

be one-to-one mapping okay you can create one Ingress and you know you can handle 100 of services as well using

paths you can say if path is a go to service one if path is B go to service two I'll show you that don't worry about

it but you understood the topic here right what was the problem why Ingress was introduced what is ingress

controller you understood all of these things so once you understand this concept it is very easy for you okay so

the major thing that you have to understand is the problem number one that Ingress is solving that is the

kubernetes services did not have Enterprise level load balancing capabilities and which is very very

important you will say that move to kubernetes because containers are very lightweight because all of blah blah

blah blah blah but without security without good load balancing capabilities

nobody will move to kubernetes and kubernetes has realized that so that's why they have introduced Ingress and the

problem number two was if you are creating a service of type load balancer mode

Cloud providers were charging you for each and every IP address okay so these were the two problems that Ingress was

solved you understood this thing and the next thing that you need to understand after this is okay how to install

Ingress like if you just followed the uh document till here or the presentation

tool here and to you will go to your kubernetes cluster you will find one Ingress example for the yaml file and

you will just create a Ingress resource what will happen nothing will happen because you don't have Ingress

controller on your cluster okay so if the Ingress controller is missing

then you might create one Ingress two Ingress hundred Ingress nothing will

happen because the Ingress is of no use without Ingress controller and what is ingress controller Ingress controller is

a load balancer that you can choose from the requirement okay if you want engine mixing nginx load balancer you can

create nginx Ingress controller if you want fi uh or big-ip load balancer you

can choose fi Ingress controller if you want uh HF proxy then you can create h a proxy Ingress controller okay once you

create this Ingress controllers once the Ingress resource is created on the cluster they will watch for the Ingress

resource and they will what they will do is basically they will provide you the required capability if you require path

based load balancing they will help you with path based load balancing if you require host base it will help you with host place so this is the theory part I

hope the thing is clear till here if it is not clear you have to watch the video one more time before we jump onto the

Practical because theory is very very important and your interview questions will be on Theory

perfect so now let me stop sharing here and let me jump on to my other screen

and show you how to install and how to configure okay so let me get my terminal

let me start sharing the screen perfect so this is my screen and in the

last class we learned to tell Services okay so what I'll do is let me check if I have the same state if I do Cube CTL

get pods uh yeah I have this deployments that we create these pods that we created in the last class and if I do

Cube CTL get service as well perfect the service is also available so this is the service and if you have followed my last

class I showed you how to create deployment.yaml and how to create service.aml as well and many people have

tried it I watched in the comment section so really appreciate you people for doing it perfect so now let us see

if I can access the service on the first fall okay so I created this service as node Port service and this is the port

so what I'll do is firstly I'll get the mini Cube IP address so this is the mini Cube IP address so I can just use the

curl command perfect so I am getting the output learn devops with some strong foundational

knowledge great so we are able to verify that our

service is running our service is watching the pods and the application is running now let me create a Ingress

resource for this and what we will do with Ingress is we will set up a host based load balancing okay so what is

host based load balancing like I told you uh host based load

balancing is nothing but we can say that okay in the previous example we try to access using a curl Command right so

instead of this curl command I can say that allow users when they try to reach

my uh specific service on example.com okay or you can say hello if they try to reach on example.com ABC okay so let us

try to see how to create this so again there is no rocket science what I'll do is I'll simply go to the kubernetes

official documentation so uh I'll just say kubernetes Ingress

perfect so this is the official page for kubernetes Ingress and what I'll do is I'll just go here okay see the example

also here what these people are saying is there is ingress managed load balancer that is ingress controller okay

so you create an Ingress resource and using this Ingress controller you know you can Define how to route the traffic

for your applications or how to route the traffic for your pods I'll also paste the link in the description of the

previous video I I think I did the two to three months back that is a very very informative video because we spent

almost more than one hour explaining you different types of Ingress resources how to create them how to create a path

based load balancing how to do uh you know SSL offloading how to do pass through so lot of things in very detail

after watching this video if you have time definitely watch that video as well okay perfect so here I'll just copy this

example instead of this let me go for host okay so this is an example which has host go through all the examples uh

you can just follow the documentation and you can go through all the examples as well so I will do Ingress Dot yaml

okay and what I will do is I'll just modify these fields so instead of Ingress wildcard host I'll just say

Ingress example so let let us keep the same food.bar.com

no problem with it right instead of example.com let us just keep it as food.bar.com and now I'll say if anybody

wants to reach my application my service okay so if they hit on food.word.com

slash bar okay so they should reach the service one and they should you know

typically you have to provide what is your service name and what is your service port so let us see what is my

service name Cube CTL get SVC so this is my service name right

so let me go to my Ingress yaml and let me just replace the service name my port

number is 18 so I don't have any problem there perfect so now let us deploy this file

Cube CDL apply minus F Ingress dot ml and let me see if something is happening

okay so the Ingress is created if I do Cube CTL get Ingress you will notice

that the Ingress is created but the address field is empty and you will see that nothing will happen like even if I

try to replace this curl command and instead of this what I'll do is I'll just say

food.bar.com so this is domain based routing okay so

what we are achieving here is domain based routing and I will say food.bar.com

for example what was the path that we have provided slash bar okay and if I

try to hit nothing will happen here okay so the reason here nothing is happening is because you haven't created Ingress

controller right so only if you create the Ingress controller then your uh this

thing will start working right the Ingress should be read by Ingress controller so what we need to do is

firstly install the Ingress controller so let me install nginx Ingress controller because nginx is a quite

popular one so again I'll just follow the kubernetes documentation and say kubernetes Ingress install and this is

the example documentation where I can search for Ingress controller here there

are bunch of Ingress controllers that kubernetes supports like I explained you uh there is nothing like kubernetes

supports actually as load balancing company is they can create the Ingress controllers okay so all of these

companies have implemented their Ingress controllers like nginx has their own you know Ingress controller ha proxy as

their own fi has their own okay so Apache has their own Ingress controller like you can also create your own

Ingress controller if you have a load balancer perfect so let us see nginx Ingress

controller because it's a very lightweight and simple Ingress controller let us see how to install

so if you are trying to install on minicube like they provide you some very easy steps uh where is this

nginx Ingress controller works with kubernetes perfect so you can just say try nginx Ingress

controller okay here the steps are not good I can just say kubernetes

nginx Ingress controller mini Cube because I am installing on

minicube so you know there is a very good documentation straight forward like you can use this same example that I'm

showing you just search for kubernetes engine X Ingress controller mini Cube and this is one simple command that will

install nginx Ingress controller on your minicube cluster so all that you need to do is mini Cube enable add-ons sorry

add-ons enable Ingress and that will create a Ingress controller for you right so it's a very simple step that

you have to do uh additionally like if you want to know how to deploy Ingress controller for your production like you

know in production you will not use mini Cube probably you are using uh eks clusters or openshift or some some

things right so in such gate go back to the documentation that I showed you just search for kubernetes Ingress okay go

back here and choose which Ingress controller you want let us say that you are doing this in your organization so

the steps you will follow is go to this Ingress controller and let's say you are using same engine Ingress controller

okay instead of choosing the page this page where you will only be able to install for mini Cube okay go back here

and in the documentation what you need to do so these are individual documentations right for every Ingress

controller you have their own documentation so you can come here and you can provide you can look for the

steps to install uh where is this

uh installation steps

let us search for install directly

okay let us choose a different Ingress controller I think they have complicated the steps here let me just search for

Ambassador okay so I took this randomly and here once you click on a quick start

so again this is asking for some okay don't worry uh so they are just asking

for all the sign up and all the things but uh you can just search for their uh

official product documentation and say for example Ambassador ambassador Ingress

controller installation okay so just search in Google like this and you will directly find the steps for installing

Ambassador uh Ingress controller or you know anything that is required for your organization so if you are doing on Mini

Cube you don't have to worry about anything like you know this is the official documentation for Ambassador installing uh Ambassador Ingress

controller okay so you have the direct steps here install with Helm install with Cube City ml so on your production

cluster you can choose probably Helm so click on the helm instructions and you can install them using these specific

commands but for mini Cube like I told you we just have to do mini Cube add-ons enable Ingress and it will install the

Ingress controller for us so let us see if the Ingress controller is installed or not end of the day English controller

is also a pod so Cube CDL get pods minus a because I am not sure in which

namespaces that is installed and just say nginx so see here so nginx Ingress controller

is up and running and in which namespace it has created its own namespace coil Ingress nginx okay and let us try to see

the logs and let us see if it has identified the Ingress resource that we have created Cube CTL logs minus n

uh what was the namespace Ingress hyphen engine X okay so click on enter and it

should identify the Ingress resource that we have created so what was the Ingress resource that we have created

see here Ingress example we have created in the default namespace and the name was Ingress example okay so it said that

it has identified that we have created Ingress resource and it has successfully synced as well so what does it mean like

it synced so it will go to the nginx load balancer configuration that is

nginx.com file okay and it will update some Ingress related configuration for

our load balancer related configuration for the English resource that we created and you don't have to go into these

details at this point of time so with using the Ingress controllers you will understand like you know don't learn

everything on day one eventually you will understand what is happening under the hood but as I showed you in the Pod

logs it has unidentified that you know Abhishek has created an Ingress called

example Ingress or Ingress example in the default namespace right this is a default namespace and it said that the

configuration is synced okay for example tomorrow you are getting any error what you need to do is you have to go back

and see in the pod.logs and now if you notice this address field was not there

previously but it is updated now okay so if I can show you that I don't know if my terminal okay so the logs are deleted

but address field was not there previously but after creating the Ingress controller this address field is

populated that means to say nerve I can access says you know I can use the

Ingress resource on food.bar.com what was the Ingress resource that we

have created this Ingress example now can be accessed on food.bar.com bar the

reason why I can access is because I have used the Ingress controller right

and the Ingress controller has updated the configuration so in your production

environment this is enough but if you are trying on your local kubernetes cluster you have to do one more

configuration that is you have to update the slash Etc host configuration okay

you have to update this file why you need to update this file and why you don't need to update this in production

is because because you are doing on local and you have not done this domain mapping so this food.bar.com has to be

mapped with the domain or IP address that is 192. 168 64.11 so this is my

mini Cube or you know this is my Ingress IP address not mini Cube this is my Ingress IP address so whenever I try to

say food.bot.com like if you ping and say food.bar.com this IP address does not exist right this domain does not

exist in your real-time production environment for example for people at Amazon they might be using amazon.com

and amazon.com is a real domain which does exist so in their Ingress resource what they will do is they will simply

mention here as amazon.com but because we have not a company and we are just doing a domain uh sorry demo video so I

cannot go to GoDaddy and purchase a domain right so that's why I simply said food.bar.com but what you can do is you

can mock this Behavior or you know you can create a dummy Behavior here like you can confuse your uh laptop or you

can you know you can update the ETC host file like sudo

update this host file and tell the host file that let's just provide the

password so you can just tell it right I know this IP address called

what was the IP address uh uh sorry I have to go back so you can tell

them that okay if somebody is trying to reach food or bar.com okay you can tell

them that I know this domain called fuba.bar.com and just provide this IP address and tell them that or tell the

machine that foo.bar.com okay so this IP address

sorry this domain will be resolved on this specific IP address okay so now if

you try to access food.bar.com it will try to reach 192.168.64.11 so this way you can mimic

the behavior or mock the behavior but this is not production use case in production you don't have to do all of these things you can simply ask your

manager or you can simply ask your company what is the domain that we use and you can provide the domain name now

if I try to Pink food.bar.com okay so you will notice that okay so the

request is not reaching yet but in some time you will notice that the request will reach onto food.bar.com okay so did

I do any mistake here no there is no mistake so okay uh there are some previous entries I have to delete this

entries okay uh right perfect so in some time what you

will notice is when somebody tries to reach on the specific food.bar.com you

can tell through your curl request or you can tell through uh you know slash Etc host even if you don't want to

update the ctcos you can also tell that in your curl command that okay I know what is uh food.bar.com you can resolve

if somebody tries to access food or bar.com just resolve this on IP address 192 168 64.11.

okay so now what will happen after some time is you will be able to reach the application uh just replace the curl

command with uber.paul.com and your application will be reached now okay I

can go into that practicals but before that you need to understand that go through this document where you will

find multiple other things like this was just example of uh host and Pathways routing right similarly you can do TLS

based routing so what is TLS just search for TLS here and you will see that you can create uh secure kubernetes

ingresses as well that means to say that you know uh this Ingress resource that I have created anybody can accept

access access on the HTTP request but in production real-time use cases for example you are accessing google.com you

will access on https so these all things can also be done using Ingress and if

you want to do this if you want to try the Practical okay you can follow the video that I am pasting in the

description okay it has everything like I have shown all the types of Ingress that were available I think it was made

two to three months back I have shown all the type of Ingress as TLS without TLS host based path based wildcard entry

so follow that video after this so that you understand the entire concept okay so if you like the button click on the

like button if you have understood the concept of Ingress definitely comment on the video and I'll see in the next video

take care everyone bye

English (auto-generated)

###


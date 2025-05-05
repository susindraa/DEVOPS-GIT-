


#space/kubernetes/39-day
### **Kubernetes RBAC (Role-Based Access Control) - Comprehensive Notes**  

---

#### **1. Introduction to RBAC**
- **What is RBAC?**
?
  - **Role-Based Access Control (RBAC)** is a security model that restricts system access based on **user roles** and **permissions**.
  - In Kubernetes, RBAC ensures:
    - **Users** (humans) have controlled access.
    - **Service accounts** (applications/pods) have restricted permissions.
<!--SR:!2025-05-06,1,190-->

- **Why is RBAC Important?**
?
  - Prevents unauthorized access (e.g., developers deleting `kube-system` resources).
  - Ensures **least privilege** (users/apps get only necessary permissions).
<!--SR:!2025-05-08,3,230-->

---

#### **2. Two Key Parts of Kubernetes RBAC**
?
1. **User Management**
   - Controls **human access** (e.g., developers, admins).
   - Kubernetes **does not manage users directly**—relies on **external identity providers** (e.g., AWS IAM, LDAP, GitHub SSO).
<!--SR:!2025-05-06,1,190-->

2. **Service Account Management**  
   - Controls **application/pod access** (e.g., a pod reading `ConfigMaps`).  
   - Every pod has a **default service account** (if none is specified).  

---

#### **3. Core RBAC Components**
?
- ![[Pasted image 20250420102249.png]]
-
<!--SR:!2025-05-06,1,190-->
  
  
  
  

| Component          | Purpose                                                                 | Example Use Case                          |  
|--------------------|-------------------------------------------------------------------------|-------------------------------------------|  
| **ServiceAccount** | Identity for pods/applications.                                         | A pod needing read-only access to Secrets.|  
| **Role**           | Defines permissions **within a namespace** (e.g., `get`, `list` pods).  | Granting developers access to `dev` namespace.|  
| **ClusterRole**    | Defines **cluster-wide permissions** (e.g., managing nodes).            | Admins needing access to all namespaces.  |  
| **RoleBinding**    | Links a **Role** to a **User/ServiceAccount** (namespace-scoped).       | Binding a `dev-role` to a `dev-team` user.|  
| **ClusterRoleBinding** | Links a **ClusterRole** to a **User/ServiceAccount** (cluster-wide). | Granting `admin` access to a user.        |  

---

#### **4. How Kubernetes Handles User Authentication**  
- **Kubernetes offloads user management** to external systems:  
  - **AWS EKS** → Uses **IAM users/roles**.  
  - **OpenShift** → Uses **Red Hat SSO/LDAP**.  
  - **Generic Kubernetes** → Supports **OAuth, Keycloak, GitHub SSO**.  
- **Example Flow**:  
  1. User logs in via **identity provider** (e.g., GitHub).  
  2. Kubernetes API server validates credentials.  
  3. Permissions are enforced via **RoleBindings**.  

---

#### **5. Service Accounts vs. Users**
?
- ![[Pasted image 20250420102305.png]]
-
<!--SR:!2025-05-06,1,190-->

| **Aspect**         | **Service Account**                          | **User Account**                          |  
|---------------------|---------------------------------------------|-------------------------------------------|  
| **Purpose**         | For pods/applications.                      | For humans (admins, developers).          |  
| **Creation**        | Defined in YAML (`kind: ServiceAccount`).   | Managed externally (e.g., IAM, LDAP).    |  
| **Default Access**  | Every pod gets a `default` service account. | No default access; must be assigned.      |  

---

#### **6. Practical Example: Creating RBAC Rules**
**Scenario**: Allow a pod to read `ConfigMaps` in the `default` namespace.
?
1. **Create a ServiceAccount**:
```yaml
   apiVersion: v1
   kind: ServiceAccount
   metadata:
     name: configmap-reader
```
2. **Define a Role**:
```yaml
   apiVersion: rbac.authorization.k8s.io/v1
   kind: Role
   metadata:
     name: configmap-viewer
   rules:
   - apiGroups: [""]
     resources: ["configmaps"]
     verbs: ["get", "list"]
```
1. **Bind Role to ServiceAccount**:
```yaml
   apiVersion: rbac.authorization.k8s.io/v1
   kind: RoleBinding
   metadata:
     name: read-configmaps
   subjects:
   - kind: ServiceAccount
     name: configmap-reader
   roleRef:
     kind: Role
     name: configmap-viewer
     apiGroup: rbac.authorization.k8s.io
```
1. **Attach ServiceAccount to a Pod**:
```yaml
   apiVersion: v1
   kind: Pod
   metadata:
     name: my-pod
   spec:
     serviceAccountName: configmap-reader
     containers:
     - name: nginx
       image: nginx
```
<!--SR:!2025-05-08,3,230-->

---

#### **7. Key Takeaways**  
✅ **RBAC = Role-Based Access Control** (for **users** + **pods**).  
✅ **Roles** define **permissions**; **RoleBindings** assign them.  
✅ **ClusterRole** → Cluster-wide access; **Role** → Namespace-scoped.  
✅ **ServiceAccounts** are for pods; **Users** are managed externally.  
✅ **Always follow least privilege** (grant minimal required access).  

---

#### **8. Hands-On Practice**  
- **Try OpenShift Sandbox** (free for 30 days):  
  - [OpenShift Sandbox](https://developers.redhat.com/developer-sandbox)  
  - Use it to experiment with **RBAC**, **Ingress**, and **Deployments**.  

- **Next Steps**:  
  - Create **custom Roles** and **RoleBindings**.  
  - Restrict **pod permissions** (e.g., block deletion of resources).  

---

**🚀 Pro Tip**: Debug RBAC issues with:  
```sh
kubectl auth can-i delete pods --as=system:serviceaccount:default:configmap-reader
```  
(Checks if a ServiceAccount can perform an action.)  

---  
**📌 Up Next**: Deep dive into **ClusterRoles** and **real-world RBAC policies**!

# Transcript


kubernetes are back is a very simple

topic to understand but if it is not

implemented right then it becomes very

complicated to debug the issues or you

know even it becomes very complicated

for your organization because kubernetes

rbac is directly related to security

when something is related to security

that itself means that it is very

important so you need to understand the

concept of rbac more than understanding

how to create a service account or how

to create role and how to create role

binding because that takes very less

time okay so if you want to understand

how to create a role how to create a

service account and how to create a role

binding you can also get things done in

10 minutes like you know you can create

a pod attach its service account and

understand the things but I'm not going

to talk about those things instead I'm

going to firstly explain you the concept

of rbac how and why is it very important

and after that I am going to talk about

okay what is service account what is

role and what is rule by name okay

perfect so firstly

kubernetes are back can be broadly

divided into two parts okay so the first

part can be

users

and the second thing can be your service

account or you know how Services manage

access in the kubernetes that can be any

applications that you are running in

kubernetes

so firstly let's try to understand this

user management Okay so

if you have a kubernetes cluster let's

say you have been using uh kubernetes in

mini Cube

or you're using a kubernetes and kind or

any any other kubernetes platforms let's

say so out of the box you get

administrative access to these clusters

right because they are your local

kubernetes clusters and you have been

playing around with this uh local

kubernetes clusters for uh you know

learning kubernetes but when you

try to use kubernetes in organizations

the very first thing that you would do

is let's say this is your kubernetes

clusters as devops Engineers or

kubernetes administrators

your primary responsibility would be to

Define access

so if there is a development team if

there is a QE team okay so how do you

define what access should developers

have onto this cluster and what access

should this QE engineer should have on

this cluster okay it's not that uh you

know any QE engineer can come to this

kubernetes cluster and uh Delete

resources in uh let's say Cube system

namespace

something related to etcd okay so these

things can become very very worse if

like you know if someone comes and

deletes something related to etcd then

you know it becomes very difficult for

your uh administrator or for your devops

team to get back the original state of

these uh things so effectively how you

can solve this problem is by defining

rbac that means to say role based Access

Control okay so what is role based

Access Control depending upon the role

of the person okay so R back depending

upon the role you would Define access so

role based access and this is the

control that what you are trying to do

okay so this is one part of it so how we

are manage how we are going to manage

the user management or how we are going

to manage the access to users in your

kubernetes cluster that is one part of

our bank and the second part is how you

are going to do deal with the service

account that means to say let's say you

have created a pod

through deployment or through any other

sources you have created a pod now what

access does this part need to have on

the kubernetes cluster so should pod be

uh having access to config Maps should

this pod have access to Secrets okay so

let's say as part of your application

you want to read config map as part of

your application you want to read secret

as part of your application can you

delete like let's say uh you have uh

create you you have deployed a pod and

what this pod is doing let's say this

pod is a malicious pod and what this pod

is doing is it is deleting uh some

content related to API server

okay or uh accidentally it is you know

removing some important files on your uh

system so how do you restrict this so

again the same thing similar to user

management you can also manage the

access for your services or for your

applications that are running on the

cluster using the rbac okay so two

primary responsibilities of our Mac is

user management as well as

managing the access of the services that

are running on the cluster

now how this is done on a broad level

okay before I jump into the depth depth

of how do you manage all of these things

on a broad level in kubernetes you have

three major things okay for managing the

RBX one is

like I told you service accounts

or users

second thing is called as kubernetes

rules or cluster roles

third is

role binding

or cluster role binding

so I'll try to explain the difference of

roles and cluster role binding and

cluster role binding as well don't worry

about it but first of all these are the

high level three things that can Define

r back in kubernetes okay buy it but but

how do you create users in kubernetes

okay so if we go back to the previous

slide here I told you there are two

essential things one is users and one is

service accounts okay but how do you

create users like for example if you are

using mini Cube okay all these days you

might be using mini Cube okay so if you

go inside the mini Cube can you create a

user like on my personal laptop I can

use it's a let's say it's a Linux laptop

I can use something like user ad

okay and using user ad I can create a

user on my Linux system and I can share

this access like you know uh with

relevant I can say that you know I'll

create a user called developer and

someone who

has this username and password they can

log into this Linux box and they can do

specific set of actions on this Linux

box but how do you do this on kubernetes

so in kubernetes also can you use this

command to create users no you can't

okay so what kubernetes says is

kubernetes does not deal with user

management

whereas kubernetes offloads the user

management to Identity providers

so this is very important to understand

because service accounts is something

that you can create okay so anyone can

simply log into a kubernetes cluster

even on your mini Cube cluster you can

log in and you can create a service

account but this part is very important

to understand because when you are going

to work in an organization let's say

your organization is using eks your

organization is using AKs or openshift

so how do you create these users how can

you say that okay devops engineer should

log in with this specific user or in in

devops team let's say you have 10 users

so probably you might create uh 10 users

for this devops users and probably there

are 10 developers so you might want to

create 10 accounts or 10 users for these

developers and each of them should have

only relevant access so developers

should not be able to delete resources

QE people should add the most only read

the resources and read the logs probably

just as an example okay and devops

internets might want to do the

administration of the cluster so how do

you do all of these things so that's

what kubernetes says is okay I'm not

going to manage the users I will offload

the user management to Identity

providers

so I'll give a very simple example so

these days let's say you are using any

applications okay the fundamental thing

that you might have noticed is most of

these application have options like

login with

Instagram

or very popular one is login with Google

and what happens is you don't even have

to create account with this applications

let's say there is a person who has

downloaded an application from Play

Store and you know most of the times you

get this option called login with Google

login with Instagram or login with

Facebook and what happens is this person

gets access to this app without creating

the user

right so this is what exactly kubernetes

also does so kubernetes is is I will

offload the user management okay so in

kubernetes you all know that there is a

component called API server

so you can pass certain Flags to the API

server okay I'm going to show you what

that flags are it's not a rocket science

don't worry about that Flags because

always I tell you don't worry about

syntaxes or don't worry about uh you

know how does a yaml look like always

understand the concept so in kubernetes

the API server

works as your oauth server

okay now what is this oauth wait for it

okay so you can offload the user

management to any identity providers

what are some of popular identity

providers for example you are using this

kubernetes cluster on AWS and let's say

this is your eks kubernetes cluster so

why can't you use IM users

that's what kubernetes is okay so if you

are using eks platform what kubernetes

says is you you can use your IM users

and using your IM users okay you can log

into kubernetes so in between what you

need to do is you have to create

something called as IAM provider or IMO

auth provider

okay and using this I am the persons

will log into the kubernetes cluster and

already you have created users and

groups in IM

right so if you have a user and if you

have I mean if your user belongs to a

group so as you log into the kubernetes

so you get to log in with the same

username and you get to log in with the

same group

okay so this is how kubernetes offloads

the user management to external identity

providers okay this this concept is same

whether it is open shift whether it is

eks whether it is AKs so depending upon

the identity provided that your

organization is using this might change

for example your organization might be

using ldap your organization might be

using OCTA your organization might be

using any SSO so you can use all of

these things kubernetes natively

supports all of these things okay but it

is up to you how you want to configure

this identity provider how you want to

create users inside this identity

providers you can also use uh some

identity Brokers like key clock so key

clock is a very uh popular one many

people manage their kubernetes identity

uh you know identity management or user

management using key clock as a broker

you can connect to all of these things

okay so even if you want to uh try some

things like let's say you have a access

to production or you know you can create

a kubernetes cluster on Amazon let's say

today you can go to eks and you can

integrate eks with key clock

and using keyclock you can connect it

with your GitHub

so in your GitHub you can create user

management right as part of GitHub you

can collaborate with hundreds of people

and you can create uh collaborators you

can create users in your organization

who which user has what access in your

GitHub so using keyclock you can connect

to eks and you can get the all of these

users okay this is how kubernetes

offloads the user management and the

second part is service service accounts

right so service accounts it's just like

a yaml file everybody can create okay so

there is no different with respect to

service account so if you understood how

to create users

and I will show you how to create

service accounts so service account is

just like creating a pod okay don't

worry about it there is simply uh like

you know like you have your pod.yaml you

can create a service account.aml

essay.aml for example and inside the

service account.aml you will just Define

as part of your yaml file you know what

should be your API version what should

be your kind what should be a name of

your service account

but then comes the interesting part okay

what will happen next let's say you

logged in as a user or your application

is currently running as a service

account

uh by default even if you are creating a

port you might have this question like

all these days I am using some pod okay

by default whenever you are running a

pod it comes with a default service

account even if you are creating a

service account or not a service account

gets created automatically and using

this service account itself kubernetes

poured uh whatever applications that you

are running it will be talking to the

API server for any or to that matter of

fact for uh connecting with any

resources in kubernetes it will use this

service accounts itself

if you are not creating service account

kubernetes will create a default there

is a default service account kubernetes

will attach the default service account

to your pod if you are creating a

service account then you can use your

Custom Service amount but what happens

after that whether you are logged in

into your kubernetes cluster as a user

or whether your application is running

on a kubernetes cluster as a service

account that is fine okay after that how

do you manage the rules or how do you

manage the configuration so to Define

access after this part kubernetes

supports two important resources that is

called role and role binding

so you can also consider this as uh

cluster role when it has cluster level

permissions and you can consider it as

cluster role binding when it has cluster

level permissions so this is not

important at this point of time simply

understand that kubernetes does all of

these things using role and role binding

okay now what is this role and role

binding

so once you create yourself once your

application is running as a service

account or you logged in as a user the

next part is how to Grant access to it

so firstly you will create a role okay

let's say you are creating a role which

says

and you want to assign this role to the

developers so what you are saying is

they should have access to pods they

should have access to config Maps they

should have access to uh Secrets within

the same namespace okay to to have

within a single namespace you will

create a role if they want to have

access across the cluster then you will

create cluster role that's the only

difference but we will talk in detail as

well okay so you have created this role

now you have to attach this role to the

users right so to attach you will use

role binding that's the very simple

concept okay what is is a role so a role

is a yaml file where you will write all

the things like you know they need to

have access to config map they need to

have access to secret they need to have

uh you know even if it is a single user

you will create a role and you will say

okay so whoever gets this role attached

to them like let's say there is a user

called Abhishek if you are attaching

this role to the Abhishek then Abhishek

will get all these permissions if you

are attaching this role to XYZ person so

XYZ person will get access to all of

these resources that you have defined in

the roll dot yaml so you can consider or

you can compare it with IM policies

okay so once you attach all of these

things or once you say that anybody who

gets access to this role might have

access to all of these things but how do

you actually

assign them this okay so you have

created a role and there is a user how

this user and how this service account

and the role gets attached to each other

okay so to do this you use something

called as role by name okay so the

simple ecosystem will look like this

service account consider it as user as

well

role

and role binding

okay actually uh sorry uh this Arrow

so this is service account this is role

and this is role binding so you will

create a service account or a user okay

and you will create a role using this

role binding you will bind both of them

together okay so this is a very simple

architecture so if you don't have a role

binding you will create a service you

will create a role but both of them are

not attached together okay so if you

have just a role binding you will create

a service account but to bind you need a

role without having a role just having a

role binding you are not binding your

service account with any permissions so

simply this will take care of

permissions this will be taking care of

users creating user management and this

will take care of binding the

permissions to users okay binding

permissions to user so this is the

concept of kubernetes are back

so simply if you are creating a role

within a specific namespace

it will be called as role and if you are

creating this role with in the scope of

the cluster

it is called as a cluster role similarly

role binding as well now what is the

difference between cluster role and

cluster role binding I don't think it is

good to discuss in this specific class

because if there are any beginners who

is trying to understand this concept it

will go over their head so whenever we

are doing the practicals it will be very

easy to understand the difference

between cluster role cluster rule

binding role and role binding as well

okay so till here this is the theory

part of your kubernetes rbac if you

haven't understood any any specific

topic here you can put that in the

comment section and I'll try to do uh

you know more detailed video on that or

we will try to do a master class or

something but till now we only discussed

about the theory part of kubernetes rbac

now as I promise you let me show you how

to create a openshift cluster a free

openshift free trial openshift cluster

for 30 days okay

so you can make use of this openshift

cluster for your learning

so let me stop sharing here

and let me uh start sharing the other

screen

share

perfect

got it right so I hope you people are

seeing my Firefox screen right so I

opened a incognito window and just

search for

openshift sandbox okay so openshift

sandbox once you open this one you will

notice that you know you will get a free

trial what does it say here get 30 days

free access okay let me increase the

font

get 30 days free access to shared

openshift and kubernetes cluster I

already told you it's a share cluster

because this is just for your practice

and to understand the concept of rbac

so click on start your sandbox for free

all that you need to do is you need to

create a account with red hat okay so

register a red hat account or you can

also uh like you know if you have

already a red hat account you can make

use of the red hat account okay so in my

case I already have a red hat account so

if you don't have you can just create

Red Hat account it's just following

steps and once you follow the steps you

can create a red hat account okay so let

me just stop sharing here so that I can

enter the details

stop share and I'm trying to enter my

red hat Account Details

so this is very simple like you know you

create your AWS account uh right

similarly you can also create a red hat

account okay now I'm just creating a

redhead account uh sorry I'm just uh

entering the details of my red hat

account

and this is public anyone can uh create

a free account here in the openshift

sandbox

done okay now I am logging in and let me

share back my screen

perfect so now I am logged in so the

only difference is you will see the same

screen but no you know if you see this

icon here that says that I am logged in

now again click on start using sandbox

what you what you will get is a shared

openshift cluster for 30 days in no time

okay so the openshift cluster

is assigned to you and this cluster has

you know both developer and

administrative tabs but in the

administrative tab you only have limited

access like click on login with Dev

sandbox like I told you like you know

this is the identity provider that

openshift is using in your case this can

be in your organization this can be

login with ldap login with OCTA okay so

you have created a red hat account right

so this red hat account that you have

created get saved in this Dev sandbox

okay so they are using this as the

identity provider to Define okay what

kind of user is he is he a paid user

easy a subscription user is he a red hat

user okay you get all of this

information uh you send all of this

information to the openshift cluster

using this identity provider okay now as

soon as I click on dev sandbox okay it

will try to get the information of my

specific user like what kind of user is

this person I just create a redhead

account and provided all the details

right depending upon that it gave me a

red hat openshift cluster and this is

how your production

environments looks like okay all this

time you might have used uh just

kubernetes clusters but you know here

see what happens is this is my openshift

cluster that is dedicated for me for 30

days and it's a shared cluster for

example

here what I can do is I can go to the

workloads and I can look into the pods I

can look into the uh deployments and

here I can switch through the namespaces

but because this is a shared cluster I

am only given access to this specific

namespace that is created for me okay so

what this entire concept here is using

openshift dedicated you will get a

shared cluster and each person gets a

namespace

now click on the icon here uh on the

username and you know you get an option

called copy login command click on that

and again uh it will prompt you for

login once you log in click on the

display token and using this token you

can log in through the CLI so here what

I will do is I will open my terminal

this is my terminal and just provide

this same display token that you got

from the URL and now you are able to

login

to the openshift cluster from your

terminal now you can do all of the

things like you know Cube CTL get pods

what happens is you know you will be

able to see what are the pods that are

running in that specific namespace you

only have access to that namespace okay

so because uh sometimes you know this

cluster might take uh time in responding

back but it is hardly less than seconds

let me create a deployment here uh Cube

CDL

create a deployment

nginx

hyphen hyphen image

okay now what happens is nginx

deployment will be created for me let us

see if it got created or not now if I

click on the deployments tab here

through the UI also I can monitor right

so using the deployment apps no you will

notice that you know nginx deployment is

created for me okay so this is the nginx

deployment

and here you know using the UI itself

you can scale down the pods you can

scale up the pods now I scaled up the

pods to two so this way you can play

around and you can get the real feel of

kubernetes cluster how kubernetes

clusters are used within the

organization you know in the routes you

can create Ingress uh people have been

asking me about Ingress right so you can

play around with Ingress here you can

create Services here right you can also

use uh storage services like persistent

volumes volumes how do they work all of

these things so using this real-time

production environment you can

understand not just the concept of rbac

but you can also play around with these

clusters and you can explore a lot of

things how events are omitted so these

are the events okay so what is happening

within the kubernetes cluster so engine

export got created engine export got

started so kubernetes is trying to pull

the image okay and you can search for

the events API Explorer lot of the

things what people usually do what

devops Engineers usually do within the

organization you can get a feel of it

and within the user management like I

told you you can create service accounts

you can create roles we can create role

bindings which we will do in the next

class okay in the tomorrow's class we

will use the same account and we will

create service account we will create

roles and we'll create role bindings as

well okay so stay tuned for tomorrow's

video and before tomorrow's video try to

create this account because as you get

more and more production or real-time

and uh experience you'll be more

confident and you will face the

interviews very well I hope you enjoyed

today's video and if you have any

questions uh please put that in the

comment section and don't forget to

subscribe my channel Abhishek thank you

so much see you all in the next video

take care

English (auto-generated)

###
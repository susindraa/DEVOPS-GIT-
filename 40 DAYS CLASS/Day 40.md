#space/kubernetes/40-day
# Custom Resources in Kubernetes Notes

## Introduction to Custom Resources
?
- **Purpose**: Extend Kubernetes API to add new functionalities not available in native resources.
- **Common Use Cases**:
  - Advanced security (e.g., kube-hunter, kube-bench)
  - GitOps capabilities (e.g., Argo CD, Flux)
  - Service mesh (e.g., Istio)
  - Identity and Access Management (e.g., Keycloak)
<!--SR:!2025-05-08,3,230-->

## Key Components
?
1. **Custom Resource Definition (CRD)**
   - YAML file defining new API types
   - Extends Kubernetes API capabilities
   - Example: Istio's VirtualService CRD
2. **Custom Resource (CR)**
   - Instance of the custom resource type defined by CRD
   - Created by users or devops engineers
   - Validated against corresponding CRD
3. **Custom Controller**
   - Watches for CR changes
   - Performs required actions based on CR configuration
   - Must be deployed separately
<!--SR:!2025-05-08,3,230-->

## Implementation Process
?
1. **DevOps Engineer Responsibilities**:
   - Deploy CRD
   - Deploy custom controller
   - Ensure proper namespace configuration
2. **User Responsibilities**:
   - Create custom resources
   - Configure specific features needed
<!--SR:!2025-05-08,3,230-->

## Comparison with Native Resources
?
- ![[Pasted image 20250420102511.png]]
-
<!--SR:!2025-05-08,3,230--> 
  
  



| Aspect                | Native Resource (e.g., Deployment) | Custom Resource |
|-----------------------|------------------------------------|-----------------|
| Resource Definition   | Built-in                          | Requires CRD    |
| Controller            | Built-in                          | Requires custom deployment |
| Validation            | Against built-in definition       | Against CRD     |

## Writing Custom Controllers
?
- **Preferred Language**: Go (golang)
  - Reasons:
    - Kubernetes itself is written in Go
    - Strong community support (client-go)
    - Good concurrency handling
- **Alternatives**: Python, Java
- **Frameworks**: Kubernetes Controller Runtime
<!--SR:!2025-05-06,1,190-->

## Practical Example: Istio
?
1. **CRD Deployment**:
```bash
   helm repo add istio https://istio-release.storage.googleapis.com/charts
   helm repo update
   kubectl create namespace istio-system
   helm install istio-base istio/base -n istio-system
```
2. **Verification**:
```bash
   kubectl get crd
   # Should show Istio-related custom resources
```
3. **Controller Deployment**:
```bash
   helm install istiod istio/istiod -n istio-system --wait
```
<!--SR:!2025-05-08,3,230-->

## Important Considerations
?
- **Debugging Responsibilities**:
  - DevOps engineers should understand:
    - CRD functionality
    - Controller logs
    - Resource status and descriptions
  - Example commands:
```bash
    kubectl describe <custom-resource>
    kubectl logs <controller-pod>
```
- **Documentation Importance**:
  - Understand project documentation thoroughly
  - Know how to configure and troubleshoot specific features
## Additional Notes
- CNCF hosts many popular custom controllers:
  - Argo CD
  - Istio
  - Prometheus
  - Backstage
  - Buildpacks
- Most DevOps roles focus on deployment and management rather than writing custom controllers from scratch.
<!--SR:!2025-05-06,1,190-->

For more detailed examples and code samples, refer to [Kubernetes Sample Controller](https://github.com/kubernetes/sample-controller) and official project repositories.

---

These notes summarize the key concepts and implementation details of custom resources in Kubernetes, providing a structured understanding of CRDs, custom resources, and their associated controllers.
# Transcript


hello everyone my name is Abhishek and welcome back to my channel so today we are at day 40 of our complete devops

course and in this class we'll be learning about custom resources in kubernetes okay so before we go to the

topic I just want to make an announcement that if you haven't subscribed to my channel definitely

subscribe to my channel because I am going to announce my future roadmap in

next couple of days where you know I'll explain you what am I going to do after this complete devops course are they

going to be master classes are there going to be any more free courses that I'm going to connect so you know if you

want to get early access to that or if you want to follow the content right from day one then you know definitely

subscribe to my channel to get those interesting updates okay so without wasting any time if we jump onto the

topic for today what we will learn today is the topic related to custom resource

definitions and custom resources okay so on a high level we will under this time

what is a custom resource definition the shorthand for the custom resource definition is crd which is very popular

like you know people usually say crd not custom resource definitions just to be like you know whenever they are writing

or whenever they are talking about it so that it's very simple it's very simple to say okay and then we will talk about

custom resources and then we will try to understand what is a custom controller

okay so these are the three things that we will understand today now so before I explain uh the topic I

will just give you a high level overview so that you understand what are we going to talk today so this is your kubernetes

cluster okay so within your kubernetes cluster by default there are some you know resources that come out of the box

uh for example uh you have a deployment like you can create a deployment resource and you know once you write a

deployment or the ml file a deployment is created for you an application is created for you which is taken care by

uh the controller in the kubernetes or you have service in kubernetes or you have pod in kubernetes or you have

config map you have secrets so these are all the native kubernetes resources so

they all of them come out of the box in kubernetes right but apart from this out

of the box resources so what kubernetes says is if you want to extend the API of

kubernetes or you know you want to introduce a new resource to kubernetes okay so this is very important okay so

if you want to introduce a new resource to kubernetes why you you want to introduce a new resource because if you

feel that the functionality that you need inside the kubernetes is not supported by any of these resources for

example let's let me give you a basic example let's say you feel that kubernetes does not uh support Advanced

security capabilities okay so for example you have resources like Cube hunter or kivarno or Q proxy sorry or

cube bench so all of these things try to address the security related problem so you know they say that okay we want to

introduce a new resource into kubernetes or you know you have applications like Argo CD what they say is we want to

introduce the git Ops capabilities to kubernetes or you have applications like flux you have spinaker so you have

hundreds of applications like if you go to cncf cncf is all about the kubernetes controllers like the custom kubernetes

controllers okay so you have so many resources like whenever you want to introduce a new resource to kubernetes

or you want to extend the API of kubernetes to introduce a new resource so that's why then you use all of these

things okay so this is the high level over you and what happens is there are two actors here right the actor number

one is devops engineer and the actor number two is the user so

deploying the custom resource definition and the custom custom controller is the responsibility of the devops engineer

and deploying the custom resource can be the action of the user or can be the action of the devops engineer as well

okay so these are the three things that we are going to talk today and we will try to understand with the actors okay

and we will try to understand the concept okay so why you want to extend the API of kubernetes I just explained

you because whenever you want to introduce a new resource to kubernetes okay probably Argo CD or Flex or key

clock or you know uh any resource in kubernetes if you go to cncf you will find so many resources

in such cases you need a custom resource custom reports definition and a custom controller let's try to understand each

one of them and let's try to Deep dive into this concept okay so firstly like

again let's say this is your kubernetes cluster okay and what you have done is you like you

know you learned about the basic concept of kubernetes you understood or your organization has implemented kubernetes

they have deployed the application as a kubernetes deployment and then they have created a service for it and then they

have also created a Ingress resource for it and this deployment might have used some config Maps uh secrets so

everything is fine and the user who is there he was also able to or he or she was able to access the application

through the Ingress like you have created the Ingress so you know let's say there is a Ingress controller and

your application is working fine like you know the traffic is flowing in and outside the kubernetes

cluster and your application is being used so there is no problem at all but after a while what what the devops

engineering team or you know what you have as a devops engineer has uh said is let me Explore kubernetes More and as

you Explore kubernetes More you have realized that there is World Beyond this native kubernetes resources like you

know you've realized that there is something called istio which adds you know service mesh capabilities to your

kubernetes cluster or you know you have realized uh there is an application

called Argo CD which adds the capabilities of githubs to your kubernetes cluster okay or you have

realized that there is a application called key clock what it does is it will provide a very

tight identity and access management or you know oauth or oidc capabilities to your kubernetes cluster so similarly

there are multiple applications that you have realized are used to enhance the

behavior of your kubernetes cluster your application is working fine but once you started exploring kubernetes you realize

that there are multiple things like you know you have security related things okay you have uh keyword no you have q

bench you have q proxy so you have realized that you know there is World beyond the existing kubernetes resources

now how does kubernetes support these resources because the number of these resources is keep I mean it kept growing

right so there are there is not one uh resource like istio or Argo CD or Key

Club so there are multiple people in the market there are multiple companies who says that you know we will provide

Advanced capabilities to kubernetes clusters or you know apart from the basic kubernetes resources use our

resource to get X feature use our resource to get y feature on kubernetes use our resource to get Z feature on

kubernetes it can be load balancing it can be security firewall API Gateway so each and every company is coming to you

know kubernetes space and they are saying that okay we will add new capabilities to kubernetes so how does

kubernetes handle with this like you know kubernetes cannot go to each of these

applications and kubernetes cannot add the logic for these applications into the kubernetes control plane component

right kubernetes has accommodated Logic for deployment kubernetes has accommodated Logic for service

kubernetes has accommodated Logic for uh you know let's say config maps are secrets but if kubernetes has to

accommodate Logic for all of these things it is practically impossible for kubernetes team or creators of kubernetes because the number of these

applications has reached thousands ten thousands you know there are like there are multiple custom kubernetes

controllers in the market which are solving some of the other problem with kubernetes so that's why what kubernetes said is okay these are the set defined

resources like you know whatever you are seeing here or Beyond this so we have only few resources that we support out

of the box if you want to add additional capabilities to kubernetes what we will do is we will allow the users to extend

the API of kubernetes okay watch this or understand this point carefully so what kubernetes is saying we will allow you

to extend the capabilities of kubernetes or extend the API of kubernetes

so they are saying that you can add a new API to your kubernetes or you can

add a new API resource to kubernetes foreign using this resource you can ask

your customers or you can ask your whoever wants to use the steel so what kubernetes is saying is Theo people is

that you can create you can extend the kubernetes like uh probably whoever your

users are you can ask them to deploy a few resources and you know you can uh this way you can extend the kubernetes

Clusters but we are not going to support it so to extend the API or to extend the capabilities of API there are three

resources in kubernetes okay no I think you understood the problem so the three resources are crd like I told you in the

first slide then you have cr then you have custom controller

let us type to dig dive into each of them and let us try to understand

first one crd okay so crd is nothing but custom

resource definition that means you are defining

whoever it is like when I say you it's not you but for example if there is a

company called istio and istio says that we want to enhance the capability of kubernetes so kubernetes people are

saying to create a crd what is the crd defining a new

type of API to kubernetes

okay so Define a new type of kubernetes API to kubernetes and how do you define is you have to submit a custom resource

definition to kubernetes okay so people of istio will create a new custom resource definition and in this custom

resource definition like it's a yaml file and in this yaml file you will Define

things like you know what a user can create for example if you are a user or

if you are a user who are creating a deployment or the ml file

okay so in your deployment.aml file probably you have mentioned few things like you have said what is the API what

is the kind what is the spec inside spec what is the template what is the Pod what is the container what is the

container Port but beyond this how does kubernetes understand whatever the deployment of the ml you have created is

correct or not so kubernetes will have a template which has all the fields related to deployment or DML like you

know tomorrow you can add volume amounts tomorrow you can add mounts or tomorrow you have added a new field called XYZ so

kubernetes will say that immediately when you create a new field called XYZ in the deployment.yaml you will get

error okay what error you will get field x y z is not known if you have a

question like go to your deployment.aml file and you know write a new field in the inside respect try to create a new

field called XYZ so kubernetes will immediately throw a error called field XYZ is not known or some error

kubernetes will throw at you okay so how kubernetes is throwing this error because kubernetes knows what is the

definition of a deployment okay out of this definition you can use whatever is required or you can omit whatever is not

required but this is the standard definition that kubernetes has similarly even for the custom resource or what is

a custom resource custom resource is a custom like you know it's a new or it's a you know a variable resource that you

are some submitting to kubernetes but before anyone submits kubernetes asks you to extend or Define a new type of

API to kubernetes using the custom resource definition where people of istio if you are taking history as an

example they will provide a complete yaml file which will have all the

possible options that they support okay a crd is a yaml file which is used

to introduce a new type of API to kubernetes and that will have all the fields a user can submit in the custom

resource okay like for example if you take about a resource called deployment.aml and further uh

deployment.aml you have a resource definition inside your kubernetes so this is a general resource of kubernetes

and this is a general resource definition of kubernetes but because we are dealing with custom resources that's

why we call this as a custom resource definition okay and whatever the user is submitting we call it as a custom

resource okay let's try to understand this in detail okay so we'll try to compare it with deployment.yaml itself

so that you people will understand for example

you are a user you are creating a deployment to DML okay so this is a yaml

file that you are submitting let's say this is a deployment.yaml file okay inside the deployment.tml file what

you will do is you will say my API version okay apps V1 and then you will say my kind

then you will say metadata then you will say spec inside the spec you will say

template you will say container all of these things okay but how does kubernetes understand if your yaml

definition is correct or not so like I told you this is a kubernetes resource that you are creating

similarly kubernetes has a resource definition in the API okay in the API server

or in the kubernetes controller manager okay so what does this resource definition do it will validate if the

resource that you have created is right or wrong

okay so the resource definition in the kubernetes will try to understand if the user created resource is correct or not

similarly even in case of custom resource definition okay so custom

resource definition is a custom resource that you are adding to kubernetes to enhance the behavior of kubernetes or to

extend the API of kubernetes so even in that what a user will do is as a user

he will create a custom resource okay so because we are talking about istia let us take about the istio example itself

so istio has a custom resource called virtual service

okay so what here user will do he will say API version is something related to istio then he

will say kind as virtual service then he will say spec I mean metadata obviously and then he'll

suspect he'll say few properties okay I mean nobody will remember this you will go to history documentation and you will

see what is the resource yaml file that is required for the

is the over gel service you will have bunch of examples there okay

so this is a what is this virtual service this virtual service is a custom resource

now whom I mean who will validate this custom resource so this custom research

like I told you is validated against a custom resource definition that is crd

that you have submitted or the istio people have created you can as a devops engineer you can deploy this custom

resource onto your kubernetes cluster so that your kubernetes cluster is extended okay so the two functionalities one is

for the crd is to extend the capabilities of API kubernetes API and also to validate

so right now you have understood the difference right if I try to compare this with a native kubernetes resource

against a custom resource of kubernetes the process is same here you are creating a deployment.yaml file on the

contrary here the user will create a virtual service yaml file okay and this

is validated against the resource definition here this will be validated against the custom resource definition

now like once you think this is done okay but this is not done yet so you have

created a or user has created a custom resource okay so user has submitted a

CR validated against a crd

let's say this both of the things are fine you have created a crd it is you have created a CR it is validated

against the crd and CR is created inside your kubernetes cluster let's say it is

created inside your KX cluster now if you think this is done this is

not done yet okay if you think this is over this is not over because you have created a custom resource but like I

told you if you take the same example of deployment you might have created a deployment or yaml onto your kubernetes cluster which is validated against the

deployment resource definition after that you will know that inside kubernetes there is something called as

a deployment controller right so this deployment controller is

the one that is you know it is taking care of creating a replica

right and replica set controller will create a pod so there is a process that is happening and who is doing this a

kubernetes controller is doing it so similarly here there has to be a custom

controller or you can call it as a custom kubernetes controller

okay so this is the flow so actually Arrow should Point here okay so there

has to be a custom kubernetes controller that is already deployed inside your kubernetes cluster so that once you

deploy your custom resource let's say you have deployed your CR this controller will watch for the CR and it

will do some action okay so now let us take this into a diagram and understand okay so if this is a kubernetes cluster

first of all devops engineer that is the people who are watching this video maybe or people might be

developers or someone else as well but most of our audience who are devops engineer what they will do step one

okay if the organization decides to use istio for example or if the organization use any other example Step One is they

will deploy the crd onto the kubernetes cluster how they will deploy this they will go to the istio documentation

they'll find what is the crd and they will deploy either using the plain kubernetes manifests

or they can deploy it using the helm chats or they can deploy them using the

operator anything is possible okay so using the crd they go to the I mean they

go to the docs and they deploy the crd who deploys the CID so the devops engineers

have deployed a new crd let's call it as a because we are talking about istio let's call it as a virtual

service crd okay so virtual service crd is

deployed onto your kubernetes cluster now now there is another actor here and this

actor is nothing but a user so you can consider it as a developer or devops engineer or anyone okay now what this

user will do again he will also go to istio docs and because he wants to use the capabilities of istio inside the

cluster he will create a custom resource what is this custom resource

let's say he has a namespace called Abhishek so inside this Abhishek namespace he

will create a istio virtual service custom resource let's call it as vs so he has created a vs custom

resource now like I told you before it getting created the API server or you know

someone will intercept this request and they will try to validate it against the virtual service crd and if the request

is correct then the request will pass through if not the request will fail right so this is the process that will happen let's say you have created the

user has created a proper custom resource event to the documentation and he has created a proper custom resource

which is validated and deployed inside your kubernetes cluster but till here you have just deployed a custom resource

it will just stay there like for example if you just deploy a Ingress resource

without Ingress controller what will happen nothing will happen right like we discussed in the previous class the

Ingress resource will be of no use similarly you have just deployed a custom resource if you deploy a deployment there is a deployment

controller which is taking or which is doing something for you but here this custom resource is being

watched by no one till now right so if nobody is watching

it then nothing is going to happen right so someone has to watch this custom resource so again the action tool here

of the devops engineer would be to deploy a custom controller

so again how this custom controller is deployed again he will go to the documentation he will either deploy them

using the helm chat plane manifest or operator whatever the devops engineer wants to follow the process within the

organization so now again he can create this across the cluster the custom controller or he can just create further

specific namespace depending upon the feature that controller supports let's say because we are dealing with Abhishek

namespace so devops engineer will deploy a custom controller here so now this custom resource is verified by the

controller and controller will perform the required action in this case what is the required action

the required action is istio that is service mesh or Mutual TLS or you know

east west traffic whatever it is let's not go into the details of it horizontal traffic or each waste traffic Mutual DLS

whatever the configuration that you want to know so this istio controller which you deployed will read the custom

resource and it will perform the action so whenever you are getting confused with respect to custom resources or custom resource definition the simplest

thing that you will do is try to understand it with the native resource itself because whether it is a native

resource like deployment or the custom resource the only difference would be in case of custom resource you will deploy

all the required resources whereas in case of deployment there are these resources out of the box available on

the cluster okay but the steps are common first step is I mean for any custom resource or for

any uh you know uh applications like istio or Argo Sydney the steps are common that is First Step would be you

have to deploy the custom resource definition to extend the capabilities of your kubernetes cluster Second Step would be uh you know you have to deploy

the custom controller and the third step is the user who wants to use this feature on their kubernetes cluster like

you might have 100 name spaces but only 20 namespaces might want to use this feature okay so whoever the users or who

are the namespaces that they want to use what they will do is they will deploy the custom resource so similarly if you

compare with deployment so by default inside kubernetes cluster you have a resource definition for deployment as a

user you are creating a deployment in kubernetes which is validated against the resource definition of your kubernetes and instead of the custom

controller for deployment inside your kubernetes you have a native kubernetes controller okay so this is the concept

of custom resource custom resource definition and a custom controller now some interesting points just for your

understanding how one can write a custom controller

so the very popular way of writing a custom controller is using golang

you can write using python you can write using Java as well but the community or the very popular medium of writing a

custom kubernetes controller using golang one of the primary reasons is you know kubernetes application itself is

written in golang okay so one of the popular kubernetes uh you know apis is

client go now if you have client python you have client uh Java everything but you know

initially when kubernetes was developed to extend the capabilities of kubernetes kubernetes has something as a client go

which will allow uh you know you to interact with the kubernetes API so whenever I am saying you want to extend

the capabilities of kubernetes that means to say the user has to interact with the kubernetes API right just like

Cube CTL interacts with the kubernetes API whenever you want to write a custom controller you have to or you might want

to talk to your kubernetes for that inside the kubernetes API server

there is a component called client go okay so this client go will allow you to talk to the kubernetes API server so

initially it was only client go but later point of time there is now you can write it in Python you can write it in

Java because kubernetes has API supported for different things that is fine but you know because the

community has started with go and kubernetes itself is written in go and the entire cncf ecosystem uh you know

because of the uh features of golang like you know multi uh like the concurrency or you know the easy way of

writing it all of the things we will try to learn whenever we are try to learning the golang but for now because

you know initially the community has started in uh uh go language and the client go support is very well there is

a very good Community for the client go and the cncf ecosystem with go language all of this controller custom controllers are written in Golan so

even when you want to write a new custom controller the preferred way would be to use golang okay and how do you write a

custom controller on a very high level okay I'm not going to the details because if you want to learn this probably I can take a new class because

many of our subscribers might not understand golang or you know many of our subscribers are beginners to devops

or they're just learning kubernetes so I don't want to go into the depth but you can put that in the comment section if you want to understand this in detail

now so what you will do is you will use golang as your programming language and like I told you if this is your

kubernetes cluster or this is your API server so there is a component uh called client go

you will interact with the client go and the entire process depends on setting the Watchers

listeners and Watchers okay so what you will do is by default this client go or

by default your kubernetes will be watching for a set of Watchers like you know there is a deployment Watcher there

is a service Watcher so whenever you are creating or whenever you are performing any of these actions like update

delete or create okay so what happens is

there is inbuilt watches that kubernetes has created for this resources so whenever one of these actions is

performed kubernetes will come to know using these watches but if you want to write a custom kubernetes controller

then you have to create your new Watchers so early when I started writing

kubernetes controllers back in uh 2015 there you know the Frameworks were not

strong or there were no uh a lot of framework so you have to create your own Watchers everything right from scratch

but right now you have many uh framework like one of the very popular ones is you can use the kubernetes controller

runtime so you know this is a go one that is supported by kubernetes itself it's a golang based uh kubernetes

package so using this also you can set up your Watchers like let's say what people might uh people at istio might

have done is they have set up watches for virtual service so any action like I told you users will create a virtual

service right whenever they are creating or deleting or updating so there is Watchers that is configured for this

virtual service and this watches you know they will notify a client go so again in client go there is a package

called reflector so I'm not like I'm telling you I don't want to go into the details of it so using this reflector

then you know what you will do is whenever you find to understand uh sorry whenever you understand that a new

virtual service is created you can put that in fe4 uh queue so you will put

that in a worker queue and you know you will start reading each of the uh elements or each of the objects in the

worker queue uh and like Watchers will identify and you will put that in the worker queue and then you will start

processing each and every resource okay so this way like once your controller starts processing each and every object

in the queue then it starts creating the required functionality on the kubernetes in this case it will start

creating a virtual service configuration on your kubernetes cluster so this is a very high level concept if you want to

write a custom controller like if you are interested more uh you can go for a sample kubernetes custom controller I'll

put the link in the description uh a very good documentation which will help you to understand how to write a sample

kubernetes custom controller kubernetes supports some documentation as well and go for the controller runtime as your

medium of writing if you want to write operators then you can use operator SDK as well

what is operator how is it different from controller not uh the topic today

we are not dealing with this topic okay so now let me not go into the details of it so this is uh some interesting things

that I wanted to explain and uh if you want to write a crd okay so devops

Engineers will not write custom controllers or crds most of the devops engineers but if you are in a kubernetes

developer role and if you want to write your in your organization if you are required to write a new kubernetes

custom controller then you might have to know all of these things like in my role I have to write kubernetes controllers I

have deal day in day out with kubernetes controllers so I know all of these things but even if you want to write a custom resource definition that's not

difficult you can write a resource definition very easily okay now let me show you one example

just for your understanding how does a custom kubernetes controller would look like and what are the

parameters how to deploy them and all of those things so quickly I'll stop sharing here uh

stop share and uh let me start sharing my other screen

so I hope till now the topic is very clear to you and I will just take one example because we have been discussing

about istio let us take example of History itself to just show you okay how does this custom controllers and uh

holiday over it okay perfect uh just go to GitHub or yeah

first let's go to GitHub and uh so this is your GitHub page you can just search for istio istio

okay so if you just search for istio istio

so this is the istio repository so if you want to know the list of popular Uh

custom controllers in kubernetes the best way is to go to cncf okay so cncf is cloud native Computing foundation and

inside this you have lot of kubernetes like for example I work on Argo CD so these are all the like they have 20

graduated projects 37 incubating projects and 93 uh so all of these are custom kubernetes controllers like Argo

CD istio backstage build packs okay so all of these or the custom kubernetes

controllers which are very popular in the community not just these things so these are from the cncf cncf is a uh

like you can consider it as a Linux foundations uh project or cncf is a

community uh basically that is backing up or giving support to all of these uh projects like if you get your project

incubated with cncf then you get a lot more attention or you know you get lot of more uh support for your projects

okay so Creo is one core DNS is one cross plane which we discussed uh in one

of the classes is one so these are all the custom kubernetes controllers which are very popular in the community Prometheus I think most of you know

about Prometheus right so you can go to any of their projects like in my case because I have been

talking about history of the whole video so this is istia okay so if you are a devops engineer and if your organization

has decided to use istio what you will do is if you want to read through the code so this is the history of go

language code it is open source you can start reading it but on a uh like you know if firstly if you start with it

you'll find it slightly difficult so uh if you are a beginner and if you want to understand the code firstly go to the

package folder so inside the package folder like you know uh anyways like uh

this will be very difficult to understand from here so use the example that I put in the description that is uh

kubernetes sample uh uh custom controller like uh kubernetes sample

controller okay so I'll put the link in the description as well but this is the GitHub page where kubernetes people will

explain you how to write a sample kubernetes controller okay like I told you uh you use a lot of packages like

there is a code generator okay and uh then uh there is a controller manager sorry uh controller runtime so you can

use make make use of all of these things just follow the documentation uh they'll explain you how to write the go code for

the controller as well and how to write a custom resource definition uh there are a bunch of examples on how to write

a custom resource so just follow this specific GitHub repository if you are interested uh like I'm telling you for

most of the devops job roles this might not be important you only need to understand the concept how to deploy

custom resource how to deploy a controller how they are working in the back end whatever I explained in the theory part this should be more than

enough for you but if you are in a challenging devops role where you take care of uh writing kubernetes

controllers as well okay where you are contributing like probably you are an open source contributor for any of these

projects like I'm doing so in such cases you might require this kind of knowledge if not you can stop at the video where I

explained you all of these things and you can see how to deploy these custom resources okay so this is about istio

right like I'm telling you can go through the uh code in this GitHub repository after that you know what you

need to do is go to the introduction inside anything you can just go to there uh official documentation of istia where

is it in this case the official documentation yeah so this is the istio.io this is the official

documentation and here you will find the installation uh page okay so this is

taking some time but uh basically you will have a Helm chat I'll show you uh the helm chart will take care of the

deployment of the custom resource definition as well as your custom controller okay so both of the things

will be deployed so let's go to the documentation and inside the documentation

setup right so if you are a devops engineer you have to do these things okay so getting installation guides go

here and now you need to understand okay take any of these things install with help because Helm is a quite popular one

okay so all that you need to do is you just need to uh copy these commands Okay

uh called Helm repo add istio and then update the uh Helm repo for the istio

and then you know uh you will see that the istio related custom controllers will be created in your namespace along

with the CR disk so after that it's up to the users to just go and deploy the istio virtual service for example okay

if I just want to show you quickly just copy this one here and if you have a kubernetes cluster handy

what you can do is I don't know if it today looks like my network is slow but

I'll try to show you okay so I am just creating the uh help things for this

so it says update complete happy helming perfect thank you and after this the

installation steps is to choose uh any of the helm release and all of these things okay so now I have to choose the

helm release as well I thought they have a

no problem yeah I think this is fine here firstly

create a namespace for istio okay so I'm creating a namespace for istio just

follow the documentation as a devops engineer uh you can go through the documentation of uh how to create uh the

steps for installing the custom resource definition and the custom kubernetes controller but once you do this you have

to understand the concept like I told you how does istio work how what is the custom uh like you know what is a

virtual service in istio all of these things you have to know by yourself okay so your role is to just deploy this

custom resources sorry custom resource definition custom controller and apart from that if your teammates has any

problem with istio then you have to solve it not the golang related code or not the controller or anything but if

they say that you know my SEO virtual service is not working then you have to go to the HTO controller look for the logs what is happening there if the

virtual service resource is properly created or not what is the status of the virtual service describe the virtual

service resource so this kind of debugging is expected from you as a devops engineer okay so now if I just do

Helm uh you will notice that the crd installation is created okay

see so you have a new resource uh or you can just say Cube CTL get crd so you

will see that the istio related so these are all the istio related custom resources so in case official there are

lot of custom resources don't worry about it but you know this is how you create a custom resource after that

again follow the documentation and create your istio related okay so by

using this command now your Eco related controller will be created so there is no rocket science here uh all that you

need to do is just follow the documentation and create every configuration like custom resources definition and your kubernetes custom

controller so this is for help uh istio but the same process will be for Argo CD same process will be for Prometheus

anything you just install their Helm chats which will which will deploy their custom resources uh definition and also

there uh sorry what was that uh custom controller which is a deployment okay so

this is the configuration related to it if you have any questions just post that in the comment section but as a devops

engineer like I'm telling you one of your primary responsibilities is this and after that to debug like if your

organization is using istio you have to read through the history or documentation completely and you have to

understand about istio okay just deployment is not your part you have to understand each and everything here how

is your service mesh is working what are the configurations that are required uh

if user is getting any questions with respect to your destination rules uh what is the NY proxy in HTO right all of

these things you have to know as devops Engineers apart from the installation and configuration okay so this might

take some time but uh there is again no no point of just creating the deployment I just want you to explain I wanted you

to explain the concept so I hope you like the video for today if you have any questions put that in the comment section and don't forget to subscribe my

channel thank you so much for watching the video today I'll see you in the next video take care everyone bye

English (auto-generated)

###
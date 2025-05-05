#space/kubernetes/39-day
# Kubernetes Ingress and Services Notes

## Introduction to Kubernetes Services
?
- **Purpose**: Expose applications running as pods in a Kubernetes cluster.
- **Dynamic IP Issue**: Pods get dynamic IPs; if a pod goes down, it may come back with a different IP, causing connection issues.
- **Solution**: Use Kubernetes services to abstract pod communication using labels and selectors.
<!--SR:!2025-05-08,3,230-->

## Types of Kubernetes Services
?
1. **Cluster IP**
   - Internal to the cluster.
   - Not accessible from outside the cluster.
2. **Node Port**
   - Allows external access via a specific port on each node.
   - Drawbacks:
     - Random port range (32000+).
     - Potential security risks by exposing firewall ports.
3. **Load Balancer**
   - Creates an external IP address.
   - Cloud providers typically manage this.
   - Can be used on-premise with MetalLB, but it's not fully mature.
<!--SR:!2025-05-06,1,190-->

## Why Use Ingress?
?
- **Cost Efficiency**: Avoids the need for multiple Load Balancers (and associated costs) for many services.
- **Advanced Routing**: Supports path-based, host-based routing, and more.
- **Additional Features**: Web Application Firewall, SSL termination, etc.
<!--SR:!2025-05-08,3,230-->

## Ingress Controllers
?
- **Requirement**: An ingress resource needs an ingress controller to function.
- **Examples**: NGINX, HAProxy, Citrix.
- **Configuration**: Varies between controllers; some deploy within the cluster, others externally.
<!--SR:!2025-05-08,3,230-->

## Basic Ingress Resource Example
?
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
spec:
  rules:
  - host: food.bar.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: http-svc
            port:
              number: 80
```
<!--SR:!2025-05-06,1,190-->

## Path-Based Routing Example
?
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: path-based-ingress
spec:
  rules:
  - host: food.bar.com
    http:
      paths:
      - path: /first
        pathType: Prefix
        backend:
          service:
            name: http-svc
            port:
              number: 80
      - path: /second
        pathType: Prefix
        backend:
          service:
            name: miyab-svc
            port:
              number: 80
```
<!--SR:!2025-05-08,3,230-->

## Wildcard Ingress
?
- Useful for handling subdomains.
- Example:
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: wildcard-ingress
spec:
  rules:
  - host: "*.bar.com"
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: example-svc
            port:
              number: 80
```
<!--SR:!2025-05-08,3,230-->

## Secure vs Unsecure Ingress


### SSL Passthrough
?
- Entire client-server request is encrypted.
- Load balancer acts as a pass-through.
- Pros: High security.
- Cons: No advanced load balancing features, potential latency issues.
<!--SR:!2025-05-06,1,190-->

### SSL Offloading
?
- Decryption at the load balancer level.
- Reduces load on the application servers.
- Pros: Reduced latency, simpler application logic.
- Cons: Vulnerable to man-in-the-middle attacks.
<!--SR:!2025-05-08,3,230-->

### SSL Bridging (Re-encryption)
?
- Decrypts, inspects, and re-encrypts traffic.
- Combines benefits of passthrough and offloading.
- Pros: Secure and feature-rich.
- Cons: Increased complexity and resource usage.
<!--SR:!2025-05-06,1,190-->

## OpenShift Routes
?
- Similar concepts to Ingress but different terminology:
  - Edge Termination = SSL Offloading
  - Re-encrypt Termination = SSL Bridging
  - Passthrough Termination = SSL Passthrough
- **Limitation**: Cannot store TLS certificates in secrets directly within routes.
<!--SR:!2025-05-06,1,190-->

## Conclusion
- **Ingress** provides a flexible way to manage external access to services in Kubernetes.
- Choose the right method (Passthrough, Offloading, Bridging) based on your security and performance requirements.
- Multiple ingress controllers exist to cater to different needs and environments.

For practical examples and detailed configurations, refer to [GitHub repository](https://github.com/your-repo-link). 

---

These notes summarize the key points discussed in the transcript, providing a structured overview of Kubernetes services, ingress resources, and related concepts.

# Transcript



ingress controllers so let's quickly jump on to this so before we understand ingress i would

slightly set up a context on the service i know this most of you already know about

kubernetes services but i just i'll just give you a brief overthrow and then we can quickly jump onto the

ingress part so it's just an abstract way of exposing

an application that's running as pods so let's assume that i have a kubernetes

cluster and in the kubernetes cluster let's say that i have deployed a

checkout application as a pod so as soon as you do that the container network interface so you

get allocated with an ip address so let's say that this checkout application or this checkout port is assigned with

an ip address called 172.16.1.15 and then there is one more application

called payments similarly it also has another ip address and

for some obvious reasons checkout has to you know communicate with payments

and to probably to complete the transaction or something like that

so the first thing that it would do is uh it can connect

to the payments using the uh cluster ip that it is associated with the port uh using the pod endpoint but

you know the problem with uh this thing is that kubernetes the ip address that generated

is dynamic so for some reasons if this port goes down so next time it would come up it would

come up with a different ip address so what what happens in that case is uh you know the

application the checkout application which is trying to talk to the payments would uh obviously receive a 404 or some

sort of hdb status quote because your payments is on a totally different ip address

## Kubernetes Services

so to avoid this problem uh you can make use of kubernetes services

so like we discussed before it's just a proxy and so it identifies the required

application or the pod using the labels and selectors so this way

what you can do is uh you can use make use of the service and ensure

that your you don't have a downtime or earlier the checkout which is trying to access

the payments that doesn't receive 404 are not found so the way you can uh create this

kubernetes services so you can uh create them in tv like predominantly you can do it in

these three different ways there are other ways as well but yeah these are the most used so you can do it

you can create a service as cluster ip you can also create this service as a node port mode and

you can do it as a load balancer service so let's try to see

what happens when you create this service as a cluster ip so when you do this as a cluster ip

you know the service ip address or the ip range stays within the cluster so someone who is trying to

access like if someone wants to access uh not the payments but some sort of catalog directly

so the cluster ip wouldn't be accessible so you cannot reach using this service

and the other way of doing it is uh i mean if you want to expose your service outside you can probably do a note port

load balancer or ingress so before i jump to ingress let's see why we need

ingress because if something can be done without ingress then why do we have to go to english

because i was saying that using notepad and load balancer you can still access your application

from outside the cluster then what is the point of using an ingress so uh

if you create uh you know if you create this service in a node port mode so what typically happens is that you can access

your kubernetes pod or your service using the node port

so the cube proxy what it typically does is uh it has a node ring the port range

so it's in the 32 000 range so it allocates one of these ports it binds

one of these ports with your service and it updates the ip tables

i don't want to go into the details of the different queue proxy modes so let's restrict to ib tables so

it updates the ib tables saying that in the pre-routing rules that if somebody is trying to access

uh the node name followed by this specific node port forward the request to the payment service as i mean which

eventually moves to the payment application so this uh this way you can access

your application from outside the kubernetes cluster using the node port but the drawback is that uh you know even

sometimes your node might also not be accessed from outside are

because this port is i mean because this ports come in a random range like you don't know uh

predefined that what would be a node port b so you cannot expose multiple

ports on your firewall like you cannot say that my services would

be created within this node port range so expose all of these ports so that would cause you a problem because you are

exposing a firewall on your specific node and like you are inviting people to

get into your kubernetes cluster so that is one of the drawbacks as using node port and

the other thing is that like i told you using node port you cannot i mean if somebody is not able to access

this node range or the node i p range so you have the same problem as cluster ip

that uh they cannot actually talk to your kubernetes service so the other thing is load balancer uh

probably there might be a lot of comparison between load balancer and ingress more than the node balancer and

the uh sorry then the node port and ingress so load balancer service is typically

something that creates an external ip address for you let's assume that i have my kubernetes cluster on aws or i'm

using a kubernetes managed service of aws that is eks and i expose my service as a load

balancer so what happens is that the cloud controller manager the

control plane component of kubernetes so it creates or it generates an external

ip address for you uh in two to three minutes after creating your service and using this external ip address you can

uh you can access your service so now you don't have the problem of uh

like you know the ip address is not in the range or you cannot access the ip address so if that is the case

so uh like you know i have one question here that uh if

is the load balancer service type like the one that we are discussing about is it only restricted to the cloud

providers so uh like i was talking about aws or eks so

is the load balancer service type only managed to them uh only restricted to aws azure or any

other cloud providers or can you also do it on your uh personal uh server or on

the bare metal or in your laptop huh

yeah so there is a uh implementation uh that can do that for you so previously or predominantly it used to be uh only

restricted to the cloud providers but there is a project

there is a cncf project called metal lp so using this you can actually

install this on your bare metal or on your on-premise servers and you can expose

your service as a load balancer but you need to do some sort of configuration and this is still a

not a complete project or it's still in an amateur state but you can do load balancer type

service on your on-premise servers as well so now the most important question is if

load balancer service type can do the things for you then why use a ingress resource

because i was telling you that using load balancer you can expose

you get an external ip address and you can also get a static external ip address which doesn't change

so in in such cases why you need an ingress resource

so the reason for that is uh there are two things one is let's assume

we are talking about large scale of services uh if i am [Music]

i have an ecommerce site and i'm talking about two to three hundred services that

needs to be exposed so if you want to do that for each and every service uh the load balancer type

so what typically happens is that you create two to three hundred static

external ip address for which you will be charged by your cloud provider and uh that could go into huge huge costs uh

instead uh you can create an ingress resource and you know if you have a single ip address

like probably you want to manage all your services using a single ip address ingress can solve that problem

and the other problem that ingress can solve is uh it defines routing for your

specific services or you know you can define using ingress you can

expose your cluster outside and also you can define routing for your services

probably you can do coast based routing you can do password-based routing or session based cookie or you know

because ingress comes with i mean when you create an ingress resource uh there is a ingress controller which is

actually listening to this ingress resources and there is a load balancer as well so

you are equipped with a a lot of additional features uh you get the features of uh

like you know path based force base or you can do a web application firewall or

you can do a lot of things which we'll be discussing going ahead but this is the context that i wanted to set like what

is the use case of ingress because uh if you have node port or load

balancer type services why you have to go for ingress so this is the preliminary context that i

wanted to set okay so now

i'll be talking about ingress so i'm not looking at the chat if

someone uh posted a question or something probably i can take it at the end

okay so uh this is the uh i've just taken this picture from the

kubernetes docs so if you look at this specific picture to explain what an ingress is about

so you have a client uh you have ingress resource which defines the routing rules

for your services so probably you can say that my service can be accessed using

food.example.com or you can say that i have 10 services and each of them can be accessed on

different context paths on one of your website domains so such things can be managed using an

ingress resource so what you need to do additionally is apart from creating a service you also have to create an uh

ingress dot yaml or an ingress manifest i'll also show you uh so we'll also be

doing some uh sort of uh demo or uh some sort of uh practical

exercises to understand uh inverses more

## Ingress Controllers

so this is the typical functionality so ingress cannot work directly on its own so if you just

create an ingress resource on your kubernetes cluster uh without an ingress controller it would be left as an orphan

because nobody understands what it is so whenever you want to use ingress

you need to create an english controller there are wide range of ingress controllers so you

can look for the ingress controllers supported ingress controllers in the kubernetes official page so you

have i think you have close to 30 to 40 which are officially supported ingress

controllers but there are other implementations as well so what an typical ingress controller does is

whenever you create an ingress resource this ingress controller would watch for the english resource and you know it

simply updates or configures the load balancer so let me take an example

to make you understand more let's assume that uh i'm using an nginx

ingress controller so in that case what i typically do is on my kubernetes cluster i go ahead and install nginx

ingress controller probably using helm charts or plane manifest or something

and once i install this uh ingress controller nginx would engineering singles

controller would continuously watch for the ingress resources on this specific cluster and it updates the uh i mean

nginx.conf enginex.com is uh the place where nginx uh updates all its routing

details so along with your ingress controller the enginex application is also deployed so

if if it is some other load balancer then probably if it is an fi load balancer or if it is a

citrix or any other load balancer so what their invest controller would do is it would also deploy their load balancer

along with the ingress controller so sometimes saying that some of the load balancers

some of these load balancers can sit inside the cluster or outside the cluster

so for example if you are taking the example of nginx so nginx deploys as a

pod inside your kubernetes cluster so uh you don't have to do any additional

configurations but for some of these english controllers which probably i i don't expect many people to

use nginx in their production uh some some clients might do but

most of them would go for enterprise solutions so in such cases uh the load balancer might not be sitting inside

your kubernetes cluster because those load balancers might not have a containerized solution right so i was

working for uh fi before to this and uh so it itself is a very huge load balancer and it did not have a

containerized solution so if i sits outside your kubernetes

cluster and the way it can access the resources inside your kubernetes cluster is using a vxlan tunnel so you have to

do some uh configurations before you actually deploy your or before you get started with your ingress controller

so the whole point of saying this is that um so the configuration of ingress controller varies from one ingress to

other i mean from one controller to another control another controller so it might be simple in some cases and it

might be pretty complex in the other cases

so this is a very simple ingress resource how how a basic ingress resource would

look like so there is no uh who's definite there is no host definition or there is nothing associated with this

basic ingress resource all that you have is you define the kind as an ingress

and this is your api version so uh previously the eps version used to be

extensions but uh in from kubernetes 1.21 i believe so the extensions is

deprecated now that you you can only use the networking.kx.io

and you define the kind as ingress and then you define inside your spec you say what is your service

on which port your service can be accessed

## Ingress Routing

sorry for that yeah so after that uh you like i told you with ingress you can do

host based as well as path based routing so i think we can jump

on so i have some

## Ingress Demo

okay so um can somebody confirm that you are looking at my terminal

yes you can see your domain okay thank you thank you so uh for the purpose of demo i

got a couple of services running

so there are these are the two services that are running so now what i'll try to do is

that i'll try to show you that

let's start with the sample a very simple ingress resource sorry

so this is a very simple ingress resource and for this ingress resource i just have uh

you know i just have defined a host and what i'm expecting from this ingress resource is that

my service uh which i've mentioned which is mentioned as a http hyphen svc on

port 80 should only be accessed if the user uh provides the host name as

food.bar.com so here what i'm trying to do is i'm trying to define the traffic

rules for my service right so if it was only a only a service

you can simply access this service on the service ip address but what i'm doing with this ingress is that i'm

defining some uh rules for the user to access this specific service

so now let me try to create

okay so uh one more thing that comes to my mind when i when i have to talk about this is so if you

see about this if you see this ingress resource there is no ingress class i haven't

defined any ingress class for this ingress resource but

but the router has assigned or the ingress controller has assigned the ip address

to my ingress right so the reason for this is because uh what i've done before to the demo is that

this is my uh ingress controller and in the ingress controller configuration i simply mentioned that

class so i simply said uh watch ingress

without class so this way what my ingress controller would do is it would watch for the

ingresses which doesn't have any class or you know uh it simply would watch all

the ingress resources on the cluster so if if i mention this

like you know if i specify this ingress class as probably abhishek then only the ingress

resources with ingress class name as abhishek would be watched by this ingress controller

so why why you need ingress classes is uh basically because uh you can

do multiple ingress controllers in the same kubernetes cluster probably similar ingress controllers or different ingress

controllers as well so probably you have a combination of engine x and h proxy or you have

multiple engine x ingress controllers which are used by different teams so in in such cases you need a bifurcation for

these resources who has to watch which ingresses so for the for that obvious reason you have ingress class names

okay so qcdl get ingress and now what i'll try

to do is i'll say girl

so it says uh who's not found uh ideally it should have been accessed uh on this

ip address but it was not access it is not accessible because i did not mention

the host name so what i'll do is in the headers i'll simply pass the host name

as and now

i'm able to access right so this is because uh because the rule that i've defined is

## Pathbased Routing

alert traffic on that specific service or i'm telling the ingress controller to

only accept traffic if the host name is food.bar.com so i just passed it in the headers and

that is the reason why ingress ingress controller has you know it simply allowed me to access

the defined service now uh similarly you can uh

you can do path-based routing so what i mean by path-based routing is

that so the same use case but now what i'll try to say is that

if user tries to access food.bar.com with context root or with

the path as slash first then route the traffic to http service

and if the user tries to access food.bar.com with path as second then

you know route the traffic to the uh miyab service so let's see how how this works right

so firstly let me delete the old one

now again uh the ingress controller would take uh some time to uh get the ip

address i it was it was pretty quick but yeah so now let me try to uh access the

scene same url so now again you would receive 404

because i haven't defined any path and in the ingress definition i told the ingress controller to only accept

when the user is trying to access on one of these parts like it should be slash

first then okay

dot com

change

let's do this

okay let me try to access it on second

okay probably i think that service might had some issues probably i i don't know

uh the pod probably is not reachable or something don't want to waste time on debugging

## Ingress Controller

that thing but uh so if you see now uh i mentioned some path and depending on the

path it uh sent or it routed the traffic to a different uh application so now how

how are these things happening so let's try to look at the logs so

this is the ingress controller uh so the english controller is created in uh this specific name space called ingress

engine x and uh because the ingress controller that i'm using is uh nginx so

it updates this configuration in the nginx.com so

okay it's too big

yeah so if you see here uh the nginx.conf is updated with the

uh the configuration for food.bar.com and it says that if someone tries to access the location on second then uh

forward the request to the specific service so this is how the ingress related configuration is updated so it

says if the location is second then forward the request to service on the specific port

so similar to this uh depending upon the type of the load balancer that you're using if uh let's assume that we are

deploying argo cd on uh openshift cluster and for some reason uh your argo

cd is not accessible so what you would do is that you would go to the ingress operator's namespace on your openshift

cluster and you can watch for the hr proxy logs sorry hr proxy uh configuration file so

in terms of nginx this is the configuration file and in terms of hp proxy

i don't remember the name but it should be in one of these similar locations it should be probably slash

etc proxy hproxy.conf so that is where you would actually debug and try to

understand the issue by so if you if you remember uh probably

last week or sometime we identified an issue that when we deploy

argo cd uh using an ingress on the openshift cluster the hp proxy was not

i mean the user was not able to forward the or accept send the request so that was because

the hr proxy did not even identify this ingress resource and nothing was updated in the hp proxy

configuration so that was easily identified when you look at the hp proxy conf because there was

no entries related to that specific ingress research so then we came to know that uh okay

probably because of the missing ingress class annotation or something

okay so uh this is the thing and you can also do uh wildcards with ingress so i

think this is uh probably if you're if you're using it in organization uh this is one

of the most used uh because like for example you are

on google.com or something then you have slides.google.com or you have

docs.google.com mail.google.com so instead of you know providing for each and every uh service this can be for the

tls as well so in this case this happens to be a host for the rules but uh if you

are doing a secure ingress so you can also provide the wildcards for the tls configuration as well probably in

terms of you have wildcard certificate there is a very good chance that you get a wildcard certificate from your

certification authority so in such cases you can also provide instead of creating

multiple ingress resources you can simply create one ingress resource with the wildcard

and when you create such thing make sure you use the double quote so that you don't waste 30 minutes like

me so if you do the wildcard

which you can get ingress

so now let's get the ingress one more time

okay let's wait for the congress to identify

yeah so now the ingress controller has identified this specific ingress resource and it has updated the

ip address so now i can access the same thing

and i can say food.bar.com or i can also say

example.bar.com similarly i can uh pass anything in the headers so it can

be any host that is uh succeed i mean yeah that is succeeded by

bar.com yeah so this is about the wild cards so this is one of the major use cases of uh

## Unsecure Ingress

non-secure ingress so we haven't gone to the secure ingresses but if you're using

unsecure ingress so you can achieve all these things with the static http as well like

the things that we have seen you can do path based or you can do code based you

can do wildcard and the other thing that you can also do is uh you can also use uh basic authentication that is

for example you want to say that uh okay anybody cannot access my host or you know if

somebody is trying to curl to the argo cd then he should be a legitimate user so

only the ones who have access or authorization to argo cd can only access my

domain so in such cases what you can do is in your ingress you can simply annotate

your ingress using the basic auth and you can say that

you know you can provide this ingress with the list of users who has who can access your

food.bar.com or who can access your service and so in such cases

what happens is that only the users who have access to your website can talk to your service

yeah i think uh i mean if we it wouldn't make much sense to show that

as well because we are running out of time but the thing is that you can simply annotate the ingresses in that way and

you can achieve the basic authentication yeah if we go back to the slides one

more time so this is all about unsecure ingresses so we haven't uh done

anything with respect to uh secure but so now if you look at tls

## Secure Ingress

so i think uh jan has mentioned a lot about tls the other day

so similarly if you apply the same concept to ingress so you can do uh

you can basically add security to your ingress or you can add security to your services so there are different ways how

you can do it so in the other examples that we were looking it was only about http uh all the services were on port 80

and all the traffic that we were talking about is on port 80 but what if i want to enable uh security or

what if i want to make my uh whole process secure so the first thing that you can do is you

can use a ssl passthrough so ssl passthrough is a way basically the entire

client to server request is completely encrypted and your load balancer that is in

that is in the between uh doesn't do much it just acts as a pass-through and your request just passes through the

load balancer without encryption or decryption at the load balancer level

so what happens in this case is that uh okay so this makes i mean at first this

looks very secure and it is indeed very secure but there are some problems with this uh approach that is uh you have the

load balancer uh in between uh in some cases it can be a very powerful load balancer it can it can also act as an

epa gateway but because you are restricting your ingress to pass through you cannot take advantage of your load

balancer right so for example you have a load balancer that can do a web application firewall or you have a

load balancer that can do path based routing or session based routing but

if you are doing pass through so you have to compromise on all of these features because uh load balancer

mainly act as a proxy and nothing more than that and one of the other disadvantages is

that you know a hacker probably instead of client there is a hacker who is trying to send

request to your server and because it's a pass-through ingress your

load balancer doesn't even look at the packet or it doesn't even look at the request that is coming to it and you

know there is a very good chance that load balancer misses the request and the

hacker can get direct access to your server right so this is one of the major

drawbacks at least according to me that uh you have a load balancer but uh because it is not decrypting the packets

or it is not re-encrypting the packet uh so there is a good chance for the

individual to directly reach or the hacker to directly pass a malware in the request and reach to the server

and the other thing is that so this is also one of the important things according to me that

let's assume that you have a service and during christmas or during one of your

holidays your service is receiving exceptionally uh high requests probably

it's into millions or something more than that so in such cases because your service has to take care of uh

decryption right uh load balancer is not doing anything for you so every request

that is coming to your service is an encrypted request and your service has to decrypt each of these requests so

because of that what happens is that uh you know your service you

you you see the latency so that is what i was trying to say that because your service has to do a lot of

work so every time a request comes it has to decrypt the request and it has to process the request so

that is one of the major reasons even uh like if you uh see a latency during uh holidays or you

know when most of the people are trying to access the application this is one of the reasons why you see the latency that

your service is doing a lot even though you have a load balancer in front of your service

## SSL Offloading

so these problems can be handled by ssl offloading so ssl offloading is the one

of the other kinds of tls that you can do with ingress so i'm not saying it solves all

of the problems but it solves one of the problem that i discussed at the end that

is if you have ssl offloading enabled on your ingress then you know decryption

happens at your load balancer level and load balancer sends a plain http traffic to your service so that way your service

is not uh in the you know uh not receiving a lot of load so it simply

resets the request and it's about uh the how you wrote your application so if your application can handle the request

then that's it you know if you have use multi-threading or whatever

aspects uh you have followed in your application then that's well and good so

because load balancer is doing the decryption for you so at least the ssl kind of offloading is done

but one of the major concepts of ssl offloading and ssl offloading is highly

not recommendable when security is one of your key aspects because you know uh there is a heavy

chance of managing middle attack so because your load balancer is simply sending a

plain hdp traffic for your application and most of the times your load balancer

is sitting at the edge of your network right so you know different types of load balancers actually behave in different

ways some of the load balancers sit at the edge of your whole network so if your load balancer happens to sit at the

edge of your network and it is simply passing a plain http traffic to your application then

uh you're almost inviting uh people to get into your application

but uh why if one aspect it has to be better than pass through is only thing is uh it is

faster like your application latency can be reduced if you can compromise on the security

pattern and the other option is ssl bridging so

## SSL Bridging

ssl bridging uh it is also called as re-encrypted uh so there are different

names for these things when it comes to open shift routes which i'll be talking about but if you are doing ssr bridging

so ssl bridging is mostly similar to re-encrypt even if you look at the picture that i try to represent it is

almost similar to the pass-through i mean sorry so ssl bridging and pass-through are mostly

similar but one of the advantages of ssl bridging is that it does not send the packet

directly to the server but your load balancer does a lot of things for you in terms of ssl printing that is firstly it

would decrypt the packet that is coming from the client and then it would re-encrypt right so

what your load balancer does is every request that is coming from the client it takes the request it decrypts

the request it looks into the information of the request like what is the actual request about is

there any malware or is it a legitimate request that is coming to it or does it have to uh you know perform any

additional things like path based routing or a lot of things that a load balancer can do so it decrypts the packet it reads

the packet understands the packet and it re-encrypts the packet so

before it sends to the server it re-encrypts the packet and again it starts a secure channel with your server

so that way both the communications are secure your client load balancer is secured and your load balancer to your

application is also secured but uh so this addresses

the second pain point that i address here like if hacker sends a malicious or a malware

request request with a marvel uh in the first case uh because it was passed through it

actually landed to the server but here because the decryption was happening and load balancer is reading

the packet and if i identify that there is a malware it simply aborts the request or depending on the way that you

have configured your load balancer it can you know say that okay i don't understand this request it looks

something malicious so i'm not processing or sending this request to the server

so you know lancer can do that for you it is very secure but again uh like you

know whenever security comes into the picture then you have a lot of things happening so

again your server has to bear with the thing that it has to decrypt the packet that is

coming at it so every time a request is coming to a server the server has to

take that additional leap or it has to do the decryption edit

## Comparison

so a simple comparison uh between ssl pass through ssl

offloading and ssl bridging so if you have to compare all of these things in

at one place and if you ask me what you would suggest out of these three then it's it's not a

straightforward answer it actually depends on a lot of the aspects so i try to put all of these things

at least i am but i mean when

kind of the applications we look at for example passthrough is

i mean you can use it in very less cases if you ask me pass through because uh it doesn't uh take the advantage of the

ingress controller that you're using right the only thing it does is it makes use of your interest controller as just

a proxy uh and it does some kind of uh you know

load balancing but only at the layer 4 that is at the tcp level so

if you're if you want application load balancing and you know

definitely pass through is not the option or ssl password is not the option you can actually go for the ssl bridge

or ssl re-encrypt and if you want

if you can compromise a bit at the security which is again not the right thing to do

but if some of the applications doesn't require uh security uh as one of its key aspects

then definitely ssl offloading makes a lot of difference so if security is not

your uh thing or you can compromise or you can uh accept that okay if it is

coming from my load balancer uh i trust that load balancer is doing uh

everything for me and i accept the packets that are i accept the requests that are coming from uh

load balancer then ssl offloading is the perfect choice for you and it reduces a lot of things like uh

latency can be gone and uh you know uh yeah and if you look at

the ssl pass-through like uh it's costly because uh because of the reasons that i mentioned but your connection is secure

and it's mostly used only when you require uh l4 load balancing or the tcp level load balancing

and your load balancer does not do any kind of cookie it doesn't verify any kind of cookies or anything

and yeah it is recommended only when that's why i try to put a star here it is only recommended in very few cases

whereas ssl offloading is highly unrecommendable and ssl bridge is recommended i know like

this is this slide can put a lot of questions or many people might disagree with

the things that i put here or there are different uh views on this specific

thing but uh yeah we can uh discuss on that

and uh like coming to the routes okay i have uh

i mean i have examples for all of these things the ssl edge thing and uh

how you can do uh its routing with heads with ingress as well as uh pass

through how you can do password with ingress and re-encrypt so i'll see if time permits or else we can do it in the

next session sometime and i'll try to put it in the github as well so if somebody's willing they can

try it so coming to openshift routes you know uh

## Openshift Routes

openshift routes uh the terminology is slightly different so ssl offloading is called edge termination ssl bridge is

called as re-encrypt termination and ssl pass through is called as password termination but more or less the concept

is similar but the naming convention is slightly different and

if you uh try to look at uh the openshift routes there are a couple of things

## TLS Secrets

personally that i don't like that is uh you cannot store uh your tls

certificates in secrets so what you have to do is you have to put them for example the second and the third if you

look at second and third the edge as well as the re-encrypt so we are passing the certificates uh as

part of your route itself so even we do this with argo cd as well if

you try to look at the argo cd crd so we support all of these fields uh a customer can update the rcd route with

all of these options but the major problem is that you know

many people don't would not put their certificates inside a or

they want to uh store them in the secrets or by putting them here you know uh they cannot actually uh store this

configuration in github this route with secrets cannot go to github because uh

for obvious reasons and so this is the issue i try to put the

issue and why uh like there are many requests many people

have been asking about this uh to support secrets with routes and

the answer for now is that using risk so the proposed work around is to use

ingress and yeah i think that is the reason why many of the customers even today use ingress

over route even when they are on openshift because ideally if openshift supports routes

they should be looking at using routes but because of these reasons there are

customers who are still using ingress on openshift

yeah and

okay so

there is one more thing that i wanted to talk about

so uh okay so in terms of uh open shift what you can do is that

if you want to secure your openshift routes so you don't have to create all the

secrets by yourself openshift supports something called as service serving certificates

so what you can do is that you can simply annotate your openshift service with

this specific annotation and uh you know openshift comes with a default

certification authority and all those are sales and certificates but it can be trusted within the cluster

and it generates a certification authority and the ca certificate is stored in a config map in the same name

space and you can mount that into your pod so if it openshift it's slightly easy but

with ingress i'll try to show you here so what you can do with ingress is that

if you want to do secure ingress or you want let me show

you an example of its termination

so i have created the client certificates as well as uh like you know i've created the ca client certificates

as well as the server certificates so that i don't take a lot of time here and if you look

at the ingress

so this is the english resource and the way we do tls with ingress is that you can simply store it in the secrets so

this is the difference that uh ingress gets over openshift that you don't have to

have your secrets or you don't have to save your secrets in the ingress resource itself you can simply create a

secret and you can uh provide the corresponding secret so in the same way what i've done is

i've created the secrets and i've updated the secrets in secrets type tls

so once i do that

so i have to delete these ingresses because uh i i have some of the names common so

sorry for that apply

so now the ingress is getting created with uh

with edge termination so what happens is uh if i have to access the

router if i have to access the uh english ingress controller then i have

to provide uh then i have to show the relevant certificates to it only then the request is accepted

so like we saw in the previous example only till the router your traffic is encrypted

so we can simply say curl

and i would say i'll simply pass the headers as host

and food.bar.com

sorry to interrupt but i think there is another session and so people are yeah sure you

think yeah no no just like okay okay got it what you can continue

here yeah so i'll just close it in a couple of minutes so uh this is how like

you know i tried to access the service but you see that it failed so i can pass

the client certificates and then that would simply

pass my request okay because it's a self-signed

certificate that i'm using so now if you see because i pass the certificates and router can simply

accept my request and so i'm able to access so i have other examples as well for the pass through as

well as uh re-encrypt but probably i'll take it in some other session uh sorry i was late by uh some time so that might

be the reason why i went over the meeting

## Conclusion

thank you it was it was a great session it's really a helpful session

yeah that's all i have uh thanks do you have any questions on any specific topic that we did i had asked one in the chat

but it's mean i mean there are so many controller implementations for the same resource

type okay that is because uh you have so every load balancer feels that uh

they are better at it right so engine x feels that they are the best load balancer here proxy thinks that it is

the best and uh there are many enterprise load balancers because there are many load balancers there are many

implementations to the ingress right and everybody is trying to just fight over each other like

and uh so that's the obvious reason thanks

make sense competition yeah and even if you look at the implementations also they are very quite

different so uh even apart from ingress and routes many of these modern day ingress controllers

support custom resource definitions and they have their own uh types like because ingress is pretty much static

right the you cannot make anything more with this ingress file right so uh what these people have come

up with is uh they have created their own custom resources some of them are called ingress routes some of them are

called virtual services if you're aware of service mesh so different people call with different names and the

implementations are also quite different and yeah just one last thing that i would say is uh i showed you one of the

drawbacks with route that uh if you're talking about route you cannot secure or you cannot store this

uh route's information in secrets right that is with the predominant uh load

balancer that comes within it the ha proxy but there are many load balancer like uh fi

is one of the load balancer where it doesn't even i mean it allows a route to store these

secrets in a uh these tls certificates in a secret and it also provides the other ways like i

told you custom resource definitions or you can also put them in a different secret name or config map and you can

provide it uh in the annotations so that's the reason why uh different load

balancers are there like hf proxy is not supporting it so other load balancer is supporting it so people move to other

load balancer yeah great session um do you have your

examples your manifest checked in somewhere and yeah i'll all right i'll put them in my github and i'll try

to put it in the github's cloud clubhouse okay cool

thanks a lot everyone for taking your time out thanks thanks a lot thanks

thanks a lot

you

English (auto-generated)






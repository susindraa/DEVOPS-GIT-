#space/kubernetes/42-day
### **Kubernetes Monitoring with Prometheus & Grafana - Comprehensive Notes**  

---

#### **1. Why Monitoring is Essential**
?
- **Single Cluster**: Easy to manage manually.
- **Multiple Clusters/Teams**:
  - Need **centralized visibility** into cluster health.
  - Detect issues like **failed deployments**, **resource bottlenecks**, or **service outages**.
- **Proactive Alerts**: Avoid reactive firefighting with real-time alerts.
<!--SR:!2025-05-08,3,230-->

---

#### **2. Prometheus Overview**
?
- **Open-source** monitoring tool (originally by SoundCloud).
- **Key Features**:
  - **Time-series database**: Stores metrics with timestamps.
  - **Pull-based model**: Scrapes metrics from targets (e.g., Kubernetes API).
  - **PromQL**: Query language for metrics.
  - **Alert Manager**: Sends alerts to Slack/Email.
<!--SR:!2025-05-08,3,230-->

#### **3. Grafana Overview**
?
- **Visualization tool** for metrics (supports Prometheus, Elasticsearch, etc.).
- **Pre-built dashboards**: Quickly visualize cluster health (e.g., CPU, memory, pod status).
<!--SR:!2025-05-08,3,230-->

---

### **4. Architecture of Prometheus**
?
1. **Prometheus Server**:
   - Scrapes metrics from:
     - **Kubernetes API server** (default metrics).
     - **kube-state-metrics** (additional cluster state).
     - **Custom apps** (via `/metrics` endpoints).
   - Stores data in a time-series DB.
1. **Alert Manager**:
   - Handles alerts (e.g., API server downtime).
1. **Grafana**:
   - Connects to Prometheus as a **data source**.
   - Displays dashboards (e.g., node uptime, pod replicas).
<!--SR:!2025-05-08,3,230-->

---

### **5. Installation Steps (Minikube Example)**
?
#### **Step 1: Install Prometheus**
```sh
# Add Helm repo
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
# Install Prometheus
helm install prometheus prometheus-community/prometheus
```
- **Verify**:
  ```sh
  kubectl get pods  # Look for Prometheus server and kube-state-metrics.
  kubectl get svc   # Expose Prometheus (NodePort for demo).
  kubectl expose svc prometheus-server --type=NodePort --name=prometheus-ext
  ```
- **Access UI**: `http://<MINIKUBE_IP>:<NODE_PORT>` (default port: `31110`).
<!--SR:!2025-05-08,3,230-->

#### **Step 2: Install Grafana**
?
```sh
# Add Helm repo
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
# Install Grafana
helm install grafana grafana/grafana
# Get admin password
kubectl get secret grafana -o jsonpath="{.data.admin-password}" | base64 --decode
# Expose Grafana
kubectl expose svc grafana --type=NodePort --name=grafana-ext
```
- **Access UI**: `http://<MINIKUBE_IP>:<NODE_PORT>` (default port: `31281`).
<!--SR:!2025-05-08,3,230-->

#### **Step 3: Configure Grafana**
?
1. **Add Prometheus as a data source**:
   - URL: `http://prometheus-server:80` (or `http://<MINIKUBE_IP>:31110`).
2. **Import a dashboard**:
   - Use ID `3662` (pre-built Kubernetes dashboard).
<!--SR:!2025-05-08,3,230-->

---

### **6. Key Metrics to Monitor**
?
- ![[Pasted image 20250420102847.png]]
<!--SR:!2025-05-08,3,230-->




| **Metric**               | **Tool**          | **Purpose**                              |  
|--------------------------|-------------------|------------------------------------------|  
| Node CPU/Memory          | Prometheus        | Detect resource bottlenecks.             |  
| Pod replicas             | kube-state-metrics | Ensure deployments match desired state.  |  
| API server health        | Prometheus        | Monitor Kubernetes control plane.        |  
| Custom app metrics       | Prometheus        | Track app-specific KPIs (e.g., requests/sec). |  

---

### **7. Advanced: Scraping Custom Metrics**
?
- **For custom apps**:
  1. Developers expose a `/metrics` endpoint (using Prometheus client libraries).
  2. Update Prometheus config to scrape the new endpoint:
 ```yaml
     # Edit Prometheus ConfigMap
     kubectl edit cm prometheus-server
 ```
     Add under `scrape_configs`:
 ```yaml
     - job_name: 'my-app'
       static_configs:
         - targets: ['my-app-service:8080']
 ```
<!--SR:!2025-05-08,3,230-->

---

### **8. Troubleshooting**
?
- **Prometheus UI**: Run queries (e.g., `up{job="kubernetes-apiservers"}`) to verify scraping.
- **Grafana**: Check data source connection (Test → "Success").
- **Logs**:
```sh
  kubectl logs prometheus-server-xyz
  kubectl logs kube-state-metrics-xyz
```
<!--SR:!2025-05-08,3,230-->

---

### **9. Key Takeaways**  
✅ **Prometheus** = Metrics collection + alerting.  
✅ **Grafana** = Visualization (use pre-built dashboards like `3662`).  
✅ **kube-state-metrics** = Extends default Kubernetes metrics.  
✅ **Custom apps** = Expose `/metrics` and update Prometheus config.  

---

### **10. Resources**  
- **GitHub Repo**: [Kubernetes Monitoring Guide](https://github.com/abhishek/kubernetes-monitoring)  
- **Grafana Dashboards**: [Explore Dashboards](https://grafana.com/grafana/dashboards/)  

**Next**: Learn **alerting with AlertManager** and **custom metric exporters**! 🚀

# Transcript


hello everyone my name is Abhishek and welcome back to my channel so today is day 42 of our complete devops course and

in this class we'll be learning about kubernetes monitoring so this class is not just going to be a theory but I have

also a GitHub repository that is uh practical like you know you have all the

installation steps and whatever we are going to try as part of the demo the reason why I've created this repository

is you know we are going to do a lot of commands on my mini Cube cluster so uh

sometimes people ask me like you know can you put these commands in a GitHub repository or can

you share them as part of a document so I thought anyways I am going to enhance this repository in the future and add

more topics like you know I'll be adding more topics about uh Advanced kubernetes monitoring writing your own metric

server so for all of those things I thought I will create a centralized GitHub repository and this is the one so

what you can do is you can start this repository so that you understand what are the future advancements that I'm

going to make to this Repository perfect but coming to the topic for today what we are going to learn today

is firstly we will definitely understand as usual right as every class I'm going

to explain the why aspect like why you need monitoring what is the advantage of monitoring uh what is Prometheus what is

grafana so we are going to learn all of those things after that I am going to show you how to install these tools so

the only prerequisite for today's class is you have to have a kubernetes cluster that can be anything like uh it can be a

real kubernetes cluster on a production or it can be your development kubernetes clusters like mini cube k3sk 3d any or

anything uh we are fine with it right uh we are going to learn about installation and then finally I am going to monitor

I'm going to show you how to monitor the mini Cube I'm going to use mini Cube so mini Cube kubernetes cluster using

Prometheus and visualize using grafana right so this is going to be an interesting one and we are going to uh

prepare a grafana dashboard that will show the metrics of API servers and the

deployments that we have on on our kubernetes cluster what is the status what are the replicas we are going to

fetch a lot of information from my kubernetes cluster so watch the video till the end so that you understand the

uh you know concept of Prometheus grafana as well as monitoring of kubernetes clusters

so let's start with Y and like I told you I'm very well documented all of these things like even if you want to

follow uh why monitoring or why Prometheus that I'm going to explain you can use the same GitHub repository to

understand uh whenever in your interviews also you can use this repository for answering the questions firstly why monitoring is required

so let's say in your organization you have one kubernetes cluster okay so whenever you have a single kubernetes

cluster that's not a problem because for just one single kubernetes cluster probably because you are a single devops

engineer what you can do is you can monitor your own kubernetes cluster uh but what happens if this one kubernetes

cluster is used by multiple teams let's say you have multiple teams who are

accessing this kubernetes cluster and one of the teams says that oh okay in my kubernetes cluster uh something is going

wrong probably they'll say that the deployment is not receiving the request or they will say that the service is not

accessible for a short while so how do you solve this problem or at least how do you understand as a devops engineer

now this is just one kubernetes cluster as the number of kubernetes clusters increases probably you have a Dev

environment you have staging environment you have production environment so your number of kubernetes clusters keep

growing so as the number of kubernetes clusters keep growing then you would definitely need

so that is where kubernetes comes into picture Okay so kubernetes was initially

developed by SoundCloud then it is open source right now kubernetes is a sorry Prometheus is a

complete uh open source platform and anybody can use this Prometheus uh on

their uh clusters like even even if you are running kubernetes cluster behind or you are running a kubernetes cluster in

your Enterprise you can use Prometheus because it is open sourced one perfect so then if you have Prometheus

what is the requirement of grafana so grafana is basically for the visualization right so Prometheus can

give you a lot of information uh using the uh queries like you can use the prom

ql queries and you can get all the information regarding your kubernetes cluster but for a better visualization

you will understand when I uh show you the live demo you would need a grafana so grafana can use any data sources and

Prometheus can be used as one of the data source okay perfect now so what is the architecture of

promoters so sometimes interviewers might ask you this question uh can you explain me the architecture of Prometheus this diagram might look scary

but it is very very simple like you have a kubernetes cluster what Prometheus does is as you install Prometheus there

is a component and Promises called as a Prometheus server so this Prometheus server what it does is it has a HTTP

server and the Prometheus collects all the information like from your kubernetes

cluster by default your kubernetes has a API server and API server exposes a lot

of metrics about your kubernetes cluster okay so maybe five years or six years ago you might have to do a lot of

configuration for your kubernetes cluster but right now these tools are very matured uh even they have

contributed back to kubernetes so a lot of metrics are exposed out of the box in your kubernetes cluster previously maybe

you have to do a lot of configuration for your kubernetes but right now the number of configurations has gone down

so kubernetes has an inbuilt API server okay so this inbuilt API server exposes

a lot of metrics so it says uh if you access me on API server slash metrics

API server IP slash Matrix you can get all the information of what is the status of your resources in the

kubernetes cluster some of the default resources now Prometheus will try to fetch this information and it stores the

entire information in a Time series database okay so what is time series database it's just like you know with

respect to the timestamp it stores the information of the metrics of your kubernetes cluster so this is about the

default kubernetes uh resources right but what if you want to do uh more resources or what if you want to get

beyond the out of the box metrics that your kubernetes API server is using that also we are going to learn today okay so

don't worry about it then it stores all of these things on the disk right so HDD or SSD whatever

you are using so because it has to store this is a Time series database it has to store information somewhere right it

stores on a node using headset on the HDD or SSD then it has a monitoring uh system like

you know you can configure Prometheus with alert manager and you can send notifications to different platforms probably you can send to slack you can

send you can do an email you can send to various uh things so what happens under the hood is if you create the alert

manager so Prometheus can push the alerts to the alert manager and you can configure this alert manager to send out

notifications to different places probably in my organization uh let's say I have decided to use slack for alerting

so what happens is whenever Prometheus identifies uh you know you can say what

kind of metrics or what kind of alerts have to be pushed let's say I say that if API server is not responding

according to my limit that I've said then what you can say is Prometheus send alert to alert manager so Prometheus

will send the alert to alert manager saying that API server kubernetes API server is uh you know sometimes showing

a flaky Behavior or it is not responding a few times so this alert manager depending upon the number of things that

you have configured with alert manager it's not just one thing probably you can do email you can do slack you can do

meet Google meet anything right so you can send notifications to multiple places so that's what alert manager does

and apart from that like this is about the default configuration right but somebody can

also go to Prometheus server like Prometheus provides a very good UI so you can also go to the Prometheus UI and

you can execute some prom ql queries from ql is nothing but promethel oh sorry Prometheus queries so you can

execute some Prometheus queries to get the information from Prometheus whatever it has recorded or you can also use

dashboards like grafana or like any other tool like for example AWS supports API right so Prometheus also supports

API you can also do some curl commands or using Postman you can get that information from Prometheus as well so

this is overall like the high level architecture of Prometheus so as we keep learning Prometheus this architecture

looks even more simple now like I told you why grafana so

grafana is just for the data visualization so here when you do a query to Prometheus it gives you output

in a format for example uh any Tool uh that is returning your output let's say

it is giving output in Json format and if your managers or you know if you want to set up dashboards uh in your

organization somewhere so that everybody can monitor Json or you know any kind of uh this templating languages are

difficult to read right so if you have lot of information it is very easy to represent the information in charts or

you know any any kind of diagrams so that's what grafana does for you so it provides a very good visualization it

retrieves the information from Prometheus you can configure Prometheus as a data source and you can get the

information into grafana and inside the grafana what you can do is you can create some nice diagrams this is for

Layman understanding okay so you can create some nice charts or visualization

so now without wasting any time let's start our demo and what I'm going to do here is you know I'm going I'm just

going to take a kubernetes cluster so I'll create right from scratch so that many people have been asking me uh how

to create a kubernetes cluster even though I've explained that in the previous videos no worries I can do it one more time so I am using minicube for

this demo uh most of the times I use kind whenever I'm doing my local development or

whenever I am doing uh local testing because kind is a very lightweight uh kubernetes in Docker uh kubernetes

cluster but you know whenever you you're doing this kind of demos which requires uh more memory or which requires more

CPU go with mini Cube so one thing that you can do is you can simply say minicube start but when you say mini

Cube start let's say you are on Windows or Mac it uses the docker driver as default so that means to say that the

default driver which minicube is using is Docker but For Better Or easy networking

configurations go with the virtualization like in my case I prefer hyperkit okay so this is the command

that I used to start my mini Cube cluster and if you are on Mac definitely use this hyperkit is a default

virtualization that is available on your Mac or supported on the Mac but you can

also go with virtualbox Oracle virtualbox or any other platform as well okay so this is

the command that I'm using mini Cube start I'm giving 4GB of memory and Driver as hyperkit

so if you don't provide this driver as hyperkit then it would use the docker desktop so whenever you're using the docker

desktop sometimes when you are exposing your services or when you are using Ingress maybe you might have to do some

additional networking configuration so this doesn't take much time uh it would take probably a minute to create

your kubernetes cluster and once your kubernetes cluster is ready what we can do is go back to this GitHub repository

right so in this GitHub repository I have created a folder called installation and you have installation

for both of the things like you can use Prometheus folder for installing understanding how to install Prometheus

you can use grafana for understanding how to use grafana or install grafana right so I will also use the same GitHub

repository well think this will need a minute more for creating the mini Cube kubernetes

cluster using hyperkit

perfect so my kubernetes cluster is ready I've installed the latest version of the kubernetes cluster that is one

dot whatever is supported out of the box with my installation so it has 1.23.3 I

did not pass any additional configuration so probably in your case you might be installing 1.25 that

doesn't matter okay so I'll show you that my uh kubernetes cluster if I just say Cube

CTL get parts minus a so you will notice

that it just has all the default installations that uh like the kubernetes API server controller manager

uh uh code DNS etcd only these things right so let me proceed now and start

with the installation of Prometheus so I would go with the helm as installation

option or operators as installation option okay so either use Helm or use

operators this is not just for these tools in a general practice operators offer a lot of uh you know Advanced

capabilities like you know you can do life cycle management of your kubernetes controllers using operators where you

can install it can you can configure for automatic upgrades let's say tomorrow there is a new version of Prometheus

operators are capable of upgrading your Prometheus automatically and they can do

a lot of more things we will talk when we discuss about kubernetes operators so in this class I am going to install new

using Helm so I will just open uh the GitHub page that I've shown you in a

different uh screen and what I'm going to do is I'm just going to copy paste the commands so

the First Command that you will see in the GitHub page probably if you are watching the video you can open the GitHub page in a new tab or if you have

a different screen you can open it there so I'm just copied it and it says Helm repo add Prometheus community and so

what I am doing here I'm just adding a Helm chart so first thing that you need to do when you are using help is to add

the helm repo right so that's what I'm doing here in my case it is already existing but in your case if it is not

available like you can do it you can install it you can add the requirements to say

now Helm repo update so this would update if you have let's say you have

installed uh this repo a week back and now there is a new version of Prometheus uh

controller so always do Helm repo update before you install anything so here in

this case when I do Helm repo update so it updated a few things successfully

perfect after that I would simply install the Prometheus controller right so this is the step to

install the Prometheus controller and the other required configurations like the Prometheus config map and the other things

perfect Helm install Prometheus Prometheus community so you could also do this step directly if you had the

helm chat but what happens if you don't do Helm rep update probably you might install an old version of Prometheus

no problem so I have installed I'm going to install Prometheus nav so it says

perfect so Prometheus is successfully installed and what it says like just

copy this information do not run to the next command because

here it gives you some important information on how to like you know how to get the server URL probably if you

are not using minicube maybe if you are using openshift platform or if you're using a different platform so this

information is very important for you so read the information whatever is provided here and probably if you want

to do a port forwarding all of these things is available but in this class I am going to explain you all of these

things so you can skip but always try to read these things so I have done the helm install Perfect

now the promethaz installed let me see if it is installed right or not Cube CTL get pods uh it should run Prometheus

points perfect so the Prometheus ports are running so Prometheus server is still running right so if you see here

it says Prometheus server so the container is creating even in this case uh Cube State metrics I'll explain you

what is Cube State Cube State Matrix and what is the importance of cube State metrics but uh you can understand that

it is still running okay so let's give it a minute

so this is running now Cube State Matrix and this is taking more time so meanwhile I can explain you what is Cube

State Matrix so like I told you uh kubernetes API server it would explain

it it exposes few metrics of your kubernetes right so it gives you information about the kubernetes API

server it gives you information about the default uh installations on your kubernetes cluster which I showed you uh

a couple of minutes ago but as you are monitoring your kubernetes clusters you

might require more information probably you might want to know information about all the deployments all the pods all the

services on your kubernetes cluster you would want to know um if the replica

count is matching the expected replica account of all the deployments on your kubernetes cluster so what the

kubernetes community or you know what uh people at cubesat Matrix have done is they have created a cube State Matrix

controller so you can create a service for this Cube State metrics and you can use this Cube State metrics so when you

call the cubestate metrics on the you know ah Matrix endpoint so it would give you

a lot of information about your existing kubernetes cluster so this information

is beyond the information your kubernetes API server is providing so that is the importance of this uh

specific kubernetes controller so when you install using help this is installed by default let's say you are not using

Helm or let's say you are installing uh just the Prometheus deployment so I'll also show you that what happens in that

case let's say you are not using helmchat and you have not installed this I'll show you how to install this

by your own right how to install cubestate metrics so mean before that let me just say Cube

serial get pods and see if everything is running perfect now everything is running and I am good to go so now what

I will do is I will just see Cube CTL get SVC so all the services here so there are

services like Prometheus server so this is a service that is created using

cluster IP mode and you have again this one which is very important uh Prometheus Cube State metrics that is

also created on the cluster IP mode so and then alert manager that I told you so all of these things are created using

cluster IP but what I want to do is I want to expose this Prometheus server and I want to show you uh how does the

Prometheus server API would look like and what queries that you can create or you know all of these things so for that

what you can do is firstly convert this cluster IP mode service

into a node Port service so what you can do is go to the documentation and simply

use the command that I have provided so this is Cube CTL expose service command so what it would do is uh as soon as I

enter this one okay so you would see a new entry here let me just do again Cube

CTL get SVC so you do see a new entry called Prometheus server EXT because in

the command I have provided you know expose a service and the name of the Expo service should be Prometheus server

EXT okay so now what I can do is I can open the Prometheus server UI on the

Node port three uh 31 000 31110 right so let me go back uh take

the terminal here right and uh show this to

you so before that I need to get the IP address of my kubernetes node so I can

just do minicube IP so if I do mini Cube IP this is the IP address so go back

take the uh take the browser enter this one here http

colon what was the port again sorry uh Thirty one thousand one one zero right

so three one one zero so see that the Prometheus is running so

you have installed Prometheus on your kubernetes cluster so right so you have

done the step one successfully so now what you can do is you can provide any Prometheus queries right let's say you

are not aware of Prometheus queries you can just read the Prometheus documentation or you can also use chat

GPT to just give information about a few Prometheus queries and as soon as you

execute uh this Prometheus queries here I will show you don't worry about that so you can get the information about

your kubernetes cluster so by default like I told you you can only get the information of the metrics that are

exposed by your kubernetes API server so if you have a application let's say you

have an application called XYZ that your developers have deployed on your kubernetes cluster and you want to get

the health checks of it or you want to get Lively liveliness probe or you want to get any details of that particular

application using I mean at this point of time it will not be possible because the API server or the cube State metrics

they will only give you the information at a certain level but if you want to get more details of your application

then your developer should write a metric server or they can use the Prometheus Matrix libraries and what

they can do is they can expose a matrix endpoint and you can scrape that Matrix

inside the Prometheus that I'll show you how to do that uh in Prometheus you will have a config map and inside that config

map you can scrape The Matrix so you can say Prometheus that okay apart from the Matrix that Abhishek is going to show me

in the grafana board or here what I want to do additionally is I also want to get

the metrics of my custom application or the application that my developer has deployed and apart from the default

Matrix cubesat Matrix is giving me I want some additional metrics okay so let's not bother about it uh for

a while so for now you have the Prometheus and Prometheus is installed now what I'm going to show you is the

advantage of this uh this one here Prometheus Cube State metrics right so

what is the advantage of it uh maybe we'll firstly create grafana and then we will come back okay so that you

understand what are the default metrics that uh kubernetes API server is giving and what is the advantage of this Cube

State Matrix which is going to give you additional metrics so again I'll go back to the document uh

here so if you go to the GitHub so there is a folder called grafana just go to the

grafana folder and you have Helm dot MD so just copy the commands step by step

and every time you do it verify that your command is passing so let me just

copy the first command to add grafana Helm chat so now the grafana in my case already

exists probably in your case it does not exist and it is always a good practice to do Helm repo update

as well then I'll proceed with installing the grafana using the grafana helm Charter so now this should install

the grafana on my kubernetes mini Cube cluster so it doesn't take much time and you

will notice here that it is very important now to follow these steps

because you need to know the password for your grafana okay so to log into grafana or you know to visualize the

information from Prometheus on your grafana dashboard what you need to have is the password to log into grafana so

you can get that password here you can simply copy the command which says Cube CTL gets secret and you know

admin is a user and the password in this case oh sorry again copy it

so this is the password in my case okay so now let me try to expose this grafana

similarly I've done to my uh Prometheus because if you just do Cube CTL get SVC

you will notice that there is a grafana service but this grafana service is again here running on the cluster IP so

let me expose this one and uh create a node Port mode grafana service okay so

you will notice a new entry uh oh sorry there is a typo here

I think I need to fix this on the GitHub page as well no problem so now you will

notice that a new uh service entry would be created if I just say cubect I'll get SVC you will notice that you know there

is something called as grafana EXT in your production environments or in your Dev staging environments you don't have

to do this because you will definitely use Ingress you will have Ingress controller so you can create a Ingress

or route for your grafana and you can start using that if you are using a operator then that would be automatically created you don't even

have to do that so now the node Port IP address for this is 31281 okay so again

a mini Cube IP so this is the IP address and 31281 is the port so let me take uh

this one here and again show you let me open a new tab copy it

http colon 31281 now you should see grafana

dashboard as well right so it will ask you for the user ID and password uh I explained you how to

get the password right so if you don't remember go back and what was the command that I've

executed Cube CTL get secret namespace and this was the password that it generated for me so enter the password

here and now we are able to log into grafana as well right so now you have successfully set up Prometheus as well

as grafana for your kubernetes mini Cube cluster awesome so the first thing that

you should do as soon as you have grafana is you need to create Prometheus as a data source for your grafana now

why is this required because like I told you grafana is a visualization platform so it it would need some metrics or it

would need some information for it to create all the charts or all the required diagrams

so creating that is not difficult just go to this option here called data source add your first data source click

on it so you would have option for multiple data sources like I told you Prometheus

supports a lot of data sources but sorry grafana supports a lot of data sources we are interested about promoters so

click on Prometheus provide the IP address of your Prometheus so in my case I can copy it

from here and paste it here right so this is the IP address and save and test

so that would save the configuration and it will also test if your data source is working or not so here it's it's a data

source is working that means to say now my Prometheus will be able to sorry again sorry for that no mic grafana will

be able to retrieve the information from Prometheus it can use Prometheus as the data source and it can show you some

dashboards so let me go and create a dashboard as well so click on the dashboards option here and you would

okay you can do it from here and what you can do is instead of creating your first dashboard because it you have to

do a lot of things the simplest thing that you can do is come here click on a

dashboards option here you have something called as import so what grafana has done for you is

grafana says that okay you don't have to create anything so in grafana.com we

have created multiple dashboards like uh dashboards are nothing but they have created some predefined queries and

anybody who is going to use that dashboard ID okay so we will automatically configure some queries to

pull the information from Prometheus so if you are starting with grafana use this ID called 3326 just click on load

and your first dashboard not found okay what was the problem

let me try it one more time three three two six

uh just give me a second

foreign my bad the ID name would be three double six two it's not uh sorry sorry for that

yeah as soon as you click on the load so you will uh see here that you can choose

what is the default option that is Prometheus again so just click on import and you will notice that a beautiful

dashboard is created for you and this dashboard is retrieving the information from your mini Cube cluster now how this

how did this happen so as soon as you entered ID called 3326 what the people

or you know what the grafana dashboard that is available for you at the grafana.com has done is it has created a

pre-existing or you know uh pre-created template and that template would run

queries like here I have shown you one diagram uh if we go back

so here what I told you in the initial slide is you know if you want to get any

information from the Prometheus server uh through grafana you have to run some prom ql queries right for if you are a

beginner you might not know about this prompt uh maybe you have to uh you know learn or you will take more time to

understand how to write this prompt queries so what grafana said is okay don't worry we'll make it easy we have

noted on what are some of the common uh queries or what are some of the standard queries that everybody would require and

we have created a template for it and that template ID is three double six two so three double six two in the grafana

is a standard template that would get lot of information from your kubernetes cluster see now we are able to get the

information of kubernetes API server kubernetes nodes all of the things right so you can just go on one specific thing

let's just click on kubernetes notes so here you have the information of the kubernetes nodes

and probably if you want to get any information about uh what is the uptime

of your mini Cube cluster so it says mini Cube cluster is always running and if you just hover on it so it will give

you the query as well okay so slightly hover on it uh yeah so it is sometimes difficult to

capture that View

just give me a moment okay no problem like you know you can

hover on it and you can get the query as well okay so as soon as I'm doing it I am not able to copy it and show it to

people but uh you can get all of these queries uh to understand or you can also good like see here so it is saying it

has executed uh a query called sum and it is getting the time series of all the things what is a memory chunks or you

know what are some of the misditations so all of these things and this is a real-time dashboard so you can get this

information uh even if you execute this query that I'm showing you here now average average

overtime of up status of my kubernetes node so you are going to get the output

in the Prometheus as 100. okay so you can execute that queries here as well but like I told you uh if

you are going to execute the queries here uh inside the Prometheus what will happen is you are going to get the

information in a Json format but for a better visualization go for grafana you can use the similar queries in grafana

as well now but here if you see what is happening is I have the Matrix regarding

the native kubernetes services like you have kubernetes API server you have few other components but what if I would

like to know what is the deployment status what are the running replicas or you know what is the current status of

the kubernetes service from uh Prometheus so that's why what uh Prometheus has done or what this

specific service that I'm going to talk is Cube State metrics so this one here Cube CTL get SVC

so this is the cube State Matrix and this is going to give you a lot of more

information okay so again similar to the previous things I'll try to expose this

Cube State Matrix and go I'm going to show you okay so the command that we are going to use is just say expose

and use this one here

followed by what is the Target Port so how do you understand the Target Port so

if you look at the cube State Matrix so the Target Port is eight zero eight zero so eight zero eight zero and let us name

it as Cube State Matrix hyphen EXT

now once I run this you will get a new entry for this Prometheus Cube State

Matrix as well so let me do Cube CTL get SVC one more time and now you will

notice that the cube State Matrix is running on three zero four two one now see the magic what would happen if I

just use the same mini Cube IP address but on the port 30421

okay so let me do that what is the mini Cube IP address HTTP colon double slash

192 168 6415 or let me copy it from the

cluster only

copy colon

30421 now see so it says let me increase the

font it says okay so you are trying to reach Cube Matrix and if you click on

Matrix so you get Matrix of a lot of things on your kubernetes cluster okay

so like I told you this is a Json format information not Json actually so this is a matrix format information where you

are getting a lot of information right but now what you can do is see you can

use this same information inside your grafana as well or take any of this

query like for example I would like to know what is the status of deployments okay so you can just use the Prometheus

query here called uh this one so what it is doing is it would give me status of

my Prometheus server so you can take this query here

and you can execute it like this and as soon as you do execute see this is the

information that graphana sorry Prometheus has written here and what grafana will do is it will take the same

information but it will provide you this information in a visualization pattern okay so that's the only difference like

the information is coming from Prometheus itself grafana is just using Prometheus as a data source and it is

providing you this information in a visualization format okay so it is providing you this information in a

better format now what you have done till now is that you have set up Prometheus you have set up

grafana and you have used the default dashboard in the grafana that is three

double six two uh ID uh that's a default template which will retrieve a lot of

information about your kubernetes cluster what is your notes uptime what is the status of your kubernetes API

server what is the status of your kubernetes etcd all of these things is available let's say if your organization

requires more information then what you can do as a devops engineer you can expose the cube State metrics and you

can get a lot of information on this specific endpoint okay what is the end point here 192 168 64 15 is my mini Cube

IP address followed by the node Port of my cubestate Matrix slash metrics okay

so this is the end point where you are going to achieve or get all the information now you might ask me okay so

I am doing this on the browser but how do I do this information inside my Prometheus like how do I get this

information directly inside my Prometheus so again it's not a rocket science what you need to do is you can

just do Cube CDL get cm so this is the config map called Prometheus server okay just open this

Prometheus server okay Cube CTL edit CM config map called Prometheus server and

here you have information about all the data that your Prometheus is scraping okay so scrape

information is nothing but the information that promoters is getting from like you have a prometheus.yaml

file and here you have script configs so by default what it is saying is it is

just getting the information from the Local Host 1990 but where I want the new

information should be coming from so I want the new information should be coming from this specific endpoint 192

168 64 15 304 2y sorry 2 1 right so this

is the new information that I want so what I can do is I can create a new entry inside my kubernetes cluster for

this Cube State Matrix endpoint so here I would add a new configuration how would I do that I can simply come here

okay so provide a new job name and here you can say State Matrix or anything

that you would like to and here you would say uh static configs and put the

same information and provide the target IP address okay now the important information is okay so this is about

Cube State Matrix and this is about the default parameters Matrix but what about the applications my my developers are

writing so my developers are writing bunch of applications and how do I get the health of those applications so how

do I understand if that applications are receiving or you know they are sending out a response on each and every request

so how do you get that information is you should ask your developers right similar to this Cube State Matrix it is

exposing uh all the metrics regarding the kubernetes default applications on slash metric endpoint right so similarly

you should ask your developers to write a matrix server and what they will do is they will write a matrix server and they

will use the Prometheus libraries there is a very good documentation that is available as a devops engineer if you

are not writing these things it is not required but let's say you are interested what you can do is you can just search for Prometheus Matrix server

how do I write that I will also explain you that in the future classes so once your developers or devops Engineers

writes that then it is is all about just going back and updating your

applications metrics here okay so this is very simple and this is how we are

going to do monitoring and visualization using Prometheus and grafana right I hope uh you understood what we have done

today and if you want to replicate the same behavior if you want to try out the same things at your end then you can

follow this documentation where I have detailed each and every step okay whatever I have done till now and

probably the cube State Matrix information is missing so that thing you can understand from the video because it

is just one command okay and yeah so this is the video for today if you like the video click on the like button if

you have any questions or any feedback for me put that in the comment section I hope you enjoyed the video please

share the video with your friends thank you so much I'll see in the next video take care everyone bye

English (auto-generated)

###
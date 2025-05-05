#space/kubernetes/32-day


### Transcript

hello and my name is Abhishek and

welcome back to my channel so first of

all uh I would like to say sorry for the

delay I was stuck in some other issues

so I couldn't upload the video on time

but yeah it's never too late so uh today

we are at day 32 of our complete devops

course and in this class I'm going to

talk about kubernetes production systems

so what I mean by that is I am going to

basically explain you how devops

Engineers manage the life cycle that is

like the uh creation

upgradation configuration and deletion

of the kubernetes cluster in production

so why is this important because you

know when you uh try to see a lot of

people on our Channel commenting or you

know people uh practicing uh kubernetes

from various sources like udemy an

academy or any other popular YouTube

channels most of the time but I have

seen people are practicing things on

minicube or you know any other popular

local kubernetes uh setups like uh k3s

Ka uh sorry kind

k3d or micro k8s all of these things are

like they are very good platforms for

you to uh for you to learn kubernetes

and explore uh kubernetes but you need

to understand that all of them are

development environments okay so what

all of them are they are basically

development environments or developer

environments so even if you go to

kubernetes official uh sorry minicube

official documentation you will see that

this is just a

local kubernetes cluster and should not

be used on production right so they are

just development environments but

if you try to get into a devops position

or if you are being interviewed for

kubernetes or devops administrator

positions one of your primary

responsibilities would be to create

infrastructure for your organization and

if you are using kubernetes then your

expectation would I mean expectation

from you from you would be to also

manage the life cycle of your kubernetes

clusters now if you are not using a mini

Cube k3s KDA all of these things in your

organization then you should know what

is the kubernetes that people are using

in their organizations or what are the

kubernetes distributions I'll explain

you what is a distribution don't worry

about it but how people manage

kubernetes on their clusters now firstly

let's try to understand why are the

local kubernetes clusters because you

know they are primarily uh you know they

are not full-blown kubernetes clusters

they have they don't have uh usually you

set up kubernetes in high availability

or all of these things these platforms

do not support that okay and they know

they do not ensure any issues that you

run into production if you just complain

mini Cube they say that oh we are not

production ready kubernetes set up then

we don't uh solve your problems in

production

okay so saying all these things let's

try to understand how organizations

develops Engineers Cloud Engineers

manage their kubernetes clusters in

production systems okay so before that

you need to understand that what is a

kubernetes distribution and what are the

popular kubernetes distributions because

this is where your interview is going to

be so people will not ask you questions

on Mini Cube people will not ask you

questions on k3s whereas people will ask

you what kubernetes distribution have

you used in your production and if you

have used any kubernetes distribution

did you manage that installation did you

manage the upgrades of that specific

distribution so this is where your

interview is going to be now what is a

distribution so for any open source

platforms like let's take example of

Linux okay so first of all Linux is a

open source free software so what people

have done is they have developed

distributions on top of it for example

best example is Amazon Linux right so

you must if you are using AWS you must

have seen something called as Amazon

Linux distribution or you must have seen

something called as red hat distribution

Cento as Ubuntu so what are all of these

things they are basically distributions

like these people have taken the open

source Linux platform and they said that

okay let's enhance this creative

wrappers on top of it or you know create

our own Distribution on it whereas like

if you can talk about Amazon Linux or

red hack if you have any issues with uh

your Linux platform let's say your

kernel is not working well or any of

these things so you can directly talk to

red hat or Amazon Linux and they will

also on time if you are using Amazon

Linux one of the advantage is they will

ensure that whenever there is security

patches or any of these things they

upgrade on time to time basis it's not

that open source platforms don't do it

but because you are paying for let's say

you're using Red Hat subscription

because you are paying for Red Hat

subscription so they ensure that you are

operating system or your kernel is safe

from all of the security vulnerabilities

right

so this is one of the advantages of

providing the distributed version

similarly even if you take example of in

the same lines kubernetes okay so

kubernetes is a open source container

orchestration solution platform right

it's a open source Coe platform

container orchestration

engine or container orchestration

solution so

what people have done is they have

identified that okay so let's build

software on top of kubernetes or List

build distributions on top of kubernetes

for example what uh Amazon has done is

they have come up with its own managed

kubernetes service that is eks or what

red hat has done is they came up with

their open uh you know distribution

called openshift uh VMware has tanzu

there is something called as Rancher

Labs uh which has created something

called as Rancher so all of these are

distributions of kubernetes okay so it's

like if you understand the concept if

you understand the architecture if you

understand how kubernetes works then you

almost know all of these tools because

they are not building anything new but

they are building only

user experience on top of kubernetes or

they are providing a better customer

experience okay what is customer

experience let's say you have any issue

with e case so you know that you can

raise a support ticket with Amazon and

it will get resolved as soon as possible

because you are paying for eks okay

whereas if you create ec2 instances

okay and on top of ec2 instances if you

are installing kubernetes on your own

then if you tell Amazon that oh okay I

went into some issue on kubernetes then

Amazon will tell you let us know if you

ran into some issues on ec2 because that

is the software that we are providing

you or that is the is tool or compute

that we are providing you kubernetes is

something that you have installed by

your own if you want support from us on

kubernetes get into our manage

kubernetes service that is eks so yeah

that is eks so there are various

distributions of kubernetes and why the

distributions are popular because this

distributions provides you support

tomorrow if you land into some issue

with kubernetes the open source platform

they will definitely help you but they

have their own timelines right so they

cannot say that okay customer XYZ is uh

running into some issues on kubernetes

so let me fix the issue they will have

their own priority whereas

if you talk about uh the licensed ones

because you are paying them money so

they'll give you instant support okay

but what is the order of this

distributions like which distribution is

very popular and which distributions are

widely used this is very important again

is because if you are giving an

interview you cannot say that you are

using my mini Cube on your uh production

system then your interviewer will

immediately reject you so you should

tell them that okay I am using one of

these systems and what are these one of

the systems

firstly kubernetes itself

so now you might ask me Abhishek you

just told me that kubernetes is a open

source software you don't have support

to it so I did not tell you that you

don't have support to it but you know

it's not a managed or it's not a

distributed uh or you know it's not a

platform that is provided by any uh

Enterprise like Amazon or red hat or

anybody who gives you instant support

but the thing is that let's say you are

working in an organization that has some

hundreds of kubernetes clusters on their

production okay now or they have one

single kubernetes cluster but with

hundreds of nodes or thousands of nodes

okay now

to run these applications to test these

applications there can be 100 developers

okay or there can be 100 teams with 10

000 developers now if you ask each and

every developer to create a eks cluster

then all of your organization Revenue

will just go into e case okay so your

organization will go spend a lot of

money on just eks so what people do is

that in their

staging or in their uh pre-production

stages they just use the

kubernetes systems for local testing or

for testing the applications for

developers who wants to initially test

their software they use k8s or platforms

like this instead of eks and one more

thing is there can be also Enterprises

you know which can use kubernetes itself

on the production because again there is

a reason for it why Enterprises can

directly use kubernetes on their

production is because not every

organization you know they have a

timelines like you know if there is any

issue it has to be fixed in one hour so

not every organization runs into such

kind of issues so there are hundreds or

thousands or you know 10 thousands of

organizations which still use kubernetes

on production not just these things so

okay so kubernetes is the topmost one

that is used in production after that

people use

openshift

and after that so I have done some

research on these things we read some

articles and this is the order so after

that people use Rancher

then there is something called as VMware

tanzu

then comes your eks

AKs gke

Docker kubernetes engine so all of these

things Falls after that no I'm not

comparing Docker swam with this because

they are all kubernetes distributions

okay Docker slam is a different

container orchestration engine itself

okay but these things are kubernetes

distributions there is a difference

between uh both of these things right

okay so now as it develops engine here

you should always project yourself to an

interviewer that you are not using mini

Cube or micro k8s or kind of these

things on your production system but you

are using one of these things on your

production system so what is the

difference between installing kubernetes

directly versus installing mini Cube so

if you are using or installing

kubernetes that means to say that you

are installing kubernetes with all the

capabilities for a Enterprise okay for

example just give an example minicube

can run on a single node architecture

with just uh like you know two CPUs and

four GB Ram whereas if you are actually

dealing with your kubernetes cluster

introduction you will need lot of

capabilities like your etcd itself will

take a lot of uh you know storage and

memory and then you have your EBS

volumes if you are installing on AWS of

course or else if you have your storage

related things and you have all of your

components uh that are you know in full

blown capacity so that is the difference

between mini Cube and kubernetes is and

one more question before I show you the

demo in life because I know you are all

very excited about the demo I'm going to

show you

how we are going to install not like

mini Cube or something but we will use a

tool called cops kubernetes operations

and I'll show you how in real a cloud

engineer or devops engineer installs and

manages their hundreds of kubernetes

clusters okay but one more question is

what is the difference between

kubernetes

and E case

okay so the difference between

kubernetes and eks is if you are

installing a couple of ec2 instances and

if you install kubernetes on top of it

and make a cluster that means to say

that you are managing this kubernetes

cluster and Amazon will not provide you

any support on issues with the

kubernetes whether it can be

misconfiguration or whether it can be

any kind of issue on kubernetes whereas

if you are using eks then you get

support from Amazon that's the only

difference rest of the things uh on EK

is there because this is a managed and

supported Solution by Amazon they just

have some wrappers they have some

additional scripts they have something

called as EK CTL so you can consider

this as again like a distribution of

kubernetes that is provided by Amazon

which has some additional wrappers which

has some additional plugins and command

line options but end of the day the

solution is the same

okay now let's move on to the topic for

today that is how devops engineer manage

their hundreds of clusters on production

so one of the primary uh tool or one of

the most widely used tools is cops

that doesn't means that uh there are no

other tools so you have tools like uh

Cube EDM you have Cube squash there are

multiple tools but cops is the one that

is most widely used so let's talk about

cap cops so initially if you talk about

four years five years back or six years

back cubadium was the one that was most

widely used and even I started uh

learning kubernetes or creating the

Clusters using cubadium the only

difference is with Cuban name you have

to do a lot of manual activities and you

know whenever you are talking about the

upgrades or you know configuring or

modifying your kubernetes clusters Cube

EDM does not have that smooth uh way of

handling things whereas cops is

basically kubernetes operations

okay so that's why it's called cops

kubernetes operations right so what

cause brings you is for a devops

engineer one of the most important thing

is not just the installation but you

have to deal with upgrades right then

you have to deal with uh modifications

you have to deal with uh deletion of

clusters so all of these things which is

called as a life cycle of kubernetes

okay so you have a life cycle of

kubernetes that is managed by cops so

that is why cops is one of the most

widely used tools for installing

kubernetes whereas if we go for the

other options let's say if you go back

to the previous slides so you have

openshift you have Rancher you have

tanzo so all of these things have their

own set of installations and like say

let's say you have to install openshift

so what you will do is let's say you

want to project yourself as a devops

engineer who knows openshift and who

works on openshift so what you can do is

you can go to the openshift docs and you

will see that openshift provides you a

lot of answerable playbooks using this

ansible playbooks you can install

openshift platform but saying that you

need to have redhapped subscription uh

you cannot you know directly use Centos

machines and install openshift on top of

it but you have to create a red hat

virtual machines on your Amazon Linux

and on top of that you can download the

ansible playbooks that are present on

the openshift documentation and you can

install ansible on top of these things

okay but be careful all of these things

whenever you are purchasing the red hat

subscription or whenever you are going

for the installation of

so that will incur some money because

you know those things will not be

covered by Amazon on your free tier so

if you have Amazon credits or if you

know uh you can uh you will you are

willing to uh pay for the uh these

things then you can go ahead and try but

even if you learn the thing that I'm

going to talk about today that is using

cops how divorce Engineers manage their

production systems that is more than

enough okay so you can say that we are

using cops and we are managing uh

kubernetes systems on our environment

then uh you know your interviewer will

be very interested

okay so as I told you all of these

things now without wasting any time let

me go on to the other screen and let me

explain you how to install and do all of

these things okay so let me stop sharing

here and then let me start sharing my

other screen

okay

uh one two three perfect

Okay so

one disclaimer before you uh start

trying these things

even using cops the thing is that you

have to create a couple of ec2 instances

then you have to create a bunch of EBS

volumes S3 buckets and if you have your

custom domain you have to also deal with

Route 53 so

be careful when you are even following

this specific demo because even with

this because we are creating EBS volumes

of size 8GB and we are creating uh Route

53 and all of these things it will be uh

chargeable so if you don't want to spend

money just understand the process that

would be even more than enough or else

I'm going to show you a trick using

which you can create the kubernetes

cluster without actually uh you know

paying money or you know without

actually uh

going into the AWS billing okay

so the first thing that you would do is

uh configure the AWS CLI itself right so

if you want to uh create this kubernetes

clusters you can follow this specific

GitHub repository called kubernetes Zero

to Hero where I have written the steps

each and everything like you know you

can simply follow these steps and

understand the process or you can try

out by yourself as well so start this

repository in future I'm going to add

more and more contents regarding

kubernetes into it

so firstly there are three uh

prerequisites uh for this specific

installation you need to install Python

3 because AWS CLI requires Python 3 and

you also need Cube CTL because you are

going to play with your kubernetes

cluster if you just want to install and

leave it then you don't need Cube CTL

okay if you just want to learn the

installation so Python 3 and AWS CLI are

the dependencies so

either you can carry out this specific

demo on your personal laptop or you can

also do it on your AWS okay so if you

want to do it on your AWS you can create

a ec2 instance in all our previous

videos we were using Ubuntu so create a

Ubuntu instance and then you know you

can basically run this command so that

your AWS CLI Python and kubernetes is

configured okay so these are the steps

that are required for the dependencies

so I am not going into the dependencies

because I have explained all of these

things in the previous classes as well

how to install Python 3 AWS CLA and Cube

CTL if you haven't followed the steps

are also available in this specific

GitHub document just get the

repositories that are required and then

perform a APT update then you know

install python Cube CTL and then you

know set them to the path that's it

now we will proceed to the installations

per day that is cops so cops like I told

you is the hero for today because we are

dealing kubernetes operations using

crops so if you're again on Ubuntu just

execute these specific commands so I

have already done uh if you see in my

case if I just run cops you will see

that cops is installed on my machine

okay so just follow the steps that's it

I'm not doing anything more than that

after this comes the interesting parts

that is you need to Grant your AWS CLI

IM user with this specific permissions

so if you are using the AWS admin user

itself like in my case what I have done

is you know because I am going to

perform demo and I know that I don't use

AWS IM users in the production so what I

did is I just use the

AWS admin user okay so in the previous

classes I told you how to you know uh

basically login into AWS using your CLI

the command that you need to do is AWS

configure if you do AWS configure you

will be asked with your AWS access key

ID once you provide that you have to

provide your AWS secret access key then

provide your default region output

format and done so where did you get

this access key and secret uh access key

like access key ID and secret access key

just go to your AWS dashboard to your

top right you have one section called

security credentials just go to this and

once you go here you will see that there

is a option for your

um access Keys okay so if you see here

these are my access keys and you can

create your own access Keys as well

perfect so I have done that because I am

using admin user I don't have to Grant

the permissions but if you are not using

the admin user and if you are using the

IM user you have to provide these roles

okay that is easy to full access S3 full

access IM full access and VPC full

access if you are already like it only

if you are already using admin user that

comes by default with all of these

permissions okay just run AWS configure

then

what corpse requires as a prerequisite

is you need to create a S3 bucket now

why do you need to create S3 bucket the

reason for that is

cops basically is used to manage your

hundreds of kubernetes clusters and to

manage these hundreds of kubernetes

clusters it is very easy if co-ops can

store all of the configurations of your

kubernetes clusters in S3 bucket okay so

it just needs a storage service so S3 is

offered as one of the storage services

so you need to just create just copy

this command Okay click on the copy

button come here and just create the

bucket okay so I'll just create the

bucket as cobs a B Storage one okay so

make sure that you change this specific

thing if you are using the same thing

then your uh S3 command will fail saying

that the

specific thing is already present that

is the specific AWS bucket is already

present after this you go to the cops

command that is to create your

kubernetes cluster so if we debug this

command firstly cops we are doing create

cluster name of the cluster S3 storage

that we have just created and then we

provide what zone it has to be created

which region it has to be created then

how many node count like do you want a

kubernetes cluster with one node two

node 100 node so you can provide uh

whatever you would like to and then

provide the size of the node that is T2

micro or macro or whatever you would

like to use finally provide the EBS

volume size okay so this is the simple

command you can just copy paste the

command as is and then what you will do

is just modify the S3 bucket name in the

specific command I just said hyphen one

and also modify the name of the cluster

according to your wish

one thing to remember here is I am using

cluster with name k8s local so the

domain that I'm using is a local domain

but in production systems or in your

organizations you will not use this

local domain instead you will use

something like amazon.com google.com or

if your company is called XYZ then

xyz.com and one additional step would be

you have to configure these domain in

your Route 53 that's the only additional

step rest all the steps are the same so

once you do this your kubernetes cluster

is created so one tip that I am going to

give you here is

stop the actions here itself because

after this you have one specific command

so here itself your kubernetes cluster

will be created you will see that your

kubernetes cluster is created you can

just execute this command and see but

all of your configuration is not updated

that means so here you are creating the

cluster but you are not you know

starting your kubernetes cluster so if

you have free AWS credits or if you have

your AWS account with some special

points or you are you are willing to pay

then just execute these commands right

now I'm not executing this command

because if I execute this command

already I have bunch of things on my AWS

account which I'm already spending money

on so I don't want to create one more

kubernetes cluster so see here it says

that the cluster configuration has been

created just finally configure your

cluster using this one specific command

and your kubernetes cluster

configuration will be done just wait for

a couple of minutes after this because

cops will take some time for starting

your kubernetes cluster

so this is the video for today and if

you have to explain your interviewer the

only thing that you'll modify is instead

of your local domain tell them that we

have a domain that we have purchased

from GoDaddy or you know our

organizational uh procute this domain

from some certification authorities and

these domain we configure in route 53.

so if you want to learn how to configure

this domain in Route 53 again that's not

a big process all that you need to do is

there is one simple command that I'll

try to put in the document as well but

this is the command I'm going to uh

paste the command here uh just a moment

I copied it to the notepad

yeah so this is a simple command that

you are going to execute okay so what

this command does is it would configure

like you know instead of dev.example.com

just replace it with your domain okay so

if your domain is amazon.com for example

so just replace it with amazon.com and

it will create you a hosted Zone in

Route 53 so once you have this uh hosted

Zone created on Route 53 then your

kubernetes cluster configuration is done

but if you don't want to spend on a

custom domain let's say you are just

using these things on your local not on

my on your personal laptop but even on

your organizations let's say you are

trying these things out on your Dev

environment or staging environment you

can simply use dot KH dot local which is

a local domain

okay so you can also explain this to

your interviewer that for my local

systems I'm using dot k8.local but for

the production we are using the uh dot

example.com or whatever the domain it is

so this is the video for today I hope

you uh like the video but from tomorrow

don't uh try your actions or you know

don't try your experiments on this uh

cops created kubernetes clusters like I

told you they'll incur some amount or

you know you have to uh you will be

billed by AWS so installations you can

do it using mini Cube uh for your local

kubernetes learnings and all of the

things I'll put the comment in the

description where I have showed you how

to install mini cube in five minutes

right so watch that video and tomorrow

from tomorrow's video whatever I'm going

to explain you try that things out on

minicube itself so this video is just

for your understanding of how uh systems

are managed and if you have free AWS uh

points then don't worry instead of mini

Cube you can try on these things itself

so that is the video for today guys uh

I'll see in the next video take care

everyone bye

English (auto-generated)

### Next:Day-33 | KUBERNETES PODS | D

#space/kubernetes/43-day

### Transcript

hello everyone my name is Abhishek and welcome back to my channel so today we

have Varun with us so if you remember Varun we had a interaction with Varun last time where you know we talked about

a lot of things uh how to get into an internship from your college and a lot of good things that Varun shared with us

so today Varun here Varun is here with us and he has something very interesting

to share with us so I'll give it over to Warren to uh explain about what he's going to demonstrate today

hey everyone I hope you all are doing good and I'm also doing fine thank you very much appreciate it sir for once

again giving me the opportunity to contribute to your Noble initiative that you are running and today on service

demand we are going to you know uh going to do a live demo or you can say a Hands-On project on this stream where

you go where you are going to you know sum up all the knowledge you have acquired till now whether it be of

GitHub whether it be of cloud computing virtual servers or a website something like that so what we are going to do is

we are just going to deploy our own website within few clicks and tell you that how easy is it is to deploy the

website using the Cloud Computing Services and how scalable and reliable it is so I think you all are going to

enjoy this session and let's start awesome yeah so I always love these

keywords when somebody says scalability and installing a few clicks so yeah I'm

very excited yeah please go ahead okay so let me share my screen

so I hope my screen is visible to one and all

yes yeah perfect okay so what we are going to do is let me show it to you

once like this is the represent this is the folder which I am having right now and there's the index.html so this is

the website which I have created for the demonstration today like there is a static website as of now simple website

to look but a beautiful one like if you click on the intro the intro page will open you can cancel it and similarly the

different different pages are going to open right now all the files and all the things are you know stored in my

local system now what we are going to do is we are just going to push all the things on our GitHub and then we are

going to you know launch our server on AWS and then we are going to start with the things so let's

start without any delay so let me once again go back to my you know finder where all my things are present so let's

say I am on this side so uh first of all I would like to create a empty GitHub repository and like to host all the

things

font size so everyone is able to see it let's go to our GitHub and create a new

repository for the sake of our project so I'm on my GitHub and let's say I

click on new and let me give it a name let's say AWS demo

I hope it works fine and let me add a review dot readme file

let's create a repository okay so our repositories created I hope

you all are very familiar with the search teaching and I will go to my hyper terminal

uh right now I think I'm on my route directory so I will just switch to the place where I have you know my

static content so documents is the place where I am doing it and CD is a very basic Linux command I hope you all are

very familiar with it do just go to the documents folder and as soon as I click enter I mean inside my documents folder

see now again I just want to go to you know AWS folder which I have created so

as soon as I do it I am here and let's once again for the last time just go into this folder and now I am going to

initialize a basic repository so first of all let me clear all the things now

we are in our folder where all our content is stored and this is the content which we want to upload it to

our GitHub now you all are familiar for hosting anything the first and the

foremost requirement is to initialize a git repository get empty repository which is going to you know track all the

changes and all the things which you are just gonna do with your file system so for that I'll use git init

IAL okay see it shows that it has reinitialized the existing git repository I have already

initialized the git repository that is the reason it is showing reunitely and if you are doing it for the first time

it is going to show you initialize the git Repository okay and then I'll just add all the

content which I which is being shown here like this is all the content which I am having right now so let's add all

this content git add and this dos simplifies that all the content of this

folder should be added okay and let me do git commit now right

now commit says that yes I am ready from my site now I want to commit and save these changes and now I'm ready to push

it on the GitHub so let's give a valid message name so afterwards it's not a

problem let's say added all the files I hope that this makes sense and yeah

enter okay now what should we do we should go to

our GitHub and alert that this is the repository where we want to push all our codes the GitHub is humongous where do

you want to push and ship all the things which you have created so for that purpose we will go and write git remote

okay this is my remote place and add that URL

origin is just a short name of our URL so each and every time you don't have to remember or copy this URL now you can

use origin and git will automatically understand this origin word as the URL

you are putting on protein so this is the URL which I copied and I'm pasting it down here let

me click enter okay so it is giving some kind of error it might be because I have already

okay yeah it has I have already pushed the things this is the reason so as soon as you'll

add this URL it will work really fine for you guys because I have already

initialized and after you are adding the remote

adding the you know remote you just need to do one thing that is get pushed

pushed minus U and origin origin Main

now what is this minus U signifies if I said this is for uploading region what

should I whatsoever here till now just upload to the GitHub where do you want

to upload it on the origin on the URL which I have already told you and Main here signifies the

branches for different different features development and all those things so this is the main branch for

the demo state so let's do it let's do it oh I don't know what's the problem

let's do one thing let's create another folder here

let's say let's say can you do can you do Force push uh just try to do uh get

just add minus F at the end and see what happens yeah let's try this as well

still it is giving some kind of error so I think we must initialize it yeah

yeah I'm sorry for that

no there is no worries demos are meant to fail don't do anything yeah exactly so don't get upset really if you are

unable to do it it happens all the time so let's go to the place where my files are located and here I'll just go into

the folder

gets to check what's the name AWS demo okay so I just want to go into the AWS demo

and here I am and once again I'll go to this part okay

so till now I am just on my folder where all my files are located and now with

the gate init command I am just you know initializing the data okay

uh let me just check if there is already a gift that is actually attached

okay I got it I got it what's the problem I am directly copying so it is uh you

know copying the files let me do it

okay no problem let's do one thing we'll name it something different for the origin and I'll come at all the files

first of all I am adding them to the station area then hit commit

edit website files

guys just give me a second

okay so you're copying the content to this one yeah I'm just copying the content I am not copying the you know

the whole folder because there there is a git in it already there and it is copying the files so that is creating a

problem for all our audience so this is the last time sorry guys

no no that that's totally fine so it is always a good learning when something goes wrong yeah

see for the first time then you are going to do it it is going to show you that we have initialized ticket repository okay so now it's working fine

and let me do git add hit add to all add all the content and

then say git commit adding the web web app

demo files okay see it has created the commit

and now you are just gonna specify the location so I am specifying git remote add origin that this is the place where

I just want you to push all the things wherever I use the word origin it will automatically see this URL okay I hope

this makes sense and now finally I am doing uh git push minus U origin Main

the mean is the branch okay no problem let's do it for master brands

yeah it works fine main branch is actually protected by default in GitHub it is for you know the final works so we

are just pushing it on onto the master branch and it shows that we have uh without any issue we have posted now

let's go to our GitHub and see this is the repository which we have created and it has automatically created a master

plan where all our things are came up you know all our web page files and all

the assets and download Skins are present now let's jump over to our Amazon web

services which we are going to use as a cloud cloud provider for hosting our you know AWS ec2 instance

so this is the you know URL let me tell you AWS dot amazon.in then you can just go

and create your account if you have not created it really now it will ask you for your credit card you can just use

any credit card you are having like Mastercard or VISA something don't worry it is not gonna charge you very much

it's just for sake of your verification so you can just go and and Amazon also

provides some free credits for the new keys like it is free for one year and it provides almost all the services

like you can go and check all the services you are so name the service which you want and each and everything

is provided on AWS whether it be storage compliance satellite robotics Media

Services containers compute each and everything and in compute the very famous is easy elastic Cloud computers

yeah

you know official documentations you'll see that there are many many zones which they are having out of those zones I

have selected the Asia Pacific and in Asia Pacific I want Mumbai as my reason because I am hosting my website in

Mumbai so it will be easily accessible to the audience which is you know present nearby to Mumbai I can host it

in other words problem which many can get the data has to travel along

with Cloud Computing Services that provides us with low latency Solutions

makes sense makes sense yeah okay so now let's go to the instances don't be afraid of these terminologies

instances in a very simple manner so that it's just a you know a computer you you can think of

so now it will ask you that what is the OS images what you want now what is OS

image I hope you all know it very well for any computer to launch we need an operating system which can act as a you

know mediator between the user and the hardware so we have n number of you know operating systems which we uh with us

supported on AWS whether it be Debian based Windows Ubuntu even Mac OS is Now

supported and this is Amazon Linux which is the official Linux made by Amazon so for this let's use red ad because it's

still even you know Rel is really nice and clean operating system to work and

start when you are starting with the Linux so let's go for it and what is this let's check out this as well so

these are different different things where we can go like this is the Enterprise Linux which we are using we can go with the SQL Server Edition as

well as per the demand but right now this is eligible for free tire as well so let's go with this one

always go with the free tire ones because we are just doing a demo and even when you're practicing things so

you don't have to pay uh for these instances or computes yeah exactly that

that's the thing and now come let's come to the instance type now if I click on this instance type you can see that

right now we are using T2 micro that signifies that the computer which you will be getting it is gonna have only

one code CPU and one one gigs of memory but to show you the power of cloud

computing let me scroll down a bit you can use as much as 128 cores of CPU and

256 GB of memory this is not the storage memory this is the RAM memory guys you

can see as per the demand you can scale it up to the next level right it is almost always up to the super computing

power which you can use so let's not get fascinated really quick let's use the small one only

now one more important aspect of cloud computing is this key pair

like uh you are not using your computer and then server computer laptop so when

server is your startup you you know you must have set some password for it right so this is similar so Amazon what Amazon

is doing it says okay you want to login into the system okay no worries I will allow you to login but uh let's do one

thing that password is not really secure nowadays it can be hacked or you know it can be easily kissed by someone so to

give you the security like for any technology to be adopted by the world it must be highly secured so to provide the

security what Amazon says is that I will not allow you to login with the password or something instead you just take a key

pair what is key pair let's give this key pair a name let's say demo

what will it do that you download a key pair for this and this download is only and only going to be with you I am

giving this file or you know a certificate this is the kind of certificate keep your certificate where

it is with where it has the key which is encrypted in RSA don't worry if you can't understand just understand it

simple words it is the kind of password which is protected in the format of key pair the key pair is the key by which

you can enter into the door or else you won't be allowed to enter into the server

purpose you will have to create this keeper if you have some previous already downloaded you can use it for your

reference no problem but let's create a new one let's say demo and website

okay and these are something but dot payment dot PPK for you know SSH login you can

use either 40 as a software or you can use open SSL so putty by default supports dot PPK format and you know

open SSH supports pem format you can go with the either of the ones whichever you are comfortable I am just going with

DOT pem because I'm gonna use the Linux ship so let's click on uh key pair and

as soon as I click it is it has been downloaded on my system like you can see this has been downloaded on my system as

a demo website this is a certificate that yes I am the genuine person who is trying to access my system no one else

is done now let's and always yeah and always preserve your key pair

because you know it it is the way of logging into your ec2 instance and you

know you can also use one key pair for your multiple ec2 instances you don't have to create a key pair for individual

ec2 instances like uh Warren just showed us that uh he created a key pair he stored it in his laptop or you can also

store it in some secure places and what you can do after that is next time when you are creating an ec2 instance you can

just reuse that key pair right exactly when you will be launching your next ec2 instance it has it will show

you the option that these are the keypads which you have already created you can use either of them if you are having it right now

now let's come to the networking setting these are some of the you know really very important and crucial setting for

any of the tabs so what is this network so let's first go with this VPC so VPC

stands for virtual private Cloud right now everyone if I ask you that you come

and use my application but I tell you that there is a threat of your privacy or your data being so will you use an

application the obvious answer is no whether it stays where the people will say no I'm not gonna use whether you

have Facebook or Google I want my data to be highly secured and protected so similarly uh you know organizations that

each and every one wants that their data is secure they are not able to see the resources where they are left so Amazon

provides your data is completely secure and in the networks you can create your virtual private Network only you are

allowed to enter into this network no one else only you and the ones you are allowed you are giving the access can

enter into this network other than that no one else can enter into this network

okay if you people are aware that the networking you know basic terminologies you know that there is a subject so you

can choose the subnet if uh if you have the requirement for the basic demo and for keeping it a bit simple for our no

voice Learners I am leaving it uh by default which is available and now please keep this Auto assigned

public IP as enable option because you know if you disable this option your server is gonna be launched but it is

not going to have a public IP which uh if you if it will not have its public IP

you will not be able to the public will not be able to accept it accesses yeah so it is really important to have this

public IP option as enabled uh you know there are many of the times when we don't want our public IPS to be enabled

let me give you a very you know example for this suppose I am there is an organization and in an organizations

there are thousands of servers running here so I have one server where my database is running and in the database

all the credentials let's say all the salary details and all those things of my Androids are being stored now I don't

want that anyone from outside of internet has an access to their database that database must not be allowed

access to any anyone so I can disable this it will not have its IP now one

question might arise that but if you will disable this public IP I want people to you know use it I won't be

able to log in it I won't be able to access the data how am I going to do it so for that our answer is going to be

pen server we launcher instance or something it has two IPS one is public ID which is visible to the public and

one is private IP so then we'll disable the public IP it will have its private IP which will help you to login or to

access the resources which are there in that ec2 instances I hope it makes much to you yeah so now

let us come to this Fireball yeah before before that just one second uh I see

that many people uh uh our asking questions uh about what is the difference between VPC and VPN so I just

wanted to uh tell them there like you know because we were touching that concept like uh VPC and VPN are two

different things one is VPC is basically to create your virtual private cloud like you know everything that you are

going to create are being secure right so let's say that you are creating an

ec2 instance so what you are doing is you are trying to keep your easy to instance secure whereas VPN is something

that will allow you to transfer your data through a secure Tunnel right so

that is VPN so there are two different concepts don't get confused between them yeah go ahead

exactly uh thank you sir for such an amazing explanation to this point okay so now let's come to the Fireball

Fireball if you people are aware of networking you must know that firewall has a its own importance in the world of

networking and this internet and if you are not don't worry we'll just cover the basic so you are comfortable in extra

firewall you can consider Fireball as you know as the security guard of your of your let's say Bungalow so what will

happen that as soon as some requests come or any person comes that fireball is gonna check are you authorized to

enter Then server you will come it will go inside and check that this person is standing outside should I allow the

access to the Bungalow or something if he is the authorized person he will allow you to access or else you won't be

allowed the access similar work use the firewall in the terms of computing and all those things

again you can go with the existing security group or you can create your new security group right now we are

creating a new security group and it's by default name is launch wizard 7 which is given by AWS itself now what is this

SSH I will have to allow SSH traffic from any instance let's any instance or

I can justify that you only SSH should be allowed from my IP now this IP is the

IP of my local system which I am using right now so what is this SSH full form

is secured shell now SSH is really required when you are trying to login into the remote servers or remote

computers you don't have this the computer which will be launched after this initialization you don't have to

access physical access to it how will you access this you will access it only and only through some different computer

which you are having right now with you and you will have you will do a secure login from your PC to that PC to connect

and give commands and run some few commands on it so now you are saying that allow the SSH traffic you are

telling the firewall or the security guard like if any SSH requests come please do let him enter don't reject him

and you have an option that from which IEP do you want the SSH you can select anywhere for your demo or you can select

my IP if you want your SSH to be very very secure like only through this Local

Host which I am using right now I will be able to access it or else I won't be able to let's make it anywhere as of now

as soon as you make it anywhere but AWS but you know uh the important sorry again but uh Varun has covered a very

important concept there uh if you have noticed that uh if you select my IP

right uh allow SSS traffic only from my IP then even assume that there is a case

where your private key is compromised okay so for some reason you have compromise your private key that means

that your private key has been shared with the external world or some hacker was able to access your private key now

even in such cases AWS will block the SSH connection for the hacker because

he didn't he did not have access to the varun's IP so SSH is only allowed through varun's IP even if you have the

access to the private key right so that that's how you can restrict or that's how you can make your connection more

secure yeah yeah exactly now you can check your public IP that this is my IP only to

show you the group yeah what you can do is you can just go to the Google and you can just type what is my IP

just go and type and hit enter and as soon as soon as you'll type you will see that this is your public IP address now

note that this is one zero three one five six and let's go to the uh AWS console and now see it's exactly 103 156

this is my IP which is visible to world and AWS is automatically detecting

let's move to another very important aspect of traffic which traffic do we

want to allow like we have our website so uh you all have visited a website

today or you know when server you have started with your computers so there you

as soon as I click on it I can just see that there it is showing that this is the https request now this https is a

protocol by which we are sending the data so we are telling our security guard or our Fireball that uh listen if

there is any request which is coming for the HTTP traffic if the traffic coming is for HTTP don't deny it give it the

access because it will not check this one it if any request is coming to access it will be in form of HTTP

protocol and we have not told that security person that if there is a person who is coming with the HTTP

protocol do do let him enter so your website won't be available to the uh public so please don't forget to check

mark on this HTTP traffic because it is really important for anyone coming from public uh within the HTTP protocol to

access your website and the very interesting feature of AWS is that as soon as you have mentioned

that you want SSH from anywhere it will show you the tools with Source this allows IP address to access uh all IP

address to access your instance it is giving you the bonding here itself that you have allowed the you know SSH from

anywhere and it can be a major threat for your for your instance you yeah AWS

is recommending please change it to some loan IP but let's ignore it for the sake

of this demo just one thing uh before we go to the next one Varun there yeah so

uh people who are watching this uh some people might uh think that okay you're allowing HTTP traffic from the internet

so HTTP by default means that it's an insecure traffic right so how will you control this someone might uh actually

question this one so today we are just doing a demo but in a real world scenario what usually happens is nobody

allows a HTTP traffic let's say that you are talking to Amazon okay always you

must see that like you know or whenever you are talking to a third party application in general it comes with

https so what you can also do is that it your load balancer level you can say

that okay when you receive HTTP traffic from someone okay redirect it to https

right so you can make those uh changes into your load balancer so that you can

always keep your connection secure even though somebody is coming to you with HTTP traffic you can redirect them to the https yeah absolutely amazing

amazing point which you have covered sir this was you know really insightful to know about how we can have HTTP request

even with the HTTP without spending many of the you know bugs to buy the post

name and all those things for the HTTP request so now let's go to our next thing for any of our device or any of

the computer to launch it is really very important to have a storage as well because this is the place where you are

gonna store your boot and all those files and uh the things so you can check for the free tire eligible you can have

30 gigs of EBS EBS is the storage which you are using and you can use as per

your requirements so let it be 10 GBS right now and this is the 10 GBS which we are gonna gonna have and this is the

SSD which is by default it is providing and you can go on to the advanced tab if you want to do or check out some more

features of this storage this is not the let's go to the next part because it's

gonna take time if you go deep dive into this we'll do this some other day and servers are allows

so now let's go to the advanced detail and why I am going to the advanced detail is just because of this option to

make you aware of this IAM what is this IAM now IM is also a very interesting

feature which has been provided by Cloud providers now first of all the full form of Ian is

identity and access management what is it let me explain it to you in very simple terms suppose sir is having a

large organization you know many many teams like my database team my sales team my marketing team my tech team are

working they are having different different things and there are hundreds of server launched there now I joined

the company and now I sir wants to give me the access to you know the tech department okay you just go and handle

my website so for that sake he won't allow uh he don't want that uh he is

giving me the complete access of his AWS the complete access of the AWS account of the whole organization

because intentionally or unintentionally or by mistake I can damage any of the resources this will lead to heavy losses

of you know any of the services or any of the things so for that purpose what

we can do is we can here sir is gonna go and create an identity and access management uh for me they are gonna give

me the access of only and only tech tech department or only of the one server which is being running and amazing I am

entitled to do the work and in that as well you can specify that I have the read-only permissions or write only or

execute only whatsoever the permissions I have

thank you yeah so that's the thing which I uh wanted to demonstrate in this demo as

well so let it be for this this time I am to keep the thing simple and now

let's finally click on launch instance so as soon as you'll click on the launch instance now you just count the number

of seconds it took and it has successfully launched a virtual server

on you know some database which which is seeing in Mumbai and you have been allotted with the private IPC as I have

already told and it is you know initializing quoting all the things and you will get your public IP address very

soon okay so till the time this is being booted up uh let's wait it will take very few like

this is your elastic IP address I have not given it great yeah somebody was asking me the other day uh like you know

uh when we do uh the same thing with gcp and when we do the same thing with ec2 uh that's on the AWS why does uh you

know the instance get quickly installed on the gcp like you know installation is fine but uh to come to the running State

uh apparently uh gcp takes less time like you know even here it just took 10 seconds I guess uh so I was reading and

trying to understand what was happening uh behind and then I understood that uh gcp keeps a pool of instances that are

already up and when you make a request what happens is it will just give you access to the existing instance so

that's why uh when you do the same thing on gcp it just comes like in a fraction of seconds yeah just an interesting

topic this is also an interesting topic for you know the organization which cannot afford a single millisecond of

delay or latency yeah so that's amazing point now just see within we are watching it it has been up

our instances running and as we have already assigned it that uh my IP address should be Auto assigned so this

is a public IP which AWS from their pool of IP addresses have assigned to us so

now uh let's move to the connection part how do we connect to it so let's click on this connect and as soon as you come

there are some few of the things by uh which you can connect this is the public IP once again it is showing to you

for the demo I am just going to use the SSX line in SSH client I am going to

have a shell where uh I will just give the command and it will just you know it

will just throw a SSH request to our web server and then we can go ahead so here

is a complete instruction guide which has been given from Amazon sites like what can you do what other things do you

need to do so let's understand them once one by one let me open the terminal once

okay so let me clear this for you I hope my terminal is visible to all yeah yeah can you just increase the font size a

bit yeah let me tell if it works fine perfect perfect yeah okay so now the

first requirement what it is saying is that open the SSH clients so this is my SSH like for the server my local system

is going to act as a client it is the server and my local system is going to act as a client and this client is going

to send a SSH request to our website okay now it says locate your private key

file the key used to launch the aw instance is demo website

okay now what is what it is saying is that to access you will have to provide

it with the password or the key pair in this case which we have created so in your local system or the system you are

trying to access first of all go to the place where you have your you know that file so I have that file in my

downloads folder so let's go into the downloads folder now I will show you that in my downloads folder I have this

demo.pam this is the key value which I have downloaded sorry key pair which I have downloaded from their side this is

really essential to login into this that instance now let's go to the next Point what it says

now it says that run this command if necessary to ensure your key is not publicly viewable so this is the point

it is trying to emphasize that right now that this file which is in your local

system might be available and visible to everyone to restrict it just copy this command and put this now what this

command is this CH mode command is used in Linux to provide this some kind of permissions and permissions are given by

the numbers like this com this could be used by public by owner or by group of

people so you can refer to the Linux basics for the sake right now we are just going for our private and as soon

as I click enter so it is showing that this demo is now not publicly accessible it is only private to us only I can

access it now to connect to my instance what I will have to do is I will copy this

command now let's paste this command in and understand what this command is showing telling us to do it is saying

that give a SSH request sending SSH request and this minus I specifies with

an identity file what is the identity file which we are sending the SSH it shows that this is my identity file demo

website which I downloaded from AWS and to which server do you want to send this

request it is the ec2 user by default the user name is ec2 user you can check

out on this part then by default the username is easy to user you can change it as per your requirement

send my request to the ec2 user and the IP address is this one three two three

three and it might not be visible very clearly to this you can come here and check this is the IP address where I

want you to send and it is it is located in the South one AP South one is the reason of Amazon web services AP South

one is the Mumbai region which we are utilizing you can see it over here so as soon as I'll send enter it is saying

that do you want to enter into this I will type yes and not just see earlier my shell was

showing that Varun bansal is accessing the uh you are inside the Warren bunselves computer this is Baron

bunsen's computer and right now if you see it let me clear the screen for your better understanding now if you see you

are inside the ec2 user which has the IP address shown over it tada within a few

clicks you are in a server which is which is being hosted at a place where you don't

know which is highly secure and you are able to access it now let's see this is the by default directory which

you are using it so you wanted to add something

so you want to add oh sorry no no no yeah you will bang on no it is yeah so

as you have seen this is no magic but uh but this is not less than magic also

that you have launched a server with few clicks and you have uh you have login from your device to that okay so now you

have some things you are using the you know Red Hat Linux so first of all let's

update our directory so I will run the command as yam update minus y it will

update all the things okay now this is also one great thing which which we should cover as

soon as I try to update the operating system files it gave me the uh you know error that not root

as a ec2 user you are the normal user right now you are not allowed to do anything root is a super user which is

having some special privileges in in Linux Linux operating system or the Linux kernel I must say so for that to

get the special privileges to do any kind of action you will first of all have to run this command sudo Su and

hyphen as soon as you'll click here now just see earlier Uber logged in as ec2 user now you are logged in as the root

user root user is the one who is having the special privileges and it can install update and do various various

things okay I hope that makes sense now let's try to

update update the things M update minus y

this minus y is just for the sake that whenever it asks you for yes and no you are giving your permission that yes just

do all the things whatsoever is required I have given you the permission so it is updating all the directories required and it shows that I

have completed the updation now you can go ahead okay so uh now what we are gonna do is

let's first of all install it by default it will say Git it is not found in our

by default system so first of all let's install the get in it uh get installed sorry uninstall git

so it has uh down it has checked all the files which are required it will soon it's a 47 MB do you want to install it

I'll say yes now it is installed to get in it and it will just give me the confirmation once all the things have

been installed okay so it says complete now I can use all that in C now it is

not giving me the error now it can it is showing me that yes it is installed you can do whatever you want to do

perfect okay so now let's cover one more point

that you were having the website which you developed in your local system now you want that all your files are being

placed into this root system you are unable to do it what is the way why did I choose the kit

because once I have uploaded my files onto the GitHub now I can easily clone

this files or I can easily you know make a copy in this system you you just

cannot go to the finder and just pick one file or you can just drag and drop no it is not allowed in cloud and you

are also not having the physical access of your server so you are attaching a pen drive and transferring the file so

get us you know fun a great way to get your files from this

branch and like you can go ahead so let me once again copy that this is

the repository from where I want to get all my things I will say get clone and

then I'll attach this URL and the things are on my master graphs so as soon as I'll click uh Master here it is saying

okay cloning into Master now let's check what is the difference now it has created a folder with Master let's go

inside and what's there in master right now it has only readme.md5 first

of all what we'll have to do is we will have to switch our Branch right now let's check what brands are Beyond okay

so by default we are on Main Branch so to get the contents of Master Branch first of all we will have to switch to

the uh Master Branch so let's go to git checkout and master brands

I am skipping this portion because I hope that sir has explained all these things in detail and you know it so bit

checkout is for going to the master branch and if it does not exist it will create a new one for you now it says it

is on git Master Branch now you can once again run the command get Branch to check which branch you are like this

branch is being highlighted you are on this map so now once again let's clone the things

see now it is saying cloning now let's check what is the difference see in this master Branch you uh now you are having

entire content of your master plan you are having your index.html your assets your errors images etc etc whatsoever

you want perfect so I hope till now we have done great things like we have copied all our

content into the things now let's do one thing now what we are

gonna do is to make our files you know accessible to public we will have to run

a application in our web server which is Gonna Keep Us keep our website live as

soon as a request comes with the HTTP traffic we require a application which is listening to the things like if

someone uh someone is visiting your Bungalow there must be someone to receive them right so yeah that duty is

being done by web server so right now which web server we are gonna use for this demo we are going to use the Apache

web server and to install the Apache web server what we are gonna do is we're gonna type the command yum install httpd

httpd specifies the Apache web server let me give this for the faster and as

soon as you will enter it is installing the Apache web server so now Apache web server has been installed

let me tell you one thing two you know uh for hosting your website

Apache web server has been installed but with Apache web server what it shows what it says that I will keep only and

only those websites up which are located in slash where slash www HTML

this is the place this is the place if the files are present on this folder on

this destination on this directory I will post them otherwise I won't host them

just keep in mind just represent this directory name is really very important to host your website this is the place

that you will have to place your files now let's do one thing let's go to our home if I'll type CD I will be on my

home directory where I started this okay so let's go to my master

and these are the things so what I'm gonna do is I'm just gonna copy my index.html file and CP is the command

this is the very basic command CP specifies for copy but we are telling that CP copy index.html and to which

destination do you want to copy my destination is slash slash slash www.html then hit enter now it has

copied the branch you can just go and check it uh I will show it to you this

as well let me first of all copy these folders as well so now if I try to copy

assets folder and what is the location I want that it is being copied at this

location just see it is going to give an error it is saying that you have not specified

minus r and you are omitting directory assets now let me tell you that the CP command

Works only and only for files you can copy only and only files using this uh this CP command but right now what you

are trying to do is assets is a folder or directory in the terms of Linux you are trying to copy it it is not doing it

directly for that what you'll have to do before this folder name just attach minus app just minus r specifies that

you want recursively copy each and every file to that place now it will work fine

what it is doing it is just copying each and everything until all the things have been done like recursion if you have

studied in basic program if I hit enter now there is no error you have easily and successfully copied this folder or

file I must say to the desired destination now let's do it quickly for our errors as well okay

errors and my destination is slash web slash www.html

this is done for this one and let me do it finally for my images

perfect so now let's go to the place and check whether all our things have been

at reached at the right destination let's go there okay so the I'm just going to this

destination there are Apache web server needs all the files okay so right now I am at that place and let me just do with

the ls command LS shows the list what all are the things which are present in my directory now see great

let me run one more command PWD PWD stands for present working destination or directory you can say it will tell

you that right now you are in your this this directory you are in slash www and

slash HTML and the content which you are having right now is this so successfully you have copied all your

content you have successfully copied all your content right from your local system to GitHub server and then from

that GitHub server to your AWS local server now are almost all the work has been done

now let's do one thing let's try is our website available so for that purpose what I'll do I'll just go and copy my

public IP address of this I'm just doing it from GUI just to give you the things you can use your terminal

as well to if configure an IP config together now if I'm trying to say it is

showing me the error that Safari cannot open the page now you must be thinking now what is the error I am getting why am I unable to

access the things let's try it on Google Chrome as well if you are having to think that Safari is a bad browser okay

no Google Chrome is also not allowing you to go to the this website now what

is the reason let's check what is the reason the thing is you have installed the things you

have uh you you have copied all the files and things but what you have forgot is till now you have not started

the HTTP web server the final step which remains is you will have to give the command system CTL

start httpd you will have to activate this web server right you have installed it if

the file is just kept in your system it is not gonna do anything you have installed let's say an application

Subway supports in a mobile phone and if you are not tapping it to start the application it is of no use it is not

running in running and it will not perform any of the actions right so this

command system CTL it is saying that system just start the service named as httpd

okay so as soon as I'll click enter now it says that okay I have started with the service you can just check there is

a command chk I think chk config http

okay see what it is showing it is showing that forwarding request to system CTL is

enabled if there is any service if there is any request which has been coming with the HTTP request it has been

forwarded now let's go and check if it's our website is available yeah as soon as

you'll refresh your page your website is available to each and every one and this is a local website not only I I

am able to access it if service server copy this IP address and if he will open

his browser and try to enter this he'll be able to see it now you people might face one issue for that uh let me copy

this I am copying this not to some different position let's say this side

and let me paste it what I wanted to do with this is I just wanted to show you that by default it is being not shown in

the browser but this is sending a HTTP request if uh if you're you are unable to access it just check that by default

your browser is not sending the HTTP https request many a times what happens

the browsers by default send the request by https so that might be a reason if you are facing the issue just copy the

URL from your browser put it somewhere else and remove this s this we are

having no application which is listening to the https request we have the servers which is listening only and only for the

HTTP HTTP request okay I hope that makes sense so now if I try to check it on

Safari as well as soon as I'll reload my page it is not you know it's yeah this

is a www extension yeah now let's try it and see you are

able to access a website here here as well your responsive website is

great yeah I would I would actually call this as uh

absolute beginner's guide because you know uh the way Varun explained is like

even somebody who does not have knowledge of Linux does not have knowledge of gate

don't even know what AWS is I think just following this video they can exactly do

the same thing like they can install the HTTP server they can start their application on it and you know that's

amazing so that's why I can call it as absolute beginner's guide thank you so much Varun Pleasures all

mine sir and for those who are you know finding it really very uh simple or something what you can do is

you can just run one more command uh yum install node.js let's do it once and as soon as you'll

install it now you are ready to host now this was a static website which I chose for this demo purpose now you have

installed your node.js now you can copy all your Dynamic website content just start with the node.js files or your

Express express.js and you can just create your own web server and the applications if you want it is very

simple now you can get all the traffic all the things which you are experiencing on your local system you can access it on the AWS Cloud as well

the thing is that in your local system only you are able to access it on this Cloud you can make this thing access to

your friends and other people as well and of course for the ones who are uh

you know intermediate or are expert in the cloud services you can of course use the containers or you can just talkerize

these things and play around there the this is the you know Sky you can do as many things as you can

yeah yeah try python applications try node.js applications whatever you would like to but this is a starting point

that you should always know like you know if you can host a static website then you can move to hosting a dynamic

website so definitely start with this one get yourself acquainted to this understand each and every parameter that

is involved I am pretty sure Varun has made things clear for you but still uh

like you know you can go through uh the AWS console and understand step by step and then finally once you reach here

then you can move to the next steps

Services as soon as you just get to know you want to dive the this is the ocean

you can dive as deep as you want as there will be a lot of depth to life

amazing yeah great one uh uh thanks for your time today and uh you know thanks

for explaining us all of the things in a very simplified and easy way

uh thank you very much for inviting me and for the uh like one more thing for the beginners you just don't need to be

an expert in your web development like you you will think that okay first of all I will have to learn web development

or something just don't do it this is a fancy website just for the demo see like it looks good for you people if you are

learning just go and create a simple web page uh hello this is my website or my name is this and try to host it our

basic motto is To Learn cloud and all those servers and all those things not web development yeah exactly look you can also take a

sample HTML page from w3schools not at all exactly uh and if you want if you are

having any other doubts or something you can you know of course connect with me on LinkedIn sir will put my LinkedIn or

other handles this is my LinkedIn okay you can surely connect and ask me for any of the queries and I'll be more than

happy to help you with the same sure yeah thank you so much and uh will

definitely bother you again in the future and ask you to explain us some

more interesting topics sure uh see you for now and uh thanks

everyone if you have any questions do Post in the comment section and Varun and I will be more than happy to reply

to each and every comment and if you have any feedback for us also post that in the comment section and don't forget to share this video with your friends

thank you thank you foreign

English (auto-generated)

###

43
### Transcript

hello everyone my name is Abhishek and welcome back to my channel so today we

have Varun with us so if you remember Varun we had a interaction with Varun last time where you know we talked about

a lot of things uh how to get into an internship from your college and a lot of good things that Varun shared with us

so today Varun here Varun is here with us and he has something very interesting

to share with us so I'll give it over to Warren to uh explain about what he's going to demonstrate today

hey everyone I hope you all are doing good and I'm also doing fine thank you very much appreciate it sir for once

again giving me the opportunity to contribute to your Noble initiative that you are running and today on service

demand we are going to you know uh going to do a live demo or you can say a Hands-On project on this stream where

you go where you are going to you know sum up all the knowledge you have acquired till now whether it be of

GitHub whether it be of cloud computing virtual servers or a website something like that so what we are going to do is

we are just going to deploy our own website within few clicks and tell you that how easy is it is to deploy the

website using the Cloud Computing Services and how scalable and reliable it is so I think you all are going to

enjoy this session and let's start awesome yeah so I always love these

keywords when somebody says scalability and installing a few clicks so yeah I'm

very excited yeah please go ahead okay so let me share my screen

so I hope my screen is visible to one and all

yes yeah perfect okay so what we are going to do is let me show it to you

once like this is the represent this is the folder which I am having right now and there's the index.html so this is

the website which I have created for the demonstration today like there is a static website as of now simple website

to look but a beautiful one like if you click on the intro the intro page will open you can cancel it and similarly the

different different pages are going to open right now all the files and all the things are you know stored in my

local system now what we are going to do is we are just going to push all the things on our GitHub and then we are

going to you know launch our server on AWS and then we are going to start with the things so let's

start without any delay so let me once again go back to my you know finder where all my things are present so let's

say I am on this side so uh first of all I would like to create a empty GitHub repository and like to host all the

things

font size so everyone is able to see it let's go to our GitHub and create a new

repository for the sake of our project so I'm on my GitHub and let's say I

click on new and let me give it a name let's say AWS demo

I hope it works fine and let me add a review dot readme file

let's create a repository okay so our repositories created I hope

you all are very familiar with the search teaching and I will go to my hyper terminal

uh right now I think I'm on my route directory so I will just switch to the place where I have you know my

static content so documents is the place where I am doing it and CD is a very basic Linux command I hope you all are

very familiar with it do just go to the documents folder and as soon as I click enter I mean inside my documents folder

see now again I just want to go to you know AWS folder which I have created so

as soon as I do it I am here and let's once again for the last time just go into this folder and now I am going to

initialize a basic repository so first of all let me clear all the things now

we are in our folder where all our content is stored and this is the content which we want to upload it to

our GitHub now you all are familiar for hosting anything the first and the

foremost requirement is to initialize a git repository get empty repository which is going to you know track all the

changes and all the things which you are just gonna do with your file system so for that I'll use git init

IAL okay see it shows that it has reinitialized the existing git repository I have already

initialized the git repository that is the reason it is showing reunitely and if you are doing it for the first time

it is going to show you initialize the git Repository okay and then I'll just add all the

content which I which is being shown here like this is all the content which I am having right now so let's add all

this content git add and this dos simplifies that all the content of this

folder should be added okay and let me do git commit now right

now commit says that yes I am ready from my site now I want to commit and save these changes and now I'm ready to push

it on the GitHub so let's give a valid message name so afterwards it's not a

problem let's say added all the files I hope that this makes sense and yeah

enter okay now what should we do we should go to

our GitHub and alert that this is the repository where we want to push all our codes the GitHub is humongous where do

you want to push and ship all the things which you have created so for that purpose we will go and write git remote

okay this is my remote place and add that URL

origin is just a short name of our URL so each and every time you don't have to remember or copy this URL now you can

use origin and git will automatically understand this origin word as the URL

you are putting on protein so this is the URL which I copied and I'm pasting it down here let

me click enter okay so it is giving some kind of error it might be because I have already

okay yeah it has I have already pushed the things this is the reason so as soon as you'll

add this URL it will work really fine for you guys because I have already

initialized and after you are adding the remote

adding the you know remote you just need to do one thing that is get pushed

pushed minus U and origin origin Main

now what is this minus U signifies if I said this is for uploading region what

should I whatsoever here till now just upload to the GitHub where do you want

to upload it on the origin on the URL which I have already told you and Main here signifies the

branches for different different features development and all those things so this is the main branch for

the demo state so let's do it let's do it oh I don't know what's the problem

let's do one thing let's create another folder here

let's say let's say can you do can you do Force push uh just try to do uh get

just add minus F at the end and see what happens yeah let's try this as well

still it is giving some kind of error so I think we must initialize it yeah

yeah I'm sorry for that

no there is no worries demos are meant to fail don't do anything yeah exactly so don't get upset really if you are

unable to do it it happens all the time so let's go to the place where my files are located and here I'll just go into

the folder

gets to check what's the name AWS demo okay so I just want to go into the AWS demo

and here I am and once again I'll go to this part okay

so till now I am just on my folder where all my files are located and now with

the gate init command I am just you know initializing the data okay

uh let me just check if there is already a gift that is actually attached

okay I got it I got it what's the problem I am directly copying so it is uh you

know copying the files let me do it

okay no problem let's do one thing we'll name it something different for the origin and I'll come at all the files

first of all I am adding them to the station area then hit commit

edit website files

guys just give me a second

okay so you're copying the content to this one yeah I'm just copying the content I am not copying the you know

the whole folder because there there is a git in it already there and it is copying the files so that is creating a

problem for all our audience so this is the last time sorry guys

no no that that's totally fine so it is always a good learning when something goes wrong yeah

see for the first time then you are going to do it it is going to show you that we have initialized ticket repository okay so now it's working fine

and let me do git add hit add to all add all the content and

then say git commit adding the web web app

demo files okay see it has created the commit

and now you are just gonna specify the location so I am specifying git remote add origin that this is the place where

I just want you to push all the things wherever I use the word origin it will automatically see this URL okay I hope

this makes sense and now finally I am doing uh git push minus U origin Main

the mean is the branch okay no problem let's do it for master brands

yeah it works fine main branch is actually protected by default in GitHub it is for you know the final works so we

are just pushing it on onto the master branch and it shows that we have uh without any issue we have posted now

let's go to our GitHub and see this is the repository which we have created and it has automatically created a master

plan where all our things are came up you know all our web page files and all

the assets and download Skins are present now let's jump over to our Amazon web

services which we are going to use as a cloud cloud provider for hosting our you know AWS ec2 instance

so this is the you know URL let me tell you AWS dot amazon.in then you can just go

and create your account if you have not created it really now it will ask you for your credit card you can just use

any credit card you are having like Mastercard or VISA something don't worry it is not gonna charge you very much

it's just for sake of your verification so you can just go and and Amazon also

provides some free credits for the new keys like it is free for one year and it provides almost all the services

like you can go and check all the services you are so name the service which you want and each and everything

is provided on AWS whether it be storage compliance satellite robotics Media

Services containers compute each and everything and in compute the very famous is easy elastic Cloud computers

yeah

you know official documentations you'll see that there are many many zones which they are having out of those zones I

have selected the Asia Pacific and in Asia Pacific I want Mumbai as my reason because I am hosting my website in

Mumbai so it will be easily accessible to the audience which is you know present nearby to Mumbai I can host it

in other words problem which many can get the data has to travel along

with Cloud Computing Services that provides us with low latency Solutions

makes sense makes sense yeah okay so now let's go to the instances don't be afraid of these terminologies

instances in a very simple manner so that it's just a you know a computer you you can think of

so now it will ask you that what is the OS images what you want now what is OS

image I hope you all know it very well for any computer to launch we need an operating system which can act as a you

know mediator between the user and the hardware so we have n number of you know operating systems which we uh with us

supported on AWS whether it be Debian based Windows Ubuntu even Mac OS is Now

supported and this is Amazon Linux which is the official Linux made by Amazon so for this let's use red ad because it's

still even you know Rel is really nice and clean operating system to work and

start when you are starting with the Linux so let's go for it and what is this let's check out this as well so

these are different different things where we can go like this is the Enterprise Linux which we are using we can go with the SQL Server Edition as

well as per the demand but right now this is eligible for free tire as well so let's go with this one

always go with the free tire ones because we are just doing a demo and even when you're practicing things so

you don't have to pay uh for these instances or computes yeah exactly that

that's the thing and now come let's come to the instance type now if I click on this instance type you can see that

right now we are using T2 micro that signifies that the computer which you will be getting it is gonna have only

one code CPU and one one gigs of memory but to show you the power of cloud

computing let me scroll down a bit you can use as much as 128 cores of CPU and

256 GB of memory this is not the storage memory this is the RAM memory guys you

can see as per the demand you can scale it up to the next level right it is almost always up to the super computing

power which you can use so let's not get fascinated really quick let's use the small one only

now one more important aspect of cloud computing is this key pair

like uh you are not using your computer and then server computer laptop so when

server is your startup you you know you must have set some password for it right so this is similar so Amazon what Amazon

is doing it says okay you want to login into the system okay no worries I will allow you to login but uh let's do one

thing that password is not really secure nowadays it can be hacked or you know it can be easily kissed by someone so to

give you the security like for any technology to be adopted by the world it must be highly secured so to provide the

security what Amazon says is that I will not allow you to login with the password or something instead you just take a key

pair what is key pair let's give this key pair a name let's say demo

what will it do that you download a key pair for this and this download is only and only going to be with you I am

giving this file or you know a certificate this is the kind of certificate keep your certificate where

it is with where it has the key which is encrypted in RSA don't worry if you can't understand just understand it

simple words it is the kind of password which is protected in the format of key pair the key pair is the key by which

you can enter into the door or else you won't be allowed to enter into the server

purpose you will have to create this keeper if you have some previous already downloaded you can use it for your

reference no problem but let's create a new one let's say demo and website

okay and these are something but dot payment dot PPK for you know SSH login you can

use either 40 as a software or you can use open SSL so putty by default supports dot PPK format and you know

open SSH supports pem format you can go with the either of the ones whichever you are comfortable I am just going with

DOT pem because I'm gonna use the Linux ship so let's click on uh key pair and

as soon as I click it is it has been downloaded on my system like you can see this has been downloaded on my system as

a demo website this is a certificate that yes I am the genuine person who is trying to access my system no one else

is done now let's and always yeah and always preserve your key pair

because you know it it is the way of logging into your ec2 instance and you

know you can also use one key pair for your multiple ec2 instances you don't have to create a key pair for individual

ec2 instances like uh Warren just showed us that uh he created a key pair he stored it in his laptop or you can also

store it in some secure places and what you can do after that is next time when you are creating an ec2 instance you can

just reuse that key pair right exactly when you will be launching your next ec2 instance it has it will show

you the option that these are the keypads which you have already created you can use either of them if you are having it right now

now let's come to the networking setting these are some of the you know really very important and crucial setting for

any of the tabs so what is this network so let's first go with this VPC so VPC

stands for virtual private Cloud right now everyone if I ask you that you come

and use my application but I tell you that there is a threat of your privacy or your data being so will you use an

application the obvious answer is no whether it stays where the people will say no I'm not gonna use whether you

have Facebook or Google I want my data to be highly secured and protected so similarly uh you know organizations that

each and every one wants that their data is secure they are not able to see the resources where they are left so Amazon

provides your data is completely secure and in the networks you can create your virtual private Network only you are

allowed to enter into this network no one else only you and the ones you are allowed you are giving the access can

enter into this network other than that no one else can enter into this network

okay if you people are aware that the networking you know basic terminologies you know that there is a subject so you

can choose the subnet if uh if you have the requirement for the basic demo and for keeping it a bit simple for our no

voice Learners I am leaving it uh by default which is available and now please keep this Auto assigned

public IP as enable option because you know if you disable this option your server is gonna be launched but it is

not going to have a public IP which uh if you if it will not have its public IP

you will not be able to the public will not be able to accept it accesses yeah so it is really important to have this

public IP option as enabled uh you know there are many of the times when we don't want our public IPS to be enabled

let me give you a very you know example for this suppose I am there is an organization and in an organizations

there are thousands of servers running here so I have one server where my database is running and in the database

all the credentials let's say all the salary details and all those things of my Androids are being stored now I don't

want that anyone from outside of internet has an access to their database that database must not be allowed

access to any anyone so I can disable this it will not have its IP now one

question might arise that but if you will disable this public IP I want people to you know use it I won't be

able to log in it I won't be able to access the data how am I going to do it so for that our answer is going to be

pen server we launcher instance or something it has two IPS one is public ID which is visible to the public and

one is private IP so then we'll disable the public IP it will have its private IP which will help you to login or to

access the resources which are there in that ec2 instances I hope it makes much to you yeah so now

let us come to this Fireball yeah before before that just one second uh I see

that many people uh uh our asking questions uh about what is the difference between VPC and VPN so I just

wanted to uh tell them there like you know because we were touching that concept like uh VPC and VPN are two

different things one is VPC is basically to create your virtual private cloud like you know everything that you are

going to create are being secure right so let's say that you are creating an

ec2 instance so what you are doing is you are trying to keep your easy to instance secure whereas VPN is something

that will allow you to transfer your data through a secure Tunnel right so

that is VPN so there are two different concepts don't get confused between them yeah go ahead

exactly uh thank you sir for such an amazing explanation to this point okay so now let's come to the Fireball

Fireball if you people are aware of networking you must know that firewall has a its own importance in the world of

networking and this internet and if you are not don't worry we'll just cover the basic so you are comfortable in extra

firewall you can consider Fireball as you know as the security guard of your of your let's say Bungalow so what will

happen that as soon as some requests come or any person comes that fireball is gonna check are you authorized to

enter Then server you will come it will go inside and check that this person is standing outside should I allow the

access to the Bungalow or something if he is the authorized person he will allow you to access or else you won't be

allowed the access similar work use the firewall in the terms of computing and all those things

again you can go with the existing security group or you can create your new security group right now we are

creating a new security group and it's by default name is launch wizard 7 which is given by AWS itself now what is this

SSH I will have to allow SSH traffic from any instance let's any instance or

I can justify that you only SSH should be allowed from my IP now this IP is the

IP of my local system which I am using right now so what is this SSH full form

is secured shell now SSH is really required when you are trying to login into the remote servers or remote

computers you don't have this the computer which will be launched after this initialization you don't have to

access physical access to it how will you access this you will access it only and only through some different computer

which you are having right now with you and you will have you will do a secure login from your PC to that PC to connect

and give commands and run some few commands on it so now you are saying that allow the SSH traffic you are

telling the firewall or the security guard like if any SSH requests come please do let him enter don't reject him

and you have an option that from which IEP do you want the SSH you can select anywhere for your demo or you can select

my IP if you want your SSH to be very very secure like only through this Local

Host which I am using right now I will be able to access it or else I won't be able to let's make it anywhere as of now

as soon as you make it anywhere but AWS but you know uh the important sorry again but uh Varun has covered a very

important concept there uh if you have noticed that uh if you select my IP

right uh allow SSS traffic only from my IP then even assume that there is a case

where your private key is compromised okay so for some reason you have compromise your private key that means

that your private key has been shared with the external world or some hacker was able to access your private key now

even in such cases AWS will block the SSH connection for the hacker because

he didn't he did not have access to the varun's IP so SSH is only allowed through varun's IP even if you have the

access to the private key right so that that's how you can restrict or that's how you can make your connection more

secure yeah yeah exactly now you can check your public IP that this is my IP only to

show you the group yeah what you can do is you can just go to the Google and you can just type what is my IP

just go and type and hit enter and as soon as soon as you'll type you will see that this is your public IP address now

note that this is one zero three one five six and let's go to the uh AWS console and now see it's exactly 103 156

this is my IP which is visible to world and AWS is automatically detecting

let's move to another very important aspect of traffic which traffic do we

want to allow like we have our website so uh you all have visited a website

today or you know when server you have started with your computers so there you

as soon as I click on it I can just see that there it is showing that this is the https request now this https is a

protocol by which we are sending the data so we are telling our security guard or our Fireball that uh listen if

there is any request which is coming for the HTTP traffic if the traffic coming is for HTTP don't deny it give it the

access because it will not check this one it if any request is coming to access it will be in form of HTTP

protocol and we have not told that security person that if there is a person who is coming with the HTTP

protocol do do let him enter so your website won't be available to the uh public so please don't forget to check

mark on this HTTP traffic because it is really important for anyone coming from public uh within the HTTP protocol to

access your website and the very interesting feature of AWS is that as soon as you have mentioned

that you want SSH from anywhere it will show you the tools with Source this allows IP address to access uh all IP

address to access your instance it is giving you the bonding here itself that you have allowed the you know SSH from

anywhere and it can be a major threat for your for your instance you yeah AWS

is recommending please change it to some loan IP but let's ignore it for the sake

of this demo just one thing uh before we go to the next one Varun there yeah so

uh people who are watching this uh some people might uh think that okay you're allowing HTTP traffic from the internet

so HTTP by default means that it's an insecure traffic right so how will you control this someone might uh actually

question this one so today we are just doing a demo but in a real world scenario what usually happens is nobody

allows a HTTP traffic let's say that you are talking to Amazon okay always you

must see that like you know or whenever you are talking to a third party application in general it comes with

https so what you can also do is that it your load balancer level you can say

that okay when you receive HTTP traffic from someone okay redirect it to https

right so you can make those uh changes into your load balancer so that you can

always keep your connection secure even though somebody is coming to you with HTTP traffic you can redirect them to the https yeah absolutely amazing

amazing point which you have covered sir this was you know really insightful to know about how we can have HTTP request

even with the HTTP without spending many of the you know bugs to buy the post

name and all those things for the HTTP request so now let's go to our next thing for any of our device or any of

the computer to launch it is really very important to have a storage as well because this is the place where you are

gonna store your boot and all those files and uh the things so you can check for the free tire eligible you can have

30 gigs of EBS EBS is the storage which you are using and you can use as per

your requirements so let it be 10 GBS right now and this is the 10 GBS which we are gonna gonna have and this is the

SSD which is by default it is providing and you can go on to the advanced tab if you want to do or check out some more

features of this storage this is not the let's go to the next part because it's

gonna take time if you go deep dive into this we'll do this some other day and servers are allows

so now let's go to the advanced detail and why I am going to the advanced detail is just because of this option to

make you aware of this IAM what is this IAM now IM is also a very interesting

feature which has been provided by Cloud providers now first of all the full form of Ian is

identity and access management what is it let me explain it to you in very simple terms suppose sir is having a

large organization you know many many teams like my database team my sales team my marketing team my tech team are

working they are having different different things and there are hundreds of server launched there now I joined

the company and now I sir wants to give me the access to you know the tech department okay you just go and handle

my website so for that sake he won't allow uh he don't want that uh he is

giving me the complete access of his AWS the complete access of the AWS account of the whole organization

because intentionally or unintentionally or by mistake I can damage any of the resources this will lead to heavy losses

of you know any of the services or any of the things so for that purpose what

we can do is we can here sir is gonna go and create an identity and access management uh for me they are gonna give

me the access of only and only tech tech department or only of the one server which is being running and amazing I am

entitled to do the work and in that as well you can specify that I have the read-only permissions or write only or

execute only whatsoever the permissions I have

thank you yeah so that's the thing which I uh wanted to demonstrate in this demo as

well so let it be for this this time I am to keep the thing simple and now

let's finally click on launch instance so as soon as you'll click on the launch instance now you just count the number

of seconds it took and it has successfully launched a virtual server

on you know some database which which is seeing in Mumbai and you have been allotted with the private IPC as I have

already told and it is you know initializing quoting all the things and you will get your public IP address very

soon okay so till the time this is being booted up uh let's wait it will take very few like

this is your elastic IP address I have not given it great yeah somebody was asking me the other day uh like you know

uh when we do uh the same thing with gcp and when we do the same thing with ec2 uh that's on the AWS why does uh you

know the instance get quickly installed on the gcp like you know installation is fine but uh to come to the running State

uh apparently uh gcp takes less time like you know even here it just took 10 seconds I guess uh so I was reading and

trying to understand what was happening uh behind and then I understood that uh gcp keeps a pool of instances that are

already up and when you make a request what happens is it will just give you access to the existing instance so

that's why uh when you do the same thing on gcp it just comes like in a fraction of seconds yeah just an interesting

topic this is also an interesting topic for you know the organization which cannot afford a single millisecond of

delay or latency yeah so that's amazing point now just see within we are watching it it has been up

our instances running and as we have already assigned it that uh my IP address should be Auto assigned so this

is a public IP which AWS from their pool of IP addresses have assigned to us so

now uh let's move to the connection part how do we connect to it so let's click on this connect and as soon as you come

there are some few of the things by uh which you can connect this is the public IP once again it is showing to you

for the demo I am just going to use the SSX line in SSH client I am going to

have a shell where uh I will just give the command and it will just you know it

will just throw a SSH request to our web server and then we can go ahead so here

is a complete instruction guide which has been given from Amazon sites like what can you do what other things do you

need to do so let's understand them once one by one let me open the terminal once

okay so let me clear this for you I hope my terminal is visible to all yeah yeah can you just increase the font size a

bit yeah let me tell if it works fine perfect perfect yeah okay so now the

first requirement what it is saying is that open the SSH clients so this is my SSH like for the server my local system

is going to act as a client it is the server and my local system is going to act as a client and this client is going

to send a SSH request to our website okay now it says locate your private key

file the key used to launch the aw instance is demo website

okay now what is what it is saying is that to access you will have to provide

it with the password or the key pair in this case which we have created so in your local system or the system you are

trying to access first of all go to the place where you have your you know that file so I have that file in my

downloads folder so let's go into the downloads folder now I will show you that in my downloads folder I have this

demo.pam this is the key value which I have downloaded sorry key pair which I have downloaded from their side this is

really essential to login into this that instance now let's go to the next Point what it says

now it says that run this command if necessary to ensure your key is not publicly viewable so this is the point

it is trying to emphasize that right now that this file which is in your local

system might be available and visible to everyone to restrict it just copy this command and put this now what this

command is this CH mode command is used in Linux to provide this some kind of permissions and permissions are given by

the numbers like this com this could be used by public by owner or by group of

people so you can refer to the Linux basics for the sake right now we are just going for our private and as soon

as I click enter so it is showing that this demo is now not publicly accessible it is only private to us only I can

access it now to connect to my instance what I will have to do is I will copy this

command now let's paste this command in and understand what this command is showing telling us to do it is saying

that give a SSH request sending SSH request and this minus I specifies with

an identity file what is the identity file which we are sending the SSH it shows that this is my identity file demo

website which I downloaded from AWS and to which server do you want to send this

request it is the ec2 user by default the user name is ec2 user you can check

out on this part then by default the username is easy to user you can change it as per your requirement

send my request to the ec2 user and the IP address is this one three two three

three and it might not be visible very clearly to this you can come here and check this is the IP address where I

want you to send and it is it is located in the South one AP South one is the reason of Amazon web services AP South

one is the Mumbai region which we are utilizing you can see it over here so as soon as I'll send enter it is saying

that do you want to enter into this I will type yes and not just see earlier my shell was

showing that Varun bansal is accessing the uh you are inside the Warren bunselves computer this is Baron

bunsen's computer and right now if you see it let me clear the screen for your better understanding now if you see you

are inside the ec2 user which has the IP address shown over it tada within a few

clicks you are in a server which is which is being hosted at a place where you don't

know which is highly secure and you are able to access it now let's see this is the by default directory which

you are using it so you wanted to add something

so you want to add oh sorry no no no yeah you will bang on no it is yeah so

as you have seen this is no magic but uh but this is not less than magic also

that you have launched a server with few clicks and you have uh you have login from your device to that okay so now you

have some things you are using the you know Red Hat Linux so first of all let's

update our directory so I will run the command as yam update minus y it will

update all the things okay now this is also one great thing which which we should cover as

soon as I try to update the operating system files it gave me the uh you know error that not root

as a ec2 user you are the normal user right now you are not allowed to do anything root is a super user which is

having some special privileges in in Linux Linux operating system or the Linux kernel I must say so for that to

get the special privileges to do any kind of action you will first of all have to run this command sudo Su and

hyphen as soon as you'll click here now just see earlier Uber logged in as ec2 user now you are logged in as the root

user root user is the one who is having the special privileges and it can install update and do various various

things okay I hope that makes sense now let's try to

update update the things M update minus y

this minus y is just for the sake that whenever it asks you for yes and no you are giving your permission that yes just

do all the things whatsoever is required I have given you the permission so it is updating all the directories required and it shows that I

have completed the updation now you can go ahead okay so uh now what we are gonna do is

let's first of all install it by default it will say Git it is not found in our

by default system so first of all let's install the get in it uh get installed sorry uninstall git

so it has uh down it has checked all the files which are required it will soon it's a 47 MB do you want to install it

I'll say yes now it is installed to get in it and it will just give me the confirmation once all the things have

been installed okay so it says complete now I can use all that in C now it is

not giving me the error now it can it is showing me that yes it is installed you can do whatever you want to do

perfect okay so now let's cover one more point

that you were having the website which you developed in your local system now you want that all your files are being

placed into this root system you are unable to do it what is the way why did I choose the kit

because once I have uploaded my files onto the GitHub now I can easily clone

this files or I can easily you know make a copy in this system you you just

cannot go to the finder and just pick one file or you can just drag and drop no it is not allowed in cloud and you

are also not having the physical access of your server so you are attaching a pen drive and transferring the file so

get us you know fun a great way to get your files from this

branch and like you can go ahead so let me once again copy that this is

the repository from where I want to get all my things I will say get clone and

then I'll attach this URL and the things are on my master graphs so as soon as I'll click uh Master here it is saying

okay cloning into Master now let's check what is the difference now it has created a folder with Master let's go

inside and what's there in master right now it has only readme.md5 first

of all what we'll have to do is we will have to switch our Branch right now let's check what brands are Beyond okay

so by default we are on Main Branch so to get the contents of Master Branch first of all we will have to switch to

the uh Master Branch so let's go to git checkout and master brands

I am skipping this portion because I hope that sir has explained all these things in detail and you know it so bit

checkout is for going to the master branch and if it does not exist it will create a new one for you now it says it

is on git Master Branch now you can once again run the command get Branch to check which branch you are like this

branch is being highlighted you are on this map so now once again let's clone the things

see now it is saying cloning now let's check what is the difference see in this master Branch you uh now you are having

entire content of your master plan you are having your index.html your assets your errors images etc etc whatsoever

you want perfect so I hope till now we have done great things like we have copied all our

content into the things now let's do one thing now what we are

gonna do is to make our files you know accessible to public we will have to run

a application in our web server which is Gonna Keep Us keep our website live as

soon as a request comes with the HTTP traffic we require a application which is listening to the things like if

someone uh someone is visiting your Bungalow there must be someone to receive them right so yeah that duty is

being done by web server so right now which web server we are gonna use for this demo we are going to use the Apache

web server and to install the Apache web server what we are gonna do is we're gonna type the command yum install httpd

httpd specifies the Apache web server let me give this for the faster and as

soon as you will enter it is installing the Apache web server so now Apache web server has been installed

let me tell you one thing two you know uh for hosting your website

Apache web server has been installed but with Apache web server what it shows what it says that I will keep only and

only those websites up which are located in slash where slash www HTML

this is the place this is the place if the files are present on this folder on

this destination on this directory I will post them otherwise I won't host them

just keep in mind just represent this directory name is really very important to host your website this is the place

that you will have to place your files now let's do one thing let's go to our home if I'll type CD I will be on my

home directory where I started this okay so let's go to my master

and these are the things so what I'm gonna do is I'm just gonna copy my index.html file and CP is the command

this is the very basic command CP specifies for copy but we are telling that CP copy index.html and to which

destination do you want to copy my destination is slash slash slash www.html then hit enter now it has

copied the branch you can just go and check it uh I will show it to you this

as well let me first of all copy these folders as well so now if I try to copy

assets folder and what is the location I want that it is being copied at this

location just see it is going to give an error it is saying that you have not specified

minus r and you are omitting directory assets now let me tell you that the CP command

Works only and only for files you can copy only and only files using this uh this CP command but right now what you

are trying to do is assets is a folder or directory in the terms of Linux you are trying to copy it it is not doing it

directly for that what you'll have to do before this folder name just attach minus app just minus r specifies that

you want recursively copy each and every file to that place now it will work fine

what it is doing it is just copying each and everything until all the things have been done like recursion if you have

studied in basic program if I hit enter now there is no error you have easily and successfully copied this folder or

file I must say to the desired destination now let's do it quickly for our errors as well okay

errors and my destination is slash web slash www.html

this is done for this one and let me do it finally for my images

perfect so now let's go to the place and check whether all our things have been

at reached at the right destination let's go there okay so the I'm just going to this

destination there are Apache web server needs all the files okay so right now I am at that place and let me just do with

the ls command LS shows the list what all are the things which are present in my directory now see great

let me run one more command PWD PWD stands for present working destination or directory you can say it will tell

you that right now you are in your this this directory you are in slash www and

slash HTML and the content which you are having right now is this so successfully you have copied all your

content you have successfully copied all your content right from your local system to GitHub server and then from

that GitHub server to your AWS local server now are almost all the work has been done

now let's do one thing let's try is our website available so for that purpose what I'll do I'll just go and copy my

public IP address of this I'm just doing it from GUI just to give you the things you can use your terminal

as well to if configure an IP config together now if I'm trying to say it is

showing me the error that Safari cannot open the page now you must be thinking now what is the error I am getting why am I unable to

access the things let's try it on Google Chrome as well if you are having to think that Safari is a bad browser okay

no Google Chrome is also not allowing you to go to the this website now what

is the reason let's check what is the reason the thing is you have installed the things you

have uh you you have copied all the files and things but what you have forgot is till now you have not started

the HTTP web server the final step which remains is you will have to give the command system CTL

start httpd you will have to activate this web server right you have installed it if

the file is just kept in your system it is not gonna do anything you have installed let's say an application

Subway supports in a mobile phone and if you are not tapping it to start the application it is of no use it is not

running in running and it will not perform any of the actions right so this

command system CTL it is saying that system just start the service named as httpd

okay so as soon as I'll click enter now it says that okay I have started with the service you can just check there is

a command chk I think chk config http

okay see what it is showing it is showing that forwarding request to system CTL is

enabled if there is any service if there is any request which has been coming with the HTTP request it has been

forwarded now let's go and check if it's our website is available yeah as soon as

you'll refresh your page your website is available to each and every one and this is a local website not only I I

am able to access it if service server copy this IP address and if he will open

his browser and try to enter this he'll be able to see it now you people might face one issue for that uh let me copy

this I am copying this not to some different position let's say this side

and let me paste it what I wanted to do with this is I just wanted to show you that by default it is being not shown in

the browser but this is sending a HTTP request if uh if you're you are unable to access it just check that by default

your browser is not sending the HTTP https request many a times what happens

the browsers by default send the request by https so that might be a reason if you are facing the issue just copy the

URL from your browser put it somewhere else and remove this s this we are

having no application which is listening to the https request we have the servers which is listening only and only for the

HTTP HTTP request okay I hope that makes sense so now if I try to check it on

Safari as well as soon as I'll reload my page it is not you know it's yeah this

is a www extension yeah now let's try it and see you are

able to access a website here here as well your responsive website is

great yeah I would I would actually call this as uh

absolute beginner's guide because you know uh the way Varun explained is like

even somebody who does not have knowledge of Linux does not have knowledge of gate

don't even know what AWS is I think just following this video they can exactly do

the same thing like they can install the HTTP server they can start their application on it and you know that's

amazing so that's why I can call it as absolute beginner's guide thank you so much Varun Pleasures all

mine sir and for those who are you know finding it really very uh simple or something what you can do is

you can just run one more command uh yum install node.js let's do it once and as soon as you'll

install it now you are ready to host now this was a static website which I chose for this demo purpose now you have

installed your node.js now you can copy all your Dynamic website content just start with the node.js files or your

Express express.js and you can just create your own web server and the applications if you want it is very

simple now you can get all the traffic all the things which you are experiencing on your local system you can access it on the AWS Cloud as well

the thing is that in your local system only you are able to access it on this Cloud you can make this thing access to

your friends and other people as well and of course for the ones who are uh

you know intermediate or are expert in the cloud services you can of course use the containers or you can just talkerize

these things and play around there the this is the you know Sky you can do as many things as you can

yeah yeah try python applications try node.js applications whatever you would like to but this is a starting point

that you should always know like you know if you can host a static website then you can move to hosting a dynamic

website so definitely start with this one get yourself acquainted to this understand each and every parameter that

is involved I am pretty sure Varun has made things clear for you but still uh

like you know you can go through uh the AWS console and understand step by step and then finally once you reach here

then you can move to the next steps

Services as soon as you just get to know you want to dive the this is the ocean

you can dive as deep as you want as there will be a lot of depth to life

amazing yeah great one uh uh thanks for your time today and uh you know thanks

for explaining us all of the things in a very simplified and easy way

uh thank you very much for inviting me and for the uh like one more thing for the beginners you just don't need to be

an expert in your web development like you you will think that okay first of all I will have to learn web development

or something just don't do it this is a fancy website just for the demo see like it looks good for you people if you are

learning just go and create a simple web page uh hello this is my website or my name is this and try to host it our

basic motto is To Learn cloud and all those servers and all those things not web development yeah exactly look you can also take a

sample HTML page from w3schools not at all exactly uh and if you want if you are

having any other doubts or something you can you know of course connect with me on LinkedIn sir will put my LinkedIn or

other handles this is my LinkedIn okay you can surely connect and ask me for any of the queries and I'll be more than

happy to help you with the same sure yeah thank you so much and uh will

definitely bother you again in the future and ask you to explain us some

more interesting topics sure uh see you for now and uh thanks

everyone if you have any questions do Post in the comment section and Varun and I will be more than happy to reply

to each and every comment and if you have any feedback for us also post that in the comment section and don't forget to share this video with your friends

thank you thank you foreign

English (auto-generated)

###


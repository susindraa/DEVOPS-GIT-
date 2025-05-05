#space/kubernetes/41-day
The number "41" likely refers to **Day 41** of the complete DevOps course by Abhishek, as mentioned in the transcript. On this day, the session focuses on learning about **ConfigMaps and Secrets in Kubernetes**. Here's a summary of the content for Day 41:

---

### **Day 41: ConfigMaps and Secrets in Kubernetes**
?
#### **Key Topics Covered**
1. **ConfigMaps in Kubernetes**
   - Definition: A Kubernetes object used to store non-confidential configuration data in key-value pairs.
   - Purpose: Decouple configuration from application code to make applications more portable and easier to manage.
   - Example Use Case: Storing database connection details like `DB-Port`.
2. **Secrets in Kubernetes**
   - Definition: Similar to ConfigMaps but specifically designed to store sensitive information (e.g., passwords, API keys).
   - Key Difference: Secrets are base64-encoded by default and can be encrypted at rest for added security.
   - Purpose: Securely manage sensitive data without hardcoding it into applications.
<!--SR:!2025-05-06,1,190-->



1. **Difference Between ConfigMaps and Secrets**
?
   - **Data Sensitivity**:
     - ConfigMaps: Non-sensitive data.
     - Secrets: Sensitive data.
   - **Storage**:
     - ConfigMaps: Stored in plain text.
     - Secrets: Encoded or encrypted.
   - **Access Control**: Secrets require stricter access controls compared to ConfigMaps.
<!--SR:!2025-05-06,1,190-->

1. **Practical Implementation**
?
   - **Creating ConfigMaps**:
 ```yaml
     apiVersion: v1
     kind: ConfigMap
     metadata:
       name: test-cm
     data:
       DB-Port: "3306"
 ```
   - **Referencing ConfigMaps in Pods**:
     - As environment variables:
```yaml
       env:
       - name: DB_PORT
         valueFrom:
           configMapKeyRef:
             name: test-cm
             key: DB-Port
```
 - As volume mounts:
```yaml
       volumes:
       - name: config-volume
         configMap:
           name: test-cm
```
<!--SR:!2025-05-06,1,190-->

 

- **Dynamic Updates**:
?
- Environment Variables: Changes require pod restart.
- Volume Mounts: Automatically update after a brief delay without restarting the pod.
<!--SR:!2025-05-06,1,190-->

5. **Hands-On Demo**

   - The instructor demonstrates:
     - Creating a ConfigMap and applying it to a Kubernetes deployment.
     - Updating the ConfigMap and observing how the changes propagate to running pods.
     - Using `kubectl` commands to verify updates dynamically.

5. **Best Practices**
?
   - Avoid hardcoding sensitive information in applications.
   - Use Secrets for sensitive data and ConfigMaps for non-sensitive data.
   - Always encrypt Secrets at rest and restrict access using RBAC.
<!--SR:!2025-05-08,3,230-->

---

### **Why This Topic Matters**
- **Separation of Concerns**: Keeps application code separate from configuration and secrets.
- **Scalability**: Makes applications easier to configure and deploy across different environments.
- **Security**: Reduces the risk of exposing sensitive data by leveraging Kubernetes-native tools.

---

### **Conclusion**
This session provides a comprehensive understanding of **ConfigMaps** and **Secrets** in Kubernetes, focusing on their purpose, differences, and practical implementation. By mastering these concepts, learners can effectively manage configuration and sensitive data in Kubernetes environments.

For further details, refer to the official Kubernetes documentation or explore the examples provided in the GitHub repository linked in the video description.

---

If you have any specific questions about this session or need clarification, feel free to ask!
# Transcript


hello everyone my name is Abhishek and welcome back to my channel so today we are at day 41 of our complete devops

course and in this video we will be learning about config maps and secrets in kubernetes so on a very high level

what we will learn is what is a config map in kubernetes

will learn the why aspect of what is a secret why a secret does exist in

kubernetes then we will try to understand a classic interview question that is the difference between config

map and Secret so this is a very popular interview question right and then we will also try

to do a live demo so this video is going to have a live demo where we will try to see how to create config map how to

create secret different types of Secrets and then we will finally

see how to reference or how to use these ones inside a pod or deployment of your

kubernetes right so this is going to be a long video and without wasting any time let's quickly jump onto the video

but before that if you haven't subscribed to my channel definitely consider subscribing it because in the

future I am going to do more and more free courses where we will learn about uh yeah I'll keep it suspense and you

can keep watching our community Tab and telegram channel to understand what are my future free projects okay first of

all config map

so what is a config map in kubernetes so if you just for a couple of minutes if

you forget about kubernetes let's say you are a application developer or you have understanding of how application

works so you know there is an application and let's call it as a backend application

so this backend application what it does is it talks to a database okay and it retrieves some information

from the database and it gives it back to the user so this is a very simple application

right so uh this backend is trying to talk to the database and it is trying to give the information back to the users

when user has requested now what is the information that is application required from database like it requires some

information like what is the database port what is the database username

what is the database password okay and what is the uh for example connection

type or what are the number of connectors that are required and a few more information that this application

requires from the database now how this information is retrieved uh you

know this can be retrieved using a environment variable inside the application like you know

that a hardcore or a thumb rule is that the application should not have these uh

details hard-coded right so if you have these details hard coded

what will be the problem in the future if these details gets changed okay any of this information get changed then the

user will get null or you know he gets some vague information okay if there is

a vague uh like you know if there is any other username that got changed or password that got changed or the port

got changed so in such cases the user will get a wrong information or he might not get any information at all regarding

the user right so to solve this problem you will not hard code this information inside the application but a general

practice is we are not talking about kubernetes at all General practices you will try to save this as part of

environment variable or you will try to save this as a specific file in a specific path inside your application or

inside your file system right and you will try to retrieve this information from the file system using OS modules

right let's say you're using python you can use the OS model you are using Java you can get that from the operating

system libraries that Java supports right so this is how you read the information now how do you do this

inside the world of kubernetes okay so inside kubernetes there are two things one is okay with the same problem let's

say we want to solve the problem with respect to DB port and uh the DB

connection type all of these information so I'm not talking about DB username and DB password okay for some time let's put

DB username and DB password aside and let us talk about only the DB port and DB connection type these kind of

information okay so what kubernetes says is because kubernetes basically deals with containers

okay how a user can get this information uh you know as part of your container

environment variable or as part of your container a specific file inside your container okay so to achieve this what

kubernetes says is okay so we support something called as config map

okay so what you can do is as a devops engineer or as a configuration manager

engineer you can create a config map inside the kubernetes cluster okay and put the information like DB port or any

kind of information inside the config map okay and you can mount this config

map or you can use the details of the config map inside your kubernetes pod okay so the information can be stored

inside your pod as an environment variable or can be stored as a file inside your pod on your container file

system but this information has to be retrieved from the config map because as a user you cannot log into the Pod you

know you cannot go to the container and once you go to The Container you cannot create this environment variable or you know so that's not a right practice so

because you can do it but the problem is that sometimes you might not have access to the container uh you know login

itself or the other problem is that what if this Fields gets changed continuously okay or whenever you are creating the

docker file itself you don't know these values okay probably these values are fed to your application later point of

time so this is not possible and What kubernetes suggests is go with the config map

so as a devops engineer what you need to do is you can collect this information that a user requires you can talk to the

database admin and as a devops engineer you can create a config map

and inside the config map you can store these values once you store these values you can

mount this config map or you can use this config map as the data of this config map as environment variables

inside your kubernetes spot how you can do it and you know what are the different ways like I told you one is

you can use them as environment variables one is you can use them as volume mounts so I'll talk about both the use cases when we go with the live

demo but for now you understood the purpose of config map right so what problem config map is solving so config

map is solving the problem of storing the information that can be used by your

application later point of time okay so config map is used to store data

and this data can be at later point of time used by your application or your

pod or your deployment now if config map is solving this problem why you need a

secret in kubernetes right so you should get this question like okay config map is solving this problem then what is the

purpose of secrets in kubernetes so secrets in kubernetes solves the same

problem but Secrets deal with sensitive data

that means to say like you know if you are just providing all of the information if you go back to the

previous slide like I told you you have parameters like DB password okay you

have parameters like DB username like if you try to put this information along with the DB port and all the details in

the config map there is a major problem in kubernetes that is in kubernetes whenever you create a

resource what happens is this information gets saved in etcd okay so if this information is getting in saved

in etcd in etcd usually the data data is saved as objects and you know any hacker

who tries to get access to etcd they can retrieve the information so if they are retrieving the information of your DT DB

username and DB password that means your entire application or your entire

platform is compromised so they can get the details of your database so if they are getting details of your database

then you know your kubernetes cluster does not have a proper security so to solve this problem what you will

do is kubernetes says that if you have non-sensitive data then store it in config Maps if you have sensitive data

then store it in Secrets now what will happen if you store it in Secrets what difference does it make so what

kubernetes says is if you put any kind of data inside the secret okay what we

will do is we will encrypt the data at the rest that means to say before the

object is saved in etcd kubernetes will encrypt this one

okay so by default kubernetes uses a basic encryption but what kubernetes says is we will also allow you to use

your own encryption mechanism like the custom encryption so you can pass these values to their API server and say that

whenever you are storing like you know API server is feeding some information to the etcd you can use this custom

encryption and even if hacker is trying to access this etcd because he does not

know the decryption key right so he can read all the information from etcd let's say he read the

information about config Maps deployment pod everything but when it comes to Secrets he will just retrieve a

encrypted information that is of no use for him okay so he will he just have to throw that information because he cannot

read that he does not have the decryption key okay so that's why whenever you have encrypted or sorry whenever you

have sensitive information go with storing the objects or values in the secrets whenever you have non-sensitive

information then go with the config Maps Okay so this is the differentiation between conflict maps and secrets now

what happens like okay let's try to go a step back and let us see the step-by-step approach on what is

happening like let's say you are a user okay as a user you are creating a config map

for example so what you will do is you will write a yaml file for config map and inside the ml file like I told you

you'll put all the details that are required so you can get the yaml yaml syntax from the kubernetes documentation

as well and once you do this you will use the cube CTL apply I'll show you all of these things in the

demo as well so you use the cube CTL apply and you create this config map on

your kubernetes cluster so your config map got created

so what is happening here your config map is created and at the same time API server is saving this information inside

the etcd as well so this is the entire process with respect to config Mark now

for a hacker if you are storing the sensitive information he has two points to retrieve the information one is if

the hacker has access to your kubernetes cluster one is he can come here he can come to the config map he can

just say Cube CTL described config map or he can just say Cube CTL

edit config map and he can get the information from the config map so your DB password is compromised and the other

thing that he can do is he can go to the etcd and because the data is not encrypted he can get the information

from here as well so these are the two problems major problems that secret is solvent problem number two I already

explained so at the etcd the data is encrypted at the rest so the hacker does

not have the decryption key so that's why your information is secure but what about the point number one you might say

that uh you know uh the hacker might come to the secrets and he can again use

the cube CTL describe or edit and he can read the information right so for that reason what kubernetes recommends is

apart from kubernetes doing its part so kubernetes is doing its part it is using the decryption encryption so kubernetes

is saying whenever you create Secrets use a strong R back okay say that no user should have access

to our bags who are not like for example there is a very popular Concept in devops that is called as least privilege

okay least privilege is a concept where what you will do is you will only Grant least access like you know very less

number of people should have access to Secrets okay like the same concept with the IIM as well in AWS so if you are

restricting the access like uh there is a developer who is trying to log into the kubernetes cluster like he can have

read access to config Maps he can have read access to pods he can have read access to deployments but there is no

requirement he has access to secrets so you can prevent that in the user are back you can just say that okay he

should have access to all the resources but not secrets so this is how you prevent both the things okay so this is

the difference between config map and secrets if user sorry if your interviewer is asking you this question what is the difference between config

map and secret this is how you explain him like both the config map and secrets both of them are used to store the

information or you know pass the information or uh for example you might want to save some

Json data you want to save some key value pair inside your company when it is clustered that will be later fed to your applications which are in pods in

kubernetes you can use both of them for the same purpose but Secrets is used for sensitive information whereas config

Maps is used for non-sensitive information and how does Secrets solves this sensitive information problem like

I told you with Secrets the data is encrypted at the rest and with secrets you can enforce a strong rvac so that

you know for the entire Secrets resource in kubernetes you can say only devops engineer should have access to it you

can do that using the kubernetes rpback okay now we will not waste more time and we'll quickly jump onto the demo because

demo also might take some time for us so let me stop sharing here

stop share perfect so let me start sharing my other screen

so at this point of time if the things are clear to you uh while I'm sharing my screen just comment saying that okay so

I'm able to understand I am not able to follow at any specific point okay so your feedback is highly appreciated

perfect now you should be able to see my terminal in one two three seconds perfect

so let me firstly clean my cluster Cube CTL get deployed to have any deployments

I think I should have a few so Cube CTL delete I should have done this before

sorry delete deployment sample python app done and Cube CDL get CM config map let me

delete this config map as well Cube CTL delete config map test config map

perfect so let's start with creating a config map okay so uh Vim cm.yaml I'll

just say uh this one and here inside the config map.dml firstly you have to

provide the API version V1 then you have to provide kind which is as config map

don't think that Abhishek is just typing it how does he remember all of this like I do it on a day-to-day basis so I

remember but you can also use the kubernetes uh documentation and you will not get any extra points for remembering

this thing okay name as uh test cm then data you can pass any data here

like uh probably we'll use the same thing DB hyphen Port let us give the MySQL Port let me just say 3306 okay so

let me just save this one now let us create this always use Cube

CTL apply over create why I have already explained in the previous video and uh

if you know the answer you can also comment that Cube CTL apply minus fcm Dot yaml so now if I just say Cube CTL

get CM you will notice that the config map is created now let us describe this and see Cube CTL describe cm

test hyphen CM right so this is one data entry that we have

saved in the config map similarly you can save any number of data okay as part of your application in your Enterprise

your application might require a lot of fields then you can use a lot of fields here like later you can point these

fields as environment variables inside your kubernetes part that is what we are going to see now so my end goal now will

be to take this field from the config map and to put these fields as environment variables inside my

kubernetes pod but for that firstly I have to create a kubernetes pod itself if you have watched my previous videos

uh git remote minus V uh you know this is one video that I explained Docker 0

to 0 where we have created a python Django application which I'm going to use here okay now I I will not explain

this one more time because I've also explained this in the kubernetes deployment as well as the docker 0 To

Hero video how to create a python Django application and host it as a application inside your container we'll use the same

container so to just save the time now this is my deployment.aml file

let me open this and let me get it back to the state for example I have to

remove this field sorry so this is the same one that I explained in the previous video okay in the

kubernetes deployment we use the same deployment to create the kubernetes pods okay so I'll show you very quickly uh if

I just do Cube CTL apply minus F deployment.yaml what will happen here is

it will create two kubernetes spots because I have used the scaled replica as two Cube CTL get pods minus W for

watching two parts are created now how do I look into the environment variables of this Parts you can just say Cube CTL

exec the name of the Pod hyphen hyphen hyphen

slash bin slash bash so you will

sorry exact minus ID is required so that I open it in an interactive terminal so

right now I am inside the Pod and here if I just say environment variable and

followed by just let me search with DB you'll notice that there is no environment variable with respect to DB

because this is just an application running and till now it does not have information of the database like it does

not have the information of the database Port but let's say I am using mySQL database in this application and I want

to use the information uh that is I want to know the database Port of MySQL so

what I have to do is I have to go here and modify the deployment.yaml and what I need to modify is I just need

to add after the image or anywhere you know you can provide something called as EnV because I want to read the value as

an environment variable right so here inside the EnV what I will do is I will

tell my kubernetes deployment that you know I need environment variable and the

name of the environment variable should be DB Port let's give caps okay

this should be name of the environment variable and the value of the environment variable so how will you get

the value of the environment variable don't worry I created a config map so to get the value get the value from the

config map that is value from what is the config map like I can provide the

reference to my config map saying that config map ref that is reference to the config map

so get the so this is the name of the environment variable what should be the value of the environment variable the DB

Port that we have provided in the config map so that's why I'm saying value from config map reference and here what is

the name of the config map because kubernetes has to know where it has to get right so name of the config map is

what did we create the name of the config map I think test hyphen cm and the value

or like you know what is the key uh where I have should stored the database

Port so the K the key inside the config map that I stored is I think DB hyphen

Port let us quickly go back and see so Vim cm.aml

sorry cm.yml so you'll see that okay so this is the port so I have to pass this so

that kubernetes can retrieve this information I think I have already passed the right one or if I go to the

deployment.yaml uh key is DB hyphen Port name of the config map is testif and CM

and the environment variable name inside the python application that I want is DB

Port so now the expectation that I have is as soon as I deploy this kubernetes

deployment so it should overwrite the existing parts and inside the pods if I

just say EnV grep DB right the expectation is no I should

see a new environment variable called DB hyphen port and the value of the

environment variable should be 3306. so this is my expectation now let me see

if my expectation will match or not for that Cube CTL applying minus f deployment.aml

so it said that uh okay through an error and it says validation error deployment

EnV value from okay so it said that the it does not know

value from unknown field config map ref okay so it said that the config map ref

name that we have provided is wrong I think there is some syntax error here config

perfect map ah okay sorry my bad so that's why you always have to

follow the documentation you should not go by your gut so it should be config map followed by key ref okay so you will

do these mistakes don't worry if you are not doing mistakes you will not learn things so here I've done a mistake that

it should be config map key reference so that's fine uh now if I apply it one more time it should get created perfect

now Cube CTL get pods minus W I'm watching it again see

these containers are getting created the previous ones the previous pods are getting terminated and the new ones are

getting created perfect let's give it some time for the ones to be running I

hope that is done so let me just say Cube CTL get parts perfect so they are

running 25 seconds ago and 21 seconds ago that means I hope they are good now

again Cube CTL get pods let me accept into one of this I can pick randomly anything let's pick this one Cube CTL

exec minus it name of the Pod what I'll do is slash bin slash bash so that I'll

go to the Pod now I'm inside the Pod let me say EnV grab

I hope this will work minus I DB so that okay let me use DB itself I use the

capital DB and let's see perfect DB Port is 3306. so our purpose is solved now

the developer what he can do inside is Java application he can just say that

for example or inside the python application you can just say OS dot DB port or you know OS dot EnV or Environ

off you can just say DB hyphen port and he can retrieve the value for his database connection right so this is how

you use the config map inside a application as environment variable but now there is a problem I'll show you

what that problem is and this problem your interviewers will definitely ask okay how will you use your config map

inside your kubernetes Port so if you say this way okay so this way you can use your application and sorry value

inside your application but the problem is let's say I am the devops engineer and I realize that for some reason I

want to change the oh sorry let me get out for some reason I want to change the DB Port okay so the

DB Port is occupied or you know consider it as some variable with respect to DB

that I want to change now how do I change this okay so I'll just come to the config map and instead of 0 6 I'll

say 0 7. I'll save it now how will the Pod come to know about

this change okay so if I just do Cube CTL exec again we'll go to the same part one more time and if you see the DB Port

name will remain the same okay if you just say grab DB it will be 3306 only so

your application will continue to use 3306 and it will fail because the port has changed so the database admin has

changed the port and your application is not understanding that the port is changed so your application will try to connect to the DB but it will never get

connected so to solve this problem what kubernetes is said has said is if you

have this kind of information if you have the information that keeps changing okay the changing the environment

variables inside kubernetes is not possible inside containers is not possible you can never update a value

like today you can go to any container and try to update the environment variable value and let me know what happens you will say Abhishek I cannot

change the value inside environment variable because container does not allow changing the environment variable

you have to recreate the container but input production you cannot restart the containers okay because it might lead to

some traffic loss if you are deleting the deployment and recreating the deployment you might incur some traffic loss which is not expected so the other

way that kubernetes suggests is why can't you use volume mounts okay so kubernetes says like instead of this

approach go with an approach called volume mounts okay so using the volume mounts what you can

do is you can uh sorry using the volume once you can do the same thing but

instead of using them as environment variables you will use them as files because you are mounting right so you

are config map information will be saved inside a file and developers can read

the information from the file instead of environment variable let us see how to do that okay so again I'll open the

deployment.yaml now instead of this I'll delete this environment thing

okay so instead of environment thing what I'll do is

I will do a volume Mount okay but to do a volume on the first thing that you

have to do is you have to create the volume itself right so let me leave this space so that you understand and here

what I will do is at the level of the containers okay

so here at the level of the container what you will do is you will create a volume so you just say volumes

whatever the name of the volume that you would like to so let me say the name of

the volume is uh DB connection for example

and inside that what I will say is this volume should read the information from config map

so in kubernetes you can create different type of volumes you can create external volumes you can create internal

volumes persistent volumes config map so in this case I am creating a volume that reads the information from

config map okay and again the name of the config map what was it it is test

hyphen cm okay so this is the volume that I've created and here you can mount the volume okay for that you can simply

say volume months so what is happening here the first

thing that happened is I have created a volume why did I create a volume because a volume is nothing but a storage right

it's just a block and inside that what I'm saying is read the information from config map so this is just like a Docker

volume that I explained you previously and now I have to read this value inside the point for that what I'll do is I'll

Mount the volume so mounting the volume is nothing but reading this volume inside the kubernetes Pod okay for that

in the volume once I'll say name what is the name you have to provide the same name that is DB connection okay and

where do you want to mount this so inside the kubernetes pod on which

folder do you want to mount it or on which disk or which file system do you want to mount it I'll simply say Mount

path AS Slash opt you can use any path okay now if I save

this sorry if I save this and if I just do

Cube CDL Cube CTL apply minus F deployment.yaml you will

again notice that okay if I just do Cube CTL get pods minus W so the pods are

created four seconds ago and six create six seconds ago that means they just got created as soon as I applied now let me

do exec one more oh sorry I have to get the Pod name right to exec Cube CTL get

parts I'll clear my screen get the pods use one of these parts and

what will happen now is the environment variable should get deleted because we have related removed the environment

right so if I exec into one of these pods and if I just say hyphen hyphen slash bin slash batch

now you will see if I again do EnV pipe grep DB

there is no environment variable because we have removed it right that is working fine now again what I did is I have also

mounted this so let us see if it got mounted on the slash opt folder perfect it got mounted now it says that there is

a file called DP Port let us see what is the value of the DB Port cat DB Port pipe more

uh what time oh sorry cat slash opt DB port

five more see what is support three three zero six right so this uh got mounted inside the

uh what is it the file system okay now what I can do is again I can go to cube

CTL edit config map

[Music] configmap.aml sorry cm.aml and here what I will do is

okay I change the port but I did not apply sorry for that so let me apply the port anyways you have seen what is

inside the uh container or what is inside the Pod right so you have noticed that inside the Pod there is a file

called DB port and the value is 3306. now let me apply this change Cube CTL apply minus F uh CM dot ml

okay now my expectation is the kubernetes poured without getting restarted it should know the value of

the config map has changed let us see if it will understand or not now again what I will do is firstly to show you Cube

CTL describe CM test cm see the DB Port has changed now I will

show you that the Pod is not restarted Cube CTL get pods the timestamp will

will be more so see it is two minutes before that means it did not get restarted as soon as I updated the

config map right so now let us exec into this part and let us see inside that

file the name of the or the port number has changed or not automatically so I did not change anything right inside the

Pod I did not log in and I did not change it exec minus it slash slash slash bin slash Bash

fingers crossed cat slash opt slash DB port now I am expecting the port number

should be 3307 perfect it got changed you not believe me so I'll do it one

more time config map dot yml okay you might say that Abhishek

I don't believe it so let me change it one more time three three zero nine okay

now again let me apply it apply minus f ah sorry my fingers yeah apply minus F

this got applied again so you have to give it couple of seconds for it to get

a refresh inside your kubernetes pods so let's do it one more time Cube CTL

exec every time you don't have to exit into the Pod I was just showing you but

what I can also do is cat slash opt slash DB Port here as well and you will

notice that the port has changed oh sorry it hasn't changed now like I told you give it a couple of seconds so this

is uh perfect let us keep doing it and let us see if it gets changed or not

but did I change here Cube CTL uh describe

config map SCM did I apply it oh yeah I applied it right so let us see

let us keep doing it and I'm sure it will change perfect it got changed right I know you wouldn't you wouldn't have

believed me if I have not showed this but yeah so the port number has updated like I told you it will take couple of

seconds because uh kubernetes uh continuously keeps reading the config map and looks for the changes so now uh

it understood that okay the mount has changed and like be patient give it a couple of seconds because it will take

couple of seconds to reflect okay so you can keep trying it add new values to the config map keep doing it so similarly

you can do it for secret as well so there is no rocket science uh for secrets and config Maps the behavior is

same uh so even what I can do is I can just create a secret for you uh Cube CTL

create so there are different types of Secrets there can be TLS Secrets there can be a generic secret okay we are not

talking about that because uh it will be out of context uh today so I can just say Cube CTL create secret generic

secret TLS is basically to store the certificates but here we are just storing username and password right DB

password so uh Cube CTL create secret generic and let me call this secret name

as uh test Secret okay and what I will do is you can also

use the same uh secret.aml file to write it but I'm just showing you the other way like you can create config map like

this as well Cube CTL create config map name of the config map again you can provide the details just for projecting

or showing you the other way of creating a secret I'm just showing you here okay so from literal means to say that you

are creating a basic literal okay so here I will say the literal name as uh

DB what was the name that we showed I think DB Port right okay DB Port is

equals to 3306 okay so here what I'm doing is I'm

just showing you the other way of creating as soon as I create the secret got created you can also do it the same way

using secret.yml as well same way that I did for the config map so now if I do

Cube CTL describe secret followed by the name of the

secret was test Secret okay so see what is there here

DB Port it says four bytes so this is exactly what I told you during the theory class right so if I just do Cube

CTL edit secret test secret I told you that what

kubernetes does is it will encrypt in base64 okay so this is the base64 encrypted but this is not a great

encryption by default kubernetes does not support great encryption you can encrypt using your own way for

encryption here you can use something like a hashicor vault or you can use seal Secrets or you can use any

different thing for encrypting the secrets on your kubernetes namespace level or during your kubernetes secret

creation but at the rest using uh etcd you have to pass it to the API server

whatever your encryption key is okay but here your kubernetes secret got saved and if you want to understand like you

know what is the secret value just to say that is it 3306 or not you can again say Echo

uh the field here and you can just say base64 hyphen hyphen decode okay so it

will decode and see the port number is 3306. so kubernetes does not have a great uh encryption uh whenever you are

creating the secrets by default so if you want to keep it more and more secure you can use the applications that I just

told you but that's fine always uh importance is to secure it at the level of etcd and that comes at your

kubernetes security where you can use a encryption key okay if you want to know more about it read how to encrypt etcd

for Secrets I also explained in it in one of the previous classes regarding kubernetes security

okay so this is uh the one here like I have created the secret now instead of

this port what you can do is for your demo or for you to practice use the same example and create a new secret for DB

password okay and provide a password Here uh probably a b and create a new

secret called uh test secret one and your exercise for today is to repeat the same exercise so instead of config map

key reference you can just say secret key reference like if you go to my deployment dot file deployment.yaml file

right so here whatever I used just replace the config map secret like you

know here I said volumes right so inside the volume inside this config map just replace it with secret or you can follow

the kubernetes documentation and if you want to read it as environment variable like I showed you in the previous

example you can just say secret reference and provide the information

but you will get all of this information inside your kubernetes documents I'll I'll put the link in the description as

well consider this as your homework or assignment and I explained you everything regarding config map no you

have to do it with respect to secret okay so that you learn it I hope you enjoyed the video for today if you have

any questions put that in the comment section don't forget to like the video and share it with your friends finally if you haven't subscribed please

subscribe to my channel Abhishek thank you so much I'll see in the next video take care everyone bye

English (auto-generated)

###
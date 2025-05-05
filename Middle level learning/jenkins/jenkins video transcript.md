

#goes-to/jenkins 

continuous integration is a major step in the devops life cycle it makes the development testing and

0:11

deployment of applications easier and faster there are a number of continuous

0:16

integration tools like bamboo apache gum jenkins buildbot and travis ci

0:22

and among them jenkins is the most popular hi guys welcome to this complete jenkins

0:27

tutorial by simply learn my name is sandeep and today we will be covering the most important continuous

0:33

integration tool that is jenkins first we will understand what is devops

0:38

and look at an introduction to devops then we will see how to install jenkins in windows

0:45

after that we will learn what is jenkins look at a tutorial on jenkins and

0:50

understand how jenkins pipeline works finally we have handpicked some of the

0:55

most important jenkins questions that you might face in a devops interview

1:00

let's first look at a small animated video to understand what is devops

## What is DevOps

1:06

meet tim tim builds a robot in his lab a climate controlled and pollution-free

1:11

environment once he's done he drops the robot off at his project partner mia's house mia

1:19

takes it out to her backyard to ensure that the robot meets the requirements but here is where the problem arises the

1:27

change in the environment causes the robot to malfunction mia is now really annoyed and she has a

1:34

lot to correct and it seems to her as though tim didn't really do much

1:39

this wall between them leaves a poor robot to bite the dust

1:44

well what if we broke this wall tim and miana work together in a common space

1:50

tim develops each block of functionality of the robot which is then immediately checked by mia both are now working

1:57

simultaneously instead of waiting on the other to finish their task as and when a feature is ready for use they are put

2:04

together to build the final product they develop a common mindset and share ideas

2:10

to further speed up the process they use several tools which can automate every

2:15

stage this means that the robot is now ready sooner with less iterations and

2:20

manual work from an organization perspective tim would be the developer

2:26

while mia the operations their union is the core of the devops approach devops

2:32

has several stages and set of tools to automate each of these stages let's have

2:37

a look at these tim first puts down a plan in terms of software this could mean

2:43

deciding on the modules and the algorithms to use once he has the plan he now codes the

2:49

plan with tools such as git tim has a repository for storing all the codes and

2:55

their different versions this is called version control next this code is fetched and made

3:01

executable this is the build stage tools such as gradle and maven will sort this

3:07

out now before deployment the product is tested to catch any bugs the most

3:12

popular tool automating testing is selenium once the products are tested

3:18

mia must deploy it the deployed product is then continuously configured to the desired state

3:24

ansible puppet and docker are some of the most common tools used that automate these stages

3:30

now every product is continuously monitored in its working environment nagios is one such tool that automates

3:37

this space and the feedback is fed back to the planning stage and finally we have the core of the

3:45

devops lifecycle the integration stage tools such as jenkins is responsible for

3:51

sending the code for build and test if the code passes the tests it's further

3:57

sent for deployment this is called continuous integration let's now have a look at an organization

4:04

that has adopted the devops approach which of the below sequence of steps

4:09

would they follow to develop a software leave your answers in the comment section

4:14

keep an eye out for the right answer on the comment section or our youtube community

4:20

giants such as amazon netflix target xc and walmart have all adopted devops and

4:27

seen a considerable increase in delivery and quality in 2014 an hour of downtime for netflix

4:34

would cost it two hundred thousand dollars it became absolutely crucial that

4:40

netflix prepared themselves for any sort of failure and so they took to the

4:45

devops approach and implemented it in the most unique way they developed a

4:50

tool called simeon army this tool created failures and automatically

4:56

deployed them in an environment that did not affect the users the team would troubleshoot these

5:02

failures and this gave them enough experience to deal with any degree of collapse with everything being automated

5:10

and happening simultaneously organizations can now deliver at a much faster pace so considering the benefits

5:17

of devops and its divergence from the traditional methods would devops be the future

5:23

let us know what you think in the comment section below and with that we come to an end of our video i hope you

5:30

are excited to learn more about devops and jenkins now we have matthew apexa and chidanan

5:36

who will take you through this journey of learning jenkins in detail with that over to you matthew so this is

## Agenda

5:43

matthew with simply learn and today we're going to go through and introduce you to devops we're going to go through

5:49

a number of key elements today the first two will be reviewing models that you're

5:54

already probably using for delivering solutions into your company and the most popular one is waterfall followed by

6:01

agile then we'll look at devops and how devops differs from the two models and how it also borrows and leverages the

6:08

best of those models we'll go through each of the phases that are used in typical devops delivery and then the

6:16

tools used within those phases to really improve the efficiencies within devops

6:21

finally we'll summarize the advantages that devops brings to you and your teams

6:27

so let's go through waterfall so waterfall is a traditional delivery

## Waterfall

6:32

model that's been used for many decades for delivering solutions not just i.t

6:37

solutions and digital solutions but even way before that it has its history that goes back to world war ii so waterfall

6:45

is a model that is used to capture requirements and then cascade each key

6:51

deliverable through a series of different stage gates that is used for building out the solution so let's take

6:58

you through each of those stage gates the first that you may have done is requirements analysis and this is where

7:04

you sit down with the actual client and you understand specifically what they actually do and what they're looking for

7:11

in the software that you're going to build and then from that requirements analysis you'll build out a project

7:18

planning so you have an understanding of what the level of work is needed to be able to be successful in delivering the

7:25

solution after that you've got your plan then you start doing the development and that means that the programmers start

7:32

coding out their solution they build out their applications to build out the websites and this can take weeks or even

7:38

months to actually do all the work when you've done your coding and development then you send it to another group that

7:44

does testing and they'll do full regression testing of your application against the systems and databases that

7:50

integrate with your application you'll test it against the actual code you'll do manual testing you do ui testing and

7:58

then after you've delivered the solution you go into maintenance mode which is just kind of making sure that the

8:03

application keeps working there's any security risks that you address those security risks the problem you have

8:10

though is that there are some challenges however that you have with the waterfall

8:15

model the cascading deliveries and those complete and separated stage gates means

8:21

that it's very difficult for any new requirements from the client to be integrated into the project so if a

8:28

client comes back and if the project has been running for six months and they've gone hey we need to change something

8:34

that means that we have to almost restart the whole project it's very expensive and it's very time consuming

8:41

also if you spend weeks and months away from your client and you deliver a solution that they are only just going

8:48

to see after you spend a lot of time working on it they could be pointing out things that are in the actual final

8:54

application that they don't want or are not implemented correctly or lead to just general unhappiness the challenge

9:01

you then have is if you want to add back in the client's feedback to restart the

9:07

whole waterfall cycle again so the client will come back to you with a list of changes and then you go back and you

9:13

have to start your programming and you have to then start your testing process again and just you're really adding in

9:20

lots of additional time into the project so using waterfall model companies have soon come to realize that you know the

9:26

clients just aren't able to get their feedback in quickly effectively it's very expensive to make changes once the

9:33

teams have started working and the requirement in today's digital world is that solutions simply must be delivered

9:41

faster and this has led for a specific change in agile and we start

## Agile

9:46

implementing the agile model so the agile model allows programmers to create

9:51

prototypes and get those prototypes to the client with the requirements faster

9:56

and the client is able to then send the requirements back to the programmer with feedback this allows us to create what

10:03

we call a feedback loop where we're able to get information to the client and the client can get back to the development

10:10

team much faster typically when we're actually going through this process we're looking at the engagement cycle

10:17

being about two weeks and so it's much faster than the traditional waterfall approach and so we can look at each

10:24

feedback loop as comprising of four key elements we have the planning where we actually sit down with the client and

10:31

understand what they're looking for we then have coding and testing that is building out the code and the solution

10:37

that is needed for the client and then we review with the client the changes that have happened but we do all this in

10:44

a much tighter cycle that we call a sprint and that typically a sprint will last for about two weeks some companies

10:51

run sprints every week some run every four weeks it's up to you as a team to decide how long you want to actually run

10:57

a sprint but typically it's two weeks and so every two weeks the client is able to provide feedback into that loop

11:05

and so you were able to move quickly through iterations and so if we get to the end of sprint two and the client

11:11

says hey you know what we need to make a change you can make those changes quickly and effectively for sprint three

11:18

what we have here is a breakdown of the ceremonies and the approach that you

11:24

bring to agile so typically what will happen is that a product leader will

11:29

build out a backlog of products and what we call a product backlog and this will be just a whole bunch of different

11:36

features and they may be small features or bug fixes all the way up to large features that may actually span over

11:43

multiple sprints but when you go through the sprint planning you want to actually break out the work that you're doing so

11:48

the team has a mixture of small medium and large solutions that they can actually implement successfully into

11:55

their sprint plan and then once you actually start running your sprint again it's a two-week activity you meet every

12:02

single day to with the actual sprint team to ensure that everybody is staying on track and if there's any blockers

12:08

that those blockers are being addressed effectively and immediately the goal at the end of the two weeks is to have a

12:14

deliverable product that you can put in front of the customer and the customer can then do a review the key advantages

12:21

you have of running a sprint with agile is that the client requirements are

12:26

better understood because the client is really integrated into the scrum team

12:32

they're there all the time and the product is delivered much faster than with a traditional waterfall model

12:37

you're delivering features at the end of each sprint versus waiting weeks months

12:42

or in some cases years for a waterfall project to be completed however there

12:48

are also some distinct disadvantages the product itself really doesn't get tested

12:54

in a production environment it's only been tested on the developer computers and it's really hard when you're

13:00

actually running agile for the sprint team to actually build out a solution

13:05

easily and effectively on their computers to mimic the production environment and the developers and the

13:12

operations team are running in separate silos so you have your development team

13:17

running their sprint and actually working to build out the features but then when they're done at the end of

13:22

their sprint and they want to do a release they kind of fling it over the wall at the operations team and then

13:28

it's the operations team job to actually install the software and make sure that

13:33

the environment is running in a stable fashion that is really difficult to do when you have the two teams really not

13:40

working together so here we have is a breakdown of that process with the

13:45

developers submitting their work to the operations team for deployment and then the operations team may submit their

13:52

work to the production service but what if there is an error what if there was a setup configuration error with the

13:58

developers test environment that doesn't match the production environment there may be a dependency that isn't there

14:05

there may be a link to an api that doesn't exist in production and so you

14:10

have these challenges that the operations team are constantly faced with and their challenge is that they

14:16

don't know how the code works so this is where devops really comes in and let's

## DevOps

14:22

dig into how devops which is developers and operators working together is the

14:28

key for successful continuous delivery so devops is as an evolution of the

14:34

agile model the agile model really is great for gathering requirements and for developing and testing out your

14:41

solutions and what we want to be able to do is kind of address that challenge and that gap between the ops team and the

14:47

dev team and so with devops what we're doing is bringing together the operations team and the development team

14:53

into a single team and they are able to then work more seamlessly together

14:59

because they are integrated to be able to build out solutions that are being tested in a production-like environment

15:06

so that when we actually deploy we know that the code itself will work the operations team is then able to focus on

15:13

what they're really good at which is analyzing the production environment and being able to provide feedback to the

15:19

developers on what is being successful so we're able to make adjustments in our

15:24

code that it's based on data so let's step through the different phases of a devops team so typically you'll see that

15:31

the devops team will actually have eight phases now this is somewhat similar to agile and what i'd like to point out at

15:38

time is that again agile and devops are very closely related that agile and

15:44

devops are closely related delivery models that you can use with devops it's

15:49

really just extending that model with the key phases that we have here so let's step through each of these key

15:55

phases so the first phase is planning and this is where we actually sit down with a business team and we go through

16:01

and understand what their goals are the second stage is as you can imagine and this is where it's all very similar

16:07

to agile is that the coders actually start coding but they typically they'll start using tools such as git which is a

16:15

distributed version control software it makes it easier for developers to all be working on the same code base rather

16:22

than bits of the code that is rather than them working on bits of the code that they are responsible for so the

16:30

goal with using tools such as git is that each developer always has the current and latest version of the code

16:37

you then use tools such as mavin and gradle as a way to consistently build

16:42

out your environment and then we also use tools to actually automate our

16:47

testing now what's interesting is when we use tools like selenium and junit is that we're moving into a world where our

16:55

testing is scripted the same as our build environment and the same as using our get environment we can start

17:01

scripting out these environments and so we actually have scripted production environments that we're moving towards

17:08

jenkins is the integration phase that we use for our tools and another pointer

17:14

here is that the tools that we're listing here these are all open source tools these are tools that any team can

17:19

start using we want to have tools that control and manage the deployment of

17:25

code into the production environments and then finally tools such as ansible and chef will actually operate and

17:32

manage those production environments so that when code comes to them that that code is compliant with the production

17:38

environment so that when the code is then deployed to the many different production servers that the expected

17:44

results of those servers which is you want them to continue running is received and then finally you monitor

17:51

the entire environment so you can actually zero in on spikes and issues

17:57

that are relevant to either the code or changing consumer habits on the site so

## DevOps Tools

18:03

let's step through some of those tools that we have in the devops environment so here we have is a breakdown of the

18:10

devops tools that we have and again one of the things i want to point out is that these tools are open source tools

18:17

there are also many other tools this is just really a selection of some of the more popular tools that are being used

18:23

but it's quite likely that you're already using some of these tools today you may already be using jenkins you may

18:29

already be using git but some of the other tools really help you create a fully scriptable environment so that you

18:36

can actually start scripting out your entire dev ops toolset this really helps

18:42

when it comes to speeding up your delivery because the more you can actually script out of the work that

18:48

you're doing the more effective you can be at running automation against those scripts and the more effective you can

18:55

be at having a consistent experience so let's step through this devops process

## Continuous Delivery

19:01

so we go through and we have a continuous delivery which is our plan code build and test environment so what

19:08

happens if you want to make a release well the first thing you want to do is send out your files to the build

19:15

environment and you want to be able to test the code that you've been created because we're scripting everything in

19:21

our code from the actual unit testing being done to the all the way through to

19:26

the production environment because we're testing all of that we can very quickly identify whether or not there are any

19:33

defects within the code if there are defects we can send that code right back to the developer with a message saying

19:39

what the defect is and the developer can then fix that with information that is

19:45

real on the either the code or the production environment if however your

19:51

code passes the scripting test it can then be deployed and once it's out to

19:56

deployment you can then start monitoring that environment what this provides you

20:01

is the opportunity to speed up your delivery so you go from the waterfall

20:07

model which is weeks months or even years between releases to agile which is

20:14

two weeks or four weeks depending on your sprint cadence to where you are today with devops where you can actually

20:21

be doing multiple releases every single day so there are some significant

## Advantages

20:26

advantages and there are companies out there that are really zeroing in on

20:32

those advantages if we take any one of these companies such as google google

20:38

any given day will actually process 50 to 100 new releases on their website

20:45

through their devops teams in fact they have some great videos on youtube that you can find out on how their dev op

20:51

teams work netflix is also a similar environment now what's interesting with netflix is that netflix have really

20:59

fully embraced devops within their development team and so they have a devops team and netflix is a completely

21:07

digital company so they have software on phones on smart tvs on computers and on

21:13

websites interestingly though the devops team for netflix is only 70 people and

21:20

when you consider that a third of all internet traffic on any given day is from netflix it's really a reflection on

21:27

how effective devops can be when you can actually manage that entire business with just 70 people so there are some

21:34

key advantages that devops has it's the actual time to create and deliver software is dramatically reduced

21:41

particularly compared to waterfall complexity and maintenance is also reduced because you're automating and

21:47

scripting out your entire environment you're improving the communication between all your teams so teams don't

21:53

feel like they're in separate silos but that are actually working cohesively together and that there is continuous

22:00

integration and continuous delivery so that your consumer your customer is

22:05

constantly being delighted today we'll see how to install a very popular

## Overview

22:11

continuous integration tool called jenkins on windows first we'll see how to install java

22:18

development kit jdk is one of the prerequisites you need in order to run gen kits

22:23

then we set up the jtk path in the environment variable after that we'll see how to download and install jenkins

22:31

on windows once that's complete we'll run jenkins on localhost 8080 which is the default

22:38

port for running jenkins then we'll have a glance at the jenkins server interface

22:43

and look at some of features present on jenkins finally we learn how to build and run a

22:49

job in jenkins to download and install jtk simply type install jdk on google and click on the

## Install JDK

22:56

first link which is java s8 development kit 8.

23:01

as you can see we get a list of downloads for jdk since i'm on a windows 64-bit system i've already installed jdk

23:10

version for windows 64. before you install jdk you also need to accept the

23:15

license agreement let me show you where my jdk has been installed

23:21

first i go to my c drive program files under the java folder you find two more

23:27

folders that's jdk and gre now let's set up the path in the environment variable

23:33

go to system properties under the advanced tab select environment variables

23:39

under system variables there are two more variables called java home and jre

23:44

home java home contains the path for jdk i'll show you where it is go to jtk

23:50

folder copy the path and paste it in the value section gre home contains the path for

23:56

jre similarly go to the gre folder copy the path and paste it in the corresponding

24:03

value one more thing you need to do is set up the bin folder location for jdk

24:08

in path variables let's see where the bin folder location is

24:19

here it is after setting up the location

24:25

click ok to finish the setup now shall we check if java has been successfully installed for that go to

24:32

the command prompt and type java hyphen version

24:42

you can see our java is successfully installed and it's up and running the version we've installed is shown here

## Download Jenkins

24:50

now let's download jenkins on windows simply type download jenkins on google

24:55

and click on the first link here we can see that jenkins provides

25:01

two types of releases long term support release and weekly release as i'm interested in a more stable

25:08

release so i will go for lts now when i scroll down i'll get an

25:13

option for windows once i select that

25:19

a stable installer starts to download you can see it says thank you for

25:26

downloading windows table installer so now our jenkins has started downloading this might take a few

25:32

seconds till then maybe you can catch up if you're left behind

25:44

okay so the download is complete now let's go ahead and unzip downloaded

25:51

jenkins file

25:58

after the unzipping has been done we'll start the installation click on this folder

26:06

click run

26:11

next this is the default path where jenkins will be installed we don't need to change it so we can just go ahead with

26:18

next install after this jenkins installation is successfully completed

26:27

select finish yes that's all now that installation is complete let's

## Explore Jenkins

26:33

go and explore jenkins go to your web browser and search localhost colon8080

26:42

you can see that it says welcome to jenkins so i have already created a username and

26:47

password for jenkins i'll enter my credentials

26:57

and that's all this is how the jenkins homepage and interface looks like

27:02

and that's all signing in yes so that's the dashboard and this is

27:08

how the jenkins homepage and interface looks like so if you're installing

27:13

jenkins for the very first time it will ask you to install some recommended plugins i've already installed mine so i

27:21

don't need to install them once again now there are a lot of things you can do in jenkins let me run you through a few

27:27

of them there's some jobs that i've already created and run this is new item it allows you to create

27:35

a new project so you can create a freestyle project a maven project

27:40

a build pipeline etc then going back to the dashboard there is

27:46

build history so this section shows you the status of your build here you can see what's the built name the time since

27:53

the build is running and what's the status of your build there is another very important section

27:59

called manage jenkins here you can configure your system you

28:05

can configure global security credentials then there's some global tool configuration you can also download

28:12

and manage your plugins here you can see there are four tabs where you have some updates you have

28:18

some available plugins you have the plugins that you've already installed

28:25

and then there's advanced plugin as well now let me show you how to create and

28:30

run a job in jenkins so coming back to the dashboard let me select new item we can name our job here

28:38

let me name the job as jenkins demo i will create a freestyle project so

28:45

select that and click ok this might take a few seconds

28:51

so when we have created that here we have a number of options that we can go ahead with you have your source

28:58

code management building triggers building environment and then of course some post-built actions

29:06

so that's about creating and running a job on jenkins let's give some description to our job so we have create

29:13

the job we give description something like this is my first jenkins job

29:22

so we will not use any source code management tool in the build section as you can see

29:28

there is an option to execute windows batch command

29:35

click on that and here you can give your command let's use the echo command

29:41

i will write something like hello this is my first jenkins demo

29:50

and then i'll also give the date and time parameters so that i can track on

29:56

what date and time this job was built that's it so click apply and then save

30:08

okay so this job is created now let's build it go to build now

30:16

once you click it you can see a built history has been created click on that

30:23

in the console output you can see the output of your very first jenkins job it

30:30

says hello this is my first jenkins demo what you gave in the command box you can see that and you can also see the date

30:37

date and time when this job was created so we've successfully created our first

30:42

jenkins job hello this is matthew from simply learn and today we're going to deep dive into

30:49

what jenkins is and how it improves your devops continuous integration environments

30:55

so this is what we're going to be covering in this session we're going to cover what life is like before using jenkins and the issues that jenkins

31:02

specifically addresses then we'll get into what jenkins is about and how it applies to continuous integration and

31:09

the other continuous integration tools that you need in your devops team then specifically we'll deep dive into

31:15

features of jenkins and the jenkins architecture and we'll give you a case study of a company that's using jenkins

31:22

today to actually transform how their i.t organization is operating so let's

## Life Before Jenkins

31:28

talk a little bit about life before jenkins let's see this scenario i think it's something that maybe all of you can

31:34

relate to as developers we all write code and we all submit that code into a

31:40

code repository and we all keep working away writing our unit tests and hopefully we're running our unit tests

31:46

but the problem is that the actual commits that actually gets sent to the code repository aren't consistent you as

31:53

a developer may be based in india you may have another developer that's based in the philippines and you may have

31:58

another team lead that's based in the uk and another development team that's based in north america so you're all

32:06

working at different times and you have different amounts of code going into the code repository there's issues with the

32:12

integration and you're kind of running into a situation that we like to call

32:17

development hell where things just aren't working out and there's just lots of delays being added into the project

32:24

and the bugs just keep mounting up the bottom line is the project is delayed

32:30

and in the past what we would have to do is we'd have to wait until the entire software code was built and tested

32:36

before we could even begin checking for errors and this just really kind of increase the amount of problems that

32:42

you'd have in your project the actual process of delivering software was slow there was no way that

32:49

you could actually iterate on your software and you just ended up with just a big headache with teams pointing

32:56

fingers at each other and blaming each other so let's jump into jenkins and see what

## What is Jenkins

33:01

jenkins is and how it can address these problems so jenkins is a product that comes out

33:07

of the concept of continuous integration that you may have heard of as power developers where you'd have two

33:13

developers sitting next to each other coding against the same piece of information what they were able to do is

33:19

to continuously develop their code and test their code and move on to new

33:25

sections of code jenkins is a product that allows you to expand on that

33:30

capacity to your entire team so you're able to submit your codes consistently into a source code environment

33:37

so there are two ways in which you can do continuous delivery one is through 90 builds and one is through continuous

33:45

so the approach that you can look at continuous delivery is modifying the

33:50

legacy approach to building out solutions so what we used to do is we would wait for nightly builds and the

33:55

way that our nightly builds would work and operate is that as co-developers we would all run and have a cut-off time at

34:02

the end of the day and that was consistent around the world that we would put our codes into a single

34:08

repository and at night all of that code would be run and operated and tested to

34:13

see if there were any changes and a new build would be created that would be referred to as the nightly build with

34:19

continuous integration we're able to go one step further we're able to not only

34:24

commit our changes into our source code but we can actually do this continuously there's no need to race and have a team

34:31

get all of their code in an arbitrary time you can actually do a continuous release because what you're doing is

34:37

you're putting your tests and your verification services into the build environment so you're always running

34:44

cycles to test against your code this is the power that jenkins provides in

34:49

continuous integration so let's dig deeper into continuous integration so the concept of continuous integration is

## Continuous Integration

34:57

that as a developer you're able to pull from a repository the code that you're working on and then you'll be able to

35:02

then at any time submit the code that you're working on into a continuous integration server and the goal of that

35:10

continuous integration server is that it actually goes ahead and validates and passes any tests that a tester may have

35:17

created now if on the continuous integration server a test isn't passed then that

35:22

code gets sent back to the developer and the developer can then make the changes it allows the developer to actually do a

35:29

couple of things it allows the developer not to break the build and we all don't want to break the builds that are being

35:35

created but it also allows the developer not to actually have to run all the tests locally on their computer write

35:43

tests particularly if you have a large number of tests can take up a lot of time so if you can push that service up

35:49

to another environment like a continuous integration server it really improves the productivity of your developer

35:56

what's also good is that if there are any code errors that have come up that may be beyond just the standard ci test

36:03

so maybe there's a code the way that you write your code isn't consistent those errors can then be passed on easily from

36:10

the tester back to the developer too the goal from doing all this testing is that

36:16

you're able to release and deploy and your customer is able to get new code faster and when they get that code it

36:24

simply just works so let's talk a little bit about some of the tools that you may have in your

## Continuous Integration Tools

36:30

continuous integration environment so the cool thing with working with continuous integration tools is that

36:37

they are all open source at least the ones that we have listed here are open source there are some that are private

36:43

but typically you'll get started with open source tools and it gives you the opportunity to understand how you can

36:50

accelerate your environment quickly so bamboo is a continuous integration tool

36:55

that specifically runs multiple builds in parallel for faster compilation so if

37:00

you have multiple versions of your software that runs on multiple platforms

37:06

this is a tool that really allows you to get that up and running super fast so that your teams can actually test how

37:12

those different builds would work for different environments and this has integration with and maven and other

37:18

similar tools so one of the tools you're going to need is a tool that allows you to automate the software build test and

37:24

release process and buildbot is that open source product for you again it's

37:29

an open source tool so there's no license associated with this so you can actually go in and you can actually get

37:36

the environment up and running and you can then test for and build your environment and create your releases

37:42

very quickly so buildbots also written in python and it does support parallel

37:47

execution jobs across multiple platforms if you're working specifically on java

37:52

projects that need to be built and test then apache gump is the tool for you it makes all of those projects really easy

37:59

it makes all the java projects easier for you to be able to test with api level and functionality level testing so

38:07

one of the popular places to actually store code and create a versioning of your code is github and it's a service

38:14

that's available on the web just recently acquired by microsoft if you are storing your projects in github then

38:22

you'll be able to use travis continuous integration or travis ci and it's a tool designed specifically for hosted github

38:29

projects and so finally we're covering jenkins and jenkins is a central tool for

38:35

automation for all of your projects now when you're working with jenkins sometimes you'll find there's

38:41

documentation that refers to a product called hudson hudson is actually the original version of the product that

38:48

finally became jenkins and it was acquired by oracle when that acquisition

38:54

happened the team behind um hudson was a little concerned about the direction that oracle may potentially go with

39:01

hudson and so they created a hard fork of hudson that they renamed jenkins and

39:06

jenkins has now become that open source project it is one of the most popular and continuously contributed projects

39:13

that's available as open source so you're always getting new features being added to it it's a tool that really

39:19

becomes the center for your ci environment so let's jump into some of those really

## Jenkins Features

39:25

great features that are available in jenkins so jenkins itself is really comprised of five key areas around easy

39:32

installation easy configuration plugins extensibility and distribution so as i

39:38

mentioned for the easy installation jenkins is a self-contained java program

39:44

and that allows it to run on most popular operating systems including windows mac os and unix you even run it

39:52

on linux it really isn't too bad to set up it used to be much harder than it is today

39:58

the setup process has really improved the web interface makes it really easy for you to check for any errors in

40:05

addition you have great built-in help one of the things that makes tools like

40:11

jenkins really powerful for developers and continuous integration teams in your devops teams as a whole when you have

40:18

plugins that you can then add in to extend the base functionality of the

40:23

product jenkins has hundreds of plugins and you can go and visit the update center and see which other plugins that

40:30

be good for your devops environment certainly check it out there's just lots of stuff out there in addition to the

40:37

plug-in architecture jenkins is also extremely extensible the opportunity for

40:43

you to be able to configure jenkins to fit in your environment is almost endless now it's really important to

40:50

remember that you are extending jenkins not creating a custom version of jenkins

40:55

and that's a great differentiation because the core foundation remains as the core jenkins product the

41:01

extensibility can then be continued with newer releases of jenkins so you're always having the latest version of

41:08

jenkins and your extensions mature with those core foundation the distribution

41:14

and the nature of jenkins makes it really easy for you to be able to have it available across your entire network

41:20

it really will become the center of your ci environment and it's certainly one of

41:26

the easier tools and more effective tools for devops so let's jump into the standard jenkins

## Jenkins Pipeline

41:33

pipeline so when you're doing development you start off and you're coding away on your computer the first

41:39

thing you have to do when you're working in the jenkins pipeline is to actually commit your code now as a developer this

41:45

is something that you're already doing or at least you should be doing you're committing your code to a git server um

41:50

or to an svn server or a similar type of service so in this instance you'll be using jenkins as the place for you to

41:58

commit your code jenkins will then create a build of your code and part of

42:03

that build process is actually going through and running through tests and again as a developer you're already

42:09

comfortable with running unit tests and writing those tests to validate your code but there may be additional tests

42:16

that jenkins is running so for instance as a team you may have a standard set of

42:21

tests for how you actually write out your code so that each team member can understand the code that's been written

42:28

and those tests can also be included in the testing process within the jenkins

42:33

environment assuming everything past the the tests you can then get everything

42:38

placed in a stage and release ready environment within jenkins and finally

42:44

again ready to deploy or deliver your code to a production environment jenkins is going to be the tool that helps you

42:50

with your server environment to be able to deploy your code to the production environment and the result is that

42:57

you're able to move from a developer to production code really quickly this

43:02

whole process can be automated rather than having to wait for people to actually test your codes or go through a

43:09

nightly build you're looking at being able to commit your code and go through this testing process and release process

43:15

continuously as an example companies etsy will release up to 50 different

43:20

versions of their website every single day so let's talk about the architecture

## Jenkins Architecture

43:27

within jenkins that allows you to be so effective at applying a continuous delivery devops environment so the

43:34

server architecture really is broken up into two sections on the left hand side

43:40

of the section you have the code the developers are doing and submitting that code to a source code repository and

43:47

then from then jenkins is your continuous integration server and it will then pull any code that's been sent

43:53

to the source code repository and will run tests against it it will use a build

43:59

server such as maven to actually then build the code and every single stage that we have that jenkins manages there

44:05

are constant tests so for instance if a build fails that feedback is sent right back to the developers so that they can

44:12

then change their code so that the build environment can run effectively

44:17

the final stage is to actually execute specific test scripts and these test groups can be written in selenium so

44:24

it's probably good to mention here that both mavin and selenium are plugins that run in the jenkins environment so before

44:32

we were talking about how jenkins can be extended with plugins mavin and selenium are just two very popular examples of

44:38

how you can extend the jenkins environment the goal to go through this whole process again is an automated

44:45

process is to get your code from the developer to the production server as quickly as possible have it fully tested

44:52

and have no errors so it's probably important at this point to mention uh

44:57

one piece of information around the jenkins environment that if you have different code builds that need to be

45:04

managed and distributed this will require that you need to have multiple

45:09

builds being managed jenkins itself doesn't allow for multiple files and

45:15

builds to be executed on a single server you need to have a multiple server environment with running different

45:21

versions of jenkins for that to be able to happen so let's talk a little bit about the master slave architecture

## Masterslave Architecture

45:28

within jenkins so what we have here is an overview of the master slave

45:33

architecture within jenkins on the left hand side is the remote source code

45:38

repository and that remote source code repository could be github or it could

45:44

be team foundation services or the new azure devops code repository or it could

45:50

be your own git repository the jenkins server acts as the master environment on

45:56

the left hand side and that master environment can then push out to multiple other jenkins slave

46:03

environments to distribute the workload so it allows you to run multiple builds

46:09

and tests and production environments simultaneously across your entire architecture so jenkins slaves can be

46:17

running the different build versions of the code for different operating systems and the server master is controlling how

46:25

each of those builds operate so let's step into a quick story of a company

## Use Case Story

46:31

that has used jenkins very successfully so here's a use case scenario over the

46:37

last 10 or 15 years there has been a significant shift within the automotive

46:43

industry where manufacturers have shifted from creating complex hardware

46:48

to actually creating software we've seen that with companies such as tesla

46:54

where they are creating software to manage their cars we see the same thing with companies such as general motors

47:00

with their onstar program and ford just recently have rebranded themselves as a

47:06

technology company rather than just a automotive company what this means

47:12

though is that the software within these cars is becoming more complex and

47:17

requires more testing to allow more capabilities enhancements to be added to

47:23

the core software so bosch is a company that specifically ran into this problem

47:30

and their challenge was that they wanted to be able to streamline the increasingly complex automotive software

47:37

by adopting continuous integration and continuous delivery best practices with

47:42

the goal of being able to delight and exceed the customer expectations of the

47:49

end user so bosch has actually used cloudbees which is the enterprise jenkins environment so to be able to

47:57

reduce the number of manual steps such as building deploying and testing bosch

48:02

has introduced the use of cloud b's from jenkins and this is part of the

48:07

enterprise jenkins platform it has significantly helped improve the

48:12

efficiencies throughout the whole software development cycle from automation stability and transparency

48:21

because jenkins becomes a self-auditing environment now the results have been

48:27

tangible previously it took three days before a bill process could be done and

48:33

now it's taken that same three-day process and reduced it to less than three hours that is significant

48:40

large-scale deployments are now kept on track and have expert support and there

48:45

is clear visibility and transparency across the whole operations through

48:51

using the jenkins tools hello and welcome to continuous integration tutorial using jenkins my

## Introduction to Jenkins

48:57

name is chidanand and i am with the simply learn team today let's get started with jenkins jenkins in my

49:03

opinion is one of the most popular continuous integration servers of recent times what began as a hobby project by a

49:10

developer working for sun microsystems way back in early or mid-2000s has

49:16

gradually and eventually evolved into very very powerful and robust automation servers it has a wide adoption since it

49:23

is released under mit license and is almost free to use jenkins has a vast developer community

49:29

that supports it by writing all kinds of plugins plugins is the heart and soul of jenkins because using plugins one can

49:36

connect jenkins to anything and everything under the sun with that introduction let's get into

## What will be covered

49:42

what all will be covered as a part of this tutorial i will get into some of the prerequisites required for

49:48

installing jenkins post which i will go ahead and install jenkins on a windows box there are a few first time

49:54

configuration that needs to be done and i will be covering those as well so once i have jenkins installed and configured

49:59

properly i will get into the user administrative part i create few users and i will use some plugins for setting

50:06

up various kinds of access permissions for these users i will also put in some freestyle jobs freestyle job is nothing

50:13

but a very very simple job and i will also show you the powerfulness of jenkins by scheduling this particular

50:20

job to run based upon time schedule i will also connect jenkins with github

50:25

github is our source code where source code repository where i've got some repositories put up there so using

50:31

jenkins i will connect to github pull up a repository that is existing on github onto the jenkins box and run few

50:38

commands to build this particular repository that is pull from github sending out emails is a very very

50:44

important configurations of jenkins or any other continuous integration server for that matter whenever there is any

50:50

notifications that has to be sent out as a part of either a build going bad or built being good or built being

50:56

propagated to some environment and all these scenarios you would need the contains integration servers to be

51:01

sending out notifications so i will get into a little bit details of how to configure jenkins for sending out emails

51:08

i will also get into a scenario where i will have a web application a maven based java web application which will be

51:14

pulled from a github repository and i will deploy it onto a tomcat server the tomcat server will be locally running on

51:21

my system eventually i will get into one other very very important topic which is the master slave configuration it's a

51:27

very very important and pretty interesting topic where distributed builds is achieved using a master slave

51:33

configuration so i will bring up a slave i will connect the slave with the master and i will also put in a job and kind of

51:39

delegate that particular job to the slave configuration finally i will let you know how to use some plugins to

51:46

backup your jenkins so jenkins has got a lot of useful information set up on it in terms of the build environments in

51:52

terms of workspace all this can be very very easily backed up using a plugin so

51:57

this is what i'm going to be covering as a part of this tutorial jenkins is a web application that is written in java and

52:03

there are various ways in which you can use and install jenkins i have listed popular three mechanisms in which

52:10

jenkins is usually installed on in any system the topmost one is as a windows or a linux based services so if at all

52:16

you have windows like the way i have and i'm going to use this mechanism for this demo so i would download a msi installer

52:22

that is specific to jenkins and install this service so whenever i install as a service it goes ahead and nicely

52:28

installs all that is required for my jenkins and i have a service that can be started or stopped based upon my need

52:34

any flavor of linux as well one other way of running jenkins is downloading this generic war file and as long as you

52:40

have jdk installed you can launch this war file by the command opening up a command prompt or shell prompt referral

52:46

on linux box specifying java hyphen jar and the name of this war file it typically brings up your web application

52:52

and you know you can continue with your installation the only thing being if at all you want to stop using jenkins you just go ahead and close this prompt you

52:59

either do a ctrl c and then bring down this prompt and your jenkins server would be down other older versions of

53:04

jenkins were run popularly using this way in which you already have a java based web server running up and running

53:11

so you kind of drop in this war file into the root folder or the httpd root folder of your web server so jenkins

53:17

would explode and kind of bring up your application all user credentials or user

53:22

administration is all taken care of by the apache or the tomcat server or the web server on which jenkins is running

53:28

this wasn't a very older way of running but still some people use it because if they don't want to maintain two servers

53:33

if they already have a java web server which it's being nicely maintained and backed up jenkins can run attached to it

53:40

all right so either ways it doesn't matter however you're going to bring up your jenkins instance the way we're going to operate jenkins is all going to

53:46

be very very same or similar one with the subtle changes in terms of user administration if at all you're

53:52

launching it through any other web server which will take care of the user administration otherwise all the commands or all the configuration or the

53:58

way in which i'm going to run this demo it is going to be same across any of these installations all right so the

## Prerequisites

54:04

prerequisites for running jenkins as i mentioned earlier jenkins is nothing but a simple web application that is written

54:09

in java so all that it needs is java preferably jdk 1.7 or 1.8 2gb ram is the

54:17

recommended ram for running jenkins and also like any other open source tool sets when you install jdk ensure that

54:25

you set in the environment variable java home to point to the right directory this is something very specific to jdk

54:32

but for any other open source tools that you've installed there is always a preferred environment variable that you

54:38

got to set in which is specific to that particular tool that you're going to use this is a generic thing that is there

54:43

for you know for any other open source projects because the way open source projects discover themselves is using

54:48

this environment variables so as a general practice or a good practice always set these environment variables

54:54

accordingly so i already have jdk 1.8 installed on my system but in case you

54:59

do not what i would recommend is just navigate on your browser to the oracle home page and just type in or search for

55:06

install jdk 1.8 and navigate to the oracle home page

55:13

you'll have to accept the license agreement and there are a bunch of installers that is okay that you can

55:19

pick up based upon the operating system on which you're running so i have this windows 64 installer that is

55:25

already installed and running on my system so i will not get into the details of downloading this or installing it let me show you once i

55:32

install this what i've done with regard to my path so if you get into this environment

55:38

variables all right so i have just set in a java home variable

55:45

if you see this column program files java jdk 1.8 this is where my my java is

55:51

located c program files c program files java

55:58

okay so this is the home directory of my jdk so that is what i have been i have set it up here in my environment

56:05

variable so if you see here this is my java home

56:12

alright one other thing to do is ensure that in case you want to run java or java c from a command prompt ensure that

56:19

you also add that path into this path variable so if you see this

56:24

somewhere i will see yes there you go c colon program files java jdk 1.8 pin so

56:30

with these two i'll ensure that my java installation is nice and you know good

56:35

enough so to check that to double check that or to verify that let me just open up a simple command prompt

56:42

and if i type in java iphone version all right

56:47

and java c iphone version so the compiler is on the path java is

56:53

on the path and if at all i do this the environment variable specific to my

56:59

java is installed correctly so i am good to go ahead with my jenkins installation

57:06

now that i have my prerequisites all set for installing jenkins let me just go ahead and download jenkins

57:13

so let me open up a browser and say download jenkins

57:22

all right lts is nothing but the long term support these are all stable versions weeklies i would not recommend

57:28

that you try these unless until you have a real need for that long term support is good enough and as

57:34

i mentioned there are so many flavors of jenkins there is available for download

57:39

you also have a docker container wherein you know you can launch jenkins as a container but i'll not get into details

57:45

of that in this tutorial all right so what i want is yes this is the war file which is

57:50

generic war file that i was talking to you earlier and this is the windows msi installer so go ahead and download this

57:56

msi installer i already have that downloaded so let me just open that up

58:02

all right so this is my downloaded jenkins instance or rather installer this is a pretty

58:09

maybe a few months old but this is good enough for me before you start jenkins installation

## Jenkins Home

58:15

just be aware of one fact that there is a variable called jenkins home this is where jenkins would store all this

58:21

configuration data jobs project workspace and all that specific to jenkins so by default if at all you

58:27

don't set this to any particular directory if at all you install an msi installer all your installation gets

58:33

into sql and program files 86 and jenkins folder if at all you run a war

58:38

file depending upon the user id with which you're running your war file the jenkins folder there's a dot jenkins

58:44

folder that gets created inside the user home directory so in case you have any need wherein you want to back up your

58:51

jenkins or you want jenkins installations to get into some specific directories go ahead and set this jenkins home variable accordingly before

58:58

you even begin your installation for now i don't need to do any of these things so i've already downloaded the installer

59:03

let me just go ahead with the default installation all right so this is my jenkins msi

59:09

installer i would just i don't want to make any changes into the jenkins configuration c colon program files is

59:15

good for me yeah this is where all my destination folder and all the configuration specific to it goes i'm

59:21

happy with this i don't want to change this i would just say go ahead and click installation

59:34

okay so what typically happens once the jenkins installation gets through is it'll start installing itself and there

59:40

are some small checks that needs to be done so and by default jenkins launches on the port 8080 so let me just open up

59:47

localhost 8080. there's a small checking that will be

59:53

done as a part of the installation process wherein i need to type in the hash key all right so there's a very

59:59

very simple hash key that gets stored out here so i'll have to just copy this path

1:00:07

if i told you you're running as a war file you would see that in your logs

1:00:12

all right so this is a simple hash key that gets created every time when you do a jenkins station so as a part of the

1:00:18

installation it just asks you to do this so if that is not great it will crib

1:00:25

about it but this looks good so it's going ahead

1:00:31

all right one important part during the installation so you would need to install some

1:00:36

recommended plugins what happens is the plugins are all related to each other so it's like the

1:00:42

typical rpm kind of a problem where you try to install some plugin and it's got a dependency which is not installed and

1:00:47

you get into all those issues in order to get rid of that what jenkins recommends there's a bunch of plugins

1:00:52

that is already recommended so just go ahead and blindly click that install recommended plugin so if you see

1:00:59

there is a whole lot of plugins which are bare essential plugins that is required for

1:01:04

jenkins in order to run properly so jenkins as a part of the installation would get all these plugins and then

1:01:11

install it for you this is a good combination to kind of begin with and mind you at this moment

1:01:17

jenkins needs lots of bandwidth in terms of network so in case your your network is not so good

1:01:24

few of these plugins would kind of fail and these plugins are all you know on available on openly

1:01:30

or or mirrored sites and sometimes some of them may be down so do not worry in case some of these plugins kind of fail

1:01:37

to install you'll get an option to kind of retry installing them but just ensure that you know at least most or 90 95 of

1:01:44

all these plugins are installed without any problems let me pause the video here for a minute and then get back once all

1:01:51

these plugins are installed my plugin installation is all good there was no failures in any of my plugins so

1:01:57

after that i get to create this first admin user again this is one important point that you got to remember

1:02:03

in given any username and password but ensure that you kind of remember that because it's very hard to get back your

1:02:09

username and password in case you forget it alright so i'm going to create a very very simple username and password

1:02:18

something that i can remember i will that's my name and um an email id is

1:02:26

kind of optional but it doesn't allow me to go ahead in case i don't so i just given an admin and i got a password i've

1:02:33

got i remember my password this is my full name all right i say save and finish

1:02:42

all right that kind of completed my jenkins installation it was not that tough was it

1:02:50

now that i have my jenkins installed correctly let me quickly walk you through some bare minimal configurations

1:02:56

that is required these are kind of a first time configuration that is required so and also let me warn you the

1:03:02

ui is little hard for many people to wrap their head around it specifically the windows guys but if at all you're a

1:03:09

java guy you know how painful it is to write ui in java you will kind of appreciate you know all the effort that

1:03:14

has gone into the ui bottom line you are a little hard to you know wrap your head around it but once you start using it

1:03:21

possibly you'll start liking it all right so let me get into something called as manage and cans

1:03:28

this can be viewed like a main menu for all jenkins configuration

1:03:33

so i'll get into some of those important ones something called as configure system configure system this is where you kind

1:03:39

of put in the configuration for your complete jenkins instance few things to kind of look out for this is a home

1:03:45

directory this is a java home where all the configurations all the workspace

1:03:50

anything and everything regarding jenkins is stored out here system message you want to put in some

1:03:55

message on the system you just type in whatever you want and it's probably show up somewhere up here on the menu number

1:04:01

of executors very very important configuration this just lets jenkin know at any point

1:04:07

in time how many jobs or how many threads can be run you can kind of visualize it like a thread that can be

1:04:14

run on this particular instance as a thumb rule if at all you're on a single core system number of executors two

1:04:21

should be good enough in case at any point in time if there are multiple jobs that kind of get

1:04:26

triggered the same time in case the number of executors are less compared to the number of jobs that have there to woken up no need to panic because they

1:04:34

will all get queued up and eventually jenkins will get to running those jobs just bear in mind that whenever a new

1:04:40

job kind of you know gets triggered the cpu usage and the memory usage in terms of the disk right is very high on the

1:04:47

jenkins instance so that's something that you got to kind of keep in mind all right but number of

1:04:52

executors 2 for my system is kind of good label for my jenkins i don't want any of these things usage how do you

1:04:58

want to use your jenkins this is good for me because i only have a primary server that is running so i want to use

1:05:04

this node as much as possible quite pretty each of these options have got some pair minimal

1:05:11

help kind of a thing that is that is out here by clicking on these question marks you will get to know as to what are

1:05:16

these particular configurations all right so this all look good what i

1:05:21

want to show you here is there's something regarding the docker timestamps git plugin svn

1:05:28

email notifications i don't want that what i want the yes i want this smtp server configuration

1:05:35

remember i mentioned earlier that i would want jenkins to be sending out some emails and what i've done here is

1:05:41

i've just configured the smtp details of my personal email id in case you're in a in organization you

1:05:48

would have some sort of an email id that is set up for a jenkins server so you can specify the smtp server details of

1:05:55

your company so that you know you can authorize jenkins to kind of send out emails

1:06:00

but in case you want to try it out like me i have configured my personal email id which is on my gmail for sending out

1:06:08

notifications so the smtp server would be smtp.gmail.com i'm using the smtp

1:06:13

authentication i have provided my email id and my password i'm using the smtp port which is 465 and i'm you know reply

1:06:20

to address is the same as mine i can just send out an email and see if at all this configuration

1:06:28

works again gmail would not allow you to allow anybody to send out notifications

1:06:33

on your behalf so you'll have to lower the security level of your gmail id so that you can allow a programmatically

1:06:40

somebody to send out email notifications on your behalf so i've done already that i'm just trying to see if i can send a

1:06:45

test email with the configuration that i've set in yes

1:06:51

all right so the email configuration looks good so this is how you configure your uh you

1:06:56

know your gmail account in case you want to do that if not put in your organization smtp server details which

1:07:02

are for the valid username and password and it should all be set all right so no other configurations

1:07:07

that i'm going to change here all of these look good all right so i come back to managing

1:07:13

kens okay one other thing that i want to kind of go over is the global tool configuration

1:07:19

imagine this scenario look at it this way jenkins is a is a continuous integration server it doesn't know what

1:07:27

kind of a code base it's going to pull in what kind of a tool set that is required or what is the code that is

1:07:32

going to pull in and how is it going to build so you would have to put in all the tools that is required for building

1:07:39

the appropriate kind of code that you're going to pull in from you know your source code repositories so just to give

1:07:45

you an example in case your source code is a java source code and assuming that you know because in this demo this is my

1:07:52

laptop and i've put in all the configurations jdk everything on my laptop because i'm a developer i'm

1:07:57

working on the laptop but my continuous integration server would be you know a separate server without anything being

1:08:04

installed on it so in case i want jenkins to you know run a java code i

1:08:10

would need to install jdk on it i need to specify the jdk location of this out here this way

1:08:17

okay since i already have the jdk installed and i've already put in the java home directory or rather at the

1:08:23

environment variable correctly i don't need to do it git if at all i want the jenkins server to use git git is a you

1:08:30

know command bash or the command prompt for for running git and connecting to any other git server so you would need

1:08:37

git to be you know installed on that particular system and set the path accordingly

1:08:43

gradle and maven if at all you have some mavens as well you want to do this any other tool that you're going to install

1:08:50

on your system which is your continuous integration server you will have to come in here and configure something

1:08:56

in case you don't configure it when jenkins runs it will not be able to find these tools for building your task

1:09:03

and it'll crib about it that's good i don't want to save anything manage jenkins let me see what else is

1:09:10

required yes configure global security all right the security is enabled and if

1:09:16

you see by default it's the security access control is set to jenkins own

1:09:21

user database so what does this mean you know jenkins by default it uses file

1:09:27

system where it stores all the user names which hashes up these user names and kind of stores them

1:09:32

so as of now it jenkins is configured to use its own database assuming that you

1:09:37

are running in an organization you would probably want to have a you know some sort of an ad or an ldap server using

1:09:44

which you would want to control access to your jenkins repository rather jenkins tool

1:09:50

so you would specify your ldap server details the root dn password or the manager dn and the

1:09:55

manager password and all these details in case you want to connect your jenkins instance with your ldap or ad or any of

1:10:03

the authentication servers that you have in your organization but for now since i don't have any of

1:10:09

these things i'm going to use this own database that's good enough all right so i will set up some

1:10:14

authorization methods and stuff like that once i put in few jobs so for now let me not get into any of these details

1:10:21

of this just be aware that jenkins can be connected for authorization to an ldap server or you can have jenkins

1:10:27

managing its own servers which is happening as of now so i'm going to save all this stuff that's good for me so enough of all

1:10:34

these configurations let me put in a very very simple job all right so job new item you know

1:10:41

little difficult to kind of figure out but then that's the new item so i'll just say you know first job this is good

1:10:47

for me i just give a name for my job i would say it's a freestyle project that's good enough for me i don't want

1:10:53

to choose any of that so unless until you choose any of this this particular button would not become active so choose

1:10:59

the freestyle project and say ok at a very high level you would see

1:11:05

general source code management build triggers build environment build and post build in case you install more and

1:11:12

more plugins you will see a lot more options but for now this is what you would see so what am i doing at the

1:11:17

moment i'm just putting up a very very simple job and the job could be anything and everything so i don't want to put in

1:11:24

a very complicated job for now for the demo let me just put in a very very simple job i'll give a description

1:11:30

this is an optional thing this is my first jenkins job all right

1:11:36

i don't want to choose any of these again there are some helps available here

1:11:42

i don't want to choose any of this i don't want to connect it into any source code for now

1:11:47

i don't want any triggers for now i'll come back to this in a while build the environment i don't want any build

1:11:52

environment as a part of this build step you know i just want to you know run few things so that i kind of complete this

1:11:59

particular job so since i'm on a windows box i would say execute windows batch

1:12:05

command all right so what do you want to do i would let me just echo something echo

1:12:10

uh hello this is my first jenkins job

1:12:16

and possibly i would want the date and the timestamp pertaining to the job i mean the date

1:12:24

and time in which this job was run all right very very simple command that says you know this is my first job it just

1:12:30

puts out something along with the date and the time all right i don't want to do anything else i want to keep this job as simple

1:12:36

as this so let me save this job all right so once i save this job you

1:12:42

know the job names comes up here and then i need to build this job and you would see some build stray out here

1:12:48

nothing is there as of now because i've just put in a job i have not run it yet all right so let me try to build it now

1:12:56

you see a build number you will see a date and a time stamp so if i click on this you will see a console output if i

1:13:02

go here okay as simple as that and where is all

1:13:09

the job details that is getting into if you see this

1:13:15

if i navigate to this particular directory all right so this is the directory what

1:13:20

i was mentioning earlier regarding jenkins home so all the job related stuff that is

1:13:26

specific to this particular jenkins installation is all here

1:13:32

all the plugins that is installed the details of each of those plugins can be found here all right so the workspace is where all

1:13:39

the jobs that i've created whichever i'm running would be wrong there will be individual folders specific to the jobs

1:13:45

that has been put up here all right so one job one quick run that's what it looks like pretty simple

1:13:53

okay let me do one thing let me put up a second job i would say second job

1:14:00

i would say freestyle project all right this is my second job

1:14:06

i just want to demonstrate the powerfulness of the automation server and how simple it is to automate a job

1:14:12

that is put up on jenkins which will be triggered automatically

1:14:21

remember what i said earlier about jenkins because at the core of jenkins is a very very powerful automation

1:14:27

server all right so what i'm going to do i will just keep everything else the same i'm going to put in the build

1:14:32

script pretty much similar to second job

1:14:38

that gets triggered automatically

1:14:44

every minute all right let me do that percentage date

1:14:50

and i'll put in the time all right so i just put in another job

1:14:55

called second job and it pretty much does the same thing as what i was doing earlier in terms of printing the date

1:15:01

and the time but this time i'm just going to demonstrate the powerfulness of the automation server that is there if

1:15:07

you see here there's a build trigger so a build can be triggered using

1:15:12

various triggers that is there so we'll get into this github triggering or hook or a web hook kind of

1:15:19

a triggering later on but for now what i want to do i want to ensure that this job that i'm gonna put in would be

1:15:24

automatically triggered on its own let's say every minute i want this job to be run on its own

1:15:30

so build periodically is my setting if you see here there's a bunch of

1:15:36

help that is available for me so for those of you who have written cron jobs on linux boxes you'll find it very very

1:15:42

simple but for others don't panic let me just put up a very very simple regular expression for scheduling this job every

1:15:50

minute all right so that's one two three four

1:15:56

five

1:16:04

all right come up come up come up all right so five stars is all that i'm going to put in and jenkins got a little

1:16:11

worried and is asking me do you really mean every minute oh yeah i want to do this every minute let me save this and

1:16:18

how do i check whether it gets triggered every minute or not i just don't do anything i'll just wait for a minute

1:16:24

and if at all everything goes well jenkins would automatically trigger my second job in a minutes time from now

1:16:35

this time around i'm not going to trigger anything look there you see it's automatically got trigger

1:16:42

if i go in here yep second job that gets triggered automatically you know it was triggered

1:16:48

at 42 1642 which is 442 my time that looks good

1:16:54

and if everything goes well every one minute onwards this jog would be automatically triggered

1:17:00

now that i have my jenkins up and running a few jobs that has been put up here on my jenkins instance i would need

1:17:08

a way of controlling access to my jenkins server this is wherein i would use a plugin called role based access

1:17:14

plugin and create few rules the rules are something like a global rule and a project rule project specific growth i

1:17:21

can have different roles and i can have users who have signed up or the users

1:17:26

who might create kind of assigned to these roles so that each of these users fall into some category this is my way

1:17:34

of kind of controlling access to my jenkins instance and ensuring that people don't do something

1:17:40

unwarranted all right so first things first let me go ahead and install a plugin

1:17:46

for doing that so i get into manage jenkins and manage plugin

1:17:51

a little bit of a confusing screen in my opinion there's updates available installed in advance as of now we don't

1:17:58

have the role based plugin so let me go to available it'll take some time for it to get refreshed all right now these are

1:18:03

the available plugins these are the install plugins all right so let me come back to

1:18:09

available and i would want to search for my role-based access plugin so i would just search for role and hit enter

1:18:19

okay role-based authorization strategy enables user authorization using a

1:18:24

role-based strategy roles can be defined globally or for particular jobs or nodes

1:18:29

and stuff like that so exactly this is the plugin that i want i would want to install it without a

1:18:35

restart right looks good so far yes

1:18:41

go back to the top of the page yes remember jenkins is running on a java

1:18:46

using a java instance so typically many things would work the same way unless and until you want to restart jenkins

1:18:52

once in a while but as a good practice whenever you do some sort of a big installations or big patches on your

1:18:58

jenkins instance just ensure that you kind of restart it otherwise there would be a difference in terms of what is

1:19:04

installed on the system and what is there on the file system you will need to flush out few of those settings later on but for now these are all very small

1:19:10

plugins so this would run without any problems but otherwise if at all there are some plugins which would need a

1:19:16

restart you know kindly go and restart your jenkins instance but for now i don't need that it looks good i've

1:19:22

installed the plugin so where do i see my plugin i installed the plugin that is specific to the user control or the access control so

1:19:30

let me go into yes global security and uh i would see this

1:19:37

role-based strategy showing up now all right so this comes in because of my

1:19:42

installation of my role-based plugin so this is what i would want to enable

1:19:48

because i already have my own database set up and for the authorization part in the sense that who can do what i'm going

1:19:54

to install i mean i've already installed a role based strategy uh plugin and i'm going to enable that strategy all right

1:20:00

i would say save okay now i've installed the role based access plugin i would need to just set it up

1:20:07

and check that you know i would go ahead and create some roles and ensure that i assign users as per these roles all

1:20:14

right so let me go to manage jenkins configure

1:20:19

all right let me see where is this configure configure global security is that where i create my roles

1:20:27

nope not here

1:20:34

yes manage and assign roles okay again you would see these options

1:20:41

only after you install these plugins so for now i i've just enabled the plugin i

1:20:46

have enabled role-based access control and i would go ahead and create some rules for this particular jenkins

1:20:52

instance so i would say first manage rules

1:20:58

so i would need to create some roles here and the rules are at a very high level these are global rules and there

1:21:04

are some project rules and there are some slave rules i'll not get into details of all of these at a very very

1:21:10

high level which is a global role let me just create a role a role can be kind of

1:21:15

visualized like a group so i would create a role called developer typically the jenkins instance

1:21:20

or the ca instance are kind of owned up or controlled by qa guys so qr guys would need to provide some sort of you

1:21:27

know limited access to developers so that's why i'm creating a role called developer and i'm adding this role at a global

1:21:34

role level so i would say add this here and you would see this developer role that is there and each of these options

1:21:42

if you hover over it you would see some sort of a help on what what are these uh you know

1:21:48

permissions specific to so what i want is like you know it sounds a little you know different but i would want to give

1:21:54

very very little permissions for the developer so from an administration perspective i would just want him to

1:22:01

have a read kind of a role credentials again i would just want to view kind of a rule i don't

1:22:06

want him to create any agents and all that stuff that looks good for me for a job i would want him to just

1:22:14

possibly read i don't want him to build i don't want him to cancel any jobs i don't want him to configure any job i don't even

1:22:20

want him to create any job i would just want him to read few things i would not give him possibly a role to the

1:22:26

workspace as well i mean i don't want him to have access to the workspace i would just want him to

1:22:31

read a job check you know have read only access to the job run

1:22:37

no i don't want him to give him any any particular access which will allow him to run any jobs view configure

1:22:44

yeah possibly create yeah delete i don't want to read yes definitely

1:22:50

and this is the specific role so what i'm doing i'm just creating a global role called developer and i'm giving him

1:22:57

very very limited roles in the sense that i don't want this developer to be able to run any agents nor create jobs

1:23:04

or build jobs or cancel jobs or configure jobs at the max i just want him to read a job that is already put up

1:23:11

there okay so i would save now i created a role

1:23:18

i still don't have any users that is there on the system so let me go ahead and create some user on the system

1:23:25

that's not here house configure manager cans manage users

1:23:32

okay let me create a new user i would call this user as yeah developer

1:23:37

one sounds good some password

1:23:42

some password that i can remember okay his name is developer1

1:23:48

d at d.com or something like that okay so this is the admin with with

1:23:55

which i kind of configured or brought up the system and developer one is a user that i have configured so still have not

1:24:02

set any rules for this particular user yet so i would go to manage and gains

1:24:08

i would say manage and assign roles i would say

1:24:13

assign roles okay so if you see what i'm going to do

1:24:18

now is assign a role that is specific to that particular i will find the particular user and assign him the

1:24:25

developer role that i have already configured the role shows up here i would need to

1:24:31

find my user whoever created and then assign him to that particular role so if

1:24:36

you remember the user that i created was developer1 i would add this particular

1:24:41

user and now this particular user what kind of a role i want him to have because this is the global rule that had

1:24:48

created so developer i would assign this developer 1 to this particular global

1:24:53

rule and i would go ahead and save my changes now let me check the permissions of this

1:25:00

particular user by logging out of my admin account and logging back as developer one

1:25:07

if you remember this role was created with very less privileges so

1:25:13

there you go i have jenkins but i don't see a new item i can't trigger a new job i can't do anything i see these jobs

1:25:20

however i don't think so i'll be able to start this job i don't have the permission set for that the maximum i can do is look at the job see what was

1:25:27

there as a part of the console output and stuff like that so this is a limited

1:25:32

role that was created and i added this developer to that particular role which was a developer role

1:25:38

so that the developers don't get to configure any of the jobs because the jenkins instance is owned by a qr person

1:25:43

he doesn't want to give developer any administrative rights so the rights that he set out by creating a developer role

1:25:51

and anybody who is tagged any user who is tagged as a part of this developer role would get the same kind of

1:25:57

permissions and this permissions can be you know fine grain it can be a project specific permissions as well but for now

1:26:03

i just demonstrated the high level permission that i had set in let me quickly log out of this user and

1:26:10

get back as the admin user because i need to continue with my demo with the developer

1:26:15

role that was created i have very very less privileges one of the reasons for jenkins being so popular as i mentioned

1:26:21

earlier is the bunch of plugins that is provided by users or community users who don't

1:26:27

charge any money for these plugins but it's got plugins for connecting anything and everything so if you can navigate to

1:26:33

or if you can find jenkins plugins you would see index of over so many

1:26:40

plugins that is there all of these are wonderful plugins whatever connectors that you would need if you want to

1:26:46

connect jenkins to an aws instance or you want to connect jenkins to a docker instance or any of those containers you

1:26:52

would have a plugin you can go and search up if i want to connect jenkins to bitbucket bitbucket is one of the git servers

1:26:59

there's so many plugins that is available okay so bottom line jenkins without plugins is

1:27:05

nothing so plugins is the heart of jenkins for you to connect or for in order to connect jenkins with any of the

1:27:11

containers or any of the other tool sets you would need the plugins if you want to connect or you want to build a

1:27:16

repository which has got java and maven you would need to install maven and jdk on your jenkins instance if at all

1:27:23

you're looking for a net build or a microsoft build you would need to have ms build installed on your on your

1:27:28

jenkins instance and the plugins that will trigger ms build if at all you want to listen to some server side web hooks

1:27:36

from github you will need github specific plugins if you want to connect jenkins to aws you need those plugins if

1:27:42

you want to connect to a docker instance that is running anywhere in the world as long as you have the url which is

1:27:47

publicly reachable you just have a docker plug-in that is installed on your jenkins instance sonar cube is one of

1:27:53

the popular static code analyzers so you can connect jenkins build you can build

1:27:58

a job on jenkins and push it to sonar cube and get sonar cube to run analysis on that and get back the results in

1:28:04

jenkins all of these works very well because of the plugins now with that let me connect our jenkins instance to

1:28:10

github i already have very very simple java repository up on my github instance

1:28:16

so let me connect jenkins to this particular github instance and pull out a job that is put up there all right so

1:28:23

this is my very very simple uh you know repository that is there called hello java and this is what is there in the

1:28:29

repo there is a hello hello.java application that is here or a simple class file that is there it's got just

1:28:36

one line of system.out so this is already present on github.com at this

1:28:42

place and this would be the url for this repository

1:28:47

if i pick up the https url this is my steepest url so what i would do is i

1:28:52

would connect my jenkins instance to go to github provide my credentials and pull out this

1:28:58

repository which is on the cloudhostedgithub.com and get it to my jenkins instance and

1:29:03

then build this particular java file i'm keeping the source code very very simple

1:29:08

it's just a java file how do i build my java file how do i compile my java file i just say java c and the name of my

1:29:16

class file which is hello java and how do i run my java file i would say java and hello

1:29:21

okay so remember i don't need to install any plugins now because uh what it needs is a git plugin so if you remember when

1:29:28

we were doing the installation there was a bunch of recommended plugins so git is already installed on my system so i

1:29:34

don't need to install it again so let me put up a new job here it says get job

1:29:39

let it be a freestyle project that's good for me i would say okay

1:29:44

all right so the source code management remember in the earlier examples we did not use any source code because we were

1:29:50

just putting up some echo kind of uh jobs we did not need any integration with any of the source code systems so

1:29:57

now let me connect this so i'm going to put up a source code and git would show up because the plugin is already there

1:30:03

svn perforce any of those additional source code management tools if at all you would need just install those

1:30:09

plugins and jenkins connects wonderfully well to all these particular source control tools okay so i would copy the

1:30:16

https url from here i would say this is the url that i'm supposed to

1:30:21

go and grab my source code from but all right that sounds good but what is the username and password so i'll

1:30:27

have to specify a username and password all right so i would say

1:30:33

the username this is my username and this is my https credential for my job

1:30:40

okay so this is my username and this is my password i just save this i say add

1:30:46

and then i would say you know use this credentials to go to github and then on

1:30:51

my behalf pull out a repository all right if at all at this stage if there's any error in terms of not able to

1:30:58

jenkins not able to find git or the git dot exe or if my credentials are wrong somewhere down here you would see a red

1:31:04

message saying that you know something is not right you can just go ahead and kind of fix that for now this looks good

1:31:11

for me i'm going to grab this url what am i going to do this step would pull the source code

1:31:17

from the github and then what would be there as a part of my build step because this repository just has a java

1:31:25

file correct hello.java so in order to for me to build this i would just say execute windows batch command and i

1:31:31

would say java c hello dot java that is the way i would build my

1:31:37

java code and if i have to run it i would just say java hello

1:31:42

pretty simple two steps and this would run after the repository contents are fetched from github

1:31:49

so java c java that sounds good i would say save this and let me try to run this

1:31:59

okay if you see there's a lot of you know it executes git on your behalf it goes out here it

1:32:05

provides my credentials and says you know it pulls all my repository and by default it will pull up the master

1:32:11

branch that is there on my repository and it kind of builds this whole thing java c hello java and it runs this

1:32:19

project java hello and there you see this is the output that is there and if at all you want to look at the contents

1:32:25

of the repository if you can go here this is my

1:32:30

workspace of my system hang on this is not right okay good job if you see here this is my

1:32:38

hello.java this is the same program that was there on my github repository

1:32:44

okay so this is a program that was there on the github repository all right so this was the same program that was here

1:32:51

and jenkins on our behalf went over all the way to github pulled this repository

1:32:57

from there and then you know it brought it down to my local system on my jenkins instance it compiled it and it ran this

1:33:03

particular application okay now that i have integrated jenkins successfully with github for a simple

1:33:10

java application let me build a little bit on top of it what i will do is i have a maven based web application that

1:33:17

is up there as a repository in my github so this is the repository that

1:33:22

i'm talking about it's called amv and web app it's got it's a maven based uh repository as you would know my one is a

1:33:28

very very simple uh java based uh build tool that will allow you to run various

1:33:34

targets and it'll compile it will based upon the goals that you specify it can compile it can run some tests and you

1:33:40

can you can build a war file and even deploy it into some other server for now what we're going to use maven is just

1:33:47

for building and creating a package out of this particular web application it contains a bunch of things and what is

1:33:55

important is just the index.jsp it just contains an html file that is there as a

1:34:00

part of this web application so from a perspective of requirements now since

1:34:05

i'm going to connect jenkins with this particular repository get we already have that set we only need two other

1:34:11

things one is maven because jenkins will use maven so in order to use maven

1:34:17

jenkins would have to have a maven installation that is there on the jenkins box and in this case the jenkins

1:34:22

box is this laptop and after i have my maven installed i also need a tomcat server tomcat is a

1:34:28

very very simple web server that you can freely download i'll let you know how to quickly uh download and install the

1:34:35

tomcat all right so download maven first

1:34:42

and the various ways in which you can kind of download this maven there is zip files

1:34:48

binary zip files and rkf files so what i've done is i've just already downloaded maven and if you see i've

1:34:53

unzipped it here so this is the folder with which i have unzipped my maven

1:34:59

so as you know maven again is is one open source build tool so you'll have to set in a few configurations and set up

1:35:05

the path so mvn hyphen iphone version if i specify this after i set in my path my

1:35:11

one should work and if at all i echo m2 home which is nothing but the variable

1:35:17

environment variable specific to my onenote it is already set here so once you unzip maven just set this

1:35:23

m2home variable to the directory where your unzip jmi1 also just set the path

1:35:29

to this particular directory slash bin because that is where your maven executables are all found

1:35:34

all right so that's with maven and you know since i've set the path and the environment variable maven is running

1:35:40

perfectly fine on my system i just verified it okay next one is a tomcat server

1:35:49

download apache tomcat server 8.5 is what i have on my system

1:35:55

so i'm just going to show you where to download this from this is where you download tomcat server

1:36:02

and i already have the server downloaded again this doesn't need any installation

1:36:07

i just unzip it here and it kind of has a bin and configuration i have made some subtle changes in the configuration

1:36:14

first and foremost tomcat server also by default runs on port 8080. since we

1:36:19

already have our jenkins server running on port 8080 we cannot let tomcat run on

1:36:25

the same port there will be a port clash so what i've done i have configured tomcat to use a different port so if i

1:36:32

go to this configuration file here there is a server.xml

1:36:37

let me open this up here all right okay so this is the port by

1:36:43

default it will be 8080 i've just modified it to 8081. so i've changed the port on which my tomcat server would run

1:36:51

all right so that's one chain second change when jenkins kind of tries to get into my tomcat and deploy something for

1:36:57

someone he would need some authentications so that he'll be alloyed deployment by tomcat so for that i need

1:37:03

to create a user on tomcat and provide this user credentials to my jenkins instance

1:37:09

so i would go to tomcat users.xml file here

1:37:14

i've already created a username called deployer and the password is deployer and i've added a

1:37:19

role called manager hyphen script manager hyphen script will allow programmatic access to the tomcat server

1:37:26

so this is the role that is there so using this credentials i will enable or i'll empower jenkins to get into my

1:37:32

tomcat server and deploy my application all right only these two things that is required

1:37:38

let me just start my tomcat server first so i get into my bin folder i open a command prompt here and there's a

1:37:44

startup.bat

1:37:51

it's pretty fast it just takes a few seconds yes there you go tomcat server is up and running now this is running on

1:37:58

port 8081 so let me just check if that looks good so localhost

1:38:05

1. okay my tomcat server is up and running

1:38:10

that sounds good the user is already configured on this that's also fine so what i'll do as a part of my first job

1:38:15

my one is also installed on my system so i'm good to use maven as a part of my jenkins so i will put up a simple job

1:38:21

now i will say job mbn

1:38:30

web app i call this freestyle job that's good

1:38:35

okay so this will be a git repository what is the url of my git repository

1:38:40

is this guy https url okay

1:38:46

that's this url i will use the credentials the old credentials that i set up will work well because it's the

1:38:51

same git user that i'm kind of connecting into all right so now the change happens here

1:38:57

where after i get this since i said this is a simple maven repository i will have some maven targets to run

1:39:06

so the simple target first is let me run maven package this creates a

1:39:12

war file okay so mvn package is the target

1:39:17

package is the target so when whenever i run this package it kind of creates it it builds it it tests it and then

1:39:24

creates a package so this is all that is required maybe let me try to save this

1:39:29

and let me first run this and see if it connects well if there's any problem with my war file or the war file

1:39:36

gets created properly

1:39:46

okay wonderful so it built a war file and if you see it all shows you

1:39:52

what is the location where this war file was generated

1:39:57

so this will be the workspace if you see this this war file was successfully built now i need to grab this particular war

1:40:04

file and then i would need to deploy it into tomcat server again i would need a small plugin to do

1:40:10

this because i need to connect tomcat with my jenkins server let me go ahead and

1:40:16

install the plugin for the container deployment so i would go to manage plugins

1:40:22

available type in container

1:40:34

container container

1:40:40

deploy to container okay so let's put this the plugin that i would need i will install it without a restart

1:40:47

right seems to be very fast nope sorry it's still installing

1:41:00

okay it installed the plugin so if at all you see this if you go to my workspace

1:41:09

okay in the target folder i would see this web application war file that is already built

1:41:15

so i would need to configure this plugin to pull up this war file and deploy it onto the tomcat server for deploying

1:41:22

onto the tomcat server i will use the credentials of the user that i've created okay so let me go to configure this

1:41:28

particular project again and um okay all this is good

1:41:34

so the package is good i'm gonna just create a package that's all fine now

1:41:41

add a post build step so after the war file is built as a part of this package

1:41:46

directive let me use this deployment to container now this will

1:41:51

show up after you install the plugin so deploy this one to the container

1:41:56

now what is that you're supposed to specify you're supposed to specify the what is the location

1:42:03

okay so this is a global uh you know configuration that is there that'll allow you to

1:42:09

from the root folder it'll pick up the war file that is there so star star forward slash star dot war that's good

1:42:14

for me okay what is the context path context path is nothing but just the name of an

1:42:20

application that you know under which it will get deployed into the tomcat server i will just say mvn web app

1:42:26

that's the name of my thing now i need to specify what kind of a container that i'm talking about all right so the deployment would be for

1:42:35

this tomcat 8.5 is what i need okay because the server that we have is

1:42:40

a tomcat 8.5 server that i have so this would be the url so the credentials yes

1:42:46

i need to add a credential for this particular server so if you remember i had created

1:42:52

a credential for my web application so let me just find that my tomcat server yes configuration of

1:42:59

this okay so deployer and deployer username

1:43:05

is deployer password is deployer okay so let me use that credential i would say i would say add a new

1:43:11

credential jenkins credential the username is deployer and the password is

1:43:18

deployer so i would use this deployer credentials

1:43:24

for that and what is the url of my tomcat instance so this is the url of my tomcat instance

1:43:31

so take the war file that is fine found in this particular folder and then you know context path is same

1:43:37

in web use the deployer deployment credentials and get into this local host which is there

1:43:43

8081 this is the tomcat server that is running on my system and then go ahead

1:43:48

and deploy it okay so that is all that is required so i would say just save this

1:43:54

and let me run it now

1:44:03

okay it builds successfully built the war file it is trying to deploy it and looks like the deployment went ahead

1:44:10

perfectly well so the context path was mvn web app so if i

1:44:16

type in this all right if at all i go ahead into my

1:44:22

tomcat server there would be a web apps folder you would see the you know the date timestamp so this is

1:44:29

the file that get got recently copied and this is the explorer version of our application

1:44:35

so the application was built the source code of this application was pulled from the github server it was built locally

1:44:42

on the uh jenkins instance and then it was pushed into a tomcat server which is running on a different port which is

1:44:49

808.1 now for this demo i'm running everything locally on my system but assuming that you know this particular

1:44:56

tomcat instance was running on some other server with some other different ip address all that you've got

1:45:02

to go and change is the url of the server so this would be the server in case you

1:45:08

you already have that you know if you have a tomcat server which is running on some other machine that's all fine with

1:45:14

a different ip that's all good enough the whole bundle or the war file that was built as a part of this jenkins job

1:45:20

gets transferred onto the other server and gets deployed that's the beauty of

1:45:26

jenkins and automatic deployments or other deployments using jenkins and maven

1:45:32

distributed build or master slave configuration in jenkins as you would have seen you know we just have one

1:45:38

instance of jenkins server up and running all the time and also i told you that whenever any job that kind of you

1:45:43

know gets started on the jenkins server it is little heavy on in terms of disk space and the cpu utilization so which

1:45:51

kind of you know if at all you're in an organization wherein you're heavily reliant on the jenkins server you don't

1:45:57

want your jenkins server to go down so that's when you kind of start distributing the load that is there on

1:46:02

the jenkins server so you primer will have a server which is just a placeholder or like a master will take

1:46:08

in all kind of jobs and what you'll do is based upon trigger that has happened to the job or whichever job needs to be

1:46:14

built he if at all he can delegate these jobs onto some other machines or some other slaves you know that's a wonderful

1:46:20

thing to have okay use case one use case two assuming that you know if you have a jenkins server that is running on a

1:46:26

windows box or on a linux one and if at all you have a need where you need to build based upon operating systems you

1:46:33

have multiple build configurations to support maybe you need to build a windows you know windows based dotnet

1:46:38

kind of a projects where you would need a windows machine to build this particular project you also have a

1:46:44

requirement where you want to build linux linux based systems you also have a mac you you support some sort of an

1:46:50

apps or something that is built on mac os you would need to build you know mac based system as well so how are you

1:46:55

going to support all these needs so that's where in a beautiful concept of master slave or you know primary and

1:47:01

delegations or agent and master comes into play so typically you would have one jenkins server who will just you

1:47:07

know configure with all the proper authorizations users configurations and everything is set up on this jenkins

1:47:12

server his job is just delegations he will listen to some sort of triggers or based upon the job that is coming in he

1:47:19

will if there is a way nice way of delegating these jobs to somebody else and you know taking back the results he

1:47:25

can control a lot of other systems and these systems may not have a complete or there's no need to put in a complete

1:47:32

jenkins installation all that you got to do is have a very very simple runner or a slave that's a simple jar file that is

1:47:38

run as a low priority thread or a process within these systems so with that you can have a wonderful

1:47:44

distributed build server that can be set up and in case one of the servers goes down your master would know that what

1:47:50

went down and kind of delegate the task to somebody else so this is the kind of distributed build or the master slave

1:47:55

configuration so what i'll do in this exercise or in this demo is i will set up a simple slave but since i don't have

1:48:02

too many machines to kind of play around what i'll do is i will set up a slave in in one other folder within my hard drive

1:48:08

so i've got the c drive and d drive my jenkins is on my c drive so what i do is i would just use my e drive and set up a

1:48:15

very very simple slave out there i'll just show you how to provision a slave and how to connect to a slave and how to

1:48:21

delegate a job to that slave let me go back to my jenkins master and configure

1:48:26

him to you know talk to an agent so there are various ways in which this client and server talk to each other

1:48:32

what i'm going to choose is something called as jnlp java network launch protocol so using this i would ensure

1:48:38

that you know the client and server talk to each other so for that i need to ensure that i kind of enable this jnlp

1:48:45

port so let me try to find out where is that let me try this

1:48:50

okay yes agents and by default this jnlp agent's

1:48:56

thing would be disabled so if you see here there's a small help on this so i'm going to use this jnlp which is

1:49:02

nothing but java network launch protocol and you know i'll configure the master

1:49:07

and server to talk to each other using jlp so for that i need to enable this guide so i enable this guy instead of

1:49:15

making the by default the configuration was disabled so i make him random i make him you know enabled and i say save this

1:49:21

configuration all right so now configured or has made a setting for the master so that the jlp

1:49:29

port is kind of opened up so let me go ahead and you know create an agent

1:49:34

so i'll go to managed nodes so if you see here there's only one master here so let me provision a new node here so this

1:49:41

is the way you know in which you bring up a new node you have to configure it on the server jenkins would put in some

1:49:47

sort of security around this particular agent and let you know how to launch this particular engine so that he can

1:49:53

connect to jenkins master so i would say new node i would give a name for my node

1:49:58

i would say windows node because both of these are windows only so that's fine i just give an

1:50:04

identifier saying that windows note i would say this is a permanent agent i'll say okay so if you see the name let me

1:50:11

just copy this name here with the description number of executors since it's a slave

1:50:17

node and both of these are running on my system i'll keep the number of executors as one

1:50:22

that's fine remote root directory now this is where let me just clarify this since i have both my

1:50:30

my master is running on my c drive c drive program files 86

1:50:35

or not 86. c column program files

1:50:43

it is indeed 86 all right jenkins so this is where my

1:50:48

master is running so i don't want the c drive what i'll do is i'll use something called as a drive i have another drive

1:50:54

in my system but please visualize this like you know you're running this on a separate system altogether so i create a

1:51:00

folder here called jenkins node and this is where i'm going to place my or i'm going to provision my slave

1:51:07

and i'm going to run him from here so this is the directory in which i'm going to provision my slave node so i'm going

1:51:13

to copy this here and that is the remote root directory of your particular agent or slave so i just copied here the label

1:51:20

you know probably this is fine for me and usage how do you want to use this guy

1:51:27

so i would don't want him to run all kinds of jobs i will only build jobs with label expressions that match this

1:51:34

particular node and so this is the label of this node so in order for somebody to kind of delegate any task to them

1:51:40

they'll have to specify this particular label so imagine this way if i have a bunch of windows mesh system i name it

1:51:47

as windows star anything that says from windows i can give a regular expression and say that

1:51:52

anything that matches windows run this particular task there if i have some mac machines i name all these mac agents as

1:51:58

a mac star or something like that and i can delegate all tasks you know saying that start with whatever starts with mac

1:52:04

this node run the mac jobs there so you identify a node using the label

1:52:10

and then delegate the task there all right so launch method you know we will use java web start because we're

1:52:16

gonna we're gonna use jnlp protocol okay that sounds good directory i think nothing

1:52:23

else is required availability yes we'll keep this agent yep online as much as

1:52:28

possible that sounds good all right let me save this all right i'm just provisioning this

1:52:35

particular node now so if i click on this node i get a bunch of commands

1:52:41

along with an agent.jar so this is the agent.jar that has to be

1:52:46

taken down to the other machine or the slave node and from there i need to run this along with a small security

1:52:53

credential so let me copy this whole

1:52:59

text here in my notepad not bad plus plus is good for me

1:53:06

okay i copy this whole path there i also want to download this

1:53:12

agent.jar i would say yes this agent.jar is the one that is

1:53:19

configured by our server so all the details that is required for launching this agent.jar is found in this ah sorry

1:53:26

for launching this agent is found as agent.jar so typically i need to take this jar file onto the other system

1:53:34

and then kind of run it from there so i have this alien.jar i copy this or i

1:53:40

cut this i come back to my folder my jenkins node i paste it here

1:53:46

okay so now with this provision agent.jar and i need to use this whole command

1:53:52

ctrl a ctrl c and then launch this particular agent so let me

1:53:57

bring up a command prompt right here and then launch that so i'm saying in the same folder where there is agent.jar

1:54:03

i'm going to launch this a particular agent java hyphen jar agent.jar jnlp

1:54:08

this is the url of my server in case the server and client are on different locations or different ips you have to

1:54:14

specify the ipad address all these any way would show up and then the secret and you know the

1:54:20

root folder of your jenkins or the slave node

1:54:25

okay so something ran and then you know it says

1:54:31

it's connected very well it seems to connected very well so let me come back to my jenkins instance

1:54:36

and see you know if you told me you see earlier this was not connected now let me refresh this guy

1:54:43

okay now these two guys are connected provision a jenkins node and then i

1:54:48

copied all the credentials or the slave.jar along with the launch code and then took it to the other system and

1:54:54

kind of ran it from there since i don't have another system i've just got a separate directory in another folder another

1:55:01

drive and i'm launching the agent from here as long as this particular agent is up and running or this command prompt is

1:55:07

up and running the agent would be connected so once i close this the connection goes down all right so successfully you've

1:55:13

launched this particular agent now this would be the home directory of this

1:55:19

jenkins node or the jenkins slave so any task that i'm going to delegate to this particular slave would all be run here

1:55:26

it'll create a workspace right here all right so good so let me just come back and let me kind

1:55:33

of put up a new task here i will say that you know delegate job is good i say freestyle project i'm going

1:55:40

to create a very very simple job here i don't want it to connect to gate or

1:55:45

anything like that let me just create a very very simple echo

1:55:53

relegated to the slave related to i don't like the word slave delegated to

1:56:00

agent put this way all right so delegated to agent sounds

1:56:06

good now how am i going to ensure that this particular job runs on the agent or on the slave that

1:56:12

i've configured right you see this if at all you remember how we provisioned our

1:56:19

particular slave we gave a label right so now i'm going to put in a job

1:56:24

that will only match this particular label so i'm going to say that whatever

1:56:31

matches this you know windows label run this job on that particular node so we have only one node that's matching this

1:56:38

in a windows node so this job will be delegated out there so i save this

1:56:43

and let me build this this is again a very very simple job

1:56:49

there's nothing in this i just want to demonstrate how to kind of delegate it to an agent so if you see this

1:56:55

it ran successfully and where is the workspace the workspace is right inside our

1:57:01

jenkins node it created a new workspace delegated job it put in here so my old

1:57:06

order my primary master job is in sql program files under jenkins and this is

1:57:12

the slave job that was successfully run very very simple but very very powerful

1:57:19

concept of master slave configuration or distributed built in jenkins okay approaching the final section where

1:57:26

we've done all this hard work in bringing up our jenkins server configuring it putting up some jobs on

1:57:32

it creating users and all this stuff now we don't want this configuration to kind of go away we want a very nice way of

1:57:39

ensuring that we backup all this configuration and in case there is any failure hardware crash or a machine

1:57:45

crash we would want to kind of restore from the existing configuration that we kind of backed up so one quick way to do

1:57:53

that would be or one dirty way to do that would be just you know take a complete backup of our colon program

1:57:59

files colon jenkins directory because that's where our whole jenkins configuration is present but we would

1:58:05

don't want to do that let's use some plugins for taking up a backup so let me go to manage in cans

1:58:12

and click on available and let me search for some back there are a bunch of backup plugins so i would

1:58:18

recommend one of these plugins that i specifically use so this is the backup plugin so let me

1:58:23

go ahead and install this plugin

1:58:29

all right so we went ahead and installed this plugin so let me come back to my

1:58:34

manage plugins stop this plugin is there so hang on backup manager so you will see

1:58:42

this option once you install this plugin so first time i can you know do a setup

1:58:47

i would say back up this particular i'll give a folder uh this folder is pertaining to the folder where i want

1:58:52

jenkins to backup some data and i would say the format should be zip format is good enough let me give a name

1:58:59

or a template or a file name for my you know backup this is good i want it in verbose mode i don't want to shut on

1:59:06

my jenkins or should i shut it down no okay one thing that you got to remember is that whenever a backup happens if

1:59:13

there are too many jobs that is running on the server it can kind of slow down your jenkins instance because it's it's

1:59:19

in the process of copying few of those things and the files are being changed at that moment it's little bit problematic for jenkins so typically you

1:59:26

back up your servers only when there is very less load or typically try to you know bring it to a shutdown kind of a

1:59:32

state and then take a backup all right so i'm going to backup all these things you know i don't want to

1:59:39

exclude anything else i want the history i want the maven artifacts possibly i

1:59:44

don't want this guy i would just say save and then i would say back him up

1:59:51

so this would run a bunch of you know steps and all the files that is required

1:59:57

as a part of this is pretty fast but then if at all you have too many things up on your server for now we didn't have

2:00:03

too many things up on our server but in case you had too many things to kind of backup this may take a while so let me

2:00:09

just pause this recording and get back to you once the backup is complete so there you go the

2:00:15

backup was successful created a backup of all the workspace the configurations the users and you

2:00:22

know all that so all this is kind of hidden down in this particular zip file so at any instance if at all i

2:00:30

kind of crash my system for some instance or say hard disk failure and i bring up a new instance of jenkins i can

2:00:36

kind of use the backup plugin for restoring this particular configurations

2:00:42

so how do i do that i just come back to my manager cans

2:00:47

come back to backup manager and i will say restore that's an or

2:00:53

jenkins configuration now that we know what is continuous integration and where does jenkins come

2:00:58

into picture let's look at the rest of the tasks of our software development lifecycle so if at all i were to

2:01:04

visualize the kind of steps that is involved in delivering my software possibly the continuous integration

2:01:10

phase would be somewhere here where multiple developers are developing on that and then we have a little bit of a

2:01:15

stable code that is there that can be kind of moved across because i want to go ahead with the particular build that

2:01:22

i have and then i want to migrate that i want to propagate that across various environments so if you consider the

2:01:29

standard software delivery approach in the first cycle you just do some minimal testing and then you kind of move that

2:01:35

to one of the environments and from there you kick off more and more tests they could be integration test they

2:01:40

could be acceptance test they could be functionality check they could be a stress test there could be a load test

2:01:46

it could be a system integration test all kinds of tests that you can think about and all the way may be propagating

2:01:52

the build across various environments if all this can be considered as various steps the workflow is such that as and

2:01:59

when the build moves across various phases if there's any failure of course the build propagation kind of stops

2:02:05

everyone gets notified but if at all everything goes well so your workflow is progressing well and at the end of the

2:02:12

workflow you eventually have a code which is pretty much good to release now

2:02:17

mind you i make an assumption here that most of your test cases are automated and you have a good percentage of

2:02:23

coverage of your test cases but if that is not the scenario then possibly there are some automated tests or checks that

2:02:30

may be required in between but if the workflow can kind of accommodate all that as well you know you can visualize

2:02:36

this as the steps that is required for your software development or software delivery life cycle now in jenkins the

2:02:42

way this kind of translates is that each of these tasks can be put out as a job

2:02:47

so now let me quickly let you know or let me quickly demo what existed in

2:02:52

pre-jenkins 2.0 where i could put up a couple of jobs and i can connect them using the upstream downstream linking

2:03:00

mechanism so if this job one if at all it is a build and even test cases if at all that passes successfully job 2 gets

2:03:06

triggered if the job 2 is more about running some more automated tests or possibly deploying it to environment and

2:03:12

then kicking off some more test cases that would be job too but if the deployment fails or if some of the other

2:03:18

test cases fail it would not propagate to the third job all right so let me quickly bring up my jenkins instance and

2:03:25

put up some sample jobs and tell you how to connect that or rather how could one connect that using jenkins 2.0 or pre

2:03:33

jenkins 2.0 release i have now brought up my jenkins instance and in case some of you don't know how to install jenkins

2:03:40

or you don't know how to bring up your jenkins instance i would strongly recommend that you watch our previous

2:03:45

videos on simply learn youtube channel where i've detailed out the steps that is required for you to install jenkins

2:03:52

and bring it up so alright so i brought up my jenkins instance let me put up few of those jobs now mind you i'm going to

2:03:58

cover the pre jenkins 2.0 feature here alright so let me put up my first job

2:04:04

all right i hope i don't have that job i say it's a freestyle project i don't want to change anything

2:04:11

i'm going to put up a very very simple job here it's in batch command let's say echo

2:04:17

first job triggered at right that's my first job

2:04:25

now let me put up my second job freestyle project

2:04:38

all right that's my second job

2:04:46

all right that's my third job i've got a very very simple echo statement in this

2:04:51

so it just prints out the system date and the time in it all right

2:04:56

so i could run these jobs individually if i want so let me just check running my third job so this is what i get and

2:05:03

the console output third job triggered at date and time oops let me fix that

2:05:17

right that should fix it let me check my second job

2:05:30

all right that's my second job all right so i've got three jobs now if

2:05:36

i were to link them together or if at all i want a scenario where after the first job is successfully run i would

2:05:42

like to trigger my second job so i would do a small configuration change in here i would say after this first job is run

2:05:48

i want to trigger the second job so i have something called as a post build action so i can say that trigger some

2:05:55

other jobs from here so if you see this publish record deploy

2:06:00

all right trigger trigger trigger trigger let me check the other one build other projects this is what i would want

2:06:06

to do so after the first job is done i want to trigger my second job all right i would say save this now let me go back

2:06:13

to my second job and then trigger the third job after the second job is done

2:06:19

all right i'll add this post build build other projects third job again i'm not really sure if you guys notice

2:06:26

this there is various configurations as to when exactly do you want to trigger the other job and the default one is

2:06:32

trigger only if the build is stable so typically this is the configuration that would need we definitely don't want the

2:06:37

third job to be triggered in case the second job fails all right so this is the combination that i want or this is

2:06:44

the choice that i want and i save this now i have three of my jobs if you see this the second job the upstream job is

2:06:51

the first job so let me check this kind of a pipeline what i've set here is a very very simple pipeline so after my

2:06:57

first job gets triggered if i build this guy right the second job gets triggered after the build first job is built so if

2:07:04

i click on the second job all right so the first job was to get the second job and after the second job it is

2:07:10

triggering the third job so this is how first job second job and third job were kind of linked but it's pretty hard to

2:07:16

visualize this as to you know if i need to see one holistic picture where after the first job after the second job after

2:07:23

the third job what was the flow it's not possible for me to visualize that that's where in i install a plugin so let me go

2:07:29

to manage plugins right here i think i already have it installed for those of you don't have it installed you can go

2:07:35

to the available button i mean available tab and click on that the plugin is called delivery pipeline plugin i

2:07:41

already have it installed in case you don't have it installed you just go to the available you click on this and say install without restart this is the

2:07:47

plugin that i want you to install all right so now we have that plugin installed so what i want to do is after the plugin is installed you see

2:07:53

something like this so this is where i would create a new visualization for the pipeline that i've created so i would

2:08:00

say my first pipeline or i give a name for my visualization i would say yes

2:08:05

this upstream downstream dependencies this is exactly what i want and there are a bunch of settings here i'll not

2:08:11

look at any of that now what i want is i just want to tell this view that you know i can give a name for this i would

2:08:18

give it as simply learn pipeline and what's important is that i specify

2:08:23

what is the first job that should be picked up as a part of this pipeline and the final job is optional because it

2:08:29

knows that if the first job is triggering those other jobs it knows where to end this whole life cycle so i

2:08:35

define a pipeline and give a name for my component and initialize that as my i mean i give it the first job so i say

2:08:41

okay and there you go this is much better this gives you a beautiful visualization of as to what happened

2:08:48

after the first job second job was run second job if i click on any of these that will in fact take me to that job

2:08:53

all right there is also one other option which is pretty good option in my opinion which is about edit view yes

2:09:00

this is where it is enable start of a new pipeline build let me apply and let me click ok on this what it gives me is

2:09:08

a way in which i can trigger my whole pipeline from here so if i click on this there you see the first job getting

2:09:14

trigger the second job is still running the green means it's all run properly and nicely second one is triggered now

2:09:20

the third one it's still running all right so this is the pipeline that existed prior to jenkins 2.0 this is

2:09:27

pretty decent enough and if you see there's a one-to-one mapping but if at all you remember we could go and add

2:09:33

multiple dependencies for the projects that i set in just to give an example let's say i go to my first job i can do

2:09:39

a configuration here and nothing stops me from triggering multiple jobs after this by giving me a comma i can trigger

2:09:45

multiple jobs here in case if i have to run few things parallely this also gives me that option to do that but having

2:09:52

said that this was the most primitive way in which the jobs were kind of visualized and run prior to jenkins 2.0

2:09:59

now this feature became such an important feature the users wanted more and more complicated because the

2:10:05

pipeline was not a lot complicated it was not just one job after the other there were multiple jobs that has to be

2:10:10

run and there is also an introduction of the jenkins agents where multiple tasks could be parallel run on different

2:10:17

agents so they wanted to club all of that and the pipeline could have all the such complicated stuff that's where in

2:10:24

post chenkin 2.0 or in jenkins 2.0 jenkins released a version which has got the

2:10:30

feature of pipeline which can be written in groovy scripts now groovy is wonderful scripting language it's very

2:10:36

very powerful anybody can visualize your pipeline or write your pipeline using programming language and the point of

2:10:43

everything as code where this whole groovy script gets into your source code repository so instead of putting jobs

2:10:49

here and in case my jenkins kind of fails you know there's a crash on my jenkins i don't get back these jobs how

2:10:56

do i bring back all these jobs back so everything has code that's the devops

2:11:01

principle so the pipelines will be written as scripts that is what i'm going to do in my next exercise in my

2:11:07

previous example i showed you the crude way in my opinion of putting up a jenkins pipeline but this is what

2:11:13

existed prior to jenkins 2.0 and now i have post jenkins 2.0 in terms of my

2:11:19

version jenkins version is 2.107. so this supports something called as a

2:11:24

scripted pipeline wherein you can write your pipeline in terms of groovy scripts no need to put up any jobs here and

2:11:30

remember how exactly you put up these individual jobs you can write a pipeline script in terms of groovy language let

2:11:37

me quickly show you a very very simple and elementary pipeline that i have this is what a groovy script would look like

2:11:44

pipeline any agent can run this stages there are individual stages that is defined as a subset of these stages so

2:11:50

the first stage is the compile stage and stage has got some steps in it you can have multiple steps in it and once only

2:11:57

after all these steps successfully complete that's when the stage gets through perfectly with the pass so

2:12:04

there's a compile a stage there's a j unit stage there's a quality gate stage there's a deploy stage and i'm really

2:12:10

not doing anything much within this other than echoing you know some text within each of these stages and what's

2:12:16

interesting is at the end there's something called as a post which is similar to or you can kind of equate

2:12:22

that to what would be there in a try catch kind of a block supposed always meaning this would run all the time

2:12:28

success only if at all all the steps that were above in terms of the stages they were completed successfully without

2:12:34

any failures so typically you would have your email that is going out here saying that the build is successful and stuff

2:12:40

like that failure if something went bad if any of the step resulted in a failure this particular block will get executed

2:12:46

unstable whenever any build is marked unstable if at all only few things that failed within your test run and you

2:12:52

would want to mark the build as unstable are changed this is an interesting option so this compares the present run

2:12:59

with the previous run and if there's any change meaning if the previous run was a failure and the present run is a success

2:13:06

or vice versa this would get triggered so this is what a simple pipeline script would look like so let me copy this

2:13:12

pipeline and let me put up a simple job for running this pipeline so let me open up my jenkins say a new i would say

2:13:20

scripted pipeline yeah this is what i want i don't want to choose a freestyle project this is going to be a pipeline

2:13:26

project so i would say pipeline and say okay all right this has got far less options than the other jobs that we put

2:13:33

up so general i don't want anything here i don't want any build trigger right so this is where i kind of i can paste in

2:13:40

whatever i had copied there's also something called as a pipeline syntax or a syntax generator this is like a lookup

2:13:46

where you can choose what you want to do and choose the option that is specific to those steps and you will get a

2:13:52

pipeline generator or a script generated for you jenkins knows that you're not very good at understanding these

2:13:57

pipelines so this gives you this sandbox kind of an environment where you can check out whatever you want to do as a

2:14:03

part of your pipeline and then get the equivalent groovy script from here let me look at this in a bit later so for

2:14:09

now i have my pipeline syntax already copied so what i'm going to do is i'm going to paste what i copied all right

2:14:15

so this looks good okay i'm not connecting to any github repository of any of that i'm just running a very very

2:14:21

simple pipeline which has got some steps in it and it just compiles or rather it just puts out some messages saying that

2:14:27

this stage completed successfully and stuff like that so let me save this and let me try to run this scripted pipeline

2:14:34

all right if you see this you'll see each of those steps going through and if at all i look at the console output

2:14:40

compile successfully unit passed all the stages passed there was a pass the failures doesn't show up you will see

2:14:46

the messages from our post or the try catch block that i was mentioning earlier so this is how one would put up

2:14:53

a pipeline and you also get to see the visualized view of your pipeline that says which stage run after which phase

2:14:59

how much time did it take and you can click on any of these and get into looking at the logs from that particular

2:15:06

pipeline front that was pretty easy wasn't it now let me give you another scenario for a pipeline wherein the

2:15:12

source code of my pipeline would be in a github repository and i'll write scripts to grab this particular code and run

2:15:19

some part of the code which is there as a part of the repository so let me look at the repository that i have i have a

2:15:26

repository out here on the simply learn github account which is called the pipeline script and if you see in there

2:15:33

there are a bunch of batch files that are there so the first batch file would be a build.batch so there's nothing in

2:15:39

it except that it is just trying to build a particular project you can visualize this as individual batch files

2:15:44

which actually contain the scripts for building running deploying and checking the quality gate of your particular

2:15:51

project so i have a couple of batch files that is here and this is on the github repository so i would need to

2:15:58

write jenkins job which will log into my github account and then check out this

2:16:03

particular repository from my account and then run these batch files as a part

2:16:08

of those individual steps within within the scripted pipeline so let me check as

2:16:13

to how i could do that let me put up a new project for this let

2:16:19

me call this scripted pipeline scripted pipeline from github all right so let

2:16:27

this be a pipeline project that's good enough for me let me see my scripts all

2:16:33

right now this is where i need to put in the scripts for pulling out the code repository from my github server and

2:16:40

running those batch files that are there as a part of the repository so what i want to do is i already have the

2:16:46

skeleton of my pipeline that is written which is very similar to whatever was the pipeline syntax that i showed you in

2:16:52

the previous step so i just copy this out here and then paste it here so what i have here is i've written on the high

2:16:58

level skeleton without really putting in the actual steps required for checking out rather or rather running those build

2:17:06

scripts so i've got four steps one is the git checkout step the builds tab unit test quality gate and possibly the

2:17:12

deployment all right so i need to put in the actual scripts that is required for first checking out the repository from

2:17:20

my github server so this is where i will make use of this pipeline syntax so as i

2:17:25

mentioned earlier you have a bunch of help that is available for you to figure out the actual scripts that is required

2:17:32

for you to write within your pipeline so what i wanted to do is check out

2:17:37

something from git so it's get related so search on git and you'll find this option so i got to specify my git

2:17:43

repository url and my credentials so let me look at the repository url this would

2:17:49

be my repository url so let me copy this i'm going to copy the https url of my

2:17:54

repository and branch is good and one thing that you gotta notice is for now

2:17:59

the repository is anyway a public repository on github so even though if you don't specify any credentials that

2:18:06

would work for me still but in case you have a repository which needs strictly a username and password to be specified

2:18:12

you can kind of add it out here using add jenkins and you can give your username and password out here but for

2:18:18

now i don't need any of these things so i'm going to just say git checkout or rather the url of my repository and what

2:18:25

we want is the master branch for now i have only one branch on my github server

2:18:30

so this is good for me so this is what exactly i want to do as a part of the script so if i click this this is the

2:18:36

script that i need to put in my build script so i come over here and this is

2:18:42

what will check out the code from my repository all right so now once i get my code onto my repository from my

2:18:48

repository rather it will grab those code all these batch files and get it onto my jenkins workspace now i'll have

2:18:55

to run these batch files as a part of each of my step so let me look at what would be the syntax so the first one

2:19:02

that i want to run would be my build.bat all right so i want to run a

2:19:08

batch file all right and what is the name of the batch file that i want to run i want to run this build.bat so

2:19:14

generate pipeline script this is all that i got to specify as a part of my build step and then unit test i've got

2:19:21

to just change this to unit i think that's what i have in my repository okay that is

2:19:28

unit and then deploy and quality queue capital

2:19:33

and this one would be deploy all right so this piece of code will

2:19:40

actually get into my repository and check out my source code and grab it and take it to the jenkins workspace so from

2:19:48

this workspace since all the files are there in the root directory of this workspace it will run these batch files

2:19:54

one after the other all right let me save this and let me try to run my pipeline

2:20:03

all right so it runs a lot of things in the background trying to get the source code from my repository whoa whoa whoa

2:20:09

that was fast all right so it pulled out all the source code from my repository the last commit message from where the

2:20:16

source code was pulled out it was this create deploy dot bad that looks good

2:20:22

i'm saying building checked out project building the checked out project this is what i've had in my build.pad if i'm not

2:20:29

mistaken okay building the project that's what is there with the timestamp running unit

2:20:35

test cases unit.bat it is running the unit.bat and then giving me the date and time time okay so all these kind of

2:20:42

passed and if i go back to the project i will also see this beautiful view of how

2:20:48

exactly what is the time that was taken for checking out the repository running the build on bat running the unit test

2:20:54

cases quality gates and all this isn't that pretty simple now let me modify my

2:21:00

previous job or rather let me put up a new job for making use of an agent wherein i could delegate a job to an

2:21:07

agent typically agents can be brought up on any other remote machines other than

2:21:12

where your primary engine can server is running in case you don't know or you don't know how to start up these agents

2:21:18

i would strongly recommend that you refer to our previous jenkins video on the simply learn

2:21:24

youtube channel all right so let me just check the status of my agent for now yes

2:21:29

he's offline so let me start this agent because agent is not running so i have

2:21:36

the agent uh set up in my sql on agents so let me copy the script file that is

2:21:41

required for starting my agent let me go to the agents folder open up a command

2:21:46

prompt and let me try to bring up my agent all right so the agent is up and running for now i don't have the luxury

2:21:54

of starting my agent on a different machine so my agent is running on my same machine but the agent's workspace

2:22:01

is sql agent while my primary jenkins server is running uh has the workspace

2:22:07

out here sequel and program files 86 and this is the workspace of my jenkins all

2:22:13

right i hope you can kind of differentiate those two all right so now what i want is i look at the same job

2:22:19

that i put in earlier or rather modify that let the steps be the same but i

2:22:24

don't want to run that on my master server let me try to delegate that using

2:22:29

the script so let me put up an agent scripted job all right it will be a

2:22:37

pipeline rep job let's see okay and let me copy this was a step that i

2:22:43

had put in for my previous job so agent any so what i'm gonna do now is i don't

2:22:49

want this to be running on any other agent i want this to be running on the agent whose label is let me check what

2:22:58

is the label of my agent that is running okay

2:23:03

so this is the name of my agent okay windows note so let me just copy that

2:23:08

there all right so with a very subtle change instead of saying agent any i'm

2:23:14

going to run or rather i'm going to specify the agent who will be running this job is the one who has got the

2:23:19

label as windows note so this agent that i brought on my system has got the name as windows node and it is configured to

2:23:27

pick up any job that matches the label to which any job is kind of delegated so

2:23:33

let me come back to my jobs where is my scripted agent job

2:23:39

i've got too many jobs running all right so this is my agent scripted job that i left halfway through so here in the

2:23:46

pipeline what i'm going to do is this is all i'm going to need so the job remains the same git checkout is going

2:23:52

to check out from the same repository run the batch files accordingly but this change is just to ensure that this job

2:23:59

is kind of delegated on the agent all right so this would be my agent job

2:24:05

let me save this and let me get back to the dashboard and let me run it from here if you see this

2:24:11

you know the master and agent are both idle as of now let me try to run this agent scripted job all right so the

2:24:17

agent kind of kicked in and there was a job that was delegated to the agent if i look at what is there in the console

2:24:24

output he's pretty much doing whatever was there as a part of the job but the interesting thing to notice that this is

2:24:31

the new workspace or rather this is delegated to the agent and the agent's workspace is this particular folder so

2:24:37

this is where it's going to get all this stuff run the whole thing and you know the

2:24:42

flow is pretty much the same the only thing is this whole thing ran on the agent if i need to check

2:24:47

my agent i would see the workspace out here agent scripted job if you look at

2:24:53

this all the batch files are here and this is where the job was kind of delegated to run so with a very subtle

2:24:59

change in in the scripting i can ensure that the jobs are kind of delegated onto

2:25:04

the agent the pipeline job specifically as i mentioned earlier jenkins provides you two different ways of writing

2:25:12

pipelines called the scripted and the declarative the first one that was launched was the scripted pipeline this

2:25:18

is heavily based on groovy scripting since jenkins ships along with the groovy engine so this was the first

2:25:25

script or the first support for pipeline that was provided by jenkins in 2.0 this

2:25:31

needs a little bit of a learning curve since groovy is a wonderful script understanding that may be a little

2:25:37

cumbersome but then once you kind of master it you can write really powerful scripts based on groovy at a very high

2:25:43

level this is what a typical scripted pipeline would look like something called as a node node represents the

2:25:50

agent or the actual box on which your job would be running and then a bunch of

2:25:55

stages are put out with each of the stage along with the steps that needs to be covered as the part of those stages

2:26:01

listed one below the other so all these stages if they're run peacefully then the whole task is kind of marked as run

2:26:08

successfully since understanding groovy or learning grouping was a little tough for many of the people so this is a new

2:26:15

one from jenkins where it provides you a much simple and friendly syntax for

2:26:20

writing pipelines without really needing to understand or without nearly reading to learn some group scripting again

2:26:27

there's a very subtle change between these and you there are a lot of lookups for figuring out what is a better

2:26:33

pipeline for you to kind of write but if you can figure out the difference or if you can try to find that particular

2:26:39

piece of code which kind of helps you out with your pipeline either of the skips there's not really any difference

2:26:45

in writing or kind of delivering your pipeline using either of these two methods all right so declare your

2:26:51

pipeline is something like this where you have an agent you can specify the agent label or if you can say agent any

2:26:56

it will pick up whatever is an available agent and run the job and then you have something called a stages stages is

2:27:02

nothing but a collection of stage and stage could have multiple steps defined within this so if any of the steps in

2:27:09

any of the stage fails then that particular complete stage and the build is marked as failure so very subtle

2:27:15

difference between both these uh two syntax but using either of these you can write powerful scripts for your pipeline

2:27:22

now let me come up with an example where i'm going to at least demo one of the feature where you could run a master and

2:27:30

a slave job in parallel so let me come up with a demo for that particular scenario let me put up a new job for my

2:27:37

parallel agent pipeline let me call this and this would be a pipeline project

2:27:44

i don't want anything here let me look at the pipeline script that i have pipeline

2:27:49

agent none stages and there's a first stage where this would be a kind of non-parallel stage where there's a need

2:27:56

for you to possibly pull out the source code from one of the repositories and possibly unit test it if all the unit

2:28:02

test cases pass then possibly you want to deploy it to one of the test environments that would be what would be

2:28:08

there as a part of the non-parallel stage and then you may have a bunch of tests that could be run and assuming

2:28:14

that you know you have a windows node you have a linux node you have some other kind of an operating system based

2:28:19

node you could run these stages in parallel so for just for demonstration i've just put in two parallel stages in

2:28:26

parallel is the keyword that you're going to use for running tests parallely so i would say parallel stage test on

2:28:32

windows and i'm going to run this in my windows note well i could run a bunch of steps that i want out here and then in

2:28:39

the other stage or other step what i want is i will run something else on on my master as long as this parallel

2:28:46

keyword is encountered jenkins will ensure that these two stages are run parallely for now i have both these

2:28:53

things running on my same machine but assuming that these were running on different boxes you could kind of

2:28:58

visualize it as these two steps are going to be started parallely without really any dependency on each other and

2:29:04

then you could wait for the test results and then based upon whether both of these steps passed or failed if one of

2:29:10

them failed then we could kind of mark the build accordingly so let me copy this pretty pretty simple script let me

2:29:17

put this out here and now let me save this out and let me try to build this

2:29:23

all right there you go the stage will be executed first this is the non-parallel stage that's going to happen then the

2:29:29

task 1 on agent task 1-1 master followed by as i said since i have only one node

2:29:34

or rather one system one with both these things are running simultaneously you will not really see a benefit of this

2:29:41

but assuming that you have a couple of boxes on which you have multiple agents running you will possibly want to run

2:29:47

your selenium tests on the windows box because selenium brings up some of those ui which needs a browser you could

2:29:53

possibly need some regression test that could run on linux boxes or linux agents and then you can kind of break down your

2:30:00

tasks into multiple things that is running on multiple systems at the same time and then collate all the results

2:30:06

okay one final thing all right now i have all my particular job or rather the steps required for my

2:30:13

pipeline put down in terms of the scripts and this is saved in this particular job that's not a good a

2:30:20

recommended approach so what i'll do is i'll copy all of these steps out here and then what needs to be done is

2:30:26

actually let's say let me go back to this repository the most preferred approach is where you create something

2:30:33

called as a jenkins file jenkins file and you paste all the scripts that is

2:30:38

required for your pipeline now this is in a true sense the devops approach where i'm going to save this out so if

2:30:44

at all you have a pipeline defined for your project uh the best place to kind of

2:30:50

put out your configurations for the pipeline is within your repository so

2:30:55

this may be a different project that i was referring to but assuming that you have your project where you know you

2:31:01

have to define your pipeline instead of putting that as a particular job on jenkins and fearing that if jenkins

2:31:07

fails or the jobs if there's a crash and then you lose out your job configuration the best approach is to use a jenkins

2:31:14

file put all the steps that is required the try tested steps that is required as a part of your jenkins file and then you

2:31:20

can put out a job that can pull the source code from here as well as use the steps that is defined in the jetkins

2:31:27

file so let me end up by putting up another job which is a true jobs kind of

2:31:32

a job so i would say devops pipeline and this is a pipeline script

2:31:39

and then i'm not going to say any of these things i would say the pipeline script is from the source code

2:31:45

management so my pipeline script is already defined it is present in scm so what is my svn i mean what is my source

2:31:52

code repository this is my source code repository where i already have this so let me copy this url this is my url i

2:32:00

don't need any credentials because the repositories anyway in public repository

2:32:05

that is all that is required i would say and the scripted file it automatically picks up jenkins file all right so let

2:32:12

me save this let me build this

2:32:20

so that's the beauty of devops wherein i have a pipeline that is defined and instead of putting the pipeline as a job

2:32:27

because pipeline is nothing but a configuration the configuration is also checked into the source code repository

2:32:32

and any changes to this pipeline instead of putting that modifications in the job these are all captured as a part of my

2:32:40

repository so the changes are nicely configured so that you know we know who's done what change

2:32:46

we have almost reached the end of this tutorial now matthew will help you learn some of

2:32:51

the most important devops and jenkins questions that you might tackle in any devops interview

2:32:57

hello this is matthew from simply learn and today we're going to go through part one of a two-part series on interview

2:33:04

questions that you are likely to be asked if you are interviewing for a job that focuses on devops so let's just get

2:33:11

into those general devops questions so one of the questions that you're going to be asked is how is devops different

2:33:18

from agile and the reality is is that devops is a cultural way of being able

2:33:24

to deliver solutions that's different from agile if we look at the evolution of delivery over the last five to ten

2:33:32

years we've gone from waterfall based delivery to agile delivery which is on

2:33:38

uh sprints to where we are with continuous integration and continuous delivery around devops the whole concept

2:33:44

of devops is culturally very very different from agile and the difference is is that you're looking at being able

2:33:51

to do continuous releases what does that mean the difference is is that you want to be able to send out code continuously

2:33:59

to your production environment that means the operations team the development team have to be working

2:34:04

together that means that any code that gets created has to be able to go to production very quickly which means you

2:34:10

need to be testing your code continuously and then that production environment must also be able to be

2:34:16

tested continuously and any changes or any errors that come up have to be communicated effectively and efficiently

2:34:23

back to the dev and op team another area in which i see that devops is different

2:34:28

is really the response that we have for how we engage with the customer so the

2:34:33

customer is coming to your website to your mobile app to your chat bot or any digital solution that you have and has

2:34:40

an expectation when you're going through and actually doing a dev ops paradigm

2:34:45

the old model would be that you would capture requirements from the customer then you do your development then you do

2:34:51

your testing and there would be these barriers between each of those as we move faster through from waterfall to

2:34:58

agile what we saw is that with agile we were able to respond much faster to

2:35:03

customer demands so instead of being weeks or months sometimes in some cases years between releases of software what

2:35:10

we saw it would was a transition to weeks and months for releases on

2:35:16

software now we see with devops is that the release cycle has shrunk even

2:35:21

further with the goal of continuously delighting the customer how further has that release cycle shrunk to there are

2:35:28

companies that have gone from having releases of once a week or once every two weeks or once a month to now having

2:35:34

multiple releases a day indeed some companies have up to 50 releases a day

2:35:40

this isn't something to also bear in mind is that each of those releases are tested and verified against test records

2:35:47

so that you can guarantee that the code that's going to production is going to be good continuous code so what are the

2:35:54

differences between the different phases of devops so effectively there are two

2:36:00

main phases of devops there's the planning and coding phase and then there's the deploying phase and you have

2:36:06

a tool such as jenkins that allows you to integrate between both environments

2:36:11

some of the core benefits that you may have to devops are going to be some technical benefits and some business

2:36:18

benefits so when somebody asks you what are the benefits of devops you can reply

2:36:23

that from a technical point of view you're able to use continuous software delivery to constantly push out code

2:36:30

that has been tested and verified against scripts that have been written and approved you can be able to push out

2:36:38

smaller chunks of code so that when you have an issue you're not having to go through massive blocks of code or

2:36:45

massive projects you're going through just very small micro services or small

2:36:50

sections of code and you're able to detect and correct problems faster on

2:36:56

the business side the benefits are absolutely fantastic from a customer

2:37:01

that's coming to your website and or to your mobile app they're going to see responses happening continuously so that

2:37:08

the customer is always aware that you as a company are listening to their demands and responding appropriately you're able

2:37:15

to provide a more stable environment and you're able to scale that environment to the demands of the number of customers

2:37:22

that are using your services so how you approach a project that needs to

2:37:27

implement devops so this is really an exciting area for you to be in so there

2:37:33

are effectively three stages when it comes to actually working in a dev ops

2:37:38

the first stage is an assessment stage and think of this as the back of the napkin ideation stage this is where you

2:37:46

are sitting with a business leader and they're giving you ideas of what they would like to see from feedback that

2:37:52

they've had from their customers this is blue sky opportunity this is thinking of

2:37:57

big ideas that second stage and this often comes as a fast follow to stage one is actually proving out that concept

2:38:05

so developing a proof of concept and a proof of concept can actually be a multiple different things so it could be

2:38:12

something as simple as a wireframe or it could be something that is as complex as

2:38:17

a mini version of the file application depending on the scope of the work that

2:38:23

you're delivering will really depend on how complicated you want the poc to be but with that in mind whatever choice

2:38:30

you make you have to be able to deliver enough in the poc so that when you present this to a customer they're able

2:38:37

to respond to that creation that you've developed and able to give you feedback

2:38:42

to be able to validate that you are going with the right solution and able to provide the right product to your

2:38:49

customers that third stage is where you get into your dev ops stage and this is

2:38:55

just the exciting part this is where the rubber hits the road and you start releasing code based on a backlog of

2:39:03

features that are being requested for the solution in contrast to doing agile

2:39:08

delivery where you just continuously work through a backlog with devops what you're also looking at is putting in

2:39:15

analytics and sensors to be able to validate that you are being successful with the solution that being delivered

2:39:22

so that once you actually start delivering out code that customers can interact with you want to be able to see

2:39:29

what are the pieces of the solution that they are using what do they like what is complicated where are the failure points

2:39:35

and you want to use that data and feed that back into your continuous integration and have that as a means to

2:39:42

be able to back fill the demand of work that gets completed in the bank log so

2:39:48

what is the difference between continuous delivery and continuous deployment so continuous delivery is

2:39:55

based on putting out code that can be deployed safely to production it ensures

2:40:01

that your businesses and functions are running as you would expect them to be

2:40:06

so it's going through and completing the code that you'd actually see continuous

2:40:11

deployment in contrast is all about ensuring that you're automating the deployment of a production environment

2:40:19

so you're able to go through and scale up your environments to meet the demands

2:40:24

of both the solution and the customer this makes software development and release processes much more faster and

2:40:31

more robust so if we look here we can actually see where continuous

2:40:36

integration and continuous deployment come hand in hand so when you actually start out with the initial pushes of

2:40:43

your code that's where you're doing your continuous integration and your continuous delivery and then at some

2:40:48

point you want to get very comfortable with deploying the code that you're creating so it's being pushed out to

2:40:55

your production environment one of the things that's great about working with the tools that you use in a devops

2:41:02

continuous integration and continuous delivery model is that the development

2:41:07

tools that you use the containerization tools the testing tools should always

2:41:12

reflect the production environment what this means is that when you actually come to deploying solutions to

2:41:18

production there are no surprises because your development team have been working against that exact same

2:41:26

environment all the way through so a question that you'll also be asked is you know what is the role of the

2:41:32

configuration management in devops and so the role of configuration management

2:41:38

really has three distinct areas and the first and this is really obvious one and this is the one where you probably

2:41:44

already have significant experiences is the ability to manage and handle large changes to multiple systems in seconds

2:41:52

rather than days hours or weeks as that may have happened before the second area

2:41:57

is that you want to also demonstrate the business reasons for having configuration management and the

2:42:03

business reason here is that it allows it and infrastructure to standardize on

2:42:09

resource configurations and this has a benefit in that you're able to do more

2:42:14

with fewer people so instead of having a large configuration team you can

2:42:20

actually have a smaller more highly skilled team that's able to actually manage an even larger operational

2:42:27

environment and thirdly you want to be able to highlight the ability to scale

2:42:32

so if you have configuration management tools you're able to manage a significant number of servers and

2:42:39

domains that may have multiple servers in it allows you to effectively manage

2:42:45

servers that are deployed on cloud or private cloud and allow you to do this

2:42:50

with high accuracy so how does continuous monitoring help and maintain

2:42:56

the entire architecture of the system so when this question comes up you want to dig in and show your knowledge on how

2:43:04

configuration and continuous monitoring is able to control an entire environment so the number one

2:43:11

topic that you want to bring up when it comes to continuous monitoring is that with being able to effectively monitor

2:43:18

your entire network 24 7 for any changes as they happen you're able to identify

2:43:24

and report those faults or threats immediately and respond immediately for

2:43:30

your entire network instead of having to wait as it happens sometimes for a customer to email or call you and say

2:43:37

hey your website's down nobody wants that that's an embarrassing thing the other three areas that you want to be

2:43:43

able to highlight are the ability to be able to ensure that the right software and the right services are running on

2:43:50

the right resources that's your number one takeaway that you want to be able to give of continuous monitoring the second

2:43:57

is to be able to monitor the status of those servers continuously this is not

2:44:03

requiring manually monitoring but having a agent that's monitoring those servers

2:44:08

continuously and then the third is that by scripting out and continuously

2:44:13

monitoring your entire environment you're creating a self-audit trail that you can take back and demonstrate the

2:44:20

effectiveness of the operations environment that you are providing so

2:44:25

one of the cloud companies that is a strong advocate for devops is amazon's

2:44:31

web services aws and they have a really five distinct areas them that you can

2:44:36

zero in on board services so when the question comes up what is the role of aws in devops you want to really hold

2:44:43

out your hand and list of five areas of focus using your thumb and finger so you want to have flexible services built for

2:44:50

scale automation secure and a large partner ecosystem and having those five

2:44:58

areas will really be able to help demonstrate why you believe that aws and

2:45:03

other cloud providers but aws is certainly the leader in this space are great for being able to provide support

2:45:09

for the role of devops so one of the things that we want to be able to do effectively when we're releasing any

2:45:15

kind of solution is to be able to measure that solution and so kpis are very important so you will be asked for

2:45:21

three important dev of kpis and so three that really come to mind that are very

2:45:27

effective the first one is mean time to failure recovery and what this talks about is what is the average time does

2:45:34

it take to recover from a failure and if you have experience doing this then look

2:45:40

at the experience you have and use a specific example where you are able to demonstrate that mean time to failure

2:45:46

recovery the second is deployment frequency and with deployment frequency you want to be able to discuss how often

2:45:54

do you actually deploy solutions and what actually happens when you're actually doing those deployments and

2:45:59

what does the impacts to your network look like when you're doing those deployments and then the third one is

2:46:05

really tied to that deployment frequency which is around what is the percentage of failed deployments and so and how

2:46:12

many times did you deploy to a server and something happened where the server itself failed what we're looking for

2:46:18

when you're going through and being asked for these kpis is experience with actually doing a devops deployment and

2:46:25

being able to understand what devops looks like when you're pushing out your infrastructure and then the second is

2:46:32

being able to validate that self-auditing ability and one word of caution is don't go in there and say

2:46:38

that you have a hundred percent success uh the reality is that servers do degrade over time and you maybe want to

2:46:45

talk about a time when a server did degrade in your environment and use that as a story for how you're able to

2:46:52

successfully get over and solve that degradation so one of the terms that is

2:46:58

very popular at the moment is infrastructure as code and so you're going to be asked to explain infrastructure as code and really it's

2:47:05

it's something that actually becomes a byproduct of the work you have to do when you're actually putting together your devops environment and

2:47:12

infrastructure's code really refers to the writing of code to actually manage

2:47:18

your environment and you can go through many of the other tools that we've covered in this series but you'll see

2:47:24

that xml or ruby or yaml are used as languages to describe the configuration

2:47:32

for your environment this allows you to then create the rules and instructions that can be read by the machines that

2:47:39

are actually setting up the physical hardware versus a traditional model which is having software and installing

2:47:45

that software directly onto the machine this is really important when it comes to cloud computing there really is a

2:47:52

strong emphasis of being able to explain infrastructure as a service and infrastructure as code is fundamental to

2:47:59

the foundation to infrastructure as service and then finally allows you to be able to talk about how you can use

2:48:07

scripted languages such as yaml to be able to create a consistent experience

2:48:13

for your entire network all right let's talk about the next section which is continuous integration with jenkins so

2:48:20

the first question you'll be asked about with jenkins is explain a master slave architecture of jenkins so the way that

2:48:28

jenkins is set up is that the jenkins master will pull code from your remote git repository such as github and will

2:48:36

check that repository every time there is a code commit it will distribute the workload of that code and the tests that

2:48:44

need to be applied to that code to all of the jenkins slaves and then on request the jenkins master and the

2:48:49

slaves will then carry out all the builds and tests to be able to produce test reports the next question you'll be

2:48:57

asked is what is a jenkins file and simply put a jenkins file is a text file

2:49:02

that has a definition of the jenkins pipeline and is checked into a source code repository and this really allows

2:49:10

for three distinct things to happen one allows for a code review and iteration of the pipeline it permits an audit

2:49:16

trail for that pipeline and also provides a single source of truth for the pipeline which can be viewed and

2:49:23

edited so which of the following commands runs jenkins from the command line is it java jar jenkins dot war java

2:49:32

dash war jenkins.jar java.jar jenkins jar java dash war jenkins.org

2:49:40

and the answer is a java jar jenkins.war so when working with jenkins you're

2:49:47

going to be asked what are the key concepts and aspects of working with a

2:49:52

jenkins pipeline and you want to really hold out your fingers here and go through four key areas and that is

2:49:59

pipeline node step and stay so pipeline refers to the user-defined model of a cd

2:50:06

continuous delivery pipeline node are the machines which is which are part of that jenkins environment within the

2:50:13

pipeline step is a single task that tells jenkins what to do at that

2:50:19

particular point in time and then finally stage defines a conceptually distinct subset of tasks performed

2:50:26

through the entire pipeline and tasks could be build test and deploy so which

2:50:32

of the following file is used to define dependency in maven and do we have a

2:50:38

build.xml b palm.xml c dependency.xml or d

2:50:45

version.xml and the answer is palm.xml working with jenkins you're

2:50:50

going to be asked to explain the two types of pipeline used in jenkins along

2:50:55

with the syntax and so a scripted pipeline is based on groovyscript as

2:51:00

their domain specific language for jenkins and there are one or more note blocks that are used throughout the

2:51:07

entire pipeline on the left hand side you can actually see what the actual script would look like and the right

2:51:12

hand side shows what the actual declaration for each section of that script would be the second type of

2:51:20

jenkins pipeline is a declarative pipeline and a declarative pipeline provides a simple and a friendly syntax

2:51:27

to define what the pipeline should look like and then you can actually at this point use an example to actually break

2:51:33

out how blocks are used to find the work completed in a decorative pipeline so

2:51:39

how do you create a copy and backup of jenkins well to create a backup periodically back up jenkins to your

2:51:46

jenkins home directory and then create a copy of that directory it's really as simple as that the question you'll be

2:51:52

asked as well is how can you copy jenkins from one server to another well there essentially there are three ways

2:51:58

to do that one is you can move a job from one installation of jenkins to another by copying the corresponding job

2:52:05

directory the second would be to create a copy of an existing job directory and making a clone of that job directory but

2:52:12

with a different name and the third is to rename an existing job by renaming a

2:52:18

directory so security is fundamental to all the work that we do within devops

2:52:23

and jenkins provides the center core to all the work that gets completed within

2:52:29

a devops environment there are three ways in which you can apply security to

2:52:35

authenticate users effectively and when you're asked about this question of

2:52:40

security within jenkins the three responses you want to be able to provide is a jenkins has its own internal

2:52:47

database that uses secured user data from and user credentials b is you can

2:52:53

use a ldap or lightweight directory access protocol server to be able to authenticate jenkins users or c you can

2:53:02

actually configure jenkins to authenticate by using such as oauth which is a more modern method of being

2:53:09

able to authenticate users you're going to be asked how to deploy a custom build of a core plugin within jenkins and

2:53:17

essentially the four steps you want to go through are first of all copying the

2:53:22

hpi plugin file into the jenkins home plugins subdirectory you want to remove

2:53:29

the plugins development directory if there is one you want to create an empty file called plugin.hpi.pinned

2:53:37

and once you've completed these three steps restart jenkins and your custom

2:53:42

build plugin should be available how can you temporarily turn off jenkins security if the administrative user has

2:53:49

locked themselves out of the admin console this doesn't happen very often but when it does it's good to know how

2:53:56

you can actually get into jenkins and be able to resolve the problems of authenticating effectively into the

2:54:02

system as an administrator so when you want to be able to get into a jenkins environment what you want to be able to

2:54:08

do is locate the config file you should see that it's set to true which allows

2:54:14

for security to be enabled if you then change the user security setting to

2:54:20

false security will disabled allow you to make your administrative changes and will not be re-enabled until the next

2:54:27

time jenkins is restarted so what are the ways in which a build

2:54:32

can be scheduled and run in jenkins well there are four ways in which you can identify the way a build can be

2:54:39

scheduled on running jenkins the first is when source code management commits new code into the repository you can run

2:54:47

jenkins at that point the second can be the after the completion of other builds

2:54:52

so maybe you have multiple builds in your project that are dependent to each other and when so many other builds have

2:54:58

been executed then you can have jenkins run you can schedule build to run at a

2:55:03

specified time so you may have nightly builds of your code that illustrates the

2:55:08

changes in the solution you're building and then finally you also can manually build a environment on request

2:55:16

occasionally you will want to also restart jenkins and so it's good that when a question around how do you

2:55:22

restart jenkins manually comes up that you have the answers and there are two ways in which you can do it one is you

2:55:28

can force a restart without waiting for bills to complete by using the jenkins url that you have for your environment

2:55:34

slash restart or you can allow all running bills to complete before restart are required in which case you would use

2:55:41

the command of the url for your jenkins environment slash safe restart i hope

2:55:46

this helps you in your interview with that we have reached the end of this complete jenkins tutorial

2:55:53

i hope you enjoyed this video do like and share it thank you for watching and stay tuned for more from simply learn

2:56:01

[Music]

English (auto-generated)

All

From the series

From Simplilearn

Jenkins

DevOps

Computer programming
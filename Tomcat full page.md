|                                                                                                                                   |                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [![The Jakarta Project](https://tomcat.apache.org/tomcat-3.2-doc/uguide/images/banner.gif)](http://jakarta.apache.org/index.html) | ![The mighty Tomcat - Meow!](https://tomcat.apache.org/tomcat-3.2-doc/uguide/images/tomcat.gif) |

# Tomcat - A Minimalistic User's Guide

This document provides some basic information about Tomcat. Some of the topics covered here are:

1. The installation of the Tomcat binary version.
2. The main issues related to scripts used by Tomcat.
3. The main issues related to server.xml, Tomcat's main configuration file.
4. An explanation on how to set up Tomcat to work with native web servers.
5. An explanation on how to deploy Tomcat on a real web site.

Hopefully this should be enough for any new user to get started with Tomcat. If something is missing then try (in this order):

1. Search the Tomcat [faq](http://jakarta.apache.org/jyve-faq/Turbine/screen/MainMenu/faq_id/12/project_id/2/screen/DisplayTopics/action/SetAll).
2. Search the Tomcat list [archive](http://www.metronet.com/~wjm/tomcat/).
3. Post a question to the tomcat-user [mailing list](http://jakarta.apache.org/getinvolved/mail.html).

We encourage all users to add answers to questions into the Tomcat faq and/or this document, if they don't already exist. If you have any comments or suggestions about this document don't hesitate to send them to the Tomcat [mailing lists](http://jakarta.apache.org/getinvolved/mail.html).

## Getting Started

Tomcat is a servlet container with a JSP environment. A servlet container is a runtime shell that manages and invokes servlets on behalf of users.

You can roughly partition servlet containers into:

1. **Stand-alone servlet containers**  
These are an integral part of the web server. This is the case when using a Java-based web server, for example the servlet container that is part of the JavaWebServer. Stand-alone is the default mode used by Tomcat.  
Most web servers, however, are not Java-based, which leads us to the next two container types.
2. **In-process servlet containers**  
The servlet container is a combination of a web server plugin and a Java container implementation. The web server plugin opens a JVM inside the web server's address space and lets the Java container run in it. If a certain request should execute a Servlet, the plugin takes control over the request and passes it (using JNI) to the Java container. An in-process container is suitable for multi-threaded single-process servers and provides good performance but is limited in scalability.
3. **Out-of-process servlet containers**  
The servlet container is a combination of a web server plugin and a Java container implementation that runs in a JVM outside the web server. The web server plugin and the Java container JVM communicate using some IPC mechanism (usually TCP/IP sockets). If a certain request should execute a Servlet the plugin takes control over the request and passes it (using the IPCs) to the Java container. The response time of an out-of-process engine is not as good as in the in-process one but the out-of-process engine performs better in many measurable ways (scalability, stability, etc.).

Tomcat can be used as either a stand-alone container (mainly for development and debugging) or as an add-on to an existing web server (currently Apache, IIS and Netscape servers are supported). This means that whenever you are deploying Tomcat you will have to decide how to use it and, if you select options 2 or 3, you will also need to install a web server adapter.

## What is the Difference Between Tomcat and Jserv? Isn't Tomcat==Jserv?

This is a common misunderstanding. Jserv is a Servlet API 2.0-compliant container that was created to be used with Apache. Tomcat is a complete re-write and is a Servlet API 2.2 and JSP 1.1-compliant container.

Tomcat uses some of the code written for Jserv, especially Jserv's Apache server adapter, but this is where the similarities end.

## How Do I Install the Binary Version of Tomcat?

Very simple. You should:

- Download the zip/tar.gz/whatever file from [http://jakarta.apache.org/downloads/binindex.html](http://jakarta.apache.org/downloads/binindex.html).
- Unpack the file into some directory (say foo). This should create a new subdirectory named "jakarta-tomcat-3.2.1". If it's not where you want it, move this directory to the desired location.
- Change directory to "jakarta-tomcat-3.2.1" and set a new environment variable (TOMCAT_HOME) to point to the root directory of your Tomcat hierarchy.
1. On Win32 you should type:  
"set TOMCAT_HOME=foo\jakarta-tomcat-3.2.1"
2. On UNIX you should type:  
for bash/sh "TOMCAT_HOME=foo/jakarta-tomcat-3.2.1 ; export TOMCAT_HOME"  
for tcsh "setenv TOMCAT_HOME foo/jakarta-tomcat-3.2.1"
- Set the environment variable JAVA_HOME to point to the root directory of your JDK hierarchy, then add the Java interpreter to your PATH environment variable.

That's it! You can now execute Tomcat and it will run as a stand-alone (type 1) servlet container.

## Starting and Stopping Tomcat

You start and stop Tomcat using the scripts in the bin directory.

To start Tomcat execute:

> On UNIX: bin/startup.sh
> 
> On Win32: bin\startup

To stop Tomcat execute:

> On UNIX: bin/shutdown.sh
> 
> On Win32: bin\shutdown

## The Tomcat directory structure

Assuming you unzipped/untarred the Tomcat binary distribution you should have the following directory structure:

|Directory name|Description|
|---|---|
|bin|Contains startup/shutdown... scripts|
|conf|Contains various configuration files including _server.xml_ (Tomcat's main configuration file) and _web.xml_ that sets the default values for the various web applications deployed in Tomcat.|
|doc|Contains miscellaneous documents regarding Tomcat.|
|lib|Contains various jar files that are used by Tomcat. On UNIX any file in this directory is appended to Tomcat's classpath.|
|logs|This is where Tomcat places it's log files.|
|src|The servlet APIs source files. Don't get excited, though; these are only the empty interfaces and abstract classes that should be implemented by any servlet container.|
|webapps|Contains sample web applications.|

Additionally you can, or Tomcat will, create the following directories:

|   |   |
|---|---|
|work|Automatically generated by Tomcat, this is where Tomcat places intermediate files (such as compiled JSP files) during it's work. If you delete this directory while Tomcat is running you will not be able to execute JSP pages.|
|classes|You can create this directory to add additional classes to the classpath. Any class that you add to this directory will find it's place in Tomcat's classpath.|

## The Tomcat Scripts

Tomcat is a Java program, and therefore it is possible to execute it from the command line, after setting several environment variables. However, setting each environment variable and following the command line parameters used by Tomcat is error prone and tedious. Instead, the Tomcat development team provides a few scripts to ease starting and stopping Tomcat.

**Note: The scripts are only a convenient way to start/stop... You can modify them to customize the CLASSPATH, environment variables such as PATH and LD_LIBRARY_PATH, etc., so long as a correct command line is generated for Tomcat.**

What are these scripts? The following table presents the scripts that are most important for the common user:

|Script name|Description|
|---|---|
|tomcat|The main script. Sets the proper environment, including CLASSPATH, TOMCAT_HOME and JAVA_HOME, and starts Tomcat with the proper command line parameters.|
|startup|Starts tomcat in the background. Shortcut for "tomcat start"|
|shutdown|Stops tomcat (shutting it down). Shortcut for "tomcat stop"|

The script which has the most significance for users is tomcat (tomcat.sh/tomcat.bat). The other Tomcat related scripts serve as a simplified single-task oriented entry point to the tomcat script (set different command line parameters etc.).

A closer look at tomcat.sh/tomcat.bat yields that it performs the following actions:

|Operating System|Actions|
|---|---|
|Unix|- Guessing what is TOMCAT_HOME if it is not specified.<br>- Guessing what is JAVA_HOME if it is not specified.<br>- Setting up a CLASSPATH that contains -<br>    1. The ${TOMCAT_HOME}/classes directory (if available).<br>    2. All the contents of ${TOMCAT_HOME}/lib.<br>    3. ${JAVA_HOME}/lib/tools.jar (this jar file contains the tool javac, we need javac for jsp files).<br>- Executes java with command line parameters that set up a java system environment, called tomcat.home, with org.apache.tomcat.startup.Tomcat as the startup class. It also passes command line parameters to org.apache.tomcat.startup.Tomcat, such as:<br>    <br>    1. The operation to perform start/stop/run/etc.<br>    2. A path to the server.xml used by this Tomcat process.<br>    <br>    For example, if server.xml is located in /etc/server_1.xml and the user wants to start Tomcat in the background, they should provide the following command line:<br>    <br>    bin/tomcat.sh start -f /etc/server_1.xml|
|Win32|- Saves current TOMCAT_HOME and CLASSPATH settings.<br>- Tests JAVA_HOME to insure it is set.<br>- Tests if TOMCAT_HOME is set and defaults it to "." if not set. Then TOMCAT_HOME is used to test the existence of servlet.jar to insure TOMCAT_HOME is valid.<br>- Setting up a CLASSPATH that contains -<br>    1. %TOMCAT_HOME%\classes (even if does not exist),<br>    2. Jar files from %TOMCAT_HOME%\lib. If possible, all jar files in %TOMCAT_HOME%\lib are dynamically included. If not possible, the following jar files are included statically: ant.jar, jasper.jar, jaxp.jar, parser.jar, servlet.jar, webserver.jar<br>    3. %JAVA_HOME%\lib\tools.jar, if it exists (this jar file contains the tool javac, we need javac for jsp files).<br>- Executes %JAVA_HOME%\bin\java, with command line parameters that set up a java system environment, called tomcat.home, with org.apache.tomcat.startup.Tomcat as the startup class. It also passes command line parameters to org.apache.tomcat.startup.Tomcat, such as:<br>    <br>    1. The operation to perform start/stop/run/etc.<br>    2. A path to the server.xml used by this Tomcat process.<br>    <br>    For example, if server.xml is located in conf\server_1.xml and the user wants to start Tomcat in a new window, they should provide the following command line:<br>    <br>    bin\tomcat.bat start -f conf\server_1.xml<br>    <br>- Restores previously saved TOMCAT_HOME and CLASSPATH settings.|

As you can see, the Win32 version of tomcat.bat is not as robust as the Unix one. Especially, it does not guess the values of JAVA_HOME and only tries "." as a guess for TOMCAT_HOME. It can build CLASSPATH dynamically, but not in all cases. It can not build CLASSPATH dynamically if TOMCAT_HOME contains spaces, or on Win9x, if TOMCAT_HOME contains non-8.3 directory names.

## Tomcat's Configuration Files

Tomcat's configuration is based on two files:

1. server.xml - Tomcat's global configuration file.
2. web.xml - Configures the various contexts in Tomcat.

This section will deal with how to use these files. We are not going to cover the internals of web.xml, these internals are covered in depth in the Servlet APIs spec. Instead we will cover the content of server.xml and discuss the usage of web.xml in the context of Tomcat.

### server.xml

server.xml is Tomcat's main configuration file. It serves two goals:

1. Providing initial configuration for the Tomcat components.
2. Specifying structure for Tomcat, meaning, letting Tomcat boot and build itself by instantiating components as specified in server.xml.

The important elements in server.xml are described in the following table:

|Element|Description|
|---|---|
|Server|The topmost element in the file server.xml. Server defines a single Tomcat server. Generally you should not bother with it too much. A Server element can contain elements of type Logger and ContextManager.|
|Logger|This element defines a logger object. Each logger has a name to identify it, as well as a path to the log file to contain the logger output and a verbosityLevel (that specifies the log level). Currently there are loggers for the servlets (where the ServletContext.log() goes), JSP files and the tomcat runtime.|
|ContextManager|A ContextManager specifies the configuration and structure for a set of ContextInterceptors, RequestInterceptors, Contexts and their Connectors. The ContextManager has a few attributes that provides it with:<br><br>1. Debug level used for logging debug messages.<br>2. The base location for webapps/, conf/, logs/ and all defined contexts. It is used to start Tomcat from a directory other than TOMCAT_HOME.<br>3. The name of the working directory.<br>4. A flag to control whether stack traces and other debug information is included in the default responses.|
|ContextInterceptor & RequestInterceptor|These interceptors listen for certain events that happen in the ContextManager. For example, the ContextInterceptor listens for startup and shutdown events of Tomcat, and the RequestInterceptor watches the various phases that user requests need to pass during it's service. Tomcat's administrator doesn't need to know much about the interceptors; a developer on the other hand should know that this is how "global" type of operations can be implemented in Tomcat (for example, security and per request logging).|
|Connector|The Connector represents a connection to the user, either through a web server or directly to the user's browser (in a stand-alone configuration). The connector object is the one responsible for the management of the Tomcat worker threads and for read/write requests/responses from the sockets connecting to the various clients. The configuration of the connectors includes information such as:<br><br>1. The handler class.<br>2. The TCP/IP port where the handler listens.<br>3. The TCP/IP backlog for the handler server socket.<br><br>We will describe how to use this Connector configuration later in the document.|
|Context|Each Context represents a path in the Tomcat hierarchy where you place a web application. A Tomcat Context has the following configuration:<br><br>1. The path where the context is located. This can be a full path or relative to the ContextManager's home.<br>2. Debug level used for logging debug messages.<br>3. A reloadable flag. When developing a servlet it is very convenient to have Tomcat reload it upon change, this lets you fix bugs and have Tomcat test the new code without the need to shutdown and restart. To turn on servlet reloading set the reloadable flag to true. Detecting changes however is time consuming; moreover, since the new servlets are getting loaded in a new class-loader object there are cases where this class-reloading trigger casts errors. To avoid these problems you can set the reloadable flag to false; this will disable the autoreload feature.|



Additional information may be found within the server.xml file.

### Starting Tomcat From Another Directory

By default tomcat will use TOMCAT_HOME/conf/server.xml for configuration. The default configuration will use TOMCAT_HOME as it's base for the contexts.

You can change this by using the "-f /path/to/server.xml" option, with a different server configuration file and setting the home property of the context manger. You need to set up the required files inside the home:

- A webapps/ directory (if you created one) - all war files will be expanded and all subdirectories added as contexts.
- conf/ directory - you can store tomcat-users.xml and other configuration files.
- logs/ - all logs will go to this directory instead of the main TOMCAT_HOME/logs/.
- work/ - work directories for the contexts.

If the ContextManager.home property in server.xml is relative, it will be relative to the current working directory.

### web.xml

A detailed description of web.xml and the web application structure (including directory structure and configuration) is available in chapters 9, 10 and 14 of the [Servlet API Spec](http://java.sun.com/products/servlet/) and we are not going to write about it.

There is however a small Tomcat related "feature" that is related to web.xml. Tomcat lets the user define default web.xml values for all context by putting a default web.xml file in the conf directory. When constructing a new Context, Tomcat uses the default web.xml file as the base configuration and the application specific web.xml (the one located in the application's WEB-INF/web.xml), only overwrite these defaults.

## Setting Tomcat to Cooperate with the Apache Web Server

Up until now we have not discussed Tomcat as a server add on, instead we have considered it as a stand-alone container and discussed how it can be used. There are however a few problems with this picture:

1. Tomcat is not as fast as Apache when it comes to static pages.
2. Tomcat is not as configurable as Apache.
3. Tomcat is not as robust as Apache.
4. There are many sites with long time investment in certain web servers, for example, sites that are using CGI scripts/Server API modules/perl/php... We cannot assume that all of them will want to ditch this legacy.

For all these reasons it is recommended that real world sites use a web server, such as Apache, for serving the static content of the site, and use Tomcat as a Servlet/JSP add-on.

We are not going to cover the different configuration in depth, instead we will:

1. Cover the fundamental behavior of the web server.
2. Explain what configuration is needed.
3. Demonstrate this on Apache.

### Web Server Operation

In a nutshell a web server is waiting for client HTTP requests. When these requests arrive the server does whatever is needed to serve the requests by providing the necessary content. Adding a servlet container may somewhat change this behavior. Now the web server needs also to perform the following:

- Load the servlet container adapter library and initialize it (prior to serving requests).
- When a request arrives, it needs to check and see if a certain request belongs to a servlet, if so it needs to let the adapter take the request and handle it.

The adapter on the other hand needs to know what requests it is going to serve, usually based on some pattern in the request URL, and to where to direct these requests.

Things are even more complex when the user wants to set a configuration that uses virtual hosts, or when they want multiple developers to work on the same web server but on different servlet container JVMs. We will cover these two cases in the advanced sections.

### What is the Needed Configuration

The most obvious configuration that one can think of is the identity of the servlet URLs that are under the responsibility of the servlet container. This is clear; someone must know what requests to transmit to the servlet container... Yet there are additional configuration items that we should provide to the web-server/servlet-container combination:

- We also need to provide configuration regarding the available Tomcat processes and on which TCP/IP host/port they are listening.
- We need to tell the web server the location of the adapter library (so it will be able to load it on startup).
- We need to set adapter internal information such as where and how much to log, etc.

All this information must appear either in the web server configuration, or in a private configuration files used by the adapter. The next section will demonstrate how configuration can be implemented on Apache.

### Making it on Apache

This section shows you how to configure Apache to work with Tomcat; it tries to provide explanations as well as insight for the configuration directives that you should use. You can find additional information in the [jserv install page](http://java.apache.org/jserv/install/index.html) .

When Tomcat starts up it will automatically generate a configuration file for Apache in TOMCAT_HOME/conf/tomcat-apache.conf. Most of the time you don't need to do anything but include this file (appending "Include TOMCAT_HOME/conf/tomcat-apache.conf") in your httpd.conf. If you have special needs, for example an AJP port other the 8007, you can use this file as a base for your customized configuration and save the results in another file. If you manage the Apache configuration yourself you'll need to update it whenever you add a new context.

**Tomcat:** you must restart tomcat and apache after adding a new context; Apache doesn't support configuration changes without a restart. Also the file TOMCAT_HOME/conf/tomcat-apache.conf is generated when tomcat starts, so you'll need to start Tomcat before Apache. Tomcat will overwrite TOMCAT_HOME/conf/tomcat-apache.conf each startup so customized configuration should be kept elsewhere.

The Apache-Tomcat configuration uses Apache core configuration directives as well as Jserv unique directives so it may confuse you at first, there are however two things simplifying it:

- In general you can distinguish between the two directive "families" by noting that all the Jserv unique directives start with an "ApJServ" prefix.
- The entire Tomcat related configuration is concentrated in a single configuration file named tomcat.conf, or the automatically generated tomcat-apache.conf, so you can look at a single file.

Let's look now at a sample tomcat.conf file.

|   |
|---|
_A Minimalistic Apache-Tomcat Configuration_
|###########################################################<br>#      A minimalistic Apache-Tomcat Configuration File    #<br>###########################################################<br><br># Note: this file should be appended or included into your httpd.conf<br><br># (1) Loading the jserv module that serves as Tomcat's apache adapter.<br>LoadModule jserv_module libexec/mod_jserv.so<br><br># (1a) Module dependent configuration.<br><IfModule mod_jserv.c><br><br># (2) Meaning, Apache will not try to start Tomcat.<br>ApJServManual on<br># (2a) Meaning, secure communication is off<br>ApJServSecretKey DISABLED<br># (2b) Meaning, when virtual hosts are used, copy the mount<br># points from the base server<br>ApJServMountCopy on<br># (2c) Log level for the jserv module.<br>ApJServLogLevel notice<br><br># (3) Meaning, the default communication protocol is ajpv12<br>ApJServDefaultProtocol ajpv12<br># (3a) Default location for the Tomcat connectors.<br># Located on the same host and on port 8007<br>ApJServDefaultHost localhost<br>ApJServDefaultPort 8007<br><br># (4)<br>ApJServMount /examples /root<br># Full URL mount<br># ApJServMount /examples ajpv12://hostname:port/root<br></IfModule>|

As you can see the configuration process was split into 4 steps that will now be explained:

1. In this step we instruct Apache to load the jserv shared-object (or the NT world dll). This is a well known Apache directive. If the loading went well and the module came from a file named mod_jserv.c (1a) we can start with the rest of the Jserv-Tomcat configuration.
2. This step sets various Jserv internal parameters, these parameters:
- Instruct jserv not to start the Tomcat process. Automatically starting Tomcat is not implemented yet.
- Disable the secret key challenge/response between Apache and Tomcat. Again, the secret key work is not implemented yet.
- Instruct jserv to copy the base server mount points (see next section) in case of virtual hosting.
- Instruct jserv to use the notice log level. Other log levels include emerg, alert, crit, error, warn, info and debug.
1. This step sets the default communication parameters. Basically it says that the default protocol used for the communication is ajpv12 (do not mess with this one) and that the Tomcat process runs on the same machine and listens on port 8007. If you run Tomcat on a machine other than the one used for Apache you should either update your ApJServDefaultHost or use a full URL when mounting contexts (see next). Also, if you configured the Tomcat connectors to use a port other then 8007, you should update your ApJServDefaultPort or use a full URL when mounting contexts.
2. This step mounts a context to Tomcat. Basically it says that all the web server paths that start with /examples go to Tomcat. This ApJServMount example is a rather simple one, in fact ApJServMount can also provide information regarding the communication protocol to be used and the location where the Tomcat process listens, for example:

ApJServMount /examples ajpv12://hostname:port/root

mounts the context /examples to a Tomcat process that runs on host "hostname" and listens on port number "port".

Now that you understand the different configuration instructions in the sample file, how can you add it to the Apache configuration? One "simple" method is to write its content in the httpd.conf (the Apache configuration file), this however can be very messy. Instead you should use the Apache include directive. At the end of the Apache configuration file (httpd.conf) add the following directive:

include <full path to the Tomcat configuration file>

for example:

include /tome/tomcat/conf/tomcat.conf

This will add your Tomcat configuration to Apache, after that you should copy the jserv module to the Apache libexec (or modules in the Win32 case) directory and restart (stop+start) Apache. It should now be able to connect to Tomcat.

### Obtaining the Jserv Module (mod_jserv)

As previously stated, we need a web server adapter to sit in Apache and redirect requests to Tomcat. For Apache, this adapter is a slightly modified version of mod_jserv.

You may try to look [here](http://jakarta.apache.org/downloads/binindex.html) and see if there is an already pre-built version of mod_jserv that suites your OS (Usually there is one for NT), however, being a native library you should not expect that yet (too many OS's, not enough developers, life too short...). Moreover, small variations in the way you built Apache/Your specific UNIX variant may result in dynamic linking errors. You should really try to build mod_jserv for your system (don't panic, it is not that hard!).

Building mod_jserv on **UNIX** involves the following:

1. Download the source distribution of Tomcat from [here](http://jakarta.apache.org/downloads/sourceindex.html).
2. Uncompress it into some directory.
3. Building the module:
- Change directory into jakarta-tomcat/src/native/apache/jserv/
- Execute the build command

apxs -c -o mod_jserv.so *.c

apxs is part of the Apache distribution and should be located in your APACHE_HOME/bin.

Building mod_jserv for **Win32** is less likely (you already have a downloadable dll for Win32). Yet if you _want_ to build it you should install Visual C++ and perform the following:

1. Download the source distribution of Tomcat from [here](http://jakarta.apache.org/downloads/sourceindex.html).
2. Unzip it into some directory.
3. Building the module:
- Change directory into jakarta-tomcat\src\native\apache\jserv
- Add Visual C++ into your environment by executing the script VCVARS32.BAT.
- Set an environment variable called APACHE_SRC which points to the Apache source directory, i.e. SET APACHE_SRC=C:\Program Files\Apache Group\Apache\src. Note that the make file expects to link to "CoreR\ApacheCore.lib" under the APACHE_SRC directory. See the Apache documentation for building ApacheCore.
- Execute the build command

nmake -f Makefile.win32

nmake is the Visual C++ make program.

That's it; you have built mod_jserv...

### Making Apache Serve your Context's Static Files

The previous Apache-Tomcat configuration file was somewhat inefficient, it instructed Apache to send any request for a resource that starts with the /examples prefix to be served by Tomcat. Do we really want that? There are many static files that may be a part of our servlet context (for example images and static HTML), why should Tomcat serve these files?

You may actually have reasons for doing that, for example:

1. You may want to configure Tomcat based security for these resources.
2. You may want to follow users requests for static resources using interceptors.

In general however, this is not that case; and making Tomcat save static files is just a CPU waste. We should instead have Apache serve these static files and not Tomcat.

Having Apache serve the static files requires the following:

1. Instructing Apache to send all servlet requests to Tomcat.
2. Instructing Apache to send all JSP requests to Tomcat.

and leaving Apache to handle the rest. Let's look now at a sample tomcat.conf file that does exactly that:

|   |
|---|
_Apache-Tomcat Configuration where Apache Serves the Static Content_
|######################################################################<br>#              Apache-Tomcat Smart Context Redirection               #<br>######################################################################<br>LoadModule jserv_module modules/ApacheModuleJServ.dll<br><IfModule mod_jserv.c><br>ApJServManual on<br>ApJServDefaultProtocol ajpv12<br>ApJServSecretKey DISABLED<br>ApJServMountCopy on<br>ApJServLogLevel notice<br><br>ApJServDefaultHost localhost<br>ApJServDefaultPort 8007<br><br>#<br># Mounting a single smart context:<br>#<br># (1) Make Apache know about the context location.<br>Alias /examples c:/jakarta-tomcat/webapps/examples<br># (2) Optional, customize Apache context service.<br><Directory "c:/jakarta-tomcat/webapps/examples"><br>    Options Indexes FollowSymLinks<br># (2a) No directory indexing for the context root.<br>#    Options -Indexes<br># (2b) Set index.jsp to be the directory index file.<br>#    DirectoryIndex index.jsp<br></Directory><br># (3) Protect the WEB-INF directory from tampering.<br><Location /examples/WEB-INF/><br>    AllowOverride None<br>    deny from all<br></Location><br># (4) Instructing Apache to send all the .jsp files under the context to the <br># jserv servlet handler. <br><LocationMatch /examples/*.jsp><br>    SetHandler jserv-servlet<br></LocationMatch><br># (5) Direct known servlet URLs to Tomcat.<br>ApJServMount /examples/servlet /examples<br><br># (6) Optional, direct servlet only contexts to Tomcat.<br>ApJServMount /servlet /ROOT<br></IfModule>|

As you can see, the beginning of this configuration file is the same as seen in the previous example. The last step (mounting a context), however, was replaced in a long series of Apache and ApJServ configuration directives that will now be explained:

1. This step informs Apache of the context location and aliases it to an Apache virtual directory. This way Apache can serve files from this directory.
2. This optional step instructs Apache more about how to serve the context; for example you can decide if Apache will allow directory indexing (listing) or set a special index file.
3. This step instructs Apache to protect the WEB-INF directory from client access. For security reasons it is important to prevent visitors from viewing the content of the WEB-INF directory, for example web.xml can provide valuable information for intruders. This step blocks the WEB-INF content from visitors.
4. This step instructs Apache to serve all the jsp locations within the context using the jserv servlet handler. The servlet handler redirects these requests based on the default host and port.
5. This step mounts specific servlet URLs to Tomcat. You should note that you should have as many such mount directives as the number of specific servlet URLs.
6. This last step is an example for the addition of servlet only context to Tomcat.

It is easy to see that this configuration is much more complex and error prone then the first example, this however is the price that you should (for now) pay for improved performance.

### Configuring for Multiple Tomcat JVMs

Sometimes it is useful to have different contexts handled by different JVMs, for example:

- When each context serves a different, specific task and runs on a different machine.
- When we want to have multiple developers work on a private Tomcat process but use the same web server.

Implementing such schemes where different contexts are served by different JVMs is very easy and the following configuration file demonstrates this:

|   |
|---|
_Apache-Tomcat Configuration with per Context JVM_
|######################################################################<br>#             Apache-Tomcat with JVM per Context                     #<br>######################################################################<br>LoadModule jserv_module modules/ApacheModuleJServ.dll<br><IfModule mod_jserv.c><br>ApJServManual on<br>ApJServDefaultProtocol ajpv12<br>ApJServSecretKey DISABLED<br>ApJServMountCopy on<br>ApJServLogLevel notice<br><br>ApJServDefaultHost localhost<br>ApJServDefaultPort 8007<br><br># Mounting the first context.<br>ApJServMount /joe ajpv12://joe.corp.com:8007/joe<br><br># Mounting the second context.<br>ApJServMount /bill ajpv12://bill.corp.com:8007/bill<br></IfModule>|

As you can see in the previous example, using several JVMs (even those that run on different machines) can be accomplished easily by using a full ajp URL mount. In this full URL we actually specify the host where the Tomcat process is located and it's port.

Had the two Tomcat processes run on the same machine, we would have to configure each of them with different connector ports. For example, assuming that the two JVMs runs on localhost, the Apache-Tomcat configuration should have something that looks like:

|   |
|---|
_Same Machine Multiple JVM Apache-Tomcat Configuration_
|######################################################################<br>#      Apache-Tomcat with Same Machine JVM per Context               #<br>######################################################################<br>LoadModule jserv_module modules/ApacheModuleJServ.dll<br><IfModule mod_jserv.c><br>ApJServManual on<br>ApJServDefaultProtocol ajpv12<br>ApJServSecretKey DISABLED<br>ApJServMountCopy on<br>ApJServLogLevel notice<br><br>ApJServDefaultHost localhost<br>ApJServDefaultPort 8007<br><br># Mounting the first context.<br>ApJServMount /joe ajpv12://localhost:8007/joe<br><br># Mounting the second context.<br>ApJServMount /bill ajpv12://localhost:8009/bill<br></IfModule>|

Looking at the above file you can see that we have two explicit ApJServ mount points each pointing to a different port on the same machine. It is clear that this configuration requires support from the configuration found in the server.xml files. We will need in these files different <Connector> configurations, for the different Tomcat processes. We will actually need two different server.xml files (lets call them server_joe.xml and server_bill.xml) with different <Connector> entries as shown in the next two samples:

|   |
|---|
_Joe's server.xml file_
|<?xml version="1.0" encoding="ISO-8859-1"?><br><br><Server><br>    <!-- Debug low-level events in XmlMapper startup --><br>    <xmlmapper:debug level="0" /><br><br>    <!--  @@@<br>        Note, the log files are suffixed with _joe to distinguish<br>        them from the bill files. <br>    --><br><br>    <Logger name="tc_log" <br>            path="logs/tomcat_joe.log"<br>            customOutput="yes" /><br><br>    <Logger name="servlet_log" <br>            path="logs/servlet_joe.log"<br>            customOutput="yes" /><br><br>    <Logger name="JASPER_LOG" <br>        path="logs/jasper_joe.log"<br>            verbosityLevel = "INFORMATION" /><br><br>    <!--  @@@<br>        Note, the work directory is suffixed with _joe to distinguish<br>        it from the bill work directory.<br>    --><br>    <ContextManager debug="0" workDir="work_joe" ><br>        <!-- ==================== Interceptors ==================== --><br><br>        ...<br>        <br>        <!-- ==================== Connectors ==================== --><br><br>        ...<br><br>        <!-- Apache AJP12 support. This is also used to shut down tomcat.<br>          --><br>        <!-- @@@ This connector uses port number 8007 for it's ajp communication --><br>        <Connector className="org.apache.tomcat.service.PoolTcpConnector"><br>            <Parameter name="handler" <br>       value="org.apache.tomcat.service.connector.Ajp12ConnectionHandler"/><br>            <Parameter name="port" value="8007"/><br>        </Connector><br>        <br>        <!-- ==================== Special webapps ==================== --><br><br>        <!-- @@@ the /jow context --><br>        <Context path="/joe" docBase="webapps/joe" debug="0" reloadable="true" > <br>        </Context><br>    </ContextManager><br></Server>|

When looking at server_joe.xml you can see that the <Connector> is configured for port 8007. In server_bill.xml (see next) on the other hand the <Connector> is configured for port 8009.

|   |
|---|
_Bill's server.xml file_
|<?xml version="1.0" encoding="ISO-8859-1"?><br><br><Server><br>    <!-- Debug low-level events in XmlMapper startup --><br>    <xmlmapper:debug level="0" /><br><br>    <!--  @@@<br>        Note, the log files are suffixed with _bill to distinguish<br>        them from the joe files. <br>    --><br><br>    <Logger name="tc_log" <br>            path="logs/tomcat_bill.log"<br>            customOutput="yes" /><br><br>    <Logger name="servlet_log" <br>            path="logs/servlet_bill.log"<br>            customOutput="yes" /><br><br>    <Logger name="JASPER_LOG" <br>        path="logs/jasper_bill.log"<br>            verbosityLevel = "INFORMATION" /><br><br>    <!--  @@@<br>        Note, the work directory is suffixed with _bill to distinguish<br>        it from the joe work directory.<br>    --><br>    <ContextManager debug="0" workDir="work_bill" ><br><br>        <!-- ==================== Interceptors ==================== --><br><br>        ...<br>        <br>        <!-- ==================== Connectors ==================== --><br><br>        ...<br><br>        <!-- Apache AJP12 support. This is also used to shut down tomcat.<br>          --><br>        <!-- @@@ This connector uses port number 8009 for it's ajp communication --><br>        <Connector className="org.apache.tomcat.service.PoolTcpConnector"><br>            <Parameter name="handler" <br>       value="org.apache.tomcat.service.connector.Ajp12ConnectionHandler"/><br>            <Parameter name="port" value="8009"/><br>        </Connector><br>        <br>        <!-- ==================== Special webapps ==================== --><br>    <br>        <!-- @@@ the /bill context --><br>        <Context path="/bill" docBase="webapps/bill" debug="0" reloadable="true" > <br>        </Context><br>    </ContextManager><br></Server>|

The port configuration is not the only place where the joe and bill configuration differs. We have @@@ marks in the xml files marking the four places where changes had to be made. As you can see, this difference is necessary to avoid the two Tomcat processes from overwriting each other's logs and workspace.

Then we should start the two tomcat processes using the -f command line option:

bin\startup -f conf\server_joe.xml

bin\startup -f conf\server_bill.xml

and then access them from Apache based on the different URL path prefixes.

### Configuring Virtual Hosting

It is possible to support virtual hosts under Tomcat Ver3.2, in fact the virtual host configuration is very similar to configuring for multiple JVM (as explained in the previous section) and the reason is simple; in Tomcat 3.2 each virtual host is implemented by a different Tomcat process.

With the current (Ver3.2) Tomcat, virtual hosting awareness is provided by the web server (Apache/Netscape). The web server virtual hosting support is used by the Tomcat adapter to redirect requests belonging to a certain virtual host to the JVM(s) containing the contexts of this virtual host. This means that if (for example) we have two virtual hosts (vhost1 and vhost2), we will have two JVMs: one running the contexts of vhost1 and the other running the contexts of vhost2. These JVMs are not aware of each others existence, in fact, they are not aware of the concept of virtual hosting. All the virtual hosting logic is inside the web-server adapter. To make things clearer, lets look at the following sample Apache-Tomcat configuration file:

|   |
|---|
_Apache-Tomcat Configuration with Virtual Hosts Support_
|######################################################################<br>#        Apache Tomcat Virtual Hosts Sample Configuration            #<br>######################################################################<br>LoadModule jserv_module modules/ApacheModuleJServ.dll<br><IfModule mod_jserv.c><br>ApJServManual on<br>ApJServDefaultProtocol ajpv12<br>ApJServSecretKey DISABLED<br>ApJServMountCopy on<br>ApJServLogLevel notice<br><br>ApJServDefaultHost localhost<br>ApJServDefaultPort 8007<br><br># 1 Creating an Apache virtual host configuration<br>NameVirtualHost 9.148.16.139<br><br># 2 Mounting the first virtual host<br><VirtualHost 9.148.16.139><br>ServerName www.vhost1.com<br>ApJServMount /examples ajpv12://localhost:8007/examples<br></VirtualHost><br><br># 3 Mounting the second virtual host<br><VirtualHost 9.148.16.139><br>ServerName www.vhost2.com<br>ApJServMount /examples ajpv12://localhost:8009/examples<br></VirtualHost><br></IfModule>|

As can be seen, steps 1,2 and 3 define two Apache virtual hosts and for each of them, mount the /examples context to a certain ajpv12 URL. Each such ajpv12 URL points to a JVM that contains the virtual host. The configuration of the two JVMs is very similar to the one demonstrated in the previous section, we will need again to use two different server.xml files (one for each virtual host process) and we will need to start the Tomcat processes with the -f command line option. After doing that we will be able to approach Apache, each time with a different host name, and the adapter will redirect us to the appropriate JVM.

**The need for improved virtual host support**  
Having each virtual host implemented by a different JVM is a huge scalability problem. The next versions of Tomcat will make it possible to support several virtual hosts within the same Tomcat JVM.

## Real World Configuration Tips

By default the Tomcat distribution comes with a naive configuration whose main goal is to promote first time user experience and an "out of the box" operation... This configuration however is not the best way to deploy Tomcat on real sites. For example, real sites may require some performance tuning and site-specific settings (additional path elements for example). This section will try to get you started by directing you to the first steps that should be taken before publishing a Tomcat based site.

### Modify and Customize the Batch Files

As stated in the previous sections, the startup scripts are here for your convenient. Yet, sometimes the scripts that are needed for deployment should be modified:

- To set resource limits such as maximum number of descriptors.
- To add new CLASSPATH entries (for example, JDBC drivers).
- To add new PATH/LD_LIBRARY_PATH entries (for example, JDBC drivers DLLs).
- To modify the JVM command line settings.
- Make sure that you are using a specific JVM (out of the two or three JVMs installed on your machine).
- To switch user from root to some other user using the "su" UNIX command.
- Your pet reason.

Some of these changes can be done without explicit changes to the basic scripts; for example, the tomcat script can use an environment variable named TOMCAT_OPTS to set extra command line parameters to the JVM (such as memory setting etc.). On _UNIX_ you can also create a file named ".tomcatrc" in your home directory and Tomcat will take environment information such as PATH, JAVA_HOME, TOMCAT_HOME and CLASSPATH from this file. On NT however (and also on UNIX when the modifications are for something such as the JVM command line) you are forced to rewrite some of the startup script...

**Do not hesitate, just do it.**

### Modify the Default JVM Settings

The default JVM settings in the tomcat script are very naïve; everything is left for defaults. There are a few things that you should consider to improve your Tomcat performance:

1. Modify your JVM memory configuration. Normally the JVM allocates an initial size for the Java heap and that's it, if you need more then this amount of memory you will not get it.  
Nevertheless, in loaded sites, giving more memory to the JVM improves Tomcat's performance. You should use command line parameters such as -Xms/-Xmx/-ms/-mx to set the minimum/maximum size of the Java heap (and check to see if the performance was improved).
2. Modify your JVM threading configuration. The SUN JDK1.2.2 for Linux comes with support for both, green and native threads. In general native threads are known to provide improved performance for I/O bound applications, green threads on the other hand put less stress on the machine. You should experiment with these two threading models and see which model is better for your site (in general, native threads are better).
3. Select the best JVM for the task. There are several JVM vendors, for example on Linux there are today (21/03/2000) two product level JVMs: the SUN JDK1.2.2 and the IBM JDK1.1.8. If your application does not require a specific JDK functionality, you should benchmark the two JVMs and select the better one. In my (Gal Shachor) internal tests I found the IBM JVM significantly faster than the one created by SUN, you should check that for yourself and make a calculated decision.

### Modify your Connectors

The Connectors, as configured in Tomcat's default server.xml contains two Connectors configured as in the next server.xml fragment:

|   |
|---|
_The two default Connectors in server.xml_
|<!-- (1) HTTP Connector for stand-alone operation --><br>        <Connector className="org.apache.tomcat.service.PoolTcpConnector"><br>            <Parameter name="handler"<br>                value="org.apache.tomcat.service.http.HttpConnectionHandler"/><br>            <Parameter name="port"<br>                value="8080"/><br>        </Connector><br><br>        <!-- (2) AJPV12 Connector for out-of-process operation --><br>        <Connector className="org.apache.tomcat.service.PoolTcpConnector"><br>            <Parameter name="handler"<br>                value="org.apache.tomcat.service.connector.Ajp12ConnectionHandler"/><br>            <Parameter name="port"<br>                value="8007"/><br>        </Connector>|

1. Is a Connector that listens on port 8080 for incoming HTTP requests. This connector is needed for stand-alone operation.
2. Is a Connector that listens on port 8007 for incoming AJPV12 requests. This connector is needed for web-server integration (out-of-process servlet integration).

The AJPV12 Connector is required for Tomcat shutdown. However, the HTTP Connector may be removed if stand-alone operation is not needed.

### Use a Thread Pool in your Connectors

Tomcat is a multi-threaded servlet container this means that each request needs to be executed by some thread. Prior to Tomcat 3.2, the default was to create a new thread to serve each request that arrives. This behavior is problematic for loaded sites because:

- Starting and stopping a thread for every request puts a needless burden on the operating system and the JVM.
- It is hard to limit the resource consumption. If 300 requests arrive concurrently Tomcat will open 300 threads to serve them and allocate all the resources needed to serve all the 300 requests at the same time. This causes Tomcat to allocate much more resources (CPU, Memory, Descriptors...) than it should and it can lead to low performance and even crashes if resources are exhausted.

The solution for these problems is to use a **thread pool**, which is the default for Tomcat 3.2. Servlet containers that are using a thread pool relieve themselves from directly managing their threads. Instead of allocating new threads; whenever they need a thread they ask for it from the pool, and when they are done, the thread is returned to the pool. The thread pool can now be used to implement sophisticated thread management techniques, such as:

1. Keeping threads "open" and reusing them over and over again. This saves the trouble associated with creating and destroying threads continuously.
- Usually the administrator can instruct the pool not to keep too many idle threads, freeing them if needed.
1. Setting an upper bound on the number of threads used concurrently. This prevents the resources allocation problem associated with unlimited thread allocation.
- If the container maxed out to the threads upper limit, and a new request arrives, the new request will have to wait for some other (previous) request to finish and free the thread used to service it.

You can refine the techniques described above in various ways, but these are only refinements. The main contribution of thread pools is thread-reuse and having a concurrency upper bound that limits resource usage.

Using a thread pool in Tomcat is a simple move; all you need to do is to use a PoolTcpConnector in your <Connector> configuration. For example the following server.xml fragment defines ajpv12, pooled Connector:

|   |
|---|
_Pooled ajpv12 Connector_
|<!-- A pooled AJPV12 Connector for out-of-process operation --><br>        <Connector className="org.apache.tomcat.service.PoolTcpConnector"><br>            <Parameter<br>                name="handler"<br>                value="org.apache.tomcat.service.connector.Ajp12ConnectionHandler"/><br>            <Parameter<br>                name="port"<br>                value="8007"/><br>        </Connector>|

This fragment is very simple and the (default) pool behaviour instructed by it is:

- Upper bound for concurrency of 50 threads.
- When the pool has more then 25 threads standing idle it will start to kill them.
- The pool will start 10 threads on creation, and it will try to keep 10 vacant threads (as long as the upper bound is kept).

The default configuration is suitable for medium load sites with an average of 10-40 concurrent requests. If your site differs you should modify this configuration (for example reduce the upper limit). Configuring the pool can be done through the <Connector> element in server.xml as demonstrated in the next fragment:

|   |
|---|
_Configuring the Thread Pool_
|<!-- A pooled AJPV12 Connector for out-of-process operation --><br>        <Connector className="org.apache.tomcat.service.PoolTcpConnector"><br>            <Parameter<br>                name="handler"<br>                value="org.apache.tomcat.service.connector.Ajp12ConnectionHandler"/><br>            <Parameter<br>                name="port"<br>                value="8007"/><br>            <Parameter<br>                name="max_threads"<br>                value="30"/><br>            <Parameter<br>                name="max_spare_threads"<br>                value="20"/><br>            <Parameter<br>                name="min_spare_threads"<br>                value="5" /><br>        </Connector>|

As can be seen the pool has 3 configuration parameters:

- max_threads - defines the upper bound to the for the concurrency, the pool will not create more then this number of threads.
- max_spare_threads - defines the maximum number of threads that the pool will keep idle. If the number of idle threads passes the value of max_spare_threads the pool will kill these threads.
- min_spare_threads - the pool will try to make sure that at any time there is at least this number of idle threads waiting for new requests to arrive. min_spare_threads must be bigger then 0.

You should use the above parameters to adjust the pool behavior to your needs.

### Disable Servlet Auto-Reloading

Servlet auto-reloading is really useful for development time. However it is very expensive (in performance degradation terms) and may put your application in strange conflicts when classes that were loaded by a certain classloader cannot co-operate with classes loaded by the current classloader.

So, unless you have a real need for class reloading during your deployment you should turn off the reloadable flag in your contexts.

## Authors

This document was created by:

- [Gal Shachor](mailto:shachor@il.ibm.com)

With help from (alphabetical ordered):

- Jonathan Bnayahu
- Fiona Czuczman
- Costin Manolache
- Chris Pepper

|   |
|---|
|Copyright ©1999 The Apache Software Foundation  <br>[Legal Stuff They Make Us Say](http://jakarta.apache.org/legal.html)  <br>[Contact Information](http://jakarta.apache.org/contact.html)|
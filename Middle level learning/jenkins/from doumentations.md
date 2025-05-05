


# Backing-up/Restoring Jenkins


- Disaster recovery.
    
- Recovering an older configuration (an accidental configuration change may not be discovered for some time).
    
- Recovering a file that is corrupted or was deleted accidentally.

## Creating a Backup[](https://www.jenkins.io/doc/book/system-administration/backing-up/#creating-a-backup)

Various schemes can be used to create backups. These are discussed in this section:

- Filesystem snapshots
    
- Plugins for backup
    
- Write a shell script that backs up the Jenkins controller

## Back up the Controller Key Separately[](https://www.jenkins.io/doc/book/system-administration/backing-up/#back-up-the-controller-key-separately)

**Never include the controller key in your Jenkins backup!**

The controller key is used to encrypt data in the _secrets_ directory that secures credentials. It is stored in the _$JENKINS_HOME/secrets/hudson.util.Secret_ file in the _$JENKINS_HOME/secrets/_ directory and encrypted with `master.key`. If you need to restore a system from a backup, you will need this file. And, if someone else accesses your backups and has this key, they have full access to all your information.


## Which Files Should Be Backed Up?

### $JENKINS_HOME
### Configuration files
### ./jobs Subdirectory[](https://www.jenkins.io/doc/book/system-administration/backing-up/#jobs-subdirectory)

The `$JENKINS_HOME/jobs` directory contains information related to all the jobs you create in Jenkins.

- **./builds** — Contains build records
    
- **./builds/archive** — Contains archived artifacts
    
    - Back this up if it is important to retain these artifacts long-term
        
    - These can be very large and may make your backups very large
        
    
- **./workspace** — Contains files checked out from the SCM
    
    - It is usually not necessary to back up these files. You can perform a clean checkout after restoring the system.
        
    
- **./plugins/*.hpi** — Plugin packages with specific versions used on your system
    
- **./plugins/*.jpi** — Plugin packages with specific versions used on your system

### What may not need to be backed up
- **./war** — Exploded `war` file
    
    - To restore a system, download the latest `war` file.
        
    
- **./cache** — Downloaded tools
    
    - To restore a system, download the current version of the tools.
        
    
- **./tools** — Extracted tools
    
    - To restore a system, extract the tools again.
        
    
- **./plugins/xxx** — Subdirectories of installed plugins
    
    - These will be automatically populated on the next restart.


## Validating a backup


A simple way to validate a full backup is to restore it to a temporary location. Create a directory for the test validation (such as **/mnt/backup-test**) and restore the backup to that directory.

Set $JENKINS_HOME to point to this directory, specifying a random HTTP port so you do not collide with the real Jenkins controller:

```
export JENKINS_HOME=/mnt/backup-test
```

Now execute the restored Jenkins controller:

```
java -jar jenkins.war --httpPort=9999
```


# Monitoring Jenkins

## Monitoring with Datadog[](https://www.jenkins.io/doc/book/system-administration/monitoring/#monitoring-with-datadog)

- [Datadog plugin for Jenkins](https://plugins.jenkins.io/datadog)
    
- [Metrics-Datadog plugin for Jenkins](https://plugins.jenkins.io/metrics-datadog)
    
- [Jenkins on Datadog](https://www.datadoghq.com/blog/monitor-jenkins-datadog)
    

## [](https://www.jenkins.io/doc/book/system-administration/monitoring/#monitoring-with-newrelic)Monitoring with Newrelic[](https://www.jenkins.io/doc/book/system-administration/monitoring/#monitoring-with-newrelic)

- [Jenkins on Newrelic](https://opensource.newrelic.com/projects/newrelic/nr-jenkins-plugin)
    
- [Developing a Jenkins Integration Pipeline for the New Relic Infrastructure On-Host Integrations](https://newrelic.com/blog/best-practices/how-use-jenkins-integration-tests)
    

## [](https://www.jenkins.io/doc/book/system-administration/monitoring/#monitoring-with-prometheus-and-grafana)Monitoring with Prometheus and Grafana[](https://www.jenkins.io/doc/book/system-administration/monitoring/#monitoring-with-prometheus-and-grafana)

- [Prometheus plugin for Jenkins](https://plugins.jenkins.io/prometheus)
    
- [How-To blog on Medium](https://medium.com/@eng.mohamed.m.saeed/monitoring-jenkins-with-grafana-and-prometheus-a7e037cbb376)
    

## [](https://www.jenkins.io/doc/book/system-administration/monitoring/#monitoring-with-javamelody)Monitoring with JavaMelody[](https://www.jenkins.io/doc/book/system-administration/monitoring/#monitoring-with-javamelody)

- [Monitoring plugin for Jenkins](https://plugins.jenkins.io/monitoring)
    

## [](https://www.jenkins.io/doc/book/system-administration/monitoring/#other-monitoring-plugins)Other Monitoring Plugins[](https://www.jenkins.io/doc/book/system-administration/monitoring/#other-monitoring-plugins)

- [Versions Node Monitors](https://plugins.jenkins.io/versioncolumn)
    
- [Agents Monitoring for unix nodes](https://plugins.jenkins.io/systemloadaverage-monitor)
    
- [Job/Queue/Slaves Monitoring](https://plugins.jenkins.io/jqs-monitoring)
    

## [](https://www.jenkins.io/doc/book/system-administration/monitoring/#ping-thread)Ping Thread[](https://www.jenkins.io/doc/book/system-administration/monitoring/#ping-thread)

Jenkins installs "ping thread" on every remoting connection, such as controller/agent connections, regardless of its transport mechanism (such as SSH, JNLP, etc.). The lower level of the Jenkins remoting protocol is a message oriented protocol, and a ping thread periodically sends a ping message that the receiving end will reply. The ping thread measures the time it takes for the reply to arrive, and if it’s taking excessive time (currently [4 minutes](https://github.com/jenkinsci/remoting/blob/master/src/main/java/hudson/remoting/Launcher.java) and configurable), then it assumes that the connection was lost and initiates the formal close down.


# Viewing logs [](https://www.jenkins.io/doc/book/system-administration/viewing-logs/#viewing-logs)


## [](https://www.jenkins.io/doc/book/system-administration/viewing-logs/#logs-on-the-system)Logs on the system[](https://www.jenkins.io/doc/book/system-administration/viewing-logs/#logs-on-the-system)

When running `jenkins.war` manually with `java -jar jenkins.war`, all logging information by default is output to standard out. Many Jenkins native packages modify this behavior to ensure logging information is output in a more conventional location for the platform.


# Authenticating scripted clients [](https://www.jenkins.io/doc/book/system-administration/authenticating-scripted-clients/#authenticating-scripted-clients)



To make scripted clients (such as wget) invoke operations that require authorization (such as scheduling a build), use HTTP BASIC authentication to specify the user name and the API token.

Earlier versions of Jenkins require you to specify your real password, and it is only available when your security realm is password-based (for example, OpenID, Crowd and CAS plugins authenticate you without a password, so you simply don’t have any password!) Specifying the real password is still supported, but it is not recommended because the risk of revealing password, and the human tendency to reuse the same password in different places.

The API token is available in your personal configuration page. Click your name on the top right corner on every page, then click "Configure" to see your API token. (The URL `$root/me/configure` is a good shortcut.) You can also change your API token from here.

Note that Jenkins does not do any authorization negotiation. i.e. it immediately returns a 403 (Forbidden) response instead of a 401 (Unauthorized) response, so make sure to send the authentication information from the first request (aka "preemptive authentication").


# Reverse proxy configuration [](https://www.jenkins.io/doc/book/system-administration/reverse-proxy-configuration-with-jenkins/#reverse-proxy-configuration)



A '[reverse proxy](https://en.wikipedia.org/wiki/Reverse_proxy)' allows an alternate HTTP or HTTPS provider to communicate with web browsers on behalf of Jenkins. The alternate provider may offer additional capabilities, like SSL encryption. The alternate provider may offload some work from Jenkins, like delivering static images.


# Managing systemd services [](https://www.jenkins.io/doc/book/system-administration/systemd-services/index.html#managing-systemd-services)

Beginning with Jenkins 2.332.1 and Jenkins 2.335, the Linux package installers use `systemd` to manage services. The RPM and deb package installers migrate configuration settings from System V `init` to `systemd` overrides.



# FIPS-140 [](https://www.jenkins.io/doc/book/system-administration/FIPS-140/#fips-140)



It may be possible to run Jenkins in a FIPS-140 compliant manner when the [compliance flag](https://www.jenkins.io/doc/book/managing/system-properties/#jenkins-security-fips140-compliance) is enabled, and the servlet container, the JVM, and the host OS are all appropriately configured. How to configure the servlet container, JVM and host are out of scope of the Jenkins community project as this is a complex area with many pitfalls and gotchas. Some Jenkins features may not work or be disabled.

|   |   |
|---|---|
||The Jenkins community does not actively check Jenkins or Plugins for [FIPS-140](https://csrc.nist.gov/pubs/fips/140-2/upd2/final) compliance issues.|

## [](https://www.jenkins.io/doc/book/system-administration/FIPS-140/#plugins)Plugins[](https://www.jenkins.io/doc/book/system-administration/FIPS-140/#plugins)

Plugins may or may not honour a request to run in FIPS-140 compliance mode. Before you install or upgrade any plugin, you should check the plugin’s code to ensure it adheres to the FIPS-140 standard.
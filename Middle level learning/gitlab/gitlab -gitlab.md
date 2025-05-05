

```
variables:
  MAVEN_CLI_OPTS: "-s .m2/settings.xml --batch-mode"
  WAR_NAME: "mvnwebapp-0.0.1-SNAPSHOT.war"
  TOMCAT_USER: "deployer"
  TOMCAT_PASSWORD: "deployer"
  TOMCAT_HOST: "http://<your-tomcat-host>:8080"
  TOMCAT_PATH: "/manager/text/deploy?path=/mavenwebapp&update=true"

stages:
  - build
  - deploy

build:
  stage: build
  image: maven:3.9.6-eclipse-temurin-17
  script:
    - mvn $MAVEN_CLI_OPTS clean package -DskipTests
  artifacts:
    paths:
      - target/*.war
  tags:
    - lab-server

deploy:
  stage: deploy
  image: curlimages/curl:latest
  script:
    - echo "Deploying $WAR_NAME to Tomcat"
    - curl -T target/$WAR_NAME "$TOMCAT_HOST$TOMCAT_PATH" --user "$TOMCAT_USER:$TOMCAT_PASSWORD"
  only:
    - main
  when: manual
  tags:
    - lab-server
```

ip addr show eth0 | grep inet



Thanks for the update — since you're using **WSL (Ubuntu inside Windows)** and still getting:

```
curl: (7) Failed to connect to host.docker.internal port 8080
```

Let’s troubleshoot in a focused way:

---

## ✅ Step-by-Step Fix

### 🔎 1. **Confirm Tomcat is actually running**

Run this inside your WSL terminal:

```bash
curl http://localhost:8080
```

You should see the Tomcat welcome page HTML. If this **fails**, then **Tomcat is not running** or not listening on port 8080.

If it's not running:

```bash
sudo systemctl restart tomcat
```

Or manually try:

```bash
/home/snasina/saran-env/tomcat/tomcat9/bin/startup.sh
```

---

### 🔎 2. **Expose WSL to Windows/Docker**

Docker (running on Windows) **can’t see Tomcat running inside WSL** unless it's exposed to Windows.

You must **bind Tomcat to 0.0.0.0** (not localhost only). Do this:

#### Edit Tomcat’s `server.xml`:

```bash
nano /home/snasina/saran-env/tomcat/tomcat9/conf/server.xml
```

Find this line:

```xml
<Connector port="8080" protocol="HTTP/1.1"
```

Make sure it includes:

```xml
address="0.0.0.0"
```

✅ Result:

```xml
<Connector address="0.0.0.0" port="8080" protocol="HTTP/1.1"
           connectionTimeout="20000"
           redirectPort="8443" />
```

Then restart Tomcat:

```bash
/home/snasina/saran-env/tomcat/tomcat9/bin/shutdown.sh
/home/snasina/saran-env/tomcat/tomcat9/bin/startup.sh
```

---

### 🔎 3. **Find WSL’s IP address**

Still not working? Get your **WSL IP** and test it directly:

```bash
ip addr show eth0 | grep inet
```

Example output:

```
inet 172.25.251.33/20 brd ...
```

Use this IP in `.gitlab-ci.yml`:

```yaml
TOMCAT_HOST: "http://172.25.251.33:8080"
```

Now test this from Windows CMD:

```bash
curl http://172.25.251.33:8080
```

✅ If this works, your Docker container can also reach it.

---

### 🚫 Don't Rely on `localhost` or `host.docker.internal` unless:

- You’re running Docker **inside** WSL2 (not Windows).
    
- Or have done proper port-forwarding.
    

---

## ✅ Summary Fix

1. Update Tomcat `server.xml` → `address="0.0.0.0"`.
    
2. Restart Tomcat.
    
3. Use WSL’s real IP in your pipeline.
    

---

Would you like me to generate a fixed `.gitlab-ci.yml` using that IP automatically?




You're getting a **403 Access Denied** from Tomcat Manager when trying to deploy via `curl`, **even with correct credentials**. This happens because Tomcat, **by default**, restricts remote access to the `/manager` endpoints.

---

### ✅ To Fix the 403 Error, You Must:

1. **Assign the correct roles to your user**
    
2. **Allow remote IPs** in the `manager` app’s `context.xml`
    

---

## 🔧 Step 1: Ensure your user has the right roles

Edit:

```bash
nano /home/snasina/saran-env/tomcat/tomcat9/conf/tomcat-users.xml
```

Make sure it includes something like:

```xml
<role rolename="manager-script"/>
<user username="tomcat" password="s3cret" roles="manager-script"/>
```

⚠️ Do **NOT** include `manager-gui` with `manager-script` for security reasons.

---

## 🔧 Step 2: Allow remote access in `context.xml`

Edit this file:

```bash
nano /home/snasina/saran-env/tomcat/tomcat9/webapps/manager/META-INF/context.xml
```

Find this line:

```xml
<Context antiResourceLocking="false" privileged="true" >
```

And below it, remove or comment out the following `<Valve>`:

```xml
<!--
<Valve className="org.apache.catalina.valves.RemoteAddrValve"
       allow="127\.\d+\.\d+\.\d+|::1" />
-->
```

This `RemoteAddrValve` restricts access to localhost only. Commenting it out disables that restriction.

---

## 🔄 Step 3: Restart Tomcat

```bash
/home/snasina/saran-env/tomcat/tomcat9/bin/shutdown.sh
/home/snasina/saran-env/tomcat/tomcat9/bin/startup.sh
```

---

## ✅ Final Test

Now re-run your `curl` command:

```bash
curl -T target/$WAR_NAME "$TOMCAT_HOST$TOMCAT_PATH" --user "$TOMCAT_USER:$TOMCAT_PASSWORD"
```

Make sure:

- `$TOMCAT_HOST` is reachable (e.g., `http://172.x.x.x:8080`)
    
- `$TOMCAT_PATH` is something like `/manager/text/deploy?path=/myapp&update=true`
    

---

Would you like me to generate the full working Tomcat user + deploy config for `.gitlab-ci.yml`?





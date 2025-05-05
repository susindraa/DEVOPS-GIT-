

#done-space 


#goes-to/maven

#space/maven




# Maven Tutorial Notes for Further Learning




## **1. Introduction to Maven**
?
- **Purpose**: A build automation tool primarily for Java projects.
- **Key Features**:
  - Dependency management (auto-download libraries).
  - Standardized project structure.
  - Build lifecycle management.
<!--SR:!2025-05-07,2,190-->

---

## **2. Why Maven?**
?
- **Problems Without Maven**:
  - Manual dependency management (downloading JARs).
  - Long build scripts (e.g., in Ant).
  - Version compatibility issues.
- **Solution**:
  - **POM (Project Object Model)**: Defines dependencies, plugins, and build steps in `pom.xml`.
  - Central/Remote repositories for auto-downloading dependencies.
<!--SR:!2025-05-07,2,190-->

---

## **3. Key Concepts**



### **a. Maven Architecture**
?
- **Repositories**:
  - **Local**: Cached dependencies on your machine (`~/.m2/repository`).
  - **Central**: Default public repo (e.g., Maven Central).
  - **Remote**: Custom repos (e.g., company/internal servers).
<!--SR:!2025-05-07,2,190-->




### **b. Build Lifecycles**
?
- **Three Built-in Lifecycles**:
  1. **Default**: Builds, tests, packages, and deploys.
  2. **Clean**: Removes previous build artifacts.
  3. **Site**: Generates project documentation.
- **Phases** (Ordered sequence of steps):
  - Example phases: `validate`, `compile`, `test`, `package`, `install`, `deploy`.
<!--SR:!2025-05-07,2,190-->



### **c. Plugins and Goals**
?
- **Plugin**: A collection of goals (tasks).
- **Goal**: A specific task (e.g., `compiler:compile` compiles code).
- **Binding**: Plugins are bound to lifecycle phases (e.g., `maven-surefire-plugin` runs tests in the `test` phase).
<!--SR:!2025-05-07,2,190-->

---

## **4. Advantages of Maven**
?
- **Dependency Management**: Auto-downloads libraries and their dependencies.
- **Convention Over Configuration**: Standard project structure.
- **Reusability**: Share configurations via POM inheritance.
- **Extensibility**: Custom plugins for additional functionality.
- **Integration**: Works with CI/CD tools and IDEs.
<!--SR:!2025-05-07,2,190-->

---

## **5. Demo Project Walkthrough**
?
### **Setup**
- **Prerequisites**:
  - Java JDK, Maven, Eclipse (or similar IDE).
- **Create a Maven Project**:
  - In Eclipse: `File → New → Maven Project`.
  - Define `GroupId`, `ArtifactId`, and `Version` (GAV coordinates).
<!--SR:!2025-05-07,2,190-->



### **Project Structure**
?
```
my-project/
  ├── src/
  │   ├── main/
  │   │   ├── java/      # Application code
  │   │   └── resources/ # Config files
  │   └── test/
  │       ├── java/      # Test code
  │       └── resources/
  └── pom.xml           # Project configuration
```
<!--SR:!2025-05-07,2,190-->



### **POM File Essentials**
?
- **Dependencies**:
  ```xml
  <dependencies>
    <dependency>
      <groupId>org.seleniumhq.selenium</groupId>
      <artifactId>selenium-java</artifactId>
      <version>3.141.59</version>
    </dependency>
    <dependency>
      <groupId>org.testng</groupId>
      <artifactId>testng</artifactId>
      <version>6.14.3</version>
    </dependency>
  </dependencies>
  ```
- **Plugins**:
  ```xml
  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.8.1</version>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>2.22.2</version>
      </plugin>
    </plugins>
  </build>
  ```
<!--SR:!2025-05-07,2,190-->



### **Commands**
?
- **CLI Commands**:
  - `mvn clean`: Deletes `target/` directory.
  - `mvn compile`: Compiles source code.
  - `mvn test`: Runs unit tests.
  - `mvn package`: Creates JAR/WAR file.
  - `mvn install`: Installs artifact to local repo.
<!--SR:!2025-05-07,2,190-->

---

## **6. Common Plugins**
?
- **Compiler Plugin**: Sets Java version.
- **Surefire Plugin**: Runs JUnit/TestNG tests.
- **JAR Plugin**: Packages projects into JARs.
- **Dependency Plugin**: Copies dependencies.
<!--SR:!2025-05-07,2,190-->

---

## **7. Troubleshooting Tips**
?
- **Dependency Issues**:
  - Check [Maven Central](https://search.maven.org/) for correct GAV coordinates.
  - Run `mvn dependency:resolve` to debug.
- **Build Failures**:
  - Use `mvn -X` for detailed logs.
  - Ensure Java version in POM matches installed JDK.
<!--SR:!2025-05-07,2,190-->

---

## **8. Further Learning**

- **Advanced Topics**:
  - Multi-module projects.
  - Custom plugins.
  - Profile configurations.
- **Resources**:
  - [Maven Official Docs](https://maven.apache.org/guides/)
  - [Maven Repository](https://mvnrepository.com/)

---

**Summary**: Maven simplifies Java project builds by managing dependencies, standardizing structures, and automating lifecycle phases. Mastery of `pom.xml`, plugins, and CLI commands is key to efficient usage.
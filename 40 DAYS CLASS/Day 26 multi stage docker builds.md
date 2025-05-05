# Docker Multi-Stage Builds & Distroless Images - Notes

#space/docker/40-day-course/26-Day-docker-multistage
#done-space

## **1. Problem with Traditional Docker Builds**
?
- **Large Image Sizes**: Base images (e.g., Ubuntu) include unnecessary tools (curl, apt) not needed at runtime.
- **Security Risks**: More packages = Larger attack surface for vulnerabilities.
- **Example**: A Python/Java app built on Ubuntu includes the OS, build tools, and dependencies, bloating the image.
<!--SR:!2025-05-06,1,170-->

---

## **2. Multi-Stage Docker Builds**
?
### **What?**
- Split Dockerfile into **build** and **runtime** stages.
  - **Build Stage**: Uses a full-featured image (e.g., Ubuntu) to install dependencies and compile code.
  - **Runtime Stage**: Uses a minimal image, copying only the compiled artifacts from the build stage.
### **Why?**
- **Reduces Image Size**: Final image excludes build tools and intermediate files.
- **Improves Security**: Minimal runtime has fewer vulnerabilities.
### **How?**
- Use multiple `FROM` statements in a single Dockerfile.
- Copy artifacts from one stage to another using `COPY --from=<stage>`.
**Example (Go Application):**
```dockerfile
# Build Stage
FROM golang:1.17 AS builder
WORKDIR /app
COPY . .
RUN go build -o calculator .

# Runtime Stage
FROM scratch
COPY --from=builder /app/calculator .
CMD ["./calculator"]
```
- **Result**: Image size drops from **861 MB** (Ubuntu) to **1.83 MB** (scratch).
<!--SR:!2025-05-06,1,150-->

---

## **3. Distroless Images**
?
### **What?**
- Minimal images containing **only the runtime** (no shell, package managers, or OS tools).
- Examples: `gcr.io/distroless/base`, `gcr.io/distroless/python3`, `openjdk:17-slim`.
### **Why?**
- **Tiny Size**: No bloat from unnecessary packages.
- **Enhanced Security**: No shell access reduces exploit risk.
### **How to Use**
- Replace the runtime stage base image with a distroless one.
- **For Python/Java**: Use language-specific distroless images (e.g., `gcr.io/distroless/python3`).
**Example (Java with Distroless):**
```dockerfile
# Build Stage
FROM maven:3.8 AS builder
COPY . /app
RUN mvn package -f /app/pom.xml

# Runtime Stage
FROM gcr.io/distroless/java17
COPY --from=builder /app/target/app.jar .
CMD ["app.jar"]
```
<!--SR:!2025-05-06,1,230-->

---

## **4. Key Takeaways**
- **Multi-Stage Builds**:
  - Separate build and runtime environments.
  - Use `COPY --from` to transfer artifacts.
- **Distroless Images**:
  - Ideal for production; no shells or unused tools.
  - Find distroless images on [GoogleContainerTools/distroless](https://github.com/GoogleContainerTools/distroless).

---

## **5. Practical Example (Go + Scratch)**.
?
### **Steps**
1. **Build Stage**:
   - Use `golang:1.17` to compile the Go binary.
2. **Runtime Stage**:
   - Use `scratch` (empty image) and copy the binary.
   - Result: **1.83 MB image**.
### **Commands**
```bash
# Build
docker build -t multi-stage-app .

# Check Image Size
docker images | grep multi-stage-app
```
<!--SR:!2025-05-07,2,150-->

---

## **6. Interview Tips**
- **Common Question**: "How to optimize Docker images?"
?
  - **Answer**: Use multi-stage builds to remove build dependencies and distroless images for minimal runtime.
- **Security Benefit**: Distroless images reduce attack surface by excluding unnecessary tools.
<!--SR:!2025-05-10,5,190-->

---

**Practice**: Try converting a Python/Node.js app to use multi-stage builds and distroless images. Compare image sizes before/after! 🚀


## 🔧 **GIT**

### ✅ Beginner

1. **What is Git, and how is it different from other version control systems like SVN?**
	1. git is a tool to develop code in local system on the other hand svn  version control where one can develop code individually and push to main after through verification.
    
    - _Follow-up:_ Why is distributed version control considered more resilient?
	    - distributed version control under the system everyone can clone the code and develop individually or one can push code or revert to the changes, without effecting the main branch or code.
        
2. **What is the difference between `git fetch` and `git pull`?**
	1. git fetch the changes locally
	2. git pull copies the changes from the repository
    
    - _Follow-up:_ In what scenario would you prefer `git fetch` over `git pull`?   
	    - depending on the scenario or on where i am working, i.e locally or global
- 
1. **How do you resolve a merge conflict in Git?**
	1. Going through each line
    
    - _Follow-up:_ Can you show the exact steps or commands you use when resolving conflicts?
	    - git diff
        
2. **What does `git stash` do?**
	1. will keep you present aside to go to another file
    
    - _Follow-up:_ How can you apply only part of a stash?
	    - git stash
        
3. **Explain the use of `.gitignore`.**
	1. by creating .gitignore files
    
    - _Follow-up:_ Can `.gitignore` ignore tracked files?
	    - yes
    - 
        

---

### ⚙️ Intermediate

1. **Describe how branching strategies like Git Flow or trunk-based development work.**
	1. If there is bug in the code, developers will create bugfix branch, they work on it and fix the branches and merge the branch with main
    
    - _Follow-up:_ Which strategy do you prefer in CI/CD-heavy environments and why?-
	    - i prefere github because of reliablility and flexibility
- 
        
1. **How would you revert a commit that has already been pushed?**
	1. git rebase branch name
    
    - _Follow-up:_ What's the difference between `git revert` and `git reset` in this context?
	    - git revert will keep the history
	    - git reset will not keep the history
        
2. **What is a rebase, and how is it different from a merge?**
	1. merge will save the data and push it main branch
	2. Rebase will move to the latest file
    
    - _Follow-up:_ What are the risks of using rebase on a shared branch?
	    - will lose the data if you dont push and everything goes to the update version
        
3. **How do you tag a commit and why would you use tags?**
	1. with -m flag, for details
    
    - _Follow-up:_ How would you delete a remote tag?
	    - git delete tag - may be this is wrong
        
4. **How do you secure sensitive data in a Git repository?**
	1. using git hub secrets
	2. using variables
    
    - _Follow-up:_ Have you used Git hooks or Git-Secrets to enforce this?
        - yes mostly.

---

### 🔬 Advanced

1. **How would you handle a corrupted Git repository in production?**
	1. dont know
    
    - _Follow-up:_ Have you used `git fsck` or `git reflog` in such scenarios?
	    - No i did not used them
        
2. **Describe how Git works internally (object model: blobs, trees, commits).**
	1. i don't know
    
    - _Follow-up:_ What command can show low-level Git object details?
	    - git log files
        
3. **How do submodules and subtrees work? When should you use them?**
	1. dont know
    
    - _Follow-up:_ What’s the biggest challenge you've faced using submodules?
	    - dont know
        
4. **Can you write a Git hook to enforce commit message formatting?**
	1. yes i can write it
    
	    - _Follow-up:_ Have you used Husky or similar tools for managing Git hooks?
		    - no i did not used them
        
5. **How do you manage Git access controls in a large, distributed team?**
	1. Trough git hub credentials 
    
    - _Follow-up:_ Which Git hosting platforms have you configured role-based access for?
	    - jenkins
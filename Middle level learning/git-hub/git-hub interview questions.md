


#goes-to/git-hub 
#done-space



#space/git-hub/interview-questions 



1. What is Git?::A distributed version control system used to track changes in source code.
<!--SR:!2025-05-05,4,230-->


2. What is GitHub?::A cloud-based platform for hosting Git repositories and enabling collaboration.
<!--SR:!2025-05-04,1,164-->


3. What is a repository in Git?::A directory containing your project files and the `.git` directory with version history.
<!--SR:!2025-05-04,1,144-->



4. What command initializes a Git repository?::git init
<!--SR:!2025-05-05,4,244-->


5. How to check the current Git configuration?::git config --list
<!--SR:!2025-05-26,25,284-->


6. How do you set your Git username and email?::git config --global user.name "Name" && git config --global user.email "email@example.com"
<!--SR:!2025-05-04,1,164-->




7. What is the Git staging area?::An intermediate area where changes are kept before committing.
<!--SR:!2025-05-06,5,204-->


8. How do you add changes to staging?::git add filename or git add .
<!--SR:!2025-05-05,4,244-->


9. How do you commit changes?::git commit -m "message"
<!--SR:!2025-05-05,4,244-->
10. What command shows the status of your working directory?::git status
<!--SR:!2025-05-05,4,244-->




11. What is the difference between `git add .` and `git add -A`?::`git add .` ignores deletions; `git add -A` stages all changes including deletions.
<!--SR:!2025-05-04,1,144-->



12. How do you create a new branch?::git branch branch-name
<!--SR:!2025-05-04,1,144-->


13. How do you switch branches?::git checkout branch-name or git switch branch-name
<!--SR:!2025-05-04,1,164-->


14. What command merges one branch into another?::git merge branch-name
<!--SR:!2025-05-05,4,244-->


15. How do you delete a branch?::git branch -d branch-name
<!--SR:!2025-05-04,1,130-->


16. What is a merge conflict?::A situation where Git cannot automatically resolve differences between two branches.
<!--SR:!2025-05-06,3,204-->




17. How do you resolve a merge conflict?::Manually edit conflicting files, then commit the changes.
<!--SR:!2025-05-05,4,244-->



18. How do you clone a remote Git repository?::git clone <url>
<!--SR:!2025-05-04,1,164-->



19. How do you add a remote origin?::git remote add origin <url>
<!--SR:!2025-05-04,1,164-->


20. What command pushes local commits to a remote repository?::git push origin branch-name
<!--SR:!2025-05-05,4,244-->



21. How do you fetch changes from a remote?::git fetch
<!--SR:!2025-05-04,1,164-->


22. How do you pull changes from a remote and merge?::git pull
<!--SR:!2025-05-05,3,224-->



23. How do you list remote connections?::git remote -v
<!--SR:!2025-05-05,4,230-->





24. How do you see the commit history?::git log
<!--SR:!2025-05-04,1,164-->



25. How do you see a single line summary of each commit?::git log --oneline
<!--SR:!2025-05-04,1,150-->



26. How do you compare two branches?::git diff branch1..branch2
<!--SR:!2025-05-05,4,244-->



27. How do you show changes in the working directory?::git diff
<!--SR:!2025-05-06,3,204-->


28. What does `git blame` do?::Shows who made each change in a file line by line.
<!--SR:!2025-05-04,1,130-->



29. How to undo a `git add` before committing?::git reset
<!--SR:!2025-05-04,1,130-->



30. How to undo a commit and keep changes staged?::git reset --soft HEAD~1
<!--SR:!2025-05-04,1,164-->



31. How to undo a commit and unstage changes?::git reset --mixed HEAD~1
<!--SR:!2025-05-04,1,130-->


32. How to discard all changes and reset to the last commit?::git reset --hard HEAD
<!--SR:!2025-05-04,1,164-->


33. What is the difference between reset, revert, and checkout?::reset removes commits; revert creates a new commit to undo changes; checkout restores files.
<!--SR:!2025-05-04,1,130-->




34. What is a fork in GitHub?::A personal copy of someone else's repository on GitHub.
<!--SR:!2025-05-04,1,164-->


35. What is a pull request?::A request to merge your changes into another branch or repository.
<!--SR:!2025-05-04,1,164-->


36. What is rebase?::Rewriting the base of your branch to apply changes over a new base commit.
<!--SR:!2025-05-04,1,144-->


37. Difference between rebase and merge?::Rebase rewrites history; merge preserves it.
<!--SR:!2025-05-04,1,230-->


38. What is `.gitignore`?::A file that tells Git which files/folders to ignore.
<!--SR:!2025-05-05,4,244-->



39. What is a detached HEAD state?::When HEAD points to a commit instead of a branch.
<!--SR:!2025-05-04,1,164-->





40. How do you create a pull request on GitHub?::Push a branch and open a PR via the GitHub interface.
<!--SR:!2025-05-04,1,130-->



41. How to review someone’s code on GitHub?::Use Pull Request Review tools to comment, approve, or request changes.
<!--SR:!2025-05-04,1,130-->



42. What is GitHub Actions?::A CI/CD service that allows automation of workflows in response to GitHub events.
<!--SR:!2025-05-05,2,164-->



43. What are GitHub Issues used for?::Tracking tasks, bugs, and feature requests.
<!--SR:!2025-05-04,1,130-->



44. How do you assign a reviewer to a pull request?::Use GitHub’s PR interface to request a reviewer.
<!--SR:!2025-05-04,1,130-->



45. - 
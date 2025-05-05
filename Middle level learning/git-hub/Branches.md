#done-space

#goes-to/git-hub 


#space/git-hub/git 


took new branch


- made changes to the file - whatever files there were in the main will available to our new branch.
- even after the merge you do not see the changes in the file
- # Start from main
git checkout main

# Create new branch
git checkout -b new-feature

# Make changes in new-feature branch
# Edit file and commit
git add .
git commit -m "added something"
git push origin new-feature
:

git merge main

import subprocess, schedule, time, re, os, sys
from datetime import datetime

def run():
    directory = sys.argv[0].replace("/auto-git-tracker.py", "") 
    os.chdir(directory)
    subprocess.check_call(['git'] + ['add'] + ['.'])
    commitMessage = "Detailed Commit (Auto Tracker) - \n"
    status = subprocess.getoutput('git status')

    if re.search('Your branch is ahead of', status):
        print("Already Commited - Just a push away :)")
        run("push")
        return
    
    elif checkIfNecessary := re.search('nothing to commit, working tree clean', status):
        print("Nothing to commit :@" + datetime.now().strftime("%H:%M"))
        return

    else:
        searchModified = re.findall('modified:(.*)\n', status)
        for modified in searchModified:
            commitMessage += "Modified: " + modified.strip() + " - From Auto Tracker.\n"

        searchAdded = re.findall('new file:(.*)\n', status)
        for added in searchAdded:
            commitMessage += "Added: " + added.strip() + " - From Auto Tracker.\n"


        searchDeleted = re.findall('deleted:(.*)\n', status)
        for deleted in searchDeleted:
            commitMessage += "Removed: " + deleted.strip() + " - From Auto Tracker.\n"


        searchRenamed = re.findall('renamed:(.*)\n', status)
        for renamed in searchRenamed:
            commitMessage += "Renamed: " + renamed.strip() + " - From Auto Tracker.\n"
    
    subprocess.check_call(['git'] + ['commit'] + ['-m'] + [commitMessage])
    subprocess.check_call(['git'] + ['push'])

    print("Commit Done @" + datetime.now().strftime("%H:%M"))
    return

schedule.every(2).minutes.do(run)

while True:
    schedule.run_pending()
    time.sleep(1)

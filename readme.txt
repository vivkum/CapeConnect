1. How to Fix This (The Easy Way)
You must run your files from a local web server. This makes your browser see the address as http://localhost/ instead of file:///, and all the security rules will work correctly.
This sounds complicated, but it's very simple. Here are two one-minute ways to do it.
Method A: Using VS Code "Live Server" (Recommended)
If you are using Visual Studio Code to edit the files:
Go to the Extensions tab (the square icon on the left).
Search for and install "Live Server" (by Ritwick Dey).
Go back to your index.html file.
Right-click inside the index.html file and select "Open with Live Server".
That's it! It will automatically open a new browser tab at an address like http://127.0.0.1:5500/index.html, and everything should work.


Method B: Using Python (If you have it)
If you have Python installed on your computer:
Open a Terminal or Command Prompt.
Navigate to your MySocietyMap folder (e.g., cd C:\Users\Vivek\MySocietyMap).
Run this simple command: python -m http.server
Your terminal will say Serving HTTP on 0.0.0.0 port 8000...
Now, go to your web browser and manually type in this address: http://localhost:8000 or http://localhost:8000/index.html



MAP2 
1149 * 1354


Github

D:\per\capetown\Election\map>git add .

D:\per\capetown\Election\map>git commit -m "Mobile"

D:\per\capetown\Election\map>git pull origin main

D:\per\capetown\Election\map>git push -u origin main


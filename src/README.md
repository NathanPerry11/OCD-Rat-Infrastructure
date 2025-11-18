# Project Name Source Code

The folders and files for this project are as follows:

...



Mac start POC

brew install postgres

brew services restart postgresql

psql postgres

psql -U postgres

createdb postgres



Downlaod these files
https://mcmasteru365-my.sharepoint.com/personal/szechtma_mcmaster_ca/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fszechtma%5Fmcmaster%5Fca%2FDocuments%2FCapstoneProject2024%2D25%2FPostgreSQL%2FExported%5Fszechtman%5Flab%5Fdatabase&viewid=4971addc%2Dbc56%2D49ba%2D8ac1%2Da8ad91132272&csf=1&web=1&e=r4ngWU&CID=82c9bc55%2D11d8%2D464d%2Daf27%2D22085573ed7f&FolderCTID=0x0120000D047C8EA8138E4F8A5F6E0E8106AF73&view=0


psql -U postgres -d postgres -f OneDrive_1_2025-11-18/szechtman_lab_schema.sql

DEBUG
If this doesnt work go into 
\l
\du
- with du see what users you have, use the one us see
DEBUG

Should work

Then make your own env 

python3 -m venv venv

source venv/bin/activate

pip install -r requirements.txt

Go here

https://github.com/OCD-Rats-Capstone/OCD-Rat-Infrastructure/pull/332


Run this: fastapi dev app.py 

Go to local server that is shows you




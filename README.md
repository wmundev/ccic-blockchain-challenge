# Project setup instructions
To get started, the technologies needed to be installed are NodeJS and git

To install NodeJS,
1.	Open a web browser and go to (https://nodejs.org/en/download/)
2.	Download the relevant installer for their operating system. For example, for windows, I will click on the “Windows Installer” image as shown below and it will download to my system.
3.	Double click and run the downloaded file and install it

The next software that needs be installed is “git”. 
1.	Open a web browser and go to (https://git-scm.com/downloads)
2.	Click on one of the downloads for your operating system
3.	For example, for windows, I will click on the windows link and then save the file to your computer
4.	Double click and run the downloaded file and install it


Once installed, the following steps for setup are as follows:
1.	Open Git bash (Open the Start menu by clicking on the Windows icon and typing “Git Bash” into the search bar. The icon for Git Bash and the words “Git Bash Desktop App” will appear. Click on the icon or the words “Git Bash Desktop App” to open Git Bash.)
2.	Type in the command `git clone git@github.com:wmundev/ccic-blockchain-challenge.git` and press enter
3.	A folder called “ccic-blockchain-challenge” should have been created with the codebase inside it.
4.	Open the folder
5.	Type in the command `npm install` and press enter (this will install the packages needed for the application)
6.	To build the app, type in the command `npm run build` and press enter
7.	To run the app, type in the command `npm start` and press enter

This will then start the application on your localhost on port 3000, to access the application, open your web browser and navigate to the URL http://localhost:3000 and you can now start development.

# Deployment
## AWS S3 Hosting
Prerequisites: You should have already run the build command `npm run build` and a `build` folder should have been created with the complete application files built in there.
1.	Create a new AWS Account (https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)
2.	Go to https://s3.console.aws.amazon.com/ and sign into your AWS Account
3.	Choose Create bucket and add a bucket name eg. `ccic-blockchain`
4.	Choose the Region to create the bucket.
5.	Accept defaults and after creating bucket, In the Buckets list, choose the name of the bucket that you want to enable static website hosting for.
6.	Click on properties, then under Static website hosting, choose Edit.
7.	Copy all the files in the `build` folder in the current project as indicated in the prerequisites and upload all the files inside to the newly created s3 bucket.
8.	Under Static website hosting, choose Enable.
9.	In Index document, enter index.html and save.
10.	Go into Permissions, Clear Block all public access, and choose Save changes.
11.	Under bucket policy, click edit and in bucket policy editor paste the following code.
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::Bucket-Name/*"
            ]
        }
    ]
}
```
12.	Update Bucket-Name in the bucket policy above to the name of your bucket eg. `ccic-blockchain` and save changes.
13.	Now when you click on properties and then static website hosting the bucket website endpoint will be displayed. Eg. http://ccic-blockchain.s3-website-us-east-1.amazonaws.com

For full instructions relating to the official static website hosting for AWS S3, refer to this link (https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html)

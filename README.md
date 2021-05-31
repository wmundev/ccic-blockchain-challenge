# Github URL of project
## Individual Github Repository
https://github.com/wmundev/ccic-blockchain-challenge

## Group Github Repository
https://github.com/wmundev/calpoly-rmit-ccic-capstone

# URL of deployed project
https://blockchain.cacyber.net

Credentials not needed

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

# Running unit test
1. Navigate to the root folder.
2. Open a terminal application, if you are on windows for example, open up PowerShell.
3. Run the command `npm run test:all`

All unit tests should now run and output the results

# Release notes
## [1.0.10] - 2021-05-30
### New features
- UI
- content changes
- add credits

## [1.0.9] - 2021-05-27
### New features
- N/A

## [1.0.8] - 2021-05-26
### New features
- N/A

## [1.0.7] - 2021-05-23
### New features
- Is a drag and drop challenge now
- Include many different types of hints to help the player
- Implement the storyline in the application
- Included elements of blockchain knowledge required to complete the challenge
- Add in README instructions for starting application, and deploying application to S3

## [1.0.6] - 2021-05-09
### New features
- Offline caching

## [1.0.5] - 2021-05-08
### New features
- Icon update and title update

## [1.0.4] - 2021-05-06
### New features
- Add in more hints for the challenge and add in more elements and beautify UI

## [1.0.3] - 2021-04-28
### New features
- UI change - center div

## [1.0.2] - 2021-04-24
### New features
- Blockchain challenge now changed to a drag and drop challenge instead of inputting an answer


## [1.0.1] - 2021-04-21
### New features
- Added feature to submit form
- Fix images not loading bug

## [1.0.0] - 2021-04-19
### New features
- Added new blockchain challenge
- Add images flashing every 15 seconds


# Changelog

## [1.0.10] - 2021-05-30
### Changed
- add test documentation
- make content changes requested by the CalPoly team
- Change text
- Update UI Styling
- add credits for rmit and calpoly team

## [1.0.9] - 2021-05-27
### Changed
- fix unit tests

## [1.0.8] - 2021-05-26
### Changed
- Update Github Actions for unit testing

## [1.0.7] - 2021-05-23
### Changed
- Complete refactor of blockchain challenge
- Is a drag and drop challenge now
- Include many different types of hints to help the player
- Implement the storyline in the application
- Included elements of blockchain knowledge required to complete the challenge
- Add in README instructions for starting application, and deploying application to S3
- remove dead code

## [1.0.6] - 2021-05-09
### Changed
- Add pwa service worker for offline caching

## [1.0.5] - 2021-05-08
### Changed
- Icon update and title update

## [1.0.4] - 2021-05-06
### Changed
- Add in more hints for the challenge and add in more elements and beautify UI

## [1.0.3] - 2021-04-28
### Changed
- Remove debugger and center div

## [1.0.2] - 2021-04-24
### Changed
- Blockchain challenge now changed to a drag and drop challenge instead of inputting an answer


## [1.0.1] - 2021-04-21
### Added
- Added feature to submit form

### Fixed
- Fix images not loading bug

## [1.0.0] - 2021-04-19
### Added
- Added new blockchain challenge
- Add images flashing every 15 seconds

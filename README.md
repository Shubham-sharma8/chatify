![Build and Deploy Full Stack ChatPDF Clone](https://github.com/Elliott-Chong/chatpdf-yt/assets/77007117/7fcee290-ca52-46ee-ae82-3490f505270b)


# Overview

Welcome to the "pdf-cogify" project, a comprehensive chat application with PDF integration. This project is designed to provide a seamless chat experience where users can upload PDF files, create chats around them, and interact with an AI assistant. The AI assistant uses the OpenAI API to generate responses based on the chat context.

# Technologies and Frameworks

- Next.js
- React
- TypeScript
- Tailwind CSS
- Clerk
- Drizzle ORM
- PostgreSQL
- AWS SDK
- OpenAI API
- Stripe
- Axios
- Pinecone
- Drizzle-kit
- OpenAI
- Neon Database Serverless
- Drizzle-orm/neon-http
- @tanstack/react-query
- @clerk/nextjs
- clsx
- tailwind-merge

# Installation

Follow the steps below to install and setup the project:

1. **Clone the repository**

   Open your terminal and run the following command:

   ```bash
   git clone [https://github.com/Elliott-Chong/chatpdf-yt.git](https://github.com/Shubham-sharma8/chatify)
   ```

2. **Navigate to the project directory**

   ```bash
   cd chatify
   ```

3. **Install Node.js**

   The project requires Node.js version 13.4.19 or later. You can download it from [here](https://nodejs.org/en/download/).

4. **Install the required dependencies**

   Run the following command to install all the required dependencies:

   ```bash
   npm install
   ```

   This will install all the dependencies listed in the `package.json` file, including Next.js, React, React DOM, Axios, Stripe, Tailwind CSS, and other specific dependencies such as "@aws-sdk/client-s3" and "@clerk/nextjs".

5. **Setup environment variables**

    Create a `.env` file in the root directory of your project and add the required environment variables.
6. **Setup Database**

    For building or developing with Drizzle Kit, use the following command:

    ```bash
    npx drizzle-kit push:pg
    ```


7. **Run the project**

    Now, you can run the project using the following command:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

   
# Setting Up an Amazon S3 Bucket

This guide will walk you through the steps to create and configure an Amazon S3 bucket for your project.

## Step 1: Create an AWS Account

1. Go to the [AWS Management Console](https://aws.amazon.com/).
2. Click on "Create an AWS Account" and follow the instructions to set up your account.

## Step 2: Create an S3 Bucket

1. Open the S3 console at https://s3.console.aws.amazon.com/s3/.
2. Click "Create bucket".
3. Enter a unique bucket name (e.g., `cogify`), choose a region, and click "Create bucket".

## Step 3: Configure Public Access

1. Go to the "Permissions" tab of your bucket.
2. In the "Block public access" section, uncheck the "Block all public access" option.
3. Confirm the changes to allow public access.

## Step 4: Update Bucket Policy

1. Go to the "Permissions" tab and find the "Bucket policy" section.
2. Click "Edit" and paste the following JSON policy:
    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "PublicReadGetObject",
                "Effect": "Allow",
                "Principal": "*",
                "Action": "s3:GetObject",
                "Resource": "arn:aws:s3:::cogify/*"
            }
        ]
    }
    ```
3. Save the policy.

## Step 5: Configure Cross-Origin Resource Sharing (CORS)

1. In the "Permissions" tab, find the "CORS configuration" section.
2. Click "Edit" and add the following configuration:
    ```json
    [
        {
            "AllowedHeaders": [
                "*"
            ],
            "AllowedMethods": [
                "PUT",
                "POST",
                "DELETE",
                "GET"
            ],
            "AllowedOrigins": [
                "*"
            ],
            "ExposeHeaders": []
        }
    ]
    ```
3. Save the CORS configuration.

## Step 6: Set Up IAM User and Permissions

1. Go to the IAM console at https://console.aws.amazon.com/iam/.
2. Click "Users" and then "Add user".
3. Enter a username (e.g., `s3admin`), select "Programmatic access", and click "Next".
4. Attach the `AmazonS3FullAccess` policy to the user.
5. Complete the creation process to generate an `Access key ID` and `Secret access key`.

## Step 7: Configure Environment Variables

1. Save the `Access key ID` and `Secret access key` as environment variables in your `.env` file:
    ```
    NEXT_PUBLIC_S3_ACCESS_KEY_ID=YOUR_ACCESS_KEY_ID
    NEXT_PUBLIC_S3_SECRET_ACCESS_KEY=YOUR_SECRET_ACCESS_KEY
    ```

Make sure to replace `YOUR_ACCESS_KEY_ID` and `YOUR_SECRET_ACCESS_KEY` with your actual keys.

That's it! Your S3 bucket is now set up and configured for public access, with the necessary IAM permissions and environment variables ready for your application.


# Setting Up a Neon Database with PostgreSQL 15

This guide will walk you through the steps to create and configure a Neon database with PostgreSQL 15 for your project.

## Step 1: Create an Account on Neon.tech

1. Go to [Neon.tech](https://neon.tech/).
2. Click on "Sign Up" and follow the instructions to create your account.

## Step 2: Create a New Database

1. Once logged in, click on "Create New Project" or "New Project" button.
2. Name your project (e.g., `my-project`).
3. Choose "PostgreSQL 15" as the database version.
4. Click on "Create Project" to set up your database.

## Step 3: Access Your Database

1. After the project is created, navigate to the "Databases" tab.
2. copy the postgres URL

```sh
psql -h <your_host> -U <your_user> -d <your_database> -p <your_port>




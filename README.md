# Mini Job Portal
A simple web-based application to display a list of job vacancies.

## &#10095; Installation Prerequisites
The following are required to be able to run this application:
- Node.js 18 (or higher version)

## &#10095; Development
For development purposes, before running this application please do some necessary preparations including: installing dependencies, and setting environment variables in the `.env.development` file.

### &#10102; Dependencies Installation
   Command:
   ```shell
   npm install
   ```
   ___

### &#10103; Setting the Environment Variable
Please copy or duplicate the `.env.example` file into `.env.development` (specific to the development version) or `.env` and adjust each variable. If you want to copy the file automatically, you can run the command below in the terminal and adjust each variable.

Command:
   ```shell
   cp .env.example .env.development
   ```
   ---

**PLEASE NOTE** in the `.env.development` file this section “# Environment Variables” please fill in as detailed below. Now, it will actually be easier if you do the above command to copy the `env.example` file into `.env.development` and its contents. 

   ```shell
   # Environment Variables
   VITE_API_URL    = http://localhost:3002
   ...
   ```

### &#10104; Running the App
   Command:
   ```shell
   npm run dev
   ```
## &#10095; User Account
- Username: user
- Password: 12345678

## &#10095; Author
Dokumentasi ini ditulis oleh [Ahmad Rivaldy S](https://rivaldy.net)

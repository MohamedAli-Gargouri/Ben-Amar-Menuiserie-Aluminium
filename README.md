
## Introduction
This project involves the creation of a website for Ben Amar Menuiserie Aluminium. It includes several key sections:

1. A presentation page that provides an overview of the company.
2. A contact page where users can send messages to the company and find its location.
3. A products page displaying the company's product offerings.
4. An about page that offers information about the company and introduces its team.
## Demo
[Video Link](https://imgur.com/gallery/7vWJyVJ)
## Tools
This project was developed using the Next.js framework in TypeScript and leveraged the styling capabilities of Tailwind CSS in combination with the Material UI components.
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
## Getting Started
First start by installing the dependencies by running this command
```bash
npm install
```
second, run the development server:
```bash
npm run dev
```
third, create an .env.development and a .env.product files for the environment variables and edit these two files and add this.
```bash
RECEIVER_MAIL=youremail
EMAILJS_SERVICE_ID=youremailjsserviceid
EMAILJS_TEMPLATE_ID=youremailjstemplateid
EMAILJS_PUBLIC_KEY=youremailJSpublickey
```
RECEIVER_MAIL: This is the email address that your application will use to send emails from the contact page.

EMAILJS_SERVICE_ID: To find this, visit EmailJS, create an account, and then set up a new service. Choose Gmail as your email service and make note of the unique service ID provided.

EMAILJS_TEMPLATE_ID: To locate this, again, visit EmailJS. Create a template that defines the structure and style of the emails you want to receive. Utilize variables such as {{from_name}} for the sender's name, {{from_companyName}} for the sender's company name, {{from_country}} to capture the selected country, and finally, {{message}} for the message the sender submitted. These variables serve as the data inputs that our application will transmit to EmailJS, enabling them to be seamlessly integrated into the EmailJS template.

fourth, Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

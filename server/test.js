// Import required modules
import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

app.use(cors());
app.use(bodyParser.json());
// Define a simple route
const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
app.post("/api/send", (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: "New Contact Form Submission from HomeHaven",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };
  res.send("hey"); // its for check remove the line
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});
// Route to handle form submission
app.post("/checkout", (req, res) => {
  const { name, email, address, city, state, zip, country, number, cartItems } =
    req.body;

  // Construct the email content
  const emailContent = `
    <h2>New Order Received</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Address:</strong> ${address}, ${city}, ${state}, ${zip}, ${country}</p>
    <p><strong>Phone Number:</strong> ${number}</p>
    <h3>Order Details:</h3>
    <ul>
      ${cartItems.map((item) => `<li>${item.name} - $${item.price}</li>`).join("")}
    </ul>
  `;
  // Prepare the email options
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: process.env.ADMIN_EMAIL, // Your email address
    subject: "New Order Received",
    html: emailContent,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }
    console.log("Email sent:", info.response);
    res
      .status(200)
      .json({ message: "Order received and email sent successfully!" });
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

// Path: src\pages\api\contact.ts
// Convert this code into typescript

export default async (req: any, res: any) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing parameter(s)" });
  }

  try {
    await client.messages.create({
      body: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.MY_PHONE_NUMBER,
    });
    return res.status(200).json({ success: true, msg: message });
  } catch (error: any) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

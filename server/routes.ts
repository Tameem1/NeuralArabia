import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";
import { sendContactNotification } from "./email";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(1),
  serviceType: z.string().min(1),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact message
      const message = await storage.createContactMessage(validatedData);
      
      // Send email notification (logs to console in this implementation)
      const emailSent = sendContactNotification(message);
      
      res.status(200).json({ 
        success: true, 
        message: "Message sent successfully",
        emailSent
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: "Validation error", errors: error.format() });
      }
      
      console.error("Error submitting contact form:", error);
      res.status(500).json({ success: false, message: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

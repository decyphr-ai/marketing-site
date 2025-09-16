import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import Airtable from 'airtable';

export async function POST(request: NextRequest) {
  try {
    // Ensure API key exists and instantiate client lazily to avoid module-init issues
    const apiKey = process.env.RESEND_KEY || process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Store email in Airtable with duplicate checking
    const airtableApiKey = process.env.AIRTABLE_KEY;
    const airtableBaseId = process.env.AIRTABLE_BASE_ID;
    
    if (!airtableApiKey || !airtableBaseId) {
      return NextResponse.json(
        { error: 'Airtable configuration missing' },
        { status: 500 }
      );
    }

    // Configure Airtable
    const base = new Airtable({ apiKey: airtableApiKey }).base(airtableBaseId);
    const table = base('tblcUTc0NCkOFHqxz'); // Table 1 ID
    
    const normalizedEmail = email.toLowerCase().trim();
    
    try {
      // Check if email already exists
      const existingRecords = await table.select({
        filterByFormula: `LOWER({Email}) = "${normalizedEmail.replace(/"/g, '\\"')}"`
      }).firstPage();
      
      if (existingRecords.length > 0) {
        return NextResponse.json(
          { error: 'Email already registered for waitlist' },
          { status: 409 } // Conflict status code
        );
      }
      
      // Add new email to Airtable
      await table.create([
        {
          fields: {
            [process.env.AIRTABLE_EMAIL_FIELD_ID || 'fldK9wZkzvFkHTXPa']: normalizedEmail
          }
        }
      ]);
      
    } catch (error) {
      console.error('Airtable error:', error);
      return NextResponse.json(
        { error: 'Failed to save to waitlist' },
        { status: 500 }
      );
    }

    // Send thank you email
    const { data, error } = await resend.emails.send({
      from: 'info@decyphr.ai',
      to: [email],
      subject: 'Welcome to Decyphr AI',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Decyphr AI</title>
          </head>
          <body style="margin: 0; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; background-color: #f8fafc;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-radius: 16px; overflow: hidden;">
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%); padding: 40px 30px; text-align: center;">
                <h1 style="color: white; font-size: 28px; margin: 0; font-weight: bold;">Welcome to Decyphr AI!</h1>
                <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 16px;">Thank you for joining our waitlist</p>
              </div>
              
              <!-- Content -->
              <div style="padding: 40px 30px;">
                <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                  Thank you for joining our Waitlist, and more importantly, our mission to unlock the world for content creators! 
                </p>
                
                <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 32px 0;">
                  As one of our early supporters, we will keep you updated on our launch timeline and share exclusive behind-the-scenes details as we get closer to transforming the content creation landscape.
                </p>
                
                <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0;">
                  Best regards,<br>
                  <span style="font-weight: 600; color: #0d9488;">The Decyphr AI Team</span>
                </p>
              </div>
              
              <!-- Footer -->
              <div style="padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 14px; margin: 0 0 24px 0; font-weight: 500;">
                  Stay connected with us
                </p>
                
                <div style="margin-bottom: 24px;">
                  <a href="https://www.linkedin.com/company/decyphrai" style="color: #0d9488; text-decoration: none; margin: 0 12px;">LinkedIn</a>
                  <a href="https://www.instagram.com/decyphr.ai/" style="color: #0d9488; text-decoration: none; margin: 0 12px;">Instagram</a>
                  <a href="https://x.com/DecyphrAI" style="color: #0d9488; text-decoration: none; margin: 0 12px;">X</a>
                  <a href="https://www.tiktok.com/@decyphrai" style="color: #0d9488; text-decoration: none; margin: 0 12px;">TikTok</a>
                </div>
                
                <div style="display: inline-flex; align-items: center; justify-content: center; margin-bottom: 15px;">
                  <span style="font-size: 20px; font-weight: bold; color: #374151; margin-right: 8px;">Decyphr</span>
                  <span style="font-size: 20px; font-weight: bold; color: #0d9488;">AI</span>
                </div>
                <p style="color: #6b7280; font-size: 14px; margin: 0;">
                  Breaking language barriers, one video at a time.
                </p>
              </div>
              
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Successfully joined waitlist!', id: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

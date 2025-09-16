import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface WaitlistRequest {
  email: string;
}

export async function POST(request: NextRequest) {
  try {
    const { email }: WaitlistRequest = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Store in Airtable
    if (process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID) {
      try {
        const airtableResponse = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Waitlist`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            records: [
              {
                fields: {
                  Email: email,
                  'Joined Date': new Date().toISOString(),
                }
              }
            ]
          }),
        });

        if (!airtableResponse.ok) {
          console.error('Airtable error:', await airtableResponse.text());
        }
      } catch (airtableError) {
        console.error('Airtable storage failed:', airtableError);
      }
    }

    // Send welcome email
    try {
      await resend.emails.send({
        from: 'Decyphr AI <hello@decyphrai.com>',
        to: [email],
        subject: 'Welcome to Decyphr AI',
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Decyphr AI</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; background-color: #f9fafb;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);">
              <!-- Header with gradient background -->
              <div style="background: linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #06b6d4 100%); padding: 48px 40px; text-align: center; position: relative;">
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"20\" cy=\"20\" r=\"1.5\" fill=\"%23ffffff\" opacity=\"0.1\"/><circle cx=\"80\" cy=\"40\" r=\"1\" fill=\"%23ffffff\" opacity=\"0.1\"/><circle cx=\"40\" cy=\"80\" r=\"1.2\" fill=\"%23ffffff\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>') repeat;"></div>
                <div style="position: relative; z-index: 1;">
                  <div style="display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                    <span style="font-size: 32px; font-weight: bold; color: white; margin-right: 8px;">Decyphr</span>
                    <span style="font-size: 32px; font-weight: bold; color: #e6fffa;">AI</span>
                  </div>
 
                </div>
                
              </div>
              
              <!-- Main content -->
              <div style="padding: 40px; text-align: center;">
                <h2 style="color: #1f2937; font-size: 28px; font-weight: bold; margin: 0 0 24px 0; line-height: 1.3;">
                  Thank you for joining us on our mission
                </h2>
                
                <p style="color: #4b5563; font-size: 18px; line-height: 1.6; margin: 0 0 32px 0;">
                  We're building something incredible to unlock the world for content creators. You'll be among the first to know when we launch.
                </p>
                
                <div style="background-color: #f0fdfa; border: 2px solid #a7f3d0; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
                  <p style="color: #065f46; font-size: 16px; margin: 0; font-weight: 500;">
                    We'll keep you updated on our launch timeline and exclusive early access opportunities.
                  </p>
                </div>
                
                <p style="color: #6b7280; font-size: 16px; margin: 0;">
                  Best regards,<br>
                  <span style="font-weight: 600; color: #374151;">The Decyphr AI Team</span>
                </p>
              </div>
              
              <!-- Footer -->
              <div style="background-color: #f8fafc; padding: 32px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 14px; margin: 0 0 24px 0; font-weight: 500;">
                  Stay connected with us
                </p>
                
                <div style="display: inline-flex; gap: 24px; align-items: center; justify-content: center;">
                  <!-- LinkedIn -->
                  <a href="https://www.linkedin.com/company/decyphrai" style="display: inline-block; width: 44px; height: 44px; background-color: #000000; border-radius: 8px; text-decoration: none; text-align: center; line-height: 44px; font-size: 16px; color: white; font-weight: bold;">
                    in
                  </a>
                  
                  <!-- Instagram -->
                  <a href="https://www.instagram.com/decyphr.ai/" style="display: inline-block; width: 44px; height: 44px; background-color: #334155; border-radius: 8px; text-decoration: none; text-align: center; line-height: 44px; font-size: 16px; color: white; font-weight: bold;">
                    ig
                  </a>
                  
                  <!-- X (Twitter) -->
                  <a href="https://x.com/DecyphrAI" style="display: inline-block; width: 44px; height: 44px; background-color: #115e59; border-radius: 8px; text-decoration: none; text-align: center; line-height: 44px; font-size: 18px; color: white; font-weight: bold;">
                    X
                  </a>
                  
                  <!-- TikTok -->
                  <a href="https://www.tiktok.com/@decyphrai" style="display: inline-block; width: 44px; height: 44px; background-color: #0f766e; border-radius: 8px; text-decoration: none; text-align: center; line-height: 44px; font-size: 14px; color: white; font-weight: bold;">
                    TT
                  </a>
                </div>
                
                <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
                  <div style="display: inline-flex; align-items: center; justify-content: center; margin-bottom: 8px;">
                    <span style="font-size: 18px; font-weight: bold; color: #374151; margin-right: 6px;">Decyphr</span>
                    <span style="font-size: 18px; font-weight: bold; background: linear-gradient(135deg, #0d9488, #14b8a6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">AI</span>
                  </div>
                  <p style="color: #6b7280; font-size: 13px; margin: 0;">
                    Unlocking the world for content creators
                  </p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue execution even if email fails
    }

    return NextResponse.json({ message: 'Successfully joined waitlist!' }, { status: 200 });

  } catch (error) {
    console.error('Waitlist signup error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

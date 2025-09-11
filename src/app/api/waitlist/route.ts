import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

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

    // Send thank you email
    const { data, error } = await resend.emails.send({
      from: 'info@decyphr.ai',
      to: [email],
      subject: 'Welcome to the Decyphr AI Waitlist! 🚀',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Decyphr AI</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; background-color: #f8fafc;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%); padding: 40px 30px; text-align: center;">
                <h1 style="color: white; font-size: 28px; margin: 0; font-weight: bold;">Welcome to Decyphr AI! 🌍</h1>
                <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 16px;">Thank you for joining our waitlist</p>
              </div>
              
              <!-- Content -->
              <div style="padding: 40px 30px;">
                <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  Hi there! 👋
                </p>
                
                <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  Thank you for joining our waitlist! We're thrilled to have you on board as we prepare to launch Decyphr AI – the future of video translation technology.
                </p>
                
                <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  Here's what you can expect:
                </p>
                
                <ul style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0; padding-left: 20px;">
                  <li style="margin-bottom: 8px;">🎯 Early access to Decyphr AI when we launch</li>
                  <li style="margin-bottom: 8px;">📧 Exclusive updates on our development progress</li>
                  <li style="margin-bottom: 8px;">🎁 Special launch pricing and beta features</li>
                  <li style="margin-bottom: 8px;">🌟 Priority support from our team</li>
                </ul>
                
                <div style="background-color: #f0fdfa; border-left: 4px solid #14b8a6; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0;">
                  <p style="color: #0d9488; font-size: 16px; font-weight: 600; margin: 0 0 8px 0;">🚀 Coming Soon</p>
                  <p style="color: #374151; font-size: 14px; line-height: 1.5; margin: 0;">
                    We're working hard to bring you the most advanced AI video translation platform. Stay tuned for exciting updates!
                  </p>
                </div>
                
                <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 25px 0 0 0;">
                  Thanks again for your interest in Decyphr AI. We can't wait to help you break down language barriers and reach audiences worldwide! 🌎
                </p>
                
                <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 25px 0 0 0;">
                  Best regards,<br>
                  <span style="font-weight: 600; color: #0d9488;">The Decyphr AI Team</span>
                </p>
              </div>
              
              <!-- Footer -->
              <div style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                <div style="display: inline-flex; align-items: center; justify-content: center; margin-bottom: 15px;">
                  <span style="font-size: 20px; font-weight: bold; color: #374151; margin-right: 8px;">Decyphr</span>
                  <span style="font-size: 20px; font-weight: bold; background: linear-gradient(135deg, #0d9488, #14b8a6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">AI</span>
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

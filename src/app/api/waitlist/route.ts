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
    const tableId = process.env.AIRTABLE_TABLE_ID;
    if (!tableId) {
      return NextResponse.json(
        { error: 'Airtable table ID not configured' },
        { status: 500 }
      );
    }
    const table = base(tableId);
    
    const normalizedEmail = email.toLowerCase().trim();
    let isNewSignup = false;
    
    try {
      const existingRecords = await table.select({
        filterByFormula: `LOWER({Email}) = "${normalizedEmail.replace(/"/g, '\\"')}"`
      }).firstPage();
      
      if (existingRecords.length === 0) {
      await table.create([
        {
          fields: {
              'Email': normalizedEmail
            }
          }
        ]);
        isNewSignup = true;
        }
      
    } catch (error) {
      console.error('Airtable error:', error);
      return NextResponse.json(
        { error: 'Failed to save to waitlist' },
        { status: 500 }
      );
    }

    // Send thank you email
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'info@mail.decyphr.ai',
      to: [email],
      subject: "You're on the list — Decyphr Early Access",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Decyphr</title>
            <style>
              @media only screen and (max-width: 600px) {
                .container { width: 100% !important; }
                .header { padding: 32px 20px 28px !important; }
                .header-logo { padding: 10px 16px !important; margin-bottom: 20px !important; }
                .header-logo span { font-size: 18px !important; }
                .header-title { font-size: 28px !important; }
                .header-subtitle { font-size: 15px !important; }
                .stats-banner { padding: 24px 16px !important; }
                .stat-number { font-size: 24px !important; }
                .stat-label { font-size: 10px !important; }
                .content-section { padding: 32px 20px !important; }
                .content-text { font-size: 14px !important; }
                .feature-title { font-size: 13px !important; }
                .feature-desc { font-size: 11px !important; }
                .use-case-grid { display: block !important; }
                .use-case-cell { display: block !important; width: 100% !important; margin-bottom: 12px !important; }
                .use-case-spacer { display: none !important; }
                .free-badge { font-size: 20px !important; padding: 10px 14px !important; }
                .footer { padding: 24px 20px !important; }
              }
            </style>
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a; color: #fafafa;">
            <div class="container" style="max-width: 600px; margin: 0 auto;">
              
              <!-- Preheader -->
              <div style="display: none; max-height: 0; overflow: hidden;">
                Your early access spot is confirmed. Get ready to reach 5B+ new viewers.
              </div>
              
              <!-- Header -->
              <div class="header" style="padding: 48px 32px 40px; text-align: center; border-bottom: 1px solid #262626;">
                <div class="header-logo" style="display: inline-block; background: linear-gradient(135deg, #14b8a6, #0d9488); padding: 12px 20px; border-radius: 8px; margin-bottom: 32px;">
                  <span style="color: white; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">Decyphr</span>
                </div>
                <h1 class="header-title" style="color: #fafafa; font-size: 32px; font-weight: 700; margin: 0 0 16px 0; letter-spacing: -1px; line-height: 1.2;">
                  You're in.
                </h1>
                <p class="header-subtitle" style="color: #a1a1aa; font-size: 16px; margin: 0; line-height: 1.6;">
                  Early access confirmed — you'll be among the first to experience Decyphr when we launch.
                </p>
              </div>
              
              <!-- Stats Banner -->
              <div class="stats-banner" style="background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%); padding: 32px; text-align: center;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="text-align: center; padding: 0 8px;">
                      <p class="stat-number" style="color: white; font-size: 28px; font-weight: 700; margin: 0 0 4px 0;">5B+</p>
                      <p class="stat-label" style="color: rgba(255,255,255,0.8); font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0;">Potential Reach</p>
                    </td>
                    <td style="text-align: center; padding: 0 8px; border-left: 1px solid rgba(255,255,255,0.2); border-right: 1px solid rgba(255,255,255,0.2);">
                      <p class="stat-number" style="color: white; font-size: 28px; font-weight: 700; margin: 0 0 4px 0;">29+</p>
                      <p class="stat-label" style="color: rgba(255,255,255,0.8); font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0;">Languages</p>
                    </td>
                    <td style="text-align: center; padding: 0 8px;">
                      <p class="stat-number" style="color: white; font-size: 28px; font-weight: 700; margin: 0 0 4px 0;">1 Click</p>
                      <p class="stat-label" style="color: rgba(255,255,255,0.8); font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0;">To Go Global</p>
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- Main Content -->
              <div class="content-section" style="padding: 40px 32px;">
                
                <p class="content-text" style="color: #d4d4d8; font-size: 15px; line-height: 1.8; margin: 0 0 28px 0;">
                  Decyphr will transform your video content into any language with AI-powered dubbing and real-time lip-sync. Your voice. Your style. 29+ languages.
                </p>
                
                <!-- What We're Building -->
                <div style="background: #171717; border: 1px solid #262626; border-radius: 12px; padding: 24px; margin: 0 0 28px 0;">
                  <p style="color: #14b8a6; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; margin: 0 0 16px 0;">What We're Building</p>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #262626;">
                        <span class="feature-title" style="color: #fafafa; font-size: 14px; font-weight: 600; display: block; margin-bottom: 4px;">Voice Cloning</span>
                        <span class="feature-desc" style="color: #a1a1aa; font-size: 12px;">Keep your authentic voice across every language</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #262626;">
                        <span class="feature-title" style="color: #fafafa; font-size: 14px; font-weight: 600; display: block; margin-bottom: 4px;">Real-Time Lip Sync</span>
                        <span class="feature-desc" style="color: #a1a1aa; font-size: 12px;">Perfect mouth movements for natural viewing</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #262626;">
                        <span class="feature-title" style="color: #fafafa; font-size: 14px; font-weight: 600; display: block; margin-bottom: 4px;">29+ Languages</span>
                        <span class="feature-desc" style="color: #a1a1aa; font-size: 12px;">Reach 5+ billion people in their native language</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0;">
                        <span class="feature-title" style="color: #fafafa; font-size: 14px; font-weight: 600; display: block; margin-bottom: 4px;">One-Click Deploy</span>
                        <span class="feature-desc" style="color: #a1a1aa; font-size: 12px;">Upload once, distribute globally in minutes</span>
                      </td>
                    </tr>
                  </table>
                </div>
                
                <!-- Use Cases -->
                <p style="color: #14b8a6; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; margin: 0 0 16px 0;">Perfect For</p>
                
                <table class="use-case-grid" style="width: 100%; border-collapse: collapse; margin: 0 0 28px 0;">
                  <tr>
                    <td class="use-case-cell" style="padding: 16px; background: #171717; border: 1px solid #262626; border-radius: 10px; vertical-align: top; width: 48%;">
                      <p style="color: #fafafa; font-size: 14px; font-weight: 600; margin: 0 0 6px 0;">🎬 Content Creators</p>
                      <p style="color: #a1a1aa; font-size: 12px; line-height: 1.5; margin: 0;">MrBeast-style global expansion. One upload, 29 languages, billions of new viewers.</p>
                    </td>
                    <td class="use-case-spacer" style="width: 4%;"></td>
                    <td class="use-case-cell" style="padding: 16px; background: #171717; border: 1px solid #262626; border-radius: 10px; vertical-align: top; width: 48%;">
                      <p style="color: #fafafa; font-size: 14px; font-weight: 600; margin: 0 0 6px 0;">🎓 Education & E-Learning</p>
                      <p style="color: #a1a1aa; font-size: 12px; line-height: 1.5; margin: 0;">Reach students worldwide without hiring voice actors for every language.</p>
                    </td>
                  </tr>
                  <tr><td colspan="3" style="height: 12px;"></td></tr>
                  <tr>
                    <td class="use-case-cell" style="padding: 16px; background: #171717; border: 1px solid #262626; border-radius: 10px; vertical-align: top; width: 48%;">
                      <p style="color: #fafafa; font-size: 14px; font-weight: 600; margin: 0 0 6px 0;">📈 Marketing & Agencies</p>
                      <p style="color: #a1a1aa; font-size: 12px; line-height: 1.5; margin: 0;">Launch global campaigns in days. Localized video ads at a fraction of the cost.</p>
                    </td>
                    <td class="use-case-spacer" style="width: 4%;"></td>
                    <td class="use-case-cell" style="padding: 16px; background: #171717; border: 1px solid #262626; border-radius: 10px; vertical-align: top; width: 48%;">
                      <p style="color: #fafafa; font-size: 14px; font-weight: 600; margin: 0 0 6px 0;">🏢 Enterprise & HR</p>
                      <p style="color: #a1a1aa; font-size: 12px; line-height: 1.5; margin: 0;">Training, onboarding, and internal comms for distributed global teams.</p>
                    </td>
                  </tr>
                </table>

                <!-- Early Access Benefit -->
                <div style="background: linear-gradient(135deg, #042f2e 0%, #134e4a 100%); border: 1px solid #14b8a6; border-radius: 12px; padding: 24px; margin: 0 0 28px 0;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="vertical-align: middle;">
                        <p style="color: #5eead4; font-size: 11px; font-weight: 600; margin: 0 0 6px 0; text-transform: uppercase; letter-spacing: 1px;">Early Access Perk</p>
                        <p style="color: #fafafa; font-size: 18px; font-weight: 700; margin: 0; letter-spacing: -0.5px;">First month free</p>
                        <p style="color: #99f6e4; font-size: 13px; margin: 8px 0 0 0;">No credit card required. Full access when we launch.</p>
                      </td>
                      <td style="text-align: right; vertical-align: middle; width: 80px;">
                        <div class="free-badge" style="background: #14b8a6; color: #042f2e; font-size: 24px; font-weight: 800; padding: 12px 16px; border-radius: 8px;">FREE</div>
                      </td>
                    </tr>
                  </table>
                </div>

                <!-- What's Next -->
                <p style="color: #14b8a6; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; margin: 0 0 12px 0;">What Happens Next</p>
                <p class="content-text" style="color: #d4d4d8; font-size: 14px; line-height: 1.8; margin: 0 0 8px 0;">
                  We're in the final stages of development. When we're ready, you'll receive your exclusive early access credentials before anyone else.
                </p>
                <p style="color: #71717a; font-size: 13px; line-height: 1.6; margin: 0;">
                  In the meantime, keep creating. We'll handle the translation.
                </p>
              </div>
              
              <!-- Footer -->
              <div class="footer" style="border-top: 1px solid #262626; padding: 32px; text-align: center;">
                <p style="font-size: 16px; font-weight: 700; color: #14b8a6; margin: 0 0 4px 0;">Decyphr</p>
                <p style="color: #71717a; font-size: 12px; margin: 0 0 16px 0;">
                  Your content. Every language.
                </p>
                <p style="color: #52525b; font-size: 11px; margin: 0;">
                  © ${new Date().getFullYear()} Decyphr. All rights reserved.
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
      { message: 'Successfully joined waitlist!', id: data?.id, isNew: isNewSignup },
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

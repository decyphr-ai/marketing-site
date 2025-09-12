import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface WaitlistEntry {
  email: string;
  timestamp: string;
  userAgent?: string;
  ip?: string;
}

export async function GET(request: NextRequest) {
  // Simple password protection - add this to your .env file
  const adminPassword = process.env.ADMIN_PASSWORD;
  const providedPassword = request.nextUrl.searchParams.get('password');
  
  if (!adminPassword || providedPassword !== adminPassword) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const dataDir = path.join(process.cwd(), 'data');
    const waitlistFile = path.join(dataDir, 'waitlist.json');
    
    // Check if waitlist file exists
    if (!fs.existsSync(waitlistFile)) {
      return NextResponse.json({
        message: 'No waitlist data found',
        count: 0,
        emails: []
      });
    }
    
    // Read waitlist data
    const fileContent = fs.readFileSync(waitlistFile, 'utf8');
    const waitlist: WaitlistEntry[] = JSON.parse(fileContent);
    
    // Sort by timestamp (newest first)
    const sortedWaitlist = waitlist.sort((a: WaitlistEntry, b: WaitlistEntry) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
    
    return NextResponse.json({
      message: 'Waitlist retrieved successfully',
      count: waitlist.length,
      emails: sortedWaitlist
    });
    
  } catch (error) {
    console.error('Error reading waitlist:', error);
    return NextResponse.json(
      { error: 'Failed to read waitlist data' },
      { status: 500 }
    );
  }
}

// Export emails as CSV
export async function POST(request: NextRequest) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  const { password, format } = await request.json();
  
  if (!adminPassword || password !== adminPassword) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const dataDir = path.join(process.cwd(), 'data');
    const waitlistFile = path.join(dataDir, 'waitlist.json');
    
    if (!fs.existsSync(waitlistFile)) {
      return NextResponse.json({ error: 'No waitlist data found' }, { status: 404 });
    }
    
    const fileContent = fs.readFileSync(waitlistFile, 'utf8');
    const waitlist: WaitlistEntry[] = JSON.parse(fileContent);
    
    if (format === 'csv') {
      // Generate CSV
      const csvHeader = 'Email,Timestamp,User Agent,IP Address\n';
      const csvData = waitlist.map((entry: WaitlistEntry) => 
        `"${entry.email}","${entry.timestamp}","${entry.userAgent || ''}","${entry.ip || ''}"`
      ).join('\n');
      
      return new NextResponse(csvHeader + csvData, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': 'attachment; filename="waitlist.csv"'
        }
      });
    }
    
    return NextResponse.json(waitlist);
    
  } catch (error) {
    console.error('Error exporting waitlist:', error);
    return NextResponse.json(
      { error: 'Failed to export waitlist data' },
      { status: 500 }
    );
  }
}

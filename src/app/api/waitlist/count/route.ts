import { NextResponse } from 'next/server';
import Airtable from 'airtable';

const FALLBACK_COUNT = 127;

export async function GET() {
  try {
    const airtableApiKey = process.env.AIRTABLE_KEY;
    const airtableBaseId = process.env.AIRTABLE_BASE_ID;
    
    const tableId = process.env.AIRTABLE_TABLE_ID;
    
    if (!airtableApiKey || !airtableBaseId || !tableId) {
      return NextResponse.json(
        { count: FALLBACK_COUNT, isFallback: true },
        { status: 200 }
      );
    }

    const base = new Airtable({ apiKey: airtableApiKey }).base(airtableBaseId);
    const table = base(tableId);
    
    const records = await table.select({
      fields: []
    }).all();
    
    return NextResponse.json(
      { count: records.length, isFallback: false },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
        }
      }
    );

  } catch (error) {
    console.error('Error fetching waitlist count:', error);
    return NextResponse.json(
      { count: FALLBACK_COUNT, isFallback: true },
      { status: 200 }
    );
  }
}


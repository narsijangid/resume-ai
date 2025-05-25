import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { pdfData } = await request.json();
        
        // Convert base64 to buffer
        const pdfBuffer = Buffer.from(pdfData.split(',')[1], 'base64');
        
        // Set headers for PDF download
        const headers = {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="resume.pdf"',
        };

        return new NextResponse(pdfBuffer, { headers });
    } catch (error) {
        console.error('Error in download route:', error);
        return NextResponse.json({ error: 'Failed to download PDF' }, { status: 500 });
    }
} 
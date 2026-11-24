import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, email, company, service, budget, message } = data;

    console.log('⚡ [KD MULTIMEDIA] New Direct Project Inquiry Received:', {
      timestamp: new Date().toISOString(),
      name,
      phone,
      email,
      company: company || 'N/A',
      service,
      budget,
      message,
    });

    // If CALLMEBOT_API_KEY or WHATSAPP_GATEWAY_URL is provided in environment variables,
    // this can send an automated background WhatsApp notification directly to +91 70165 63129
    // without the user ever opening WhatsApp!
    const apiKey = process.env.CALLMEBOT_API_KEY;
    if (apiKey) {
      const text = encodeURIComponent(
        `*NEW INQUIRY*\nName: ${name}\nPhone: ${phone}\nService: ${service}\nBudget: ${budget}\nMsg: ${message || 'N/A'}`
      );
      try {
        await fetch(`https://api.callmebot.com/whatsapp.php?phone=917016563129&text=${text}&apikey=${apiKey}`);
      } catch (err) {
        console.error('CallMeBot notification error:', err);
      }
    }

    return NextResponse.json({ success: true, message: 'Inquiry registered successfully' });
  } catch (error) {
    console.error('Error processing inquiry:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

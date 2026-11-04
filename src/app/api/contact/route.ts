import { NextResponse } from 'next/server'

const GHL_LOCATION_ID = 'G43COt3uGbAzymts6uXB'

// Pipeline routing
const PIPELINES = {
  public: {
    pipelineId: 'CdwCC9H9YMrrCnPewKno',
    stageId: 'f53423b0-4b3f-4c38-87b2-25b0f0be8f71', // Sent Intro Email (first stage)
    name: 'GovCon Pipeline',
  },
  general: {
    pipelineId: 'BQG6zInXFIEWtX390QiO',
    stageId: '7893203b-d80a-45c1-bae4-d01b404b30f8', // New Lead (first stage)
    name: 'BrightLink Leads',
  },
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, message, source } = body

    if (!firstName || !email) {
      return NextResponse.json(
        { error: 'First name and email are required.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.GHL_PRIVATE_KEY
    if (!apiKey) {
      console.error('GHL_PRIVATE_KEY not configured')
      return NextResponse.json(
        { error: 'Service configuration error.' },
        { status: 500 }
      )
    }

    const pipeline = source === 'public' ? PIPELINES.public : PIPELINES.general
    const tags = source === 'public'
      ? ['website-lead', 'public-sector-inbound']
      : source === 'private'
      ? ['website-lead', 'private-sector-inbound']
      : ['website-lead']

    // 1. Create contact in GHL
    const contactRes = await fetch(
      'https://services.leadconnectorhq.com/contacts/',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          Version: '2021-07-28',
        },
        body: JSON.stringify({
          locationId: GHL_LOCATION_ID,
          firstName,
          lastName: lastName || '',
          email,
          phone: phone || '',
          companyName: company || '',
          source: 'BrightLink Website',
          tags,
        }),
      }
    )

    let contactId: string | undefined

    if (!contactRes.ok) {
      const errText = await contactRes.text()
      let errJson: { statusCode?: number; meta?: { contactId?: string } } = {}
      try { errJson = JSON.parse(errText) } catch {}

      // GHL returns 400 when contact already exists — extract the existing ID
      if (contactRes.status === 400 && errJson?.meta?.contactId) {
        contactId = errJson.meta.contactId
      } else {
        console.error('GHL contact creation failed:', errText)
        return NextResponse.json(
          { error: 'Failed to save contact.' },
          { status: 500 }
        )
      }
    } else {
      const contactData = await contactRes.json()
      contactId = contactData?.contact?.id
    }

    if (!contactId) {
      return NextResponse.json(
        { error: 'Contact created but ID not returned.' },
        { status: 500 }
      )
    }

    // 2. Create opportunity in correct pipeline
    const fullName = [firstName, lastName].filter(Boolean).join(' ')
    const opportunityRes = await fetch(
      'https://services.leadconnectorhq.com/opportunities/',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          Version: '2021-07-28',
        },
        body: JSON.stringify({
          pipelineId: pipeline.pipelineId,
          pipelineStageId: pipeline.stageId,
          locationId: GHL_LOCATION_ID,
          name: `Website Lead – ${fullName}`,
          contactId,
          status: 'open',
          customFields: message
            ? [{ id: 'notes', value: message }]
            : undefined,
        }),
      }
    )

    if (!opportunityRes.ok) {
      const err = await opportunityRes.text()
      console.error('GHL opportunity creation failed:', err)
      // Contact was created — not a total failure, still return success
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}

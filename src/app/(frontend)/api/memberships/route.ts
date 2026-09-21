import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { membershipSchema } from '@/schemas/membership'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Validate payload using shared Zod schema
    const validation = membershipSchema.safeParse(body)
    if (!validation.success) {
      const firstError = validation.error.issues[0]?.message || 'Invalid form submission.'
      return NextResponse.json({ error: firstError }, { status: 400 })
    }

    const data = validation.data
    const payload = await getPayload({ config: configPromise })

    // Check if an application with this email already exists
    const existing = await payload.find({
      collection: 'memberships',
      where: {
        email: {
          equals: data.email,
        },
      },
      limit: 1,
    })

    if (existing.totalDocs > 0) {
      return NextResponse.json(
        {
          error:
            'An application with this email address has already been submitted. Our team will review your application soon.',
        },
        { status: 409 },
      )
    }

    const newApplication = await payload.create({
      collection: 'memberships',
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        department: data.department,
        year: data.year,
        reasonToJoin: data.reasonToJoin,
        interests: data.interests as any,
        hasPreviousClubExperience: data.hasPreviousClubExperience,
        previousClubExperienceDetails: data.previousClubExperienceDetails || '',
        skills: data.skills,
        teamworkRating: data.teamworkRating,
        learningGoals: data.learningGoals || '',
        weeklyCommitment: data.weeklyCommitment,
        willingToParticipateInEvents: data.willingToParticipateInEvents,
        contribution: data.contribution || '',
        confirmedInformation: data.confirmedInformation,
        status: 'pending',
        appliedAt: new Date().toISOString(),
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Your membership application has been received successfully!',
        id: newApplication.id,
      },
      { status: 201 },
    )
  } catch (error: any) {
    console.error('Error submitting membership application:', error)
    return NextResponse.json(
      {
        error: error?.message || 'Failed to submit application. Please try again.',
      },
      { status: 500 },
    )
  }
}

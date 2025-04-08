import { NextResponse } from 'next/server'
import { addBetaSignup } from '@/services/betaSignupService'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const signup = await addBetaSignup({
      email: body.email,
      name: body.name,
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json(signup)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process signup' },
      { status: 500 }
    )
  }
} 
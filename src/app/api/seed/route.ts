import { NextResponse } from 'next/server'
import { seed } from '@/payload/seed'

export async function GET() {
  try {
    await seed()
    return NextResponse.json({ success: true, message: 'Database seeded successfully!' })
  } catch (error: any) {
    console.error('Seed API error:', error)
    return NextResponse.json({ success: false, error: error?.message || 'Failed to seed' }, { status: 500 })
  }
}

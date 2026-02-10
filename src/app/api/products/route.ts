import { NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
    const supabase = await createServerClient()
    const { searchParams } = new URL(request.url)

    const category = searchParams.get('category')
    const shrimpType = searchParams.get('shrimpType')
    const farmingStage = searchParams.get('farmingStage')
    const problemType = searchParams.get('problemType')

    let query = supabase
        .from('products')
        .select('*')
        .eq('is_active', true)

    if (category && category !== 'all') {
        query = query.eq('category', category)
    }

    if (shrimpType && shrimpType !== 'all') {
        query = query.contains('shrimp_type', [shrimpType])
    }

    if (farmingStage && farmingStage !== 'all') {
        query = query.contains('farming_stage', [farmingStage])
    }

    if (problemType && problemType !== 'all') {
        query = query.contains('problem_type', [problemType])
    }

    const { data, error } = await query.order('created_at', { ascending: false })

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
}

export async function POST(request: Request) {
    const supabase = await createServerClient()

    // Check authentication
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user is admin
    const { data: userData } = await supabase
        .from('users')
        .select('role')
        .eq('id', user.id)
        .single()

    if (userData?.role !== 'admin') {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()

    const { data, error } = await supabase
        .from('products')
        .insert({
            ...body,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        })
        .select()
        .single()

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
}

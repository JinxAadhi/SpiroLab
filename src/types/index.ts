export interface Product {
    id: string
    name: string
    description: string
    price: number
    category: string
    shrimp_type: string[]
    farming_stage: string[]
    problem_type: string[]
    image_url: string
    stock_quantity: number
    is_active: boolean
    created_at: string
    updated_at: string
}

export interface User {
    id: string
    email: string
    full_name: string | null
    phone: string | null
    role: 'customer' | 'farmer' | 'admin'
    created_at: string
    updated_at: string
}

export interface Order {
    id: string
    user_id: string
    total_amount: number
    status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
    payment_status: 'pending' | 'completed' | 'failed'
    payment_id: string | null
    shipping_address: ShippingAddress
    created_at: string
    updated_at: string
}

export interface ShippingAddress {
    full_name: string
    phone: string
    address_line1: string
    address_line2?: string
    city: string
    state: string
    pincode: string
}

export interface OrderItem {
    id: string
    order_id: string
    product_id: string
    quantity: number
    price: number
    created_at: string
}

export interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
    image_url: string
    category: string
}

export interface BlogPost {
    id: string
    title: string
    slug: string
    content: string
    excerpt: string
    category: string
    image_url: string
    author_id: string
    published: boolean
    created_at: string
    updated_at: string
}

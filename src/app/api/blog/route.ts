import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Assuming you're using Prisma

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const post = await prisma.post.create({
      data: {
        title: body.title,
        category: body.category,
        content: body.content,
        createdAt: body.createdAt,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
} 
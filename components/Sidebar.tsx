import Image from 'next/image'
import React from 'react'
import ProfilePhoto from './shared/ProfilePhoto'
import { getAllPosts } from '@/lib/serveractions'

const Sidebar = async ({ user }: { user: any }) => {

    const posts = await getAllPosts();
    
}


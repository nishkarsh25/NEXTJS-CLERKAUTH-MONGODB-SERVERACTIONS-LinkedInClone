'use client';
import React, { useState } from 'react'
import ProfilePhoto from './shared/ProfilePhoto'
import { Input } from './ui/input'
import { PostDialog } from './PostDialog'

const PostInput = ({ user }: { user: any }) => {
    const [open , setOpen] = useState<boolean>(false);
    const inputHandler = () => {
        setOpen(true);
    }
    
}


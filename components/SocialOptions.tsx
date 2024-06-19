import React, { useState } from 'react'
import { Button } from './ui/button'
import { MessageCircleMore, Repeat, Send, ThumbsUp } from 'lucide-react'
import { IPostDocument } from '@/models/post.model';
import { useUser } from '@clerk/nextjs';
import CommentInput from './CommentInput';
import Comments from './Comments';

const SocialOptions = ({ post }: { post: IPostDocument }) => {
    const { user } = useUser();
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(post.likes);
    const [commentOpen, setCommentOpen] = useState(false);

    
    
}


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

    const likeOrDislikeHandler = async () => {
        if (!user) throw new Error(' User not athenticated');
        const tempLiked = liked;
        const tempLikes = likes;
        const dislike = likes?.filter((userId) => userId !== user.id);
        const like = [...(likes ?? []), user.id];
        const newLike = liked ? dislike : like;

        setLiked(!liked);
        setLikes(newLike);

        const res = await fetch(`/api/posts/${post._id}/${liked ? '/dislike' : '/like'}`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(user.id),
        });
        if (!res.ok) {
            setLiked(tempLiked);
            throw new Error('Failed to like or dislike')
        }

        const fetchAllLikes = await fetch(`/api/posts/${post._id}/like`);
        if (!fetchAllLikes.ok) {
            setLikes(tempLikes);
            throw new Error('Failed to fetch like');
        }

        const likeData = await fetchAllLikes.json();
        setLikes(likeData);
    }
    
}


"use client"
import React, { useEffect, useState } from 'react'

const Post = ({params}) => {
    const id = params.id;

    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL+'/post/'+id)
        .then(res => res.json())
        .then(res => setPost(res))
    }, [])

  return (
    <>
        {post && <main className="container mx-auto px-4 py-6">
            <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
            <img width={300} height={200} src={post.image} alt="Post Image" className="my-4" />
            <p>{post.description}</p>
        </main>}
    </>
  )
}

export default Post
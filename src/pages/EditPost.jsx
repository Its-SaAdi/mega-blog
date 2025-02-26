import React, { useState, useEffect } from 'react'
import service from '../appwrite/dbStorage'
import { Container } from '../components'
import PostForm from '../components/Post-form/PostForm'
import { useParams, useNavigate } from 'react-router-dom'

const EditPost = () => {
    const [post, setPost] = useState(null)
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                }
            })
        } else {
            navigate('/');
        }
    }, [slug, navigate])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost
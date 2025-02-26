import React from 'react'
import Container from '../components/container/Container'
import PostForm from '../components/Post-form/PostForm'

const AddPost = () => {
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost
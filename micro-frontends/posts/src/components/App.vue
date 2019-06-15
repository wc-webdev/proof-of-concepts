<template>
  <div>
    <Container>
      <h1>
        Posts
      </h1>
      <PostList
        :items="posts"
      />
    </Container>
  </div>
</template>

<script>
  import { mapState, } from 'vuex'
  import { styled, } from 'styletron-vue'
  import styletron from '../StyletronInstance'
  import PostList from './PostList'

  const Container = styled('div', {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    maxWidth: '768px',
    margin: '0 auto',
  })

  export default {
    name: 'App',
    computed: mapState({
      posts: state => state.post.posts,
    }),
    components: {
      PostList,
      Container,
    },
    styletron,
  }
</script>

<style>
  @import '~normalize.css';
  @import '../assets/styles/global.css';
</style>

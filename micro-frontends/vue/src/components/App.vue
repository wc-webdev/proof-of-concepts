<template>
  <div>
    <Container>
      <h1>
        Done
      </h1>
      <ItemList
        :items="items"
      />
    </Container>
  </div>
</template>

<script>
  import { mapState, } from 'vuex'
  import { styled, } from 'styletron-vue'
  import styletron from '../StyletronInstance'
  import ItemList from './ItemList'

  const Container = styled('div', {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    maxWidth: '768px',
    margin: '0 auto',
  })

  export default {
    name: 'App',
    computed: mapState({
      items: state => state.item.loadedItems,
    }),
    components: {
      ItemList,
      Container,
    },
    styletron,
  }
</script>

<style>
  @import '~normalize.css';
  @import '../assets/styles/global.css';
</style>

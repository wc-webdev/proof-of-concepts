<template>
  <div>
    <ArticleBase
      v-for="item in items"
      v-bind:key="item.id"
    >
      <ArticleHeader>
        <ArticleTitle>
          {{item.title}}
        </ArticleTitle>
      </ArticleHeader>
    </ArticleBase>
  </div>
</template>

<script>
  import { styled, } from 'styletron-vue'

  const ArticleBase = styled('article', {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'currentColor',
    marginTop: '1rem',
    marginBottom: '1rem',
  })

  const ArticleHeader = styled('header', {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    marginTop: '1rem',
    marginBottom: '1rem',
  })

  const ArticleTitle = styled('h2', {
    marginTop: 0,
    marginBottom: 0,
    fontSize: '1em',
  })

  export default {
    name: 'ItemList',
    props: {
      items: Array,
    },
    components: {
      ArticleBase,
      ArticleHeader,
      ArticleTitle,
    },
  }
</script>

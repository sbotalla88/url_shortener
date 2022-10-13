<script setup>
import { matchUrl } from '../composables/useUrl'
const route = useRoute()
const msg = ref('Loading...')
try {
  const url = await matchUrl(route.params.shortId)
  if (process.client) window.location.href = url.long
 
} catch (error) {
  msg.value = 'Invalid Url'
}
</script>

<template>
  <main>
    <Head></Head>

    <h1>{{ msg }}</h1>
  </main>
</template>

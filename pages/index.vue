<script setup>
import { shortUrl } from '../composables/useUrl'
const longUrl = ref('')
const short = ref('')

const doShort = ref(false)

async function shortenUrl() {
  const baseUrl = window.location.href
  const res = await shortUrl(longUrl.value,baseUrl)
  short.value = res.short
}

function copyUrl() {
  const textarea = document.querySelector('input[type=text]')
  textarea.focus()
  textarea.select()
  document.execCommand('copy')
}

function cancel() {
  longUrl.value = ''
  shortUrl.value = ''
  doShort.value = false
}
watch(doShort, (newVal) => {
  if (newVal) shortenUrl()
})
</script>
<template>
  <main>
    <Head> </Head>
    <section class="hero-section">
      <v-container>
        <v-row justify="center">
          <v-col cols="6">
            <v-card elevation="2" pa-2>
              <div class="pa-4">
                <v-form ref="form">
                  <v-text-field
                    v-if="doShort && short"
                    v-model="short"
                    placeholder="Url"
                    ref=""
                    required
                  ></v-text-field>
                  <v-text-field
                    v-else
                    v-model="longUrl"
                    placeholder="Url"
                    required
                  ></v-text-field>

                  <label class="mb-3 d-block">
                    <input type="checkbox" v-model="doShort" />
                    Shorten Url
                  </label>

                  <div class="d-flex">
                    <v-btn @click="cancel"> Cancel </v-btn>
                    <v-btn @click="copyUrl" class="ml-1" color="warning" dark>
                      Copy
                    </v-btn>
                  </div>
                </v-form>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </main>
</template>

<style scoped></style>

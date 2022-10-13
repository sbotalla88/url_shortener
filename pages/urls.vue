<script setup>
import { getUrls } from '../composables/useUrl'
const urls = await getUrls()
</script>


<template>
  <main>
  <Head></Head>

  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          #
        </th>
        <th class="text-left">
          Long Url
        </th>
        <th class="text-left">
          Short Url
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, i) in urls"
        :key="item.name"
      >
      <td>{{ i+1 }}</td>

        <td>{{ item.short }}</td>
        <td>{{ item.long }}</td>
      </tr>
    </tbody>
  </v-table>
  </main>
</template>

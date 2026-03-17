<script setup lang="ts">
import { computed, ref } from 'vue'

type ArchiveItem = {
  title: string
  source_title: string
  category: string
  date: string
  link: string
  preview: string
  keywords: string[]
  tags: string[]
}

const props = defineProps<{
  itemsJson: string
}>()

const viewMode = ref<'compact' | 'expanded'>('compact')

const items = computed<ArchiveItem[]>(() => {
  try {
    return JSON.parse(props.itemsJson) as ArchiveItem[]
  } catch {
    return []
  }
})

function setViewMode(mode: 'compact' | 'expanded') {
  viewMode.value = mode
}
</script>

<template>
  <section class="poket-archive-browser">
    <div class="poket-archive-toolbar">
      <div class="poket-explorer-meta">
        <span>{{ items.length }} results</span>
      </div>
      <div class="poket-view-toggle" role="tablist" aria-label="Archive view mode">
        <button
          type="button"
          class="poket-view-toggle-button"
          :class="{ 'is-active': viewMode === 'compact' }"
          @click="setViewMode('compact')"
        >
          compact
        </button>
        <button
          type="button"
          class="poket-view-toggle-button"
          :class="{ 'is-active': viewMode === 'expanded' }"
          @click="setViewMode('expanded')"
        >
          expanded
        </button>
      </div>
    </div>

    <div class="poket-archive-list" :class="`is-${viewMode}`">
      <article
        v-for="item in items"
        :key="item.link"
        class="poket-archive-item"
      >
        <div class="poket-archive-top">
          <span class="poket-entry-category">{{ item.category }}</span>
          <span class="poket-archive-date">{{ item.date }}</span>
        </div>
        <h3 class="poket-entry-title">
          <a :href="item.link">{{ item.title }}</a>
        </h3>
        <p class="poket-entry-source">{{ item.source_title }}</p>
        <p class="poket-entry-preview">{{ item.preview }}</p>
        <div class="poket-tag-pills">
          <span
            v-for="keyword in item.keywords.slice(0, 3)"
            :key="keyword"
            class="poket-tag-pill"
          >
            {{ keyword }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

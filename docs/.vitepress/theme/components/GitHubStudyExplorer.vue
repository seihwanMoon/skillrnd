<script setup lang="ts">
import { computed, ref } from 'vue'

type ExplorerItem = {
  title: string
  source_title: string
  category: string
  date: string
  link: string
  preview: string
  keywords: string[]
  tags: string[]
  badges: Array<{ label: string; tone: string }>
}

const props = defineProps<{
  itemsJson: string
}>()

const query = ref('')
const activeCategory = ref('all')

const items = computed<ExplorerItem[]>(() => {
  try {
    return JSON.parse(props.itemsJson) as ExplorerItem[]
  } catch {
    return []
  }
})

const categories = computed(() => {
  return ['all', ...new Set(items.value.map((item) => item.category))]
})

const filteredItems = computed(() => {
  const normalizedQuery = query.value.trim().toLowerCase()

  return items.value.filter((item) => {
    const categoryMatch =
      activeCategory.value === 'all' || item.category === activeCategory.value

    if (!normalizedQuery) return categoryMatch

    const haystack = [
      item.title,
      item.source_title,
      item.preview,
      ...item.keywords,
      ...item.tags
    ]
      .join(' ')
      .toLowerCase()

    return categoryMatch && haystack.includes(normalizedQuery)
  })
})

function selectCategory(category: string) {
  activeCategory.value = category
}
</script>

<template>
  <section class="poket-explorer">
    <div class="poket-explorer-toolbar">
      <label class="poket-explorer-search">
        <span class="poket-explorer-label">Search</span>
        <input
          v-model="query"
          class="poket-explorer-input"
          type="search"
          placeholder="제목, 키워드, 설명으로 찾기"
        />
      </label>

      <div class="poket-explorer-filters">
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          class="poket-explorer-filter"
          :class="{ 'is-active': activeCategory === category }"
          @click="selectCategory(category)"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <div class="poket-explorer-meta">
      <span>{{ filteredItems.length }} results</span>
      <span v-if="activeCategory !== 'all'">category: {{ activeCategory }}</span>
    </div>

    <div class="poket-explorer-grid">
      <article
        v-for="item in filteredItems"
        :key="item.link"
        class="poket-explorer-card"
      >
        <div class="poket-entry-card-top">
          <span class="poket-entry-category">{{ item.category }}</span>
          <span class="poket-entry-date">{{ item.date }}</span>
        </div>
        <h3 class="poket-entry-title">
          <a :href="item.link">{{ item.title }}</a>
        </h3>
        <p class="poket-entry-source">{{ item.source_title }}</p>
        <p class="poket-entry-preview">{{ item.preview }}</p>
        <div v-if="item.badges.length" class="poket-badge-row">
          <span
            v-for="badge in item.badges"
            :key="`${item.link}-${badge.label}`"
            class="poket-status-badge"
            :class="`poket-status-badge-${badge.tone}`"
          >
            {{ badge.label }}
          </span>
        </div>
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

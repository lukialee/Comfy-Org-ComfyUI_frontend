<template>
  <div
    class="SettingDialogContent w-[50vw] h-[60vh] max-w-[800px] flex flex-col text-xs md:text-sm overflow-hidden"
  >
    <div class="flex-1 w-full scrollable">
      <Tabs :value="tabValue" class="overflow-hidden">
        <div
          class="absolute bg-zinc-900 w-full z-10 top-16 left-0 flex items-center justify-between border-b border-[var(--p-divider-border-color)] space-x-4"
        >
          <TabList class="flex-1 h-16">
            <Tab
              v-for="category in categories"
              :key="category.key"
              :value="category.label"
              class="text-xs md:text-sm h-16 px-2 md:px-5"
            >
              {{ category.label }}
            </Tab>
          </TabList>
          <SearchBox
            class="w-48 md:w-64 pr-4 md:pr-5 text-xs md:text-sm"
            v-model:modelValue="searchQuery"
            @search="handleSearch"
            :placeholder="$t('searchSettings') + '...'"
          />
        </div>

        <TabPanels class="px-0 pt-20 scrollable">
          <TabPanel key="search-results" value="Search Results">
            <div v-if="searchResults.length > 0">
              <SettingGroup
                v-for="(group, i) in searchResults"
                :key="group.label"
                :divider="i !== 0"
                :group="group"
              />
            </div>
            <NoResultsPlaceholder
              v-else
              icon="pi pi-search"
              :title="$t('noResultsFound')"
              :message="$t('searchFailedMessage')"
            />
          </TabPanel>
          <TabPanel
            v-for="category in categories"
            :key="category.key"
            :value="category.label"
          >
            <SettingGroup
              v-for="(group, i) in sortedGroups(category)"
              :key="group.label"
              :divider="i !== 0"
              :group="{
                label: group.label,
                settings: flattenTree<SettingParams>(group)
              }"
            />
          </TabPanel>
          <TabPanel key="about" value="About">
            <AboutPanel />
          </TabPanel>
          <TabPanel key="keybinding" value="Keybinding">
            <KeybindingPanel />
          </TabPanel>
          <TabPanel key="extension" value="Extension">
            <ExtensionPanel />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import Tabs from 'primevue/tabs'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import Divider from 'primevue/divider'
import { SettingTreeNode, useSettingStore } from '@/stores/settingStore'
import { SettingParams } from '@/types/settingTypes'
import SettingGroup from './setting/SettingGroup.vue'
import SearchBox from '@/components/common/SearchBox.vue'
import NoResultsPlaceholder from '@/components/common/NoResultsPlaceholder.vue'
import { flattenTree } from '@/utils/treeUtil'
import AboutPanel from './setting/AboutPanel.vue'
import KeybindingPanel from './setting/KeybindingPanel.vue'
import ExtensionPanel from './setting/ExtensionPanel.vue'

interface ISettingGroup {
  label: string
  settings: SettingParams[]
}

const aboutPanelNode: SettingTreeNode = {
  key: 'about',
  label: 'About',
  children: []
}

const keybindingPanelNode: SettingTreeNode = {
  key: 'keybinding',
  label: 'Keybinding',
  children: []
}

const extensionPanelNode: SettingTreeNode = {
  key: 'extension',
  label: 'Extension',
  children: []
}

const extensionPanelNodeList = computed<SettingTreeNode[]>(() => {
  const settingStore = useSettingStore()
  const showExtensionPanel = settingStore.get('Comfy.Settings.ExtensionPanel')
  return showExtensionPanel ? [extensionPanelNode] : []
})

const settingStore = useSettingStore()
const settingRoot = computed<SettingTreeNode>(() => settingStore.settingTree)
const categories = computed<SettingTreeNode[]>(() => [
  ...(settingRoot.value.children || []),
  keybindingPanelNode,
  ...extensionPanelNodeList.value,
  aboutPanelNode
])
const activeCategory = ref<SettingTreeNode | null>(null)
const searchResults = ref<ISettingGroup[]>([])

watch(activeCategory, (newCategory, oldCategory) => {
  if (newCategory === null) {
    activeCategory.value = oldCategory
  }
})

onMounted(() => {
  activeCategory.value = categories.value[0]
})

const sortedGroups = (category: SettingTreeNode) => {
  return [...(category.children || [])].sort((a, b) =>
    a.label.localeCompare(b.label)
  )
}

const searchQuery = ref<string>('')
const searchInProgress = ref<boolean>(false)
watch(searchQuery, () => (searchInProgress.value = true))

const handleSearch = (query: string) => {
  if (!query) {
    searchResults.value = []
    return
  }

  const allSettings = flattenTree<SettingParams>(settingRoot.value)
  const filteredSettings = allSettings.filter(
    (setting) =>
      setting.id.toLowerCase().includes(query.toLowerCase()) ||
      setting.name.toLowerCase().includes(query.toLowerCase())
  )

  const groupedSettings: { [key: string]: SettingParams[] } = {}
  filteredSettings.forEach((setting) => {
    const groupLabel = setting.id.split('.')[1]
    if (!groupedSettings[groupLabel]) {
      groupedSettings[groupLabel] = []
    }
    groupedSettings[groupLabel].push(setting)
  })

  searchResults.value = Object.entries(groupedSettings).map(
    ([label, settings]) => ({
      label,
      settings
    })
  )
  searchInProgress.value = false
}

const inSearch = computed(
  () => searchQuery.value.length > 0 && !searchInProgress.value
)
const tabValue = computed(() =>
  inSearch.value ? 'Search Results' : activeCategory.value?.label
)
</script>

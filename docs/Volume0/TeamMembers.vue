<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import { computed } from 'vue'
import TeamMembersItem from './TeamMembersItem.vue'

interface Props {
  size?: 'small' | 'medium'
  members: DefaultTheme.TeamMember[]
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium'
})

const classes = computed(() => [props.size, `count-${props.members.length}`])
</script>

<template>
  <div class="TeamMembers" :class="classes">
    <div class="container">
      <div v-for="member in members" :key="member.name" class="item">
        <TeamMembersItem :size="size" :member="member" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.TeamMembers.small .container {
  grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
}

.TeamMembers.small.count-1 .container {
  max-width: 276px;
}

.TeamMembers.small.count-2 .container {
  max-width: calc(276px * 2 + 24px);
}

.TeamMembers.small.count-3 .container {
  max-width: calc(276px * 3 + 24px * 2);
}

.container {
  display: grid;
  gap: 24px;
  margin: 0 auto;
  max-width: 1152px;
}
</style>
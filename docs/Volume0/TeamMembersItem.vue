<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'

interface Props {
    size?: 'small' | 'medium'
    member: DefaultTheme.TeamMember
}

withDefaults(defineProps<Props>(), {
    size: 'medium'
})
</script>

<template>
    <article class="TeamMembersItem" :class="[size]">
        <div class="profile">
            <figure class="avatar">
                <a v-bind:href="member.avatar.replace(new RegExp(/\.png/g), '')">
                    <img class="avatar-img" :src="member.avatar" :alt="member.name" />
                </a>
            </figure>
            <div class="data">
                <a v-bind:href="member.avatar.replace(new RegExp(/\.png/g), '')">
                    <h1 class="name">
                        {{ member.name }}
                    </h1>
                </a>
                <p v-if="member.title || member.org" class="affiliation">
                    <span v-if="member.title" class="title">
                        {{ member.title }}
                    </span>
                </p>
                <p v-if="member.desc" class="desc" v-html="member.desc" />
            </div>
        </div>
    </article>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Proza+Libre:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap');

.TeamMembersItem {
    display: flex;
    flex-direction: column;
    gap: 2px;
    border-radius: 12px;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.TeamMembersItem.small .profile {
    padding: 32px;
}

.TeamMembersItem.small .data {
    padding-top: 20px;
}

.TeamMembersItem.small .avatar {
    width: 64px;
    height: 64px;
}

.TeamMembersItem.small .name {
    line-height: 24px;
    font-size: 16px;
    font-family: "Proza Libre", sans-serif;
}

.TeamMembersItem.small .affiliation {
    padding-top: 4px;
    line-height: 20px;
    font-size: 14px;
}

.TeamMembersItem.small .desc {
    padding-top: 12px;
    line-height: 20px;
    font-size: 14px;
}

.profile {
    flex-grow: 1;
    background-color: var(--vp-c-bg-soft);
}

.data {
    text-align: center;
}

.avatar {
    position: relative;
    flex-shrink: 0;
    margin: 0 auto;
    border-radius: 50%;
    box-shadow: var(--vp-shadow-3);
}

.avatar-img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    object-fit: cover;
}

.name {
    margin: 0;
    font-weight: 600;
}

.affiliation {
    margin: 0;
    font-weight: 500;
    color: var(--vp-c-text-2);
}

.desc {
    margin: 0 auto;
}

.desc :deep(a) {
    font-weight: 500;
    color: var(--vp-c-brand-1);
    text-decoration-style: dotted;
    transition: color 0.25s;
}
</style>
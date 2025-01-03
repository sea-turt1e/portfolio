<template>
  <div class="min-h-screen bg-gray-100 text-gray-800">
    <header class="bg-blue-500 text-white p-4 text-center">
      <h1 class="text-3xl font-bold">My Portfolio</h1>
    </header>
    <main class="p-6">
      <ProfileSection />
      <SkillSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectSection />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProfileSection from './components/ProfileSection.vue';
import SkillSection from './components/SkillSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import EducationSection from './components/EducationSection.vue';
import ProjectSection from './components/ProjectSection.vue';

export default defineComponent({
  components: {
    ProfileSection,
    SkillSection,
    ExperienceSection,
    EducationSection,
    ProjectSection,
  },
});
</script>

<style>
body {
  margin: 0;
}
</style>

<template>
  <div id="top" class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            <a href="#top" class="cursor-pointer no-underline hover:underline">
              sea-turt1e's Portfolio
            </a>
          </h1>
          <div class="hidden md:flex space-x-8">
            <a href="#about" class="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" class="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#certifications" class="text-gray-600 hover:text-blue-600 transition-colors">Certifications</a>
            <a href="#experience" class="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#education" class="text-gray-600 hover:text-blue-600 transition-colors">Education</a>
            <a href="#projects" class="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#articles" class="text-gray-600 hover:text-blue-600 transition-colors">Articles</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-24 pb-16 px-6 sm:px-8 lg:px-12">
      <div class="max-w-6xl mx-auto text-center">
        <!-- <div class="mb-8">
          <img 
            src="https://via.placeholder.com/150/4F46E5/FFFFFF?text=YH" 
            alt="Profile" 
            class="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg ring-4 ring-white"
          >
        </div> -->
        <h2 class="text-5xl font-bold text-gray-800 mb-4">
          こんにちは！<br>
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            sea-turt1eです
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          自然言語処理を専門とした機械学習エンジニアとして活動しています。<br>
          他にバックエンドやフロントエンドの開発、インフラの構築なども少々。
        </p>
        <div class="mt-8 flex justify-center space-x-4">
          <a 
            href="https://github.com/sea-turt1e" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg inline-block text-center no-underline"
          >
            GitHubページへ
          </a>
          <a 
            href="mailto:h.yamada.bg@gmail.com?subject=お問い合わせ"
            class="border border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors inline-block text-center no-underline"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
      <div id="about">
        <ProfileSection />
      </div>
      <div id="skills">
        <SkillSection />
      </div>
      <div id="certifications">
        <CertificationSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="education">
        <EducationSection />
      </div>
      <div id="projects">
        <ProjectSection />
      </div>
      <div id="articles">
        <ZennArticleSection />
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12 mt-20">
      <div class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <p class="text-gray-400">© 2025 sea-turt1e. All rights reserved.</p>
        <div class="mt-4 flex justify-center space-x-6">
          <a href="https://github.com/sea-turt1e" class="text-gray-400 hover:text-white transition-colors"  target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://zenn.dev/sea_turt1e" class="text-gray-400 hover:text-white transition-colors"  target="_blank" rel="noopener noreferrer">Zenn</a>
          <!-- <a href="#" class="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">Twitter</a> -->
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CertificationSection from './components/CertificationSection.vue';
import EducationSection from './components/EducationSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import ProfileSection from './components/ProfileSection.vue';
import ProjectSection from './components/ProjectSection.vue';
import SkillSection from './components/SkillSection.vue';
import ZennArticleSection from './components/ZennArticleSection.vue';

export default defineComponent({
  components: {
    ProfileSection,
    SkillSection,
    CertificationSection,
    ExperienceSection,
    EducationSection,
    ProjectSection,
    ZennArticleSection,
  },
});
</script>

<style>
body {
  margin: 0;
}
</style>

import DefaultTheme from 'vitepress/theme'
import GitHubStudyArchive from './components/GitHubStudyArchive.vue'
import GitHubStudyExplorer from './components/GitHubStudyExplorer.vue'
import { setupDiagramControls } from './diagramControls'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router }) {
    DefaultTheme.enhanceApp?.({ app })
    app.component('GitHubStudyArchive', GitHubStudyArchive)
    app.component('GitHubStudyExplorer', GitHubStudyExplorer)
    setupDiagramControls(router)
  }
}


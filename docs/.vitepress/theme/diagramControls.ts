type DiagramState = {
  scale: number
}

const MIN_SCALE = 0.7
const MAX_SCALE = 2.2
const SCALE_STEP = 0.2

function clampScale(scale: number): number {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, Number(scale.toFixed(2))))
}

function updateScale(shell: HTMLElement, state: DiagramState, label: HTMLElement): void {
  shell.style.setProperty('--poket-diagram-scale', String(state.scale))
  label.textContent = `${Math.round(state.scale * 100)}%`
}

function applySvgSizing(mermaidRoot: HTMLElement): void {
  const svg = mermaidRoot.querySelector('svg')
  if (!svg) return

  const viewBox = svg.viewBox?.baseVal
  if (viewBox && viewBox.width > 0 && viewBox.height > 0) {
    svg.style.width = `${viewBox.width}px`
    svg.style.height = `${viewBox.height}px`
  }

  svg.style.maxWidth = 'none'
  svg.style.display = 'block'
}

function createButton(text: string, onClick: () => void): HTMLButtonElement {
  const button = document.createElement('button')
  button.type = 'button'
  button.className = 'poket-diagram-button'
  button.textContent = text
  button.addEventListener('click', onClick)
  return button
}

function enhanceDiagramShell(shell: HTMLElement): void {
  if (shell.dataset.diagramEnhanced === 'true') return

  const mermaidRoot = shell.querySelector<HTMLElement>('.mermaid')
  if (!mermaidRoot) return

  shell.dataset.diagramEnhanced = 'true'

  const state: DiagramState = { scale: 1 }
  const toolbar = document.createElement('div')
  toolbar.className = 'poket-diagram-toolbar'

  const controls = document.createElement('div')
  controls.className = 'poket-diagram-controls'

  const info = document.createElement('div')
  info.className = 'poket-diagram-info'
  info.textContent = '확대/축소 후 가로 스크롤로 자세히 볼 수 있습니다.'

  const scaleLabel = document.createElement('span')
  scaleLabel.className = 'poket-diagram-scale'

  const zoomOut = createButton('-', () => {
    state.scale = clampScale(state.scale - SCALE_STEP)
    updateScale(shell, state, scaleLabel)
  })
  const reset = createButton('100%', () => {
    state.scale = 1
    updateScale(shell, state, scaleLabel)
  })
  const zoomIn = createButton('+', () => {
    state.scale = clampScale(state.scale + SCALE_STEP)
    updateScale(shell, state, scaleLabel)
  })
  const expand = createButton('넓게 보기', () => {
    shell.classList.toggle('is-expanded')
    expand.textContent = shell.classList.contains('is-expanded') ? '원래 크기' : '넓게 보기'
  })

  controls.append(zoomOut, reset, zoomIn, scaleLabel, expand)
  toolbar.append(info, controls)

  const viewport = document.createElement('div')
  viewport.className = 'poket-diagram-viewport'
  const canvas = document.createElement('div')
  canvas.className = 'poket-diagram-canvas'

  mermaidRoot.parentNode?.insertBefore(toolbar, mermaidRoot)
  mermaidRoot.parentNode?.insertBefore(viewport, mermaidRoot)
  viewport.appendChild(canvas)
  canvas.appendChild(mermaidRoot)

  const observer = new MutationObserver(() => {
    applySvgSizing(mermaidRoot)
  })
  observer.observe(mermaidRoot, { childList: true, subtree: true })

  updateScale(shell, state, scaleLabel)
  applySvgSizing(mermaidRoot)
}

function runEnhancement(): void {
  document
    .querySelectorAll<HTMLElement>('.poket-diagram-shell')
    .forEach((shell) => enhanceDiagramShell(shell))
}

function scheduleEnhancement(): void {
  window.requestAnimationFrame(() => {
    runEnhancement()
    window.setTimeout(runEnhancement, 120)
    window.setTimeout(runEnhancement, 400)
  })
}

export function setupDiagramControls(router: { onAfterRouteChange?: (cb: () => void) => void }): void {
  if (typeof window === 'undefined') return

  scheduleEnhancement()

  const bodyObserver = new MutationObserver(() => {
    scheduleEnhancement()
  })
  bodyObserver.observe(document.body, { childList: true, subtree: true })

  router.onAfterRouteChange?.(() => {
    scheduleEnhancement()
  })
}

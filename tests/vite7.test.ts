import { describe, expect, it, vi } from 'vitest'

vi.mock('vite', async () => ({
    ...await vi.importActual<typeof import('vite')>('vite'),
    version: '7.3.6',
}))

describe('vite 7 compatibility', () => {
    it('writes the input under rollupOptions', async () => {
        const { default: wordpress } = await import('../src')
        const plugin = wordpress('resources/js/app.ts')[0]

        const config = plugin.config({}, { command: 'build', mode: 'production' })

        const build = config.build as Record<string, { input?: unknown }|undefined>

        expect(build.rollupOptions?.input).toBe('resources/js/app.ts')
        expect(build.rolldownOptions).toBeUndefined()
    })
})

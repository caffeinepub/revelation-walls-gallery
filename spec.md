# Specification

## Summary
**Goal:** Fix the iframe so it fills the entire screen on mobile devices with no gaps or scrollbars, while keeping the branded bar overlaid on top.

**Planned changes:**
- Set `html`, `body`, and all root/wrapper container elements to have zero margin/padding and no height restrictions (`height: 100%` or `height: 100dvh`).
- Apply `overflow: hidden` on `html` and `body` to prevent scrollbars on the host page.
- Make the iframe use `position: fixed`, `inset: 0`, `width: 100vw`, `height: 100dvh` (with `100vh` fallback) so it covers the full viewport edge-to-edge.
- Reposition the branded bar using `position: fixed` or `absolute` so it overlays on top of the iframe without affecting the iframe's dimensions or height.

**User-visible outcome:** On mobile (iOS and Android), the embedded gallery iframe fills the entire screen edge-to-edge with no blank areas or scrollbars, and the branded bar remains visible overlaid on top.

/// <reference lib="dom" />
import { blog_ctx__new, type root_ctx_T } from '@btakita/domain--any--blog'
export const browser_ctx =
	window.browser_ctx ??= blog_ctx__new()
declare global {
	interface Window {
		browser_ctx:root_ctx_T
	}
}

/// <reference lib="dom" />
import { theme_, theme__toggle } from '@btakita/domain--any--blog'
import { type circular_memo_T, memo_ } from 'rmemo'
import { browser_ctx } from '../ctx/index.ts'
export function theme__toggle_button_c__bind(
	theme__toggle_button_c:HTMLButtonElement&{
		_aria_label$?:circular_memo_T
	}
) {
	theme__toggle_button_c.addEventListener('click', theme__toggle_button__onclick)
	theme__toggle_button_c._aria_label$ = memo_(memo=>{
		theme__toggle_button_c.setAttribute('aria-label', theme_(browser_ctx))
		return memo
	})
	function theme__toggle_button__onclick(evt:Event) {
		evt.preventDefault()
		theme__toggle(browser_ctx)
	}
}

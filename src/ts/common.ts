import { domReady, App, EventListener } from "./xpage/index";
import "./forms.ts";
import "./textPage/text-page.ts";
import "./notificator.ts";

declare global {
	interface Window {
		$: Function;
		is: any;
		requestIdleCallback: Function;
		cancelIdleCallback: Function;
		notificator: any
	}
}
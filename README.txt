UNIQUE CHEATS — PREMIUM WEBSITE PACKAGE

Folder structure:
- index.html
- style.css
- script.js
- assets/profile.jfif       <- supplied profile picture
- assets/background.mp4     <- supplied 4K background video
- songs/                     <- latest supplied four songs

Latest refinements:
- Inner profile name + lock are gold only; the outer UNIQUE CHEATS branding is unchanged.
- Removed the profile card sweep/popup block artifact.
- Background video is more visible while remaining dark enough for readable controls.
- Music paths use the latest four supplied MP3 files.
- Play/pause/next/previous, volume, sequential playback and live remixer visualizer are stabilized.

Open index.html in a browser or upload the whole folder to your static host.


v5 update:
- Loader duration is exactly 3 seconds and transitions automatically at 100% without requiring a touch.
- All previous MP3 files/sources were removed from songs/ and replaced only with the four newly supplied MP3 files.
- First track is preloaded/autoplay-enabled with a muted-autoplay bootstrap, then an immediate audible-play attempt; a user gesture only serves as browser-policy fallback.
- Background video is video-only (no audio stream).


LATEST UPDATE: Discord tag changed to vinay.dll; Discord and YouTube links updated; profile image updated from the supplied image; subtle smoothness and responsive refinements added. Original background video and music files are preserved.


AI ASSISTANT UPDATE:
- Added a gold dragon-style AI Assistant launcher on the main page and product store.
- Added searchable language selector, multilingual chat UI, browser voice input/output where supported, and Discord purchase guidance.
- For genuine generative AI answers, deploy a backend POST endpoint at /api/assistant (or set window.UC_AI_ENDPOINT before ai-assistant.js). It should accept JSON {message, language, brand, context} and return JSON {reply}. Do not place secret API keys in browser JavaScript.
- Without a configured backend, the assistant uses local store-aware fallback replies; language translation quality and voice support depend on browser capabilities.


COMPLETE GOLDEN PACKAGE:
- assets/gold-remixer-preview.gif: animated visual preview for the remixer.
- remixer-assets/gold-remixer-preview.gif: separate copy of the same preview GIF.
- Keep the entire UNQ VINAY PJT folder together so relative HTML/CSS/JS, image, video, and song paths remain intact.
- Open index.html for the main page; products.html opens the product store.
- Note: the GIF is a visual preview only. The live audio-reactive remixer is implemented by the website JavaScript/CSS and requires browser audio playback; the GIF itself cannot react to live sound.

// --- 1. Unique Cheats gold signature loader (2 seconds) ---
document.addEventListener("DOMContentLoaded", () => {
    const loaderLogs = document.getElementById("loader-logs");
    const progressBar = document.getElementById("loader-progress");
    const progressPercentage = document.getElementById("loader-percentage");
    const loaderOverlay = document.getElementById("hacking-loader");
    const statusString = document.getElementById("status-string");
    const bgVideo = document.getElementById("bgVideo");

    // Returning from the product catalog should open the profile page directly.
    if (new URLSearchParams(window.location.search).has("skipLoader")) {
        if (loaderOverlay) {
            loaderOverlay.classList.add("fade-out");
            window.setTimeout(() => { loaderOverlay.style.display = "none"; }, 350);
        }
        if (bgVideo) bgVideo.play().catch(() => {});
        return;
    }

    // Red Matrix Falling Rain Engine
    const canvas = document.getElementById("matrix-canvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const katakana = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890XYZ☠⚡";
        const alphabet = katakana.split("");

        const fontSize = 16;
        const columns = canvas.width / fontSize;

        const rainDrops = [];
        for (let x = 0; x < columns; x++) {
            rainDrops[x] = 1;
        }

        const drawMatrix = () => {
            ctx.fillStyle = "rgba(3, 1, 1, 0.05)"; 
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet[Math.floor(Math.random() * alphabet.length)];
                
                const randColor = Math.random();
                if (randColor < 0.65) ctx.fillStyle = "#d4af37"; 
                else if (randColor < 0.88) ctx.fillStyle = "#72551a"; 
                else ctx.fillStyle = "#ffffff"; 
                
                ctx.font = fontSize + "px 'Share Tech Mono'";
                ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
        };
        setInterval(drawMatrix, 30);
    }

    const terminalSequences = [
        { text: ">> UNIQUE CHEATS / VINAY.DLL", type: "white-text", delay: 80, status: "STARTING PREMIUM UI..." },
        { text: ">> GOLD INTERFACE: ONLINE", type: "purple-text", delay: 420, status: "SYNCING VISUALS..." },
        { text: ">> PROFILE + MEDIA: READY", type: "green-text", delay: 780, status: "LOADING ASSETS..." },
        { text: ">> EXPERIENCE READY. WELCOME IN.", type: "white-text", delay: 1180, status: "ALMOST THERE..." },
        { text: ">> SYSTEM ONLINE ✓", type: "green-text", delay: 1580, status: "READY" }
    ];

    terminalSequences.forEach(seq => {
        setTimeout(() => {
            if (loaderLogs) {
                const line = document.createElement("div");
                line.className = `log-line ${seq.type}`;
                line.innerText = seq.text;
                loaderLogs.appendChild(line);
                loaderLogs.scrollTop = loaderLogs.scrollHeight;
            }
            if (statusString) statusString.innerText = seq.status;
        }, seq.delay);
    });

    let progress = 0;
    const loadingDuration = 2000;
    const intervalTime = 40;
    const startedAt = performance.now();

    const progressInterval = setInterval(() => {
        const elapsed = performance.now() - startedAt;
        const raw = Math.min(1, elapsed / loadingDuration);
        // Smooth ease-out gives the loader a more premium, deliberate finish.
        const eased = 1 - Math.pow(1 - raw, 2.35);
        progress = eased * 100;

        if (progressBar) progressBar.style.width = `${progress}%`;
        if (progressPercentage) progressPercentage.innerText = `${Math.floor(progress)}%`;

        if (raw >= 1) {
            clearInterval(progressInterval);
            if (progressBar) progressBar.style.width = '100%';
            if (progressPercentage) progressPercentage.innerText = '100%';
            setTimeout(() => {
                // The loader must always hand off automatically. Audio startup is attempted
                // independently so a browser autoplay restriction can never keep the loader open.
                if (bgVideo) bgVideo.play().catch(() => {});
                startFirstTrack();
                if (loaderOverlay) loaderOverlay.classList.add("fade-out");
            }, 20);
        }
    }, intervalTime);
});


// --- 2. Advanced Jukebox Playlist System (Masoom Sharma Tracks) ---
const playlist = [
    { name: "Rab Ne Mujhko Bola Ab Tu Mang Le Kuch Bhi", artist: "Uploaded Audio", url: "songs/01-Rab-Ne-Mujhko-Bola-Ab-Tu-Mang-Le-Kuch-Bhi.mp3" },
    { name: "Kaisa Nasha — Afro House x Jazz House x Club Groove", artist: "SANIRA", url: "songs/02-Kaisa-Nasha-Afro-House-x-Jazz-House-x-Club-Groove.mp3" },
    { name: "CSky", artist: "Gurjit Gill ft. Guru Randhawa", url: "songs/03-CSky-Gurjit-Gill-ft-Guru-Randhawa.mp3" },
    { name: "Boom Shaka", artist: "KR$NA ft. Dhanda Nyoliwala", url: "songs/04-Boom-Shaka-KRSNA-Dhanda-Nyoliwala.mp3" }
];

let currentTrackIndex = 0;
const audio = document.getElementById('bgMusic');
const clickSound = document.getElementById('clickSound');
const musicBtn = document.getElementById('musicBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const volUpBtn = document.getElementById('volUpBtn');
const volDownBtn = document.getElementById('volDownBtn');
const trackNameText = document.getElementById('trackName');
const artistNameText = document.getElementById('artistName');
const volumeValue = document.getElementById('volumeValue');
const remixerCanvas = document.getElementById('remixerCanvas');

if (audio) {
    audio.volume = 0.6;
    audio.preload = 'auto';
}
if (volumeValue) volumeValue.innerText = '60%';

function setMusicButton(playing) {
    if (musicBtn) musicBtn.innerHTML = playing ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';
    const deck = document.querySelector('.music-bar');
    if (deck) deck.classList.toggle('audio-active', !!playing);
}

// Live premium remixer: bars react to the actual song amplitude.
let audioContext = null;
let analyser = null;
let sourceNode = null;
let remixerFrame = null;
function initRemixer() {
    if (!audio || !remixerCanvas || sourceNode) return;
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 128;
        analyser.smoothingTimeConstant = 0.78;
        sourceNode = audioContext.createMediaElementSource(audio);
        sourceNode.connect(analyser);
        analyser.connect(audioContext.destination);
    } catch (err) {
        console.log('Remixer visualizer unavailable.');
    }
}
function drawRemixer() {
    if (!remixerCanvas) return;
    const ctx = remixerCanvas.getContext('2d');
    const w = remixerCanvas.width, h = remixerCanvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(255,255,255,0.035)';
    ctx.fillRect(0, 0, w, h);

    const bars = 28;
    const gap = 3;
    const barW = (w - gap * (bars - 1)) / bars;
    let data = new Uint8Array(bars);
    if (analyser) analyser.getByteFrequencyData(data);

    for (let i = 0; i < bars; i++) {
        const sample = analyser ? data[i] / 255 : 0.08 + Math.sin(performance.now() / 500 + i) * 0.025;
        const height = Math.max(3, sample * (h - 7));
        const x = i * (barW + gap);
        const y = h - height;
        const grad = ctx.createLinearGradient(0, y, 0, h);
        grad.addColorStop(0, '#ffdf80');
        grad.addColorStop(1, '#d4af37');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, y, barW, height, 2);
        ctx.fill();
    }
    remixerFrame = requestAnimationFrame(drawRemixer);
}
drawRemixer();

function loadTrack(index, shouldAutoplay = false) {
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    audio.src = playlist[index].url;
    audio.preload = 'auto';
    audio.autoplay = !!shouldAutoplay;
    audio.load();
    if (trackNameText) trackNameText.innerText = playlist[index].name;
    if (artistNameText) artistNameText.innerText = playlist[index].artist;
}

async function startFirstTrack() {
    if (!audio) return false;

    // Start muted first: muted autoplay is permitted by modern browsers.
    // Once the loader finishes, immediately try to unmute and keep the track playing.
    audio.muted = true;
    audio.volume = Math.max(0.01, audio.volume || 0.6);

    try {
        await audio.play();
        setMusicButton(true);
    } catch (err) {
        setMusicButton(false);
        return false;
    }

    // Give the browser one task to establish playback, then request audible playback.
    setTimeout(async () => {
        audio.muted = false;
        try {
            await audio.play();
            autoplayUnlocked = true;
            setMusicButton(true);
        } catch (err) {
            // If the browser requires a user gesture for sound, the gesture handler below
            // will unmute/resume without stopping the track.
            audio.muted = true;
            setMusicButton(true);
        }
    }, 0);

    return true;
}

async function playCurrentTrack() {
    if (!audio) return false;
    try {
        if (audioContext && audioContext.state === 'suspended') {
            try { await audioContext.resume(); } catch (_) {}
        }
        audio.muted = false;
        audio.volume = Math.max(0.01, audio.volume || 0.6);
        await audio.play();
        setMusicButton(true);
        autoplayUnlocked = true;
        return true;
    } catch (err) {
        setMusicButton(false);
        return false;
    }
}

async function triggerMusicStream() {
    if (audio && audio.paused) await startFirstTrack();
}


if (musicBtn) {
    musicBtn.addEventListener('click', async (e) => {
        e.stopPropagation();
        if (!audio) return;
        initRemixer();
        if (audio.paused) {
            await playCurrentTrack();
        } else {
            audio.pause();
            setMusicButton(false);
        }
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', async (e) => {
        e.stopPropagation();
        if (!audio) return;
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        loadTrack(currentTrackIndex);
        await playCurrentTrack();
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', async (e) => {
        e.stopPropagation();
        if (!audio) return;
        currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
        loadTrack(currentTrackIndex);
        await playCurrentTrack();
    });
}

function setVolume(value) {
    if (!audio) return;
    audio.volume = Math.max(0, Math.min(1, Number(value)));
    if (volumeValue) volumeValue.innerText = `${Math.round(audio.volume * 100)}%`;
    document.body.style.setProperty('--music-level', `${Math.round(audio.volume * 100)}%`);
    if (volumeValue) volumeValue.setAttribute('aria-label', `Volume ${Math.round(audio.volume * 100)} percent`);
}
if (volUpBtn && audio) volUpBtn.addEventListener('click', (e) => { e.stopPropagation(); setVolume(audio.volume + 0.1); });
if (volDownBtn && audio) volDownBtn.addEventListener('click', (e) => { e.stopPropagation(); setVolume(audio.volume - 0.1); });

/* Sequential playlist: each supplied track plays fully, then the next starts automatically. */
if (audio) {
    audio.addEventListener('ended', () => {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        loadTrack(currentTrackIndex);
        playCurrentTrack();
    });
}


// Guaranteed user-gesture unlock for browsers that block autoplay.
let autoplayUnlocked = false;
['pointerdown', 'keydown', 'touchstart'].forEach((eventName) => {
    window.addEventListener(eventName, async () => {
        if (!audio) return;
        if (!audio.paused && audio.muted) {
            audio.muted = false;
            try { await audio.play(); } catch (_) {}
            autoplayUnlocked = true;
            setMusicButton(true);
            return;
        }
        if (autoplayUnlocked || !audio.paused) return;
        const started = await playCurrentTrack();
        if (started) autoplayUnlocked = true;
    }, { passive: true });
});

if (audio) {
    audio.addEventListener('play', () => setMusicButton(true));
    audio.addEventListener('pause', () => setMusicButton(false));
    audio.addEventListener('error', () => {
        setMusicButton(false);
        console.warn('Unable to load the current local music file.');
    });
}


// --- 3. Smooth, lightweight cursor trail ---
let lastMouseX = 0;
let lastMouseY = 0;
let lastTrailAt = 0;
window.addEventListener('mousemove', (e) => {
    const distance = Math.hypot(e.clientX - lastMouseX, e.clientY - lastMouseY);
    const now = performance.now();
    // Spawn less often, so the trail feels fluid instead of cluttered.
    if (distance > 34 && now - lastTrailAt > 34) {
        const trailNode = document.createElement('span');
        trailNode.className = 'cursor-trail';
        trailNode.style.left = `${e.clientX}px`;
        trailNode.style.top = `${e.clientY}px`;
        trailNode.textContent = '✦';
        document.body.appendChild(trailNode);
        window.setTimeout(() => trailNode.remove(), 580);
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        lastTrailAt = now;
    }
}, { passive: true });


// --- 4. Hardcoded High Availability State (Always Active Online Mode & Fallback Engine) ---
const DISCORD_ID = "1075791338870349884"; 

async function fetchDiscordStatus() {  
    const dot = document.getElementById('statusDot');
    if(dot) dot.className = 'live-status-dot online';
    
    const avatarImg = document.getElementById('discordAvatar');

    try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
        const resData = await response.json();
        
        if (resData.success && resData.data) {
            const data = resData.data;
            const tagEl = document.getElementById('discordTag');
            if(tagEl) tagEl.innerText = 'vinay.dll';
            
            // Keep the supplied UNIQUE profile image fixed; only Discord text/status may update.
            if (avatarImg) avatarImg.src = "assets/profile.jpg";

            if (data.activities && data.activities.length > 0) {
                const customAct = data.activities.find(act => act.type === 4);
                const statusP = document.getElementById('customStatus');
                if (customAct && customAct.state && statusP) {
                    statusP.innerText = customAct.state;
                }
            }
        }
    } catch (error) {
        console.log("Lanyard API Offline fallback triggered.");
        // Network drop holeo static fallback automatic restore hobe
        if(avatarImg && avatarImg.getAttribute('src') !== 'assets/profile.jpg') {
            avatarImg.src = "assets/profile.jpg";
        }
    }
}

fetchDiscordStatus();
setInterval(fetchDiscordStatus, 15000);

const backgroundVideo = document.getElementById('bgVideo');
if (backgroundVideo) {
    backgroundVideo.play().catch(() => {});
}


const joinServerBtn = document.getElementById('joinServerBtn');
if(joinServerBtn) {
    joinServerBtn.addEventListener('click', () => { window.open('https://discord.gg/qTgxAY4dTR', '_blank'); });
}

/* Premium ambient particles */
(() => {
    const container = document.getElementById("particle-container");
    if (!container) return;
    const count = Math.min(42, Math.max(24, Math.floor(window.innerWidth / 35)));
    for (let i = 0; i < count; i++) {
        const node = document.createElement("span");
        node.className = "floating-particle";
        const size = 2 + Math.random() * 5;
        node.style.width = `${size}px`;
        node.style.height = `${size}px`;
        node.style.left = `${Math.random() * 100}%`;
        node.style.animationDuration = `${7 + Math.random() * 12}s`;
        node.style.animationDelay = `${-Math.random() * 14}s`;
        node.style.opacity = `${0.25 + Math.random() * 0.55}`;
        container.appendChild(node);
    }
})();

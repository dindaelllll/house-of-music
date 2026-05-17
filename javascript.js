function switchGenre(genre, btn) {
    document.querySelectorAll('.genre-list').forEach(function (el) {
        el.style.display = 'none';
        el.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(function (b) {
        b.classList.remove('active');
    });
    const target = document.getElementById('genre-' + genre);
    if (!target) return;
    target.style.display = 'flex';
    target.classList.add('active');
    if (btn) btn.classList.add('active');
}

(function () {
    const pages = document.querySelectorAll('.page');
    if (!pages.length) return;

    let currentPage = 0;
    const songs = [
        'lagu1.mp3',
        'lagu2.mp3',
        'lagu3.mp3'
    ];
    let currentSong = 0;
    const audio = new Audio();

    function showPage(index) {
        currentPage = index;
        pages.forEach((page) => {
            page.classList.remove('active');
        });
        if (pages[index]) {
            pages[index].classList.add('active');
        }
    }

    function nextPage() {
        currentPage++;
        if (currentPage >= pages.length) {
            currentPage = 0;
        }
        showPage(currentPage);
    }

    function prevPage() {
        currentPage--;
        if (currentPage < 0) {
            currentPage = pages.length - 1;
        }
        showPage(currentPage);
    }

    function playMusic(song) {
        audio.src = song;
        audio.play();
        currentSong = songs.indexOf(song);
    }

    function stopMusic() {
        audio.pause();
    }

    function nextSongAudio() {
        currentSong++;
        if (currentSong >= songs.length) {
            currentSong = 0;
        }
        audio.src = songs[currentSong];
        audio.play();
    }

    window.showPage = showPage;
    window.nextPage = nextPage;
    window.prevPage = prevPage;
    window.playMusic = playMusic;
    window.stopMusic = stopMusic;
    window.nextSongAudio = nextSongAudio;
})();

(function () {
    const playlistRoot = document.querySelector('.playlist-wrapper') || document.querySelector('.page-playlist');
    if (!playlistRoot) return;

    const ytLinks = {
        'Cukup Dewasa': 'V-6qtnGXfa8',
        'Risalah Hati': 'PUyujymDUUI',
        'Separuh Aku': 'FT9Wq4FfV18',
        'Dan': 'FiDEwpuXL_Y',
        'Bulan Bintang, Garis Menyilang': 'fF_-kIK5ZVw',
        'Soulmate': '30hXUUNMP-M',
        'Tak Sebebas Merpati': 'dLgnefQIIjc',
        'Cantik': 'ihlji6I5uh4',
        'Senja Teduh Pelita': 'jCKLvilYuv4',
        'Sedari Dulu': '4UgGItVEctA',
        'Pelan-Pelan Saja': 'kW5Vbbffht8',
        'Pupus': 'RErotZrOWpI',
        'Serana': 'l8gfwz04jEQ',
        'Arjuna': 'BpHbPdOld9Q',
        'Duka': '8zwz2fVgfVM',
        'Tamu Undangan': 'wGRPYDwm018',
        'Rasah Bali 2': 'aQd0oq-6Sy8',
        'Sinarengan': 'Dg3AYFlTDH0',
        'Menepi': 'JcgE1O5bdCQ',
        'Sikep': 'hRB9tnFheYk'
    };

    const audioFiles = {
        'Cukup Dewasa': 'asset/music/Cukup Dewasa - Wijaya 80.mpeg',
        'Risalah Hati': 'asset/music/Risalah Hati - Dewa 19.mpeg',
        'Separuh Aku': 'asset/music/Separuh Aku - Noah.mpeg',
        'Dan': 'asset/music/Dan - Sheila On 7.mpeg',
        'Bulan Bintang, Garis Menyilang': 'asset/music/Bulan Bintang, Garis Menyilang - Wijaya 80.mpeg',
        'Soulmate': 'asset/music/soulmate-kahitna.mpeg',
        'Tak Sebebas Merpati': 'asset/music/Tak Sebebas Merpati - Kahitna.mpeg',
        'Cantik': 'asset/music/cantik-kahitna.mpeg',
        'Senja Teduh Pelita': 'asset/music/Senja Teduh Pelita - Maliq & Dessentials.mpeg',
        'Sedari Dulu': 'asset/music/Sedari Dulu - Tompi.mpeg',
        'Pelan-Pelan Saja': 'asset/music/Pelan-Pelan Saja - Kotak.mpeg',
        'Pupus': 'asset/music/Pupus - Dewa 19.mpeg',
        'Serana': 'asset/music/Serana - For Revenge.mpeg',
        'Arjuna': 'asset/music/Arjuna - Dewa 19.mpeg',
        'Duka': 'asset/music/Duka - Last Child.mpeg',
        'Tamu Undangan': 'asset/music/Tamu Undangan - Lavora.mpeg',
        'Rasah Bali 2': 'asset/music/Rasah Bali 2 - Lavora.mpeg',
        'Sinarengan': 'asset/music/Sinarengan - Denny Caknan.mpeg',
        'Menepi': 'asset/music/Menepi - Guyon Waton.mpeg',
        'Sikep': 'asset/music/Sikep - Ndarboy Genk.mpeg'
    };

    const thumbImages = {
        'Cukup Dewasa': 'asset/thumbnail/cukup dewasa.png',
        'Risalah Hati': 'asset/thumbnail/risalah-hati.png',
        'Separuh Aku': 'asset/thumbnail/separuh aku.png',
        'Dan': 'asset/thumbnail/dan.png',
        'Bulan Bintang, Garis Menyilang': 'asset/thumbnail/bulan bintang, garis menyilang.png',
        'Soulmate': 'asset/thumbnail/soulmate.png',
        'Tak Sebebas Merpati': 'asset/thumbnail/tak sebebas merpati.png',
        'Cantik': 'asset/thumbnail/cantik.png',
        'Senja Teduh Pelita': 'asset/thumbnail/senja teduh pelita.png',
        'Sedari Dulu': 'asset/thumbnail/sedari dulu.png',
        'Pelan-Pelan Saja': 'asset/thumbnail/pelan pelan saja.png',
        'Pupus': 'asset/thumbnail/pupus.png',
        'Serana': 'asset/thumbnail/serana.png',
        'Arjuna': 'asset/thumbnail/arjuna.png',
        'Duka': 'asset/thumbnail/duka.png',
        'Tamu Undangan': 'asset/thumbnail/tamu undangan.png',
        'Rasah Bali 2': 'asset/thumbnail/rasah bali 2.png',
        'Sinarengan': 'asset/thumbnail/sinarengan.png',
        'Menepi': 'asset/thumbnail/menepi.png',
        'Sikep': 'asset/thumbnail/sikep.png'
    };

    const genreEmoji = {
        'Pop': '🎵',
        'Jazz': '🎷',
        'Rock': '🎸',
        'Pop Dangdut': '🎤'
    };

    let currentPlayingEl = null;
    let isPlaying = false;
    let isShuffle = false;
    let isRepeat = false;
    let isLiked = false;
    let progressInterval = null;
    let elapsed = 0;
    let currentYtId = '';
    const audioPlayer = new Audio();
    audioPlayer.volume = 0.8;

    let allGenreSongs = [];
    let currentSongIndex = -1;

    function buildGenreSongList() {
        const active = document.querySelector('.genre-list.active');
        if (!active) {
            allGenreSongs = [];
            return;
        }
        allGenreSongs = Array.from(active.querySelectorAll('.song-item'));
    }

    function openPlayer(title, artist, genre, ytId) {
        document.querySelectorAll('.song-item').forEach(el => el.classList.remove('playing'));
        const el = event.currentTarget;
        if (el) {
            el.classList.add('playing');
            currentPlayingEl = el;
        }

        buildGenreSongList();
        currentSongIndex = allGenreSongs.indexOf(el);

        document.getElementById('sheetTitle').textContent = title;
        document.getElementById('sheetArtist').textContent = artist;
        document.getElementById('sheetGenre').textContent = genre;
        document.getElementById('heartBtn').textContent = '♡';
        isLiked = false;

        currentYtId = ytLinks[title] || ytId || '';
        const ytWrap = document.getElementById('ytEmbedWrap');
        const artEmoji = document.getElementById('artEmoji');

        const localThumb = thumbImages[title] || '';
        if (localThumb) {
            ytWrap.innerHTML =
                `<img src="${localThumb}" style="width:100%;height:100%;object-fit:cover;border-radius:20px;" alt="${title}" onerror="this.style.display='none'">`;
            ytWrap.style.display = 'block';
            artEmoji.style.display = 'none';
        } else {
            ytWrap.style.display = 'none';
            ytWrap.innerHTML = '';
            artEmoji.style.display = 'block';
            artEmoji.textContent = genreEmoji[genre] || '🎵';
        }

        const audioSrc = audioFiles[title] || '';
        audioPlayer.pause();
        if (audioSrc) {
            audioPlayer.src = audioSrc;
            audioPlayer.currentTime = 0;
            audioPlayer.play().catch(() => {});
            isPlaying = true;
        } else {
            isPlaying = false;
        }

        audioPlayer.ontimeupdate = function () {
            if (audioPlayer.duration) {
                const pct = (audioPlayer.currentTime / audioPlayer.duration) * 100;
                document.getElementById('progressFill').style.width = pct + '%';
                document.getElementById('timeElapsed').textContent = fmtTime(Math.floor(audioPlayer.currentTime));
                document.getElementById('timeDuration').textContent = fmtTime(Math.floor(audioPlayer.duration));
            }
        };
        audioPlayer.onended = function () {
            if (isRepeat) {
                audioPlayer.currentTime = 0;
                audioPlayer.play();
            } else {
                nextSong();
            }
        };

        document.getElementById('playPauseBtn').textContent = isPlaying ? '⏸' : '▶';
        document.getElementById('iphoneOverlay').classList.add('open');
    }

    function closePlayer() {
        document.getElementById('iphoneOverlay').classList.remove('open');
        document.getElementById('ytEmbedWrap').innerHTML = '';
        document.getElementById('ytEmbedWrap').style.display = 'none';
        document.getElementById('artEmoji').style.display = 'block';
        if (currentPlayingEl) {
            currentPlayingEl.classList.remove('playing');
            currentPlayingEl = null;
        }
        audioPlayer.pause();
        audioPlayer.src = '';
        isPlaying = false;
        stopProgress();
        elapsed = 0;
        document.getElementById('progressFill').style.width = '0%';
        document.getElementById('timeElapsed').textContent = '0:00';
        document.getElementById('timeDuration').textContent = '—';
    }

    function closeOnOverlay(e) {
        if (e.target === document.getElementById('iphoneOverlay')) closePlayer();
    }

    function startProgress() {
        stopProgress();
        elapsed = 0;
        const total = 210;
        document.getElementById('timeDuration').textContent = fmtTime(total);
        progressInterval = setInterval(() => {
            if (!isPlaying) return;
            elapsed++;
            if (elapsed > total) elapsed = 0;
            const pct = (elapsed / total) * 100;
            document.getElementById('progressFill').style.width = pct + '%';
            document.getElementById('timeElapsed').textContent = fmtTime(elapsed);
        }, 1000);
    }

    function stopProgress() {
        if (progressInterval) clearInterval(progressInterval);
        progressInterval = null;
    }

    function fmtTime(s) {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return m + ':' + (sec < 10 ? '0' : '') + sec;
    }

    function getSeekPercent(e, bar) {
        const rect = bar.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        return Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    }

    function applySeek(pct) {
        if (!audioPlayer.duration) return;
        audioPlayer.currentTime = pct * audioPlayer.duration;
        document.getElementById('progressFill').style.width = (pct * 100) + '%';
        document.getElementById('timeElapsed').textContent = fmtTime(Math.floor(audioPlayer.currentTime));
    }

    function seekStart(e) {
        if (!audioPlayer.duration) return;
        const bar = document.getElementById('progressBar');
        bar.classList.add('dragging');
        applySeek(getSeekPercent(e, bar));

        function onMove(ev) {
            applySeek(getSeekPercent(ev, bar));
        }

        function onUp() {
            bar.classList.remove('dragging');
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
        }
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
    }

    function seekTouchStart(e) {
        if (!audioPlayer.duration) return;
        e.preventDefault();
        const bar = document.getElementById('progressBar');
        bar.classList.add('dragging');
        applySeek(getSeekPercent(e, bar));

        function onMove(ev) {
            ev.preventDefault();
            applySeek(getSeekPercent(ev, bar));
        }

        function onEnd() {
            bar.classList.remove('dragging');
            bar.removeEventListener('touchmove', onMove);
            bar.removeEventListener('touchend', onEnd);
        }
        bar.addEventListener('touchmove', onMove, {
            passive: false
        });
        bar.addEventListener('touchend', onEnd);
    }

    function togglePlay() {
        if (audioPlayer.paused) {
            audioPlayer.play().catch(() => {});
            isPlaying = true;
        } else {
            audioPlayer.pause();
            isPlaying = false;
        }
        document.getElementById('playPauseBtn').textContent = isPlaying ? '⏸' : '▶';
    }

    function toggleLike() {
        isLiked = !isLiked;
        document.getElementById('heartBtn').textContent = isLiked ? '❤️' : '♡';
        document.getElementById('heartBtn').classList.toggle('liked', isLiked);
    }

    function toggleShuffle() {
        isShuffle = !isShuffle;
    }

    function toggleRepeat() {
        isRepeat = !isRepeat;
    }

    function setVolume(val) {
        audioPlayer.volume = val / 100;
    }

    function nextSong() {
        if (!allGenreSongs.length) return;
        if (isShuffle) {
            currentSongIndex = Math.floor(Math.random() * allGenreSongs.length);
        } else {
            currentSongIndex = (currentSongIndex + 1) % allGenreSongs.length;
        }
        allGenreSongs[currentSongIndex].click();
    }

    function prevSong() {
        if (!allGenreSongs.length) return;
        currentSongIndex = (currentSongIndex - 1 + allGenreSongs.length) % allGenreSongs.length;
        allGenreSongs[currentSongIndex].click();
    }

    window.openPlayer = openPlayer;
    window.closePlayer = closePlayer;
    window.closeOnOverlay = closeOnOverlay;
    window.seekStart = seekStart;
    window.seekTouchStart = seekTouchStart;
    window.togglePlay = togglePlay;
    window.toggleLike = toggleLike;
    window.toggleShuffle = toggleShuffle;
    window.toggleRepeat = toggleRepeat;
    window.setVolume = setVolume;
    window.nextSong = nextSong;
    window.prevSong = prevSong;

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closePlayer();
    });

    const firstGenre = document.getElementById('genre-pop');
    if (firstGenre) {
        firstGenre.style.display = 'flex';
    }
})();

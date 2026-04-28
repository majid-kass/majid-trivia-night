AUDIO FILES — How to add your own
==================================

Drop MP3/M4A/WAV files into these folders. Filenames must match what
the questions reference in index.html. Defaults are:

audio/music2000s/   →  track-01.mp3 … track-10.mp3
audio/tvthemes/     →  theme-01.mp3 … theme-10.mp3
audio/moviesongs/   →  song-01.mp3  … song-10.mp3

If a file is missing, the audio player just won't play — the question
text and multiple-choice options still work.

To rename or change which file a question uses, open index.html and
search for the category (music2000s, tvthemes, moviesongs). Each
question has an "audio" field you can edit:

  { q: "Name this song!", audio: "audio/music2000s/track-01.mp3",
    options: [...], answer: 0 }

Tip: keep clips short (15–30 seconds) and start at the catchiest part.

AUDIO FILES GO HERE
====================

Each chapter page expects an MP3 file in this folder, named exactly as below.
Generate these using the Edge TTS kit (make_audiobook.py), or with your own
narration, then drop the finished files in here with these exact names:

00_front_matter.mp3
01_chapter_one.mp3
02_chapter_two.mp3
03_chapter_three.mp3
04_chapter_four.mp3
05_chapter_five.mp3
06_chapter_six.mp3
07_chapter_seven.mp3
08_chapter_eight.mp3
09_chapter_nine.mp3
10_chapter_ten.mp3
11_chapter_eleven.mp3
12_conclusion.mp3

Until a file is added, that chapter's page will show
"Audio not yet added" instead of a broken player — the site works
fine for reading in the meantime.

Large files: if your host has an upload size limit, consider hosting the
MP3s on a service like Amazon S3, Backblaze B2, or SoundCloud and changing
the <source src="..."> line in each chapter's HTML file to point there
instead of a local file.

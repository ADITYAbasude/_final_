# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

FFMPEG cmd:

```bash
ffmpeg -i "http://192.168.0.119:8080/video"   -preset veryfast -c:v libx264 -crf 23 -c:a aac -ar 44100 -b:a 96k   -f hls -hls_time 2 -hls_list_size 3 -hls_flags delete_segments+append_list   public/stream/stream.m3u8
```


FFPLAY cmd:

```bash
ffplay "http://192.168.0.119:8080/video"
```
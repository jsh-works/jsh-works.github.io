# 🌟강의목록 웹뷰영역 리스트 오류 수정

### 수정사항 (ver. 2025.06.12)

#### 영상 제목 글자 높이 수정 (line-height:1.2 → 1.5)
[app_common.css](app_common.css) : 163
```
.search-result-contents .contents-tlt > p {
  line-height: 1.5;
}
```


#### media all and (max-width:250px) 추가
[app_common.css](app_common.css) : 875
```
@media all and (max-width:250px) { .container { padding: 2.5rem 1rem 3.5rem; } .search-result-contents .contents-tlt .tit-area > p { font-size: 1.1rem; line-height: 1.5;} .contents-player-wrap > .tit { font-size: 1rem; }}
```


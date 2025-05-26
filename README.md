# 🌟EBS 프로젝트 웹 퍼블리셔 채널

생성자 : 하재상  
Version.20250514 / 0.0.1

안녕하세요, 웹 퍼블리셔 여러분  
담당하시는 작업들을 기준으로 폴더를 `프로젝트 이름`으로 생성 하시고  
작업 부탁드립니다.


### MenuList Commit 방법 소개
1. 작업 프로젝트에 관련된 사항은, `MenuList.json` 파일에,
key-value 방식으로 작성하면 자동으로 들어갑니다.
2. main 브랜치에 커밋하여 푸쉬하시면, ci/cd 자동배포 완료됩니다.
3. 반영서버 Url : [https://jsh-works.github.io/](https://jsh-works.github.io/)


### Git-flow Branch 전략
```
  main : master, main 브랜치 입니다.
  featre/prject : 담당하시는 프로젝트 브랜치입니다.
```
- 각 담당자들께서는 feature/`prj-projectName` 명으로, 브랜치를 생성하고
작업하시고, `main`브랜치에서 각 feature/`project` 브랜치를 merge하시면 됩니다.


### Commit Message 규칙

|타입|내용|
|:---|:---|
|feat|새로운 기능에 대한 커밋|
|fix|버그 수정에 대한 커밋|
|build|빌드 관련 파일 수정 / 모듈 설치 또는 삭제에 대한 커밋|
|chore|그 외 자잘한 수정에 대한 커밋|
|ci|ci 관련 설정 수정에 대한 커밋|
|docs|문서 수정에 대한 커밋|
|style|코드 스타일 혹은 포맷 등에 관한 커밋|
|refactor|코드 리팩토링에 대한 커밋|
|test|테스트 코드 수정에 대한 커밋|
|perf|성능 개선에 대한 커밋|

예) `feat : prj-storybook ui 기능 개선`


### Tag Push Label 규칙
```
예) 메인 브랜치에 업로드 할때 : v20250526, origin push
```
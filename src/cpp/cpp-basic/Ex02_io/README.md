# [C++ 한글 입출력 방법]

## [1] VSCODE에서 VS 컴파일러를 사용

1. x64 Native Tools Command Prompt for VS 2022 Preview 실행(프롬프트)
2. prompt 에서 해당 경로로 vscode 실행, .vscode 안에 기존 파일들 삭제  
3. VSCODE edit config 에서 컴파일러 경로 cl.exe 확인, 설정 시 .vscode_msvc 디렉토리의 3개의 파일 확인(c_cpp_properties.json, launch.json, tasks.json)
4. c_cpp_properties.json 에서 compile path 확인

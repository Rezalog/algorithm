[cpp-basic : C++ 기초]

[1] 환경 설정

- Windows
 1. 컴파일러 설치
 -  https://code.visualstudio.com/docs/languages/cpp 에서 컴파일러 mingw64 설치를 위한 msys64 설치
 - minsys 설치 후 popup 되는 터미널에서 
 pacman -S --needed base-devel mingw-w64-x86_64-toolchain 
 명령어로 mingw-w64 설치(컴파일러)
 - 디폴트 설치 후 g++ -v 명령어로 확인
 - 시스템 환경변수 path에 C:/msys64/mingw64/bin 추가

 2. VSCode 및 Extension 설치
 - VSCode 설치 후 접속, C/C++ 설치
 - Command Palette 에서 C++ edit configuration UI 접속 후 Compile path를 디폴트로 설정된 VSCode 컴파일러가 아닌 설치한 mingw64의 g++.exe 로 변경
 - C, C++ 는 모두 17로 표준 설정

 3. Tasks 설정 
 4. Launch 설정

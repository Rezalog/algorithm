#include <iostream>     // iostream을 헤더를 포함(include)

using namespace std;    // namesapce 설명 std:cout, std:endl

int main() { // 함수의 헤더, main 은 운영체제가 가장 먼저 실행하는 entry point 임을 의미
    cout << "CPP Basic Learn" << endl; // << 는 stream insert operator

    return 0;
}

/**
 * 1. 확장(Extension) 설치
 * 2. C/C++ Edit Configuration 설정
 * 3. Tasks 설정
 * 4. Launch 설정
 * 
 * g++ main.cpp -o Ex01.exe
 * => g++ 컴파일러로 현재 main.cpp 를 Ex01.exe 파일로 만들겠다(exe는 리눅스에서 생략 가능)
 * => Ex01.exe 파일이 생성되면 ./Ex01.exe 명령어로 실행
 * (git bash로 실행시 segmentation fault 발생, PS로 실행)
 * 
 * ※ 실행시 "segmentation fault" 오류의 경우
 * 
 * - 원인
 * 1. null 값을 가리키는 포인터에 접근할 때
 * 2. 할당 받은 메모리 공간을 넘은 곳을 접근할 대
 * 3. 더 이상 존재하지 않는 메모리 영역을 가리킬 경우
 * 4. read-only 표시 메모리 영역에 쓰려고 할 경우
 * 
 */
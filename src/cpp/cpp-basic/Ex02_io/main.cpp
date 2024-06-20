#include <iostream> // iostream 이라는 헤더를 포함

using namespace std; // 네임스페이스 설명 std::cout

int main()
{
    // cout << "CPP Basic" << endl;
    // printf("printf test string");
    char user_input[100]; // 문자의 배열, 즉 문자열로 받을 변수명을 지정
    cin >> user_input; // 입력받은 문자열을 string 으로 저장
    cout << "out : " << user_input; // 그대로 출력

    return 0;
}

/**
 * [C++ 한글 입출력 방법]
 * 
 */
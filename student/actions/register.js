//action
//我们这里并没有使用const来声明常量，实际生产中不推荐像下面这样做
export function checkName() {
    return {
        type: 'CHECK_NAME'
    }
}


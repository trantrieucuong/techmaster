// Hàm tìm chuỗi có độ dài lớn nhất từ một mảng chuỗi
function getStringHasMaxLength(strings) {
    const maxLength = Math.max(...strings.map(str => str.length)); // Tìm độ dài lớn nhất
    return strings.filter(str => str.length === maxLength); // Lọc chuỗi có độ dài bằng độ dài lớn nhất
}

// Hàm lọc users theo tiêu chí: age > 25 và isStatus = true
function filterUsersByCriteria(users) {
    return users.filter(user => user.age > 25 && user.isStatus); // Lọc users theo tiêu chí
}

// Hàm sắp xếp users theo age tăng dần
function sortUsersByAge(users) {
    return users.slice().sort((a, b) => a.age - b.age); // Sắp xếp users theo age tăng dần
}

// Hàm đếm số lần xuất hiện của mỗi phần tử trong mảng chuỗi
function getCountElement(strings) {
    const count = {};
    strings.forEach(str => {
        count[str] = (count[str] || 0) + 1; // Đếm số lần xuất hiện của mỗi phần tử
    });
    return count;
}

// Mảng các users
const users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
];

// Hàm kiểm tra Bài 1
function checkBai1() {
    const result = getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']); // Gọi hàm để tìm chuỗi có độ dài lớn nhất
    document.getElementById('resultBai1').innerHTML = JSON.stringify(result); // Hiển thị kết quả lên HTML
}

// Hàm kiểm tra Bài 2a
function checkBai2a() {
    const filteredUsers = filterUsersByCriteria(users); // Gọi hàm để lọc users theo tiêu chí
    document.getElementById('resultBai2a').innerHTML = JSON.stringify(filteredUsers); // Hiển thị kết quả lên HTML
}

// Hàm kiểm tra Bài 2b
function checkBai2b() {
    const sortedUsers = sortUsersByAge(users); // Gọi hàm để sắp xếp users theo age tăng dần
    document.getElementById('resultBai2b').innerHTML = JSON.stringify(sortedUsers); // Hiển thị kết quả lên HTML
}

// Hàm kiểm tra Bài 3
function checkBai3() {
    const resultCount = getCountElement(["one", "two", "three", "one", "one", "three"]); // Gọi hàm để đếm số lần xuất hiện của mỗi phần tử
    document.getElementById('resultBai3').innerHTML = JSON.stringify(resultCount); // Hiển thị kết quả lên HTML
}
